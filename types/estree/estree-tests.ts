import * as ESTree from 'estree';

declare var node: ESTree.Node;
declare var program: ESTree.Program;
declare var functionAst: ESTree.Function;
declare var statement: ESTree.Statement;
declare var emptyStatement: ESTree.EmptyStatement;
declare var blockStatement: ESTree.BlockStatement;
declare var expressionStatement: ESTree.ExpressionStatement;
declare var directive: ESTree.Directive;
declare var ifStatement: ESTree.IfStatement;
declare var labeledStatement: ESTree.LabeledStatement;
declare var breakStatement: ESTree.BreakStatement;
declare var continueStatement: ESTree.ContinueStatement;
declare var withStatement: ESTree.WithStatement;
declare var switchStatement: ESTree.SwitchStatement;
declare var returnStatement: ESTree.ReturnStatement;
declare var throwStatement: ESTree.ThrowStatement;
declare var tryStatement: ESTree.TryStatement;
declare var whileStatement: ESTree.WhileStatement;
declare var doWhileStatement: ESTree.DoWhileStatement;
declare var forStatement: ESTree.ForStatement;
declare var forInStatement: ESTree.ForInStatement;
declare var debuggerStatement: ESTree.DebuggerStatement;
declare var declaration: ESTree.Declaration;
declare var functionDeclaration: ESTree.FunctionDeclaration;
declare var variableDeclaration: ESTree.VariableDeclaration;
declare var variableDeclarator: ESTree.VariableDeclarator;
declare var expression: ESTree.Expression;
declare var baseExpression: ESTree.BaseExpression;
declare var thisExpression: ESTree.ThisExpression;
declare var arrayExpression: ESTree.ArrayExpression;
declare var objectExpression: ESTree.ObjectExpression;
declare var property: ESTree.Property | ESTree.SpreadElement;
declare var functionExpression: ESTree.FunctionExpression;
declare var sequenceExpression: ESTree.SequenceExpression;
declare var unaryExpression: ESTree.UnaryExpression;
declare var binaryExpression: ESTree.BinaryExpression;
declare var assignmentExpression: ESTree.AssignmentExpression;
declare var updateExpression: ESTree.UpdateExpression;
declare var logicalExpression: ESTree.LogicalExpression;
declare var conditionalExpression: ESTree.ConditionalExpression;
declare var callExpression: ESTree.CallExpression;
declare var simpleCallExpression: ESTree.SimpleCallExpression;
declare var newExpression: ESTree.NewExpression;
declare var memberExpression: ESTree.MemberExpression;
declare var chainExpression: ESTree.ChainExpression;
declare var pattern: ESTree.Pattern;
declare var switchCase: ESTree.SwitchCase;
declare var catchClause: ESTree.CatchClause;
declare var identifier: ESTree.Identifier;
declare var literal: ESTree.Literal;
declare var simpleLiteral: ESTree.SimpleLiteral;
declare var regExpLiteral: ESTree.RegExpLiteral;
declare var unaryOperator: ESTree.UnaryOperator;
declare var binaryOperator: ESTree.BinaryOperator;
declare var logicalOperator: ESTree.LogicalOperator;
declare var assignmentOperator: ESTree.AssignmentOperator;
declare var updateOperator: ESTree.UpdateOperator;
declare var forOfStatement: ESTree.ForOfStatement;
declare var superAst: ESTree.Super;
declare var spreadElement: ESTree.SpreadElement;
declare var arrowFunctionExpression: ESTree.ArrowFunctionExpression;
declare var yieldExpression: ESTree.YieldExpression;
declare var templateLiteral: ESTree.TemplateLiteral;
declare var taggedTemplateExpression: ESTree.TaggedTemplateExpression;
declare var templateElement: ESTree.TemplateElement;
declare var assignmentProperty: ESTree.AssignmentProperty;
declare var objectPattern: ESTree.ObjectPattern;
declare var arrayPattern: ESTree.ArrayPattern;
declare var restElement: ESTree.RestElement;
declare var assignmentPattern: ESTree.AssignmentPattern;
declare var classAst: ESTree.Class;
declare var classBody: ESTree.ClassBody;
declare var methodDefinition: ESTree.MethodDefinition;
declare var classDeclaration: ESTree.ClassDeclaration;
declare var classExpression: ESTree.ClassExpression;
declare var metaProperty: ESTree.MetaProperty;
declare var moduleDeclaration: ESTree.ModuleDeclaration;
declare var moduleSpecifier: ESTree.ModuleSpecifier;
declare var importDeclaration: ESTree.ImportDeclaration;
declare var importSpecifier: ESTree.ImportSpecifier;
declare var importDefaultSpecifier: ESTree.ImportDefaultSpecifier;
declare var importNamespaceSpecifier: ESTree.ImportNamespaceSpecifier;
declare var exportNamedDeclaration: ESTree.ExportNamedDeclaration;
declare var exportSpecifier: ESTree.ExportSpecifier;
declare var exportDefaultDeclaration: ESTree.ExportDefaultDeclaration;
declare var exportAllDeclaration: ESTree.ExportAllDeclaration;
declare var awaitExpression: ESTree.AwaitExpression;
declare var importExpression: ESTree.ImportExpression;

