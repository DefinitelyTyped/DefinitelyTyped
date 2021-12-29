import parser = require('pico8parse');

const luaCode = "-- this is hello world in lua.\nprint('hello world')";

// $ExpectType Chunk
const ast1 = parser.parse(luaCode);
console.log(JSON.stringify(ast1));

// $ExpectType Chunk
const ast2 = parser.parse(luaCode, {comments: false});
console.log(JSON.stringify(ast2));

// $ExpectType Parser
const ast3 = parser.parse({wait: true});
console.log(JSON.stringify(ast3));

// $ExpectType Parser
const ast4 = parser.parse(luaCode, {wait: true});
console.log(JSON.stringify(ast4));

// $ExpectType Chunk
const ast5 = parser.parse(luaCode, {comments: false, encodingMode: 'pseudo-latin1'});
console.log(JSON.stringify(ast5));

// $ExpectType LabelStatement
const nod1 = parser.ast.labelStatement(parser.ast.identifier("label"));
console.log(JSON.stringify(nod1));

// $ExpectType NumericLiteral
const nod2 = parser.ast.literal(parser.tokenTypes.NumericLiteral, 42, "42");
console.log(JSON.stringify(nod2));

// $ExpectType Chunk
const ast6 = parser.parse(luaCode, { onCreateNode: (n: parser.ast.Node) => void n });
console.log(JSON.stringify(ast6));

// $ExpectType Comment[] | undefined
const com1 = parser.parse(luaCode, { comments: true }).comments;
console.log(JSON.stringify(com1));

const err1 = new parser.SyntaxError();
// $ExpectType number
const index = err1.index;
// $ExpectType number
const line = err1.line;
// $ExpectType number
const column = err1.column;
console.log(JSON.stringify({ index, line, column }));
