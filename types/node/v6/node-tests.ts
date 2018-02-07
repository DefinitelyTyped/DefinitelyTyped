import assert = require("assert");
import * as fs from "fs";
import * as events from "events";
import events2 = require("events");
import * as zlib from "zlib";
import * as url from "url";
import * as util from "util";
import * as crypto from "crypto";
import * as tls from "tls";
import * as http from "http";
import * as https from "https";
import * as net from "net";
import * as tty from "tty";
import * as dgram from "dgram";
import * as querystring from "querystring";
import * as path from "path";
import * as readline from "readline";
import * as childProcess from "child_process";
import * as cluster from "cluster";
import * as os from "os";
import * as vm from "vm";
import * as console2 from "console";
import * as string_decoder from "string_decoder";
import * as stream from "stream";
import * as timers from "timers";
import * as repl from "repl";
import * as dns from "dns";

// Specifically test buffer module regression.
import { Buffer as ImportedBuffer, SlowBuffer as ImportedSlowBuffer } from "buffer";

//////////////////////////////////////////////////////////
/// Global Tests : https://nodejs.org/api/global.html  ///
//////////////////////////////////////////////////////////
namespace global_tests {
    {
        let x: NodeModule;
        let y: NodeModule;
        x.children.push(y);
        x.parent = require.main;
        require.main = y;
    }
}

//////////////////////////////////////////////////////////
/// Assert Tests : https://nodejs.org/api/assert.html ///
//////////////////////////////////////////////////////////

namespace assert_tests {
    {
        assert(1 + 1 - 2 === 0, "The universe isn't how it should.");

        assert.deepEqual({ x: { y: 3 } }, { x: { y: 3 } }, "DEEP WENT DERP");

        assert.deepStrictEqual({ a: 1 }, { a: 1 }, "uses === comparator");

        assert.doesNotThrow(() => {
            const b = false;
            if (b) { throw "a hammer at your face"; }
        }, undefined, "What the...*crunch*");

        assert.equal(3, "3", "uses == comparator");

        assert.fail("actual", "expected", "message");

        assert.fail(1, 2, undefined, '>');

        assert.ifError(0);

        assert.notDeepStrictEqual({ x: { y: "3" } }, { x: { y: 3 } }, "uses !== comparator");

        assert.notEqual(1, 2, "uses != comparator");

        assert.notStrictEqual(2, "2", "uses === comparator");

        assert.ok(true);
        assert.ok(1);

        assert.strictEqual(1, 1,  "uses === comparator");

        assert.throws(() => { throw "a hammer at your face"; }, undefined, "DODGED IT");
    }
}

////////////////////////////////////////////////////
/// Events tests : http://nodejs.org/api/events.html
////////////////////////////////////////////////////

namespace events_tests {
    let emitter: events.EventEmitter;
    let event: string | symbol;
    let listener: Function;
    let any: any;

    {
        let result: events.EventEmitter;

        result = emitter.addListener(event, listener);
        result = emitter.on(event, listener);
        result = emitter.once(event, listener);
        result = emitter.prependListener(event, listener);
        result = emitter.prependOnceListener(event, listener);
        result = emitter.removeListener(event, listener);
        result = emitter.removeAllListeners();
        result = emitter.removeAllListeners(event);
        result = emitter.setMaxListeners(42);
    }

    {
        let result: number;

        result = events.EventEmitter.defaultMaxListeners;
        result = events.EventEmitter.listenerCount(emitter, event); // deprecated

        result = emitter.getMaxListeners();
        result = emitter.listenerCount(event);
    }

    {
        let result: Function[];

        result = emitter.listeners(event);
    }

    {
        let result: boolean;

        result = emitter.emit(event);
        result = emitter.emit(event, any);
        result = emitter.emit(event, any, any);
        result = emitter.emit(event, any, any, any);
    }

    {
        let result: (string | symbol)[];

        result = emitter.eventNames();
    }

    {
        class Networker extends events.EventEmitter {
            constructor() {
                super();

                this.emit("mingling");
            }
        }
    }

    {
        new events2();
    }
}

////////////////////////////////////////////////////
/// File system tests : http://nodejs.org/api/fs.html
////////////////////////////////////////////////////

namespace fs_tests {
    {
        fs.writeFile("thebible.txt",
            "Do unto others as you would have them do unto you.",
            assert.ifError);

        fs.write(1234, "test");

        fs.writeFile("Harry Potter",
            "\"You be wizzing, Harry,\" jived Dumbledore.",
            {
                encoding: "ascii"
            },
            assert.ifError);

        fs.writeFile("testfile", "content", "utf8", assert.ifError);

        fs.writeFileSync("testfile", "content", "utf8");
        fs.writeFileSync("testfile", "content", { encoding: "utf8" });
    }

    {
        fs.appendFile("testfile", "foobar", "utf8", assert.ifError);
        fs.appendFile("testfile", "foobar", { encoding: "utf8" }, assert.ifError);
        fs.appendFileSync("testfile", "foobar", "utf8");
        fs.appendFileSync("testfile", "foobar", { encoding: "utf8" });
    }

    {
        var content: string;
        var buffer: Buffer;
        var stringOrBuffer: string | Buffer;
        var nullEncoding: string | null = null;
        var stringEncoding: string | null = 'utf8';

        content = fs.readFileSync('testfile', 'utf8');
        content = fs.readFileSync('testfile', { encoding: 'utf8' });
        stringOrBuffer = fs.readFileSync('testfile', stringEncoding);
        stringOrBuffer = fs.readFileSync('testfile', { encoding: stringEncoding });

        buffer = fs.readFileSync('testfile');
        buffer = fs.readFileSync('testfile', null);
        buffer = fs.readFileSync('testfile', { encoding: null });
        stringOrBuffer = fs.readFileSync('testfile', nullEncoding);
        stringOrBuffer = fs.readFileSync('testfile', { encoding: nullEncoding });

        buffer = fs.readFileSync('testfile', { flag: 'r' });

        fs.readFile('testfile', 'utf8', (err, data) => content = data);
        fs.readFile('testfile', { encoding: 'utf8' }, (err, data) => content = data);
        fs.readFile('testfile', stringEncoding, (err, data) => stringOrBuffer = data);
        fs.readFile('testfile', { encoding: stringEncoding }, (err, data) => stringOrBuffer = data);

        fs.readFile('testfile', (err, data) => buffer = data);
        fs.readFile('testfile', null, (err, data) => buffer = data);
        fs.readFile('testfile', { encoding: null }, (err, data) => buffer = data);
        fs.readFile('testfile', nullEncoding, (err, data) => stringOrBuffer = data);
        fs.readFile('testfile', { encoding: nullEncoding }, (err, data) => stringOrBuffer = data);

        fs.readFile('testfile', { flag: 'r' }, (err, data) => buffer = data);
    }

    {
        fs.readdir('foo', (err: any, files: string[]) => {})
        fs.readdir('foo', 'utf8', (err: any, files: string[]) => {});
        fs.readdir('foo', {encoding: 'utf8'}, (err: any, files: string[]) => {});
        fs.readdir('foo', 'buffer', (err: any, files: Buffer[]) => {});
        fs.readdir('foo', {encoding: 'buffer'}, (err: any, files: Buffer[]) => {});

        let fsStringOut: string[] = fs.readdirSync('utf8');
        fsStringOut = fs.readdirSync('foo', 'utf8');
        fsStringOut = fs.readdirSync('foo', {encoding: 'utf8'});

        let fsBufferOut: Buffer[] = fs.readdirSync('utf8', 'buffer');
        fsBufferOut = fs.readdirSync('foo', {encoding: 'buffer'});
    }

    {
        var errno: number;
        fs.readFile('testfile', (err, data) => {
            if (err && err.errno) {
                errno = err.errno;
            }
        });
    }

    {
        fs.mkdtemp('/tmp/foo-', (err, folder) => {
            console.log(folder);
            // Prints: /tmp/foo-itXde2
        });
    }

    {
        var tempDir: string;
        tempDir = fs.mkdtempSync('/tmp/foo-');
    }

    {
        fs.watch('/tmp/foo-', (event, filename) => {
          console.log(event, filename);
        });

        fs.watch('/tmp/foo-', 'utf8', (event, filename) => {
          console.log(event, filename);
        });

        fs.watch('/tmp/foo-', {
          recursive: true,
          persistent: true,
          encoding: 'utf8'
        }, (event, filename) => {
          console.log(event, filename);
        });
    }

    {
        fs.access('/path/to/folder', (err) => { });

        fs.access(Buffer.from(''), (err) => { });

        fs.access('/path/to/folder', fs.constants.F_OK | fs.constants.R_OK, (err) => { });

        fs.access(Buffer.from(''), fs.constants.F_OK | fs.constants.R_OK, (err) => { });

        fs.accessSync('/path/to/folder');

        fs.accessSync(Buffer.from(''));

        fs.accessSync('path/to/folder', fs.constants.W_OK | fs.constants.X_OK);

        fs.accessSync(Buffer.from(''), fs.constants.W_OK | fs.constants.X_OK);
    }
}

///////////////////////////////////////////////////////
/// Buffer tests : https://nodejs.org/api/buffer.html
///////////////////////////////////////////////////////

