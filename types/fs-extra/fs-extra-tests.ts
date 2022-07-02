import * as fs from 'fs-extra';

const len = 2;
const src = '';
const dest = '';
const file = '';
const dir = '';
const path = '';
const data = '';
const uid = 0;
const gid = 0;
const fd = 0;
const modeNum = 0;
const modeStr = '';
const object = {};
const errorCallback = (err: Error) => {};
const noParamCallback: fs.NoParamCallback = err => {};
const ensureNum = 0o700;
const ensureObj: fs.EnsureOptions = {
    mode: 0o700,
};
const readOptions: fs.ReadOptions = {
    reviver: {},
};
const writeOptions: fs.WriteOptions = {
    replacer: {},
};

fs.moveSync(src, dest, {});
fs.move(src, dest, {}).then(() => {
    // stub
});
fs.move(src, dest).then(() => {
    // stub
});
fs.move(src, dest, {}, () => {
    // stub
});
fs.move(src, dest, () => {
    // stub
});

fs.copy(src, dest).then(() => {
    // stub
});
fs.copy(src, dest, { overwrite: true }).then(() => {
    // stub
});
fs.copy(src, dest, errorCallback);
fs.copy(src, dest, { filter: (src: string, dest: string) => false }, errorCallback);
fs.copy(
    src,
    dest,
    {
        overwrite: true,
        preserveTimestamps: true,
        filter: (src: string, dest: string) => Promise.resolve(false),
    },
    errorCallback,
);

fs.copySync(src, dest);
fs.copySync(src, dest, { filter: (src: string, dest: string) => false });
fs.copySync(src, dest, {
    overwrite: true,
    preserveTimestamps: true,
    filter: (src: string, dest: string) => false,
});

fs.createFile(file).then(() => {
    // stub
});
fs.createFile(file, errorCallback);
fs.createFileSync(file);

fs.mkdir(dir).then(() => {
    // stub
});
fs.mkdir(dir, errorCallback);
fs.mkdirSync(dir);
fs.mkdir(dir, modeNum).then(() => {
    // stub
});
fs.mkdir(dir, modeNum, errorCallback);
fs.mkdirSync(dir, modeNum);
fs.mkdir(dir, { mode: modeNum }).then(() => {
    // stub
});
fs.mkdir(dir, { mode: modeNum }, errorCallback);
fs.mkdirSync(dir, { mode: modeNum });

fs.mkdirs(dir).then(() => {
    // stub
});
fs.mkdirp(dir).then(() => {
    // stub
});
fs.mkdirs(dir, errorCallback);
fs.mkdirsSync(dir);
fs.mkdirp(dir, errorCallback);
fs.mkdirpSync(dir);

fs.outputFile(file, data).then(() => {
    // stub
});
fs.outputFile(file, data, 'utf-8').then(() => {
    // stub
});
fs.outputFile(file, data, { encoding: 'utf-8' }).then(() => {
    // stub
});
fs.outputFile(file, data, 'foo').then(() => {
    // stub
});
fs.outputFile(file, data, { encoding: 'foo' }).then(() => {
    // stub
});
fs.outputFile(file, data, errorCallback);
fs.outputFile(file, data, 'utf-8', errorCallback);
fs.outputFile(file, data, 'foo', errorCallback);
fs.outputFile(file, data, { encoding: 'utf-8' }, errorCallback);
fs.outputFile(file, data, { encoding: 'foo' }, errorCallback);
fs.outputFileSync(file, data);
fs.outputFileSync(file, data, 'utf-8');
fs.outputFileSync(file, data, 'foo');
fs.outputFileSync(file, data, { encoding: 'utf-8' });
fs.outputFileSync(file, data, { encoding: 'foo' });

fs.outputJson(file, data, {
    spaces: 2,
}).then(() => {
    // stub
});
fs.outputJson(file, data, {
    encoding: 'utf-8',
    spaces: 2,
}).then(() => {
    // stub
});
fs.outputJson(file, data, 'utf-8').then(() => {
    // stub
});
fs.outputJson(
    file,
    data,
    {
        spaces: 2,
    },
    errorCallback,
);
fs.outputJson(
    file,
    data,
    {
        encoding: 'utf-8',
        spaces: 2,
    },
    errorCallback,
);
fs.outputJson(file, data, 'utf-8', errorCallback);
fs.outputJSON(file, data, errorCallback);
fs.outputJSON(file, data).then(() => {
    // stub
});

fs.outputJsonSync(file, data);
fs.outputJSONSync(file, data);
fs.outputJsonSync(file, data, 'utf-8');
fs.outputJSONSync(file, data, 'utf-8');
fs.outputJsonSync(file, data, { encoding: 'utf-8' });
fs.outputJSONSync(file, data, { encoding: 'utf-8' });

