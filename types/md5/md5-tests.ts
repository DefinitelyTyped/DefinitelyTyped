import fs = require("fs");
import md5 = require("md5");
/**
 * API
 * md5(message)
 * message -- String or Buffer
 * returns String
 *
 * Usage
 ****************************************************
 * var md5 = require('md5');                        *
 * console.log(md5('message'));                     *
 ****************************************************
 * This will print the following
 * 78e731027d8fd50ed642340b7c9a63b3
 *
 * It supports buffers, too
 ****************************************************
 * var fs = require('fs');                          *
 * var md5 = require('md5');                        *
 *                                                  *
 * fs.readFile('example.txt', function(err, buf) {  *
 *   console.log(md5(buf));                         *
 * });                                              *
 * **************************************************
 */
console.log(md5('message')); // should print 78e731027d8fd50ed642340b7c9a63b3

fs.readFile('md5.d.ts', function(err: Error, buf: Buffer) {
	console.log(md5(buf));
});