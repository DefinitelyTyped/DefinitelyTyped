import {
    FileHandle,
    open as openAsync,
    writeFile as writeFileAsync,
    watch as watchAsync,
    cp as cpAsync,
    constants,
    access,
    copyFile,
} from 'node:fs/promises';
import * as fs from 'node:fs';
import * as util from 'node:util';
import { URL } from 'node:url';
import assert = require('node:assert');
import { CopyOptions, CopySyncOptions, cpSync, cp } from 'fs';

{
    fs.writeFile("thebible.txt",
        "Do unto others as you would have them do unto you.",
        assert.ifError);

    fs.write(1234, "test", () => { });

    fs.writeFile("Harry Potter",
        "\"You be wizzing, Harry,\" jived Dumbledore.",
        {
            encoding: "ascii",
            signal: new AbortSignal(),
        },
        assert.ifError);

    fs.writeFile("testfile", "content", "utf8", assert.ifError);
    // @ts-expect-error
    fs.writeFile("testfile", "content", "invalid encoding", assert.ifError);

    fs.writeFileSync("testfile", "content", "utf8");
    // @ts-expect-error
    fs.writeFileSync("testfile", "content", "invalid encoding");
    fs.writeFileSync("testfile", "content", { encoding: "utf8" });
    // @ts-expect-error
    fs.writeFileSync("testfile", "content", { encoding: "invalid encoding" });
    fs.writeFileSync("testfile", new DataView(new ArrayBuffer(1)), { encoding: "utf8" });
    // @ts-expect-error
    fs.writeFileSync("testfile", new DataView(new ArrayBuffer(1)), { encoding: "invalid encoding" });
}

{
    fs.appendFile("testfile", "foobar", "utf8", assert.ifError);
    // @ts-expect-error
    fs.appendFile("testfile", "foobar", "invalid encoding", assert.ifError);
    fs.appendFile("testfile", "foobar", { encoding: "utf8" }, assert.ifError);
    // @ts-expect-error
    fs.appendFile("testfile", "foobar", { encoding: "invalid encoding" }, assert.ifError);
    fs.appendFileSync("testfile", "foobar", "utf8");
    // @ts-expect-error
    fs.appendFileSync("testfile", "foobar", "invalid encoding");
    fs.appendFileSync("testfile", "foobar", { encoding: "utf8" });
    // @ts-expect-error
    fs.appendFileSync("testfile", "foobar", { encoding: "invalid encoding" });
}

{
    let content: string;
    let buffer: Buffer;
    let stringOrBuffer: string | Buffer;
    const nullEncoding: BufferEncoding | null = null;
    const stringEncoding: BufferEncoding | null = 'utf8';

    content = fs.readFileSync('testfile', 'utf8');
    // @ts-expect-error
    content = fs.readFileSync('testfile', 'invalid encoding');
    content = fs.readFileSync('testfile', { encoding: 'utf8' });
    // @ts-expect-error
    content = fs.readFileSync('testfile', { encoding: 'invalid encoding' });
    stringOrBuffer = fs.readFileSync('testfile', stringEncoding);
    stringOrBuffer = fs.readFileSync('testfile', { encoding: stringEncoding });

    buffer = fs.readFileSync('testfile');
    buffer = fs.readFileSync('testfile', null);
    buffer = fs.readFileSync('testfile', { encoding: null });
    stringOrBuffer = fs.readFileSync('testfile', nullEncoding);
    stringOrBuffer = fs.readFileSync('testfile', { encoding: nullEncoding });

    buffer = fs.readFileSync('testfile', { flag: 'r' });

    fs.readFile('testfile', 'utf8', (err, data) => content = data);
    // @ts-expect-error
    fs.readFile('testfile', 'invalid encoding', (err, data) => content = data);
    fs.readFile('testfile', { encoding: 'utf8', signal: new AbortSignal() }, (err, data) => content = data);
    // @ts-expect-error
    fs.readFile('testfile', { encoding: 'invalid encoding', signal: new AbortSignal() }, (err, data) => content = data);
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
    // 6-param version using no default options:
    fs.read(1, new DataView(new ArrayBuffer(1)), 0, 1, 0, (err: NodeJS.ErrnoException | null, bytesRead: number, buffer: DataView) => { });
    fs.read(1, Buffer.from('test'), 1, 2, 123n, () => { });
    // 3-param version using no default options:
    fs.read(1, {buffer: new DataView(new ArrayBuffer(1)), offset: 0, length: 1, position: 0}, (err: NodeJS.ErrnoException | null, bytesRead: number, buffer: DataView) => { });
    fs.read(1, {buffer: Buffer.from('test'), offset: 1, length: 2, position: 123n}, () => { });
    // 3-param version using some default options:
    fs.read(1, {length: 1, position: 0}, (err: NodeJS.ErrnoException | null, bytesRead: number, buffer: NodeJS.ArrayBufferView) => { });
    fs.read(1, {buffer: Buffer.from('test'), position: 123n}, () => { });
    // 2-param version using all-default options:
    fs.read(1, (err: NodeJS.ErrnoException | null, bytesRead: number, buffer: NodeJS.ArrayBufferView) => { });
    fs.read(1, () => { });
}