function bufferTests() {
    var utf8Buffer = new Buffer('test');
    var base64Buffer = new Buffer('', 'base64');
    var octets: Uint8Array = null;
    var octetBuffer = new Buffer(octets);
    var sharedBuffer = new Buffer(octets.buffer);
    var copiedBuffer = new Buffer(utf8Buffer);
    console.log(Buffer.isBuffer(octetBuffer));
    console.log(Buffer.isEncoding('utf8'));
    console.log(Buffer.byteLength('xyz123'));
    console.log(Buffer.byteLength('xyz123', 'ascii'));
    var result1 = Buffer.concat([utf8Buffer, base64Buffer]);
    var result2 = Buffer.concat([utf8Buffer, base64Buffer], 9999999);

    // Class Methods: Buffer.swap16(), Buffer.swa32(), Buffer.swap64()
    {
        const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);
        buf.swap16();
        buf.swap32();
        buf.swap64();
    }

    // Class Method: Buffer.from(array)
    {
        const buf: Buffer = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
    }

    // Class Method: Buffer.from(arrayBuffer[, byteOffset[, length]])
    {
        const arr: Uint16Array = new Uint16Array(2);
        arr[0] = 5000;
        arr[1] = 4000;

        let buf: Buffer;
        buf = Buffer.from(arr.buffer);
        buf = Buffer.from(arr.buffer, 1);
        buf = Buffer.from(arr.buffer, 0, 1);
    }

    // Class Method: Buffer.from(buffer)
    {
        const buf1: Buffer = Buffer.from('buffer');
        const buf2: Buffer = Buffer.from(buf1);
    }

    // Class Method: Buffer.from(str[, encoding])
    {
        const buf1: Buffer = Buffer.from('this is a tést');
        const buf2: Buffer = Buffer.from('7468697320697320612074c3a97374', 'hex');
    }
    // Class Method: Buffer.alloc(size[, fill[, encoding]])
    {
        const buf1: Buffer = Buffer.alloc(5);
        const buf2: Buffer = Buffer.alloc(5, 'a');
        const buf3: Buffer = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
    }
    // Class Method: Buffer.allocUnsafe(size)
    {
        const buf: Buffer = Buffer.allocUnsafe(5);
    }
    // Class Method: Buffer.allocUnsafeSlow(size)
    {
        const buf: Buffer = Buffer.allocUnsafeSlow(10);
    }

    // Test that TS 1.6 works with the 'as Buffer' annotation
    // on isBuffer.
    var a: Buffer | number;
    a = new Buffer(10);
    if (Buffer.isBuffer(a)) {
        a.writeUInt8(3, 4);
    }

    // write* methods return offsets.
    var b = new Buffer(16);
    var result: number = b.writeUInt32LE(0, 0);
    result = b.writeUInt16LE(0, 4);
    result = b.writeUInt8(0, 6);
    result = b.writeInt8(0, 7);
    result = b.writeDoubleLE(0, 8);

    // fill returns the input buffer.
    b.fill('a').fill('b');

    {
        let buffer = new Buffer('123');
        let index: number;
        index = buffer.indexOf("23");
        index = buffer.indexOf("23", 1);
        index = buffer.indexOf("23", 1, "utf8");
        index = buffer.indexOf(23);
        index = buffer.indexOf(buffer);
    }

    {
        let buffer = new Buffer('123');
        let index: number;
        index = buffer.lastIndexOf("23");
        index = buffer.lastIndexOf("23", 1);
        index = buffer.lastIndexOf("23", 1, "utf8");
        index = buffer.lastIndexOf(23);
        index = buffer.lastIndexOf(buffer);
    }

    {
        let buffer = new Buffer('123');
        let val: [number, number];

        /* comment out for --target es5
        for (let entry of buffer.entries()) {
            val = entry;
        }
         */
    }

    {
        let buffer = new Buffer('123');
        let includes: boolean;
        includes = buffer.includes("23");
        includes = buffer.includes("23", 1);
        includes = buffer.includes("23", 1, "utf8");
        includes = buffer.includes(23);
        includes = buffer.includes(23, 1);
        includes = buffer.includes(23, 1, "utf8");
        includes = buffer.includes(buffer);
        includes = buffer.includes(buffer, 1);
        includes = buffer.includes(buffer, 1, "utf8");
    }

    {
        let buffer = new Buffer('123');
        let val: number;

        /* comment out for --target es5
        for (let key of buffer.keys()) {
            val = key;
        }
         */
    }

    {
        let buffer = new Buffer('123');
        let val: number;

        /* comment out for --target es5
        for (let value of buffer.values()) {
            val = value;
        }
         */
    }

    // Imported Buffer from buffer module works properly
    {
        let b = new ImportedBuffer('123');
        b.writeUInt8(0, 6);
        let sb = new ImportedSlowBuffer(43);
        b.writeUInt8(0, 6);
    }

    // Buffer has Uint8Array's buffer field (an ArrayBuffer).
    {
      let buffer = new Buffer('123');
      let octets = new Uint8Array(buffer.buffer);
    }
}


////////////////////////////////////////////////////
/// Url tests : http://nodejs.org/api/url.html
////////////////////////////////////////////////////

namespace url_tests {
    {
        url.format(url.parse('http://www.example.com/xyz'));

        url.format('http://www.example.com/xyz');

        // https://google.com/search?q=you're%20a%20lizard%2C%20gary
        url.format({
            protocol: 'https',
            host: "google.com",
            pathname: 'search',
            query: { q: "you're a lizard, gary" }
        });
    }

    {
        var helloUrl = url.parse('http://example.com/?hello=world', true)
        assert.equal(helloUrl.query.hello, 'world');
    }
}

/////////////////////////////////////////////////////
/// util tests : https://nodejs.org/api/util.html ///
/////////////////////////////////////////////////////

namespace util_tests {
    {
        // Old and new util.inspect APIs
        util.inspect(["This is nice"], false, 5);
        util.inspect(["This is nice"], false, null);
        util.inspect(["This is nice"], {
          colors: true,
          depth: 5,
          customInspect: false,
          showProxy: true,
          maxArrayLength: 10,
          breakLength: 20
        });
        util.inspect(["This is nice"], {
          colors: true,
          depth: null,
          customInspect: false,
          showProxy: true,
          maxArrayLength: null,
          breakLength: Infinity
        });
        // util.deprecate
        const foo = () => {};
        // $ExpectType () => void
        util.deprecate(foo, 'foo() is deprecated, use bar() instead');
        // $ExpectType <T extends Function>(fn: T, message: string) => T
        util.deprecate(util.deprecate, 'deprecate() is deprecated, use bar() instead');
    }
}

////////////////////////////////////////////////////
/// Stream tests : http://nodejs.org/api/stream.html
////////////////////////////////////////////////////

// http://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
function stream_readable_pipe_test() {
    var rs = fs.createReadStream(Buffer.from('file.txt'));
    var r = fs.createReadStream('file.txt');
    var z = zlib.createGzip({ finishFlush: zlib.Z_FINISH });
    var w = fs.createWriteStream('file.txt.gz');

    assert(typeof r.bytesRead === 'number');
    assert(typeof r.path === 'string');
    assert(rs.path instanceof Buffer);

    r.pipe(z).pipe(w);

    r.close();
    rs.close();
}

// helpers
const compressMe = new Buffer("some data");
const compressMeString = "compress me!";

zlib.deflate(compressMe, (err: Error, result: Buffer) => zlib.inflate(result, (err: Error, result: Buffer) => result));
zlib.deflate(compressMeString, (err: Error, result: Buffer) => zlib.inflate(result, (err: Error, result: Buffer) => result));
const inflated = zlib.inflateSync(zlib.deflateSync(compressMe));
const inflatedString = zlib.inflateSync(zlib.deflateSync(compressMeString));

zlib.deflateRaw(compressMe, (err: Error, result: Buffer) => zlib.inflateRaw(result, (err: Error, result: Buffer) => result));
zlib.deflateRaw(compressMeString, (err: Error, result: Buffer) => zlib.inflateRaw(result, (err: Error, result: Buffer) => result));
const inflatedRaw: Buffer = zlib.inflateRawSync(zlib.deflateRawSync(compressMe));
const inflatedRawString: Buffer = zlib.inflateRawSync(zlib.deflateRawSync(compressMeString));

zlib.gzip(compressMe, (err: Error, result: Buffer) => zlib.gunzip(result, (err: Error, result: Buffer) => result));
const gunzipped: Buffer = zlib.gunzipSync(zlib.gzipSync(compressMe));

zlib.unzip(compressMe, (err: Error, result: Buffer) => result);
const unzipped: Buffer = zlib.unzipSync(compressMe);

