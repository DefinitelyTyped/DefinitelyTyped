import * as fs from 'fs';
import assert = require('assert');
import * as util from 'util';

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
    fs.read(1, new DataView(new ArrayBuffer(1)), 0, 1, 0, (err: NodeJS.ErrnoException | null, bytesRead: number, buffer: DataView) => {});
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

{
    let names: Promise<string[]>;
    let buffers: Promise<Buffer[]>;
    let namesOrBuffers: Promise<string[] | Buffer[]>;
    let entries: Promise<fs.Dirent[]>;

    names = fs.promises.readdir('/path/to/dir', { encoding: 'utf8', withFileTypes: false });
    buffers = fs.promises.readdir('/path/to/dir', { encoding: 'buffer', withFileTypes: false });
    namesOrBuffers = fs.promises.readdir('/path/to/dir', { encoding: 'SOME OTHER', withFileTypes: false });
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
        await fs.promises.rmdir('some/test/path', { recursive: true });
    } catch (e) {}
})();

{
    fs.opendir('test', async (err, dir) => {
        const dirEnt: fs.Dirent | null = await dir.read();
    });

    const dir: fs.Dir = fs.opendirSync('test', {
        encoding: 'utf8',
    });

    // Pending lib upgrade
    // (async () => {
    //     for await (const thing of dir) {
    //     }
    // });

    const dirEntProm: Promise<fs.Dir> = fs.promises.opendir('test', {
        encoding: 'utf8',
    });
}