{
    fs.readSync(1, new DataView(new ArrayBuffer(1)), 0, 1, 0);
    fs.readSync(1, new DataView(new ArrayBuffer(1)), 0, 1, 123n);
    fs.readSync(1, Buffer.from(''), {
        length: 123,
        offset: 456,
        position: null,
    });
    fs.readSync(1, Buffer.from(''), {
        position: 123n,
    });
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
    listS = fs.readdirSync('path', { encoding: undefined }) as string[];
    listS = fs.readdirSync('path', 'utf8');
    listS = fs.readdirSync('path', null);
    listS = fs.readdirSync('path', undefined);
    const listDir: fs.Dirent[] = fs.readdirSync('path', { withFileTypes: true });
    const listDir2: Buffer[] = fs.readdirSync('path', { withFileTypes: false, encoding: 'buffer' });
    const listDir3: fs.Dirent[] = fs.readdirSync('path', { encoding: 'utf8', withFileTypes: true });

    let listB: Buffer[];
    listB = fs.readdirSync('path', { encoding: 'buffer' });
    listB = fs.readdirSync("path", 'buffer');

    const enc = 'buffer';
    fs.readdirSync('path', { encoding: enc });
    fs.readdirSync('path', {});

    fs.readdir('path', { withFileTypes: true }, (err: NodeJS.ErrnoException | null, files: fs.Dirent[]) => { });
}

async function testPromisify() {
    const rd = util.promisify(fs.readdir);
    let listS: string[];
    listS = await rd('path');
    listS = await rd('path', 'utf8');
    listS = await rd('path', null);
    listS = await rd('path', undefined);
    listS = await rd('path', { encoding: 'utf8' });
    listS = await rd('path', { encoding: null });
    listS = await rd('path', { encoding: null, withFileTypes: false });
    listS = await rd('path', { encoding: 'utf8', withFileTypes: false });
    const listDir: fs.Dirent[] = await rd('path', { withFileTypes: true });
    const listDir2: Buffer[] = await rd('path', { withFileTypes: false, encoding: 'buffer' });
    const listDir3: fs.Dirent[] = await rd('path', { encoding: 'utf8', withFileTypes: true });

    const ln = util.promisify(fs.link);
    // $ExpectType Promise<void>
    ln("abc", "def");
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
        encoding: 'utf8',
        signal: new AbortSignal(),
    }, (event, filename) => {
        console.log(event, filename);
    });
}

