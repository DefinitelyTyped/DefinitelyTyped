import assert = require("assert");
import * as fs from "fs";
import * as events from "events";
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
import * as string_decoder from "string_decoder";
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

        assert.fail(1, 2, undefined, '>');

        assert.ifError(0);

        assert.notDeepStrictEqual({ x: { y: "3" } }, { x: { y: 3 } }, "uses !== comparator");

        assert.notEqual(1, 2, "uses != comparator");

        assert.notStrictEqual(2, "2", "uses === comparator");

        assert.ok(true);
        assert.ok(1);

        assert.strictEqual(1, 1, "uses === comparator");

        assert.throws(() => { throw "a hammer at your face"; }, undefined, "DODGED IT");
    }
}

////////////////////////////////////////////////////
/// Events tests : http://nodejs.org/api/events.html
////////////////////////////////////////////////////

namespace events_tests {
    let emitter: events.EventEmitter;
    let event: string;
    let listener: Function;
    let any: any;

    {
        let result: events.EventEmitter;

        result = emitter.addListener(event, listener);
        result = emitter.on(event, listener);
        result = emitter.once(event, listener);
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
        class Networker extends events.EventEmitter {
            constructor() {
                super();

                this.emit("mingling");
            }
        }
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
        index = buffer.indexOf(23);
        index = buffer.indexOf(buffer);
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
        util.inspect(["This is nice"], { colors: true, depth: 5, customInspect: false });
        util.inspect(["This is nice"], { colors: true, depth: null, customInspect: false });
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
    var r = fs.createReadStream('file.txt');
    var z = zlib.createGzip();
    var w = fs.createWriteStream('file.txt.gz');
    r.pipe(z).pipe(w);
    r.close();
}


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
}

//////////////////////////////////////////////////
/// TLS tests : http://nodejs.org/api/tls.html ///
//////////////////////////////////////////////////

namespace tls_tests {
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
    var ds: dgram.Socket = dgram.createSocket("udp4", (msg: Buffer, rinfo: dgram.RemoteInfo): void => {
    });
    var ai: dgram.AddressInfo = ds.address();
    ds.send(new Buffer("hello"), 0, 5, 5000, "127.0.0.1", (error: Error, bytes: number): void => {
    });
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
        path.join('foo', {}, 'bar');
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
}

////////////////////////////////////////////////////
/// string_decoder tests : https://nodejs.org/api/string_decoder.html
////////////////////////////////////////////////////

namespace string_decoder_tests {
    const StringDecoder = string_decoder.StringDecoder;
    const buffer = new Buffer('test');
    const decoder = new StringDecoder('utf8');
    const part: string = decoder.write(new Buffer('test'));
    const end: string = decoder.end();
}

//////////////////////////////////////////////////////////////////////
/// Child Process tests: https://nodejs.org/api/child_process.html ///
//////////////////////////////////////////////////////////////////////

namespace child_process_tests {
    {
        childProcess.exec("echo test");
        childProcess.spawnSync("echo test");
    }
}

//////////////////////////////////////////////////////////////////////
/// cluster tests: https://nodejs.org/api/cluster.html ///
//////////////////////////////////////////////////////////////////////

namespace cluster_tests 　{
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

///////////////////////////////////////////////////////////////////////////////
/// Errors Tests : https://nodejs.org/dist/latest-v4.x/docs/api/errors.html ///
///////////////////////////////////////////////////////////////////////////////

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
        // Make sure .listen() and .close() retuern a Server instance
        net.createServer().listen(0).close().address();
    }

    {
        /**
         * net.Socket - events.EventEmitter
         */
        let _socket: net.Socket = new net.Socket({
            fd: 1,
            allowHalfOpen: false,
            readable: false,
            writable: false
        });
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