// Simplified constructors
function simplified_stream_ctor_test() {
    new stream.Readable({
        read: function(size) {
            size.toFixed();
        }
    });

    new stream.Writable({
        write: function(chunk, enc, cb) {
            chunk.slice(1);
            enc.charAt(0);
            cb()
        },
        writev: function(chunks, cb) {
            chunks[0].chunk.slice(0);
            chunks[0].encoding.charAt(0);
            cb();
        }
    });

    new stream.Duplex({
        read: function(size) {
            size.toFixed();
        },
        write: function(chunk, enc, cb) {
            chunk.slice(1);
            enc.charAt(0);
            cb()
        },
        writev: function(chunks, cb) {
            chunks[0].chunk.slice(0);
            chunks[0].encoding.charAt(0);
            cb();
        },
        readableObjectMode: true,
        writableObjectMode: true
    });

    new stream.Transform({
        transform: function(chunk, enc, cb) {
            chunk.slice(1);
            enc.charAt(0);
            cb();
        },
        flush: function(cb) {
            cb()
        },
        read: function(size) {
            size.toFixed();
        },
        write: function(chunk, enc, cb) {
            chunk.slice(1);
            enc.charAt(0);
            cb()
        },
        writev: function(chunks, cb) {
            chunks[0].chunk.slice(0);
            chunks[0].encoding.charAt(0);
            cb();
        },
        allowHalfOpen: true,
        readableObjectMode: true,
        writableObjectMode: true
    })
}

// Subclassing stream classes
{
    class SubclassedReadable extends stream.Readable {};

    let subclassedReadable: SubclassedReadable = new SubclassedReadable();
    subclassedReadable = subclassedReadable.pause();
    subclassedReadable = subclassedReadable.resume();

    class SubclassedTransform extends stream.Transform {};

    let subclassedTransform: SubclassedTransform = new SubclassedTransform();
    subclassedTransform = subclassedTransform.pause();
    subclassedTransform = subclassedTransform.resume();

    class SubclassedDuplex extends stream.Duplex {};

    let subclassedDuplex: SubclassedDuplex = new SubclassedDuplex();
    subclassedDuplex = subclassedDuplex.pause();
    subclassedDuplex = subclassedDuplex.resume();

    // assignability
    let readable: stream.Readable = subclassedDuplex;
    readable = subclassedTransform;
    let duplex: stream.Duplex = subclassedTransform;
}

////////////////////////////////////////////////////////
/// Crypto tests : http://nodejs.org/api/crypto.html ///
////////////////////////////////////////////////////////

namespace crypto_tests {
    {
        var hmacResult: string = crypto.createHmac('md5', 'hello').update('world').digest('hex');
    }

    {
    let hmac: crypto.Hmac;
    (hmac = crypto.createHmac('md5', 'hello')).end('world', 'utf8', () => {
            let hash: Buffer | string = hmac.read();
    });
    }

    {
        //crypto_cipher_decipher_string_test
        let key: Buffer = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7]);
        let clearText: string = "This is the clear text.";
        let cipher: crypto.Cipher = crypto.createCipher("aes-128-ecb", key);
        let cipherText: string = cipher.update(clearText, "utf8", "hex");
	cipherText += cipher.final("hex");

        let decipher: crypto.Decipher = crypto.createDecipher("aes-128-ecb", key);
        let clearText2: string = decipher.update(cipherText, "hex", "utf8");
	clearText2 += decipher.final("utf8");

	assert.equal(clearText2, clearText);
    }

    {
        //crypto_cipher_decipher_buffer_test
        let key: Buffer = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7]);
        let clearText: Buffer = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4]);
        let cipher: crypto.Cipher = crypto.createCipher("aes-128-ecb", key);
        let cipherBuffers: Buffer[] = [];
	cipherBuffers.push(cipher.update(clearText));
	cipherBuffers.push(cipher.final());

        let cipherText: Buffer = Buffer.concat(cipherBuffers);

        let decipher: crypto.Decipher = crypto.createDecipher("aes-128-ecb", key);
        let decipherBuffers: Buffer[] = [];
	decipherBuffers.push(decipher.update(cipherText));
	decipherBuffers.push(decipher.final());

        let clearText2: Buffer = Buffer.concat(decipherBuffers);

	assert.deepEqual(clearText2, clearText);
    }

    {
      let buffer1: Buffer = new Buffer([1, 2, 3, 4, 5]);
      let buffer2: Buffer = new Buffer([1, 2, 3, 4, 5]);
      let buffer3: Buffer = new Buffer([5, 4, 3, 2, 1]);

      assert(crypto.timingSafeEqual(buffer1, buffer2))
      assert(!crypto.timingSafeEqual(buffer1, buffer3))
    }
}

//////////////////////////////////////////////////
/// TLS tests : http://nodejs.org/api/tls.html ///
//////////////////////////////////////////////////

namespace tls_tests {
    {
    var ctx: tls.SecureContext = tls.createSecureContext({
    key: "NOT REALLY A KEY",
    cert: "SOME CERTIFICATE",
    });
    var blah = ctx.context;

    var connOpts: tls.ConnectionOptions = {
	host: "127.0.0.1",
	port: 55
    };
    var tlsSocket = tls.connect(connOpts);
    }

    {
        let _server: tls.Server;
        let _boolean: boolean;
        let _func1 = function(err: Error, resp: Buffer){};
        let _func2 = function(err: Error, sessionData: any){};
        /**
         * events.EventEmitter
         * 1. tlsClientError
         * 2. newSession
         * 3. OCSPRequest
         * 4. resumeSession
         * 5. secureConnection
         **/

        _server = _server.addListener("tlsClientError", (err, tlsSocket) => {
            let _err: Error = err;
            let _tlsSocket: tls.TLSSocket = tlsSocket;
        })
        _server = _server.addListener("newSession", (sessionId, sessionData, callback) => {
            let _sessionId: any = sessionId;
            let _sessionData: any = sessionData;
            let _func1 = callback;
        })
        _server = _server.addListener("OCSPRequest", (certificate, issuer, callback) => {
            let _certificate: Buffer = certificate;
            let _issuer: Buffer = issuer;
            let _callback: Function = callback;
        })
        _server = _server.addListener("resumeSession", (sessionId, callback) => {
            let _sessionId: any = sessionId;
            let _func2 = callback;
        })
        _server = _server.addListener("secureConnection", (tlsSocket) => {
            let _tlsSocket: tls.TLSSocket = tlsSocket;
        })

        let _err: Error;
        let _tlsSocket: tls.TLSSocket;
        let _any: any;
        let _func: Function;
        let _buffer: Buffer;
        _boolean = _server.emit("tlsClientError", _err, _tlsSocket);
        _boolean = _server.emit("newSession", _any, _any, _func1);
        _boolean = _server.emit("OCSPRequest", _buffer, _buffer, _func);
        _boolean = _server.emit("resumeSession", _any, _func2);
        _boolean = _server.emit("secureConnection", _tlsSocket);

        _server = _server.on("tlsClientError", (err, tlsSocket) => {
            let _err: Error = err;
            let _tlsSocket: tls.TLSSocket = tlsSocket;
        })
        _server = _server.on("newSession", (sessionId, sessionData, callback) => {
            let _sessionId: any = sessionId;
            let _sessionData: any = sessionData;
            let _func1 = callback;
        })
        _server = _server.on("OCSPRequest", (certificate, issuer, callback) => {
            let _certificate: Buffer = certificate;
            let _issuer: Buffer = issuer;
            let _callback: Function = callback;
        })
        _server = _server.on("resumeSession", (sessionId, callback) => {
            let _sessionId: any = sessionId;
            let _func2 = callback;
        })
        _server = _server.on("secureConnection", (tlsSocket) => {
            let _tlsSocket: tls.TLSSocket = tlsSocket;
        })

        _server = _server.once("tlsClientError", (err, tlsSocket) => {
            let _err: Error = err;
            let _tlsSocket: tls.TLSSocket = tlsSocket;
        })
        _server = _server.once("newSession", (sessionId, sessionData, callback) => {
            let _sessionId: any = sessionId;
            let _sessionData: any = sessionData;
            let _func1 = callback;
        })
        _server = _server.once("OCSPRequest", (certificate, issuer, callback) => {
            let _certificate: Buffer = certificate;
            let _issuer: Buffer = issuer;
            let _callback: Function = callback;
        })
        _server = _server.once("resumeSession", (sessionId, callback) => {
            let _sessionId: any = sessionId;
            let _func2 = callback;
        })
        _server = _server.once("secureConnection", (tlsSocket) => {
            let _tlsSocket: tls.TLSSocket = tlsSocket;
        })

        _server = _server.prependListener("tlsClientError", (err, tlsSocket) => {
            let _err: Error = err;
            let _tlsSocket: tls.TLSSocket = tlsSocket;
        })
        _server = _server.prependListener("newSession", (sessionId, sessionData, callback) => {
            let _sessionId: any = sessionId;
            let _sessionData: any = sessionData;
            let _func1 = callback;
        })
        _server = _server.prependListener("OCSPRequest", (certificate, issuer, callback) => {
            let _certificate: Buffer = certificate;
            let _issuer: Buffer = issuer;
            let _callback: Function = callback;
        })
        _server = _server.prependListener("resumeSession", (sessionId, callback) => {
            let _sessionId: any = sessionId;
            let _func2 = callback;
        })
        _server = _server.prependListener("secureConnection", (tlsSocket) => {
            let _tlsSocket: tls.TLSSocket = tlsSocket;
        })

        _server = _server.prependOnceListener("tlsClientError", (err, tlsSocket) => {
            let _err: Error = err;
            let _tlsSocket: tls.TLSSocket = tlsSocket;
        })
        _server = _server.prependOnceListener("newSession", (sessionId, sessionData, callback) => {
            let _sessionId: any = sessionId;
            let _sessionData: any = sessionData;
            let _func1 = callback;
        })
        _server = _server.prependOnceListener("OCSPRequest", (certificate, issuer, callback) => {
            let _certificate: Buffer = certificate;
            let _issuer: Buffer = issuer;
            let _callback: Function = callback;
        })
        _server = _server.prependOnceListener("resumeSession", (sessionId, callback) => {
            let _sessionId: any = sessionId;
            let _func2 = callback;
        })
        _server = _server.prependOnceListener("secureConnection", (tlsSocket) => {
            let _tlsSocket: tls.TLSSocket = tlsSocket;
        })

        // close callback parameter is optional
        _server = _server.close();

        // close callback parameter doesn't specify any arguments, so any
        // function is acceptable
        _server = _server.close(() => {});
        _server = _server.close((...args:any[]) => {});
    }

