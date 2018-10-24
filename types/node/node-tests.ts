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
import * as v8 from "v8";
import * as dns from "dns";
import * as async_hooks from "async_hooks";
import * as http2 from "http2";
import * as inspector from "inspector";
import * as perf_hooks from "perf_hooks";
import Module = require("module");

// Specifically test buffer module regression.
import { Buffer as ImportedBuffer, SlowBuffer as ImportedSlowBuffer } from "buffer";

//////////////////////////////////////////////////////////
/// Global Tests : https://nodejs.org/api/global.html  ///
//////////////////////////////////////////////////////////
{
    {
        const x: NodeModule = {} as any;
        const y: NodeModule = {} as any;
        x.children.push(y);
        x.parent = require.main;
        require.main = y;
    }
}

//////////////////////////////////////////////////////////
/// Assert Tests : https://nodejs.org/api/assert.html ///
//////////////////////////////////////////////////////////

{
    {
        assert(1 + 1 - 2 === 0, "The universe isn't how it should.");

        assert.deepEqual({ x: { y: 3 } }, { x: { y: 3 } }, "DEEP WENT DERP");

        assert.deepStrictEqual({ a: 1 }, { a: 1 }, "uses === comparator");

        assert.doesNotThrow(() => {
            const b = false;
            if (b) { throw new Error("a hammer at your face"); }
        }, undefined, "What the...*crunch*");

        assert.equal(3, "3", "uses == comparator");

        assert.fail('stuff broke');

        assert.fail('actual', 'expected', 'message');

        assert.fail(1, 2, undefined, '>');

        assert.ifError(0);

        assert.notDeepStrictEqual({ x: { y: "3" } }, { x: { y: 3 } }, "uses !== comparator");

        assert.notEqual(1, 2, "uses != comparator");

        assert.notStrictEqual(2, "2", "uses === comparator");

        assert.ok(true);
        assert.ok(1);

        assert.strictEqual(1, 1, "uses === comparator");

        assert.throws(() => { throw new Error("a hammer at your face"); }, undefined, "DODGED IT");

        assert.strict.strict.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
    }
}

////////////////////////////////////////////////////
/// Events tests : http://nodejs.org/api/events.html
////////////////////////////////////////////////////

{
    const emitter: events.EventEmitter = new events.EventEmitter();
    const event: string | symbol = '';
    const listener: (...args: any[]) => void = () => {};
    const any: any = 1;

    {
        let result: events.EventEmitter;

        result = emitter.addListener(event, listener);
        result = emitter.on(event, listener);
        result = emitter.once(event, listener);
        result = emitter.prependListener(event, listener);
        result = emitter.prependOnceListener(event, listener);
        result = emitter.removeListener(event, listener);
        result = emitter.off(event, listener);
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
        let result: Array<string | symbol>;

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

{
    {
        fs.writeFile("thebible.txt",
            "Do unto others as you would have them do unto you.",
            assert.ifError);

        fs.write(1234, "test", () => { });

        fs.writeFile("Harry Potter",
            "\"You be wizzing, Harry,\" jived Dumbledore.",
            {
                encoding: "ascii"
            },
            assert.ifError);

        fs.writeFile("testfile", "content", "utf8", assert.ifError);

        fs.writeFileSync("testfile", "content", "utf8");
        fs.writeFileSync("testfile", "content", { encoding: "utf8" });
        fs.writeFileSync("testfile", new DataView(new ArrayBuffer(1)), { encoding: "utf8" });
    }

    {
        fs.appendFile("testfile", "foobar", "utf8", assert.ifError);
        fs.appendFile("testfile", "foobar", { encoding: "utf8" }, assert.ifError);
        fs.appendFileSync("testfile", "foobar", "utf8");
        fs.appendFileSync("testfile", "foobar", { encoding: "utf8" });
    }

    {
        let content: string;
        let buffer: Buffer;
        let stringOrBuffer: string | Buffer;
        const nullEncoding: string | null = null;
        const stringEncoding: string | null = 'utf8';

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
        fs.read(1, new DataView(new ArrayBuffer(1)), 0, 1, 0, (err: NodeJS.ErrnoException, bytesRead: number, buffer: DataView) => {});
    }

    {
        fs.readSync(1, new DataView(new ArrayBuffer(1)), 0, 1, 0);
    }

    {
        let errno: number;
        fs.readFile('testfile', (err, data) => {
            if (err && err.errno) {
                errno = err.errno;
            }
        });
    }

    {
        let listS: string[];
        listS = fs.readdirSync('path');
        listS = fs.readdirSync('path', { encoding: 'utf8' });
        listS = fs.readdirSync('path', { encoding: null });
        listS = fs.readdirSync('path', { encoding: undefined });
        listS = fs.readdirSync('path', 'utf8');
        listS = fs.readdirSync('path', null);
        listS = fs.readdirSync('path', undefined);
        const listDir: fs.Dirent[] = fs.readdirSync('path', { withFileTypes: true });
        const listDir2: Buffer[] = fs.readdirSync('path', { withFileTypes: false, encoding: 'buffer' });

        let listB: Buffer[];
        listB = fs.readdirSync('path', { encoding: 'buffer' });
        listB = fs.readdirSync("path", 'buffer');

        const enc = 'buffer';
        fs.readdirSync('path', { encoding: enc });
        fs.readdirSync('path', { });

        fs.readdir('path', { withFileTypes: true }, (err: NodeJS.ErrnoException, files: fs.Dirent[]) => {});
    }
    {
        fs.mkdtemp('/tmp/foo-', (err, folder) => {
            console.log(folder);
            // Prints: /tmp/foo-itXde2
        });
    }

    {
        let tempDir: string;
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

    {
        let s: string;
        let b: Buffer;
        fs.readlink('/path/to/folder', (err, linkString) => s = linkString);
        fs.readlink('/path/to/folder', undefined, (err, linkString) => s = linkString);
        fs.readlink('/path/to/folder', 'utf8', (err, linkString) => s = linkString);
        fs.readlink('/path/to/folder', 'buffer', (err, linkString) => b = linkString);
        fs.readlink('/path/to/folder', s, (err, linkString) => typeof linkString === 'string' ? s = linkString : b = linkString);
        fs.readlink('/path/to/folder', {}, (err, linkString) => s = linkString);
        fs.readlink('/path/to/folder', { encoding: undefined }, (err, linkString) => s = linkString);
        fs.readlink('/path/to/folder', { encoding: 'utf8' }, (err, linkString) => s = linkString);
        fs.readlink('/path/to/folder', { encoding: 'buffer' }, (err, linkString) => b = linkString);
        fs.readlink('/path/to/folder', { encoding: s }, (err, linkString) => typeof linkString === "string" ? s = linkString : b = linkString);

        s = fs.readlinkSync('/path/to/folder');
        s = fs.readlinkSync('/path/to/folder', undefined);
        s = fs.readlinkSync('/path/to/folder', 'utf8');
        b = fs.readlinkSync('/path/to/folder', 'buffer');
        const v1 = fs.readlinkSync('/path/to/folder', s);
        typeof v1 === "string" ? s = v1 : b = v1;

        s = fs.readlinkSync('/path/to/folder', {});
        s = fs.readlinkSync('/path/to/folder', { encoding: undefined });
        s = fs.readlinkSync('/path/to/folder', { encoding: 'utf8' });
        b = fs.readlinkSync('/path/to/folder', { encoding: 'buffer' });
        const v2 = fs.readlinkSync('/path/to/folder', { encoding: s });
        typeof v2 === "string" ? s = v2 : b = v2;
    }

    {
        let s: string;
        let b: Buffer;
        fs.realpath('/path/to/folder', (err, resolvedPath) => s = resolvedPath);
        fs.realpath('/path/to/folder', undefined, (err, resolvedPath) => s = resolvedPath);
        fs.realpath('/path/to/folder', 'utf8', (err, resolvedPath) => s = resolvedPath);
        fs.realpath('/path/to/folder', 'buffer', (err, resolvedPath) => b = resolvedPath);
        fs.realpath('/path/to/folder', s, (err, resolvedPath) => typeof resolvedPath === 'string' ? s = resolvedPath : b = resolvedPath);
        fs.realpath('/path/to/folder', {}, (err, resolvedPath) => s = resolvedPath);
        fs.realpath('/path/to/folder', { encoding: undefined }, (err, resolvedPath) => s = resolvedPath);
        fs.realpath('/path/to/folder', { encoding: 'utf8' }, (err, resolvedPath) => s = resolvedPath);
        fs.realpath('/path/to/folder', { encoding: 'buffer' }, (err, resolvedPath) => b = resolvedPath);
        fs.realpath('/path/to/folder', { encoding: s }, (err, resolvedPath) => typeof resolvedPath === "string" ? s = resolvedPath : b = resolvedPath);

        s = fs.realpathSync('/path/to/folder');
        s = fs.realpathSync('/path/to/folder', undefined);
        s = fs.realpathSync('/path/to/folder', 'utf8');
        b = fs.realpathSync('/path/to/folder', 'buffer');
        const v1 = fs.realpathSync('/path/to/folder', s);
        typeof v1 === "string" ? s = v1 : b = v1;

        s = fs.realpathSync('/path/to/folder', {});
        s = fs.realpathSync('/path/to/folder', { encoding: undefined });
        s = fs.realpathSync('/path/to/folder', { encoding: 'utf8' });
        b = fs.realpathSync('/path/to/folder', { encoding: 'buffer' });
        const v2 = fs.realpathSync('/path/to/folder', { encoding: s });
        typeof v2 === "string" ? s = v2 : b = v2;

        // native
        fs.realpath.native('/path/to/folder', (err, resolvedPath) => s = resolvedPath);
        fs.realpath.native('/path/to/folder', undefined, (err, resolvedPath) => s = resolvedPath);
        fs.realpath.native('/path/to/folder', 'utf8', (err, resolvedPath) => s = resolvedPath);
        fs.realpath.native('/path/to/folder', 'buffer', (err, resolvedPath) => b = resolvedPath);
        fs.realpath.native('/path/to/folder', s, (err, resolvedPath) => typeof resolvedPath === 'string' ? s = resolvedPath : b = resolvedPath);
        fs.realpath.native('/path/to/folder', {}, (err, resolvedPath) => s = resolvedPath);
        fs.realpath.native('/path/to/folder', { encoding: undefined }, (err, resolvedPath) => s = resolvedPath);
        fs.realpath.native('/path/to/folder', { encoding: 'utf8' }, (err, resolvedPath) => s = resolvedPath);
        fs.realpath.native('/path/to/folder', { encoding: 'buffer' }, (err, resolvedPath) => b = resolvedPath);
        fs.realpath.native('/path/to/folder', { encoding: s }, (err, resolvedPath) => typeof resolvedPath === "string" ? s = resolvedPath : b = resolvedPath);

        s = fs.realpathSync.native('/path/to/folder');
        s = fs.realpathSync.native('/path/to/folder', undefined);
        s = fs.realpathSync.native('/path/to/folder', 'utf8');
        b = fs.realpathSync.native('/path/to/folder', 'buffer');
        const v3 = fs.realpathSync.native('/path/to/folder', s);
        typeof v3 === "string" ? s = v3 : b = v3;

        s = fs.realpathSync.native('/path/to/folder', {});
        s = fs.realpathSync.native('/path/to/folder', { encoding: undefined });
        s = fs.realpathSync.native('/path/to/folder', { encoding: 'utf8' });
        b = fs.realpathSync.native('/path/to/folder', { encoding: 'buffer' });
        const v4 = fs.realpathSync.native('/path/to/folder', { encoding: s });
        typeof v4 === "string" ? s = v4 : b = v4;
    }

    {
        fs.copyFile('/path/to/src', '/path/to/dest', (err) => console.error(err));
        fs.copyFile('/path/to/src', '/path/to/dest', fs.constants.COPYFILE_EXCL, (err) => console.error(err));
        fs.copyFile('/path/to/src', '/path/to/dest', fs.constants.COPYFILE_FICLONE, (err) => console.error(err));
        fs.copyFile('/path/to/src', '/path/to/dest', fs.constants.COPYFILE_FICLONE_FORCE, (err) => console.error(err));

        fs.copyFileSync('/path/to/src', '/path/to/dest', fs.constants.COPYFILE_EXCL);
        fs.copyFileSync('/path/to/src', '/path/to/dest', fs.constants.COPYFILE_FICLONE);
        fs.copyFileSync('/path/to/src', '/path/to/dest', fs.constants.COPYFILE_FICLONE_FORCE);

        const cf = util.promisify(fs.copyFile);
        cf('/path/to/src', '/path/to/dest', fs.constants.COPYFILE_EXCL).then(console.log);
    }

    {
        fs.mkdir('some/test/path', {
            recursive: true,
            mode: 0o777,
        }, () => {
        });

        fs.mkdirSync('some/test/path', {
            recursive: true,
            mode: 0o777,
        });
    }
}

///////////////////////////////////////////////////////
/// Buffer tests : https://nodejs.org/api/buffer.html
///////////////////////////////////////////////////////

function bufferTests() {
    const utf8Buffer = new Buffer('test');
    const base64Buffer = new Buffer('', 'base64');
    const octets: Uint8Array = null;
    const octetBuffer = new Buffer(octets);
    const sharedBuffer = new Buffer(octets.buffer);
    const copiedBuffer = new Buffer(utf8Buffer);
    console.log(Buffer.isBuffer(octetBuffer));
    console.log(Buffer.isEncoding('utf8'));
    console.log(Buffer.byteLength('xyz123'));
    console.log(Buffer.byteLength('xyz123', 'ascii'));
    const result1 = Buffer.concat([utf8Buffer, base64Buffer]);
    const result2 = Buffer.concat([utf8Buffer, base64Buffer], 9999999);

    // Class Methods: Buffer.swap16(), Buffer.swa32(), Buffer.swap64()
    {
        const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);
        buf.swap16();
        buf.swap32();
        buf.swap64();
    }

    // Class Method: Buffer.from(data)
    {
        // Array
        const buf1: Buffer = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
        // Buffer
        const buf2: Buffer = Buffer.from(buf1);
        // String
        const buf3: Buffer = Buffer.from('this is a tést');
        // ArrayBuffer
        const arrUint16: Uint16Array = new Uint16Array(2);
        arrUint16[0] = 5000;
        arrUint16[1] = 4000;
        const buf4: Buffer = Buffer.from(arrUint16.buffer);
        const arrUint8: Uint8Array = new Uint8Array(2);
        const buf5: Buffer = Buffer.from(arrUint8);
        const buf6: Buffer = Buffer.from(buf1);
        const sharedArrayBuffer: SharedArrayBuffer = {
            byteLength: 10,
            slice: (begin?: number, end?: number) => sharedArrayBuffer
        };
        const buf7: Buffer = Buffer.from(sharedArrayBuffer);
    }

    // Class Method: Buffer.from(arrayBuffer[, byteOffset[, length]])
    {
        const arr: Uint16Array = new Uint16Array(2);
        arr[0] = 5000;
        arr[1] = 4000;

        let buf: Buffer;
        buf = Buffer.from(arr.buffer, 1);
        buf = Buffer.from(arr.buffer, 0, 1);
    }

    // Class Method: Buffer.from(str[, encoding])
    {
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

    // Class Method byteLenght
    {
        let len: number;
        len = Buffer.byteLength("foo");
        len = Buffer.byteLength("foo", "utf8");

        const b = Buffer.from("bar");
        len = Buffer.byteLength(b);
        len = Buffer.byteLength(b, "utf16le");

        const ab = new ArrayBuffer(15);
        len = Buffer.byteLength(ab);
        len = Buffer.byteLength(ab, "ascii");

        const dv = new DataView(ab);
        len = Buffer.byteLength(dv);
        len = Buffer.byteLength(dv, "utf16le");
    }

    // Class Method poolSize
    {
        let s: number;
        s = Buffer.poolSize;
        Buffer.poolSize = 4096;
    }

    // Test that TS 1.6 works with the 'as Buffer' annotation
    // on isBuffer.
    let a: Buffer | number;
    a = new Buffer(10);
    if (Buffer.isBuffer(a)) {
        a.writeUInt8(3, 4);
    }

    // write* methods return offsets.
    const b = new Buffer(16);
    let result: number = b.writeUInt32LE(0, 0);
    result = b.writeUInt16LE(0, 4);
    result = b.writeUInt8(0, 6);
    result = b.writeInt8(0, 7);
    result = b.writeDoubleLE(0, 8);

    // fill returns the input buffer.
    b.fill('a').fill('b');

    {
        const buffer = new Buffer('123');
        let index: number;
        index = buffer.indexOf("23");
        index = buffer.indexOf("23", 1);
        index = buffer.indexOf("23", 1, "utf8");
        index = buffer.indexOf(23);
        index = buffer.indexOf(buffer);
    }

    {
        const buffer = new Buffer('123');
        let index: number;
        index = buffer.lastIndexOf("23");
        index = buffer.lastIndexOf("23", 1);
        index = buffer.lastIndexOf("23", 1, "utf8");
        index = buffer.lastIndexOf(23);
        index = buffer.lastIndexOf(buffer);
    }

    {
        const buffer = new Buffer('123');
        const val: [number, number] = [1, 1];

        /* comment out for --target es5
        for (let entry of buffer.entries()) {
            val = entry;
        }
         */
    }

    {
        const buffer = new Buffer('123');
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
        const buffer = new Buffer('123');
        const val = 1;

        /* comment out for --target es5
        for (let key of buffer.keys()) {
            val = key;
        }
         */
    }

    {
        const buffer = new Buffer('123');
        const val = 1;

        /* comment out for --target es5
        for (let value of buffer.values()) {
            val = value;
        }
         */
    }

    // Imported Buffer from buffer module works properly
    {
        const b = new ImportedBuffer('123');
        b.writeUInt8(0, 6);
        const sb = new ImportedSlowBuffer(43);
        b.writeUInt8(0, 6);
    }

    // Buffer has Uint8Array's buffer field (an ArrayBuffer).
    {
        const buffer = new Buffer('123');
        const octets = new Uint8Array(buffer.buffer);
    }
}

////////////////////////////////////////////////////
/// Url tests : http://nodejs.org/api/url.html
////////////////////////////////////////////////////

{
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

        const myURL = new url.URL('https://a:b@你好你好?abc#foo');
        url.format(myURL, { fragment: false, unicode: true, auth: false });
    }

    {
        const helloUrl = url.parse('http://example.com/?hello=world', true);
        let helloQuery = helloUrl.query['hello'];
        assert.equal(helloUrl.query['hello'], 'world');

        let strUrl = url.parse('http://example.com/?hello=world');
        let queryStr: string = strUrl.query;

        strUrl = url.parse('http://example.com/?hello=world', false);
        queryStr = strUrl.query;

        function getBoolean(): boolean { return false; }
        const urlUrl = url.parse('http://example.com/?hello=world', getBoolean());
        if (typeof(urlUrl.query) === 'string') {
            queryStr = urlUrl.query;
        } else if (urlUrl.query) {
            helloQuery = urlUrl.query['hello'];
        }
    }

    {
        const ascii: string = url.domainToASCII('español.com');
        const unicode: string = url.domainToUnicode('xn--espaol-zwa.com');
    }

    {
        let myURL = new url.URL('https://theuser:thepwd@example.org:81/foo/path?query=string#bar');
        assert.equal(myURL.hash, '#bar');
        assert.equal(myURL.host, 'example.org:81');
        assert.equal(myURL.hostname, 'example.org');
        assert.equal(myURL.href, 'https://theuser:thepwd@example.org:81/foo/path?query=string#bar');
        assert.equal(myURL.origin, 'https://example.org:81');
        assert.equal(myURL.password, 'thepwd');
        assert.equal(myURL.username, 'theuser');
        assert.equal(myURL.pathname, '/foo/path');
        assert.equal(myURL.port, "81");
        assert.equal(myURL.protocol, "https:");
        assert.equal(myURL.search, "?query=string");
        assert.equal(myURL.toString(), 'https://theuser:thepwd@example.org:81/foo/path?query=string#bar');
        assert(myURL.searchParams instanceof url.URLSearchParams);

        myURL.host = 'example.org:82';
        myURL.hostname = 'example.com';
        myURL.href = 'http://other.com';
        myURL.hash = 'baz';
        myURL.password = "otherpwd";
        myURL.username = "otheruser";
        myURL.pathname = "/otherPath";
        myURL.port = "82";
        myURL.protocol = "http";
        myURL.search = "a=b";
        assert.equal(myURL.href, 'http://otheruser:otherpwd@other.com:82/otherPath?a=b#baz');

        myURL = new url.URL('/foo', 'https://example.org/');
        assert.equal(myURL.href, 'https://example.org/foo');
        assert.equal(myURL.toJSON(), myURL.href);
    }

    {
        const searchParams = new url.URLSearchParams('abc=123');

        assert.equal(searchParams.toString(), 'abc=123');
        searchParams.forEach((value: string, name: string, me: url.URLSearchParams): void => {
            assert.equal(name, 'abc');
            assert.equal(value, '123');
            assert.equal(me, searchParams);
        });

        assert.equal(searchParams.get('abc'), '123');

        searchParams.append('abc', 'xyz');

        assert.deepEqual(searchParams.getAll('abc'), ['123', 'xyz']);

        const entries = searchParams.entries();
        assert.deepEqual(entries.next(), { value: ["abc", "123"], done: false });
        assert.deepEqual(entries.next(), { value: ["abc", "xyz"], done: false });
        assert.deepEqual(entries.next(), { value: undefined, done: true });

        const keys = searchParams.keys();
        assert.deepEqual(keys.next(), { value: "abc", done: false });
        assert.deepEqual(keys.next(), { value: "abc", done: false });
        assert.deepEqual(keys.next(), { value: undefined, done: true });

        const values = searchParams.values();
        assert.deepEqual(values.next(), { value: "123", done: false });
        assert.deepEqual(values.next(), { value: "xyz", done: false });
        assert.deepEqual(values.next(), { value: undefined, done: true });

        searchParams.set('abc', 'b');
        assert.deepEqual(searchParams.getAll('abc'), ['b']);

        searchParams.delete('a');
        assert(!searchParams.has('a'));
        assert.equal(searchParams.get('a'), null);

        searchParams.sort();
    }

    {
        const searchParams = new url.URLSearchParams({
            user: 'abc',
            query: ['first', 'second']
        });

        assert.equal(searchParams.toString(), 'user=abc&query=first%2Csecond');
        assert.deepEqual(searchParams.getAll('query'), ['first,second']);
    }

    {
        // Using an array
        const params = new url.URLSearchParams([
            ['user', 'abc'],
            ['query', 'first'],
            ['query', 'second']
        ]);
        assert.equal(params.toString(), 'user=abc&query=first&query=second');
    }

    {
        let path: string = url.fileURLToPath('file://test');
        path = url.fileURLToPath(new url.URL('file://test'));
    }

    {
        const path: url.URL = url.pathToFileURL('file://test');
    }
}

/////////////////////////////////////////////////////
/// util tests : https://nodejs.org/api/util.html ///
/////////////////////////////////////////////////////

{
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
            breakLength: 20,
            compact: true,
            sorted(a, b) {
                return b.localeCompare(a);
            },
        });
        util.inspect(["This is nice"], {
            colors: true,
            depth: null,
            customInspect: false,
            showProxy: true,
            maxArrayLength: null,
            breakLength: Infinity,
            compact: false,
            sorted: true,
        });
        assert(typeof util.inspect.custom === 'symbol');

        util.formatWithOptions({ colors: true }, 'See object %O', { foo: 42 });

        // util.callbackify
        // tslint:disable-next-line no-unnecessary-class
        class callbackifyTest {
            static fn(): Promise<void> {
                assert(arguments.length === 0);

                return Promise.resolve();
            }

            static fnE(): Promise<void> {
                assert(arguments.length === 0);

                return Promise.reject(new Error('fail'));
            }

            static fnT1(arg1: string): Promise<void> {
                assert(arguments.length === 1 && arg1 === 'parameter');

                return Promise.resolve();
            }

            static fnT1E(arg1: string): Promise<void> {
                assert(arguments.length === 1 && arg1 === 'parameter');

                return Promise.reject(new Error('fail'));
            }

            static fnTResult(): Promise<string> {
                assert(arguments.length === 0);

                return Promise.resolve('result');
            }

            static fnTResultE(): Promise<string> {
                assert(arguments.length === 0);

                return Promise.reject(new Error('fail'));
            }

            static fnT1TResult(arg1: string): Promise<string> {
                assert(arguments.length === 1 && arg1 === 'parameter');

                return Promise.resolve('result');
            }

            static fnT1TResultE(arg1: string): Promise<string> {
                assert(arguments.length === 1 && arg1 === 'parameter');

                return Promise.reject(new Error('fail'));
            }

            static test(): void {
                const cfn = util.callbackify(this.fn);
                const cfnE = util.callbackify(this.fnE);
                const cfnT1 = util.callbackify(this.fnT1);
                const cfnT1E = util.callbackify(this.fnT1E);
                const cfnTResult = util.callbackify(this.fnTResult);
                const cfnTResultE = util.callbackify(this.fnTResultE);
                const cfnT1TResult = util.callbackify(this.fnT1TResult);
                const cfnT1TResultE = util.callbackify(this.fnT1TResultE);

                cfn((err: NodeJS.ErrnoException, ...args: string[]) => assert(err === null && args.length === 1 && args[0] === undefined));
                cfnE((err: NodeJS.ErrnoException, ...args: string[]) => assert(err.message === 'fail' && args.length === 0));
                cfnT1('parameter', (err: NodeJS.ErrnoException, ...args: string[]) => assert(err === null && args.length === 1 && args[0] === undefined));
                cfnT1E('parameter', (err: NodeJS.ErrnoException, ...args: string[]) => assert(err.message === 'fail' && args.length === 0));
                cfnTResult((err: NodeJS.ErrnoException, ...args: string[]) => assert(err === null && args.length === 1 && args[0] === 'result'));
                cfnTResultE((err: NodeJS.ErrnoException, ...args: string[]) => assert(err.message === 'fail' && args.length === 0));
                cfnT1TResult('parameter', (err: NodeJS.ErrnoException, ...args: string[]) => assert(err === null && args.length === 1 && args[0] === 'result'));
                cfnT1TResultE('parameter', (err: NodeJS.ErrnoException, ...args: string[]) => assert(err.message === 'fail' && args.length === 0));
            }
        }
        callbackifyTest.test();

        // util.promisify
        const readPromised = util.promisify(fs.readFile);
        const sampleRead: Promise<any> = readPromised(__filename).then((data: Buffer): void => { }).catch((error: Error): void => { });
        const arg0: () => Promise<number> = util.promisify((cb: (err: Error, result: number) => void): void => { });
        const arg0NoResult: () => Promise<any> = util.promisify((cb: (err: Error) => void): void => { });
        const arg1: (arg: string) => Promise<number> = util.promisify((arg: string, cb: (err: Error, result: number) => void): void => { });
        const arg1NoResult: (arg: string) => Promise<any> = util.promisify((arg: string, cb: (err: Error) => void): void => { });
        const cbOptionalError: () => Promise<void | {}> = util.promisify((cb: (err?: Error | null) => void): void => { cb(); }); // tslint:disable-line void-return
        assert(typeof util.promisify.custom === 'symbol');
        // util.deprecate
        const foo = () => {};
        // $ExpectType () => void
        util.deprecate(foo, 'foo() is deprecated, use bar() instead');
        // $ExpectType <T extends Function>(fn: T, message: string) => T
        util.deprecate(util.deprecate, 'deprecate() is deprecated, use bar() instead');

        // util.isDeepStrictEqual
        util.isDeepStrictEqual({foo: 'bar'}, {foo: 'bar'});

        // util.TextDecoder()
        const td = new util.TextDecoder();
        new util.TextDecoder("utf-8");
        new util.TextDecoder("utf-8", { fatal: true });
        new util.TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
        const ignoreBom: boolean = td.ignoreBOM;
        const fatal: boolean = td.fatal;
        const encoding: string = td.encoding;
        td.decode(new Int8Array(1));
        td.decode(new Int16Array(1));
        td.decode(new Int32Array(1));
        td.decode(new Uint8Array(1));
        td.decode(new Uint16Array(1));
        td.decode(new Uint32Array(1));
        td.decode(new Uint8ClampedArray(1));
        td.decode(new Float32Array(1));
        td.decode(new Float64Array(1));
        td.decode(new DataView(new Int8Array(1).buffer));
        td.decode(new ArrayBuffer(1));
        td.decode(null);
        td.decode(null, { stream: true });
        td.decode(new Int8Array(1), { stream: true });
        const decode: string = td.decode(new Int8Array(1));

        // util.TextEncoder()
        const te = new util.TextEncoder();
        const teEncoding: string = te.encoding;
        const teEncodeRes: Uint8Array = te.encode("TextEncoder");

        // util.types

        // tslint:disable-next-line:no-construct ban-types
        const maybeBoxed: number | Number = new Number(1);
        if (util.types.isBoxedPrimitive(maybeBoxed)) {
            const boxed: Number = maybeBoxed;
        }
        const maybeBoxed2: number | Number = 1;
        if (!util.types.isBoxedPrimitive(maybeBoxed2)) {
            const boxed: number = maybeBoxed2;
        }
    }
}

