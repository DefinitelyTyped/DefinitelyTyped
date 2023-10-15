import * as crypto from "node:crypto";
import createCodec = require("xsalsa20-encoding");

// test type exports
type Options = createCodec.Options;
type ValueEncoding = createCodec.ValueEncoding<string, string>;
type Codec = createCodec.Codec;
type ValueToEncode = createCodec.ValueToEncode;
type JSONParsedBuffer = createCodec.JSONParsedBuffer;
type BufferWithNonce = createCodec.BufferWithNonce;

createCodec.NONCE_BYTES; // $ExpectType 24

const secretKey = crypto.randomBytes(32);
const codec = createCodec(secretKey); // $ExpectType Codec<ValueToEncode, Buffer>
createCodec(secretKey, { nonce: () => crypto.randomBytes(createCodec.NONCE_BYTES) }); // $ExpectType Codec<ValueToEncode, Buffer>
// $ExpectType Codec<string, string>
const strCodec = createCodec(secretKey, {
    valueEncoding: {
        decode(buffer, offset) {
            buffer; // $ExpectType Buffer
            offset; // $ExpectType number
            return buffer.toString("utf8");
        },
        encode(value: string) {
            return Buffer.from(value) as createCodec.ValueToEncode;
        },
    },
});

codec.encode(Buffer.from("foo")); // $ExpectType Buffer
codec.encode("foo"); // $ExpectType Buffer
codec.encode([1]); // $ExpectType Buffer
codec.encode(Buffer.from("foo").toJSON()); // $ExpectType Buffer
codec.encode(Buffer.from("foo"), Buffer.alloc(10)); // $ExpectType Buffer
codec.encode(Buffer.from("foo"), Buffer.alloc(10), 1); // $ExpectType Buffer

strCodec.encode("foo"); // $ExpectType Buffer
// @ts-expect-error
strCodec.encode(Buffer.from("foo"));
strCodec.encode("foo", Buffer.alloc(10)); // $ExpectType Buffer
strCodec.encode("foo", Buffer.alloc(10), 1); // $ExpectType Buffer

codec.encode.bytes; // $ExpectType number
strCodec.encode.bytes; // $ExpectType number

const bufferWithNonce: createCodec.BufferWithNonce = Buffer.alloc(10);
bufferWithNonce.nonce = Buffer.alloc(createCodec.NONCE_BYTES);

codec.decode(bufferWithNonce); // $ExpectType Buffer
codec.decode(bufferWithNonce, 1); // $ExpectType Buffer
codec.decode(bufferWithNonce, 1, 10); // $ExpectType Buffer

strCodec.decode(bufferWithNonce); // $ExpectType string
strCodec.decode(bufferWithNonce, 1); // $ExpectType string
strCodec.decode(bufferWithNonce, 1, 10); // $ExpectType string

codec.decode.bytes; // $ExpectType number
strCodec.decode.bytes; // $ExpectType number

codec.encodingLength(bufferWithNonce); // $ExpectType number
