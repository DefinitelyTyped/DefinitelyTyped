import uuid = require("sodium-uuid");

uuid.BYTES; // $ExpectType 16

uuid(); // $ExpectType Buffer || Buffer<ArrayBufferLike>
uuid(Buffer.alloc(uuid.BYTES)); // $ExpectType Buffer || Buffer<ArrayBufferLike>

uuid.stringify(Buffer.alloc(uuid.BYTES)); // $ExpectType string
uuid.parse(""); // $ExpectType Buffer || Buffer<ArrayBufferLike>
uuid.parse("", Buffer.alloc(uuid.BYTES)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
uuid.isUUID(""); // $ExpectType boolean
uuid.isUUID(Buffer.alloc(uuid.BYTES)); // $ExpectType boolean
