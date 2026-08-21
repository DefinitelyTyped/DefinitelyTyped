import util = require("core-util-is");

// $ExpectType boolean
util.isArray([]);
// $ExpectType boolean
util.isArray();

// $ExpectType boolean
util.isBoolean(false);
// $ExpectType boolean
util.isBoolean();

// $ExpectType boolean
util.isNull(null);
// $ExpectType boolean
util.isNull();

// $ExpectType boolean
util.isNullOrUndefined(null);
// $ExpectType boolean
util.isNullOrUndefined();

// $ExpectType boolean
util.isNumber(null);
// $ExpectType boolean
util.isNumber();

// $ExpectType boolean
util.isString(null);
// $ExpectType boolean
util.isString();

// $ExpectType boolean
util.isSymbol(null);
// $ExpectType boolean
util.isSymbol();

// $ExpectType boolean
util.isUndefined(null);
// $ExpectType boolean
util.isUndefined();

// $ExpectType boolean
util.isRegExp(null);
// $ExpectType boolean
util.isRegExp();

// $ExpectType boolean
util.isObject({});
// $ExpectType boolean
util.isObject();

// $ExpectType boolean
util.isDate(null);
// $ExpectType boolean
util.isDate();

// $ExpectType boolean
util.isError(null);
// $ExpectType boolean
util.isError();

// $ExpectType boolean
util.isFunction(null);
// $ExpectType boolean
util.isFunction();

// $ExpectType boolean
util.isPrimitive(null);
// $ExpectType boolean
util.isPrimitive();

// $ExpectType boolean
util.isBuffer(null);
// $ExpectType boolean
util.isBuffer();
