/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/**
 * Alias AST defintions
 *
 * Aliases are used to allow users to match a group of AST nodes at once. Aliases are used internally
 * by the `is` validator as well as getting specific matches codegenned.
 * e.g. The definition `ArrayExpression: ['Expression']` means that to match an ArrayExpression both
 * the specific `t.ArrayExpression(node)` matcher could be used as well as the general
 * `t.Expression(node)` matcher (even though `Expression` is not an AST node).
 *
 * TODO:
 *  - Remove TS support.
 *  - Rename "Property" alias, ESTree has a "Property" AST node.
 */
module.exports = {
  ArrayExpression: ['Expression'],
  AssignmentExpression: ['Expression'],
  BinaryExpression: ['Binary', 'Expression'],
  BlockStatement: ['Scopable', 'BlockParent', 'Block', 'Statement'],
  BreakStatement: ['Statement', 'Terminatorless', 'CompletionStatement'],
  CallExpression: ['Expression'],
  CatchClause: ['Scopable', 'BlockParent'],
  ConditionalExpression: ['Expression', 'Conditional'],
  ContinueStatement: ['Statement', 'Terminatorless', 'CompletionStatement'],
  DebuggerStatement: ['Statement'],
  DoWhileStatement: ['Statement', 'BlockParent', 'Loop', 'While', 'Scopable'],
  EmptyStatement: ['Statement'],
  ExpressionStatement: ['Statement', 'ExpressionWrapper'],
  ForInStatement: [
    'Scopable',
    'Statement',
    'For',
    'BlockParent',
    'Loop',
    'ForXStatement',
  ],
  ForStatement: ['Scopable', 'Statement', 'For', 'BlockParent', 'Loop'],
  FunctionDeclaration: [
    'Scopable',
    'Function',
    'BlockParent',
    'FunctionParent',
    'Statement',
    'Pureish',
    'Declaration',
  ],
  FunctionExpression: [
    'Scopable',
    'Function',
    'BlockParent',
    'FunctionParent',
    'Expression',
    'Pureish',
  ],
  Identifier: ['Expression', 'PatternLike', 'LVal', 'TSEntityName'],
  IfStatement: ['Statement', 'Conditional'],
  LabeledStatement: ['Statement'],
  StringLiteral: ['Expression', 'Pureish', 'Literal', 'Immutable'],
  NumericLiteral: ['Expression', 'Pureish', 'Literal', 'Immutable'],
  NullLiteral: ['Expression', 'Pureish', 'Literal', 'Immutable'],
  BooleanLiteral: ['Expression', 'Pureish', 'Literal', 'Immutable'],
  RegExpLiteral: ['Expression', 'Pureish', 'Literal'],
  LogicalExpression: ['Binary', 'Expression'],
  MemberExpression: ['Expression', 'LVal'],
  NewExpression: ['Expression'],
  Program: ['Scopable', 'BlockParent', 'Block'],
  ObjectExpression: ['Expression'],
  ObjectMethod: [
    'UserWhitespacable',
    'Function',
    'Scopable',
    'BlockParent',
    'FunctionParent',
    'Method',
    'ObjectMember',
  ],
  ObjectProperty: [
    'UserWhitespacable',
    //   "Property",
    'ObjectMember',
  ],
  RestElement: ['LVal', 'PatternLike'],
  ReturnStatement: ['Statement', 'Terminatorless', 'CompletionStatement'],
  SequenceExpression: ['Expression'],
  ParenthesizedExpression: ['Expression', 'ExpressionWrapper'],
  SwitchStatement: ['Statement', 'BlockParent', 'Scopable'],
  ThisExpression: ['Expression'],
  ThrowStatement: ['Statement', 'Terminatorless', 'CompletionStatement'],
  TryStatement: ['Statement'],
  UnaryExpression: ['UnaryLike', 'Expression'],
  UpdateExpression: ['Expression'],
  VariableDeclaration: ['Statement', 'Declaration'],
  WhileStatement: ['Statement', 'BlockParent', 'Loop', 'While', 'Scopable'],
  WithStatement: ['Statement'],
  AssignmentPattern: ['Pattern', 'PatternLike', 'LVal'],
  ArrayPattern: ['Pattern', 'PatternLike', 'LVal'],
  ArrowFunctionExpression: [
    'Scopable',
    'Function',
    'BlockParent',
    'FunctionParent',
    'Expression',
    'Pureish',
  ],
  ClassExpression: ['Scopable', 'Class', 'Expression'],
  ClassDeclaration: ['Scopable', 'Class', 'Statement', 'Declaration'],
  ExportAllDeclaration: [
    'Statement',
    'Declaration',
    'ModuleDeclaration',
    'ExportDeclaration',
  ],
  ExportDefaultDeclaration: [
    'Statement',
    'Declaration',
    'ModuleDeclaration',
    'ExportDeclaration',
  ],
  ExportNamedDeclaration: [
    'Statement',
    'Declaration',
    'ModuleDeclaration',
    'ExportDeclaration',
  ],
  ExportSpecifier: ['ModuleSpecifier'],
  ForOfStatement: [
    'Scopable',
    'Statement',
    'For',
    'BlockParent',
    'Loop',
    'ForXStatement',
  ],
  ImportDeclaration: ['Statement', 'Declaration', 'ModuleDeclaration'],
  ImportDefaultSpecifier: ['ModuleSpecifier'],
  ImportNamespaceSpecifier: ['ModuleSpecifier'],
  ImportSpecifier: ['ModuleSpecifier'],
  MetaProperty: ['Expression'],
  ClassMethod: [
    'Function',
    'Scopable',
    'BlockParent',
    'FunctionParent',
    'Method',
  ],
  ObjectPattern: ['Pattern', 'PatternLike', 'LVal'],
  SpreadElement: ['UnaryLike'],
  Super: ['Expression'],
  TaggedTemplateExpression: ['Expression'],
  TemplateLiteral: ['Expression', 'Literal'],
  YieldExpression: ['Expression', 'Terminatorless'],
  AwaitExpression: ['Expression', 'Terminatorless'],
  Import: ['Expression'],
  BigIntLiteral: ['Expression', 'Pureish', 'Literal', 'Immutable'],
  ExportNamespaceSpecifier: ['ModuleSpecifier'],
  OptionalMemberExpression: ['Expression'],
  OptionalCallExpression: ['Expression'],
  ClassProperty: [
    //   "Property"
  ],
  ClassPrivateProperty: [
    //   "Property",
    'Private',
  ],
  ClassPrivateMethod: [
    'Function',
    'Scopable',
    'BlockParent',
    'FunctionParent',
    'Method',
    'Private',
  ],
  PrivateName: ['Private'],
  AnyTypeAnnotation: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
  ArrayTypeAnnotation: ['Flow', 'FlowType'],
  BooleanTypeAnnotation: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
  BooleanLiteralTypeAnnotation: ['Flow', 'FlowType'],
  NullLiteralTypeAnnotation: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
  ClassImplements: ['Flow'],
  DeclareClass: ['Flow', 'FlowDeclaration', 'Statement', 'Declaration'],
  DeclareFunction: ['Flow', 'FlowDeclaration', 'Statement', 'Declaration'],
  DeclareInterface: ['Flow', 'FlowDeclaration', 'Statement', 'Declaration'],
  DeclareModule: ['Flow', 'FlowDeclaration', 'Statement', 'Declaration'],
  DeclareModuleExports: ['Flow', 'FlowDeclaration', 'Statement', 'Declaration'],
  DeclareTypeAlias: ['Flow', 'FlowDeclaration', 'Statement', 'Declaration'],
  DeclareOpaqueType: ['Flow', 'FlowDeclaration', 'Statement', 'Declaration'],
  DeclareVariable: ['Flow', 'FlowDeclaration', 'Statement', 'Declaration'],
  DeclareExportDeclaration: [
    'Flow',
    'FlowDeclaration',
    'Statement',
    'Declaration',
  ],
  DeclareExportAllDeclaration: [
    'Flow',
    'FlowDeclaration',
    'Statement',
    'Declaration',
  ],
  DeclaredPredicate: ['Flow', 'FlowPredicate'],
  ExistsTypeAnnotation: ['Flow', 'FlowType'],
  FunctionTypeAnnotation: ['Flow', 'FlowType'],
  FunctionTypeParam: ['Flow'],
  GenericTypeAnnotation: ['Flow', 'FlowType'],
  InferredPredicate: ['Flow', 'FlowPredicate'],
  InterfaceExtends: ['Flow'],
  InterfaceDeclaration: ['Flow', 'FlowDeclaration', 'Statement', 'Declaration'],
  InterfaceTypeAnnotation: ['Flow', 'FlowType'],
  IntersectionTypeAnnotation: ['Flow', 'FlowType'],
  MixedTypeAnnotation: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
  EmptyTypeAnnotation: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
  NullableTypeAnnotation: ['Flow', 'FlowType'],
  NumberLiteralTypeAnnotation: ['Flow', 'FlowType'],
  NumberTypeAnnotation: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
  ObjectTypeAnnotation: ['Flow', 'FlowType'],
  ObjectTypeInternalSlot: ['Flow', 'UserWhitespacable'],
  ObjectTypeCallProperty: ['Flow', 'UserWhitespacable'],
  ObjectTypeIndexer: ['Flow', 'UserWhitespacable'],
  ObjectTypeProperty: ['Flow', 'UserWhitespacable'],
  ObjectTypeSpreadProperty: ['Flow', 'UserWhitespacable'],
  OpaqueType: ['Flow', 'FlowDeclaration', 'Statement', 'Declaration'],
  QualifiedTypeIdentifier: ['Flow'],
  StringLiteralTypeAnnotation: ['Flow', 'FlowType'],
  StringTypeAnnotation: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
  SymbolTypeAnnotation: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
  ThisTypeAnnotation: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
  TupleTypeAnnotation: ['Flow', 'FlowType'],
  TypeofTypeAnnotation: ['Flow', 'FlowType'],
  TypeAlias: ['Flow', 'FlowDeclaration', 'Statement', 'Declaration'],
  TypeAnnotation: ['Flow'],
  TypeCastExpression: ['Flow', 'ExpressionWrapper', 'Expression'],
  TypeParameter: ['Flow'],
  TypeParameterDeclaration: ['Flow'],
  TypeParameterInstantiation: ['Flow'],
  UnionTypeAnnotation: ['Flow', 'FlowType'],
  Variance: ['Flow'],
  VoidTypeAnnotation: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
  EnumDeclaration: ['Statement', 'Declaration'],
  EnumBooleanBody: ['EnumBody'],
  EnumNumberBody: ['EnumBody'],
  EnumStringBody: ['EnumBody'],
  EnumSymbolBody: ['EnumBody'],
  EnumBooleanMember: ['EnumMember'],
  EnumNumberMember: ['EnumMember'],
  EnumStringMember: ['EnumMember'],
  EnumDefaultedMember: ['EnumMember'],
  IndexedAccessType: ['Flow', 'FlowType'],
  OptionalIndexedAccessType: ['Flow', 'FlowType'],
  JSXAttribute: ['JSX', 'Immutable'],
  JSXClosingElement: ['JSX', 'Immutable'],
  JSXElement: ['JSX', 'Immutable', 'Expression'],
  JSXEmptyExpression: ['JSX'],
  JSXExpressionContainer: ['JSX', 'Immutable'],
  JSXSpreadChild: ['JSX', 'Immutable'],
  JSXIdentifier: ['JSX'],
  JSXMemberExpression: ['JSX'],
  JSXNamespacedName: ['JSX'],
  JSXOpeningElement: ['JSX', 'Immutable'],
  JSXSpreadAttribute: ['JSX'],
  JSXText: ['JSX', 'Immutable'],
  JSXFragment: ['JSX', 'Immutable', 'Expression'],
  JSXOpeningFragment: ['JSX', 'Immutable'],
  JSXClosingFragment: ['JSX', 'Immutable'],
  BindExpression: ['Expression'],
  DoExpression: ['Expression'],
  ExportDefaultSpecifier: ['ModuleSpecifier'],
  RecordExpression: ['Expression'],
  TupleExpression: ['Expression'],
  DecimalLiteral: ['Expression', 'Pureish', 'Literal', 'Immutable'],
  StaticBlock: ['Scopable', 'BlockParent'],
  ModuleExpression: ['Expression'],
  TopicReference: ['Expression'],
  PipelineTopicExpression: ['Expression'],
  PipelineBareFunction: ['Expression'],
  PipelinePrimaryTopicReference: ['Expression'],
  TSParameterProperty: ['LVal'],
  TSDeclareFunction: ['Statement', 'Declaration'],
  TSQualifiedName: ['TSEntityName'],
  TSCallSignatureDeclaration: ['TSTypeElement'],
  TSConstructSignatureDeclaration: ['TSTypeElement'],
  TSPropertySignature: ['TSTypeElement'],
  TSMethodSignature: ['TSTypeElement'],
  TSIndexSignature: ['TSTypeElement'],
  TSAnyKeyword: ['TSType', 'TSBaseType'],
  TSBooleanKeyword: ['TSType', 'TSBaseType'],
  TSBigIntKeyword: ['TSType', 'TSBaseType'],
  TSIntrinsicKeyword: ['TSType', 'TSBaseType'],
  TSNeverKeyword: ['TSType', 'TSBaseType'],
  TSNullKeyword: ['TSType', 'TSBaseType'],
  TSNumberKeyword: ['TSType', 'TSBaseType'],
  TSObjectKeyword: ['TSType', 'TSBaseType'],
  TSStringKeyword: ['TSType', 'TSBaseType'],
  TSSymbolKeyword: ['TSType', 'TSBaseType'],
  TSUndefinedKeyword: ['TSType', 'TSBaseType'],
  TSUnknownKeyword: ['TSType', 'TSBaseType'],
  TSVoidKeyword: ['TSType', 'TSBaseType'],
  TSThisType: ['TSType', 'TSBaseType'],
  TSFunctionType: ['TSType'],
  TSConstructorType: ['TSType'],
  TSTypeReference: ['TSType'],
  TSTypePredicate: ['TSType'],
  TSTypeQuery: ['TSType'],
  TSTypeLiteral: ['TSType'],
  TSArrayType: ['TSType'],
  TSTupleType: ['TSType'],
  TSOptionalType: ['TSType'],
  TSRestType: ['TSType'],
  TSUnionType: ['TSType'],
  TSIntersectionType: ['TSType'],
  TSConditionalType: ['TSType'],
  TSInferType: ['TSType'],
  TSParenthesizedType: ['TSType'],
  TSTypeOperator: ['TSType'],
  TSIndexedAccessType: ['TSType'],
  TSMappedType: ['TSType'],
  TSLiteralType: ['TSType', 'TSBaseType'],
  TSExpressionWithTypeArguments: ['TSType'],
  TSInterfaceDeclaration: ['Statement', 'Declaration'],
  TSTypeAliasDeclaration: ['Statement', 'Declaration'],
  TSAsExpression: ['Expression'],
  TSTypeAssertion: ['Expression'],
  TSEnumDeclaration: ['Statement', 'Declaration'],
  TSModuleDeclaration: ['Statement', 'Declaration'],
  TSModuleBlock: ['Scopable', 'Block', 'BlockParent'],
  TSImportType: ['TSType'],
  TSImportEqualsDeclaration: ['Statement'],
  TSNonNullExpression: ['Expression'],
  TSExportAssignment: ['Statement'],
  TSNamespaceExportDeclaration: ['Statement'],
};