declare var toplevelStatement: ESTree.Statement | ESTree.ModuleDeclaration;
declare var expressionOrPattern: ESTree.Expression | ESTree.Pattern;
declare var variableDeclaratorOrExpression: ESTree.VariableDeclaration | ESTree.Expression;
declare var variableDeclaratorOrPattern: ESTree.VariableDeclaration | ESTree.Pattern;
declare var literalOrIdentifier: ESTree.Literal | ESTree.Identifier;
declare var blockStatementOrExpression: ESTree.BlockStatement | ESTree.Expression;
declare var identifierOrExpression: ESTree.Identifier | ESTree.Expression;
declare var any: any;
declare var string: string;
declare var boolean: boolean;
declare var number: number;
declare var never: never;

// Program
string = program.type;
toplevelStatement = program.body[0];

// Location
number = program.loc!.start.line;
number = program.loc!.start.column;
number = program.loc!.end.line;
number = program.loc!.end.column;
number = program!.range![0];

// Statement
// BlockStatement
var blockStatement: ESTree.BlockStatement;
string = blockStatement.type;
statement = blockStatement.body[0];

// ExpressionStatement
var expressionStatement: ESTree.ExpressionStatement;
expression = expressionStatement.expression;

// Directive
literal = directive.expression;
// $ExpectType string
directive.directive;

// pattern
var pattern: ESTree.Pattern;
var patternOrNull: ESTree.Pattern | null;

// IfStatement
var ifStatement: ESTree.IfStatement;
expression = ifStatement.test;
statement = ifStatement.consequent;
var statementOrNull: ESTree.Statement | null | undefined = ifStatement.alternate;

// LabeledStatement
var labeledStatement: ESTree.LabeledStatement;
identifier = labeledStatement.label;
statement = labeledStatement.body;

// WithStatement
var withStatement: ESTree.WithStatement;
expression = withStatement.object;

// SwitchStatement
var switchStatement: ESTree.SwitchStatement;
expression = switchStatement.discriminant;
switchCase = switchStatement.cases[0];

// ReturnStatement
var returnStatement: ESTree.ReturnStatement;
var expressionMaybe: ESTree.Expression | null | undefined = returnStatement.argument;

// TryStatement
var tryStatement: ESTree.TryStatement;
blockStatement = tryStatement.block;
var catchClauseMaybe: ESTree.CatchClause | null | undefined = tryStatement.handler;
var blockStatementMaybe: ESTree.BlockStatement | null | undefined = tryStatement.finalizer;

