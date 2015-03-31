/// <reference path="node.d.ts" />

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
import path = require("path");

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

////////////////////////////////////////////////////
/// Url tests : http://nodejs.org/api/url.html
////////////////////////////////////////////////////

url.format(url.parse('http://www.example.com/xyz'));

// https://google.com/search?q=you're%20a%20lizard%2C%20gary
url.format({
    protocol: 'https', 
    host: "google.com", 
    pathname: 'search', 
    query: { q: "you're a lizard, gary" }
});

var helloUrl = url.parse('http://example.com/?hello=world', true)
assert.equal(helloUrl.query.hello, 'world');


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
    r.close();
}

////////////////////////////////////////////////////
/// Crypto tests : http://nodejs.org/api/crypto.html
////////////////////////////////////////////////////

var hmacResult: string = crypto.createHmac('md5', 'hello').update('world').digest('hex');

function crypto_cipher_decipher_string_test() {
	var key:Buffer = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7]);
	var clearText:string = "This is the clear text.";
	var cipher:crypto.Cipher = crypto.createCipher("aes-128-ecb", key);
	var cipherText:string = cipher.update(clearText, "utf8", "hex");
	cipherText += cipher.final("hex");

	var decipher:crypto.Decipher = crypto.createDecipher("aes-128-ecb", key);
	var clearText2:string = decipher.update(cipherText, "hex", "utf8");
	clearText2 += decipher.final("utf8");

	assert.equal(clearText2, clearText);
}

function crypto_cipher_decipher_buffer_test() {
	var key:Buffer = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7]);
	var clearText:Buffer = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4]);
	var cipher:crypto.Cipher = crypto.createCipher("aes-128-ecb", key);
	var cipherBuffers:Buffer[] = [];
	cipherBuffers.push(cipher.update(clearText));
	cipherBuffers.push(cipher.final());

	var cipherText:Buffer = Buffer.concat(cipherBuffers);

	var decipher:crypto.Decipher = crypto.createDecipher("aes-128-ecb", key);
	var decipherBuffers:Buffer[] = [];
	decipherBuffers.push(decipher.update(cipherText));
	decipherBuffers.push(decipher.final());

	var clearText2:Buffer = Buffer.concat(decipherBuffers);

	assert.deepEqual(clearText2, clearText);
}

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
	
	var agent: http.Agent = new http.Agent({
		keepAlive: true,
		keepAliveMsecs: 10000,
		maxSockets: Infinity,
		maxFreeSockets: 256
	});
	
	var agent: http.Agent = http.globalAgent;
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
/// path tests : http://nodejs.org/api/path.html
////////////////////////////////////////////////////

module path_tests {

    path.normalize('/foo/bar//baz/asdf/quux/..');

    path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
    // returns
    //'/foo/bar/baz/asdf'

    try {
        path.join('foo', {}, 'bar');
    }
    catch(error) {

    }

    path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile');
    //Is similar to:
    //
    //cd foo/bar
    //cd /tmp/file/
    //cd ..
    //    cd a/../subfile
    //pwd

    path.resolve('/foo/bar', './baz')
    // returns
    //    '/foo/bar/baz'

    path.resolve('/foo/bar', '/tmp/file/')
    // returns
    //    '/tmp/file'

    path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
    // if currently in /home/myself/node, it returns
    //    '/home/myself/node/wwwroot/static_files/gif/image.gif'

    path.isAbsolute('/foo/bar') // true
    path.isAbsolute('/baz/..')  // true
    path.isAbsolute('qux/')     // false
    path.isAbsolute('.')        // false

    path.isAbsolute('//server')  // true
    path.isAbsolute('C:/foo/..') // true
    path.isAbsolute('bar\\baz')   // false
    path.isAbsolute('.')         // false

    path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb')
// returns
//    '..\\..\\impl\\bbb'

    path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')
// returns
//    '../../impl/bbb'

    path.dirname('/foo/bar/baz/asdf/quux')
// returns
//    '/foo/bar/baz/asdf'

    path.basename('/foo/bar/baz/asdf/quux.html')
// returns
//    'quux.html'

    path.basename('/foo/bar/baz/asdf/quux.html', '.html')
// returns
//    'quux'

    path.extname('index.html')
// returns
//    '.html'

    path.extname('index.coffee.md')
// returns
//    '.md'

    path.extname('index.')
// returns
//    '.'

    path.extname('index')
// returns
//    ''

    'foo/bar/baz'.split(path.sep)
// returns
//        ['foo', 'bar', 'baz']

    'foo\\bar\\baz'.split(path.sep)
// returns
//        ['foo', 'bar', 'baz']

    console.log(process.env.PATH)
// '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'

    process.env.PATH.split(path.delimiter)
// returns
//        ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']

    console.log(process.env.PATH)
// 'C:\Windows\system32;C:\Windows;C:\Program Files\nodejs\'

    process.env.PATH.split(path.delimiter)
// returns
//        ['C:\Windows\system32', 'C:\Windows', 'C:\Program Files\nodejs\']

    path.parse('/home/user/dir/file.txt')
// returns
//    {
//        root : "/",
//        dir : "/home/user/dir",
//        base : "file.txt",
//        ext : ".txt",
//        name : "file"
//    }

    path.parse('C:\\path\\dir\\index.html')
// returns
//    {
//        root : "C:\",
//        dir : "C:\path\dir",
//        base : "index.html",
//        ext : ".html",
//        name : "index"
//    }

    path.format({
        root : "/",
        dir : "/home/user/dir",
        base : "file.txt",
        ext : ".txt",
        name : "file"
    });
// returns
//    '/home/user/dir/file.txt'
}
