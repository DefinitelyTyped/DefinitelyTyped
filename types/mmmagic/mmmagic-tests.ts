
import Magic = require("mmmagic");

// get general description of a file
var magic: Magic.Magic;

magic = new Magic.Magic();
magic.detectFile('node_modules/mmmagic/build/Release/magic.node', function(err: Error, result: string) {
    if (err) throw err;
    console.log(result);
    // output on Windows with 32-bit node:
});

// get mime type for a file
magic = new Magic.Magic(Magic.MAGIC_MIME_TYPE);
magic.detectFile('node_modules/mmmagic/build/Release/magic.node', function(err: Error, result: string) {
    if (err) throw err;
    console.log(result);
});

// get mime type and mime encoding for a file
magic = new Magic.Magic();
var buf = new Buffer('import Options\nfrom os import unlink, symlink');

magic.detect(buf, function(err: Error, result: string) {
    if (err) throw err;
    console.log(result);
    // output: Python script, ASCII text executable
});