    {
        let _TLSSocket: tls.TLSSocket;
        let _boolean: boolean;
        /**
         * events.EventEmitter
         * 1. close
         * 2. error
         * 3. listening
         * 4. message
         **/

        _TLSSocket = _TLSSocket.addListener("OCSPResponse", (response) => {
            let _response: Buffer = response;
        })
        _TLSSocket = _TLSSocket.addListener("secureConnect", () => { });

        let _buffer: Buffer;
        _boolean = _TLSSocket.emit("OCSPResponse", _buffer);
        _boolean = _TLSSocket.emit("secureConnect");

        _TLSSocket = _TLSSocket.on("OCSPResponse", (response) => {
            let _response: Buffer = response;
        })
        _TLSSocket = _TLSSocket.on("secureConnect", () => { });

        _TLSSocket = _TLSSocket.once("OCSPResponse", (response) => {
            let _response: Buffer = response;
        })
        _TLSSocket = _TLSSocket.once("secureConnect", () => { });

        _TLSSocket = _TLSSocket.prependListener("OCSPResponse", (response) => {
            let _response: Buffer = response;
        })
        _TLSSocket = _TLSSocket.prependListener("secureConnect", () => { });

        _TLSSocket = _TLSSocket.prependOnceListener("OCSPResponse", (response) => {
            let _response: Buffer = response;
        })
        _TLSSocket = _TLSSocket.prependOnceListener("secureConnect", () => { });
    }
}

////////////////////////////////////////////////////
/// Http tests : http://nodejs.org/api/http.html ///
////////////////////////////////////////////////////

namespace http_tests {
    {
    // Status codes
    var codeMessage = http.STATUS_CODES['400'];
    var codeMessage = http.STATUS_CODES[400];
    }

    {
	var agent: http.Agent = new http.Agent({
		keepAlive: true,
		keepAliveMsecs: 10000,
		maxSockets: Infinity,
		maxFreeSockets: 256
	});

	var agent: http.Agent = http.globalAgent;

        http.request({ agent: false });
        http.request({ agent: agent });
        http.request({ agent: undefined });
    }

    {
        http.request('http://www.example.com/xyz');
    }

    {
        // Make sure .listen() and .close() retuern a Server instance
        http.createServer().listen(0).close().address();
        net.createServer().listen(0).close().address();
    }

    {
        var request = http.request({ path: 'http://0.0.0.0' });
        request.once('error', function() { });
        request.setNoDelay(true);
        request.abort();
    }

    // http request options
    {
        const requestOpts: http.RequestOptions = {
            timeout: 30000
        };

        const clientArgs: http.ClientRequestArgs = {
            timeout: 30000
        };
    }

    // http headers
    {
        const headers: http.IncomingHttpHeaders = {
            'content-type': 'application/json',
            'set-cookie': [ 'type=ninja', 'language=javascript' ]
        };
    }
}

//////////////////////////////////////////////////////
/// Https tests : http://nodejs.org/api/https.html ///
//////////////////////////////////////////////////////

namespace https_tests {
    var agent: https.Agent = new https.Agent({
        keepAlive: true,
        keepAliveMsecs: 10000,
        maxSockets: Infinity,
        maxFreeSockets: 256,
        maxCachedSessions: 100
    });

    var agent: https.Agent = https.globalAgent;

    https.request({
        agent: false
    });
    https.request({
        agent: agent
    });
    https.request({
        agent: undefined
    });

    https.request('http://www.example.com/xyz');
}

////////////////////////////////////////////////////
/// TTY tests : http://nodejs.org/api/tty.html
////////////////////////////////////////////////////

namespace tty_tests {
    let rs: tty.ReadStream;
    let ws: tty.WriteStream;

    let rsIsRaw: boolean = rs.isRaw;
    rs.setRawMode(true);

    let wsColumns: number = ws.columns;
    let wsRows: number = ws.rows;

    let isTTY: boolean = tty.isatty(1);
}

////////////////////////////////////////////////////
/// Dgram tests : http://nodejs.org/api/dgram.html
////////////////////////////////////////////////////

namespace dgram_tests {
    {
    var ds: dgram.Socket = dgram.createSocket("udp4", (msg: Buffer, rinfo: dgram.RemoteInfo): void => {
    });
    ds.bind();
    ds.bind(41234);
    var ai: dgram.AddressInfo = ds.address();
    ds.send(new Buffer("hello"), 0, 5, 5000, "127.0.0.1", (error: Error, bytes: number): void => {
    });
    ds.send(new Buffer("hello"), 5000, "127.0.0.1");
    }

    {
        let _socket: dgram.Socket;
        let _boolean: boolean;
        let _err: Error;
        let _str: string;
        let _rinfo: dgram.AddressInfo;
        /**
         * events.EventEmitter
         * 1. close
         * 2. error
         * 3. listening
         * 4. message
         **/

        _socket = _socket.addListener("close", () => {});
        _socket = _socket.addListener("error", (err) => {
            let _err: Error = err;
        })
        _socket = _socket.addListener("listening", () => {});
        _socket = _socket.addListener("message", (msg, rinfo) => {
            let _msg: Buffer = msg;
            let _rinfo: dgram.AddressInfo = rinfo;
        })

        _boolean = _socket.emit("close")
        _boolean = _socket.emit("error", _err);
        _boolean = _socket.emit("listening");
        _boolean = _socket.emit("message", _str, _rinfo);

        _socket = _socket.on("close", () => {});
        _socket = _socket.on("error", (err) => {
            let _err: Error = err;
        })
        _socket = _socket.on("listening", () => {});
        _socket = _socket.on("message", (msg, rinfo) => {
            let _msg: Buffer = msg;
            let _rinfo: dgram.AddressInfo = rinfo;
        })

        _socket = _socket.once("close", () => {});
        _socket = _socket.once("error", (err) => {
            let _err: Error = err;
        })
        _socket = _socket.once("listening", () => {});
        _socket = _socket.once("message", (msg, rinfo) => {
            let _msg: Buffer = msg;
            let _rinfo: dgram.AddressInfo = rinfo;
        })

        _socket = _socket.prependListener("close", () => {});
        _socket = _socket.prependListener("error", (err) => {
            let _err: Error = err;
        })
        _socket = _socket.prependListener("listening", () => {});
        _socket = _socket.prependListener("message", (msg, rinfo) => {
            let _msg: Buffer = msg;
            let _rinfo: dgram.AddressInfo = rinfo;
        })

        _socket = _socket.prependOnceListener("close", () => {});
        _socket = _socket.prependOnceListener("error", (err) => {
            let _err: Error = err;
        })
        _socket = _socket.prependOnceListener("listening", () => {});
        _socket = _socket.prependOnceListener("message", (msg, rinfo) => {
            let _msg: Buffer = msg;
            let _rinfo: dgram.AddressInfo = rinfo;
        })
    }
}

////////////////////////////////////////////////////
///Querystring tests : https://nodejs.org/api/querystring.html
////////////////////////////////////////////////////

namespace querystring_tests {
    type SampleObject = { a: string; b: number; }

    {
        let obj: SampleObject;
        let sep: string;
        let eq: string;
        let options: querystring.StringifyOptions;
        let result: string;

        result = querystring.stringify<SampleObject>(obj);
        result = querystring.stringify<SampleObject>(obj, sep);
        result = querystring.stringify<SampleObject>(obj, sep, eq);
        result = querystring.stringify<SampleObject>(obj, sep, eq);
        result = querystring.stringify<SampleObject>(obj, sep, eq, options);
    }

    {
        let str: string;
        let sep: string;
        let eq: string;
        let options: querystring.ParseOptions;
        let result: SampleObject;

        result = querystring.parse<SampleObject>(str);
        result = querystring.parse<SampleObject>(str, sep);
        result = querystring.parse<SampleObject>(str, sep, eq);
        result = querystring.parse<SampleObject>(str, sep, eq, options);
    }

    {
        let str: string;
        let result: string;

        result = querystring.escape(str);
        result = querystring.unescape(str);
    }
}

////////////////////////////////////////////////////
/// path tests : http://nodejs.org/api/path.html
////////////////////////////////////////////////////

namespace path_tests {

    path.normalize('/foo/bar//baz/asdf/quux/..');

    path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
    // returns
    //'/foo/bar/baz/asdf'