// ForStatement
var forStatement: ESTree.ForStatement;
var variableDeclaratorOrExpressionMaybe: typeof variableDeclaratorOrExpression | null | undefined = forStatement.init;
var expressionMaybe: ESTree.Expression | null | undefined = forStatement.update;

// ForInStatement
var forInStatement: ESTree.ForInStatement;
variableDeclaratorOrPattern = forInStatement.left;
expression = forInStatement.right;

// Expression
// ArrayExpression
var arrayExpression: ESTree.ArrayExpression;
string = arrayExpression.type;
var expressionOrSpread: ESTree.Expression | ESTree.SpreadElement
    = arrayExpression.elements[0];

// ObjectExpression
var objectExpression: ESTree.ObjectExpression;
var propertyOrSpread: ESTree.Property | ESTree.SpreadElement
    = objectExpression.properties[0];

string = property.type;
if (property.type === 'Property') {
  expression = property.key;
  expressionOrPattern = property.value;
  string = property.kind;
}

// FunctionExpression
var functionExpression: ESTree.FunctionExpression;
var identifierMaybe: ESTree.Identifier | null | undefined = functionExpression.id;
pattern = functionExpression.params[0];
pattern = assignmentPattern.left;
expression = assignmentPattern.right;
blockStatement = functionExpression.body;
var booleanMaybe: boolean | undefined = functionExpression.generator;
booleanMaybe = functionExpression.async;

// SequenceExpression
var sequenceExpression: ESTree.SequenceExpression;
expression = sequenceExpression.expressions[0]

// UnaryExpression
var unaryExpression: ESTree.UnaryExpression;
string = unaryExpression.operator;
boolean = unaryExpression.prefix;

// BinaryExpression
var binaryExpression: ESTree.BinaryExpression;
expression = binaryExpression.left;
expression = binaryExpression.right;

// ConditionalExpression
var conditionalExpression: ESTree.ConditionalExpression;
expression = conditionalExpression.test;
expression = conditionalExpression.alternate;
expression = conditionalExpression.consequent;

// NewExpression
var newExpression: ESTree.NewExpression;
var expressionOrSuper: ESTree.Expression | ESTree.Super = newExpression.callee;
expressionOrSpread = newExpression.arguments[0];

// CallExpression
var callExpression: ESTree.CallExpression;
expressionOrSuper = callExpression.callee;
expressionOrSpread = callExpression.arguments[0];

// MemberExpression
var memberExpression: ESTree.MemberExpression;
expressionOrSuper = memberExpression.object;
identifierOrExpression = memberExpression.property;
boolean = memberExpression.computed;

// ChainExpression
var chainExpression: ESTree.ChainExpression;
var memberExpressionOrCallExpression = chainExpression.expression;
boolean = memberExpressionOrCallExpression.optional;
if (memberExpressionOrCallExpression.type === 'MemberExpression') {
  expressionOrSuper = memberExpressionOrCallExpression.object;
  identifierOrExpression = memberExpressionOrCallExpression.property;
  boolean = memberExpressionOrCallExpression.computed;
} else {
  expressionOrSuper = memberExpressionOrCallExpression.callee;
  expressionOrSpread = callExpression.arguments[0];
}

// Declarations
var functionDeclaration: ESTree.FunctionDeclaration;
var identifierOrNull: ESTree.Identifier | null = functionDeclaration.id;
functionDeclaration.id = null;
var params: Array<ESTree.Pattern> = functionDeclaration.params;
blockStatement = functionDeclaration.body;
booleanMaybe = functionDeclaration.generator;
booleanMaybe = functionDeclaration.async;

var variableDeclaration: ESTree.VariableDeclaration;
var declarations: Array<ESTree.VariableDeclarator> = variableDeclaration.declarations;
string = variableDeclaration.kind; // "var" | "let" | "const"

var variableDeclarator: ESTree.VariableDeclarator;
pattern = variableDeclarator.id; // Pattern
expressionMaybe = variableDeclarator.init;

