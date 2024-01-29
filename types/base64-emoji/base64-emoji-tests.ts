import * as emoji from "base64-emoji";

emoji.encode("Hello World"); // $ExpectType Buffer
emoji.encode("Hello World", Buffer.alloc(10)); // $ExpectType Buffer
emoji.encode("Hello World", Buffer.alloc(10), 1); // $ExpectType Buffer
emoji.encode(Buffer.from("Hello World")); // $ExpectType Buffer
emoji.encode(Buffer.from("Hello World"), Buffer.alloc(10)); // $ExpectType Buffer
emoji.encode(Buffer.from("Hello World"), Buffer.alloc(10), 1); // $ExpectType Buffer

emoji.encode.bytes; // $ExpectType number | undefined

emoji.decode("🍕📙🕡🌵🎎📙🚢😮🕡🐗🏦🕤🎎📙🕖📫"); // $ExpectType Buffer
emoji.decode("🍕📙🕡🌵🎎📙🚢😮🕡🐗🏦🕤🎎📙🕖📫", 1); // $ExpectType Buffer
emoji.decode("🍕📙🕡🌵🎎📙🚢😮🕡🐗🏦🕤🎎📙🕖📫", 1, 5); // $ExpectType Buffer
emoji.decode(Buffer.from("🍕📙🕡🌵🎎📙🚢😮🕡🐗🏦🕤🎎📙🕖📫")); // $ExpectType Buffer
emoji.decode(Buffer.from("🍕📙🕡🌵🎎📙🚢😮🕡🐗🏦🕤🎎📙🕖📫"), 1); // $ExpectType Buffer
emoji.decode(Buffer.from("🍕📙🕡🌵🎎📙🚢😮🕡🐗🏦🕤🎎📙🕖📫"), 1, 5); // $ExpectType Buffer

emoji.decode.bytes; // $ExpectType number | undefined

emoji.encodingLength("Hello World"); // $ExpectType number
emoji.encodingLength(Buffer.from("Hello World")); // $ExpectType number