fs.readJson(file).then(() => {
    // stub
});
fs.readJson(file, 'utf-8').then(() => {
    // stub
});

fs.readJson(file, readOptions).then(() => {
    // stub
});
fs.readJson(file, { encoding: 'utf-8' }).then(() => {
    // stub
});
fs.readJson(file, (error: Error, jsonObject: any) => {});
fs.readJson(file, readOptions, (error: Error, jsonObject: any) => {});
fs.readJson(file, 'utf-8', (error: Error, jsonObject: any) => {});
fs.readJson(file, { encoding: 'utf-8' }, (error: Error, jsonObject: any) => {});
fs.readJSON(file, (error: Error, jsonObject: any) => {});
fs.readJSON(file, readOptions, (error: Error, jsonObject: any) => {});
fs.readJSON(file, 'utf-8', (error: Error, jsonObject: any) => {});
fs.readJSON(file, { encoding: 'utf-8' }, (error: Error, jsonObject: any) => {});

fs.readJsonSync(file, readOptions);
fs.readJSONSync(file, readOptions);
fs.readJsonSync(file, 'utf-8');
fs.readJSONSync(file, 'utf-8');
fs.readJsonSync(file, { encoding: 'utf-8' });
fs.readJSONSync(file, { encoding: 'utf-8' });

fs.remove(dir, errorCallback);
fs.remove(dir).then(() => {
    // stub
});
// @ts-expect-error map can't be called as it passes a number for the second argument instead of a callback.
['file/to/remove'].map(fs.remove);

// @ts-expect-error promise should not be returned when callback is provided.
// tslint:disable-next-line:no-void-expression
fs.remove(dir, errorCallback).then(() => {
    // stub
});
fs.removeSync(dir);

fs.writeJson(file, object).then(() => {
    // stub
});
fs.writeJSON(file, object).then(() => {
    // stub
});
fs.writeJson(file, object, errorCallback);
fs.writeJson(file, object, writeOptions, errorCallback);
fs.writeJson(file, object, 'utf-8', errorCallback);
fs.writeJson(file, object, { encoding: 'utf-8' }, errorCallback);
fs.writeJSON(file, object, errorCallback);
fs.writeJSON(file, object, writeOptions, errorCallback);
fs.writeJSON(file, object, 'utf-8', errorCallback);
fs.writeJSON(file, object, { encoding: 'utf-8' }, errorCallback);
fs.writeJson(file, object, writeOptions).then(() => {
    // stub
});
fs.writeJson(file, object, writeOptions).then(() => {
    // stub
});
fs.writeJson(file, object, 'utf-8').then(() => {
    // stub
});
fs.writeJson(file, object, { encoding: 'utf-8' }).then(() => {
    // stub
});
fs.writeJSON(file, object, writeOptions).then(() => {
    // stub
});
fs.writeJSON(file, object, 'utf-8').then(() => {
    // stub
});
fs.writeJSON(file, object, { encoding: 'utf-8' }).then(() => {
    // stub
});
fs.writeJsonSync(file, object, writeOptions);
fs.writeJsonSync(file, object, 'utf-8');
fs.writeJsonSync(file, object, { encoding: 'utf-8' });
fs.writeJSONSync(file, object, writeOptions);
fs.writeJSONSync(file, object, 'utf-8');
fs.writeJSONSync(file, object, { encoding: 'utf-8' });

fs.ensureDir(path).then(() => {
    // stub
});
fs.ensureDir(path, ensureObj).then(() => {
    // stub
});
fs.ensureDir(path, ensureNum).then(() => {
    // stub
});
fs.ensureDir(path, ensureObj, errorCallback);
fs.ensureDir(path, ensureNum, errorCallback);
fs.ensureDir(path, errorCallback);
fs.ensureDirSync(path);
fs.ensureDirSync(path, ensureObj);
fs.ensureDirSync(path, ensureNum);

fs.ensureFile(path).then(() => {
    // stub
});
fs.ensureFile(path, errorCallback);
fs.ensureFileSync(path);
fs.ensureLink(path, path).then(() => {
    // stub
});
fs.ensureLink(path, path, errorCallback);
fs.createLink(path, path).then(() => {
    // stub
});
fs.createLink(path, path, errorCallback);
fs.ensureLinkSync(path, path);
fs.createLinkSync(path, path);
fs.ensureSymlink(path, path, 'file').then(() => {
    // stub
});
fs.ensureSymlink(path, path, 'junction').then(() => {
    // stub
});
fs.ensureSymlink(path, path, errorCallback);
fs.ensureSymlinkSync(path, path);
fs.emptyDir(path).then(() => {
    // stub
});
fs.emptyDir(path, errorCallback);
fs.emptydir(path, errorCallback);
fs.emptydir(path).then(() => {});
fs.emptyDirSync(path);
fs.emptydirSync(path);
fs.pathExists(path).then((_exist: boolean) => {
    // stub
});
fs.pathExists(path, (_err: Error, _exists: boolean) => {});
const x: boolean = fs.pathExistsSync(path);