    try {
        path.join('foo', 'bar');
    }
    catch (error) {

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
        root: "/",
        dir: "/home/user/dir",
        base: "file.txt",
        ext: ".txt",
        name: "file"
    });
    // returns
    //    '/home/user/dir/file.txt'


    path.format({
        dir: "/home/user/dir",
        base: "file.txt"
    });
    // returns
    //    '/home/user/dir/file.txt'

    path.posix.format({
        root: "/",
        dir: "/home/user/dir",
        base: "file.txt",
        ext: ".txt",
        name: "file"
    });
    // returns
    //    '/home/user/dir/file.txt'

    path.posix.format({
        dir: "/home/user/dir",
        base: "file.txt"
    });
    // returns
    //    '/home/user/dir/file.txt'

    path.win32.format({
        root: "C:\\",
        dir: "C:\\home\\user\\dir",
        ext: ".txt",
        name: "file"
    });
    // returns
    //    'C:\home\user\dir\file.txt'

    path.win32.format({
        dir: "C:\\home\\user\\dir",
        base: "file.txt"
    });
    // returns
    //    'C:\home\user\dir\file.txt'
}

////////////////////////////////////////////////////
/// readline tests : https://nodejs.org/api/readline.html
////////////////////////////////////////////////////

namespace readline_tests {
    let rl: readline.ReadLine;

    {
        let options: readline.ReadLineOptions;
        let input: NodeJS.ReadableStream;
        let output: NodeJS.WritableStream;
        let completer: readline.Completer;
        let terminal: boolean;

        let result: readline.ReadLine;

        result = readline.createInterface(options);
        result = readline.createInterface(input);
        result = readline.createInterface(input, output);
        result = readline.createInterface(input, output, completer);
        result = readline.createInterface(input, output, completer, terminal);
        result = readline.createInterface({
            input: input,
            completer: function(str: string): readline.CompleterResult {
                return [['test'], 'test'];
            }
        });
    }

    {
        let prompt: string;

        rl.setPrompt(prompt);
    }

    {
        let preserveCursor: boolean;

        rl.prompt();
        rl.prompt(preserveCursor);
    }

    {
        let query: string;
        let callback: (answer: string) => void;

        rl.question(query, callback);
    }

    {
        let result: readline.ReadLine;

        result = rl.pause();
    }

    {
        let result: readline.ReadLine;

        result = rl.resume();
    }

    {
        rl.close();
    }

    {
        let data: string | Buffer;
        let key: readline.Key;

        rl.write(data);
        rl.write(null, key);
    }

    {
        let stream: NodeJS.WritableStream;
        let x: number;
        let y: number;

        readline.cursorTo(stream, x, y);
    }

    {
        let stream: NodeJS.WritableStream;
        let dx: number | string;
        let dy: number | string;

        readline.moveCursor(stream, dx, dy);
    }

    {
        let stream: NodeJS.WritableStream;
        let dir: number;

        readline.clearLine(stream, dir);
    }

    {
        let stream: NodeJS.WritableStream;

        readline.clearScreenDown(stream);
    }

    {
        let _rl: readline.ReadLine;
        let _boolean: boolean;

        _rl = _rl.addListener("close", () => { });
        _rl = _rl.addListener("line", (input) => {
            let _input: any = input;
        })
        _rl = _rl.addListener("pause", () => { });
        _rl = _rl.addListener("resume", () => { });
        _rl = _rl.addListener("SIGCONT", () => { });
        _rl = _rl.addListener("SIGINT", () => { });
        _rl = _rl.addListener("SIGTSTP", () => { });

        _boolean = _rl.emit("close", () => { });
        _boolean = _rl.emit("line", () => { });
        _boolean = _rl.emit("pause", () => { });
        _boolean = _rl.emit("resume", () => { });
        _boolean = _rl.emit("SIGCONT", () => { });
        _boolean = _rl.emit("SIGINT", () => { });
        _boolean = _rl.emit("SIGTSTP", () => { });

        _rl = _rl.on("close", () => { });
        _rl = _rl.on("line", (input) => {
            let _input: any = input;
        })
        _rl = _rl.on("pause", () => { });
        _rl = _rl.on("resume", () => { });
        _rl = _rl.on("SIGCONT", () => { });
        _rl = _rl.on("SIGINT", () => { });
        _rl = _rl.on("SIGTSTP", () => { });

        _rl = _rl.once("close", () => { });
        _rl = _rl.once("line", (input) => {
            let _input: any = input;
        })
        _rl = _rl.once("pause", () => { });
        _rl = _rl.once("resume", () => { });
        _rl = _rl.once("SIGCONT", () => { });
        _rl = _rl.once("SIGINT", () => { });
        _rl = _rl.once("SIGTSTP", () => { });

        _rl = _rl.prependListener("close", () => { });
        _rl = _rl.prependListener("line", (input) => {
            let _input: any = input;
        })
        _rl = _rl.prependListener("pause", () => { });
        _rl = _rl.prependListener("resume", () => { });
        _rl = _rl.prependListener("SIGCONT", () => { });
        _rl = _rl.prependListener("SIGINT", () => { });
        _rl = _rl.prependListener("SIGTSTP", () => { });

        _rl = _rl.prependOnceListener("close", () => { });
        _rl = _rl.prependOnceListener("line", (input) => {
            let _input: any = input;
        })
        _rl = _rl.prependOnceListener("pause", () => { });
        _rl = _rl.prependOnceListener("resume", () => { });
        _rl = _rl.prependOnceListener("SIGCONT", () => { });
        _rl = _rl.prependOnceListener("SIGINT", () => { });
        _rl = _rl.prependOnceListener("SIGTSTP", () => { });
    }
}

////////////////////////////////////////////////////
/// string_decoder tests : https://nodejs.org/api/string_decoder.html
////////////////////////////////////////////////////

namespace string_decoder_tests {
    const StringDecoder = string_decoder.StringDecoder;
    const buffer = new Buffer('test');
    const decoder1 = new StringDecoder();
    const decoder2 = new StringDecoder('utf8');
    const part1: string = decoder1.write(new Buffer('test'));
    const end1: string = decoder1.end();
    const part2: string = decoder2.write(new Buffer('test'));
    const end2: string = decoder1.end(new Buffer('test'));
}

//////////////////////////////////////////////////////////////////////
/// Child Process tests: https://nodejs.org/api/child_process.html ///
//////////////////////////////////////////////////////////////////////

namespace child_process_tests {
    {
        childProcess.exec("echo test");
        childProcess.spawnSync("echo test");
    }

    {
        let _cp: childProcess.ChildProcess;
        let _boolean: boolean;

        _cp = _cp.addListener("close", (code, signal) => {
            let _code: number = code;
            let _signal: string = signal;
        })
        _cp = _cp.addListener("disconnect", () => { });
        _cp = _cp.addListener("error", (err) => {
            let _err: Error = err;
        })
        _cp = _cp.addListener("exit", (code, signal) => {
            let _code: number = code;
            let _signal: string = signal;
        })
        _cp = _cp.addListener("message", (message, sendHandle) => {
            let _message: any = message;
            let _sendHandle: net.Socket | net.Server = sendHandle;
        })

        _boolean = _cp.emit("close", () => { });
        _boolean = _cp.emit("disconnect", () => { });
        _boolean = _cp.emit("error", () => { });
        _boolean = _cp.emit("exit", () => { });
        _boolean = _cp.emit("message", () => { });

        _cp = _cp.on("close", (code, signal) => {
            let _code: number = code;
            let _signal: string = signal;
        })
        _cp = _cp.on("disconnect", () => { });
        _cp = _cp.on("error", (err) => {
            let _err: Error = err;
        })
        _cp = _cp.on("exit", (code, signal) => {
            let _code: number = code;
            let _signal: string = signal;
        })
        _cp = _cp.on("message", (message, sendHandle) => {
            let _message: any = message;
            let _sendHandle: net.Socket | net.Server = sendHandle;
        })

        _cp = _cp.once("close", (code, signal) => {
            let _code: number = code;
            let _signal: string = signal;
        })
        _cp = _cp.once("disconnect", () => { });
        _cp = _cp.once("error", (err) => {
            let _err: Error = err;
        })
        _cp = _cp.once("exit", (code, signal) => {
            let _code: number = code;
            let _signal: string = signal;
        })
        _cp = _cp.once("message", (message, sendHandle) => {
            let _message: any = message;
            let _sendHandle: net.Socket | net.Server = sendHandle;
        })

        _cp = _cp.prependListener("close", (code, signal) => {
            let _code: number = code;
            let _signal: string = signal;
        })
        _cp = _cp.prependListener("disconnect", () => { });
        _cp = _cp.prependListener("error", (err) => {
            let _err: Error = err;
        })
        _cp = _cp.prependListener("exit", (code, signal) => {
            let _code: number = code;
            let _signal: string = signal;
        })
        _cp = _cp.prependListener("message", (message, sendHandle) => {
            let _message: any = message;
            let _sendHandle: net.Socket | net.Server = sendHandle;
        })

        _cp = _cp.prependOnceListener("close", (code, signal) => {
            let _code: number = code;
            let _signal: string = signal;
        })
        _cp = _cp.prependOnceListener("disconnect", () => { });
        _cp = _cp.prependOnceListener("error", (err) => {
            let _err: Error = err;
        })
        _cp = _cp.prependOnceListener("exit", (code, signal) => {
            let _code: number = code;
            let _signal: string = signal;
        })
        _cp = _cp.prependOnceListener("message", (message, sendHandle) => {
            let _message: any = message;
            let _sendHandle: net.Socket | net.Server = sendHandle;
        })
    }
}

