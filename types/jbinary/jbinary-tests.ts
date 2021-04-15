import * as fs from "fs";
import jBinary = require("jbinary");

// #region as
(function () {
    const title = '"as"';
    const binary1 = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    const binary2 = binary1.as({ "jBinary.all": "uint8" });
    const data2 = String(binary2.readAll());
    if (data2 === "5") {
        console.log(`[OK.] ${title} => Aliasing data went fine.`);
    } else {
        console.log(`[ERR] ${title} => Expected '5' but got '${data2}'.`);
    }
})();

(function () {
    const title = '"as" (with modifyOriginal)';
    const binary1 = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    const binary2 = binary1.as({ "jBinary.all": "uint8" }, true);
    const data1 = String(binary1.readAll());
    const data2 = String(binary2.readAll());
    if (data1 === data2) {
        console.log(`[OK.] ${title} => Aliasing data went fine.`);
    } else {
        console.log(`[ERR] ${title} => Expected '${data1}' to be equal to '${data2}'.`);
    }
})();
// #endregion as

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

// #region read
(function () {
    const title = '"read"';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    const data = binary.read("uint8");
    console.log(`[OK.] ${title} => Read the following data byte: "${String(data)}"`);
})();

(function () {
    const title = '"read" (with custom position)';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    const data = binary.read("uint8", 1);
    console.log(`[OK.] ${title} => Read the following data byte: "${String(data)}"`);
})();
// #endregion read

// #region readAll
(function () {
    const title = '"readAll" (with typeset)';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e], { "jBinary.all": "uint8" });
    const data = binary.readAll();
    console.log(`[OK.] ${title} => Read the following data: "${String(data)}"`);
})();
// #endregion readAll

// #region seek
(function () {
    const title = '"seek"';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    binary.seek(3);
    const data = binary.read("uint8");
    console.log(`[OK.] ${title} => Read the following data after seek: "${String(data)}"`);
})();

(function () {
    const title = '"seek" (with Callback)';
    const binary = new jBinary([0x05, 0x03, 0x7f, 0x1e]);
    const data = binary.seek(3, () => {
        return binary.read("uint8");
    });
    console.log(`[OK.] ${title} => Read the following data after seek: "${String(data)}"`);
})();
// #endregion seek

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

// TODO: as, skip, slice, tell, write, writeAll
// console.log(b1.tell());

// b1.write("int8", 0x9a, 2);
// b1.writeAll(originalData);

// console.log(b1.slice(0, 2));
