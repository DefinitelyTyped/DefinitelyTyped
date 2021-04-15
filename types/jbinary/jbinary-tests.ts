import * as fs from "fs";
import jBinary = require("jbinary");

// #region as
(function () {
    const title = '"as"';
    const binary1 = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    const binary2 = binary1.as({ "jBinary.all": "uint8" });
    const data2 = binary2.readAll();
    if (data2 === 5) {
        console.log(`[OK.] ${title} => Aliasing data went fine.`);
    } else {
        console.log(`[ERR] ${title} => Expected 5 but got ${data2}.`);
    }
})();

(function () {
    const title = '"as" (with modifyOriginal)';
    const binary1 = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    const binary2 = binary1.as({ "jBinary.all": "uint8" }, true);
    const data1 = binary1.readAll();
    const data2 = binary2.readAll();
    if (data1 === data2) {
        console.log(`[OK.] ${title} => Aliasing data went fine.`);
    } else {
        console.log(`[ERR] ${title} => Expected ${data1} to be equal to ${data2}.`);
    }
})();
// #endregion as

// #region load
(function () {
    const title = '"load" (with Callback and ReadableStream)';
    const inputStream = fs.createReadStream("./test.bin");
    jBinary.load(inputStream, undefined, (err, jb) => {
        if (err) {
            console.log(`[ERR] ${title} => Error reading file: ${err.message}`);
        } else {
            console.log(`[OK.] ${title} => Loaded ${jb.view.buffer.length} bytes of data.`);
        }
    });
})();

(function () {
    const title = '"load" (with Promise and file path)';
    jBinary
        .load("./test.bin")
        .then(jb => {
            console.log(`[OK.] ${title} => Loaded ${jb.view.buffer.length} bytes of data.`);
        })
        .catch(reason => {
            if (reason instanceof Error) {
                console.log(`[ERR] ${title} => Error reading file: ${reason.message}`);
            }
        });
})();
// #endregion load

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
    const title = '"loadData" (with Promise and ReadableStream)';
    const inputStream = fs.createReadStream("./test.bin");
    jBinary
        .loadData(inputStream)
        .then(data => {
            console.log(`[OK.] ${title} => Loaded ${data.length} bytes of data.`);
        })
        .catch(reason => {
            if (reason instanceof Error) {
                console.log(`[ERR] ${title} => Error reading file: ${reason.message}`);
            }
        });
})();
// #endregion loadData

// #region read
(function () {
    const title = '"read"';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    const data = binary.read("uint8");
    if (data === 5) {
        console.log(`[OK.] ${title} => Reading data went fine.`);
    } else {
        console.log(`[ERR] ${title} => Expected 5 but got ${data}.`);
    }
})();

(function () {
    const title = '"read" (with custom position)';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    const data = binary.read("uint8", 1);
    if (data === 3) {
        console.log(`[OK.] ${title} => Reading data went fine.`);
    } else {
        console.log(`[ERR] ${title} => Expected 3 but got ${data}.`);
    }
})();
// #endregion read

// #region readAll
(function () {
    const title = '"readAll" (with typeset)';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e], { "jBinary.all": "uint8" });
    const data = binary.readAll();
    if (data === 5) {
        console.log(`[OK.] ${title} => Reading data went fine.`);
    } else {
        console.log(`[ERR] ${title} => Expected 5 but got ${data}.`);
    }
})();
// #endregion readAll