//////////////////////////////////////////////////////////////////////
/// cluster tests: https://nodejs.org/api/cluster.html ///
//////////////////////////////////////////////////////////////////////

namespace cluster_tests {
    {
        cluster.fork();
        Object.keys(cluster.workers).forEach(key => {
            const worker = cluster.workers[key];
            if (worker.isDead()) {
                console.log('worker %d is dead', worker.process.pid);
            }
        });
    }
}

////////////////////////////////////////////////////
/// os tests : https://nodejs.org/api/os.html
////////////////////////////////////////////////////

namespace os_tests {
    {
        let result: string;

        result = os.tmpdir();
        result = os.homedir();
        result = os.endianness();
        result = os.hostname();
        result = os.type();
        result = os.platform();
        result = os.arch();
        result = os.release();
        result = os.EOL;
    }

    {
        let result: number;

        result = os.uptime();
        result = os.totalmem();
        result = os.freemem();
    }

    {
        let result: number[];

        result = os.loadavg();
    }

    {
        let result: os.CpuInfo[];

        result = os.cpus();
    }

    {
        let result: { [index: string]: os.NetworkInterfaceInfo[] };

        result = os.networkInterfaces();
    }

    {
        let result: number;

        result = os.constants.signals.SIGHUP;
        result = os.constants.signals.SIGINT;
        result = os.constants.signals.SIGQUIT;
        result = os.constants.signals.SIGILL;
        result = os.constants.signals.SIGTRAP;
        result = os.constants.signals.SIGABRT;
        result = os.constants.signals.SIGIOT;
        result = os.constants.signals.SIGBUS;
        result = os.constants.signals.SIGFPE;
        result = os.constants.signals.SIGKILL;
        result = os.constants.signals.SIGUSR1;
        result = os.constants.signals.SIGSEGV;
        result = os.constants.signals.SIGUSR2;
        result = os.constants.signals.SIGPIPE;
        result = os.constants.signals.SIGALRM;
        result = os.constants.signals.SIGTERM;
        result = os.constants.signals.SIGCHLD;
        result = os.constants.signals.SIGSTKFLT;
        result = os.constants.signals.SIGCONT;
        result = os.constants.signals.SIGSTOP;
        result = os.constants.signals.SIGTSTP;
        result = os.constants.signals.SIGTTIN;
        result = os.constants.signals.SIGTTOU;
        result = os.constants.signals.SIGURG;
        result = os.constants.signals.SIGXCPU;
        result = os.constants.signals.SIGXFSZ;
        result = os.constants.signals.SIGVTALRM;
        result = os.constants.signals.SIGPROF;
        result = os.constants.signals.SIGWINCH;
        result = os.constants.signals.SIGIO;
        result = os.constants.signals.SIGPOLL;
        result = os.constants.signals.SIGPWR;
        result = os.constants.signals.SIGSYS;
        result = os.constants.signals.SIGUNUSED;
    }

    {
        let result: number;

        result = os.constants.errno.E2BIG;
        result = os.constants.errno.EACCES;
        result = os.constants.errno.EADDRINUSE;
        result = os.constants.errno.EADDRNOTAVAIL;
        result = os.constants.errno.EAFNOSUPPORT;
        result = os.constants.errno.EAGAIN;
        result = os.constants.errno.EALREADY;
        result = os.constants.errno.EBADF;
        result = os.constants.errno.EBADMSG;
        result = os.constants.errno.EBUSY;
        result = os.constants.errno.ECANCELED;
        result = os.constants.errno.ECHILD;
        result = os.constants.errno.ECONNABORTED;
        result = os.constants.errno.ECONNREFUSED;
        result = os.constants.errno.ECONNRESET;
        result = os.constants.errno.EDEADLK;
        result = os.constants.errno.EDESTADDRREQ;
        result = os.constants.errno.EDOM;
        result = os.constants.errno.EDQUOT;
        result = os.constants.errno.EEXIST;
        result = os.constants.errno.EFAULT;
        result = os.constants.errno.EFBIG;
        result = os.constants.errno.EHOSTUNREACH;
        result = os.constants.errno.EIDRM;
        result = os.constants.errno.EILSEQ;
        result = os.constants.errno.EINPROGRESS;
        result = os.constants.errno.EINTR;
        result = os.constants.errno.EINVAL;
        result = os.constants.errno.EIO;
        result = os.constants.errno.EISCONN;
        result = os.constants.errno.EISDIR;
        result = os.constants.errno.ELOOP;
        result = os.constants.errno.EMFILE;
        result = os.constants.errno.EMLINK;
        result = os.constants.errno.EMSGSIZE;
        result = os.constants.errno.EMULTIHOP;
        result = os.constants.errno.ENAMETOOLONG;
        result = os.constants.errno.ENETDOWN;
        result = os.constants.errno.ENETRESET;
        result = os.constants.errno.ENETUNREACH;
        result = os.constants.errno.ENFILE;
        result = os.constants.errno.ENOBUFS;
        result = os.constants.errno.ENODATA;
        result = os.constants.errno.ENODEV;
        result = os.constants.errno.ENOENT;
        result = os.constants.errno.ENOEXEC;
        result = os.constants.errno.ENOLCK;
        result = os.constants.errno.ENOLINK;
        result = os.constants.errno.ENOMEM;
        result = os.constants.errno.ENOMSG;
        result = os.constants.errno.ENOPROTOOPT;
        result = os.constants.errno.ENOSPC;
        result = os.constants.errno.ENOSR;
        result = os.constants.errno.ENOSTR;
        result = os.constants.errno.ENOSYS;
        result = os.constants.errno.ENOTCONN;
        result = os.constants.errno.ENOTDIR;
        result = os.constants.errno.ENOTEMPTY;
        result = os.constants.errno.ENOTSOCK;
        result = os.constants.errno.ENOTSUP;
        result = os.constants.errno.ENOTTY;
        result = os.constants.errno.ENXIO;
        result = os.constants.errno.EOPNOTSUPP;
        result = os.constants.errno.EOVERFLOW;
        result = os.constants.errno.EPERM;
        result = os.constants.errno.EPIPE;
        result = os.constants.errno.EPROTO;
        result = os.constants.errno.EPROTONOSUPPORT;
        result = os.constants.errno.EPROTOTYPE;
        result = os.constants.errno.ERANGE;
        result = os.constants.errno.EROFS;
        result = os.constants.errno.ESPIPE;
        result = os.constants.errno.ESRCH;
        result = os.constants.errno.ESTALE;
        result = os.constants.errno.ETIME;
        result = os.constants.errno.ETIMEDOUT;
        result = os.constants.errno.ETXTBSY;
        result = os.constants.errno.EWOULDBLOCK;
        result = os.constants.errno.EXDEV;
    }
}

////////////////////////////////////////////////////
/// vm tests : https://nodejs.org/api/vm.html
////////////////////////////////////////////////////

namespace vm_tests {
    {
        const sandbox = {
            animal: 'cat',
            count: 2
        };

        const context = vm.createContext(sandbox);
        console.log(vm.isContext(context));
        const script = new vm.Script('count += 1; name = "kitty"');

        for (let i = 0; i < 10; ++i) {
            script.runInContext(context);
        }

        console.log(util.inspect(sandbox));

        vm.runInNewContext('count += 1; name = "kitty"', sandbox);
        console.log(util.inspect(sandbox));
    }

    {
        const sandboxes = [{}, {}, {}];

        const script = new vm.Script('globalVar = "set"');

        sandboxes.forEach((sandbox) => {
            script.runInNewContext(sandbox);
            script.runInThisContext();
        });

        console.log(util.inspect(sandboxes));

        var localVar = 'initial value';
        vm.runInThisContext('localVar = "vm";');

        console.log(localVar);
    }

    {
        const Debug = vm.runInDebugContext('Debug');
        Debug.scripts().forEach(function(script: any) { console.log(script.name); });
    }
}

/////////////////////////////////////////////////////
/// Timers tests : https://nodejs.org/api/timers.html
/////////////////////////////////////////////////////

namespace timers_tests {
    {
        let immediateId = timers.setImmediate(function() { console.log("immediate"); });
        timers.clearImmediate(immediateId);
    }
    {
        let counter = 0;
        let timeout = timers.setInterval(function() { console.log("interval"); }, 20);
        timeout.unref();
        timeout.ref();
        timers.clearInterval(timeout);
    }
    {
        let counter = 0;
        let timeout = timers.setTimeout(function() { console.log("timeout"); }, 20);
        timeout.unref();
        timeout.ref();
        timers.clearTimeout(timeout);
    }
}

/////////////////////////////////////////////////////////
/// Errors Tests : https://nodejs.org/api/errors.html ///
/////////////////////////////////////////////////////////

