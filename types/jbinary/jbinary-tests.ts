import * as fs from "fs";
import jBinary = require("jbinary");

// #region loadData
(function () {
    const title = '"loadData" (with Callback and file path)';
    jBinary.loadData("./test.bin", (err, data) => {
        if (err) {
            console.log(`[ERR] ${title} => Error reading file: ${err.message}`);
        } else if (data) {
            console.log(`[OK.] ${title} => Loaded ${data.length} bytes of data.`);
        } else {
            console.log(`[???] ${title} => No error and no data.`);
        }
    });
})();

(function () {
    const title = '"loadData" (with Promise and file path)';
    jBinary
        .loadData("./test.bin")
        .then((data) => {
            console.log(`[OK.] ${title} => Loaded ${data.length} bytes of data.`);
        })
        .catch((reason) => {
            if (reason instanceof Error) {
                console.log(`[ERR] ${title} => Error reading file: ${reason.message}`);
            }
        });
})();
// #endregion loadData

// #region load
// (function () {
//     const title = '"load" (with Callback and ReadableStream)';
//     const inputStream = fs.createReadStream("./test.bin");
//     jBinary.load(inputStream, undefined, (err, jb) => {
//         if (err) {
//             console.log(`[ERR] ${title} => Error reading file: ${err.message}`);
//         } else {
//             console.log(`[OK.] ${title} => Loaded ${jb.view.buffer.length} bytes of data.`);
//         }
//     });
// })();

// (function () {
//     const title = '"load" (with Promise and ReadableStream)';
//     const inputStream = fs.createReadStream("./test.bin");
//     jBinary
//         .load(inputStream)
//         .then((jb) => {
//             console.log(`[OK.] ${title} => Loaded ${jb.view.buffer.length} bytes of data.`);
//         })
//         .catch((reason) => {
//             if (reason instanceof Error) {
//                 console.log(`[ERR] ${title} => Error reading file: ${reason.message}`);
//             }
//         });
// })();
// #endregion load

// #region saveAs
(function () {
    const title = '"saveAs" (with Callback, file path and text as data)';
    const filePath = "./test-saveas-callback.txt";
    const binary = new jBinary("ABCDEFG");
    binary.saveAs(filePath, "text/plain", (err) => {
        if (err instanceof Error) {
            console.log(`[ERR] ${title} => Error writing file: ${err.message}`);
        } else {
            console.log(`[OK.] ${title} => Data saved.`);
        }
        fs.unlinkSync(filePath);
    });
})();

(function () {
    const title = '"saveAs" (with Promise, WritableStream and Array<number> as data)';
    const filePath = "./test-saveas-promise.bin";
    const outputStream = fs.createWriteStream(filePath);
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    binary
        .saveAs(outputStream)
        .then(() => {
            console.log(`[OK.] ${title} => Data saved.`);
        })
        .catch((reason) => {
            if (reason instanceof Error) {
                console.log(`[ERR] ${title} => Error writing file: ${reason.message}`);
            }
        })
        .finally(() => {
            outputStream.close();
            fs.unlinkSync(filePath);
        });
})();
// #endregion saveAs

// var originalData = [0x05, 0x03, 0x7f, 0x1e];
// var b1 = new jBinary(originalData);
// console.log(b1.readAll());
// console.log(b1.read("int8"));

// b1.seek(4);
// console.log(b1.read("int8"));

// console.log(b1.tell());

// b1.write("int8", 0x9a, 2);
// b1.writeAll(originalData);

// console.log(b1.slice(0, 2));

// #region toURI
(function () {
    const title = '"toURI"';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    console.log(`[OK.] ${title} => ${binary.toURI()}`);
})();

(function () {
    const title = '"toURI" (with MIME type)';
    const binary = new jBinary("ABCDEFG");
    console.log(`[OK.] ${title} => ${binary.toURI("text/plain")}`);
})();
// #endregion toURI

// TODO: as, read, readAll, seek, skip, slice, tell, write, writeAll