var classDeclaration: ESTree.ClassDeclaration;
identifierOrNull = classDeclaration.id;
classDeclaration.id = null;

// Clauses
// SwitchCase
string = switchCase.type;
expressionMaybe = switchCase.test;
statement = switchCase.consequent[0];

// CatchClause
string = catchClause.type;
patternOrNull = catchClause.param;
blockStatement = catchClause.body;

// Misc
// Identifier
string = identifier.type;
string = identifier.name;

// Literal
string = literal.type;
any = literal.value;

// Await Expression
var awaitExpression: ESTree.AwaitExpression;
expression = awaitExpression.argument;

// Test narrowing

switch (node.type) {
  case 'Identifier':
    identifier = node;
    break;
  case 'Literal':
    literal = node;
    break;
  case 'Program':
    program = node;
    break;
  case 'FunctionExpression':
    functionExpression = node
    break;
  case 'SwitchCase':
    switchCase = node
    break;
  case 'CatchClause':
    catchClause = node
    break;
  case 'VariableDeclarator':
    variableDeclarator = node
    break;
  // Narrowing of Statement
  case 'ExpressionStatement':
    expressionStatement = node;
    break;
  case 'BlockStatement':
    blockStatement = node;
    break;
  case 'EmptyStatement':
    emptyStatement = node;
    break;
  case 'DebuggerStatement':
    debuggerStatement = node;
    break;
  case 'WithStatement':
    withStatement = node;
    break;
  case 'ReturnStatement':
    returnStatement = node;
    break;
  case 'LabeledStatement':
    labeledStatement = node;
    break;
  case 'BreakStatement':
    breakStatement = node;
    break;
  case 'ContinueStatement':
    continueStatement = node;
    break;
  case 'IfStatement':
    ifStatement = node;
    break;
  case 'SwitchStatement':
    switchStatement = node;
    break;
  case 'ThrowStatement':
    throwStatement = node;
    break;
  case 'TryStatement':
    tryStatement = node;
    break;
  case 'WhileStatement':
    whileStatement = node;
    break;
  case 'DoWhileStatement':
    doWhileStatement = node;
    break;
  case 'ForStatement':
    forStatement = node;
    break;
  case 'ForInStatement':
    forInStatement = node;
    break;
  case 'ForOfStatement':
    forOfStatement = node;
    break;
  // end narrowing of Statement

  // narrowing of Declaration
  case 'FunctionDeclaration':
    functionDeclaration = node;
    break;
  case 'VariableDeclaration':
    variableDeclaration = node;
    break;
  case 'ClassDeclaration':
    classDeclaration = node;
    break;
  // end narrowing of Declaration

  // narrowing of Expression
  case 'ThisExpression':
    thisExpression = node;
    break;
  case 'ArrayExpression':
    arrayExpression = node;
    break;
  case 'ObjectExpression':
    objectExpression = node;
    break;
  case 'ArrowFunctionExpression':
    arrowFunctionExpression = node;
    break;
  case 'YieldExpression':
    yieldExpression = node;
    break;
  case 'UnaryExpression':
    unaryExpression = node;
    break;
  case 'UpdateExpression':
    updateExpression = node;
    break;
  case 'BinaryExpression':
    binaryExpression = node;
    break;
  case 'AssignmentExpression':
    assignmentExpression = node;
    break;
  case 'LogicalExpression':
    logicalExpression = node;
    break;
  case 'MemberExpression':
    memberExpression = node;
    break;
  case 'ChainExpression':
    chainExpression = node;
    break;
  case 'ConditionalExpression':
    conditionalExpression = node;
    break;
  case 'CallExpression':
    callExpression = node;
    break;
  case 'NewExpression':
    newExpression = node;
    break;
  case 'SequenceExpression':
    sequenceExpression = node;
    break;
  case 'TemplateLiteral':
    templateLiteral = node;
    break;
  case 'TaggedTemplateExpression':
    taggedTemplateExpression = node;
    break;
  case 'ClassExpression':
    classExpression = node;
    break;
  case 'MetaProperty':
    metaProperty = node;
    break;
  case 'AwaitExpression':
    awaitExpression = node;
    break;
  case 'ImportExpression':
    importExpression = node;
    break;
  // end narrowing of Expression

  case 'Property':
    property = node
    break;
  case 'Super':
    superAst = node
    break;
  case 'TemplateElement':
    templateElement = node
    break;
  case 'SpreadElement':
    spreadElement = node
    break;

  // narrowing of Pattern
  case 'ObjectPattern':
    objectPattern = node;
    break;
  case 'ArrayPattern':
    arrayPattern = node;
    break;
  case 'RestElement':
    restElement = node;
    break;
  case 'AssignmentPattern':
    assignmentPattern = node;
    break;
  // end narrowing of Pattern

  case 'ClassBody':
    classBody = node
    break;
  case 'MethodDefinition':
    methodDefinition = node
    break;

  // narrowing of ModuleDeclaration
  case 'ImportDeclaration':
    importDeclaration = node;
    break;
  case 'ExportNamedDeclaration':
    exportNamedDeclaration = node;
    break;
  case 'ExportDefaultDeclaration':
    exportDefaultDeclaration = node;
    break;
  case 'ExportAllDeclaration':
    exportAllDeclaration = node;
    break;
  // end narrowing of ModuleDeclaration

  // narrowing of ModuleSpecifier
  case 'ImportSpecifier':
    importSpecifier = node;
    break;
  case 'ImportDefaultSpecifier':
    importDefaultSpecifier = node;
    break;
  case 'ImportNamespaceSpecifier':
    importNamespaceSpecifier = node;
    break;
  case 'ExportSpecifier':
    exportSpecifier = node;
    break;
  // end narrowing of ModuleSpecifier

  default:
    never = node;
}

