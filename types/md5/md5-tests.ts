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
const message = 'message';

console.log(md5(message)); // should print 78e731027d8fd50ed642340b7c9a63b3

const array = new Array<number>(message.length);
for (let i = 0; i < message.length; ++i)
  array[i] = message.charCodeAt(i);
const buffer = new Buffer(array);
console.log(md5(buffer));  // Should be same result as above.
