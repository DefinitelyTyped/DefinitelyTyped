
import luaparse = require('luaparse');

var luacode: string = '-- this is hello world in lua.\nprint(\'hello world\')';
var ast: Object = luaparse.parse(luacode);
console.log(JSON.stringify(ast));

ast = luaparse.parse(luacode, {comments: false});
console.log(JSON.stringify(ast));