switch (statement.type) {
  case 'ExpressionStatement':
    expressionStatement = statement;
    break;
  case 'BlockStatement':
    blockStatement = statement;
    break;
  case 'EmptyStatement':
    emptyStatement = statement;
    break;
  case 'DebuggerStatement':
    debuggerStatement = statement;
    break;
  case 'WithStatement':
    withStatement = statement;
    break;
  case 'ReturnStatement':
    returnStatement = statement;
    break;
  case 'LabeledStatement':
    labeledStatement = statement;
    break;
  case 'BreakStatement':
    breakStatement = statement;
    break;
  case 'ContinueStatement':
    continueStatement = statement;
    break;
  case 'IfStatement':
    ifStatement = statement;
    break;
  case 'SwitchStatement':
    switchStatement = statement;
    break;
  case 'ThrowStatement':
    throwStatement = statement;
    break;
  case 'TryStatement':
    tryStatement = statement;
    break;
  case 'WhileStatement':
    whileStatement = statement;
    break;
  case 'DoWhileStatement':
    doWhileStatement = statement;
    break;
  case 'ForStatement':
    forStatement = statement;
    break;
  case 'ForInStatement':
    forInStatement = statement;
    break;
  case 'ForOfStatement':
    forOfStatement = statement;
    break;
  // narrowing of Declaration
  case 'FunctionDeclaration':
    functionDeclaration = statement;
    break;
  case 'VariableDeclaration':
    variableDeclaration = statement;
    break;
  case 'ClassDeclaration':
    classDeclaration = statement;
    break;
  // end narrowing of Declaration
  default:
    never = statement;
}

