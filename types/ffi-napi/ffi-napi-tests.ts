import ffi = require('ffi-napi');
import ref = require('ref-napi');
import Struct = require('ref-struct-di');
import Union = require('ref-union-di');
import TArray = require('ref-array-di');

{
    const sqlite3 = ref.types.void;
    const sqlite3Ptr = ref.refType(sqlite3);
    const sqlite3PtrPtr = ref.refType(sqlite3Ptr);
    const stringPtr = ref.refType(ref.types.CString);

    const libsqlite3 = ffi.Library('libsqlite3', {
      sqlite3_open: [ 'int', [ 'string', sqlite3PtrPtr ] ],
      sqlite3_close: [ 'int', [ sqlite3PtrPtr ] ],
      sqlite3_exec: [ 'int', [ sqlite3PtrPtr, 'string', 'pointer', 'pointer', stringPtr ] ],
      sqlite3_changes: [ 'int', [ sqlite3PtrPtr ]]
    });

    const dbPtrPtr = ref.alloc(sqlite3PtrPtr);
    libsqlite3.sqlite3_open("test.sqlite3", dbPtrPtr);
}
{
    const func = ffi.ForeignFunction(new Buffer(10), 'int', [ 'int' ]);
    func(-5);
    func.async(-5, (err: any, res: any) => {});
}
{
    const funcPtr = ffi.Callback('int', [ 'int' ], Math.abs);
    const func    = ffi.ForeignFunction(funcPtr, 'int', [ 'int' ]);
}
{
    const printfPointer = ffi.DynamicLibrary().get('printf');
    const printfGen = ffi.VariadicForeignFunction(printfPointer, 'void', [ 'string' ]);
    printfGen()('Hello World!\n');
    printfGen('int')('This is an int: %d\n', 10);
    printfGen('string')('This is a string: %s\n', 'hello');
}
{
    ref.address(new Buffer(1));
    const intBuf = ref.alloc(ref.types.int);
    const intWith4 = ref.alloc(ref.types.int, 4);
    const buf0 = ref.allocCString('hello world');
    const type = ref.coerceType('int **');
    const val = ref.deref(intBuf);
}
{
    ref.isNull(new Buffer(1));
}
{
    const str = ref.readCString(new Buffer('hello\0world\0'), 0);
    const buf = ref.alloc('int64');
    ref.writeInt64BE(buf, 0, '9223372036854775807');
    const val = ref.readInt64BE(buf, 0);
}
{
    const voidPtrType = ref.refType(ref.types.void);
    const buf = ref.alloc('int64');
    ref.writeInt64LE(buf, 0, '9223372036854775807');
}
{
    const S1 = Struct({ a: ref.types.int });
    const S2 = new Struct({ a: 'int' });
}
{
    const P = new Struct();
    P.defineProperty('a', ref.types.int);
    P.defineProperty('d', 'long');
}
{
    const SimpleStruct = Struct({
        first : ref.types.byte,
        last  : ref.types.byte
    });

    const ss = new SimpleStruct({ first: 50, last: 100 });
    ss.first += 200;
}
{
    const ST = Struct();
    const test: ref.Type = ST.fields['t'].type;
}
{
    const CharArray = TArray('char');
    const b = new Buffer('hello', 'ascii');
    const a = new CharArray(b);
}
{
    const Int32Array = TArray(ref.types.int32);
    const input = [1, 4, 91, 123123, 5123512, 0, -1];
    const a = new Int32Array(input);
}
{
    const int = ref.types.int;
    const IntArray = TArray(int);

    const buf = new Buffer(int.size * 3);
    int.set(buf, int.size * 0, 5);
    int.set(buf, int.size * 1, 8);
    int.set(buf, int.size * 2, 0);

    const array = IntArray.untilZeros(buf);
}
{
    const refCharArr = TArray('char')([1, 3, 5], 2).ref();
}
