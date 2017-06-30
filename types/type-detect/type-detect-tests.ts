
import td = require('type-detect');

var str: string;
var bool: boolean;
var x: any;

str = td(123);

var lib: td.Library = new td.Library();

lib.define(str, /aa/);
lib.define(str, (val) => {
	return bool;
});
str = lib.of(x);
bool = lib.test(x, str);


