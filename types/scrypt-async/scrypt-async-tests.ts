// Tests by: Kaur Kuut <https://github.com/xStrom>
import scrypt = require("scrypt-async");
var callback: scrypt.CallbackFunc = function(key: string | number[]) { };

scrypt("abc", "def", 10, 8, 32, 1000, callback, "base64");
scrypt("abc", [100, 101, 102], 10, 8, 32, 1000, callback, "base64");
scrypt([97, 98, 99], "def", 10, 8, 32, 1000, callback, "base64");
scrypt([97, 98, 99], [100, 101, 102], 10, 8, 32, 1000, callback, "base64");

scrypt("abc", "def", 10, 8, 32, 1000, callback);
scrypt("abc", [100, 101, 102], 10, 8, 32, 1000, callback);
scrypt([97, 98, 99], "def", 10, 8, 32, 1000, callback);
scrypt([97, 98, 99], [100, 101, 102], 10, 8, 32, 1000, callback);

scrypt("abc", "def", 10, 8, 32, callback, "base64");
scrypt("abc", [100, 101, 102], 10, 8, 32, callback, "base64");
scrypt([97, 98, 99], "def", 10, 8, 32, callback, "base64");
scrypt([97, 98, 99], [100, 101, 102], 10, 8, 32, callback, "base64");

scrypt("abc", "def", 10, 8, 32, callback);
scrypt("abc", [100, 101, 102], 10, 8, 32, callback);
scrypt([97, 98, 99], "def", 10, 8, 32, callback);
scrypt([97, 98, 99], [100, 101, 102], 10, 8, 32, callback);

// Tests by: Stefano Sicco <https://github.com/stesix>
// "abc" === [97, 98, 99]
// "def" === [100, 101, 102]



var opts: scrypt.Options = {
    r: 8,
    p: 1,
    dkLen: 32,
    encoding: 'base64',
    interruptStep: 1000
};
opts.N = 1024;

scrypt("abc", "def", opts, callback);
scrypt("abc", [100, 101, 102], opts, callback);
scrypt([97, 98, 99], "def", opts, callback);
scrypt([97, 98, 99], [100, 101, 102], opts, callback);

opts.logN = 10;
scrypt("abc", "def", opts, callback);
scrypt("abc", [100, 101, 102], opts, callback);
scrypt([97, 98, 99], "def", opts, callback);
scrypt([97, 98, 99], [100, 101, 102], opts, callback);