{
    fs.watchFile('/tmp/foo-', (current, previous) => {
        console.log(current, previous);
    });

    fs.watchFile('/tmp/foo-', {
        persistent: true,
        bigint: true,
        interval: 1000,
    }, (current, previous) => {
        console.log(current, previous);
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
    fs.close(123);
    fs.close(123, (error?: Error | null) => { });
}

{
    let s = '123';
    let b: Buffer;
    fs.readlink('/path/to/folder', (err, linkString) => s = linkString);
    fs.readlink('/path/to/folder', undefined, (err, linkString) => s = linkString);
    fs.readlink('/path/to/folder', 'utf8', (err, linkString) => s = linkString);
    fs.readlink('/path/to/folder', 'buffer', (err, linkString) => b = linkString);
    fs.readlink('/path/to/folder', {}, (err, linkString) => s = linkString);
    fs.readlink('/path/to/folder', { encoding: undefined }, (err, linkString) => s = linkString);
    fs.readlink('/path/to/folder', { encoding: 'utf8' }, (err, linkString) => s = linkString);
    fs.readlink('/path/to/folder', { encoding: 'buffer' }, (err, linkString) => b = linkString);

    s = fs.readlinkSync('/path/to/folder');
    s = fs.readlinkSync('/path/to/folder', undefined);
    s = fs.readlinkSync('/path/to/folder', 'utf8');
    b = fs.readlinkSync('/path/to/folder', 'buffer');

    s = fs.readlinkSync('/path/to/folder', {});
    s = fs.readlinkSync('/path/to/folder', { encoding: undefined });
    s = fs.readlinkSync('/path/to/folder', { encoding: 'utf8' });
    b = fs.readlinkSync('/path/to/folder', { encoding: 'buffer' });
}

{
    let s = '123';
    let b: Buffer;
    fs.realpath('/path/to/folder', (err, resolvedPath) => s = resolvedPath);
    fs.realpath('/path/to/folder', undefined, (err, resolvedPath) => s = resolvedPath);
    fs.realpath('/path/to/folder', 'utf8', (err, resolvedPath) => s = resolvedPath);
    fs.realpath('/path/to/folder', 'buffer', (err, resolvedPath) => b = resolvedPath);
    fs.realpath('/path/to/folder', {}, (err, resolvedPath) => s = resolvedPath);
    fs.realpath('/path/to/folder', { encoding: undefined }, (err, resolvedPath) => s = resolvedPath);
    fs.realpath('/path/to/folder', { encoding: 'utf8' }, (err, resolvedPath) => s = resolvedPath);
    fs.realpath('/path/to/folder', { encoding: 'buffer' }, (err, resolvedPath) => b = resolvedPath);

    s = fs.realpathSync('/path/to/folder');
    s = fs.realpathSync('/path/to/folder', undefined);
    s = fs.realpathSync('/path/to/folder', 'utf8');
    b = fs.realpathSync('/path/to/folder', 'buffer');

    s = fs.realpathSync('/path/to/folder', {});
    s = fs.realpathSync('/path/to/folder', { encoding: undefined });
    s = fs.realpathSync('/path/to/folder', { encoding: 'utf8' });
    b = fs.realpathSync('/path/to/folder', { encoding: 'buffer' });

    // native
    fs.realpath.native('/path/to/folder', (err, resolvedPath) => s = resolvedPath);
    fs.realpath.native('/path/to/folder', undefined, (err, resolvedPath) => s = resolvedPath);
    fs.realpath.native('/path/to/folder', 'utf8', (err, resolvedPath) => s = resolvedPath);
    fs.realpath.native('/path/to/folder', 'buffer', (err, resolvedPath) => b = resolvedPath);
    fs.realpath.native('/path/to/folder', {}, (err, resolvedPath) => s = resolvedPath);
    fs.realpath.native('/path/to/folder', { encoding: undefined }, (err, resolvedPath) => s = resolvedPath);
    fs.realpath.native('/path/to/folder', { encoding: 'utf8' }, (err, resolvedPath) => s = resolvedPath);
    fs.realpath.native('/path/to/folder', { encoding: 'buffer' }, (err, resolvedPath) => b = resolvedPath);

    s = fs.realpathSync.native('/path/to/folder');
    s = fs.realpathSync.native('/path/to/folder', undefined);
    s = fs.realpathSync.native('/path/to/folder', 'utf8');
    b = fs.realpathSync.native('/path/to/folder', 'buffer');

    s = fs.realpathSync.native('/path/to/folder', {});
    s = fs.realpathSync.native('/path/to/folder', { encoding: undefined });
    s = fs.realpathSync.native('/path/to/folder', { encoding: 'utf8' });
    b = fs.realpathSync.native('/path/to/folder', { encoding: 'buffer' });
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
    }, (err, path) => {
        err; // $ExpectType ErrnoException | null
        path; // $ExpectType string | undefined
    });

    // $ExpectType string | undefined
    fs.mkdirSync('some/test/path', {
        recursive: true,
        mode: 0o777,
    });

    // $ExpectType Promise<string | undefined>
    util.promisify(fs.mkdir)('some/test/path', {
        recursive: true,
        mode: 0o777,
    });

    // $ExpectType Promise<string | undefined>
    fs.promises.mkdir('some/test/path', {
        recursive: true,
        mode: 0o777,
    });
}

