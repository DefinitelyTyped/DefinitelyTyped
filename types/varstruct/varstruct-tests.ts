import vstruct = require("varstruct");
import * as VarIntProtobuf from "varint";

// test type exports
type Codec<T> = vstruct.Codec<T>;
type ObjectDescriptor<T> = vstruct.ObjectDescriptor<T>;
type ObjectDescriptorTuple<T, T2> = vstruct.ObjectDescriptorTuple<T, T2>;
type ObjectDescriptorMap<T, T2> = vstruct.ObjectDescriptorMap<T, T2>;

// $ExpectType Codec<{ x: number; y: number; z: number; }>
let Vector = vstruct<{ x: number; y: number; z: number }>(
    [
        { name: "x", type: vstruct.DoubleBE },
        { name: "y", type: vstruct.DoubleBE },
        { name: "z", type: vstruct.DoubleBE },
    ] as const,
);
Vector = vstruct(
    [
        ["x", vstruct.DoubleBE],
        ["y", vstruct.DoubleBE],
        ["z", vstruct.DoubleBE],
    ] as const,
);

Vector.encode({ x: 93.1, y: 87.3, z: 10.39 }); // $ExpectType Buffer
Vector.encode({ x: 93.1, y: 87.3, z: 10.39 }, Buffer.alloc(100)); // $ExpectType Buffer
Vector.encode({ x: 93.1, y: 87.3, z: 10.39 }, Buffer.alloc(100), 10); // $ExpectType Buffer
// @ts-expect-error
Vector.encode({});

Vector.encode.bytes; // $ExpectType number | undefined

Vector.decode(Buffer.alloc(10)); // $ExpectType { x: number; y: number; z: number; }
Vector.decode(Buffer.alloc(10), 1); // $ExpectType { x: number; y: number; z: number; }
Vector.decode(Buffer.alloc(10), 1, 10); // $ExpectType { x: number; y: number; z: number; }

Vector.decode.bytes; // $ExpectType number | undefined

Vector.encodingLength({ x: 93.1, y: 87.3, z: 10.39 }); // $ExpectType number

vstruct.Byte; // $ExpectType Codec<number>
vstruct.Int8; // $ExpectType Codec<number>
vstruct.UInt8; // $ExpectType Codec<number>
vstruct.Int16BE; // $ExpectType Codec<number>
vstruct.Int16LE; // $ExpectType Codec<number>
vstruct.UInt16BE; // $ExpectType Codec<number>
vstruct.UInt16LE; // $ExpectType Codec<number>
vstruct.Int32BE; // $ExpectType Codec<number>
vstruct.Int32LE; // $ExpectType Codec<number>
vstruct.UInt32BE; // $ExpectType Codec<number>
vstruct.UInt32LE; // $ExpectType Codec<number>
vstruct.Int64BE; // $ExpectType Codec<number>
vstruct.Int64LE; // $ExpectType Codec<number>
vstruct.UInt64BE; // $ExpectType Codec<number>
vstruct.UInt64LE; // $ExpectType Codec<number>
vstruct.FloatBE; // $ExpectType Codec<number>
vstruct.FloatLE; // $ExpectType Codec<number>
vstruct.DoubleBE; // $ExpectType Codec<number>
vstruct.DoubleLE; // $ExpectType Codec<number>

vstruct.Array(1, vstruct.String(10)); // $ExpectType Codec<string[]>
vstruct.VarArray(vstruct.Int16BE, vstruct.Buffer(10)); // $ExpectType Codec<Buffer[]>
// $ExpectType Codec<CodecTypes<readonly [Codec<number>, Codec<Buffer | undefined>]>>
const seq = vstruct.Sequence([vstruct.UInt32LE, vstruct.Value(vstruct.Buffer(1), Buffer.alloc(1))] as const);
seq.encode([1, Buffer.alloc(10)]);
seq.encode([1, undefined]);
// @ts-expect-error
seq.encode([Buffer.alloc(10), 1]);
// @ts-expect-error
seq.encode([1, "foo"]);

vstruct.Buffer(1); // $ExpectType Codec<Buffer>
vstruct.VarBuffer(vstruct.Int8); // $ExpectType Codec<Buffer>

vstruct.VarMap(vstruct.Int16LE, vstruct.String(1), vstruct.Buffer(1)); // $ExpectType Codec<Record<string, Buffer>>

vstruct.String(1); // $ExpectType Codec<string>
vstruct.String(1, "utf8"); // $ExpectType Codec<string>
vstruct.VarString(vstruct.Int8); // $ExpectType Codec<string>
vstruct.VarString(vstruct.Int8, "utf8"); // $ExpectType Codec<string>

// $ExpectType Codec<string>
vstruct.Bound(vstruct.String(1), value => {
    value; // $ExpectType string
    if (typeof value !== "string") {
        throw new Error();
    }
});
vstruct.Value(vstruct.UInt8, 1); // $ExpectType Codec<number | undefined>

const c: vstruct.Codec<{ foo: string; bar: { baz: number } }> = vstruct([
    { name: "foo", type: vstruct.String(10) },
    { name: "bar", type: vstruct([["baz", vstruct.Byte]]) },
]);
// $ExpectType Codec<{ foo: string; bar: { baz: number; }; }>
vstruct<{ foo: string; bar: { baz: number } }>([
    { name: "foo", type: vstruct.String(10) },
    { name: "bar", type: vstruct([["baz", vstruct.Byte] as const]) },
]);

const SHA256 = vstruct.Buffer(32);

interface Message {
    previous: Buffer;
    author: Buffer;
    message: Buffer;
    attachments: Buffer[];
}

const Message = vstruct<Message>([
    { name: "previous", type: SHA256 },
    { name: "author", type: SHA256 },
    { name: "message", type: vstruct.VarBuffer(VarIntProtobuf) },
    { name: "attachments", type: vstruct.VarArray(vstruct.Byte, SHA256) },
]);
