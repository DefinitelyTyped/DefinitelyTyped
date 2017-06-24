import ffi = require('ffi');
import ref = require('ref');
import Struct = require('ref-struct');
import Union = require('ref-union');
import TArray = require('ref-array');

{
    var sqlite3 = ref.types.void;
    var sqlite3Ptr = ref.refType(sqlite3);
    var sqlite3PtrPtr = ref.refType(sqlite3Ptr);
    var stringPtr = ref.refType(ref.types.CString);

    var libsqlite3 = ffi.Library('libsqlite3', {
      'sqlite3_open': [ 'int', [ 'string', sqlite3PtrPtr ] ],
      'sqlite3_close': [ 'int', [ sqlite3PtrPtr ] ],
      'sqlite3_exec': [ 'int', [ sqlite3PtrPtr, 'string', 'pointer', 'pointer', stringPtr ] ],
      'sqlite3_changes': [ 'int', [ sqlite3PtrPtr ]]
    });

    var dbPtrPtr = ref.alloc(sqlite3PtrPtr);
    libsqlite3.sqlite3_open("test.sqlite3", dbPtrPtr);
}
{
    var func = ffi.ForeignFunction(new Buffer(10), 'int', [ 'int' ]);
    func(-5);
    func.async(-5, function(err: any, res: any) {});
}
{
    var funcPtr = ffi.Callback('int', [ 'int' ], Math.abs);
    var func    = ffi.ForeignFunction(funcPtr, 'int', [ 'int' ]);
}
{
    var printfPointer = ffi.DynamicLibrary().get('printf');
    var printfGen = ffi.VariadicForeignFunction(printfPointer, 'void', [ 'string' ]);
    printfGen()('Hello World!\n');
    printfGen('int')('This is an int: %d\n', 10);
    printfGen('string')('This is a string: %s\n', 'hello');
}
{
    ref.address(new Buffer(1));
    var intBuf = ref.alloc(ref.types.int);
    var intWith4 = ref.alloc(ref.types.int, 4);
    var buf0 = ref.allocCString('hello world');
    var type = ref.coerceType('int **');
    var val = ref.deref(intBuf);
}
{
    ref.isNull(new Buffer(1));
}
{
    var str = ref.readCString(new Buffer('hello\0world\0'), 0);
    var buf = ref.alloc('int64');
    ref.writeInt64BE(buf, 0, '9223372036854775807');
    var val = ref.readInt64BE(buf, 0)
}
{
    var voidPtrType = ref.refType(ref.types.void);
    var buf = ref.alloc('int64');
    ref.writeInt64LE(buf, 0, '9223372036854775807');
}
{
    var S1 = Struct({ a: ref.types.int });
    var S2 = new Struct({ a: 'int' });
}
{
    var P = new Struct;
    P.defineProperty('a', ref.types.int);
    P.defineProperty('d', 'long');
}
{
    var SimpleStruct = Struct({
        first : ref.types.byte,
        last  : ref.types.byte
    });

    var ss = new SimpleStruct({ first: 50, last: 100 });
    ss.first += 200;
}
{
    var ST = Struct();
    var test: ref.Type = ST.fields['t'].type;
}
{
    var CharArray = TArray('char');
    var b = new Buffer('hello', 'ascii');
    var a = new CharArray(b);
}
{
    var Int32Array = TArray(ref.types.int32);
    var input = [1, 4, 91, 123123, 5123512, 0, -1];
    var a = new Int32Array(input);
}
{
    var int = ref.types.int;
    var IntArray = TArray(int);

    var buf = new Buffer(int.size * 3);
    int.set(buf, int.size * 0, 5);
    int.set(buf, int.size * 1, 8);
    int.set(buf, int.size * 2, 0);

    var array = IntArray.untilZeros(buf);
}
{
    var refCharArr = TArray('char')([1, 3, 5], 2).ref();
}