{
    let names: Promise<string[]>;
    let buffers: Promise<Buffer[]>;
    let entries: Promise<fs.Dirent[]>;

    names = fs.promises.readdir('/path/to/dir', { encoding: 'utf8', withFileTypes: false });
    buffers = fs.promises.readdir('/path/to/dir', { encoding: 'buffer', withFileTypes: false });
    entries = fs.promises.readdir('/path/to/dir', { encoding: 'utf8', withFileTypes: true });
}

{
    fs.writev(1, [Buffer.from('123')] as ReadonlyArray<NodeJS.ArrayBufferView>, (err: NodeJS.ErrnoException | null, bytesWritten: number, buffers: NodeJS.ArrayBufferView[]) => {
    });
    const bytesWritten = fs.writevSync(1, [Buffer.from('123')] as ReadonlyArray<NodeJS.ArrayBufferView>);
}

(async () => {
    try {
        await fs.promises.rmdir('some/test/path');
        await fs.promises.rmdir('some/test/path', { maxRetries: 123, retryDelay: 123, recursive: true });
    } catch (e) { }

    try {
        await fs.promises.rmdir('some/test/file');
        await fs.promises.rmdir('some/test/file', { maxRetries: 123, retryDelay: 123 });
    } catch (e) { }
})();

{
    fs.open('test', (err, fd) => {});
    fs.open('test', 'r', (err, fd) => {});
    fs.open('test', undefined, (err, fd) => {});
    fs.open('test', 'r', 0o666, (err, fd) => {});
    fs.open('test', 'r', undefined, (err, fd) => {});
}

{
    fs.opendir('test', async (err, dir) => {
        const dirEnt: fs.Dirent | null = await dir.read();
    });

    fs.opendir(Buffer.from('test'), async (err, dir) => {
        const dirEnt: fs.Dirent | null = await dir.read();
    });

    fs.opendir(new URL(`file://${__dirname}`), async (err, dir) => {
        const dirEnt: fs.Dirent | null = await dir.read();
    });

    const dir: fs.Dir = fs.opendirSync('test', {
        encoding: 'utf8',
    });

    const dirBuffer: fs.Dir = fs.opendirSync(Buffer.from('test'), {
        encoding: 'utf8',
    });

    const dirUrl: fs.Dir = fs.opendirSync(new URL(`file://${__dirname}`), {
        encoding: 'utf8',
    });

    (async () => {
        // tslint:disable-next-line: await-promise
        for await (const thing of dir) {
        }
        // tslint:disable-next-line: await-promise
        for await (const thing of dirBuffer) {
        }
        // tslint:disable-next-line: await-promise
        for await (const thing of dirUrl) {
        }
    });

    const dirEntProm: Promise<fs.Dir> = fs.promises.opendir('test', {
        encoding: 'utf8',
        bufferSize: 42,
    });

    const dirEntBufferProm: Promise<fs.Dir> = fs.promises.opendir(Buffer.from('test'), {
        encoding: 'utf8',
        bufferSize: 42,
    });

    const dirEntUrlProm: Promise<fs.Dir> = fs.promises.opendir(new URL(`file://${__dirname}`), {
        encoding: 'utf8',
        bufferSize: 42,
    });
}

