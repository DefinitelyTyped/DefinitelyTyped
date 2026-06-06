import * as emoji from "base64-emoji";

emoji.encode("Hello World"); // $ExpectType Buffer || Buffer<ArrayBufferLike>
emoji.encode("Hello World", Buffer.alloc(10)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
emoji.encode("Hello World", Buffer.alloc(10), 1); // $ExpectType Buffer || Buffer<ArrayBufferLike>
emoji.encode(Buffer.from("Hello World")); // $ExpectType Buffer || Buffer<ArrayBufferLike>
emoji.encode(Buffer.from("Hello World"), Buffer.alloc(10)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
emoji.encode(Buffer.from("Hello World"), Buffer.alloc(10), 1); // $ExpectType Buffer || Buffer<ArrayBufferLike>

emoji.encode.bytes; // $ExpectType number | undefined

emoji.decode("🍕📙🕡🌵🎎📙🚢😮🕡🐗🏦🕤🎎📙🕖📫"); // $ExpectType Buffer || Buffer<ArrayBufferLike>
emoji.decode("🍕📙🕡🌵🎎📙🚢😮🕡🐗🏦🕤🎎📙🕖📫", 1); // $ExpectType Buffer || Buffer<ArrayBufferLike>
emoji.decode("🍕📙🕡🌵🎎📙🚢😮🕡🐗🏦🕤🎎📙🕖📫", 1, 5); // $ExpectType Buffer || Buffer<ArrayBufferLike>
emoji.decode(Buffer.from("🍕📙🕡🌵🎎📙🚢😮🕡🐗🏦🕤🎎📙🕖📫")); // $ExpectType Buffer || Buffer<ArrayBufferLike>
emoji.decode(Buffer.from("🍕📙🕡🌵🎎📙🚢😮🕡🐗🏦🕤🎎📙🕖📫"), 1); // $ExpectType Buffer || Buffer<ArrayBufferLike>
emoji.decode(Buffer.from("🍕📙🕡🌵🎎📙🚢😮🕡🐗🏦🕤🎎📙🕖📫"), 1, 5); // $ExpectType Buffer || Buffer<ArrayBufferLike>

emoji.decode.bytes; // $ExpectType number | undefined

emoji.encodingLength("Hello World"); // $ExpectType number
emoji.encodingLength(Buffer.from("Hello World")); // $ExpectType number
