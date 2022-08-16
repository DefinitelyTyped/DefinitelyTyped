import * as fs from 'node:fs';
import assert = require('node:assert');
import * as util from 'node:util';
import * as url from 'node:url';
import { access, constants, copyFile } from 'node:fs/promises';

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
    fs.readFile('testfile', { encoding: 'utf8' }, (err, data) => content = data);
    // @ts-expect-error
    fs.readFile('testfile', { encoding: 'invalid encoding' }, (err, data) => content = data);
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
    fs.read(1, new DataView(new ArrayBuffer(1)), 0, 1, 0, (err: NodeJS.ErrnoException | null, bytesRead: number, buffer: DataView) => {});
}

{
    fs.readSync(1, new DataView(new ArrayBuffer(1)), 0, 1, 0);
    fs.readSync(1, Buffer.from(''), {
        length: 123,
        offset: 456,
        position: null,
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
    fs.readdirSync('path', { });

    fs.readdir('path', { withFileTypes: true }, (err: NodeJS.ErrnoException | null, files: fs.Dirent[]) => {});
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
    let s = '123';
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
}

{
    let s = '123';
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
        await fs.promises.rmdir('some/test/path', { recursive: true, maxRetries: 123, retryDelay: 123 });
    } catch (e) {}

    try {
        await fs.promises.rmdir('some/test/file');
        await fs.promises.rmdir('some/test/file', { recursive: true, maxRetries: 123, retryDelay: 123 });
    } catch (e) {}
})();

{
    fs.open('test', (err, fd) => {});
    fs.open('test', 'r', (err, fd) => {});
    fs.open('test', undefined, (err, fd) => {});
    fs.open('test', 'r', 0o666, (err, fd) => {});
    fs.open('test', 'r', undefined, (err, fd) => {});
}

async () => {
    await fs.promises.open('test');
    await fs.promises.open('test', 'r');
    await fs.promises.open('test', undefined);
    await fs.promises.open('test', 'r', 0o666);
    await fs.promises.open('test', 'r', undefined);
};

{
    fs.opendir('test', async (err, dir) => {
        const dirEnt: fs.Dirent | null = await dir.read();
    });

    fs.opendir(Buffer.from('test'), async (err, dir) => {
        const dirEnt: fs.Dirent | null = await dir.read();
    });

    fs.opendir(new url.URL(`file://${__dirname}`), async (err, dir) => {
        const dirEnt: fs.Dirent | null = await dir.read();
    });

    const dir: fs.Dir = fs.opendirSync('test', {
        encoding: 'utf8',
    });

    const dirBuffer: fs.Dir = fs.opendirSync(Buffer.from('test'), {
        encoding: 'utf8',
    });

    const dirUrl: fs.Dir = fs.opendirSync(new url.URL(`file://${__dirname}`), {
        encoding: 'utf8',
    });

    // Pending lib upgrade
    // (async () => {
    //     for await (const thing of dir) {
    //     }
    // });

    const dirEntProm: Promise<fs.Dir> = fs.promises.opendir('test', {
        encoding: 'utf8',
        bufferSize: 42,
    });

    const dirEntBufferProm: Promise<fs.Dir> = fs.promises.opendir(Buffer.from('test'), {
        encoding: 'utf8',
        bufferSize: 42,
    });

    const dirEntURLProm: Promise<fs.Dir> = fs.promises.opendir(new url.URL(`file://${__dirname}`), {
        encoding: 'utf8',
        bufferSize: 42,
    });
}