switch (expression.type) {
  case 'ThisExpression':
    thisExpression = expression;
    break;
  case 'ArrayExpression':
    arrayExpression = expression;
    break;
  case 'ObjectExpression':
    objectExpression = expression;
    break;
  case 'FunctionExpression':
    functionExpression = expression;
    break;
  case 'ArrowFunctionExpression':
    arrowFunctionExpression = expression;
    break;
  case 'YieldExpression':
    yieldExpression = expression;
    break;
  case 'Literal':
    literal = expression;
    break;
  case 'UnaryExpression':
    unaryExpression = expression;
    break;
  case 'UpdateExpression':
    updateExpression = expression;
    break;
  case 'BinaryExpression':
    binaryExpression = expression;
    break;
  case 'AssignmentExpression':
    assignmentExpression = expression;
    break;
  case 'LogicalExpression':
    logicalExpression = expression;
    break;
  case 'MemberExpression':
    memberExpression = expression;
    break;
  case 'ChainExpression':
    chainExpression = expression;
    break;
  case 'ConditionalExpression':
    conditionalExpression = expression;
    break;
  case 'CallExpression':
    callExpression = expression;
    break;
  case 'NewExpression':
    newExpression = expression;
    break;
  case 'SequenceExpression':
    sequenceExpression = expression;
    break;
  case 'TemplateLiteral':
    templateLiteral = expression;
    break;
  case 'TaggedTemplateExpression':
    taggedTemplateExpression = expression;
    break;
  case 'ClassExpression':
    classExpression = expression;
    break;
  case 'MetaProperty':
    metaProperty = expression;
    break;
  case 'Identifier':
    identifier = expression;
    break;
  case 'AwaitExpression':
    awaitExpression = expression;
    break;
  case 'ImportExpression':
    importExpression = expression;
    break;
  default:
    never = expression;
}

switch (declaration.type) {
  case 'FunctionDeclaration':
    functionDeclaration = declaration;
    break;
  case 'VariableDeclaration':
    variableDeclaration = declaration;
    break;
  case 'ClassDeclaration':
    classDeclaration = declaration;
    break;
  default:
    never = declaration;
}

switch (pattern.type) {
  case 'Identifier':
    identifier = pattern;
    break;
  case 'ObjectPattern':
    objectPattern = pattern;
    break;
  case 'ArrayPattern':
    arrayPattern = pattern;
    break;
  case 'RestElement':
    restElement = pattern;
    break;
  case 'AssignmentPattern':
    assignmentPattern = pattern;
    break;
  case 'MemberExpression':
    memberExpression = pattern;
    break;
  default:
    never = pattern;
}

switch (moduleDeclaration.type) {
  case 'ImportDeclaration':
    importDeclaration = moduleDeclaration;
    break;
  case 'ExportNamedDeclaration':
    exportNamedDeclaration = moduleDeclaration;
    break;
  case 'ExportDefaultDeclaration':
    exportDefaultDeclaration = moduleDeclaration;
    break;
  case 'ExportAllDeclaration':
    exportAllDeclaration = moduleDeclaration;
    break;
  default:
    never = moduleDeclaration;
}

switch (moduleSpecifier.type) {
  case 'ImportSpecifier':
    importSpecifier = moduleSpecifier;
    break;
  case 'ImportDefaultSpecifier':
    importDefaultSpecifier = moduleSpecifier;
    break;
  case 'ImportNamespaceSpecifier':
    importNamespaceSpecifier = moduleSpecifier;
    break;
  case 'ExportSpecifier':
    exportSpecifier = moduleSpecifier;
    break;
  default:
    never = moduleSpecifier;
}

switch (forInStatement.left.type) {
  case 'Identifier':
    identifier = forInStatement.left;
    break;
  case 'ObjectPattern':
    objectPattern = forInStatement.left;
    break;
  case 'ArrayPattern':
    arrayPattern = forInStatement.left;
    break;
  case 'MemberExpression':
    memberExpression = forInStatement.left;
    break;
}

switch (forOfStatement.left.type) {
  case 'Identifier':
    identifier = forOfStatement.left;
    break;
  case 'ObjectPattern':
    objectPattern = forOfStatement.left;
    break;
  case 'ArrayPattern':
    arrayPattern = forOfStatement.left;
    break;
  case 'MemberExpression':
    memberExpression = forOfStatement.left;
    break;
}
