import fs from "k6/experimental/fs";

//
// open function
//

// @ts-expect-error
fs.open();
// @ts-expect-error
fs.open(123);

// Define a base file handle for further tests
let fileHandle: fs.File;
(async function() {
    fileHandle = await fs.open("example.txt");
})();

//
// read function
//

// @ts-expect-error
fileHandle.read(new Array(100));
// @ts-expect-error
fileHandle.read(new ArrayBuffer(100));

//
// seek function
//

// @ts-expect-error
fileHandle.seek();
// @ts-expect-error
fileHandle.seek(10);
// @ts-expect-error
fileHandle.seek("abc");
// @ts-expect-error
fileHandle.seek(10, "abc");

//
// stat function
//

// @ts-expect-error
fileHandle.stat(10);
