/// <reference path="esprima.d.ts" />

import esprima = require('esprima');
import Syntax = esprima.Syntax;

var token: esprima.Token;
var options: esprima.Options;
var comment: Syntax.Comment;
var program: Syntax.Program;
var statement: Syntax.SomeStatement;
var blockStatement: Syntax.BlockStatement;
var expression: Syntax.SomeExpression;
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
string = statement.type;
statement = statement.body[0];
comment = statement.leadingComments[0]
comment = statement.trailingComments[0]

// ExpressionStatement
expression = statement.expression;

// IfStatement
expression = statement.test;
statement = statement.consequent;
statement = statement.alternate;

// LabeledStatement
identifier = statement.label;
statement = statement.body;

// WithStatement
expression = statement.object;

// SwitchStatement
expression = statement.discriminant;
switchCase = statement.cases[0];
boolean = statement.lexical;

// ReturnStatement
expression = statement.argument;

// TryStatement
blockStatement = statement.block;
catchClause = statement.handler;
catchClause = statement.guardedHandlers[0];
blockStatement = statement.finalizer;

// ForStatement
variableDeclaratorOrExpression = statement.init;
expression = statement.update;

// ForInStatement
variableDeclaratorOrExpression = statement.left;
expression = statement.right;
boolean = statement.each;

// Expression
// ArrayExpression
string = expression.type;
expression = expression.elements[0];

// ObjectExpression
property = expression.properties[0];
string = property.type;
literalOrIdentifier = property.key;
expression = property.value;
string = property.kind;

// FunctionExpression
identifier = expression.id;
identifier = expression.params[0];
expression = expression.defaults[0];
identifier = expression.rest;
blockStatementOrExpression = expression.body;
boolean = expression.generator;
boolean = expression.expression;

// SequenceExpression
expression = expression.expressions[0]

// UnaryExpression
string = expression.operator;
boolean = expression.prefix;

// BinaryExpression
expression = expression.left;
expression = expression.right;

// ConditionalExpression
expression = expression.test;
expression = expression.alternate;
expression = expression.consequent;

// ConditionalExpression
expression = expression.callee;
expression = expression.arguments[0];

// MemberExpression
expression = expression.object;
identifierOrExpression = expression.property;
boolean = expression.computed;

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
