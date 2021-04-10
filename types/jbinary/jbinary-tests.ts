import * as fs from "fs";
import jBinary = require("jbinary");

// #region Loading data
(function () {
    const title = '"loadData" (with Callback and file path)';
    jBinary.loadData("./test.bin", (err, data) => {
        if (err) {
            console.log(`${title} => Error reading file: ${err.message}`);
        } else if (data) {
            console.log(`${title} => Loaded ${data.length} bytes of data.`);
        } else {
            console.log(`${title} => No error and no data.`);
        }
    });
})();

(function () {
    const title = '"loadData" (with Promise and file path)';
    jBinary
        .loadData("./test.bin")
        .then(data => {
            console.log(`${title} => Loaded ${data.length} bytes of data.`);
        })
        .catch(reason => {
            if (reason instanceof Error) {
                console.log(`${title} => Error reading file: ${reason.message}`);
            }
        });
})();

(function () {
    const title = '"load" (with Callback and ReadableStream)';
    const inputStream = fs.createReadStream("./test.bin");
    jBinary.load(inputStream, undefined, (err, jb) => {
        if (err) {
            console.log(`${title} => Error reading file: ${err.message}`);
        } else {
            console.log(`${title} => Loaded ${jb.view.buffer.length} bytes of data.`);
        }
    });
})();

(function () {
    const title = '"load" (with Promise and ReadableStream)';
    const inputStream = fs.createReadStream("./test.bin");
    jBinary
        .load(inputStream)
        .then(jb => {
            console.log(`${title} => Loaded ${jb.view.buffer.length} bytes of data.`);
        })
        .catch(reason => {
            if (reason instanceof Error) {
                console.log(`${title} => Error reading file: ${reason.message}`);
            }
        });
})();
// #endregion Loading data

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

// jBinary.saveAs("myfile.pdf", "application/pdf");
// jBinary.toURI();