// #region saveAs
(function () {
    const title = '"saveAs" (with Callback, file path and text as data)';
    const filePath = "./test-saveas-callback.txt";
    const binary = new jBinary("ABCDEFG");
    binary.saveAs(filePath, "text/plain", err => {
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
        .catch(reason => {
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

// #region seek
(function () {
    const title = '"seek"';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    binary.seek(3);
    const data = binary.read("uint8");
    if (data === 30) {
        console.log(`[OK.] ${title} => Seeking and reading data went fine.`);
    } else {
        console.log(`[ERR] ${title} => Expected 30 after seek but got ${data}.`);
    }
})();

(function () {
    const title = '"seek" (with Callback)';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    const data = binary.seek(3, () => {
        return binary.read("uint8");
    });
    if (data === 30) {
        console.log(`[OK.] ${title} => Seeking and reading data went fine.`);
    } else {
        console.log(`[ERR] ${title} => Expected 30 after seek but got ${data}.`);
    }
})();
// #endregion seek

// #region skip
(function () {
    const title = '"skip"';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    binary.skip(2);
    const data = binary.read("uint8");
    if (data === 127) {
        console.log(`[OK.] ${title} => Skipping and reading data went fine.`);
    } else {
        console.log(`[ERR] ${title} => Expected 127 after skip but got ${data}.`);
    }
})();

(function () {
    const title = '"skip" (with Callback)';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    const data = binary.skip(2, () => {
        return binary.read("uint8");
    });
    if (data === 127) {
        console.log(`[OK.] ${title} => Skipping and reading data went fine.`);
    } else {
        console.log(`[ERR] ${title} => Expected 127 after skip but got ${data}.`);
    }
})();
// #endregion skip

// #region slice
(function () {
    const title = '"slice"';
    const binary1 = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    const binary2 = binary1.slice(1, 2);
    const data = binary2.read("uint8");
    if (data === 3) {
        console.log(`[OK.] ${title} => Slicing and reading data went fine.`);
    } else {
        console.log(`[ERR] ${title} => Expected 3 after slice but got ${data}.`);
    }
})();
// #endregion slice

// #region tell
(function () {
    const title = '"tell"';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    binary.skip(1);
    const pos = binary.tell();
    if (pos === 1) {
        console.log(`[OK.] ${title} => Telling position in binary went fine.`);
    } else {
        console.log(`[ERR] ${title} => Expected position in binary to be 1 after skip but was ${pos}.`);
    }
})();
// #endregion tell

// #region toURI
(function () {
    const title = '"toURI"';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    if (binary.toURI() === "data:application/octet-stream;base64,BQN/Hg==") {
        console.log(`[OK.] ${title} => URI generation went fine.`);
    } else {
        console.log(`[ERR] ${title} => Unexpected result.`);
    }
})();

(function () {
    const title = '"toURI" (with MIME type)';
    const binary = new jBinary("ABCDEFG");
    if (binary.toURI("text/plain") === "data:text/plain;base64,QUJDREVGRw==") {
        console.log(`[OK.] ${title} => URI generation went fine.`);
    } else {
        console.log(`[ERR] ${title} => Unexpected result.`);
    }
})();
// #endregion toURI

// #region write
(function () {
    const title = '"write"';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    binary.write("uint8", 21);
    binary.seek(0);
    const data = binary.read("uint8");
    if (data === 21) {
        console.log(`[OK.] ${title} => Writing to binary went fine.`);
    } else {
        console.log(`[ERR] ${title} => Unexpected result when reading updated data.`);
    }
})();

(function () {
    const title = '"write" (with offset)';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    binary.write("uint8", 21, 3);
    binary.seek(3);
    const data = binary.read("uint8");
    if (data === 21) {
        console.log(`[OK.] ${title} => Writing to binary went fine.`);
    } else {
        console.log(`[ERR] ${title} => Unexpected result when reading updated data.`);
    }
})();
// //#endregion write

// #region writeAll
(function () {
    const title = '"writeAll"';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e], { "jBinary.all": "uint8" });
    binary.writeAll(128);
    binary.seek(0);
    const data = binary.read("uint8");
    if (data === 128) {
        console.log(`[OK.] ${title} => Writing to binary went fine.`);
    } else {
        console.log(`[ERR] ${title} => Unexpected result when reading updated data.`);
    }
})();
//#endregion writeAll
