import * as codec from "rlp-encoding";

// test type exports
type ValueToEncode = codec.ValueToEncode;
type DecodedValue = codec.DecodedValue;

codec.encode("foo"); // $ExpectType Buffer
codec.encode(1); // $ExpectType Buffer
codec.encode(null); // $ExpectType Buffer
codec.encode(undefined); // $ExpectType Buffer
codec.encode(Buffer.from("foo")); // $ExpectType Buffer
codec.encode(["foo", Buffer.from("foo"), 1, null, undefined, ["foo", Buffer.from("foo")]]); // $ExpectType Buffer
codec.encode("foo", Buffer.alloc(10)); // $ExpectType Buffer
codec.encode("foo", Buffer.alloc(10), 1); // $ExpectType Buffer

codec.encode.bytes; // $ExpectType number | undefined

let dec = codec.decode(Buffer.alloc(10)); // $ExpectType DecodedValue
codec.decode(Buffer.alloc(10), 1); // $ExpectType DecodedValue
codec.decode(Buffer.alloc(10), 1, 10); // $ExpectType DecodedValue

codec.decode.bytes; // $ExpectType number | undefined

dec = Buffer.from("foo");
dec = [Buffer.from("foo"), [Buffer.from("foo")]];

codec.encodingLength(Buffer.from("foo")); // $ExpectType number