{
    const writeStream = fs.createWriteStream('./index.d.ts');
    const _wom = writeStream.writableObjectMode; // $ExpectType boolean

    const readStream = fs.createReadStream('./index.d.ts');
    const _rom = readStream.readableObjectMode; // $ExpectType boolean
}

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
  maybeFalse: fs.StatOptions & { bigint: false } | undefined,
  maybeTrue: fs.StatOptions & { bigint: true } | undefined,
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
    fs.stat(path, (err, st: fs.Stats) => {});
    fs.lstat(path, (err, st: fs.Stats) => {});
    fs.fstat(fd, (err, st: fs.Stats) => {});

    fs.stat(path, undefined, (err, st: fs.Stats) => {});
    fs.lstat(path, undefined, (err, st: fs.Stats) => {});
    fs.fstat(fd, undefined, (err, st: fs.Stats) => {});

    fs.stat(path, {}, (err, st: fs.Stats) => {});
    fs.lstat(path, {}, (err, st: fs.Stats) => {});
    fs.fstat(fd, {}, (err, st: fs.Stats) => {});

    fs.stat(path, maybeFalse, (err, st: fs.Stats) => {});
    fs.lstat(path, maybeFalse, (err, st: fs.Stats) => {});
    fs.fstat(fd, maybeFalse, (err, st: fs.Stats) => {});

    fs.stat(path, { bigint: true }, (err, st: fs.BigIntStats) => {});
    fs.lstat(path, { bigint: true }, (err, st: fs.BigIntStats) => {});
    fs.fstat(fd, { bigint: true }, (err, st: fs.BigIntStats) => {});

    fs.stat(path, maybeTrue, (err, st) => {
        st; // $ExpectType Stats | BigIntStats
    });
    fs.lstat(path, maybeTrue, (err, st) => {
        st; // $ExpectType Stats | BigIntStats
    });
    fs.fstat(fd, maybeTrue, (err, st) => {
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

    fs.statSync(path, {}); // $ExpectType Stats
    fs.lstatSync(path, {}); // $ExpectType Stats
    fs.fstatSync(fd, {}); // $ExpectType Stats

    fs.statSync(path, maybeFalse); // $ExpectType Stats
    fs.lstatSync(path, maybeFalse); // $ExpectType Stats
    fs.fstatSync(fd, maybeFalse); // $ExpectType Stats

    fs.statSync(path, { bigint: true }); // $ExpectType BigIntStats
    fs.lstatSync(path, { bigint: true }); // $ExpectType BigIntStats
    fs.fstatSync(fd, { bigint: true }); // $ExpectType BigIntStats

    fs.statSync(path, maybeTrue); // $ExpectType Stats | BigIntStats
    fs.lstatSync(path, maybeTrue); // $ExpectType Stats | BigIntStats
    fs.fstatSync(fd, maybeTrue); // $ExpectType Stats | BigIntStats

    fs.statSync(path, opts); // $ExpectType Stats | BigIntStats
    fs.lstatSync(path, opts); // $ExpectType Stats | BigIntStats
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

    util.promisify(fs.stat)(path, maybeFalse); // $ExpectType Promise<Stats>
    util.promisify(fs.lstat)(path, maybeFalse); // $ExpectType Promise<Stats>
    util.promisify(fs.fstat)(fd, maybeFalse); // $ExpectType Promise<Stats>

    util.promisify(fs.stat)(path, { bigint: true }); // $ExpectType Promise<BigIntStats>
    util.promisify(fs.lstat)(path, { bigint: true }); // $ExpectType Promise<BigIntStats>
    util.promisify(fs.fstat)(fd, { bigint: true }); // $ExpectType Promise<BigIntStats>

    util.promisify(fs.stat)(path, maybeTrue); // $ExpectType Promise<Stats | BigIntStats>
    util.promisify(fs.lstat)(path, maybeTrue); // $ExpectType Promise<Stats | BigIntStats>
    util.promisify(fs.fstat)(fd, maybeTrue); // $ExpectType Promise<Stats | BigIntStats>

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

    fs.promises.stat(path, maybeFalse); // $ExpectType Promise<Stats>
    fs.promises.lstat(path, maybeFalse); // $ExpectType Promise<Stats>
    fh.stat(maybeFalse); // $ExpectType Promise<Stats>

    fs.promises.stat(path, { bigint: true }); // $ExpectType Promise<BigIntStats>
    fs.promises.lstat(path, { bigint: true }); // $ExpectType Promise<BigIntStats>
    fh.stat({ bigint: true }); // $ExpectType Promise<BigIntStats>

    fs.promises.stat(path, maybeTrue); // $ExpectType Promise<Stats | BigIntStats>
    fs.promises.lstat(path, maybeTrue); // $ExpectType Promise<Stats | BigIntStats>
    fh.stat(maybeTrue); // $ExpectType Promise<Stats | BigIntStats>

    fs.promises.stat(path, opts); // $ExpectType Promise<Stats | BigIntStats>
    fs.promises.lstat(path, opts); // $ExpectType Promise<Stats | BigIntStats>
    fh.stat(opts); // $ExpectType Promise<Stats | BigIntStats>
}

// constants
async () => {
    await copyFile('source.txt', 'destination.txt', constants.COPYFILE_EXCL);
    await access('/etc/passwd', constants.R_OK | constants.W_OK);
};
