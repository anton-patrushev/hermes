/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {NODE_FIELDS, NODE_PARENT_VALIDATIONS} from '../definitions';

export default function validate(
  node: t.Node | undefined | null,
  key: string,
  val: any,
): void {
  // TODO: Implement validators
  // if (!node) return;
  // const fields = NODE_FIELDS[node.type];
  // if (!fields) return;
  // const field = fields[key];
  // validateField(node, key, val, field);
  // validateChild(node, key, val);
}

export function validateField(
  node: t.Node | undefined | null,
  key: string,
  val: any,
  field: any,
): void {
  // TODO: Implement validators
  // if (!field?.validate) return;
  // if (field.optional && val == null) return;
  // field.validate(node, key, val);
}

export function validateChild(
  node: t.Node | undefined | null,
  key: string,
  val?: any,
): void {
  // TODO: Implement validators
  // if (val == null) return;
  // const validate = NODE_PARENT_VALIDATIONS[val.type];
  // if (!validate) return;
  // validate(node, key, val);
}
