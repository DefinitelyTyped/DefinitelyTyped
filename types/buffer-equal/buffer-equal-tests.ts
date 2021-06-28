import bufferEqual = require("buffer-equal");

bufferEqual(Buffer.from([253, 254, 255]), Buffer.from("abcd")); // $ExpectType boolean
