import luaparse = require("luaparse");

const luacode = "-- this is hello world in lua.\nprint('hello world')";

// $ExpectType Chunk
const ast1 = luaparse.parse(luacode);
console.log(JSON.stringify(ast1));

// $ExpectType Chunk
const ast2 = luaparse.parse(luacode, {comments: false});
console.log(JSON.stringify(ast2));

// $ExpectType Parser
const ast3 = luaparse.parse({wait: true});
console.log(JSON.stringify(ast3));

// $ExpectType Parser
const ast4 = luaparse.parse(luacode, {wait: true});
console.log(JSON.stringify(ast4));

// $ExpectType Chunk
const ast5 = luaparse.parse(luacode, {comments: false, encodingMode: 'pseudo-latin1'});
console.log(JSON.stringify(ast5));