////////////////////////////////////////////////////
/// Stream tests : http://nodejs.org/api/stream.html
////////////////////////////////////////////////////

// http://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
function stream_readable_pipe_test() {
    const rs = fs.createReadStream(Buffer.from('file.txt'));
    const r = fs.createReadStream('file.txt');
    const z = zlib.createGzip({ finishFlush: zlib.constants.Z_FINISH });
    const w = fs.createWriteStream('file.txt.gz');

    assert(typeof z.bytesRead === 'number');
    assert(typeof r.bytesRead === 'number');
    assert(typeof r.path === 'string');
    assert(rs.path instanceof Buffer);

    r.pipe(z).pipe(w);

    z.flush();
    r.close();
    z.close();
    rs.close();
}

// helpers
const compressMe = new Buffer("some data");
const compressMeString = "compress me!";

zlib.deflate(compressMe, (err: Error, result: Buffer) => zlib.inflate(result, (err: Error, result: Buffer) => result));
zlib.deflate(compressMe, { finishFlush: zlib.Z_SYNC_FLUSH }, (err: Error, result: Buffer) => zlib.inflate(result, { finishFlush: zlib.Z_SYNC_FLUSH }, (err: Error, result: Buffer) => result));
zlib.deflate(compressMeString, (err: Error, result: Buffer) => zlib.inflate(result, (err: Error, result: Buffer) => result));
zlib.deflate(compressMeString, { finishFlush: zlib.Z_SYNC_FLUSH }, (err: Error, result: Buffer) => zlib.inflate(result, { finishFlush: zlib.Z_SYNC_FLUSH }, (err: Error, result: Buffer) => result));
const inflated = zlib.inflateSync(zlib.deflateSync(compressMe));
const inflatedString = zlib.inflateSync(zlib.deflateSync(compressMeString));

zlib.deflateRaw(compressMe, (err: Error, result: Buffer) => zlib.inflateRaw(result, (err: Error, result: Buffer) => result));
zlib.deflateRaw(compressMe, { finishFlush: zlib.Z_SYNC_FLUSH }, (err: Error, result: Buffer) => zlib.inflateRaw(result, { finishFlush: zlib.Z_SYNC_FLUSH }, (err: Error, result: Buffer) => result));
zlib.deflateRaw(compressMeString, (err: Error, result: Buffer) => zlib.inflateRaw(result, (err: Error, result: Buffer) => result));
zlib.deflateRaw(
    compressMeString,
    { finishFlush: zlib.Z_SYNC_FLUSH },
    (err: Error, result: Buffer) => zlib.inflateRaw(result, { finishFlush: zlib.Z_SYNC_FLUSH }, (err: Error, result: Buffer) => result),
);
const inflatedRaw: Buffer = zlib.inflateRawSync(zlib.deflateRawSync(compressMe));
const inflatedRawString: Buffer = zlib.inflateRawSync(zlib.deflateRawSync(compressMeString));

zlib.gzip(compressMe, (err: Error, result: Buffer) => zlib.gunzip(result, (err: Error, result: Buffer) => result));
zlib.gzip(compressMe, { finishFlush: zlib.Z_SYNC_FLUSH }, (err: Error, result: Buffer) => zlib.gunzip(result, { finishFlush: zlib.Z_SYNC_FLUSH }, (err: Error, result: Buffer) => result));
const gunzipped: Buffer = zlib.gunzipSync(zlib.gzipSync(compressMe));

zlib.unzip(compressMe, (err: Error, result: Buffer) => result);
zlib.unzip(compressMe, { finishFlush: zlib.Z_SYNC_FLUSH }, (err: Error, result: Buffer) => result);
const unzipped: Buffer = zlib.unzipSync(compressMe);

// Simplified constructors
function simplified_stream_ctor_test() {
    new stream.Readable({
        read(size) {
            // $ExpectType Readable
            this;
            // $ExpectType number
            size;
        },
        destroy(error, cb) {
            // $ExpectType Error
            error;
            // $ExpectType (error: Error) => void
            cb;
        }
    });

    new stream.Writable({
        write(chunk, enc, cb) {
            // $ExpectType Writable
            this;
            // $ExpectType any
            chunk;
            // $ExpectType string
            enc;
            // $ExpectType (error?: Error) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Writable
            this;
            // $ExpectType { chunk: any; encoding: string; }[]
            chunks;
            // $ExpectType (error?: Error) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Writable
            this;
            // $ExpectType Error
            error;
            // $ExpectType (error: Error) => void
            cb;
        },
        final(cb) {
            // $ExpectType Writable
            this;
            // $ExpectType (error?: Error) => void
            cb;
        }
    });

    new stream.Duplex({
        read(size) {
            // $ExpectType Duplex
            this;
            // $ExpectType number
            size;
        },
        write(chunk, enc, cb) {
            // $ExpectType Duplex
            this;
            // $ExpectType any
            chunk;
            // $ExpectType string
            enc;
            // $ExpectType (error?: Error) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Duplex
            this;
            // $ExpectType { chunk: any; encoding: string; }[]
            chunks;
            // $ExpectType (error?: Error) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Duplex
            this;
            // $ExpectType Error
            error;
            // $ExpectType (error: Error) => void
            cb;
        },
        final(cb) {
            // $ExpectType Duplex
            this;
            // $ExpectType (error?: Error) => void
            cb;
        },
        readableObjectMode: true,
        writableObjectMode: true
    });

    new stream.Transform({
        read(size) {
            // $ExpectType Transform
            this;
            // $ExpectType number
            size;
        },
        write(chunk, enc, cb) {
            // $ExpectType Transform
            this;
            // $ExpectType any
            chunk;
            // $ExpectType string
            enc;
            // $ExpectType (error?: Error) => void
            cb;
        },
        writev(chunks, cb) {
            // $ExpectType Transform
            this;
            // $ExpectType { chunk: any; encoding: string; }[]
            chunks;
            // $ExpectType (error?: Error) => void
            cb;
        },
        destroy(error, cb) {
            // $ExpectType Transform
            this;
            // $ExpectType Error
            error;
            // $ExpectType (error: Error) => void
            cb;
        },
        final(cb) {
            // $ExpectType Transform
            this;
            // $ExpectType (error?: Error) => void
            cb;
        },
        transform(chunk, enc, cb) {
            // $ExpectType Transform
            this;
            // $ExpectType any
            chunk;
            // $ExpectType string
            enc;
            // $ExpectType TransformCallback
            cb;
        },
        flush(cb) {
            // $ExpectType TransformCallback
            cb;
        },
        allowHalfOpen: true,
        readableObjectMode: true,
        writableObjectMode: true
    });
}

