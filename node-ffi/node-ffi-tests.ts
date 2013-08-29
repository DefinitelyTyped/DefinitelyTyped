/// <reference path="node-ffi.d.ts" />

import ref = require('ref');

ref.address(new Buffer(1));
var intBuf = ref.alloc(ref.types.int);
var intWith4 = ref.alloc(ref.types.int, 4);
var buf0 = ref.allocCString('hello world');
var type = ref.coerceType('int **');
var val = ref.deref(intBuf);
ref.isNull(new Buffer(1));
var str = ref.readCString(new Buffer('hello\0world\0'), 0);
var buf1 = ref.alloc('int64');
ref.writeInt64BE(buf1, 0, '9223372036854775807');
var val = ref.readInt64BE(buf1, 0)
var voidPtrType = ref.refType(ref.types.void);
var buf2 = ref.alloc('int64');
ref.writeInt64LE(buf2, 0, '9223372036854775807');
