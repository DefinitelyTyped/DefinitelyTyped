import RandomAccessFile = require("random-access-file");
import RandomAccessStorage = require("random-access-storage");

let file: RandomAccessStorage = new RandomAccessFile("filename");

file = new RandomAccessFile("filename2", {
    truncate: true,
    size: 123,
    readable: true,
    writable: true,
    lock: false,
    sparse: true,
});
