/// <reference path="node-0.11.d.ts" />

import assert = require("assert");
import fs = require("fs");
import events = require("events");
import zlib = require("zlib");
import url = require('url');
import util = require("util");
import crypto = require("crypto");
import http = require("http");
import net = require("net");
import dgram = require("dgram");
import querystring = require('querystring');
import readline = require('readline');

assert(1 + 1 - 2 === 0, "The universe isn't how it should.");

assert.deepEqual({ x: { y: 3 } }, { x: { y: 3 } }, "DEEP WENT DERP");

assert.equal(3, "3", "uses == comparator");

assert.notStrictEqual(2, "2", "uses === comparator");

assert.throws(() => { throw "a hammer at your face"; }, undefined, "DODGED IT");

assert.doesNotThrow(() => {
    if (false) { throw "a hammer at your face"; }
}, undefined, "What the...*crunch*");

////////////////////////////////////////////////////
/// File system tests : http://nodejs.org/api/fs.html
////////////////////////////////////////////////////
fs.writeFile("thebible.txt",
    "Do unto others as you would have them do unto you.",
    assert.ifError);

fs.writeFile("Harry Potter",
    "\"You be wizzing, Harry,\" jived Dumbledore.",
    {
        encoding: "ascii"
    },
    assert.ifError);

var content: string,
    buffer: Buffer;

content = fs.readFileSync('testfile', 'utf8');
content = fs.readFileSync('testfile', {encoding : 'utf8'});
buffer = fs.readFileSync('testfile');
buffer = fs.readFileSync('testfile', {flag : 'r'});
fs.readFile('testfile', 'utf8', (err, data) => content = data);
fs.readFile('testfile', {encoding : 'utf8'}, (err, data) => content = data);
fs.readFile('testfile', (err, data) => buffer = data);
fs.readFile('testfile', {flag : 'r'}, (err, data) => buffer = data);

class Networker extends events.EventEmitter {
    constructor() {
        super();

        this.emit("mingling");
    }
}

var errno: number;
fs.readFile('testfile', (err, data) => {
    if (err && err.errno) {
        errno = err.errno;
    }
});

url.format(url.parse('http://www.example.com/xyz'));

// https://google.com/search?q=you're%20a%20lizard%2C%20gary
url.format({
    protocol: 'https',
    host: "google.com",
    pathname: 'search',
    query: { q: "you're a lizard, gary" }
});

// Old and new util.inspect APIs
util.inspect(["This is nice"], false, 5);
util.inspect(["This is nice"], { colors: true, depth: 5, customInspect: false });

////////////////////////////////////////////////////
/// Stream tests : http://nodejs.org/api/stream.html
////////////////////////////////////////////////////

// http://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
function stream_readable_pipe_test() {
    var r = fs.createReadStream('file.txt');
    var z = zlib.createGzip();
    var w = fs.createWriteStream('file.txt.gz');
    r.pipe(z).pipe(w);
}

////////////////////////////////////////////////////
/// Crypto tests : http://nodejs.org/api/crypto.html
////////////////////////////////////////////////////

var hmacResult: string = crypto.createHmac('md5', 'hello').update('world').digest('hex');

////////////////////////////////////////////////////

// Make sure .listen() and .close() retuern a Server instance
http.createServer().listen(0).close().address();
net.createServer().listen(0).close().address();

var request = http.request('http://0.0.0.0');
request.once('error', function () {});
request.setNoDelay(true);
request.abort();

////////////////////////////////////////////////////
/// Http tests : http://nodejs.org/api/http.html
////////////////////////////////////////////////////
module http_tests {
    // Status codes
    var code = 100;
    var codeMessage = http.STATUS_CODES['400'];
    var codeMessage = http.STATUS_CODES[400];
}

////////////////////////////////////////////////////
/// Dgram tests : http://nodejs.org/api/dgram.html
////////////////////////////////////////////////////

var ds: dgram.Socket = dgram.createSocket("udp4", (msg: Buffer, rinfo: dgram.RemoteInfo): void => {
});
var ai: dgram.AddressInfo = ds.address();
ds.send(new Buffer("hello"), 0, 5, 5000, "127.0.0.1", (error: Error, bytes: number): void => {
});

////////////////////////////////////////////////////
///Querystring tests : https://gist.github.com/musubu/2202583
////////////////////////////////////////////////////

var original: string = 'http://example.com/product/abcde.html';
var escaped: string = querystring.escape(original);
console.log(escaped);
// http%3A%2F%2Fexample.com%2Fproduct%2Fabcde.html
var unescaped: string = querystring.unescape(escaped);
console.log(unescaped);
// http://example.com/product/abcde.html

////////////////////////////////////////////////////
///ReadLine tests : https://nodejs.org/docs/v0.11.0/api/readline.html
////////////////////////////////////////////////////

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("$>");
rl.prompt();
rl.prompt(true);

rl.question("do you like typescript?", function(answer: string) {
  rl.close();
});
