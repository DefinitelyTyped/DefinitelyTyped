// Tests by: Kaur Kuut <https://github.com/xStrom>
import scrypt = require("scrypt-async");
var callback = function(key: string | number[]) { };

scrypt("abc", "def", 10, 8, 32, 1000, callback, "base64");
scrypt("abc", [4,5,6], 10, 8, 32, 1000, callback, "base64");
scrypt([1,2,3], "def", 10, 8, 32, 1000, callback, "base64");
scrypt([1,2,3], [4,5,6], 10, 8, 32, 1000, callback, "base64");

scrypt("abc", "def", 10, 8, 32, 1000, callback);
scrypt("abc", [4,5,6], 10, 8, 32, 1000, callback);
scrypt([1,2,3], "def", 10, 8, 32, 1000, callback);
scrypt([1,2,3], [4,5,6], 10, 8, 32, 1000, callback);

scrypt("abc", "def", 10, 8, 32, callback, "base64");
scrypt("abc", [4,5,6], 10, 8, 32, callback, "base64");
scrypt([1,2,3], "def", 10, 8, 32, callback, "base64");
scrypt([1,2,3], [4,5,6], 10, 8, 32, callback, "base64");

scrypt("abc", "def", 10, 8, 32, callback);
scrypt("abc", [4,5,6], 10, 8, 32, callback);
scrypt([1,2,3], "def", 10, 8, 32, callback);
scrypt([1,2,3], [4,5,6], 10, 8, 32, callback);