function streamPipelineFinished() {
    const cancel = stream.finished(process.stdin, (err?: Error) => {});
    cancel();

    stream.pipeline(process.stdin, process.stdout, (err?: Error) => {});
}

async function asyncStreamPipelineFinished() {
    const finished = util.promisify(stream.finished);
    await finished(process.stdin);

    const pipeline = util.promisify(stream.pipeline);
    await pipeline(process.stdin, process.stdout);
}

////////////////////////////////////////////////////////
/// Crypto tests : http://nodejs.org/api/crypto.html ///
////////////////////////////////////////////////////////

{
    {
        // crypto_hash_string_test
        const hashResult: string = crypto.createHash('md5').update('world').digest('hex');
    }

    {
        // crypto_hash_buffer_test
        const hashResult: string = crypto.createHash('md5')
            .update(new Buffer('world')).digest('hex');
    }

    {
        // crypto_hash_dataview_test
        const hashResult: string = crypto.createHash('md5')
            .update(new DataView(new Buffer('world').buffer)).digest('hex');
    }

    {
        // crypto_hash_int8array_test
        const hashResult: string = crypto.createHash('md5')
            .update(new Int8Array(new Buffer('world').buffer)).digest('hex');
    }

    {
        // crypto_hmac_string_test
        const hmacResult: string = crypto.createHmac('md5', 'hello').update('world').digest('hex');
    }

    {
        // crypto_hmac_buffer_test
        const hmacResult: string = crypto.createHmac('md5', 'hello')
            .update(new Buffer('world')).digest('hex');
    }

    {
        // crypto_hmac_dataview_test
        const hmacResult: string = crypto.createHmac('md5', 'hello')
            .update(new DataView(new Buffer('world').buffer)).digest('hex');
    }

    {
        // crypto_hmac_int8array_test
        const hmacResult: string = crypto.createHmac('md5', 'hello')
            .update(new Int8Array(new Buffer('world').buffer)).digest('hex');
    }

    {
        let hmac: crypto.Hmac;
        (hmac = crypto.createHmac('md5', 'hello')).end('world', 'utf8', () => {
            const hash: Buffer | string = hmac.read();
        });
    }

    {
        // crypto_cipher_decipher_string_test
        const key: Buffer = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7]);
        const clearText = "This is the clear text.";
        const cipher: crypto.Cipher = crypto.createCipher("aes-128-ecb", key);
        let cipherText: string = cipher.update(clearText, "utf8", "hex");
        cipherText += cipher.final("hex");

        const decipher: crypto.Decipher = crypto.createDecipher("aes-128-ecb", key);
        let clearText2: string = decipher.update(cipherText, "hex", "utf8");
        clearText2 += decipher.final("utf8");

        assert.equal(clearText2, clearText);
    }

    {
        // crypto_cipher_decipher_buffer_test
        const key: Buffer = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7]);
        const clearText: Buffer = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4]);
        const cipher: crypto.Cipher = crypto.createCipher("aes-128-ecb", key);
        const cipherBuffers: Buffer[] = [];
        cipherBuffers.push(cipher.update(clearText));
        cipherBuffers.push(cipher.final());

        const cipherText: Buffer = Buffer.concat(cipherBuffers);

        const decipher: crypto.Decipher = crypto.createDecipher("aes-128-ecb", key);
        const decipherBuffers: Buffer[] = [];
        decipherBuffers.push(decipher.update(cipherText));
        decipherBuffers.push(decipher.final());

        const clearText2: Buffer = Buffer.concat(decipherBuffers);

        assert.deepEqual(clearText2, clearText);
    }

    {
        // crypto_cipher_decipher_dataview_test
        const key: Buffer = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7]);
        const clearText: DataView = new DataView(new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4]).buffer);
        const cipher: crypto.Cipher = crypto.createCipher("aes-128-ecb", key);
        const cipherBuffers: Buffer[] = [];
        cipherBuffers.push(cipher.update(clearText));
        cipherBuffers.push(cipher.final());

        const cipherText: DataView = new DataView(Buffer.concat(cipherBuffers).buffer);

        const decipher: crypto.Decipher = crypto.createDecipher("aes-128-ecb", key);
        const decipherBuffers: Buffer[] = [];
        decipherBuffers.push(decipher.update(cipherText));
        decipherBuffers.push(decipher.final());

        const clearText2: Buffer = Buffer.concat(decipherBuffers);

        assert.deepEqual(clearText2, clearText);
    }

    {
        const key = 'keykeykeykeykeykeykeykey';
        const nonce = crypto.randomBytes(12);
        const aad = Buffer.from('0123456789', 'hex');

        const cipher = crypto.createCipheriv('aes-192-ccm', key, nonce, {
            authTagLength: 16
        });
        const plaintext = 'Hello world';
        cipher.setAAD(aad, {
            plaintextLength: Buffer.byteLength(plaintext)
        });
        const ciphertext = cipher.update(plaintext, 'utf8');
        cipher.final();
        const tag = cipher.getAuthTag();

        const decipher = crypto.createDecipheriv('aes-192-ccm', key, nonce, {
            authTagLength: 16
        });
        decipher.setAuthTag(tag);
        decipher.setAAD(aad, {
            plaintextLength: ciphertext.length
        });
        const receivedPlaintext: string = decipher.update(ciphertext, null, 'utf8');
        decipher.final();
    }

    {
        const key = 'keykeykeykeykeykeykeykey';
        const nonce = crypto.randomBytes(12);
        const aad = Buffer.from('0123456789', 'hex');

        const cipher = crypto.createCipheriv('aes-192-gcm', key, nonce);
        const plaintext = 'Hello world';
        cipher.setAAD(aad, {
            plaintextLength: Buffer.byteLength(plaintext)
        });
        const ciphertext = cipher.update(plaintext, 'utf8');
        cipher.final();
        const tag = cipher.getAuthTag();

        const decipher = crypto.createDecipheriv('aes-192-gcm', key, nonce);
        decipher.setAuthTag(tag);
        decipher.setAAD(aad, {
            plaintextLength: ciphertext.length
        });
        const receivedPlaintext: string = decipher.update(ciphertext, null, 'utf8');
        decipher.final();
    }

    {
        // crypto_timingsafeequal_buffer_test
        const buffer1: Buffer = new Buffer([1, 2, 3, 4, 5]);
        const buffer2: Buffer = new Buffer([1, 2, 3, 4, 5]);
        const buffer3: Buffer = new Buffer([5, 4, 3, 2, 1]);

        assert(crypto.timingSafeEqual(buffer1, buffer2));
        assert(!crypto.timingSafeEqual(buffer1, buffer3));
    }

    {
        // crypto_timingsafeequal_uint32array_test
        const arr1: Uint32Array = Uint32Array.of(1, 2, 3, 4, 5);
        const arr2: Uint32Array = Uint32Array.of(1, 2, 3, 4, 5);
        const arr3: Uint32Array = Uint32Array.of(5, 4, 3, 2, 1);

        assert(crypto.timingSafeEqual(arr1, arr2));
        assert(!crypto.timingSafeEqual(arr1, arr3));
    }

    {
        // crypto_timingsafeequal_safe_typedarray_variant_test
        const arr1: Uint32Array = Uint32Array.of(1, 2, 3, 4, 5);
        const arr2: Int32Array = Int32Array.of(1, 2, 3, 4, 5);
        const arr3: Uint32Array = Uint32Array.of(5, 4, 3, 2, 1);

        assert(crypto.timingSafeEqual(arr1, arr2));
        assert(!crypto.timingSafeEqual(arr1, arr3));
    }

    {
        // crypto_timingsafeequal_safe_int8array_variant_test
        const arr1: Int8Array = Int8Array.of(1, 2, 3, 4, 5, ~0, ~1, ~2, ~3, ~4);
        const arr2: Uint8Array = Uint8Array.of(1, 2, 3, 4, 5, ~0, ~1, ~2, ~3, ~4);
        const arr3: Uint8ClampedArray = Uint8ClampedArray.of(1, 2, 3, 4, 5, ~0, ~1, ~2, ~3, ~4);

        assert(crypto.timingSafeEqual(arr1, arr2)); // binary same
        assert(!crypto.timingSafeEqual(arr1, arr3)); // binary differ
    }

    {
        // crypto_timingsafeequal_safe_arraybufferiew_variant_test
        /* throws as of v10.4.1 */
        // let arr1: Uint8Array = Uint8Array.of(1, 0, 2, 0, 3, 0, 4, 0);
        // let arr2: Uint16Array = Uint16Array.of(1, 2, 3, 4);
        // let arr3: Uint32Array = Uint8ClampedArray.of(131073, 262147);

        // assert(crypto.timingSafeEqual(arr1, arr2)); // binary same
        // assert(crypto.timingSafeEqual(arr1, arr3)); // binary same
    }

    {
        // crypto_timingsafeequal_unsafe_arraybufferiew_variant_test
        /* dumps core as of v10.4.1 */
        // let arr1: Uint8Array = Uint8Array.of(1, 2, 3, 4);
        // let arr2: Uint16Array = Uint16Array.of(1, 2, 3, 4);
        // let arr3: Uint32Array = Uint8ClampedArray.of(1, 2, 3, 4);

        // assert(!crypto.timingSafeEqual(arr1, arr2)); // dumps core
        // assert(!crypto.timingSafeEqual(arr1, arr3)); // dumps core
    }

    {
        // crypto_timingsafeequal_dataview_test
        const dv1B: Uint8Array = Uint8Array.of(1, 2, 3, 4, 5);
        const dv2B: Int8Array = Int8Array.of(1, 2, 3, 4, 5);
        const dv3B: Buffer = Buffer.of(5, 4, 3, 2, 1);
        const dv4B: Uint8ClampedArray = Uint8ClampedArray.of(5, 4, 3, 2, 1);
        const dv1: DataView = new DataView(dv1B.buffer, dv1B.byteOffset, dv1B.byteLength);
        const dv2: DataView = new DataView(dv2B.buffer, dv2B.byteOffset, dv2B.byteLength);
        const dv3: DataView = new DataView(dv3B.buffer, dv3B.byteOffset, dv3B.byteLength);
        const dv4: DataView = new DataView(dv4B.buffer, dv4B.byteOffset, dv4B.byteLength);

        assert(crypto.timingSafeEqual(dv1, dv2));
        assert(crypto.timingSafeEqual(dv1, dv1B));
        assert(crypto.timingSafeEqual(dv2, dv1B));
        assert(crypto.timingSafeEqual(dv3, dv4));

        assert(!crypto.timingSafeEqual(dv1, dv3));
        assert(!crypto.timingSafeEqual(dv2, dv3));
        assert(!crypto.timingSafeEqual(dv1, dv4));
        // ... I'm not going to write all those tests.
    }

    {
        // crypto_timingsafeequal_uint32array_test
        const ui32_1: Uint32Array = Uint32Array.of(1, 2, 3, 4, 5);
        const ui32_2: Uint32Array = Uint32Array.of(1, 2, 3, 4, 5);
        const ui32_3: Uint32Array = Uint32Array.of(5, 4, 3, 2, 1);

        assert(crypto.timingSafeEqual(ui32_1, ui32_2));
        assert(!crypto.timingSafeEqual(ui32_1, ui32_3));
    }

    {
        // crypto_randomfill_buffer_test
        const buffer: Buffer = new Buffer(10);
        crypto.randomFillSync(buffer);
        crypto.randomFillSync(buffer, 2);
        crypto.randomFillSync(buffer, 2, 3);

        crypto.randomFill(buffer, (err: Error, buf: Buffer) => void {});
        crypto.randomFill(buffer, 2, (err: Error, buf: Buffer) => void {});
        crypto.randomFill(buffer, 2, 3, (err: Error, buf: Buffer) => void {});

        // crypto_randomfill_uint8array_test
        const ui8arr: Uint8Array = new Uint8Array(10);
        crypto.randomFillSync(ui8arr);
        crypto.randomFillSync(ui8arr, 2);
        crypto.randomFillSync(ui8arr, 2, 3);

        crypto.randomFill(ui8arr, (err: Error, buf: Uint8Array) => void {});
        crypto.randomFill(ui8arr, 2, (err: Error, buf: Uint8Array) => void {});
        crypto.randomFill(ui8arr, 2, 3, (err: Error, buf: Uint8Array) => void {});

        // crypto_randomfill_int32array_test
        const i32arr: Int32Array = new Int32Array(10);
        crypto.randomFillSync(i32arr);
        crypto.randomFillSync(i32arr, 2);
        crypto.randomFillSync(i32arr, 2, 3);

        crypto.randomFill(i32arr, (err: Error, buf: Int32Array) => void {});
        crypto.randomFill(i32arr, 2, (err: Error, buf: Int32Array) => void {});
        crypto.randomFill(i32arr, 2, 3, (err: Error, buf: Int32Array) => void {});
    }

    {
        // scrypt
        const pwd: string | Buffer | Int32Array | DataView = Buffer.alloc(16);
        const salt: string | Buffer | Int32Array | DataView = Buffer.alloc(16);
        crypto.scrypt(pwd, salt, 64, (err: Error | null, derivedKey: Buffer): void => {});
        const opts: crypto.ScryptOptions = {
            N: 16384,
            r: 8,
            p: 1,
            maxmem: 32 * 1024 * 1024
        };
        crypto.scrypt(pwd, salt, 64, opts, (err: Error | null, derivedKey: Buffer): void => {});
        crypto.scrypt(pwd, salt, 64, { maxmem: 16 * 1024 * 1024 }, (err: Error | null, derivedKey: Buffer): void => {});
        let buf: Buffer = crypto.scryptSync(pwd, salt, 64);
        buf = crypto.scryptSync(pwd, salt, 64, opts);
        buf = crypto.scryptSync(pwd, salt, 64, { N: 1024 });
    }

    {
        let key: string | Buffer = Buffer.from("buf");
        const curve = "secp256k1";
        let ret: string | Buffer = crypto.ECDH.convertKey(key, curve);
        key = "0xfff";
        ret = crypto.ECDH.convertKey(key, curve);
        ret = crypto.ECDH.convertKey(key, curve, "hex");
        ret = crypto.ECDH.convertKey(key, curve, "hex", "hex");
        ret = crypto.ECDH.convertKey(key, curve, "hex", "hex", "uncompressed");
        ret = crypto.ECDH.convertKey(key, curve, "hex", "hex", "compressed");
        ret = crypto.ECDH.convertKey(key, curve, "hex", "hex", "hybrid");
    }

    {
        const rsaRes: {
            publicKey: Buffer;
            privateKey: string;
        } = crypto.generateKeyPairSync('rsa', {
            modulusLength: 123,
            publicKeyEncoding: {
                format: 'der',
                type: 'pkcs1',
            },
            privateKeyEncoding: {
                ciper: 'some-cipher',
                format: 'pem',
                passphrase: 'secret',
                type: 'pkcs8',
            },
        });

        const dsaRes: {
            publicKey: string;
            privateKey: Buffer;
        } = crypto.generateKeyPairSync('dsa', {
            modulusLength: 123,
            divisorLength: 123,
            publicKeyEncoding: {
                format: 'pem',
                type: 'spki',
            },
            privateKeyEncoding: {
                ciper: 'some-cipher',
                format: 'der',
                passphrase: 'secret',
                type: 'pkcs8',
            },
        });

        const ecRes: {
            publicKey: string;
            privateKey: string;
        } = crypto.generateKeyPairSync('ec', {
            namedCurve: 'curve',
            publicKeyEncoding: {
                format: 'pem',
                type: 'pkcs1',
            },
            privateKeyEncoding: {
                ciper: 'some-cipher',
                format: 'pem',
                passphrase: 'secret',
                type: 'pkcs8',
            },
        });
    }
}

//////////////////////////////////////////////////
/// TLS tests : http://nodejs.org/api/tls.html ///
//////////////////////////////////////////////////