async () => {
    const handle: FileHandle = await openAsync('test', 'r');
    const writeStream = fs.createWriteStream('./index.d.ts', {
        fd: handle,
    });
    const _wom = writeStream.writableObjectMode; // $ExpectType boolean

    const readStream = fs.createReadStream('./index.d.ts', {
        fd: handle,
    });
    const _rom = readStream.readableObjectMode; // $ExpectType boolean

    (await handle.read()).buffer; // $ExpectType Buffer
    (await handle.read({
        buffer: new Uint32Array(),
        offset: 1,
        position: 2,
        length: 3,
    })).buffer; // $ExpectType Uint32Array

    await handle.read(new Uint32Array(), 1, 2, 3);
    await handle.read(Buffer.from('hurr'));

    await handle.write('hurr', 0, 'utf-8');
    await handle.write(Buffer.from('hurr'), 0, 42, 10);

    handle.readableWebStream();

    handle.readLines()[Symbol.asyncIterator](); // $ExpectType AsyncIterableIterator<string>
};

{
    fs.createWriteStream('./index.d.ts');
    fs.createWriteStream('./index.d.ts', 'utf8');
    // @ts-expect-error
    fs.createWriteStream('./index.d.ts', 'invalid encoding');
    fs.createWriteStream('./index.d.ts', { encoding: 'utf8' });
    // @ts-expect-error
    fs.createWriteStream('./index.d.ts', { encoding: 'invalid encoding' });

    fs.createReadStream('./index.d.ts');
    fs.createReadStream('./index.d.ts', 'utf8');
    // @ts-expect-error
    fs.createReadStream('./index.d.ts', 'invalid encoding');
    fs.createReadStream('./index.d.ts', { encoding: 'utf8' });
    // @ts-expect-error
    fs.createReadStream('./index.d.ts', { encoding: 'invalid encoding' });
}

async () => {
    await writeFileAsync('test', 'test');
    await writeFileAsync('test',  Buffer.from('test'));
    await writeFileAsync('test',  ['test', 'test2']);
    await writeFileAsync('test',  async function *() { yield 'yeet'; }());
    await writeFileAsync('test', process.stdin);
};

{
    fs.createReadStream('path').close();
    fs.createReadStream('path').close((err?: NodeJS.ErrnoException | null) => {});

    fs.createWriteStream('path').close();
    fs.createWriteStream('path').close((err?: NodeJS.ErrnoException | null) => {});
}

{
    fs.readvSync(123, [Buffer.from('wut')] as ReadonlyArray<NodeJS.ArrayBufferView>);
    fs.readv(123, [Buffer.from('wut')] as ReadonlyArray<NodeJS.ArrayBufferView>, 123, (err: NodeJS.ErrnoException | null, bytesRead: number, buffers: NodeJS.ArrayBufferView[]) => {
    });
}