fs.rename(src, dest, errorCallback);
fs.renameSync(src, dest);
fs.truncate(path, len, errorCallback);
fs.truncateSync(path, len);
fs.chown(path, uid, gid, errorCallback);
fs.chownSync(path, uid, gid);
fs.fchown(fd, uid, gid, errorCallback);
fs.fchownSync(fd, uid, gid);
fs.lchown(path, uid, gid, errorCallback);
fs.lchownSync(path, uid, gid);
fs.chmod(path, modeNum, errorCallback);
fs.chmod(path, modeStr, errorCallback);
fs.chmodSync(path, modeNum);
fs.chmodSync(path, modeStr);
fs.fchmod(fd, modeNum, errorCallback);
fs.fchmod(fd, modeStr, errorCallback);
fs.fchmodSync(fd, modeNum);
fs.fchmodSync(fd, modeStr);
fs.lchmod(path, modeStr, noParamCallback);
fs.lchmod(path, modeNum, noParamCallback);
fs.lchmodSync(path, modeNum);
fs.lchmodSync(path, modeStr);
fs.statSync(path);
fs.lstatSync(path);

fs.read(0, Buffer.from(''), 0, 0, null).then(x => {
    const a = x.buffer;
    const b = x.bytesRead;
});

fs.write(0, Buffer.from(''), 0, 0, null).then(x => {
    const a = x.buffer;
    const b = x.bytesWritten;
});
fs.write(0, Buffer.from('')).then(x => {
    const a = x.buffer;
    const b = x.bytesWritten;
});

const writevTest = async (buffs: NodeJS.ArrayBufferView[], position: number) => {
    await fs.writev(fd, buffs); // $ExpectType WritevResult
    await fs.writev(fd, buffs, position); // $ExpectType WritevResult
};

// $ExpectType Promise<void>
fs.writeFile('foo.txt', 'i am foo', 'utf-8');
// $ExpectType Promise<void>
fs.writeFile('foo.txt', 'i am foo', { encoding: 'utf-8' });

// $ExpectType Promise<string>
fs.mkdtemp('foo');

fs.copyFile('src', 'dest').then();
fs.copyFile('src', 'dest', fs.constants.COPYFILE_EXCL).then();
fs.copyFile('src', 'dest', errorCallback);

fs.createSymlink('src', 'dest', 'dir').then();
fs.createSymlink('src', 'dest', 'file').then();
fs.createSymlink('src', 'dest', 'junction', errorCallback);

const openDirTest = async (path: string, opts: fs.OpenDirOptions) => {
    await fs.opendir(path); // $ExpectType Dir
    await fs.opendir(path, opts); // $ExpectType Dir
};

fs.readdir('src').then((files: string[]) => {});
fs.readdir('src', 'buffer').then((files: Buffer[]) => {});
fs.readdir('src', { encoding: 'buffer' }).then((files: Buffer[]) => {});
fs.readdir('src', { withFileTypes: true }).then((files: fs.Dirent[]) => {});
fs.readdir('src', 'utf-8').then((files: string[]) => {});
fs.readdir('src', { encoding: 'utf-8' }).then((files: string[]) => {});
fs.readdir('src', 'foo').then((files: string[]) => {});
fs.readdir('src', { encoding: 'foo' }).then((files: string[]) => {});

// $ExpectType void
fs.realpath('src', (err, resolved) => {
    // $ExpectType string
    resolved;
});
// $ExpectType Promise<string>
fs.realpath.native('src');
// $ExpectType Promise<string>
fs.realpath.native('src', 'utf-8');
// $ExpectType Promise<Buffer>
fs.realpath.native('src', 'buffer');
// $ExpectType Promise<string>
fs.realpath.native('src', 'foo');
// $ExpectType Promise<string>
fs.realpath.native('src', { encoding: 'utf-8' });
// $ExpectType Promise<Buffer>
fs.realpath.native('src', { encoding: 'buffer' });
// $ExpectType Promise<string>
fs.realpath.native('src', { encoding: 'foo' });
// $ExpectType Promise<string>
fs.realpath.native('src', { encoding: null });

async function rmTest() {
    // $ExpectType void
    await fs.rm('path');
    // $ExpectType void
    await fs.rm('path', {
        force: true,
        maxRetries: 1,
        recursive: true,
        retryDelay: 200,
    });
}

async function rmDirTest() {
    // $ExpectType void
    await fs.rmdir('dir');
    // $ExpectType void
    await fs.rmdir('dir', { maxRetries: 1, retryDelay: 200 });
}
