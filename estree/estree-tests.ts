/// <reference path="estree.d.ts" />

var program: ESTree.Program;
var statement: ESTree.Statement;
var expression: ESTree.Expression;
var property: ESTree.Property;
var identifier: ESTree.Identifier;
var literal: ESTree.Literal;
var switchCase: ESTree.SwitchCase;
var catchClause: ESTree.CatchClause;
var pattern: ESTree.Pattern;
var assignmentPattern: ESTree.AssignmentPattern;
var variableDeclaratorOrExpression: ESTree.VariableDeclaration | ESTree.Expression;
var literalOrIdentifier: ESTree.Literal | ESTree.Identifier;
var blockStatementOrExpression: ESTree.BlockStatement | ESTree.Expression;
var identifierOrExpression: ESTree.Expression;
var any: any;
var string: string;
var boolean: boolean;
var number: number;

// Program
string = program.type;
statement = program.body[0];

// Location
number = program.loc.start.line;
number = program.loc.start.column;
number = program.loc.end.line;
number = program.loc.end.column;
number = program.range[0];

// Statement
// BlockStatement
var blockStatement: ESTree.BlockStatement;
string = blockStatement.type;
statement = blockStatement.body[0];

// ExpressionStatement
var expressionStatement: ESTree.ExpressionStatement;
expression = expressionStatement.expression;

// IfStatement
var ifStatement: ESTree.IfStatement;
expression = ifStatement.test;
statement = ifStatement.consequent;
statement = ifStatement.alternate;

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
boolean = switchStatement.lexical;

// ReturnStatement
var returnStatement: ESTree.ReturnStatement;
expression = returnStatement.argument;

// TryStatement
var tryStatement: ESTree.TryStatement;
blockStatement = tryStatement.block;
catchClause = tryStatement.handler;
blockStatement = tryStatement.finalizer;

// ForStatement
var forStatement: ESTree.ForStatement;
variableDeclaratorOrExpression = forStatement.init;
expression = forStatement.update;

// ForInStatement
var forInStatement: ESTree.ForInStatement;
variableDeclaratorOrExpression = forInStatement.left;
expression = forInStatement.right;

// Expression
// ArrayExpression
var arrayExpression: ESTree.ArrayExpression;
string = arrayExpression.type;
expression = arrayExpression.elements[0];

// ObjectExpression
var objectExpression: ESTree.ObjectExpression;
property = objectExpression.properties[0];
string = property.type;
expression = property.key;
expression = property.value;
string = property.kind;

// FunctionExpression
var functionExpression: ESTree.FunctionExpression;
identifier = functionExpression.id;
assignmentPattern = <ESTree.AssignmentPattern>functionExpression.params[0];
pattern = assignmentPattern.left;
expression = assignmentPattern.right;
blockStatementOrExpression = functionExpression.body;
boolean = functionExpression.generator;

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
expression = newExpression.callee;
expression = newExpression.arguments[0];

// CallExpression
var callExpression: ESTree.CallExpression;
expression = callExpression.callee;
expression = callExpression.arguments[0];

// MemberExpression
var memberExpression: ESTree.MemberExpression;
expression = memberExpression.object;
identifierOrExpression = memberExpression.property;
boolean = memberExpression.computed;

// Declarations
var functionDeclaration: ESTree.FunctionDeclaration;
identifier = functionDeclaration.id;
var params:ESTree.Pattern[] = functionDeclaration.params;
var body:ESTree.BlockStatement | ESTree.Expression = functionDeclaration.body;
boolean = functionDeclaration.generator;

var variableDeclaration: ESTree.VariableDeclaration;
var declarations:ESTree.VariableDeclarator[] = variableDeclaration.declarations;
string = variableDeclaration.kind; // "var" | "let" | "const"

var variableDeclarator: ESTree.VariableDeclarator;
pattern = variableDeclarator.id; // Pattern
expression = variableDeclarator.init;

// Clauses
// SwitchCase
string = switchCase.type;
expression = switchCase.test;
statement = switchCase.consequent[0];

// CatchClause
string = catchClause.type;
pattern = catchClause.param;
expression = catchClause.guard;
blockStatement = catchClause.body;

// Misc
// Identifier
string = identifier.type;
string = identifier.name;

// Literal
string = literal.type;
any = literal.value;