namespace errors_tests {
    {
        Error.stackTraceLimit = Infinity;
    }
    {
        const myObject = {};
        Error.captureStackTrace(myObject);
    }
    {
        let frames: NodeJS.CallSite[] = [];
        Error.prepareStackTrace(new Error(), frames);
    }
    {
        let frame: NodeJS.CallSite = null;
        let frameThis: any = frame.getThis();
        let typeName: string = frame.getTypeName();
        let func: Function = frame.getFunction();
        let funcName: string = frame.getFunctionName();
        let meth: string = frame.getMethodName();
        let fname: string = frame.getFileName();
        let lineno: number = frame.getLineNumber();
        let colno: number = frame.getColumnNumber();
        let evalOrigin: string = frame.getEvalOrigin();
        let isTop: boolean = frame.isToplevel();
        let isEval: boolean = frame.isEval();
        let isNative: boolean = frame.isNative();
        let isConstr: boolean = frame.isConstructor();
    }
}

///////////////////////////////////////////////////////////
/// Process Tests : https://nodejs.org/api/process.html ///
///////////////////////////////////////////////////////////

import * as p from "process";
namespace process_tests {
    {
        var eventEmitter: events.EventEmitter;
        eventEmitter = process;                // Test that process implements EventEmitter...

        var _p: NodeJS.Process = process;
        _p = p;
    }
    {
        assert(process.argv[0] === process.argv0);
    }
    {
        var module: NodeModule | undefined;
        module = process.mainModule;
    }
}

///////////////////////////////////////////////////////////
/// Console Tests : https://nodejs.org/api/console.html ///
///////////////////////////////////////////////////////////

import * as c from "console";
namespace console_tests {
    {
        var _c: Console = console;
        _c = c;
    }
}

///////////////////////////////////////////////////
/// Net Tests : https://nodejs.org/api/net.html ///
///////////////////////////////////////////////////

namespace net_tests {
    {
        let server = net.createServer();
        // Check methods which return server instances by chaining calls
        server = server.listen(0)
                .close()
                .ref()
                .unref();

        // close has an optional callback function. No callback parameters are
        // specified, so any callback function is permissible.
        server = server.close((...args: any[]) => {});

        // test the types of the address object fields
        let address = server.address();
        address.port = 1234;
        address.family = "ipv4";
        address.address = "127.0.0.1";
    }

    {
        /**
         * net.Socket - events.EventEmitter
         *   1. close
         *   2. connect
         *   3. data
         *   4. drain
         *   5. end
         *   6. error
         *   7. lookup
         *   8. timeout
         */
        let _socket: net.Socket = new net.Socket({
            fd: 1,
            allowHalfOpen: false,
            readable: false,
            writable: false
        });

        let bool: boolean;
        let buffer: Buffer;
        let error: Error;
        let str: string;
        let num: number;

        /// addListener

        _socket = _socket.addListener("close", had_error => {
            bool = had_error;
        })
        _socket = _socket.addListener("connect", () => { })
        _socket = _socket.addListener("data", data => {
            buffer = data;
        })
        _socket = _socket.addListener("drain", () => { })
        _socket = _socket.addListener("end", () => { })
        _socket = _socket.addListener("error", err => {
            error = err;
        })
        _socket = _socket.addListener("lookup", (err, address, family, host) => {
            error = err;

            if (typeof family === 'string') {
                str = family;
            } else if (typeof family === 'number') {
                num = family;
            }

            str = host;
        })
        _socket = _socket.addListener("timeout", () => { })

        /// emit
        bool = _socket.emit("close", bool);
        bool = _socket.emit("connect");
        bool = _socket.emit("data", buffer);
        bool = _socket.emit("drain");
        bool = _socket.emit("end");
        bool = _socket.emit("error", error);
        bool = _socket.emit("lookup", error, str, str, str);
        bool = _socket.emit("lookup", error, str, num, str);
        bool = _socket.emit("timeout");

        /// on
        _socket = _socket.on("close", had_error => {
            bool = had_error;
        })
        _socket = _socket.on("connect", () => { })
        _socket = _socket.on("data", data => {
            buffer = data;
        })
        _socket = _socket.on("drain", () => { })
        _socket = _socket.on("end", () => { })
        _socket = _socket.on("error", err => {
            error = err;
        })
        _socket = _socket.on("lookup", (err, address, family, host) => {
            error = err;

            if (typeof family === 'string') {
                str = family;
            } else if (typeof family === 'number') {
                num = family;
            }

            str = host;
        })
        _socket = _socket.on("timeout", () => { })

        /// once
        _socket = _socket.once("close", had_error => {
            bool = had_error;
        })
        _socket = _socket.once("connect", () => { })
        _socket = _socket.once("data", data => {
            buffer = data;
        })
        _socket = _socket.once("drain", () => { })
        _socket = _socket.once("end", () => { })
        _socket = _socket.once("error", err => {
            error = err;
        })
        _socket = _socket.once("lookup", (err, address, family, host) => {
            error = err;

            if (typeof family === 'string') {
                str = family;
            } else if (typeof family === 'number') {
                num = family;
            }

            str = host;
        })
        _socket = _socket.once("timeout", () => { })

        /// prependListener
        _socket = _socket.prependListener("close", had_error => {
            bool = had_error;
        })
        _socket = _socket.prependListener("connect", () => { })
        _socket = _socket.prependListener("data", data => {
            buffer = data;
        })
        _socket = _socket.prependListener("drain", () => { })
        _socket = _socket.prependListener("end", () => { })
        _socket = _socket.prependListener("error", err => {
            error = err;
        })
        _socket = _socket.prependListener("lookup", (err, address, family, host) => {
            error = err;

            if (typeof family === 'string') {
                str = family;
            } else if (typeof family === 'number') {
                num = family;
            }

            str = host;
        })
        _socket = _socket.prependListener("timeout", () => { })

        /// prependOnceListener
        _socket = _socket.prependOnceListener("close", had_error => {
            bool = had_error;
        })
        _socket = _socket.prependOnceListener("connect", () => { })
        _socket = _socket.prependOnceListener("data", data => {
            buffer = data;
        })
        _socket = _socket.prependOnceListener("drain", () => { })
        _socket = _socket.prependOnceListener("end", () => { })
        _socket = _socket.prependOnceListener("error", err => {
            error = err;
        })
        _socket = _socket.prependOnceListener("lookup", (err, address, family, host) => {
            error = err;

            if (typeof family === 'string') {
                str = family;
            } else if (typeof family === 'number') {
                num = family;
            }

            str = host;
        })
        _socket = _socket.prependOnceListener("timeout", () => { })

        bool = _socket.connecting;
        bool = _socket.destroyed;
        _socket.destroy();
    }

    {
        /**
         * net.Server - events.EventEmitter
         *   1. close
         *   2. connection
         *   3. error
         *   4. listening
         */
        let _server: net.Server;

        let _socket: net.Socket;
        let bool: boolean;
        let error: Error;

        /// addListener
        _server = _server.addListener("close", () => { })
        _server = _server.addListener("connection", socket => {
            _socket = socket
        })
        _server = _server.addListener("error", err => {
            error = err;
        })
        _server = _server.addListener("listening", () => { })

        /// emit
        bool = _server.emit("close")
        bool = _server.emit("connection", _socket)
        bool = _server.emit("error", error)
        bool = _server.emit("listening")

        /// once
        _server = _server.once("close", () => { })
        _server = _server.once("connection", socket => {
            _socket = socket
        })
        _server = _server.once("error", err => {
            error = err;
        })
        _server = _server.once("listening", () => { })

        /// prependListener
        _server = _server.prependListener("close", () => { })
        _server = _server.prependListener("connection", socket => {
            _socket = socket
        })
        _server = _server.prependListener("error", err => {
            error = err;
        })
        _server = _server.prependListener("listening", () => { })

        /// prependOnceListener
        _server = _server.prependOnceListener("close", () => { })
        _server = _server.prependOnceListener("connection", socket => {
            _socket = socket
        })
        _server = _server.prependOnceListener("error", err => {
            error = err;
        })
        _server = _server.prependOnceListener("listening", () => { })

    }

}

/////////////////////////////////////////////////////
/// repl Tests : https://nodejs.org/api/repl.html ///
/////////////////////////////////////////////////////

namespace repl_tests {
    {
        let _server: repl.REPLServer;
        let _boolean: boolean;
        let _ctx: any;

        _server = _server.addListener("exit", () => { });
        _server = _server.addListener("reset", () => { });

        _boolean = _server.emit("exit", () => { });
        _boolean = _server.emit("reset", _ctx);

        _server = _server.on("exit", () => { });
        _server = _server.on("reset", () => { });

        _server = _server.once("exit", () => { });
        _server = _server.once("reset", () => { });

        _server = _server.prependListener("exit", () => { });
        _server = _server.prependListener("reset", () => { });

        _server = _server.prependOnceListener("exit", () => { });
        _server = _server.prependOnceListener("reset", () => { });
    }
}

///////////////////////////////////////////////////
/// DNS Tests : https://nodejs.org/api/dns.html ///
///////////////////////////////////////////////////

