/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

use juno::ast::*;

/// Create a node with a default source range for testing.
/// Use a macro to make it easier to construct nested macros
/// by spiltting mutable borrows of the context.
/// Necessary because Rust doesn't yet support "two phase borrows" where
/// we can borrow `ctx` for just the evaluation of an argument and not
/// for the entire duration of the call.
macro_rules! make_node {
    ($ctx:expr, $kind:expr $(,)?) => {{
        let node = $kind;
        $ctx.alloc(node)
    }};
}

mod validate;

#[test]
#[allow(clippy::float_cmp)]
fn test_visit() {
    let mut ctx = Context::new();
    // Dummy range, we don't care about ranges in this test.
    let range = SourceRange {
        file: 0,
        start: SourceLoc { line: 1, col: 1 },
        end: SourceLoc { line: 1, col: 1 },
    };
    let ast = make_node!(
        ctx,
        Node::BlockStatement(BlockStatement {
            range,
            body: vec![
                make_node!(
                    ctx,
                    Node::ExpressionStatement(ExpressionStatement {
                        range,
                        expression: make_node!(
                            ctx,
                            Node::NumericLiteral(NumericLiteral { range, value: 1.0 }),
                        ),
                        directive: None,
                    }),
                ),
                make_node!(
                    ctx,
                    Node::ExpressionStatement(ExpressionStatement {
                        range,
                        expression: make_node!(
                            ctx,
                            Node::NumericLiteral(NumericLiteral { range, value: 2.0 }),
                        ),
                        directive: None,
                    }),
                ),
            ],
        }),
    );

    // Accumulates the numbers found in the AST.
    struct NumberFinder {
        acc: Vec<f64>,
    }

    impl Visitor for NumberFinder {
        fn call(&mut self, ctx: &Context, node: NodePtr, parent: Option<NodePtr>) {
            if let Node::NumericLiteral(NumericLiteral { value, .. }) = &node.get(ctx) {
                assert!(matches!(
                    parent.unwrap().get(ctx),
                    Node::ExpressionStatement(ExpressionStatement { .. })
                ));
                self.acc.push(*value);
            }
            node.visit_children(ctx, self);
        }
    }

    let mut visitor = NumberFinder { acc: vec![] };
    ast.visit(&ctx, &mut visitor, None);
    assert_eq!(visitor.acc, [1.0, 2.0]);
}