{
    {
        const ctx: tls.SecureContext = tls.createSecureContext({
            key: "NOT REALLY A KEY",
            cert: "SOME CERTIFICATE",
        });
        const blah = ctx.context;

        const connOpts: tls.ConnectionOptions = {
            host: "127.0.0.1",
            port: 55
        };
        const tlsSocket = tls.connect(connOpts);

        const ciphers: string[] = tls.getCiphers();
        const curve: string = tls.DEFAULT_ECDH_CURVE;
    }

    {
        let _server: tls.Server;
        let _boolean: boolean;
        const _func1 = (err: Error, resp: Buffer) => { };
        const _func2 = (err: Error, sessionData: any) => { };
        /**
         * events.EventEmitter
         * 1. tlsClientError
         * 2. newSession
         * 3. OCSPRequest
         * 4. resumeSession
         * 5. secureConnection
         */

        _server = _server.addListener("tlsClientError", (err, tlsSocket) => {
            const _err: Error = err;
            const _tlsSocket: tls.TLSSocket = tlsSocket;
        });
        _server = _server.addListener("newSession", (sessionId, sessionData, callback) => {
            const _sessionId: any = sessionId;
            const _sessionData: any = sessionData;
            const _func1 = callback;
        });
        _server = _server.addListener("OCSPRequest", (certificate, issuer, callback) => {
            const _certificate: Buffer = certificate;
            const _issuer: Buffer = issuer;
            const _callback: Function = callback;
        });
        _server = _server.addListener("resumeSession", (sessionId, callback) => {
            const _sessionId: any = sessionId;
            const _func2 = callback;
        });
        _server = _server.addListener("secureConnection", (tlsSocket) => {
            const _tlsSocket: tls.TLSSocket = tlsSocket;
        });

        const _err: Error = new Error();
        const _tlsSocket: tls.TLSSocket = tls.connect(1);
        const _any: any = 1;
        const _func: Function = () => {};
        const _buffer: Buffer = Buffer.from('a');
        _boolean = _server.emit("tlsClientError", _err, _tlsSocket);
        _boolean = _server.emit("newSession", _any, _any, _func1);
        _boolean = _server.emit("OCSPRequest", _buffer, _buffer, _func);
        _boolean = _server.emit("resumeSession", _any, _func2);
        _boolean = _server.emit("secureConnection", _tlsSocket);

        _server = _server.on("tlsClientError", (err, tlsSocket) => {
            const _err: Error = err;
            const _tlsSocket: tls.TLSSocket = tlsSocket;
        });
        _server = _server.on("newSession", (sessionId, sessionData, callback) => {
            const _sessionId: any = sessionId;
            const _sessionData: any = sessionData;
            const _func1 = callback;
        });
        _server = _server.on("OCSPRequest", (certificate, issuer, callback) => {
            const _certificate: Buffer = certificate;
            const _issuer: Buffer = issuer;
            const _callback: Function = callback;
        });
        _server = _server.on("resumeSession", (sessionId, callback) => {
            const _sessionId: any = sessionId;
            const _func2 = callback;
        });
        _server = _server.on("secureConnection", (tlsSocket) => {
            const _tlsSocket: tls.TLSSocket = tlsSocket;
        });

        _server = _server.once("tlsClientError", (err, tlsSocket) => {
            const _err: Error = err;
            const _tlsSocket: tls.TLSSocket = tlsSocket;
        });
        _server = _server.once("newSession", (sessionId, sessionData, callback) => {
            const _sessionId: any = sessionId;
            const _sessionData: any = sessionData;
            const _func1 = callback;
        });
        _server = _server.once("OCSPRequest", (certificate, issuer, callback) => {
            const _certificate: Buffer = certificate;
            const _issuer: Buffer = issuer;
            const _callback: Function = callback;
        });
        _server = _server.once("resumeSession", (sessionId, callback) => {
            const _sessionId: any = sessionId;
            const _func2 = callback;
        });
        _server = _server.once("secureConnection", (tlsSocket) => {
            const _tlsSocket: tls.TLSSocket = tlsSocket;
        });

        _server = _server.prependListener("tlsClientError", (err, tlsSocket) => {
            const _err: Error = err;
            const _tlsSocket: tls.TLSSocket = tlsSocket;
        });
        _server = _server.prependListener("newSession", (sessionId, sessionData, callback) => {
            const _sessionId: any = sessionId;
            const _sessionData: any = sessionData;
            const _func1 = callback;
        });
        _server = _server.prependListener("OCSPRequest", (certificate, issuer, callback) => {
            const _certificate: Buffer = certificate;
            const _issuer: Buffer = issuer;
            const _callback: Function = callback;
        });
        _server = _server.prependListener("resumeSession", (sessionId, callback) => {
            const _sessionId: any = sessionId;
            const _func2 = callback;
        });
        _server = _server.prependListener("secureConnection", (tlsSocket) => {
            const _tlsSocket: tls.TLSSocket = tlsSocket;
        });

        _server = _server.prependOnceListener("tlsClientError", (err, tlsSocket) => {
            const _err: Error = err;
            const _tlsSocket: tls.TLSSocket = tlsSocket;
        });
        _server = _server.prependOnceListener("newSession", (sessionId, sessionData, callback) => {
            const _sessionId: any = sessionId;
            const _sessionData: any = sessionData;
            const _func1 = callback;
        });
        _server = _server.prependOnceListener("OCSPRequest", (certificate, issuer, callback) => {
            const _certificate: Buffer = certificate;
            const _issuer: Buffer = issuer;
            const _callback: Function = callback;
        });
        _server = _server.prependOnceListener("resumeSession", (sessionId, callback) => {
            const _sessionId: any = sessionId;
            const _func2 = callback;
        });
        _server = _server.prependOnceListener("secureConnection", (tlsSocket) => {
            const _tlsSocket: tls.TLSSocket = tlsSocket;
        });

        // close callback parameter is optional
        _server = _server.close();

        // close callback parameter doesn't specify any arguments, so any
        // function is acceptable
        _server = _server.close(() => { });
        _server = _server.close((...args: any[]) => { });
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
         */

        _TLSSocket = _TLSSocket.addListener("OCSPResponse", (response) => {
            const _response: Buffer = response;
        });
        _TLSSocket = _TLSSocket.addListener("secureConnect", () => { });

        const _buffer: Buffer = Buffer.from("");
        _boolean = _TLSSocket.emit("OCSPResponse", _buffer);
        _boolean = _TLSSocket.emit("secureConnect");

        _TLSSocket = _TLSSocket.on("OCSPResponse", (response) => {
            const _response: Buffer = response;
        });
        _TLSSocket = _TLSSocket.on("secureConnect", () => { });

        _TLSSocket = _TLSSocket.once("OCSPResponse", (response) => {
            const _response: Buffer = response;
        });
        _TLSSocket = _TLSSocket.once("secureConnect", () => { });

        _TLSSocket = _TLSSocket.prependListener("OCSPResponse", (response) => {
            const _response: Buffer = response;
        });
        _TLSSocket = _TLSSocket.prependListener("secureConnect", () => { });

        _TLSSocket = _TLSSocket.prependOnceListener("OCSPResponse", (response) => {
            const _response: Buffer = response;
        });
        _TLSSocket = _TLSSocket.prependOnceListener("secureConnect", () => { });
    }
}

////////////////////////////////////////////////////
/// Http tests : http://nodejs.org/api/http.html ///
////////////////////////////////////////////////////

