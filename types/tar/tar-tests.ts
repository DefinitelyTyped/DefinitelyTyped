/**
 * Test suite created by Maxime LUCE <https://github.com/SomaticIT>
 *
 * Created by using code samples from https://github.com/npm/node-tar.
 */

import tar = require("tar");
import fs = require("fs");

/**
 * Quick Extract
 */
fs.createReadStream("path/to/file.tar").pipe(tar.Extract("path/to/extract"));

/**
 * Use with events
 */
var readStream = fs.createReadStream("/path/to/file.tar");
var extract = tar.Extract("/path/to/target");

readStream.pipe(extract);

extract.on("entry", (entry: any) => {

});

var packStream: tar.PackStream = tar.Pack();
packStream = tar.Pack({ path: 'test' });
