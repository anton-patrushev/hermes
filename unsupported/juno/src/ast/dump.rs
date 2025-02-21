/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

use super::{
    AssignmentExpressionOperator, BinaryExpressionOperator, Context, ExportKind, ImportKind,
    LogicalExpressionOperator, MethodDefinitionKind, NodeLabel, NodeList, NodePtr, NodeString,
    PropertyKind, UnaryExpressionOperator, UpdateExpressionOperator, VariableDeclarationKind,
};
use std::io::{self, Write};
use support::{case::ascii_snake_to_camel, json::*};

pub use support::json::Pretty;

/// Generate boilerplate code for the `NodeKind` enum.
macro_rules! gen_dumper {
    ($name:ident {
        $(
            $kind:ident $([ $parent:ident ])? $({
                $(
                    $field:ident : $type:ty
                    $( [ $( $constraint:ident ),* ] )?
                ),*
                $(,)?
            })?
        ),*
        $(,)?
    }) => {
        fn dump_node<W: Write>(ctx: &Context, node: NodePtr, emitter: &mut JSONEmitter<W>) {
            use crate::ast::*;
            emitter.open_dict();
            emitter.emit_key("type");
            emitter.emit_string(node.get(ctx).name());
            match &node.get(ctx) {
                $(
                    Node::$kind($kind {$($($field,)*)? .. }) => {
                        $($(
                            emitter.emit_key(&ascii_snake_to_camel(stringify!($field)));
                            $field.dump(ctx, emitter);
                        )*)?
                    }
                ),*
            }
            emitter.close_dict();
        }
    }
}

nodekind_defs! { gen_dumper }

trait DumpChild {
    fn dump<W: Write>(&self, ctx: &Context, emitter: &mut JSONEmitter<W>);
}

impl DumpChild for f64 {
    fn dump<W: Write>(&self, _ctx: &Context, emitter: &mut JSONEmitter<W>) {
        emitter.emit_number(*self);
    }
}

impl DumpChild for bool {
    fn dump<W: Write>(&self, _ctx: &Context, emitter: &mut JSONEmitter<W>) {
        emitter.emit_bool(*self);
    }
}

impl DumpChild for NodeLabel {
    fn dump<W: Write>(&self, _ctx: &Context, emitter: &mut JSONEmitter<W>) {
        emitter.emit_string(&self.str);
    }
}

impl DumpChild for UnaryExpressionOperator {
    fn dump<W: Write>(&self, _ctx: &Context, emitter: &mut JSONEmitter<W>) {
        emitter.emit_string(self.as_str());
    }
}

impl DumpChild for BinaryExpressionOperator {
    fn dump<W: Write>(&self, _ctx: &Context, emitter: &mut JSONEmitter<W>) {
        emitter.emit_string(self.as_str());
    }
}

impl DumpChild for LogicalExpressionOperator {
    fn dump<W: Write>(&self, _ctx: &Context, emitter: &mut JSONEmitter<W>) {
        emitter.emit_string(self.as_str());
    }
}

impl DumpChild for UpdateExpressionOperator {
    fn dump<W: Write>(&self, _ctx: &Context, emitter: &mut JSONEmitter<W>) {
        emitter.emit_string(self.as_str());
    }
}

impl DumpChild for AssignmentExpressionOperator {
    fn dump<W: Write>(&self, _ctx: &Context, emitter: &mut JSONEmitter<W>) {
        emitter.emit_string(self.as_str());
    }
}

impl DumpChild for VariableDeclarationKind {
    fn dump<W: Write>(&self, _ctx: &Context, emitter: &mut JSONEmitter<W>) {
        emitter.emit_string(self.as_str());
    }
}

impl DumpChild for PropertyKind {
    fn dump<W: Write>(&self, _ctx: &Context, emitter: &mut JSONEmitter<W>) {
        emitter.emit_string(self.as_str());
    }
}

impl DumpChild for MethodDefinitionKind {
    fn dump<W: Write>(&self, _ctx: &Context, emitter: &mut JSONEmitter<W>) {
        emitter.emit_string(self.as_str());
    }
}

impl DumpChild for ImportKind {
    fn dump<W: Write>(&self, _ctx: &Context, emitter: &mut JSONEmitter<W>) {
        emitter.emit_string(self.as_str());
    }
}

impl DumpChild for ExportKind {
    fn dump<W: Write>(&self, _ctx: &Context, emitter: &mut JSONEmitter<W>) {
        emitter.emit_string(self.as_str());
    }
}

impl DumpChild for NodeString {
    fn dump<W: Write>(&self, _ctx: &Context, emitter: &mut JSONEmitter<W>) {
        emitter.emit_string_literal(&self.str);
    }
}

impl<T: DumpChild> DumpChild for Option<T> {
    fn dump<W: Write>(&self, ctx: &Context, emitter: &mut JSONEmitter<W>) {
        match self {
            None => emitter.emit_null(),
            Some(t) => t.dump(ctx, emitter),
        };
    }
}

impl DumpChild for NodePtr {
    fn dump<W: Write>(&self, ctx: &Context, emitter: &mut JSONEmitter<W>) {
        dump_node(ctx, *self, emitter);
    }
}

impl DumpChild for NodeList {
    fn dump<W: Write>(&self, ctx: &Context, emitter: &mut JSONEmitter<W>) {
        emitter.open_array();
        for &elem in self {
            dump_node(ctx, elem, emitter);
        }
        emitter.close_array();
    }
}

pub fn dump_json<W: Write>(
    writer: W,
    ctx: &Context,
    root: NodePtr,
    pretty: Pretty,
) -> io::Result<()> {
    let mut emitter = JSONEmitter::new(writer, pretty);
    dump_node(ctx, root, &mut emitter);
    emitter.end()
}