{
    // http Server
    {
        const server: http.Server = new http.Server();

        // test public props
        const maxHeadersCount: number = server.maxHeadersCount;
        const timeout: number = server.timeout;
        const listening: boolean = server.listening;
        const keepAliveTimeout: number = server.keepAliveTimeout;
        server.setTimeout().setTimeout(1000).setTimeout(() => {}).setTimeout(100, () => {});
    }

    // http IncomingMessage
    // http ServerResponse
    {
        // incoming
        const incoming: http.IncomingMessage = new http.IncomingMessage(new net.Socket());

        incoming.setEncoding('utf8');

        // stream
        incoming.pause();
        incoming.resume();

        // response
        const res: http.ServerResponse = new http.ServerResponse(incoming);

        // test headers
        res.setHeader('Content-Type', 'text/plain');
        const bool: boolean = res.hasHeader('Content-Type');
        const headers: string[] = res.getHeaderNames();

        // trailers
        res.addTrailers([
            ['x-fOo', 'xOxOxOx'],
            ['x-foO', 'OxOxOxO'],
            ['X-fOo', 'xOxOxOx'],
            ['X-foO', 'OxOxOxO']
        ]);
        res.addTrailers({ 'x-foo': 'bar' });

        // writeHead
        res.writeHead(200, 'OK\r\nContent-Type: text/html\r\n');
        res.writeHead(200, { 'Transfer-Encoding': 'chunked' });
        res.writeHead(200);

        // write string
        res.write('Part of my res.');
        // write buffer
        const chunk = Buffer.alloc(16390, 'Й');
        res.write(chunk);
        res.write(chunk, 'hex');

        // end
        res.end("end msg");
        // without msg
        res.end();

        // flush
        res.flushHeaders();
    }

    // http ClientRequest
    {
        let req: http.ClientRequest = new http.ClientRequest("https://www.google.com");
        req = new http.ClientRequest(new url.URL("https://www.google.com"));
        req = new http.ClientRequest({ path: 'http://0.0.0.0' });

        // header
        req.setHeader('Content-Type', 'text/plain');
        const bool: boolean = req.hasHeader('Content-Type');
        const headers: string[] = req.getHeaderNames();
        req.removeHeader('Date');

        // write
        const chunk = Buffer.alloc(16390, 'Й');
        req.write(chunk);
        req.write('a');
        req.end();

        // abort
        req.abort();

        // connection
        req.connection.on('pause', () => { });

        // event
        req.on('data', () => { });
    }

    {
        // Status codes
        let codeMessage: string = http.STATUS_CODES['400'];
        codeMessage = http.STATUS_CODES[400];
    }

    {
        let agent: http.Agent = new http.Agent({
            keepAlive: true,
            keepAliveMsecs: 10000,
            maxSockets: Infinity,
            maxFreeSockets: 256,
            timeout: 15000
        });

        agent = http.globalAgent;

        http.request({ agent: false });
        http.request({ agent });
        http.request({ agent: undefined });
    }

    {
        http.get('http://www.example.com/xyz');
        http.request('http://www.example.com/xyz');

        http.get('http://www.example.com/xyz', (res: http.IncomingMessage): void => {});
        http.request('http://www.example.com/xyz', (res: http.IncomingMessage): void => {});

        http.get(new url.URL('http://www.example.com/xyz'));
        http.request(new url.URL('http://www.example.com/xyz'));

        http.get(new url.URL('http://www.example.com/xyz'), (res: http.IncomingMessage): void => {});
        http.request(new url.URL('http://www.example.com/xyz'), (res: http.IncomingMessage): void => {});

        const opts: http.RequestOptions = {
            path: '"/some/path'
        };
        http.get(new url.URL('http://www.example.com'), opts);
        http.request(new url.URL('http://www.example.com'), opts);
        http.get(new url.URL('http://www.example.com/xyz'), opts, (res: http.IncomingMessage): void => {});
        http.request(new url.URL('http://www.example.com/xyz'), opts, (res: http.IncomingMessage): void => {});
    }

    {
        // Make sure .listen() and .close() return a Server instance
        http.createServer().listen(0).close().address();
        net.createServer().listen(0).close().address();
    }

    {
        const request = http.request({ path: 'http://0.0.0.0' });
        request.once('error', () => { });
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

{
    let agent: https.Agent = new https.Agent({
        keepAlive: true,
        keepAliveMsecs: 10000,
        maxSockets: Infinity,
        maxFreeSockets: 256,
        maxCachedSessions: 100,
        timeout: 15000
    });

    agent = https.globalAgent;

    https.request({
        agent: false
    });
    https.request({
        agent
    });
    https.request({
        agent: undefined
    });

    https.get('http://www.example.com/xyz');
    https.request('http://www.example.com/xyz');

    https.get('http://www.example.com/xyz', (res: http.IncomingMessage): void => {});
    https.request('http://www.example.com/xyz', (res: http.IncomingMessage): void => {});

    https.get(new url.URL('http://www.example.com/xyz'));
    https.request(new url.URL('http://www.example.com/xyz'));

    https.get(new url.URL('http://www.example.com/xyz'), (res: http.IncomingMessage): void => {});
    https.request(new url.URL('http://www.example.com/xyz'), (res: http.IncomingMessage): void => {});

    const opts: https.RequestOptions = {
        path: '/some/path'
    };
    https.get(new url.URL('http://www.example.com'), opts);
    https.request(new url.URL('http://www.example.com'), opts);
    https.get(new url.URL('http://www.example.com/xyz'), opts, (res: http.IncomingMessage): void => {});
    https.request(new url.URL('http://www.example.com/xyz'), opts, (res: http.IncomingMessage): void => {});

    https.globalAgent.options.ca = [];

    {
        const server = new https.Server();

        const timeout: number = server.timeout;
        const listening: boolean = server.listening;
        const keepAliveTimeout: number = server.keepAliveTimeout;
        server.setTimeout().setTimeout(1000).setTimeout(() => {}).setTimeout(100, () => {});
    }
}

////////////////////////////////////////////////////
/// TTY tests : http://nodejs.org/api/tty.html
////////////////////////////////////////////////////

{
    const rs: tty.ReadStream = new tty.ReadStream();
    const ws: tty.WriteStream = new tty.WriteStream();

    const rsIsRaw: boolean = rs.isRaw;
    rs.setRawMode(true);

    const wsColumns: number = ws.columns;
    const wsRows: number = ws.rows;

    const isTTY: boolean = tty.isatty(1);
}

////////////////////////////////////////////////////
/// Dgram tests : http://nodejs.org/api/dgram.html
////////////////////////////////////////////////////

{
    {
        let ds: dgram.Socket = dgram.createSocket("udp4", (msg: Buffer, rinfo: dgram.RemoteInfo): void => {
        });
        ds.bind();
        ds.bind(41234);
        ds.bind(4123, 'localhost');
        ds.bind(4123, 'localhost', () => { });
        ds.bind(4123, () => { });
        ds.bind(() => { });
        const addr: net.AddressInfo | string = ds.address();
        ds.send(new Buffer("hello"), 0, 5, 5000, "127.0.0.1", (error: Error, bytes: number): void => {
        });
        ds.send(new Buffer("hello"), 5000, "127.0.0.1");
        ds.setMulticastInterface("127.0.0.1");
        ds = dgram.createSocket({ type: "udp4", reuseAddr: true, recvBufferSize: 1000, sendBufferSize: 1000, lookup: dns.lookup });
    }

    {
        let _socket: dgram.Socket;
        let _boolean: boolean;
        const _err: Error = new Error();
        const _str = '';
        const _rinfo: net.AddressInfo = {
            address: 'asd',
            family: 'asd',
            port: 1,
        };
        /**
         * events.EventEmitter
         * 1. close
         * 2. error
         * 3. listening
         * 4. message
         */

        _socket = _socket.addListener("close", () => { });
        _socket = _socket.addListener("error", (err) => {
            const _err: Error = err;
        });
        _socket = _socket.addListener("listening", () => { });
        _socket = _socket.addListener("message", (msg, rinfo) => {
            const _msg: Buffer = msg;
            const _rinfo: net.AddressInfo = rinfo;
        });

        _boolean = _socket.emit("close");
        _boolean = _socket.emit("error", _err);
        _boolean = _socket.emit("listening");
        _boolean = _socket.emit("message", _str, _rinfo);

        _socket = _socket.on("close", () => { });
        _socket = _socket.on("error", (err) => {
            const _err: Error = err;
        });
        _socket = _socket.on("listening", () => { });
        _socket = _socket.on("message", (msg, rinfo) => {
            const _msg: Buffer = msg;
            const _rinfo: net.AddressInfo = rinfo;
        });

        _socket = _socket.once("close", () => { });
        _socket = _socket.once("error", (err) => {
            const _err: Error = err;
        });
        _socket = _socket.once("listening", () => { });
        _socket = _socket.once("message", (msg, rinfo) => {
            const _msg: Buffer = msg;
            const _rinfo: net.AddressInfo = rinfo;
        });

        _socket = _socket.prependListener("close", () => { });
        _socket = _socket.prependListener("error", (err) => {
            const _err: Error = err;
        });
        _socket = _socket.prependListener("listening", () => { });
        _socket = _socket.prependListener("message", (msg, rinfo) => {
            const _msg: Buffer = msg;
            const _rinfo: net.AddressInfo = rinfo;
        });

        _socket = _socket.prependOnceListener("close", () => { });
        _socket = _socket.prependOnceListener("error", (err) => {
            const _err: Error = err;
        });
        _socket = _socket.prependOnceListener("listening", () => { });
        _socket = _socket.prependOnceListener("message", (msg, rinfo) => {
            const _msg: Buffer = msg;
            const _rinfo: net.AddressInfo = rinfo;
        });
    }

    {
        const ds: dgram.Socket = dgram.createSocket({
            type: 'udp4',
            recvBufferSize: 10000,
            sendBufferSize: 15000
        });

        let size: number;
        size = ds.getRecvBufferSize();
        ds.setRecvBufferSize(size);
        size = ds.getSendBufferSize();
        ds.setSendBufferSize(size);
    }
}

////////////////////////////////////////////////////
/// Querystring tests : https://nodejs.org/api/querystring.html
////////////////////////////////////////////////////

{
    interface SampleObject { a: string; }

    {
        const obj: SampleObject = { a: "" };
        const sep = '';
        const eq = '';
        const options: querystring.StringifyOptions = {};
        let result: string;

        result = querystring.stringify(obj);
        result = querystring.stringify(obj, sep);
        result = querystring.stringify(obj, sep, eq);
        result = querystring.stringify(obj, sep, eq);
        result = querystring.stringify(obj, sep, eq, options);
    }

    {
        const str = '';
        const sep = '';
        const eq = '';
        const options: querystring.ParseOptions = {};
        let result: querystring.ParsedUrlQuery;

        result = querystring.parse(str);
        result = querystring.parse(str, sep);
        result = querystring.parse(str, sep, eq);
        result = querystring.parse(str, sep, eq, options);
    }

    {
        const str = '';
        let result: string;

        result = querystring.escape(str);
        result = querystring.unescape(str);
    }
}

////////////////////////////////////////////////////
/// path tests : http://nodejs.org/api/path.html
////////////////////////////////////////////////////

{
    path.normalize('/foo/bar//baz/asdf/quux/..');

    path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
    // returns
    // '/foo/bar/baz/asdf'

    try {
        path.join('foo', 'bar');
    } catch (error) { }

    path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile');
    // Is similar to:
    //
    // cd foo/bar
    // cd /tmp/file/
    // cd ..
    //    cd a/../subfile
    // pwd

    path.resolve('/foo/bar', './baz');
    // returns
    //    '/foo/bar/baz'

    path.resolve('/foo/bar', '/tmp/file/');
    // returns
    //    '/tmp/file'

    path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
    // if currently in /home/myself/node, it returns
    //    '/home/myself/node/wwwroot/static_files/gif/image.gif'

    path.isAbsolute('/foo/bar'); // true
    path.isAbsolute('/baz/..');  // true
    path.isAbsolute('qux/');     // false
    path.isAbsolute('.');        // false

    path.isAbsolute('//server');  // true
    path.isAbsolute('C:/foo/..'); // true
    path.isAbsolute('bar\\baz');   // false
    path.isAbsolute('.');         // false

    path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
    // returns
    //    '..\\..\\impl\\bbb'

    path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
    // returns
    //    '../../impl/bbb'

    path.dirname('/foo/bar/baz/asdf/quux');
    // returns
    //    '/foo/bar/baz/asdf'

    path.basename('/foo/bar/baz/asdf/quux.html');
    // returns
    //    'quux.html'

    path.basename('/foo/bar/baz/asdf/quux.html', '.html');
    // returns
    //    'quux'

    path.extname('index.html');
    // returns
    //    '.html'

    path.extname('index.coffee.md');
    // returns
    //    '.md'

    path.extname('index.');
    // returns
    //    '.'

    path.extname('index');
    // returns
    //    ''

    'foo/bar/baz'.split(path.sep);
    // returns
    //        ['foo', 'bar', 'baz']

    'foo\\bar\\baz'.split(path.sep);
    // returns
    //        ['foo', 'bar', 'baz']

    process.env["PATH"]; // $ExpectType string

    path.parse('/home/user/dir/file.txt');
    // returns
    //    {
    //        root : "/",
    //        dir : "/home/user/dir",
    //        base : "file.txt",
    //        ext : ".txt",
    //        name : "file"
    //    }

    path.parse('C:\\path\\dir\\index.html');
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
        root: "/",
        dir: "/home/user/dir",
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

{
    const rl: readline.ReadLine = readline.createInterface(new stream.Readable());

    {
        const options: readline.ReadLineOptions = {
            input: new fs.ReadStream()
        };
        const input: NodeJS.ReadableStream = new stream.Readable();
        const output: NodeJS.WritableStream = new stream.Writable();
        const completer: readline.Completer = str => [['asd'], 'asd'];
        const terminal = false;

        let result: readline.ReadLine;

        result = readline.createInterface(options);
        result = readline.createInterface(input);
        result = readline.createInterface(input, output);
        result = readline.createInterface(input, output, completer);
        result = readline.createInterface(input, output, completer, terminal);
        result = readline.createInterface({
            input,
            completer(str: string): readline.CompleterResult {
                return [['test'], 'test'];
            }
        });
        result = readline.createInterface({
            input,
            completer(str: string, callback: (err: any, result: readline.CompleterResult) => void): any {
                callback(null, [['test'], 'test']);
            }
        });
    }

    {
        rl.setPrompt("prompt");
    }

    {
        rl.prompt();
        rl.prompt(true);
    }

    {
        rl.question("query", (answer: string) => {});
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
        const data: string | Buffer = "asd";
        const key: readline.Key = {};

        rl.write(data);
        rl.write(null, key);
    }

    {
        const strm: NodeJS.WritableStream = new stream.Writable();
        const x = 1;
        const y = 1;

        readline.cursorTo(strm, x);
        readline.cursorTo(strm, x, y);
    }

    {
        const strm: NodeJS.ReadableStream = new stream.Readable();
        const readLineInterface: readline.ReadLine = readline.createInterface(new stream.Readable());

        readline.emitKeypressEvents(strm);
        readline.emitKeypressEvents(strm, readLineInterface);
    }

    {
        const strm: NodeJS.WritableStream = new stream.Writable();
        const dx: number | string = 1;
        const dy: number | string = 1;

        readline.moveCursor(strm, dx, dy);
    }

    {
        const strm: NodeJS.WritableStream = new stream.Writable();
        readline.clearLine(strm, 1);
    }

    {
        const strm: NodeJS.WritableStream = new stream.Writable();

        readline.clearScreenDown(strm);
    }

    {
        let _rl: readline.ReadLine;
        let _boolean: boolean;

        _rl = _rl.addListener("close", () => { });
        _rl = _rl.addListener("line", (input) => {
            const _input: any = input;
        });
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
            const _input: any = input;
        });
        _rl = _rl.on("pause", () => { });
        _rl = _rl.on("resume", () => { });
        _rl = _rl.on("SIGCONT", () => { });
        _rl = _rl.on("SIGINT", () => { });
        _rl = _rl.on("SIGTSTP", () => { });

        _rl = _rl.once("close", () => { });
        _rl = _rl.once("line", (input) => {
            const _input: any = input;
        });
        _rl = _rl.once("pause", () => { });
        _rl = _rl.once("resume", () => { });
        _rl = _rl.once("SIGCONT", () => { });
        _rl = _rl.once("SIGINT", () => { });
        _rl = _rl.once("SIGTSTP", () => { });

        _rl = _rl.prependListener("close", () => { });
        _rl = _rl.prependListener("line", (input) => {
            const _input: any = input;
        });
        _rl = _rl.prependListener("pause", () => { });
        _rl = _rl.prependListener("resume", () => { });
        _rl = _rl.prependListener("SIGCONT", () => { });
        _rl = _rl.prependListener("SIGINT", () => { });
        _rl = _rl.prependListener("SIGTSTP", () => { });

        _rl = _rl.prependOnceListener("close", () => { });
        _rl = _rl.prependOnceListener("line", (input) => {
            const _input: any = input;
        });
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

{
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

{
    {
        childProcess.exec("echo test");
        childProcess.exec("echo test", { windowsHide: true });
        childProcess.spawn("echo", ["test"], { windowsHide: true });
        childProcess.spawn("echo", ["test"], { windowsHide: true, argv0: "echo-test" });
        childProcess.spawn("echo", ["test"], { stdio: [0xdeadbeef, "inherit", undefined, "pipe"] });
        childProcess.spawnSync("echo test");
        childProcess.spawnSync("echo test", {windowsVerbatimArguments: false});
        childProcess.spawnSync("echo test", {windowsVerbatimArguments: false, argv0: "echo-test"});
        childProcess.spawnSync("echo test", {input: new Uint8Array([])});
        childProcess.spawnSync("echo test", {input: new DataView(new ArrayBuffer(1))});
    }

    {
        childProcess.execFile("npm", () => {});
        childProcess.execFile("npm", { windowsHide: true }, () => {});
        childProcess.execFile("npm", ["-v"], () => {});
        childProcess.execFile("npm", ["-v"], { windowsHide: true, encoding: 'utf-8' }, (stdout, stderr) => { assert(stdout instanceof String); });
        childProcess.execFile("npm", ["-v"], { windowsHide: true, encoding: 'buffer' }, (stdout, stderr) => { assert(stdout instanceof Buffer); });
        childProcess.execFile("npm", { encoding: 'utf-8' }, (stdout, stderr) => { assert(stdout instanceof String); });
        childProcess.execFile("npm", { encoding: 'buffer' }, (stdout, stderr) => { assert(stdout instanceof Buffer); });
    }

    {
        childProcess.execFileSync("echo test", {input: new Uint8Array([])});
        childProcess.execFileSync("echo test", {input: new DataView(new ArrayBuffer(1))});
    }

    async function testPromisify() {
        const execFile = util.promisify(childProcess.execFile);
        let r: { stdout: string | Buffer, stderr: string | Buffer } = await execFile("npm");
        r = await execFile("npm", ["-v"]);
        r = await execFile("npm", ["-v"], { encoding: 'utf-8' });
        r = await execFile("npm", ["-v"], { encoding: 'buffer' });
        r = await execFile("npm", { encoding: 'utf-8' });
        r = await execFile("npm", { encoding: 'buffer' });
    }

    {
        let _cp: childProcess.ChildProcess;
        const _socket: net.Socket = net.createConnection(1);
        const _server: net.Server = net.createServer();
        let _boolean: boolean;

        _boolean = _cp.send(1);
        _boolean = _cp.send('one');
        _boolean = _cp.send({
            type: 'test'
        });

        _boolean = _cp.send(1, (error) => {
            const _err: Error = error;
        });
        _boolean = _cp.send('one', (error) => {
            const _err: Error = error;
        });
        _boolean = _cp.send({
            type: 'test'
        }, (error) => {
            const _err: Error = error;
        });

        _boolean = _cp.send(1, _socket);
        _boolean = _cp.send('one', _socket);
        _boolean = _cp.send({
            type: 'test'
        }, _socket);

        _boolean = _cp.send(1, _socket, (error) => {
            const _err: Error = error;
        });
        _boolean = _cp.send('one', _socket, (error) => {
            const _err: Error = error;
        });
        _boolean = _cp.send({
            type: 'test'
        }, _socket, (error) => {
            const _err: Error = error;
        });

        _boolean = _cp.send(1, _socket, {
            keepOpen: true
        });
        _boolean = _cp.send('one', _socket, {
            keepOpen: true
        });
        _boolean = _cp.send({
            type: 'test'
        }, _socket, {
                keepOpen: true
            });

        _boolean = _cp.send(1, _socket, {
            keepOpen: true
        }, (error) => {
            const _err: Error = error;
        });
        _boolean = _cp.send('one', _socket, {
            keepOpen: true
        }, (error) => {
            const _err: Error = error;
        });
        _boolean = _cp.send({
            type: 'test'
        }, _socket, {
                keepOpen: true
            }, (error) => {
                const _err: Error = error;
            });

        _boolean = _cp.send(1, _server);
        _boolean = _cp.send('one', _server);
        _boolean = _cp.send({
            type: 'test'
        }, _server);

        _boolean = _cp.send(1, _server, (error) => {
            const _err: Error = error;
        });
        _boolean = _cp.send('one', _server, (error) => {
            const _err: Error = error;
        });
        _boolean = _cp.send({
            type: 'test'
        }, _server, (error) => {
            const _err: Error = error;
        });

        _boolean = _cp.send(1, _server, {
            keepOpen: true
        });
        _boolean = _cp.send('one', _server, {
            keepOpen: true
        });
        _boolean = _cp.send({
            type: 'test'
        }, _server, {
                keepOpen: true
            });

        _boolean = _cp.send(1, _server, {
            keepOpen: true
        }, (error) => {
            const _err: Error = error;
        });
        _boolean = _cp.send('one', _server, {
            keepOpen: true
        }, (error) => {
            const _err: Error = error;
        });
        _boolean = _cp.send({
            type: 'test'
        }, _server, {
                keepOpen: true
            }, (error) => {
                const _err: Error = error;
            });

        _cp = _cp.addListener("close", (code, signal) => {
            const _code: number = code;
            const _signal: string = signal;
        });
        _cp = _cp.addListener("disconnect", () => { });
        _cp = _cp.addListener("error", (err) => {
            const _err: Error = err;
        });
        _cp = _cp.addListener("exit", (code, signal) => {
            const _code: number = code;
            const _signal: string = signal;
        });
        _cp = _cp.addListener("message", (message, sendHandle) => {
            const _message: any = message;
            const _sendHandle: net.Socket | net.Server = sendHandle;
        });

        _boolean = _cp.emit("close", () => { });
        _boolean = _cp.emit("disconnect", () => { });
        _boolean = _cp.emit("error", () => { });
        _boolean = _cp.emit("exit", () => { });
        _boolean = _cp.emit("message", () => { });

        _cp = _cp.on("close", (code, signal) => {
            const _code: number = code;
            const _signal: string = signal;
        });
        _cp = _cp.on("disconnect", () => { });
        _cp = _cp.on("error", (err) => {
            const _err: Error = err;
        });
        _cp = _cp.on("exit", (code, signal) => {
            const _code: number = code;
            const _signal: string = signal;
        });
        _cp = _cp.on("message", (message, sendHandle) => {
            const _message: any = message;
            const _sendHandle: net.Socket | net.Server = sendHandle;
        });

        _cp = _cp.once("close", (code, signal) => {
            const _code: number = code;
            const _signal: string = signal;
        });
        _cp = _cp.once("disconnect", () => { });
        _cp = _cp.once("error", (err) => {
            const _err: Error = err;
        });
        _cp = _cp.once("exit", (code, signal) => {
            const _code: number = code;
            const _signal: string = signal;
        });
        _cp = _cp.once("message", (message, sendHandle) => {
            const _message: any = message;
            const _sendHandle: net.Socket | net.Server = sendHandle;
        });

        _cp = _cp.prependListener("close", (code, signal) => {
            const _code: number = code;
            const _signal: string = signal;
        });
        _cp = _cp.prependListener("disconnect", () => { });
        _cp = _cp.prependListener("error", (err) => {
            const _err: Error = err;
        });
        _cp = _cp.prependListener("exit", (code, signal) => {
            const _code: number = code;
            const _signal: string = signal;
        });
        _cp = _cp.prependListener("message", (message, sendHandle) => {
            const _message: any = message;
            const _sendHandle: net.Socket | net.Server = sendHandle;
        });

        _cp = _cp.prependOnceListener("close", (code, signal) => {
            const _code: number = code;
            const _signal: string = signal;
        });
        _cp = _cp.prependOnceListener("disconnect", () => { });
        _cp = _cp.prependOnceListener("error", (err) => {
            const _err: Error = err;
        });
        _cp = _cp.prependOnceListener("exit", (code, signal) => {
            const _code: number = code;
            const _signal: string = signal;
        });
        _cp = _cp.prependOnceListener("message", (message, sendHandle) => {
            const _message: any = message;
            const _sendHandle: net.Socket | net.Server = sendHandle;
        });
    }
    {
        process.stdin.setEncoding('utf8');

        process.stdin.on('readable', () => {
            const chunk = process.stdin.read();
            if (chunk !== null) {
              process.stdout.write(`data: ${chunk}`);
            }
        });

        process.stdin.on('end', () => {
            process.stdout.write('end');
        });

        process.stdin.pipe(process.stdout);

        console.log(process.stdin.isTTY);
        console.log(process.stdout.isTTY);

        console.log(process.stdin instanceof net.Socket);
        console.log(process.stdout instanceof fs.ReadStream);

        const stdin: stream.Readable = process.stdin;
        console.log(stdin instanceof net.Socket);
        console.log(stdin instanceof fs.ReadStream);

        const stdout: stream.Writable = process.stdout;
        console.log(stdout instanceof net.Socket);
        console.log(stdout instanceof fs.WriteStream);
    }
}

//////////////////////////////////////////////////////////////////////
/// cluster tests: https://nodejs.org/api/cluster.html ///
//////////////////////////////////////////////////////////////////////

{
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

{
    {
        let result: string;

        result = os.tmpdir();
        result = os.homedir();
        result = os.endianness();
        result = os.hostname();
        result = os.type();
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

    {
        const prio = os.getPriority();
        os.setPriority(prio + 1);

        const prio2 = os.getPriority(1);
        os.setPriority(2, prio + 1);

        os.setPriority(os.constants.priority.PRIORITY_LOW);
    }
}

////////////////////////////////////////////////////
/// vm tests : https://nodejs.org/api/vm.html
////////////////////////////////////////////////////

{
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

        const localVar = 'initial value';
        vm.runInThisContext('localVar = "vm";');

        console.log(localVar);
    }

    {
        vm.runInThisContext('console.log("hello world"', './my-file.js');
    }

    {
        const fn: Function = vm.compileFunction('console.log("test")', [], {
            parsingContext: vm.createContext(),
            contextExtensions: [{
                a: 1,
            }],
            produceCachedData: false,
            cachedData: Buffer.from('nope'),
        });
    }
}

/////////////////////////////////////////////////////
/// Timers tests : https://nodejs.org/api/timers.html
/////////////////////////////////////////////////////

{
    {
        const immediateId = timers.setImmediate(() => { console.log("immediate"); });
        timers.clearImmediate(immediateId);
    }
    {
        const counter = 0;
        const timeout = timers.setInterval(() => { console.log("interval"); }, 20);
        timeout.unref();
        timeout.ref();
        timers.clearInterval(timeout);
    }
    {
        const counter = 0;
        const timeout = timers.setTimeout(() => { console.log("timeout"); }, 20);
        timeout.unref();
        timeout.ref();
        timers.clearTimeout(timeout);
    }
    async function testPromisify() {
        const setTimeout = util.promisify(timers.setTimeout);
        let v: void = await setTimeout(100); // tslint:disable-line no-void-expression void-return
        let s: string = await setTimeout(100, "");

        const setImmediate = util.promisify(timers.setImmediate);
        v = await setImmediate(); // tslint:disable-line no-void-expression
        s = await setImmediate("");
    }
}

/////////////////////////////////////////////////////////
/// Errors Tests : https://nodejs.org/api/errors.html ///
/////////////////////////////////////////////////////////

{
    {
        Error.stackTraceLimit = Infinity;
    }
    {
        const myObject = {};
        Error.captureStackTrace(myObject);
    }
    {
        const frames: NodeJS.CallSite[] = [];
        Error.prepareStackTrace(new Error(), frames);
    }
    {
        const frame: NodeJS.CallSite = null;
        const frameThis: any = frame.getThis();
        const typeName: string = frame.getTypeName();
        const func: Function = frame.getFunction();
        const funcName: string = frame.getFunctionName();
        const meth: string = frame.getMethodName();
        const fname: string = frame.getFileName();
        const lineno: number = frame.getLineNumber();
        const colno: number = frame.getColumnNumber();
        const evalOrigin: string = frame.getEvalOrigin();
        const isTop: boolean = frame.isToplevel();
        const isEval: boolean = frame.isEval();
        const isNative: boolean = frame.isNative();
        const isConstr: boolean = frame.isConstructor();
    }
}

///////////////////////////////////////////////////////////
/// Process Tests : https://nodejs.org/api/process.html ///
///////////////////////////////////////////////////////////

import * as p from "process";
{
    {
        let eventEmitter: events.EventEmitter;
        eventEmitter = process;                // Test that process implements EventEmitter...

        let _p: NodeJS.Process = process;
        _p = p;
    }
    {
        assert(process.argv[0] === process.argv0);
    }
    {
        let module: NodeModule | undefined;
        module = process.mainModule;
    }
    {
        process.on("message", (req: any) => { });
        process.addListener("beforeExit", (code: number) => { });
        process.once("disconnect", () => { });
        process.prependListener("exit", (code: number) => { });
        process.prependOnceListener("rejectionHandled", (promise: Promise<any>) => { });
        process.on("uncaughtException", (error: Error) => { });
        process.addListener("unhandledRejection", (reason: any, promise: Promise<any>) => { });
        process.once("warning", (warning: Error) => { });
        process.prependListener("message", (message: any, sendHandle: any) => { });
        process.prependOnceListener("SIGBREAK", () => { });
        process.on("newListener", (event: string | symbol, listener: Function) => { });
        process.once("removeListener", (event: string | symbol, listener: Function) => { });
        process.on("multipleResolves", (type: NodeJS.MultipleResolveType, prom: Promise<any>, value: any) => {});

        const listeners = process.listeners('uncaughtException');
        const oldHandler = listeners[listeners.length - 1];
        process.addListener('uncaughtException', oldHandler);
    }
    {
        function myCb(err: Error): void {
        }
        process.setUncaughtExceptionCaptureCallback(myCb);
        process.setUncaughtExceptionCaptureCallback(null);
        const b: boolean = process.hasUncaughtExceptionCaptureCallback();
    }
    {
        // process.allowedNodeEnvironmentFlags.has('asdf');
    }
}

///////////////////////////////////////////////////////////
/// Console Tests : https://nodejs.org/api/console.html ///
///////////////////////////////////////////////////////////

{
    {
        let _c: Console = console;
        _c = console2;
    }
    {
        const writeStream = fs.createWriteStream('./index.d.ts');
        const consoleInstance = new console.Console(writeStream);
    }
}

///////////////////////////////////////////////////
/// Net Tests : https://nodejs.org/api/net.html ///
///////////////////////////////////////////////////

{
    {
        const connectOpts: net.NetConnectOpts = {
            allowHalfOpen: true,
            family: 4,
            host: "localhost",
            port: 443,
            timeout: 10E3
        };
        const socket: net.Socket = net.createConnection(connectOpts, (): void => {
            // nothing
        });
    }

    {
        let server = net.createServer();
        // Check methods which return server instances by chaining calls
        server = server.listen(0)
            .close()
            .ref()
            .unref();

        // close has an optional callback function. No callback parameters are
        // specified, so any callback function is permissible.
        server = server.close((...args: any[]) => { });

        // test the types of the address object fields
        const address: net.AddressInfo | string = server.address();
    }

    {
        const constructorOpts: net.SocketConstructorOpts = {
            fd: 1,
            allowHalfOpen: false,
            readable: false,
            writable: false
        };

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
        let _socket: net.Socket = new net.Socket(constructorOpts);

        let bool: boolean;
        let buffer: Buffer;
        let error: Error;
        let str: string;
        let num: number;

        const ipcConnectOpts: net.IpcSocketConnectOpts = {
            path: "/"
        };
        const tcpConnectOpts: net.TcpSocketConnectOpts = {
            family: 4,
            hints: 0,
            host: "localhost",
            localAddress: "10.0.0.1",
            localPort: 1234,
            lookup: (_hostname: string, _options: dns.LookupOneOptions, _callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void): void => {
                // nothing
            },
            port: 80
        };
        _socket = _socket.connect(ipcConnectOpts);
        _socket = _socket.connect(ipcConnectOpts, (): void => {});
        _socket = _socket.connect(tcpConnectOpts);
        _socket = _socket.connect(tcpConnectOpts, (): void => {});
        _socket = _socket.connect(80, "localhost");
        _socket = _socket.connect(80, "localhost", (): void => {});
        _socket = _socket.connect(80);
        _socket = _socket.connect(80, (): void => {});

        /// addListener

        _socket = _socket.addListener("close", had_error => {
            bool = had_error;
        });
        _socket = _socket.addListener("connect", () => { });
        _socket = _socket.addListener("data", data => {
            buffer = data;
        });
        _socket = _socket.addListener("drain", () => { });
        _socket = _socket.addListener("end", () => { });
        _socket = _socket.addListener("error", err => {
            error = err;
        });
        _socket = _socket.addListener("lookup", (err, address, family, host) => {
            error = err;

            if (typeof family === 'string') {
                str = family;
            } else if (typeof family === 'number') {
                num = family;
            }

            str = host;
        });
        _socket = _socket.addListener("timeout", () => { });

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
        });
        _socket = _socket.on("connect", () => { });
        _socket = _socket.on("data", data => {
            buffer = data;
        });
        _socket = _socket.on("drain", () => { });
        _socket = _socket.on("end", () => { });
        _socket = _socket.on("error", err => {
            error = err;
        });
        _socket = _socket.on("lookup", (err, address, family, host) => {
            error = err;

            if (typeof family === 'string') {
                str = family;
            } else if (typeof family === 'number') {
                num = family;
            }

            str = host;
        });
        _socket = _socket.on("timeout", () => { });

        /// once
        _socket = _socket.once("close", had_error => {
            bool = had_error;
        });
        _socket = _socket.once("connect", () => { });
        _socket = _socket.once("data", data => {
            buffer = data;
        });
        _socket = _socket.once("drain", () => { });
        _socket = _socket.once("end", () => { });
        _socket = _socket.once("error", err => {
            error = err;
        });
        _socket = _socket.once("lookup", (err, address, family, host) => {
            error = err;

            if (typeof family === 'string') {
                str = family;
            } else if (typeof family === 'number') {
                num = family;
            }

            str = host;
        });
        _socket = _socket.once("timeout", () => { });

        /// prependListener
        _socket = _socket.prependListener("close", had_error => {
            bool = had_error;
        });
        _socket = _socket.prependListener("connect", () => { });
        _socket = _socket.prependListener("data", data => {
            buffer = data;
        });
        _socket = _socket.prependListener("drain", () => { });
        _socket = _socket.prependListener("end", () => { });
        _socket = _socket.prependListener("error", err => {
            error = err;
        });
        _socket = _socket.prependListener("lookup", (err, address, family, host) => {
            error = err;

            if (typeof family === 'string') {
                str = family;
            } else if (typeof family === 'number') {
                num = family;
            }

            str = host;
        });
        _socket = _socket.prependListener("timeout", () => { });

        /// prependOnceListener
        _socket = _socket.prependOnceListener("close", had_error => {
            bool = had_error;
        });
        _socket = _socket.prependOnceListener("connect", () => { });
        _socket = _socket.prependOnceListener("data", data => {
            buffer = data;
        });
        _socket = _socket.prependOnceListener("drain", () => { });
        _socket = _socket.prependOnceListener("end", () => { });
        _socket = _socket.prependOnceListener("error", err => {
            error = err;
        });
        _socket = _socket.prependOnceListener("lookup", (err, address, family, host) => {
            error = err;

            if (typeof family === 'string') {
                str = family;
            } else if (typeof family === 'number') {
                num = family;
            }

            str = host;
        });
        _socket = _socket.prependOnceListener("timeout", () => { });

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
        _server = _server.addListener("close", () => { });
        _server = _server.addListener("connection", socket => {
            _socket = socket;
        });
        _server = _server.addListener("error", err => {
            error = err;
        });
        _server = _server.addListener("listening", () => { });

        /// emit
        bool = _server.emit("close");
        bool = _server.emit("connection", _socket);
        bool = _server.emit("error", error);
        bool = _server.emit("listening");

        /// once
        _server = _server.once("close", () => { });
        _server = _server.once("connection", socket => {
            _socket = socket;
        });
        _server = _server.once("error", err => {
            error = err;
        });
        _server = _server.once("listening", () => { });

        /// prependListener
        _server = _server.prependListener("close", () => { });
        _server = _server.prependListener("connection", socket => {
            _socket = socket;
        });
        _server = _server.prependListener("error", err => {
            error = err;
        });
        _server = _server.prependListener("listening", () => { });

        /// prependOnceListener
        _server = _server.prependOnceListener("close", () => { });
        _server = _server.prependOnceListener("connection", socket => {
            _socket = socket;
        });
        _server = _server.prependOnceListener("error", err => {
            error = err;
        });
        _server = _server.prependOnceListener("listening", () => { });
    }
}

/////////////////////////////////////////////////////
/// repl Tests : https://nodejs.org/api/repl.html ///
/////////////////////////////////////////////////////

{
    {
        let _server: repl.REPLServer;
        let _boolean: boolean;
        const _ctx: any = 1;

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

        _server.outputStream.write("test");
        const line = _server.inputStream.read();

        function test() {
            throw new repl.Recoverable(new Error("test"));
        }
    }
}

///////////////////////////////////////////////////
/// DNS Tests : https://nodejs.org/api/dns.html ///
///////////////////////////////////////////////////

{
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
    dns.lookup("nodejs.org", { all: true }, (err, addresses) => {
        const _err: NodeJS.ErrnoException = err;
        const _address: dns.LookupAddress[] = addresses;
    });
    dns.lookup("nodejs.org", { all: true, verbatim: true }, (err, addresses) => {
        const _err: NodeJS.ErrnoException = err;
        const _address: dns.LookupAddress[] = addresses;
    });

    function trueOrFalse(): boolean {
        return Math.random() > 0.5 ? true : false;
    }
    dns.lookup("nodejs.org", { all: trueOrFalse() }, (err, addresses, family) => {
        const _err: NodeJS.ErrnoException = err;
        const _addresses: string | dns.LookupAddress[] = addresses;
        const _family: number | undefined = family;
    });

    dns.lookupService("127.0.0.1", 0, (err, hostname, service) => {
        const _err: NodeJS.ErrnoException = err;
        const _hostname: string = hostname;
        const _service: string = service;
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
    dns.resolve("nodejs.org", "ANY", (err, addresses) => {
        const _addresses: dns.AnyRecord[] = addresses;
    });
    dns.resolve("nodejs.org", "MX", (err, addresses) => {
        const _addresses: dns.MxRecord[] = addresses;
    });

    dns.resolve4("nodejs.org", (err, addresses) => {
        const _addresses: string[] = addresses;
    });
    dns.resolve4("nodejs.org", { ttl: true }, (err, addresses) => {
        const _addresses: dns.RecordWithTtl[] = addresses;
    });
    {
        const ttl = false;
        dns.resolve4("nodejs.org", { ttl }, (err, addresses) => {
            const _addresses: string[] | dns.RecordWithTtl[] = addresses;
        });
    }

    dns.resolve6("nodejs.org", (err, addresses) => {
        const _addresses: string[] = addresses;
    });
    dns.resolve6("nodejs.org", { ttl: true }, (err, addresses) => {
        const _addresses: dns.RecordWithTtl[] = addresses;
    });
    {
        const ttl = false;
        dns.resolve6("nodejs.org", { ttl }, (err, addresses) => {
            const _addresses: string[] | dns.RecordWithTtl[] = addresses;
        });
    }
    {
        const resolver = new dns.Resolver();
        resolver.setServers(["4.4.4.4"]);
        resolver.resolve("nodejs.org", (err, addresses) => {
            const _addresses: string[] = addresses;
        });
        resolver.cancel();
    }
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
{
    let str: string;
    let num: number;
    num = constants.SIGHUP;
    num = constants.SIGINT;
    num = constants.SIGQUIT;
    num = constants.SIGILL;
    num = constants.SIGTRAP;
    num = constants.SIGABRT;
    num = constants.SIGIOT;
    num = constants.SIGBUS;
    num = constants.SIGFPE;
    num = constants.SIGKILL;
    num = constants.SIGUSR1;
    num = constants.SIGSEGV;
    num = constants.SIGUSR2;
    num = constants.SIGPIPE;
    num = constants.SIGALRM;
    num = constants.SIGTERM;
    num = constants.SIGCHLD;
    num = constants.SIGSTKFLT;
    num = constants.SIGCONT;
    num = constants.SIGSTOP;
    num = constants.SIGTSTP;
    num = constants.SIGTTIN;
    num = constants.SIGTTOU;
    num = constants.SIGURG;
    num = constants.SIGXCPU;
    num = constants.SIGXFSZ;
    num = constants.SIGVTALRM;
    num = constants.SIGPROF;
    num = constants.SIGWINCH;
    num = constants.SIGIO;
    num = constants.SIGPOLL;
    num = constants.SIGPWR;
    num = constants.SIGSYS;
    num = constants.SIGUNUSED;
    num = constants.O_RDONLY;
    num = constants.O_WRONLY;
    num = constants.O_RDWR;
    num = constants.S_IFMT;
    num = constants.S_IFREG;
    num = constants.S_IFDIR;
    num = constants.S_IFCHR;
    num = constants.S_IFBLK;
    num = constants.S_IFIFO;
    num = constants.S_IFLNK;
    num = constants.S_IFSOCK;
    num = constants.O_CREAT;
    num = constants.O_EXCL;
    num = constants.O_NOCTTY;
    num = constants.O_TRUNC;
    num = constants.O_APPEND;
    num = constants.O_DIRECTORY;
    num = constants.O_NOATIME;
    num = constants.O_NOFOLLOW;
    num = constants.O_SYNC;
    num = constants.O_DSYNC;
    num = constants.O_DIRECT;
    num = constants.O_NONBLOCK;
    num = constants.S_IRWXU;
    num = constants.S_IRUSR;
    num = constants.S_IWUSR;
    num = constants.S_IXUSR;
    num = constants.S_IRWXG;
    num = constants.S_IRGRP;
    num = constants.S_IWGRP;
    num = constants.S_IXGRP;
    num = constants.S_IRWXO;
    num = constants.S_IROTH;
    num = constants.S_IWOTH;
    num = constants.S_IXOTH;
    num = constants.F_OK;
    num = constants.R_OK;
    num = constants.W_OK;
    num = constants.X_OK;
    num = constants.SSL_OP_ALL;
    num = constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION;
    num = constants.SSL_OP_CIPHER_SERVER_PREFERENCE;
    num = constants.SSL_OP_CISCO_ANYCONNECT;
    num = constants.SSL_OP_COOKIE_EXCHANGE;
    num = constants.SSL_OP_CRYPTOPRO_TLSEXT_BUG;
    num = constants.SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS;
    num = constants.SSL_OP_EPHEMERAL_RSA;
    num = constants.SSL_OP_LEGACY_SERVER_CONNECT;
    num = constants.SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER;
    num = constants.SSL_OP_MICROSOFT_SESS_ID_BUG;
    num = constants.SSL_OP_MSIE_SSLV2_RSA_PADDING;
    num = constants.SSL_OP_NETSCAPE_CA_DN_BUG;
    num = constants.SSL_OP_NETSCAPE_CHALLENGE_BUG;
    num = constants.SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG;
    num = constants.SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG;
    num = constants.SSL_OP_NO_COMPRESSION;
    num = constants.SSL_OP_NO_QUERY_MTU;
    num = constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION;
    num = constants.SSL_OP_NO_SSLv2;
    num = constants.SSL_OP_NO_SSLv3;
    num = constants.SSL_OP_NO_TICKET;
    num = constants.SSL_OP_NO_TLSv1;
    num = constants.SSL_OP_NO_TLSv1_1;
    num = constants.SSL_OP_NO_TLSv1_2;
    num = constants.SSL_OP_PKCS1_CHECK_1;
    num = constants.SSL_OP_PKCS1_CHECK_2;
    num = constants.SSL_OP_SINGLE_DH_USE;
    num = constants.SSL_OP_SINGLE_ECDH_USE;
    num = constants.SSL_OP_SSLEAY_080_CLIENT_DH_BUG;
    num = constants.SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG;
    num = constants.SSL_OP_TLS_BLOCK_PADDING_BUG;
    num = constants.SSL_OP_TLS_D5_BUG;
    num = constants.SSL_OP_TLS_ROLLBACK_BUG;
    num = constants.ENGINE_METHOD_RSA;
    num = constants.ENGINE_METHOD_DSA;
    num = constants.ENGINE_METHOD_DH;
    num = constants.ENGINE_METHOD_RAND;
    num = constants.ENGINE_METHOD_ECDH;
    num = constants.ENGINE_METHOD_ECDSA;
    num = constants.ENGINE_METHOD_CIPHERS;
    num = constants.ENGINE_METHOD_DIGESTS;
    num = constants.ENGINE_METHOD_STORE;
    num = constants.ENGINE_METHOD_PKEY_METHS;
    num = constants.ENGINE_METHOD_PKEY_ASN1_METHS;
    num = constants.ENGINE_METHOD_ALL;
    num = constants.ENGINE_METHOD_NONE;
    num = constants.DH_CHECK_P_NOT_SAFE_PRIME;
    num = constants.DH_CHECK_P_NOT_PRIME;
    num = constants.DH_UNABLE_TO_CHECK_GENERATOR;
    num = constants.DH_NOT_SUITABLE_GENERATOR;
    num = constants.NPN_ENABLED;
    num = constants.ALPN_ENABLED;
    num = constants.RSA_PKCS1_PADDING;
    num = constants.RSA_SSLV23_PADDING;
    num = constants.RSA_NO_PADDING;
    num = constants.RSA_PKCS1_OAEP_PADDING;
    num = constants.RSA_X931_PADDING;
    num = constants.RSA_PKCS1_PSS_PADDING;
    num = constants.POINT_CONVERSION_COMPRESSED;
    num = constants.POINT_CONVERSION_UNCOMPRESSED;
    num = constants.POINT_CONVERSION_HYBRID;
    str = constants.defaultCoreCipherList;
    str = constants.defaultCipherList;
}

////////////////////////////////////////////////////
/// v8 tests : https://nodejs.org/api/v8.html
////////////////////////////////////////////////////

{
    const heapStats = v8.getHeapStatistics();
    const heapSpaceStats = v8.getHeapSpaceStatistics();

    const zapsGarbage: number = heapStats.does_zap_garbage;

    v8.setFlagsFromString('--collect_maps');
}

////////////////////////////////////////////////////
/// PerfHooks tests : https://nodejs.org/api/perf_hooks.html
////////////////////////////////////////////////////
{
    perf_hooks.performance.mark('start');
    (
        () => {}
    )();
    perf_hooks.performance.mark('end');

    const { duration } = perf_hooks.performance.getEntriesByName('discover')[0];
    const timeOrigin = perf_hooks.performance.timeOrigin;

    const performanceObserverCallback: perf_hooks.PerformanceObserverCallback = (list, obs) => {
        const {
            duration,
            entryType,
            name,
            startTime,
        } = list.getEntries()[0];
        obs.disconnect();
        perf_hooks.performance.clearFunctions();
    };
    const obs = new perf_hooks.PerformanceObserver(performanceObserverCallback);
    obs.observe({
        entryTypes: ['function'],
        buffered: true,
    });
}

////////////////////////////////////////////////////
/// AsyncHooks tests : https://nodejs.org/api/async_hooks.html
////////////////////////////////////////////////////
{
    const hooks: async_hooks.HookCallbacks = {
        init() {},
        before() {},
        after() {},
        destroy() {},
        promiseResolve() {},
    };

    const asyncHook = async_hooks.createHook(hooks);

    asyncHook.enable().disable().enable();

    const tId: number = async_hooks.triggerAsyncId();
    const eId: number = async_hooks.executionAsyncId();

    class TestResource extends async_hooks.AsyncResource {
        constructor() {
            super('TEST_RESOURCE');
        }
    }

    class AnotherTestResource extends async_hooks.AsyncResource {
        constructor() {
            super('TEST_RESOURCE', 42);
            const aId: number = this.asyncId();
            const tId: number = this.triggerAsyncId();
        }
        run() {
            this.runInAsyncScope(() => {});
            this.runInAsyncScope(Array.prototype.find, [], () => true);
        }
        destroy() {
            this.emitDestroy();
        }
    }

    // check AsyncResource constructor options.
    new async_hooks.AsyncResource('');
    new async_hooks.AsyncResource('', 0);
    new async_hooks.AsyncResource('', {});
    new async_hooks.AsyncResource('', { triggerAsyncId: 0 });
    new async_hooks.AsyncResource('', {
      triggerAsyncId: 0,
      requireManualDestroy: true
    });
}

////////////////////////////////////////////////////
/// zlib tests : http://nodejs.org/api/zlib.html ///
////////////////////////////////////////////////////

{
    {
        const gzipped = zlib.gzipSync('test');
        const unzipped = zlib.gunzipSync(gzipped.toString());
    }

    {
        const deflate = zlib.deflateSync('test');
        const inflate = zlib.inflateSync(deflate.toString());
    }
}

///////////////////////////////////////////////////////////
/// HTTP/2 Tests                                        ///
///////////////////////////////////////////////////////////

{
    // Headers & Settings
    {
        const headers: http2.OutgoingHttpHeaders = {
            ':status': 200,
            'content-type': 'text-plain',
            ABC: ['has', 'more', 'than', 'one', 'value'],
            undef: undefined
        };

        const settings: http2.Settings = {
            headerTableSize: 0,
            enablePush: true,
            initialWindowSize: 0,
            maxFrameSize: 0,
            maxConcurrentStreams: 0,
            maxHeaderListSize: 0
        };
    }

    // Http2Session
    {
        const http2Session: http2.Http2Session = {} as any;
        const ee: events.EventEmitter = http2Session;

        http2Session.on('close', () => {});
        http2Session.on('connect', (session: http2.Http2Session, socket: net.Socket) => {});
        http2Session.on('error', (err: Error) => {});
        http2Session.on('frameError', (frameType: number, errorCode: number, streamID: number) => {});
        http2Session.on('goaway', (errorCode: number, lastStreamID: number, opaqueData: Buffer) => {});
        http2Session.on('localSettings', (settings: http2.Settings) => {});
        http2Session.on('remoteSettings', (settings: http2.Settings) => {});
        http2Session.on('stream', (stream: http2.Http2Stream, headers: http2.IncomingHttpHeaders, flags: number) => {});
        http2Session.on('timeout', () => {});
        http2Session.on('ping', () => {});

        http2Session.destroy();

        const alpnProtocol: string = http2Session.alpnProtocol;
        const destroyed: boolean = http2Session.destroyed;
        const encrypted: boolean = http2Session.encrypted;
        const originSet: string[] = http2Session.originSet;
        const pendingSettingsAck: boolean = http2Session.pendingSettingsAck;
        let settings: http2.Settings = http2Session.localSettings;
        const closed: boolean = http2Session.closed;
        const connecting: boolean = http2Session.connecting;
        settings = http2Session.remoteSettings;

        http2Session.ref();
        http2Session.unref();

        const headers: http2.OutgoingHttpHeaders = {};
        const options: http2.ClientSessionRequestOptions = {
            endStream: true,
            exclusive: true,
            parent: 0,
            weight: 0,
            getTrailers: (trailers: http2.OutgoingHttpHeaders) => {}
        };
        (http2Session as http2.ClientHttp2Session).request();
        (http2Session as http2.ClientHttp2Session).request(headers);
        (http2Session as http2.ClientHttp2Session).request(headers, options);

        const stream: http2.Http2Stream = {} as any;
        http2Session.rstStream(stream);
        http2Session.rstStream(stream, 0);

        http2Session.setTimeout(100, () => {});
        http2Session.close(() => {});

        const socket: net.Socket | tls.TLSSocket = http2Session.socket;
        let state: http2.SessionState = http2Session.state;
        state = {
            effectiveLocalWindowSize: 0,
            effectiveRecvDataLength: 0,
            nextStreamID: 0,
            localWindowSize: 0,
            lastProcStreamID: 0,
            remoteWindowSize: 0,
            outboundQueueSize: 0,
            deflateDynamicTableSize: 0,
            inflateDynamicTableSize: 0
        };

        http2Session.priority(stream, {
            exclusive: true,
            parent: 0,
            weight: 0,
            silent: true
        });

        http2Session.settings(settings);

      http2Session.ping((err: Error | null, duration: number, payload: Buffer) => {});
      http2Session.ping(Buffer.from(''), (err: Error | null, duration: number, payload: Buffer) => {});
      http2Session.ping(new DataView(new Int8Array(1).buffer), (err: Error | null, duration: number, payload: Buffer) => {});
    }

    // Http2Stream
    {
        const http2Stream: http2.Http2Stream = {} as any;
        const duplex: stream.Duplex = http2Stream;

        http2Stream.on('aborted', () => {});
        http2Stream.on('error', (err: Error) => {});
        http2Stream.on('frameError', (frameType: number, errorCode: number, streamID: number) => {});
        http2Stream.on('streamClosed', (code: number) => {});
        http2Stream.on('timeout', () => {});
        http2Stream.on('trailers', (trailers: http2.IncomingHttpHeaders, flags: number) => {});

        const aborted: boolean = http2Stream.aborted;
        const closed: boolean = http2Stream.closed;
        const destroyed: boolean = http2Stream.destroyed;
        const pending: boolean = http2Stream.pending;

        http2Stream.priority({
            exclusive: true,
            parent: 0,
            weight: 0,
            silent: true
        });

        const sesh: http2.Http2Session = http2Stream.session;

        http2Stream.setTimeout(100, () => {});

        let state: http2.StreamState = http2Stream.state;
        state = {
            localWindowSize: 0,
            state: 0,
            streamLocalClose: 0,
            streamRemoteClose: 0,
            sumDependencyWeight: 0,
            weight: 0
        };

        http2Stream.close();
        http2Stream.close(0);
        http2Stream.close(0, () => {});
        http2Stream.close(undefined, () => {});

        // ClientHttp2Stream
        const clientHttp2Stream: http2.ClientHttp2Stream = {} as any;
        clientHttp2Stream.on('headers', (headers: http2.IncomingHttpHeaders, flags: number) => {});
        clientHttp2Stream.on('push', (headers: http2.IncomingHttpHeaders, flags: number) => {});
        clientHttp2Stream.on('response', (headers: http2.IncomingHttpHeaders & http2.IncomingHttpStatusHeader, flags: number) => {
            const s: number = headers[':status'];
        });

        // ServerHttp2Stream
        const serverHttp2Stream: http2.ServerHttp2Stream = {} as any;
        const headers: http2.OutgoingHttpHeaders = {};

        serverHttp2Stream.additionalHeaders(headers);
        const headerSent: boolean = serverHttp2Stream.headersSent;
        const pushAllowed: boolean = serverHttp2Stream.pushAllowed;
        serverHttp2Stream.pushStream(headers, (err: Error | null, pushStream: http2.ServerHttp2Stream, headers: http2.OutgoingHttpHeaders) => {});

        const options: http2.ServerStreamResponseOptions = {
            endStream: true,
            getTrailers: (trailers: http2.OutgoingHttpHeaders) => {}
        };
        serverHttp2Stream.respond();
        serverHttp2Stream.respond(headers);
        serverHttp2Stream.respond(headers, options);

        const options2: http2.ServerStreamFileResponseOptions = {
            statCheck: (stats: fs.Stats, headers: http2.OutgoingHttpHeaders, statOptions: http2.StatOptions) => {},
            getTrailers: (trailers: http2.OutgoingHttpHeaders) => {},
            offset: 0,
            length: 0
        };
        serverHttp2Stream.respondWithFD(0);
        serverHttp2Stream.respondWithFD(0, headers);
        serverHttp2Stream.respondWithFD(0, headers, options2);
        serverHttp2Stream.respondWithFD(0, headers, {statCheck: () => false});
        const options3: http2.ServerStreamFileResponseOptionsWithError = {
            onError: (err: NodeJS.ErrnoException) => {},
            statCheck: (stats: fs.Stats, headers: http2.OutgoingHttpHeaders, statOptions: http2.StatOptions) => {},
            getTrailers: (trailers: http2.OutgoingHttpHeaders) => {},
            offset: 0,
            length: 0
        };
        serverHttp2Stream.respondWithFile('');
        serverHttp2Stream.respondWithFile('', headers);
        serverHttp2Stream.respondWithFile('', headers, options3);
        serverHttp2Stream.respondWithFile('', headers, {statCheck: () => false});
    }

    // Http2Server / Http2SecureServer
    {
        const http2Server: http2.Http2Server = http2.createServer();
        const http2SecureServer: http2.Http2SecureServer = http2.createSecureServer();
        const s1: net.Server = http2Server;
        const s2: tls.Server = http2SecureServer;
        [http2Server, http2SecureServer].forEach((server) => {
            server.on('sessionError', (err: Error) => {});
            server.on('checkContinue', (stream: http2.ServerHttp2Stream, headers: http2.IncomingHttpHeaders, flags: number) => {});
            server.on('stream', (stream: http2.ServerHttp2Stream, headers: http2.IncomingHttpHeaders, flags: number) => {});
            server.on('request', (request: http2.Http2ServerRequest, response: http2.Http2ServerResponse) => {});
            server.on('timeout', () => {});
        });

        http2SecureServer.on('unknownProtocol', (socket: tls.TLSSocket) => {});
    }

    // Public API (except constants)
    {
        let settings: http2.Settings;
        const serverOptions: http2.ServerOptions = {
            maxDeflateDynamicTableSize: 0,
            maxReservedRemoteStreams: 0,
            maxSendHeaderBlockLength: 0,
            paddingStrategy: 0,
            peerMaxConcurrentStreams: 0,
            selectPadding: (frameLen: number, maxFrameLen: number) => 0,
            settings,
            allowHTTP1: true
        };
        // tslint:disable-next-line prefer-object-spread (ts2.1 feature)
        const secureServerOptions: http2.SecureServerOptions = Object.assign({}, serverOptions);
        secureServerOptions.ca = '';
        const onRequestHandler = (request: http2.Http2ServerRequest, response: http2.Http2ServerResponse) => {
            // Http2ServerRequest

            const readable: stream.Readable = request;
            let incomingHeaders: http2.IncomingHttpHeaders = request.headers;
            incomingHeaders = request.trailers;
            const httpVersion: string = request.httpVersion;
            let method: string = request.method;
            let rawHeaders: string[] = request.rawHeaders;
            rawHeaders = request.rawTrailers;
            let socket: net.Socket | tls.TLSSocket = request.socket;
            let stream: http2.ServerHttp2Stream = request.stream;
            const url: string = request.url;

            request.setTimeout(0, () => {});
            request.on('aborted', (hadError: boolean, code: number) => {});

            // Http2ServerResponse

            let outgoingHeaders: http2.OutgoingHttpHeaders;
            response.addTrailers(outgoingHeaders);
            socket = response.connection;
            const finished: boolean = response.finished;
            response.sendDate = true;
            response.statusCode = 200;
            response.statusMessage = '';
            socket = response.socket;
            stream = response.stream;

            method = response.getHeader(':method');
            const headers: string[] = response.getHeaderNames();
            outgoingHeaders = response.getHeaders();
            const hasMethod = response.hasHeader(':method');
            response.removeHeader(':method');
            response.setHeader(':method', 'GET');
            response.setHeader(':status', 200);
            response.setHeader('some-list', ['', '']);
            const headersSent: boolean = response.headersSent;

            response.setTimeout(0, () => {});
            response.createPushResponse(outgoingHeaders, (err: Error | null, res: http2.Http2ServerResponse) => {});

            response.writeContinue();
            response.writeHead(200);
            response.writeHead(200, outgoingHeaders);
            response.writeHead(200, 'OK', outgoingHeaders);
            response.writeHead(200, 'OK');
            response.write('');
            response.write('', (err: Error) => {});
            response.write('', 'utf8');
            response.write('', 'utf8', (err: Error) => {});
            response.write(Buffer.from([]));
            response.write(Buffer.from([]), (err: Error) => {});
            response.write(Buffer.from([]), 'utf8');
            response.write(Buffer.from([]), 'utf8', (err: Error) => {});
            response.end();
            response.end(() => {});
            response.end('');
            response.end('', () => {});
            response.end('', 'utf8');
            response.end('', 'utf8', () => {});
            response.end(Buffer.from([]));
            response.end(Buffer.from([]), () => {});
            response.end(Buffer.from([]), 'utf8');
            response.end(Buffer.from([]), 'utf8', () => {});

            request.on('aborted', (hadError: boolean, code: number) => {});
            request.on('close', () => {});
            request.on('drain', () => {});
            request.on('error', (error: Error) => {});
            request.on('finish', () => {});
        };

        let http2Server: http2.Http2Server;
        let http2SecureServer: http2.Http2SecureServer;

        http2Server = http2.createServer();
        http2Server = http2.createServer(serverOptions);
        http2Server = http2.createServer(onRequestHandler);
        http2Server = http2.createServer(serverOptions, onRequestHandler);

        http2SecureServer = http2.createSecureServer();
        http2SecureServer = http2.createSecureServer(secureServerOptions);
        http2SecureServer = http2.createSecureServer(onRequestHandler);
        http2SecureServer = http2.createSecureServer(secureServerOptions, onRequestHandler);

        const clientSessionOptions: http2.ClientSessionOptions = {
            maxDeflateDynamicTableSize: 0,
            maxReservedRemoteStreams: 0,
            maxSendHeaderBlockLength: 0,
            paddingStrategy: 0,
            peerMaxConcurrentStreams: 0,
            selectPadding: (frameLen: number, maxFrameLen: number) => 0,
            settings
        };
        // tslint:disable-next-line prefer-object-spread (ts2.1 feature)
        const secureClientSessionOptions: http2.SecureClientSessionOptions = Object.assign({}, clientSessionOptions);
        secureClientSessionOptions.ca = '';
        const onConnectHandler = (session: http2.Http2Session, socket: net.Socket) => {};

        const serverHttp2Session: http2.ServerHttp2Session = {} as any;

        serverHttp2Session.altsvc('', '');
        serverHttp2Session.altsvc('', 0);
        serverHttp2Session.altsvc('', new url.URL(''));
        serverHttp2Session.altsvc('', { origin: '' });
        serverHttp2Session.altsvc('', { origin: 0 });
        serverHttp2Session.altsvc('', { origin: new url.URL('') });

        let clientHttp2Session: http2.ClientHttp2Session;

        clientHttp2Session = http2.connect('');
        clientHttp2Session = http2.connect('', onConnectHandler);
        clientHttp2Session = http2.connect('', clientSessionOptions);
        clientHttp2Session = http2.connect('', clientSessionOptions, onConnectHandler);
        clientHttp2Session = http2.connect('', secureClientSessionOptions);
        clientHttp2Session = http2.connect('', secureClientSessionOptions, onConnectHandler);
        clientHttp2Session.on('altsvc', (alt: string, origin: string, number: number) => {});

        settings = http2.getDefaultSettings();
        settings = http2.getPackedSettings(settings);
        settings = http2.getUnpackedSettings(Buffer.from([]));
        settings = http2.getUnpackedSettings(Uint8Array.from([]));
    }

    // constants
    {
        const constants = http2.constants;
        let num: number;
        let str: string;
        num = constants.NGHTTP2_SESSION_SERVER;
        num = constants.NGHTTP2_SESSION_CLIENT;
        num = constants.NGHTTP2_STREAM_STATE_IDLE;
        num = constants.NGHTTP2_STREAM_STATE_OPEN;
        num = constants.NGHTTP2_STREAM_STATE_RESERVED_LOCAL;
        num = constants.NGHTTP2_STREAM_STATE_RESERVED_REMOTE;
        num = constants.NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL;
        num = constants.NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE;
        num = constants.NGHTTP2_STREAM_STATE_CLOSED;
        num = constants.NGHTTP2_NO_ERROR;
        num = constants.NGHTTP2_PROTOCOL_ERROR;
        num = constants.NGHTTP2_INTERNAL_ERROR;
        num = constants.NGHTTP2_FLOW_CONTROL_ERROR;
        num = constants.NGHTTP2_SETTINGS_TIMEOUT;
        num = constants.NGHTTP2_STREAM_CLOSED;
        num = constants.NGHTTP2_FRAME_SIZE_ERROR;
        num = constants.NGHTTP2_REFUSED_STREAM;
        num = constants.NGHTTP2_CANCEL;
        num = constants.NGHTTP2_COMPRESSION_ERROR;
        num = constants.NGHTTP2_CONNECT_ERROR;
        num = constants.NGHTTP2_ENHANCE_YOUR_CALM;
        num = constants.NGHTTP2_INADEQUATE_SECURITY;
        num = constants.NGHTTP2_HTTP_1_1_REQUIRED;
        num = constants.NGHTTP2_ERR_FRAME_SIZE_ERROR;
        num = constants.NGHTTP2_FLAG_NONE;
        num = constants.NGHTTP2_FLAG_END_STREAM;
        num = constants.NGHTTP2_FLAG_END_HEADERS;
        num = constants.NGHTTP2_FLAG_ACK;
        num = constants.NGHTTP2_FLAG_PADDED;
        num = constants.NGHTTP2_FLAG_PRIORITY;
        num = constants.DEFAULT_SETTINGS_HEADER_TABLE_SIZE;
        num = constants.DEFAULT_SETTINGS_ENABLE_PUSH;
        num = constants.DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE;
        num = constants.DEFAULT_SETTINGS_MAX_FRAME_SIZE;
        num = constants.MAX_MAX_FRAME_SIZE;
        num = constants.MIN_MAX_FRAME_SIZE;
        num = constants.MAX_INITIAL_WINDOW_SIZE;
        num = constants.NGHTTP2_DEFAULT_WEIGHT;
        num = constants.NGHTTP2_SETTINGS_HEADER_TABLE_SIZE;
        num = constants.NGHTTP2_SETTINGS_ENABLE_PUSH;
        num = constants.NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS;
        num = constants.NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE;
        num = constants.NGHTTP2_SETTINGS_MAX_FRAME_SIZE;
        num = constants.NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE;
        num = constants.PADDING_STRATEGY_NONE;
        num = constants.PADDING_STRATEGY_MAX;
        num = constants.PADDING_STRATEGY_CALLBACK;
        num = constants.HTTP_STATUS_CONTINUE;
        num = constants.HTTP_STATUS_SWITCHING_PROTOCOLS;
        num = constants.HTTP_STATUS_PROCESSING;
        num = constants.HTTP_STATUS_OK;
        num = constants.HTTP_STATUS_CREATED;
        num = constants.HTTP_STATUS_ACCEPTED;
        num = constants.HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION;
        num = constants.HTTP_STATUS_NO_CONTENT;
        num = constants.HTTP_STATUS_RESET_CONTENT;
        num = constants.HTTP_STATUS_PARTIAL_CONTENT;
        num = constants.HTTP_STATUS_MULTI_STATUS;
        num = constants.HTTP_STATUS_ALREADY_REPORTED;
        num = constants.HTTP_STATUS_IM_USED;
        num = constants.HTTP_STATUS_MULTIPLE_CHOICES;
        num = constants.HTTP_STATUS_MOVED_PERMANENTLY;
        num = constants.HTTP_STATUS_FOUND;
        num = constants.HTTP_STATUS_SEE_OTHER;
        num = constants.HTTP_STATUS_NOT_MODIFIED;
        num = constants.HTTP_STATUS_USE_PROXY;
        num = constants.HTTP_STATUS_TEMPORARY_REDIRECT;
        num = constants.HTTP_STATUS_PERMANENT_REDIRECT;
        num = constants.HTTP_STATUS_BAD_REQUEST;
        num = constants.HTTP_STATUS_UNAUTHORIZED;
        num = constants.HTTP_STATUS_PAYMENT_REQUIRED;
        num = constants.HTTP_STATUS_FORBIDDEN;
        num = constants.HTTP_STATUS_NOT_FOUND;
        num = constants.HTTP_STATUS_METHOD_NOT_ALLOWED;
        num = constants.HTTP_STATUS_NOT_ACCEPTABLE;
        num = constants.HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED;
        num = constants.HTTP_STATUS_REQUEST_TIMEOUT;
        num = constants.HTTP_STATUS_CONFLICT;
        num = constants.HTTP_STATUS_GONE;
        num = constants.HTTP_STATUS_LENGTH_REQUIRED;
        num = constants.HTTP_STATUS_PRECONDITION_FAILED;
        num = constants.HTTP_STATUS_PAYLOAD_TOO_LARGE;
        num = constants.HTTP_STATUS_URI_TOO_LONG;
        num = constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE;
        num = constants.HTTP_STATUS_RANGE_NOT_SATISFIABLE;
        num = constants.HTTP_STATUS_EXPECTATION_FAILED;
        num = constants.HTTP_STATUS_TEAPOT;
        num = constants.HTTP_STATUS_MISDIRECTED_REQUEST;
        num = constants.HTTP_STATUS_UNPROCESSABLE_ENTITY;
        num = constants.HTTP_STATUS_LOCKED;
        num = constants.HTTP_STATUS_FAILED_DEPENDENCY;
        num = constants.HTTP_STATUS_UNORDERED_COLLECTION;
        num = constants.HTTP_STATUS_UPGRADE_REQUIRED;
        num = constants.HTTP_STATUS_PRECONDITION_REQUIRED;
        num = constants.HTTP_STATUS_TOO_MANY_REQUESTS;
        num = constants.HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE;
        num = constants.HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS;
        num = constants.HTTP_STATUS_INTERNAL_SERVER_ERROR;
        num = constants.HTTP_STATUS_NOT_IMPLEMENTED;
        num = constants.HTTP_STATUS_BAD_GATEWAY;
        num = constants.HTTP_STATUS_SERVICE_UNAVAILABLE;
        num = constants.HTTP_STATUS_GATEWAY_TIMEOUT;
        num = constants.HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED;
        num = constants.HTTP_STATUS_VARIANT_ALSO_NEGOTIATES;
        num = constants.HTTP_STATUS_INSUFFICIENT_STORAGE;
        num = constants.HTTP_STATUS_LOOP_DETECTED;
        num = constants.HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED;
        num = constants.HTTP_STATUS_NOT_EXTENDED;
        num = constants.HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED;
        str = constants.HTTP2_HEADER_STATUS;
        str = constants.HTTP2_HEADER_METHOD;
        str = constants.HTTP2_HEADER_AUTHORITY;
        str = constants.HTTP2_HEADER_SCHEME;
        str = constants.HTTP2_HEADER_PATH;
        str = constants.HTTP2_HEADER_ACCEPT_CHARSET;
        str = constants.HTTP2_HEADER_ACCEPT_ENCODING;
        str = constants.HTTP2_HEADER_ACCEPT_LANGUAGE;
        str = constants.HTTP2_HEADER_ACCEPT_RANGES;
        str = constants.HTTP2_HEADER_ACCEPT;
        str = constants.HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN;
        str = constants.HTTP2_HEADER_AGE;
        str = constants.HTTP2_HEADER_ALLOW;
        str = constants.HTTP2_HEADER_AUTHORIZATION;
        str = constants.HTTP2_HEADER_CACHE_CONTROL;
        str = constants.HTTP2_HEADER_CONNECTION;
        str = constants.HTTP2_HEADER_CONTENT_DISPOSITION;
        str = constants.HTTP2_HEADER_CONTENT_ENCODING;
        str = constants.HTTP2_HEADER_CONTENT_LANGUAGE;
        str = constants.HTTP2_HEADER_CONTENT_LENGTH;
        str = constants.HTTP2_HEADER_CONTENT_LOCATION;
        str = constants.HTTP2_HEADER_CONTENT_MD5;
        str = constants.HTTP2_HEADER_CONTENT_RANGE;
        str = constants.HTTP2_HEADER_CONTENT_TYPE;
        str = constants.HTTP2_HEADER_COOKIE;
        str = constants.HTTP2_HEADER_DATE;
        str = constants.HTTP2_HEADER_ETAG;
        str = constants.HTTP2_HEADER_EXPECT;
        str = constants.HTTP2_HEADER_EXPIRES;
        str = constants.HTTP2_HEADER_FROM;
        str = constants.HTTP2_HEADER_HOST;
        str = constants.HTTP2_HEADER_IF_MATCH;
        str = constants.HTTP2_HEADER_IF_MODIFIED_SINCE;
        str = constants.HTTP2_HEADER_IF_NONE_MATCH;
        str = constants.HTTP2_HEADER_IF_RANGE;
        str = constants.HTTP2_HEADER_IF_UNMODIFIED_SINCE;
        str = constants.HTTP2_HEADER_LAST_MODIFIED;
        str = constants.HTTP2_HEADER_LINK;
        str = constants.HTTP2_HEADER_LOCATION;
        str = constants.HTTP2_HEADER_MAX_FORWARDS;
        str = constants.HTTP2_HEADER_PREFER;
        str = constants.HTTP2_HEADER_PROXY_AUTHENTICATE;
        str = constants.HTTP2_HEADER_PROXY_AUTHORIZATION;
        str = constants.HTTP2_HEADER_RANGE;
        str = constants.HTTP2_HEADER_REFERER;
        str = constants.HTTP2_HEADER_REFRESH;
        str = constants.HTTP2_HEADER_RETRY_AFTER;
        str = constants.HTTP2_HEADER_SERVER;
        str = constants.HTTP2_HEADER_SET_COOKIE;
        str = constants.HTTP2_HEADER_STRICT_TRANSPORT_SECURITY;
        str = constants.HTTP2_HEADER_TRANSFER_ENCODING;
        str = constants.HTTP2_HEADER_TE;
        str = constants.HTTP2_HEADER_UPGRADE;
        str = constants.HTTP2_HEADER_USER_AGENT;
        str = constants.HTTP2_HEADER_VARY;
        str = constants.HTTP2_HEADER_VIA;
        str = constants.HTTP2_HEADER_WWW_AUTHENTICATE;
        str = constants.HTTP2_HEADER_HTTP2_SETTINGS;
        str = constants.HTTP2_HEADER_KEEP_ALIVE;
        str = constants.HTTP2_HEADER_PROXY_CONNECTION;
        str = constants.HTTP2_METHOD_ACL;
        str = constants.HTTP2_METHOD_BASELINE_CONTROL;
        str = constants.HTTP2_METHOD_BIND;
        str = constants.HTTP2_METHOD_CHECKIN;
        str = constants.HTTP2_METHOD_CHECKOUT;
        str = constants.HTTP2_METHOD_CONNECT;
        str = constants.HTTP2_METHOD_COPY;
        str = constants.HTTP2_METHOD_DELETE;
        str = constants.HTTP2_METHOD_GET;
        str = constants.HTTP2_METHOD_HEAD;
        str = constants.HTTP2_METHOD_LABEL;
        str = constants.HTTP2_METHOD_LINK;
        str = constants.HTTP2_METHOD_LOCK;
        str = constants.HTTP2_METHOD_MERGE;
        str = constants.HTTP2_METHOD_MKACTIVITY;
        str = constants.HTTP2_METHOD_MKCALENDAR;
        str = constants.HTTP2_METHOD_MKCOL;
        str = constants.HTTP2_METHOD_MKREDIRECTREF;
        str = constants.HTTP2_METHOD_MKWORKSPACE;
        str = constants.HTTP2_METHOD_MOVE;
        str = constants.HTTP2_METHOD_OPTIONS;
        str = constants.HTTP2_METHOD_ORDERPATCH;
        str = constants.HTTP2_METHOD_PATCH;
        str = constants.HTTP2_METHOD_POST;
        str = constants.HTTP2_METHOD_PRI;
        str = constants.HTTP2_METHOD_PROPFIND;
        str = constants.HTTP2_METHOD_PROPPATCH;
        str = constants.HTTP2_METHOD_PUT;
        str = constants.HTTP2_METHOD_REBIND;
        str = constants.HTTP2_METHOD_REPORT;
        str = constants.HTTP2_METHOD_SEARCH;
        str = constants.HTTP2_METHOD_TRACE;
        str = constants.HTTP2_METHOD_UNBIND;
        str = constants.HTTP2_METHOD_UNCHECKOUT;
        str = constants.HTTP2_METHOD_UNLINK;
        str = constants.HTTP2_METHOD_UNLOCK;
        str = constants.HTTP2_METHOD_UPDATE;
        str = constants.HTTP2_METHOD_UPDATEREDIRECTREF;
        str = constants.HTTP2_METHOD_VERSION_CONTROL;
    }
}

///////////////////////////////////////////////////////////
/// Inspector Tests                                     ///
///////////////////////////////////////////////////////////

{
    {
        const b: inspector.Console.ConsoleMessage = {source: 'test', text: 'test', level: 'error' };
        inspector.open();
        inspector.open(0);
        inspector.open(0, 'localhost');
        inspector.open(0, 'localhost', true);
        inspector.close();
        const inspectorUrl: string = inspector.url();

        const session = new inspector.Session();
        session.connect();
        session.disconnect();

        // Unknown post method
        session.post('A.b', { key: 'value' }, (err, params) => {});
        // TODO: parameters are implicitly 'any' and need type annotation
        session.post('A.b', (err: Error | null, params?: {}) => {});
        session.post('A.b');
        // Known post method
        const parameter: inspector.Runtime.EvaluateParameterType = { expression: '2 + 2' };
        session.post('Runtime.evaluate', parameter,
            (err: Error, params: inspector.Runtime.EvaluateReturnType) => {});
        session.post('Runtime.evaluate', (err: Error, params: inspector.Runtime.EvaluateReturnType) => {
            const exceptionDetails: inspector.Runtime.ExceptionDetails = params.exceptionDetails;
            const resultClassName: string = params.result.className;
        });
        session.post('Runtime.evaluate');

        // General event
        session.on('inspectorNotification', message => {
            message; // $ExpectType InspectorNotification<{}>
        });
        // Known events
        session.on('Debugger.paused', (message: inspector.InspectorNotification<inspector.Debugger.PausedEventDataType>) => {
            const method: string = message.method;
            const pauseReason: string = message.params.reason;
        });
        session.on('Debugger.resumed', () => {});
    }
}

////////////////////////////////////////////////////
/// module tests : http://nodejs.org/api/modules.html
////////////////////////////////////////////////////
import moduleModule = require('module');

{
    require.extensions[".ts"] = () => "";

    Module.runMain();
    const s: string = Module.wrap("some code");

    const m1: Module = new Module("moduleId");
    const m2: Module = new Module.Module("moduleId");
    const b: string[] = Module.builtinModules;
    let paths: string[] = module.paths;
    paths = m1.paths;

    moduleModule.createRequireFromPath('./test')('test');
}

////////////////////////////////////////////////////
/// Node.js ESNEXT Support
////////////////////////////////////////////////////

{
    const s = 'foo';
    const s1: string = s.trimLeft();
    const s2: string = s.trimRight();
}
