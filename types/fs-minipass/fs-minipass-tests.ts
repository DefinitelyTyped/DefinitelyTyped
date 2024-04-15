/**
 * Test suite created by JDB <https://github.com/legodude17>
 *
 * Created by using code samples from https://github.com/npm/fs-minipass.
 */

import fsm = require("fs-minipass");
/**
 * Create readStream
 */
// $ExpectType ReadStream
const readStream = new fsm.ReadStream("file.txt");

/**
 * Create writeStream
 */
// $ExpectType WriteStream
const writeStream = new fsm.WriteStream("output.txt");

/**
 * Write
 */
writeStream.write("some file header or whatever\n");

/**
 * Events
 */
readStream.on("data", data => {
    console.log(data.toString());
});

/**
 * Pipe
 */
readStream.pipe(writeStream);

/**
 * Need path argument
 */
// @ts-expect-error
new fsm.WriteStream();

/**
 * Options
 */
new fsm.ReadStream("path/to/file", {
    fd: 1,
    autoClose: false,
    readSize: 256,
    size: 512,
});
new fsm.WriteStream("path/to/file", {
    fd: 2,
    mode: 0x077,
    start: 6,
    autoClose: false,
    flags: "w",
});

/**
 * No options are required
 */
new fsm.ReadStream("path/to/file", {});
new fsm.WriteStream("path/to/file", {});

/**
 * Sync versions
 */
// $ExpectType ReadStreamSync
const syncReadStream = new fsm.ReadStreamSync("path/to/file");
// $ExpectType WriteStreamSync
const syncWriteStream = new fsm.WriteStreamSync("path/to/file");

syncReadStream.pipe(syncWriteStream);
