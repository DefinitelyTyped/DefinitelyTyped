/// <reference path="./validator.d.ts" />

import validator = require("validator");


validator.extend("isTest", function(str) {
  return !str;
});

validator.equals("abc", "Abc");

validator.contains("foo", "foobar");

validator.matches("foobar", "foo/i");

validator.isEmail("sample");

validator.isURL("sample");

validator.isFQDN("sample");

validator.isIP("sample");

validator.isAlpha("sample");

validator.isNumeric("sample");

validator.isAlphanumeric("sample");

validator.isBase64("sample");

validator.isHexadecimal("sample");

validator.isHexColor("sample");

validator.isLowercase("sample");

validator.isUppercase("sample");

validator.isInt("sample");

validator.isFloat("sample");

validator.isDivisibleBy("sample", 2);

validator.isNull("sample");

validator.isLength("sample", 3, 5);

validator.isByteLength("sample", 3);

validator.isUUID("sample");

validator.isDate("sample");

validator.isAfter("sample");

validator.isBefore("sample");

validator.isIn("sample", []);

validator.isCreditCard("sample");

validator.isISBN("sample");

validator.isJSON("sample");

validator.isMultibyte("sample");

validator.isAscii("sample");

validator.isFullWidth("sample");

validator.isHalfWidth("sample");

validator.isVariableWidth("sample");

validator.isSurrogatePair("sample");

validator.isMongoId("sample");

validator.toString(123);

validator.toDate(1225);

validator.toFloat('011');

validator.toInt('aa');

validator.toBoolean('yes!');

validator.trim('  triming  ');

validator.ltrim('  triming  ');

validator.rtrim('  triming  ');

validator.escape('<script>');

validator.stripLow('\x7Ffoo\x02');

validator.whitelist('ab', 'abcdef');

validator.blacklist('abc', 'abcdef');

validator.normalizeEmail('!');
