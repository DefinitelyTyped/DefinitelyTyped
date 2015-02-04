/// <reference path="esprima.d.ts" />

import esprima = require('esprima');
import Syntax = esprima.Syntax;

var token: esprima.Token;
var options: esprima.Options;
var comment: Syntax.Comment;
var program: Syntax.Program;
var statement: Syntax.Statement;
var expression: Syntax.Expression;
var property: Syntax.Property;
var identifier: Syntax.Identifier;
var literal: Syntax.Literal;
var switchCase: Syntax.SwitchCase;
var catchClause: Syntax.CatchClause;
var variableDeclaratorOrExpression: Syntax.VariableDeclaratorOrExpression;
var literalOrIdentifier: Syntax.LiteralOrIdentifier;
var blockStatementOrExpression: Syntax.BlockStatementOrExpression;
var identifierOrExpression: Syntax.IdentifierOrExpression;
var any: any;
var string: string;
var boolean: boolean;
var number: number;

// esprima
string = esprima.version;
program = esprima.parse('code');
program = esprima.parse('code', {range: true});
token = esprima.tokenize('code')[0];
token = esprima.tokenize('code', {range: true})[0];

// Token
string = token.type;
string = token.value;

// Program
string = program.type;
statement = program.body[0];
comment = program.comments[0]

// Location
number = program.loc.start.line;
number = program.loc.start.column;
number = program.loc.end.line;
number = program.loc.end.column;
number = program.range[0];

// Comment
string = comment.value;

// Statement
// BlockStatement
var blockStatement: Syntax.BlockStatement;
string = blockStatement.type;
statement = blockStatement.body[0];
comment = blockStatement.leadingComments[0];
comment = blockStatement.trailingComments[0];

// ExpressionStatement
var expressionStatement: Syntax.ExpressionStatement;
expression = expressionStatement.expression;

// IfStatement
var ifStatement: Syntax.IfStatement;
expression = ifStatement.test;
statement = ifStatement.consequent;
statement = ifStatement.alternate;

// LabeledStatement
var labeledStatement: Syntax.LabeledStatement;
identifier = labeledStatement.label;
statement = labeledStatement.body;

// WithStatement
var withStatement: Syntax.WithStatement;
expression = withStatement.object;

// SwitchStatement
var switchStatement: Syntax.SwitchStatement;
expression = switchStatement.discriminant;
switchCase = switchStatement.cases[0];
boolean = switchStatement.lexical;

// ReturnStatement
var returnStatement: Syntax.ReturnStatement;
expression = returnStatement.argument;

// TryStatement
var tryStatement: Syntax.TryStatement;
blockStatement = tryStatement.block;
catchClause = tryStatement.handler;
catchClause = tryStatement.guardedHandlers[0];
blockStatement = tryStatement.finalizer;

// ForStatement
var forStatement: Syntax.ForStatement;
variableDeclaratorOrExpression = forStatement.init;
expression = forStatement.update;

// ForInStatement
var forInStatement: Syntax.ForInStatement;
variableDeclaratorOrExpression = forInStatement.left;
expression = forInStatement.right;
boolean = forInStatement.each;

// Expression
// ArrayExpression
var arrayExpression: Syntax.ArrayExpression;
string = arrayExpression.type;
expression = arrayExpression.elements[0];

// ObjectExpression
var objectExpression: Syntax.ObjectExpression;
property = objectExpression.properties[0];
string = property.type;
literalOrIdentifier = property.key;
expression = property.value;
string = property.kind;

// FunctionExpression
var functionExpression: Syntax.FunctionExpression;
identifier = functionExpression.id;
identifier = functionExpression.params[0];
expression = functionExpression.defaults[0];
identifier = functionExpression.rest;
blockStatementOrExpression = functionExpression.body;
boolean = functionExpression.generator;
boolean = functionExpression.expression;

// SequenceExpression
var sequenceExpression: Syntax.SequenceExpression;
expression = sequenceExpression.expressions[0]

// UnaryExpression
var unaryExpression: Syntax.UnaryExpression;
string = unaryExpression.operator;
boolean = unaryExpression.prefix;

// BinaryExpression
var binaryExpression: Syntax.BinaryExpression;
expression = binaryExpression.left;
expression = binaryExpression.right;

// ConditionalExpression
var conditionalExpression: Syntax.ConditionalExpression;
expression = conditionalExpression.test;
expression = conditionalExpression.alternate;
expression = conditionalExpression.consequent;

// NewExpression
var newExpression: Syntax.NewExpression;
expression = newExpression.callee;
expression = newExpression.arguments[0];

// CallExpression
var callExpression: Syntax.CallExpression;
expression = callExpression.callee;
expression = callExpression.arguments[0];

// MemberExpression
var memberExpression: Syntax.MemberExpression;
expression = memberExpression.object;
identifierOrExpression = memberExpression.property;
boolean = memberExpression.computed;

// Declarations
var functionDeclaration: Syntax.FunctionDeclaration;
identifier = functionDeclaration.id;
var params:Syntax.Identifier[] = functionDeclaration.params;
var defaults:Syntax.Expression[] = functionDeclaration.defaults;
identifier = functionDeclaration.rest;
var body:Syntax.BlockStatementOrExpression = functionDeclaration.body;
boolean = functionDeclaration.generator;
boolean = functionDeclaration.expression;

var variableDeclaration: Syntax.VariableDeclaration;
var declarations:Syntax.VariableDeclarator[] = variableDeclaration.declarations;
string = variableDeclaration.kind; // "var" | "let" | "const"

var variableDeclarator: Syntax.VariableDeclarator;
identifier = variableDeclarator.id; // Pattern
expression = variableDeclarator.init;

// Clauses
// SwitchCase
string = switchCase.type;
expression = switchCase.test;
statement = switchCase.consequent[0];

// CatchClause
string = catchClause.type;
identifier = catchClause.param;
expression = catchClause.guard;
blockStatement = catchClause.body;

// Misc
// Identifier
string = identifier.type;
string = identifier.name;

// Literal
string = literal.type;
any = literal.value;