namespace dns_tests {
    dns.lookup("nodejs.org", (err, address, family) => {
        const _err: NodeJS.ErrnoException = err;
        const _address: string = address;
        const _family: number = family;
    });
    dns.lookup("nodejs.org", 4, (err, address, family) => {
        const _err: NodeJS.ErrnoException = err;
        const _address: string = address;
        const _family: number = family;
    });
    dns.lookup("nodejs.org", 6, (err, address, family) => {
        const _err: NodeJS.ErrnoException = err;
        const _address: string = address;
        const _family: number = family;
    });
    dns.lookup("nodejs.org", {}, (err, address, family) => {
        const _err: NodeJS.ErrnoException = err;
        const _address: string = address;
        const _family: number = family;
    });
    dns.lookup(
        "nodejs.org",
        {
            family: 4,
            hints: dns.ADDRCONFIG | dns.V4MAPPED,
            all: false
        },
        (err, address, family) => {
            const _err: NodeJS.ErrnoException = err;
            const _address: string = address;
            const _family: number = family;
        }
    );
    dns.lookup("nodejs.org", {all: true}, (err, addresses) => {
        const _err: NodeJS.ErrnoException = err;
        const _address: dns.LookupAddress[] = addresses;
    });

    function trueOrFalse(): boolean {
        return Math.random() > 0.5 ? true : false;
    }
    dns.lookup("nodejs.org", {all: trueOrFalse()}, (err, addresses, family) => {
        const _err: NodeJS.ErrnoException = err;
        const _addresses: string | dns.LookupAddress[] = addresses;
        const _family: number | undefined = family;
    });

    dns.resolve("nodejs.org", (err, addresses) => {
        const _addresses: string[] = addresses;
    });
    dns.resolve("nodejs.org", "A", (err, addresses) => {
        const _addresses: string[] = addresses;
    });
    dns.resolve("nodejs.org", "AAAA", (err, addresses) => {
        const _addresses: string[] = addresses;
    });
    dns.resolve("nodejs.org", "MX", (err, addresses) => {
        const _addresses: dns.MxRecord[] = addresses;
    });

    dns.resolve4("nodejs.org", (err, addresses) => {
        const _addresses: string[] = addresses;
    });

    dns.resolve6("nodejs.org", (err, addresses) => {
        const _addresses: string[] = addresses;
    });
}

/*****************************************************************************
 *                                                                           *
 * The following tests are the modules not mentioned in document but existed *
 *                                                                           *
 *****************************************************************************/

///////////////////////////////////////////////////////////
/// Constants Tests                                     ///
///////////////////////////////////////////////////////////

import * as constants from 'constants';
namespace constants_tests {
    var str: string;
    var num: number;
    num = constants.SIGHUP
    num = constants.SIGINT
    num = constants.SIGQUIT
    num = constants.SIGILL
    num = constants.SIGTRAP
    num = constants.SIGABRT
    num = constants.SIGIOT
    num = constants.SIGBUS
    num = constants.SIGFPE
    num = constants.SIGKILL
    num = constants.SIGUSR1
    num = constants.SIGSEGV
    num = constants.SIGUSR2
    num = constants.SIGPIPE
    num = constants.SIGALRM
    num = constants.SIGTERM
    num = constants.SIGCHLD
    num = constants.SIGSTKFLT
    num = constants.SIGCONT
    num = constants.SIGSTOP
    num = constants.SIGTSTP
    num = constants.SIGTTIN
    num = constants.SIGTTOU
    num = constants.SIGURG
    num = constants.SIGXCPU
    num = constants.SIGXFSZ
    num = constants.SIGVTALRM
    num = constants.SIGPROF
    num = constants.SIGWINCH
    num = constants.SIGIO
    num = constants.SIGPOLL
    num = constants.SIGPWR
    num = constants.SIGSYS
    num = constants.SIGUNUSED
    num = constants.O_RDONLY
    num = constants.O_WRONLY
    num = constants.O_RDWR
    num = constants.S_IFMT
    num = constants.S_IFREG
    num = constants.S_IFDIR
    num = constants.S_IFCHR
    num = constants.S_IFBLK
    num = constants.S_IFIFO
    num = constants.S_IFLNK
    num = constants.S_IFSOCK
    num = constants.O_CREAT
    num = constants.O_EXCL
    num = constants.O_NOCTTY
    num = constants.O_TRUNC
    num = constants.O_APPEND
    num = constants.O_DIRECTORY
    num = constants.O_NOATIME
    num = constants.O_NOFOLLOW
    num = constants.O_SYNC
    num = constants.O_DIRECT
    num = constants.O_NONBLOCK
    num = constants.S_IRWXU
    num = constants.S_IRUSR
    num = constants.S_IWUSR
    num = constants.S_IXUSR
    num = constants.S_IRWXG
    num = constants.S_IRGRP
    num = constants.S_IWGRP
    num = constants.S_IXGRP
    num = constants.S_IRWXO
    num = constants.S_IROTH
    num = constants.S_IWOTH
    num = constants.S_IXOTH
    num = constants.F_OK
    num = constants.R_OK
    num = constants.W_OK
    num = constants.X_OK
    num = constants.SSL_OP_ALL
    num = constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION
    num = constants.SSL_OP_CIPHER_SERVER_PREFERENCE
    num = constants.SSL_OP_CISCO_ANYCONNECT
    num = constants.SSL_OP_COOKIE_EXCHANGE
    num = constants.SSL_OP_CRYPTOPRO_TLSEXT_BUG
    num = constants.SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS
    num = constants.SSL_OP_EPHEMERAL_RSA
    num = constants.SSL_OP_LEGACY_SERVER_CONNECT
    num = constants.SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER
    num = constants.SSL_OP_MICROSOFT_SESS_ID_BUG
    num = constants.SSL_OP_MSIE_SSLV2_RSA_PADDING
    num = constants.SSL_OP_NETSCAPE_CA_DN_BUG
    num = constants.SSL_OP_NETSCAPE_CHALLENGE_BUG
    num = constants.SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG
    num = constants.SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG
    num = constants.SSL_OP_NO_COMPRESSION
    num = constants.SSL_OP_NO_QUERY_MTU
    num = constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION
    num = constants.SSL_OP_NO_SSLv2
    num = constants.SSL_OP_NO_SSLv3
    num = constants.SSL_OP_NO_TICKET
    num = constants.SSL_OP_NO_TLSv1
    num = constants.SSL_OP_NO_TLSv1_1
    num = constants.SSL_OP_NO_TLSv1_2
    num = constants.SSL_OP_PKCS1_CHECK_1
    num = constants.SSL_OP_PKCS1_CHECK_2
    num = constants.SSL_OP_SINGLE_DH_USE
    num = constants.SSL_OP_SINGLE_ECDH_USE
    num = constants.SSL_OP_SSLEAY_080_CLIENT_DH_BUG
    num = constants.SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG
    num = constants.SSL_OP_TLS_BLOCK_PADDING_BUG
    num = constants.SSL_OP_TLS_D5_BUG
    num = constants.SSL_OP_TLS_ROLLBACK_BUG
    num = constants.ENGINE_METHOD_RSA
    num = constants.ENGINE_METHOD_DSA
    num = constants.ENGINE_METHOD_DH
    num = constants.ENGINE_METHOD_RAND
    num = constants.ENGINE_METHOD_ECDH
    num = constants.ENGINE_METHOD_ECDSA
    num = constants.ENGINE_METHOD_CIPHERS
    num = constants.ENGINE_METHOD_DIGESTS
    num = constants.ENGINE_METHOD_STORE
    num = constants.ENGINE_METHOD_PKEY_METHS
    num = constants.ENGINE_METHOD_PKEY_ASN1_METHS
    num = constants.ENGINE_METHOD_ALL
    num = constants.ENGINE_METHOD_NONE
    num = constants.DH_CHECK_P_NOT_SAFE_PRIME
    num = constants.DH_CHECK_P_NOT_PRIME
    num = constants.DH_UNABLE_TO_CHECK_GENERATOR
    num = constants.DH_NOT_SUITABLE_GENERATOR
    num = constants.NPN_ENABLED
    num = constants.ALPN_ENABLED
    num = constants.RSA_PKCS1_PADDING
    num = constants.RSA_SSLV23_PADDING
    num = constants.RSA_NO_PADDING
    num = constants.RSA_PKCS1_OAEP_PADDING
    num = constants.RSA_X931_PADDING
    num = constants.RSA_PKCS1_PSS_PADDING
    num = constants.POINT_CONVERSION_COMPRESSED
    num = constants.POINT_CONVERSION_UNCOMPRESSED
    num = constants.POINT_CONVERSION_HYBRID
    str = constants.defaultCoreCipherList
    str = constants.defaultCipherList
}

///////////////////////////////////////////////////////////
/// Debugger Tests                                      ///
///////////////////////////////////////////////////////////

import { Client } from  "_debugger";

var client = new Client();

client.connect(8888, 'localhost');
client.listbreakpoints((err, body, packet) => {

});

////////////////////////////////////////////////////
/// zlib tests : http://nodejs.org/api/zlib.html ///
////////////////////////////////////////////////////

namespace zlib_tests {
    {
        const gzipped = zlib.gzipSync('test');
        const unzipped = zlib.gunzipSync(gzipped.toString());
    }

    {
        const deflate = zlib.deflateSync('test');
        const inflate = zlib.inflateSync(deflate.toString());
    }
}
