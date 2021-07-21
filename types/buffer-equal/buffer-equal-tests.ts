import bufferEqual = require("buffer-equal");

bufferEqual("nonsense", "but the underlying JavaScript tests check this"); // $ExpectType boolean | undefined
bufferEqual("nonsense", Buffer.from("abcd")); // $ExpectType boolean | undefined
bufferEqual(Buffer.from([253, 254, 255]), Buffer.from("abcd")); // $ExpectType boolean | undefined
