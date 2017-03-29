import fs = require("fs");
import sha1 = require("sha1");
/**
 * API
 * sha1(message)
 * message -- String or Buffer
 * returns String
 *
 * Usage
 ****************************************************
 * var sha1 = require('sha1');                      *
 * console.log(sha1('message'));                    *
 ****************************************************
 * This will print the following
 * 6f9b9af3cd6e8b8a73c2cdced37fe9f59226e27d
 *
 * It supports buffers, too
 ****************************************************
 * var fs = require('fs');                          *
 * var sha1 = require('sha1');                      *
 *                                                  *
 * fs.readFile('example.txt', function(err, buf) {  *
 *   console.log(sha1(buf));                        *
 * });                                              *
 * **************************************************
 */
console.log(sha1('message')); // should print 6f9b9af3cd6e8b8a73c2cdced37fe9f59226e27d

const testTwo = sha1('message', {asString: true});
const testThree = sha1('message', {asBytes: true});

fs.readFile('sha1.d.ts', (err: Error, buf: Buffer) => {
    console.log(sha1(buf));
});