async function testStat(
    path: string,
    fd: number,
    opts: fs.StatOptions,
    bigintMaybeFalse: fs.StatOptions & { bigint: false } | undefined,
    bigIntMaybeTrue: fs.StatOptions & { bigint: true } | undefined,
    maybe?: fs.StatOptions,
) {
    /* Need to test these variants:
     * - stat
     * - lstat
     * - fstat
     *
     * In these modes:
     * - callback
     * - sync
     * - promisify
     * - fs.promises
     *
     * With these opts:
     * - None => Stats
     * - Undefined => Stats
     * - { } => Stats
     * - { bigint: false } | undefined => Stats
     / - { bigint: true } => BigIntStats
     / - { bigint: true } | undefined => Stats | BigIntStats
     * - { bigint: boolean } (can't infer) | undefined => Stats | BigIntStats
     *
     * Which is 3 x 4 x 7 = 84 tests
     *
     * (fs.promises.fstat doesn't exist, but those 6 cases are in FileHandle.fstat)
     */

    // Callback mode
    fs.stat(path, (err, st: fs.Stats) => { });
    fs.lstat(path, (err, st: fs.Stats) => { });
    fs.fstat(fd, (err, st: fs.Stats) => { });

    fs.stat(path, undefined, (err, st: fs.Stats) => { });
    fs.lstat(path, undefined, (err, st: fs.Stats) => { });
    fs.fstat(fd, undefined, (err, st: fs.Stats) => { });

    fs.stat(path, {}, (err, st: fs.Stats) => { });
    fs.lstat(path, {}, (err, st: fs.Stats) => { });
    fs.fstat(fd, {}, (err, st: fs.Stats) => { });

    fs.stat(path, bigintMaybeFalse, (err, st: fs.Stats) => { });
    fs.lstat(path, bigintMaybeFalse, (err, st: fs.Stats) => { });
    fs.fstat(fd, bigintMaybeFalse, (err, st: fs.Stats) => { });

    fs.stat(path, { bigint: true }, (err, st: fs.BigIntStats) => { });
    fs.lstat(path, { bigint: true }, (err, st: fs.BigIntStats) => { });
    fs.fstat(fd, { bigint: true }, (err, st: fs.BigIntStats) => { });

    fs.stat(path, bigIntMaybeTrue, (err, st) => {
        st; // $ExpectType Stats | BigIntStats
    });
    fs.lstat(path, bigIntMaybeTrue, (err, st) => {
        st; // $ExpectType Stats | BigIntStats
    });
    fs.fstat(fd, bigIntMaybeTrue, (err, st) => {
        st; // $ExpectType Stats | BigIntStats
    });

    fs.stat(path, opts, (err, st) => {
        st; // $ExpectType Stats | BigIntStats
    });

    fs.lstat(path, opts, (err, st) => {
        st; // $ExpectType Stats | BigIntStats
    });

    fs.fstat(fd, opts, (err, st) => {
        st; // $ExpectType Stats | BigIntStats
    });

    // Sync mode
    fs.statSync(path); // $ExpectType Stats
    fs.lstatSync(path); // $ExpectType Stats
    fs.fstatSync(fd); // $ExpectType Stats

    fs.statSync(path, undefined); // $ExpectType Stats
    fs.lstatSync(path, undefined); // $ExpectType Stats
    fs.fstatSync(fd, undefined); // $ExpectType Stats

    fs.statSync(path, { throwIfNoEntry: false }); // $ExpectType Stats | undefined
    fs.lstatSync(path, { throwIfNoEntry: false }); // $ExpectType Stats | undefined

    fs.statSync(path, {}); // $ExpectType Stats
    fs.lstatSync(path, {}); // $ExpectType Stats
    fs.fstatSync(fd, {}); // $ExpectType Stats

    fs.statSync(path, bigintMaybeFalse); // $ExpectType Stats
    fs.lstatSync(path, bigintMaybeFalse); // $ExpectType Stats
    fs.fstatSync(fd, bigintMaybeFalse); // $ExpectType Stats

    fs.statSync(path, { bigint: true }); // $ExpectType BigIntStats
    fs.lstatSync(path, { bigint: true }); // $ExpectType BigIntStats
    fs.fstatSync(fd, { bigint: true }); // $ExpectType BigIntStats

    fs.statSync(path, { bigint: true, throwIfNoEntry: false }); // $ExpectType BigIntStats | undefined
    fs.lstatSync(path, { bigint: true, throwIfNoEntry: false }); // $ExpectType BigIntStats | undefined

    fs.statSync(path, bigIntMaybeTrue); // $ExpectType Stats | BigIntStats | undefined
    fs.lstatSync(path, bigIntMaybeTrue); // $ExpectType Stats | BigIntStats | undefined
    fs.fstatSync(fd, bigIntMaybeTrue); // $ExpectType Stats | BigIntStats

    fs.statSync(path, opts); // $ExpectType Stats | BigIntStats | undefined
    fs.lstatSync(path, opts); // $ExpectType Stats | BigIntStats | undefined
    fs.fstatSync(fd, opts); // $ExpectType Stats | BigIntStats

    // Promisify mode
    util.promisify(fs.stat)(path); // $ExpectType Promise<Stats>
    util.promisify(fs.lstat)(path); // $ExpectType Promise<Stats>
    util.promisify(fs.fstat)(fd); // $ExpectType Promise<Stats>

    util.promisify(fs.stat)(path, undefined); // $ExpectType Promise<Stats>
    util.promisify(fs.lstat)(path, undefined); // $ExpectType Promise<Stats>
    util.promisify(fs.fstat)(fd, undefined); // $ExpectType Promise<Stats>

    util.promisify(fs.stat)(path, {}); // $ExpectType Promise<Stats>
    util.promisify(fs.lstat)(path, {}); // $ExpectType Promise<Stats>
    util.promisify(fs.fstat)(fd, {}); // $ExpectType Promise<Stats>

    util.promisify(fs.stat)(path, bigintMaybeFalse); // $ExpectType Promise<Stats>
    util.promisify(fs.lstat)(path, bigintMaybeFalse); // $ExpectType Promise<Stats>
    util.promisify(fs.fstat)(fd, bigintMaybeFalse); // $ExpectType Promise<Stats>

    util.promisify(fs.stat)(path, { bigint: true }); // $ExpectType Promise<BigIntStats>
    util.promisify(fs.lstat)(path, { bigint: true }); // $ExpectType Promise<BigIntStats>
    util.promisify(fs.fstat)(fd, { bigint: true }); // $ExpectType Promise<BigIntStats>

    util.promisify(fs.stat)(path, bigIntMaybeTrue); // $ExpectType Promise<Stats | BigIntStats>
    util.promisify(fs.lstat)(path, bigIntMaybeTrue); // $ExpectType Promise<Stats | BigIntStats>
    util.promisify(fs.fstat)(fd, bigIntMaybeTrue); // $ExpectType Promise<Stats | BigIntStats>

    util.promisify(fs.stat)(path, opts); // $ExpectType Promise<Stats | BigIntStats>
    util.promisify(fs.lstat)(path, opts); // $ExpectType Promise<Stats | BigIntStats>
    util.promisify(fs.fstat)(fd, opts); // $ExpectType Promise<Stats | BigIntStats>

    // fs.promises mode
    const fh = await fs.promises.open(path, 'r');
    fs.promises.stat(path); // $ExpectType Promise<Stats>
    fs.promises.lstat(path); // $ExpectType Promise<Stats>
    fh.stat(); // $ExpectType Promise<Stats>

    fs.promises.stat(path, undefined); // $ExpectType Promise<Stats>
    fs.promises.lstat(path, undefined); // $ExpectType Promise<Stats>
    fh.stat(undefined); // $ExpectType Promise<Stats>

    fs.promises.stat(path, {}); // $ExpectType Promise<Stats>
    fs.promises.lstat(path, {}); // $ExpectType Promise<Stats>
    fh.stat({}); // $ExpectType Promise<Stats>

    fs.promises.stat(path, bigintMaybeFalse); // $ExpectType Promise<Stats>
    fs.promises.lstat(path, bigintMaybeFalse); // $ExpectType Promise<Stats>
    fh.stat(bigintMaybeFalse); // $ExpectType Promise<Stats>

    fs.promises.stat(path, { bigint: true }); // $ExpectType Promise<BigIntStats>
    fs.promises.lstat(path, { bigint: true }); // $ExpectType Promise<BigIntStats>
    fh.stat({ bigint: true }); // $ExpectType Promise<BigIntStats>

    fs.promises.stat(path, bigIntMaybeTrue); // $ExpectType Promise<Stats | BigIntStats>
    fs.promises.lstat(path, bigIntMaybeTrue); // $ExpectType Promise<Stats | BigIntStats>
    fh.stat(bigIntMaybeTrue); // $ExpectType Promise<Stats | BigIntStats>

    fs.promises.stat(path, opts); // $ExpectType Promise<Stats | BigIntStats>
    fs.promises.lstat(path, opts); // $ExpectType Promise<Stats | BigIntStats>
    fh.stat(opts); // $ExpectType Promise<Stats | BigIntStats>
}

