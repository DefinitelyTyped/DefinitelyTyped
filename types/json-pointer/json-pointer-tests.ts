
import JsonPointer = require('json-pointer');

var value: any;
var str: string;
var strArr: string[];
var pointer: string;
var bool: any;
var object:Object;

bool = JsonPointer.has(object, pointer);
value = JsonPointer.get(object, pointer);
JsonPointer.set(object, pointer, value);
JsonPointer.remove(object, pointer);

object = JsonPointer.dict(object);

JsonPointer.walk(object, (elem) => {

});

str = JsonPointer.escape(str);
str = JsonPointer.unescape(str);

strArr = JsonPointer.parse(str);
str = JsonPointer.compile(strArr);

var wrap = JsonPointer(object);

bool = wrap.has(pointer);
value = wrap.get(pointer);
wrap.set(pointer, value);
wrap.remove(pointer);

object = wrap.dict();

wrap.walk((elem, key) => {
	value = elem;
	str = key;
});