const bigStats: fs.BigIntStats = fs.statSync('.', { bigint: true });
const bigIntStat: bigint = bigStats.atimeNs;
const anyStats: fs.Stats | fs.BigIntStats = fs.statSync('.', { bigint: Math.random() > 0.5 });

{
    watchAsync('y33t'); // $ExpectType AsyncIterable<FileChangeInfo<string>>
    watchAsync('y33t', 'buffer'); // $ExpectType AsyncIterable<FileChangeInfo<Buffer>>
    watchAsync('y33t', { encoding: 'buffer', signal: new AbortSignal() }); // $ExpectType AsyncIterable<FileChangeInfo<Buffer>>

    watchAsync('test', { persistent: true, recursive: true, encoding: 'utf-8' }); // $ExpectType AsyncIterable<FileChangeInfo<string>>
}

{
    const opts: CopyOptions = {
        dereference: false,
        errorOnExist: true,
        filter(src, dst) {
            return Promise.resolve(src !== 'node_modules' && dst !== 'something');
        },
        force: true,
        preserveTimestamps: true,
        recursive: false,
        verbatimSymlinks: false,
    };
    const optsSync: CopySyncOptions = {
        ...opts,
        filter(src, dst) {
            return src !== 'node_modules' && dst !== 'something';
        }
    };
    cp('src', 'dest', (err: Error | null) => {});
    cp('src', 'dest', opts, (err: Error | null) => {});
    cp(new URL(`file://${__dirname}`), new URL(`file://${__dirname}`), (err: Error | null) => {});
    cpSync('src', 'dest');
    cpSync('src', 'dest', optsSync);
    cpSync(new URL(`file://${__dirname}`), new URL(`file://${__dirname}`));
    cpAsync('src', 'dest'); // $ExpectType Promise<void>
    cpAsync('src', 'dest', opts); // $ExpectType Promise<void>
    cpAsync(new URL(`file://${__dirname}`), new URL(`file://${__dirname}`)); // $ExpectType Promise<void>
}

{
    fs.promises.open('/dev/input/event0').then(fd => {
        // Create a stream from some character device.
        const stream = fd.createReadStream(); // $ExpectType ReadStream
        stream.close();
        stream.push(null);
        stream.read(0);
    });
    fs.promises.open('/dev/input/event0', 'r').then(fd => {
        // Create a stream from some character device.
        const stream = fd.createReadStream(); // $ExpectType ReadStream
        stream.close();
        stream.push(null);
        stream.read(0);
    });
    fs.promises.open('/tmp/tmp.txt', 'w', 0o666).then(fd => {
        // Create a stream from some character device.
        const stream = fd.createWriteStream(); // $ExpectType WriteStream
        stream.close();
    });
}

// constants
async () => {
    await copyFile('source.txt', 'destination.txt', constants.COPYFILE_EXCL);
    await access('/etc/passwd', constants.R_OK | constants.W_OK);
};
