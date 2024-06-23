import * as fs from "fs-extra";

// test type exports
type Types =
    | fs.PathLike
    | fs.NoParamCallback
    | fs.NoParamCallbackWithUndefined
    | fs.SymlinkType
    | fs.CopyFilterSync
    | fs.CopyFilterAsync
    | fs.CopyOptions
    | fs.CopyOptionsSync
    | fs.EnsureDirOptions
    | fs.MoveOptions
    | fs.JsonReadOptions
    | fs.JsonWriteOptions
    | fs.JsonOutputOptions;

const len = 2;
const src = "";
const dest = "";
const file = "";
const dir = "";
const path = "";
const data = "";
const prefix = "";
const uid = 0;
const gid = 0;
const fd = 0;
const object = {};

fs.move(src, dest); // $ExpectType Promise<void>
fs.move(src, dest, { overwrite: true }); // $ExpectType Promise<void>
fs.move(src, dest, { dereference: true }); // $ExpectType Promise<void>
// $ExpectType void
fs.move(src, dest, err => {
    err; // $ExpectType ErrnoException | null | undefined
});
// $ExpectType void
fs.move(src, dest, { overwrite: true }, err => {
    err; // $ExpectType ErrnoException | null | undefined
});
// $ExpectType void
fs.move(src, dest, { dereference: true }, err => {
    err; // $ExpectType ErrnoException | null | undefined
});
fs.moveSync(src, dest); // $ExpectType void
fs.moveSync(src, dest, { overwrite: true }); // $ExpectType void
fs.moveSync(src, dest, { dereference: true }); // $ExpectType void

fs.copy(src, dest); // $ExpectType Promise<void>
fs.copy(src, dest, { overwrite: true }); // $ExpectType Promise<void>
// $ExpectType void
fs.copy(src, dest, err => {
    err; // $ExpectType ErrnoException | null | undefined
});
// $ExpectType void
fs.copy(
    src,
    dest,
    {
        filter(src, dest) {
            src; // $ExpectType string
            dest; // $ExpectType string
            return false;
        },
    },
    err => {
        err; // $ExpectType ErrnoException | null | undefined
    },
);
// $ExpectType void
fs.copy(
    src,
    dest,
    {
        overwrite: true,
        preserveTimestamps: true,
        filter(src, dest) {
            src; // $ExpectType string
            dest; // $ExpectType string
            return Promise.resolve(false);
        },
    },
    err => {
        err; // $ExpectType ErrnoException | null | undefined
    },
);

fs.copySync(src, dest); // $ExpectType void
// $ExpectType void
fs.copySync(src, dest, {
    filter(src, dest) {
        src; // $ExpectType string
        dest; // $ExpectType string
        return false;
    },
});
// $ExpectType void
fs.copySync(src, dest, {
    overwrite: true,
    preserveTimestamps: true,
    filter(src, dest) {
        src; // $ExpectType string
        dest; // $ExpectType string
        return false;
    },
});

fs.createFile(file); // $ExpectType Promise<void>
// $ExpectType void
fs.createFile(file, err => {
    err; // $ExpectType ErrnoException | null | undefined
});
fs.createFileSync(file); // $ExpectType void
fs.ensureFile(path); // $ExpectType Promise<void>
// $ExpectType void
fs.ensureFile(path, err => {
    err; // $ExpectType ErrnoException | null | undefined
});
fs.ensureFileSync(path); // $ExpectType void

fs.createLink(path, path); // $ExpectType Promise<void>
// $ExpectType void
fs.createLink(path, path, err => {
    err; // $ExpectType ErrnoException | null
});
fs.ensureLink(path, path); // $ExpectType Promise<void>
// $ExpectType void
fs.ensureLink(path, path, err => {
    err; // $ExpectType ErrnoException | null
});
fs.createLinkSync(path, path); // $ExpectType void
fs.ensureLinkSync(path, path); // $ExpectType void

fs.createSymlink(path, path); // $ExpectType Promise<void>
fs.createSymlink(path, path, "dir"); // $ExpectType Promise<void>
fs.createSymlink(path, path, "file"); // $ExpectType Promise<void>
fs.ensureSymlink(path, path); // $ExpectType Promise<void>
fs.ensureSymlink(path, path, "dir"); // $ExpectType Promise<void>
fs.ensureSymlink(path, path, "file"); // $ExpectType Promise<void>
// $ExpectType void
fs.createSymlink(path, path, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.ensureSymlink(path, path, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.createSymlink(path, path, "junction", err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.ensureSymlink(path, path, "junction", err => {
    err; // $ExpectType ErrnoException | null
});
fs.createSymlinkSync(path, path); // $ExpectType void
fs.ensureSymlinkSync(path, path); // $ExpectType void

fs.mkdirs(dir); // $ExpectType Promise<void>
fs.mkdirs(dir, 0o777); // $ExpectType Promise<void>
fs.mkdirs(dir, { mode: 0o700 }); // $ExpectType Promise<void>
fs.mkdirp(dir); // $ExpectType Promise<void>
fs.mkdirp(dir, 0o777); // $ExpectType Promise<void>
fs.mkdirp(dir, { mode: 0o700 }); // $ExpectType Promise<void>
fs.ensureDir(dir); // $ExpectType Promise<void>
fs.ensureDir(dir, 0o777); // $ExpectType Promise<void>
fs.ensureDir(dir, { mode: 0o700 }); // $ExpectType Promise<void>
// $ExpectType void
fs.mkdirs(dir, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.mkdirs(dir, 0o777, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.mkdirs(dir, { mode: 0o700 }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.mkdirp(dir, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.mkdirp(dir, 0o777, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.mkdirp(dir, { mode: 0o700 }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.ensureDir(dir, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.ensureDir(dir, 0o777, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.ensureDir(dir, { mode: 0o700 }, err => {
    err; // $ExpectType ErrnoException | null
});

fs.mkdirsSync(dir); // $ExpectType void
fs.mkdirsSync(dir, 0o777); // $ExpectType void
fs.mkdirsSync(dir, { mode: 0o700 }); // $ExpectType void
fs.mkdirpSync(dir); // $ExpectType void
fs.mkdirpSync(dir, 0o777); // $ExpectType void
fs.mkdirpSync(dir, { mode: 0o700 }); // $ExpectType void
fs.ensureDirSync(dir); // $ExpectType void
fs.ensureDirSync(dir, 0o777); // $ExpectType void
fs.ensureDirSync(dir, { mode: 0o700 }); // $ExpectType void

fs.outputFile(file, data); // $ExpectType Promise<void>
fs.outputFile(file, data, "utf-8"); // $ExpectType Promise<void>
fs.outputFile(file, data, { encoding: "utf-8" }); // $ExpectType Promise<void>
// @ts-expect-error
fs.outputFile(file, data, { encoding: "foo" });
// $ExpectType void
fs.outputFile(file, data, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.outputFile(file, data, "utf-8", err => {
    err; // $ExpectType ErrnoException | null
});
// @ts-expect-error
fs.outputFile(file, data, "foo", errorCallback);
// $ExpectType void
fs.outputFile(file, data, { encoding: "utf-8" }, err => {
    err; // $ExpectType ErrnoException | null
});
// @ts-expect-error
fs.outputFile(file, data, { encoding: "foo" }, errorCallback);
fs.outputFileSync(file, data); // $ExpectType void
fs.outputFileSync(file, data, "utf-8"); // $ExpectType void
// @ts-expect-error
fs.outputFileSync(file, data, "foo");
fs.outputFileSync(file, data, { encoding: "utf-8" }); // $ExpectType void
// @ts-expect-error
fs.outputFileSync(file, data, { encoding: "foo" });

fs.outputJson(file, data); // $ExpectType Promise<void>
fs.outputJson(file, data, { spaces: 2 }); // $ExpectType Promise<void>
fs.outputJson(file, data, { encoding: "utf-8", spaces: 2 }); // $ExpectType Promise<void>
fs.outputJson(file, data, "utf-8"); // $ExpectType Promise<void>
// $ExpectType void
fs.outputJson(
    file,
    data,
    {
        spaces: 2,
    },
    err => {
        err; // $ExpectType ErrnoException | null
    },
);
// $ExpectType void
fs.outputJson(
    file,
    data,
    {
        encoding: "utf-8",
        spaces: 2,
    },
    err => {
        err; // $ExpectType ErrnoException | null
    },
);
// $ExpectType void
fs.outputJson(file, data, "utf-8", err => {
    err; // $ExpectType ErrnoException | null
});

fs.outputJSON(file, data); // $ExpectType Promise<void>
fs.outputJSON(file, data, { spaces: 2 }); // $ExpectType Promise<void>
fs.outputJSON(file, data, { encoding: "utf-8", spaces: 2 }); // $ExpectType Promise<void>
fs.outputJSON(file, data, "utf-8"); // $ExpectType Promise<void>
// $ExpectType void
fs.outputJSON(
    file,
    data,
    {
        spaces: 2,
    },
    err => {
        err; // $ExpectType ErrnoException | null
    },
);
// $ExpectType void
fs.outputJSON(
    file,
    data,
    {
        encoding: "utf-8",
        spaces: 2,
    },
    err => {
        err; // $ExpectType ErrnoException | null
    },
);
// $ExpectType void
fs.outputJSON(file, data, err => {
    err; // $ExpectType ErrnoException | null
});

fs.outputJsonSync(file, data); // $ExpectType void
fs.outputJSONSync(file, data); // $ExpectType void
fs.outputJsonSync(file, data, "utf-8"); // $ExpectType void
fs.outputJSONSync(file, data, "utf-8"); // $ExpectType void
fs.outputJsonSync(file, data, { encoding: "utf-8" }); // $ExpectType void
fs.outputJSONSync(file, data, { encoding: "utf-8" }); // $ExpectType void

fs.readJson(file); // $ExpectType Promise<any>
fs.readJson(file, "utf-8"); // $ExpectType Promise<any>
// $ExpectType Promise<any>
fs.readJson(file, {
    reviver(key, value) {
        key; // $ExpectType any
        value; // $ExpectType any
    },
});
fs.readJson(file, { encoding: "utf-8" }); // $ExpectType Promise<any>
fs.readJSON(file); // $ExpectType Promise<any>
fs.readJSON(file, "utf-8"); // $ExpectType Promise<any>
// $ExpectType Promise<any>
fs.readJSON(file, {
    reviver(key, value) {
        key; // $ExpectType any
        value; // $ExpectType any
    },
});
fs.readJSON(file, { encoding: "utf-8" }); // $ExpectType Promise<any>
// $ExpectType void
fs.readJson(file, (error, jsonObject) => {
    error; // $ExpectType ErrnoException | null
    jsonObject; // $ExpectType any
});
// $ExpectType void
fs.readJson(
    file,
    {
        reviver(key, value) {
            key; // $ExpectType any
            value; // $ExpectType any
        },
    },
    (error, jsonObject) => {
        error; // $ExpectType ErrnoException | null
        jsonObject; // $ExpectType any
    },
);
// $ExpectType void
fs.readJson(file, "utf-8", (error, jsonObject) => {
    error; // $ExpectType ErrnoException | null
    jsonObject; // $ExpectType any
});
// $ExpectType void
fs.readJson(file, { encoding: "utf-8" }, (error, jsonObject) => {
    error; // $ExpectType ErrnoException | null
    jsonObject; // $ExpectType any
});
// $ExpectType void
fs.readJSON(file, (error, jsonObject) => {
    error; // $ExpectType ErrnoException | null
    jsonObject; // $ExpectType any
});
// $ExpectType void
fs.readJSON(
    file,
    {
        reviver(key, value) {
            key; // $ExpectType any
            value; // $ExpectType any
        },
    },
    (error, jsonObject) => {
        error; // $ExpectType ErrnoException | null
        jsonObject; // $ExpectType any
    },
);
// $ExpectType void
fs.readJSON(file, "utf-8", (error, jsonObject) => {
    error; // $ExpectType ErrnoException | null
    jsonObject; // $ExpectType any
});
// $ExpectType void
fs.readJSON(file, { encoding: "utf-8" }, (error, jsonObject) => {
    error; // $ExpectType ErrnoException | null
    jsonObject; // $ExpectType any
});

// $ExpectType any
fs.readJsonSync(file, {
    reviver(key, value) {
        key; // $ExpectType any
        value; // $ExpectType any
    },
});
// $ExpectType any
fs.readJSONSync(file, {
    reviver(key, value) {
        key; // $ExpectType any
        value; // $ExpectType any
    },
});
fs.readJsonSync(file, "utf-8"); // $ExpectType any
fs.readJSONSync(file, "utf-8"); // $ExpectType any
fs.readJsonSync(file, { encoding: "utf-8" }); // $ExpectType any
fs.readJSONSync(file, { encoding: "utf-8" }); // $ExpectType any

fs.writeJson(file, object); // $ExpectType Promise<void>
fs.writeJSON(file, object); // $ExpectType Promise<void>
// $ExpectType void
fs.writeJson(file, object, error => {
    error; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.writeJson(
    file,
    object,
    {
        replacer(key, value) {
            key; // $ExpectType string
            value; // $ExpectType any
        },
    },
    error => {
        error; // $ExpectType ErrnoException | null
    },
);
// $ExpectType void
fs.writeJson(file, object, "utf-8", error => {
    error; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.writeJson(file, object, { encoding: "utf-8" }, error => {
    error; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.writeJSON(file, object, error => {
    error; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.writeJSON(
    file,
    object,
    {
        replacer(key, value) {
            key; // $ExpectType string
            value; // $ExpectType any
        },
    },
    error => {
        error; // $ExpectType ErrnoException | null
    },
);
// $ExpectType void
fs.writeJSON(file, object, "utf-8", error => {
    error; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.writeJSON(file, object, { encoding: "utf-8" }, error => {
    error; // $ExpectType ErrnoException | null
});
// $ExpectType Promise<void>
fs.writeJson(file, object, {
    replacer(key, value) {
        key; // $ExpectType string
        value; // $ExpectType any
    },
});
fs.writeJson(file, object, "utf-8"); // $ExpectType Promise<void>
fs.writeJson(file, object, { encoding: "utf-8" }); // $ExpectType Promise<void>
// $ExpectType Promise<void>
fs.writeJSON(file, object, {
    replacer(key, value) {
        key; // $ExpectType string
        value; // $ExpectType any
    },
});
fs.writeJSON(file, object, "utf-8"); // $ExpectType Promise<void>
fs.writeJSON(file, object, { encoding: "utf-8" }); // $ExpectType Promise<void>

// $ExpectType void
fs.writeJsonSync(file, object, {
    replacer(key, value) {
        key; // $ExpectType string
        value; // $ExpectType any
    },
});
fs.writeJsonSync(file, object, "utf-8"); // $ExpectType void
fs.writeJsonSync(file, object, { encoding: "utf-8" }); // $ExpectType void
// $ExpectType void
fs.writeJSONSync(file, object, {
    replacer(key, value) {
        key; // $ExpectType string
        value; // $ExpectType any
    },
});
fs.writeJSONSync(file, object, "utf-8"); // $ExpectType void
fs.writeJSONSync(file, object, { encoding: "utf-8" }); // $ExpectType void

// $ExpectType void
fs.remove(dir, error => {
    error; // $ExpectType ErrnoException | null
});
fs.remove(dir); // $ExpectType Promise<void>
["file/to/remove"].map(file => fs.remove(file));
fs.removeSync(dir); // $ExpectType void

fs.emptyDir(path); // $ExpectType Promise<void>
fs.emptydir(path); // $ExpectType Promise<void>
// $ExpectType void
fs.emptyDir(path, error => {
    error; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.emptydir(path, error => {
    error; // $ExpectType ErrnoException | null
});
fs.emptyDirSync(path); // $ExpectType void
fs.emptydirSync(path); // $ExpectType void

fs.pathExists(path); // $ExpectType Promise<boolean>
// $ExpectType void
fs.pathExists(path, (err, exists) => {
    err; // $ExpectType ErrnoException | null
    exists; // $ExpectType boolean
});
fs.pathExistsSync(path); // $ExpectType boolean

fs.access(path); // $ExpectType Promise<void>
fs.access(path, 0o777); // $ExpectType Promise<void>
// $ExpectType void
fs.access(path, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.access(path, 0o777, err => {
    err; // $ExpectType ErrnoException | null
});

fs.appendFile(path, "foo"); // $ExpectType Promise<void>
fs.appendFile(path, new Uint8Array(10)); // $ExpectType Promise<void>
fs.appendFile(path, "foo", { encoding: "utf-8" }); // $ExpectType Promise<void>
fs.appendFile(path, "foo", { flag: "r" }); // $ExpectType Promise<void>
fs.appendFile(path, "foo", { mode: 0o777 }); // $ExpectType Promise<void>
fs.appendFile(path, "foo", { signal: new AbortController().signal }); // $ExpectType Promise<void>
// $ExpectType void
fs.appendFile(path, "foo", err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.appendFile(path, new Uint8Array(10), err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.appendFile(path, "foo", { encoding: "utf-8" }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.appendFile(path, "foo", { flag: "r" }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.appendFile(path, "foo", { mode: 0o777 }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.appendFile(path, "foo", { signal: new AbortController().signal }, err => {
    err; // $ExpectType ErrnoException | null
});

fs.chmod(path, 0o777); // $ExpectType Promise<void>
fs.chmod(path, "777"); // $ExpectType Promise<void>
// $ExpectType void
fs.chmod(path, 0o777, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.chmod(path, "777", err => {
    err; // $ExpectType ErrnoException | null
});
fs.chmodSync(path, 0o777); // $ExpectType void
fs.chmodSync(path, "777"); // $ExpectType void

fs.chown(path, uid, gid); // $ExpectType Promise<void>
// $ExpectType void
fs.chown(path, uid, gid, err => {
    err; // $ExpectType ErrnoException | null
});
fs.chownSync(path, uid, gid); // $ExpectType void

fs.close(fd); // $ExpectType Promise<void>
// $ExpectType void
fs.close(fd, err => {
    err; // $ExpectType ErrnoException | null
});

fs.copyFile(src, dest); // $ExpectType Promise<void>
fs.copyFile(src, dest, fs.constants.COPYFILE_EXCL); // $ExpectType Promise<void>
// $ExpectType void
fs.copyFile(src, dest, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.copyFile(src, dest, fs.constants.COPYFILE_EXCL, err => {
    err; // $ExpectType ErrnoException | null
});

fs.exists(path); // $ExpectType Promise<boolean>
// $ExpectType void
fs.exists(path, exists => {
    exists; // $ExpectType boolean
});

fs.fchmod(fd, 0o777); // $ExpectType Promise<void>
fs.fchmod(fd, "777"); // $ExpectType Promise<void>
// $ExpectType void
fs.fchmod(fd, 0o777, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.fchmod(fd, "777", err => {
    err; // $ExpectType ErrnoException | null
});
fs.fchmodSync(fd, 0o777); // $ExpectType void
fs.fchmodSync(fd, "777"); // $ExpectType void

fs.fchown(fd, uid, gid); // $ExpectType Promise<void>
// $ExpectType void
fs.fchown(fd, uid, gid, err => {
    err; // $ExpectType ErrnoException | null
});
fs.fchownSync(fd, uid, gid); // $ExpectType void

fs.fdatasync(fd); // $ExpectType Promise<void>
// $ExpectType void
fs.fdatasync(fd, err => {
    err; // $ExpectType ErrnoException | null
});

fs.fstat(fd); // $ExpectType Promise<Stats>
fs.fstat(fd, { bigint: false }); // $ExpectType Promise<Stats>
fs.fstat(fd, { bigint: true }); // $ExpectType Promise<BigIntStats>
// $ExpectType void
fs.fstat(fd, (err, stats) => {
    err; // $ExpectType ErrnoException | null
    stats; // $ExpectType Stats
});
// $ExpectType void
fs.fstat(fd, { bigint: false }, (err, stats) => {
    err; // $ExpectType ErrnoException | null
    stats; // $ExpectType Stats
});
// $ExpectType void
fs.fstat(fd, { bigint: true }, (err, stats) => {
    err; // $ExpectType ErrnoException | null
    stats; // $ExpectType BigIntStats
});

fs.fsync(fd); // $ExpectType Promise<void>
// $ExpectType void
fs.fsync(fd, err => {
    err; // $ExpectType ErrnoException | null
});

fs.ftruncate(fd); // $ExpectType Promise<void>
fs.ftruncate(fd, len); // $ExpectType Promise<void>
// $ExpectType void
fs.ftruncate(fd, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.ftruncate(fd, len, err => {
    err; // $ExpectType ErrnoException | null
});

fs.futimes(fd, new Date(), new Date()); // $ExpectType Promise<void>
fs.futimes(fd, new Date().toUTCString(), new Date().toUTCString()); // $ExpectType Promise<void>
fs.futimes(fd, Date.now(), Date.now()); // $ExpectType Promise<void>
// $ExpectType void
fs.futimes(fd, new Date(), new Date(), err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.futimes(fd, new Date().toUTCString(), new Date().toUTCString(), err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.futimes(fd, Date.now(), Date.now(), err => {
    err; // $ExpectType ErrnoException | null
});

fs.lchmod(path, 0o777); // $ExpectType Promise<void>
fs.lchmod(path, "777"); // $ExpectType Promise<void>
// $ExpectType void
fs.lchmod(path, 0o777, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.lchmod(path, "777", err => {
    err; // $ExpectType ErrnoException | null
});
fs.lchmodSync(path, 0o777); // $ExpectType void
fs.lchmodSync(path, "777"); // $ExpectType void

fs.lchown(path, uid, gid); // $ExpectType Promise<void>
// $ExpectType void
fs.lchown(path, uid, gid, err => {
    err; // $ExpectType ErrnoException | null
});
fs.lchownSync(path, uid, gid); // $ExpectType void

fs.link(path, path); // $ExpectType Promise<void>
// $ExpectType void
fs.link(path, path, err => {
    err; // $ExpectType ErrnoException | null
});

fs.lstat(path); // $ExpectType Promise<Stats>
// $ExpectType void
fs.lstat(path, (err, stats) => {
    err; // $ExpectType ErrnoException | null
    stats; // $ExpectType Stats
});
fs.lstatSync(path); // $ExpectType Stats

fs.mkdir(dir); // $ExpectType Promise<void>
fs.mkdir(dir, 0o777); // $ExpectType Promise<void>
fs.mkdir(dir, { mode: 0o777 }); // $ExpectType Promise<void>
fs.mkdir(dir, { recursive: false }); // $ExpectType Promise<void>
fs.mkdir(dir, { recursive: true }); // $ExpectType Promise<string | undefined>
// $ExpectType void
fs.mkdir(dir, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.mkdir(dir, 0o777, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.mkdir(dir, { mode: 0o777 }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.mkdir(dir, { recursive: false }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.mkdir(dir, { recursive: true }, (err, path) => {
    err; // $ExpectType ErrnoException | null
    path; // $ExpectType string | undefined
});
fs.mkdirSync(dir); // $ExpectType void
fs.mkdirSync(dir, 0o777); // $ExpectType void
fs.mkdirSync(dir, { mode: 0o777 }); // $ExpectType void
fs.mkdirSync(dir, { recursive: false }); // $ExpectType void
fs.mkdirSync(dir, { recursive: true }); // $ExpectType string | undefined

fs.mkdtemp(prefix); // $ExpectType Promise<string>
// $ExpectType void
fs.mkdtemp(prefix, (err, dir) => {
    err; // $ExpectType ErrnoException | null
    dir; // $ExpectType string
});
fs.mkdtemp("foo"); // $ExpectType Promise<string>

fs.open(path, "r"); // $ExpectType Promise<number>
fs.open(path, fs.constants.O_RDONLY); // $ExpectType Promise<number>
fs.open(path, "r", 0o777); // $ExpectType Promise<number>
fs.open(path, fs.constants.O_RDONLY, 0o777); // $ExpectType Promise<number>
fs.open(path, "r", "777"); // $ExpectType Promise<number>
fs.open(path, fs.constants.O_RDONLY, "777"); // $ExpectType Promise<number>
// $ExpectType void
fs.open(path, (err, fd) => {
    err; // $ExpectType ErrnoException | null
    fd; // $ExpectType number
});
// $ExpectType void
fs.open(path, "r", (err, fd) => {
    err; // $ExpectType ErrnoException | null
    fd; // $ExpectType number
});
// $ExpectType void
fs.open(path, fs.constants.O_RDONLY, (err, fd) => {
    err; // $ExpectType ErrnoException | null
    fd; // $ExpectType number
});
// $ExpectType void
fs.open(path, "r", 0o777, (err, fd) => {
    err; // $ExpectType ErrnoException | null
    fd; // $ExpectType number
});
// $ExpectType void
fs.open(path, fs.constants.O_RDONLY, 0o777, (err, fd) => {
    err; // $ExpectType ErrnoException | null
    fd; // $ExpectType number
});
// $ExpectType void
fs.open(path, "r", "777", (err, fd) => {
    err; // $ExpectType ErrnoException | null
    fd; // $ExpectType number
});
// $ExpectType void
fs.open(path, fs.constants.O_RDONLY, "777", (err, fd) => {
    err; // $ExpectType ErrnoException | null
    fd; // $ExpectType number
});

fs.opendir(path); // $ExpectType Promise<Dir>
fs.opendir(path, { bufferSize: 1 }); // $ExpectType Promise<Dir>
fs.opendir(path, { encoding: "utf-8" }); // $ExpectType Promise<Dir>
// $ExpectType void
fs.opendir(path, (err, dir) => {
    err; // $ExpectType ErrnoException | null
    dir; // $ExpectType Dir
});
// $ExpectType void
fs.opendir(path, { bufferSize: 1 }, (err, dir) => {
    err; // $ExpectType ErrnoException | null
    dir; // $ExpectType Dir
});
// $ExpectType void
fs.opendir(path, { encoding: "utf-8" }, (err, dir) => {
    err; // $ExpectType ErrnoException | null
    dir; // $ExpectType Dir
});

fs.readdir(path); // $ExpectType Promise<string[]>
fs.readdir(path, "utf-8"); // $ExpectType Promise<string[]>
fs.readdir(path, "buffer"); // $ExpectType Promise<Buffer[]>
fs.readdir(path, { encoding: "buffer" }); // $ExpectType Promise<Buffer[]>
fs.readdir(path, { encoding: "utf-8" }); // $ExpectType Promise<string[]>
fs.readdir(path, { withFileTypes: true }); // $ExpectType Promise<Dirent[]>
// $ExpectType void
fs.readdir(path, (err, files) => {
    err; // $ExpectType ErrnoException | null
    files; // $ExpectType string[]
});
// $ExpectType void
fs.readdir(path, "utf-8", (err, files) => {
    err; // $ExpectType ErrnoException | null
    files; // $ExpectType string[]
});
// $ExpectType void
fs.readdir(path, "buffer", (err, files) => {
    err; // $ExpectType ErrnoException | null
    files; // $ExpectType Buffer[]
});
// $ExpectType void
fs.readdir(path, { encoding: "buffer" }, (err, files) => {
    err; // $ExpectType ErrnoException | null
    files; // $ExpectType Buffer[]
});
// $ExpectType void
fs.readdir(path, { encoding: "utf-8" }, (err, files) => {
    err; // $ExpectType ErrnoException | null
    files; // $ExpectType string[]
});
// $ExpectType void
fs.readdir(path, { withFileTypes: true }, (err, files) => {
    err; // $ExpectType ErrnoException | null
    files; // $ExpectType Dirent[]
});

fs.readFile(path); // $ExpectType Promise<Buffer>
fs.readFile(path, "utf-8"); // $ExpectType Promise<string>
fs.readFile(path, { encoding: "utf-8" }); // $ExpectType Promise<string>
fs.readFile(path, { flag: "r" }); // $ExpectType Promise<Buffer>
// $ExpectType void
fs.readFile(path, (err, data) => {
    err; // $ExpectType ErrnoException | null
    data; // $ExpectType Buffer
});
// $ExpectType void
fs.readFile(path, "utf-8", (err, data) => {
    err; // $ExpectType ErrnoException | null
    data; // $ExpectType string
});
// $ExpectType void
fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
    err; // $ExpectType ErrnoException | null
    data; // $ExpectType string
});
// $ExpectType void
fs.readFile(path, { flag: "r" }, (err, data) => {
    err; // $ExpectType ErrnoException | null
    data; // $ExpectType Buffer
});
// $ExpectType void
fs.readFile(path, { signal: new AbortController().signal }, (err, data) => {
    err; // $ExpectType ErrnoException | null
    data; // $ExpectType Buffer
});

fs.readlink(path); // $ExpectType Promise<string>
fs.readlink(path, "utf-8"); // $ExpectType Promise<string>
fs.readlink(path, "buffer"); // $ExpectType Promise<Buffer>
fs.readlink(path, { encoding: "utf-8" }); // $ExpectType Promise<string>
fs.readlink(path, { encoding: "buffer" }); // $ExpectType Promise<Buffer>
// $ExpectType void
fs.readlink(path, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.readlink(path, "utf-8", (err, data) => {
    err; // $ExpectType ErrnoException | null
    data; // $ExpectType string
});
// $ExpectType void
fs.readlink(path, "buffer", (err, data) => {
    err; // $ExpectType ErrnoException | null
    data; // $ExpectType Buffer
});
// $ExpectType void
fs.readlink(path, { encoding: "utf-8" }, (err, data) => {
    err; // $ExpectType ErrnoException | null
    data; // $ExpectType string
});
// $ExpectType void
fs.readlink(path, { encoding: "buffer" }, (err, data) => {
    err; // $ExpectType ErrnoException | null
    data; // $ExpectType Buffer
});

fs.realpath(path); // $ExpectType Promise<string>
fs.realpath(path, "utf-8"); // $ExpectType Promise<string>
fs.realpath(path, "buffer"); // $ExpectType Promise<Buffer>
fs.realpath(path, { encoding: "utf-8" }); // $ExpectType Promise<string>
fs.realpath(path, { encoding: "buffer" }); // $ExpectType Promise<Buffer>
fs.realpath(path, { encoding: null }); // $ExpectType Promise<string>
// $ExpectType void
fs.realpath(path, (err, resolved) => {
    err; // $ExpectType ErrnoException | null
    resolved; // $ExpectType string
});
// $ExpectType void
fs.realpath(path, "utf-8", (err, resolved) => {
    err; // $ExpectType ErrnoException | null
    resolved; // $ExpectType string
});
// $ExpectType void
fs.realpath(path, "buffer", (err, resolved) => {
    err; // $ExpectType ErrnoException | null
    resolved; // $ExpectType Buffer
});
// $ExpectType void
fs.realpath(path, { encoding: "utf-8" }, (err, resolved) => {
    err; // $ExpectType ErrnoException | null
    resolved; // $ExpectType string
});
// $ExpectType void
fs.realpath(path, { encoding: "buffer" }, (err, resolved) => {
    err; // $ExpectType ErrnoException | null
    resolved; // $ExpectType Buffer
});
// $ExpectType void
fs.realpath(path, { encoding: null }, (err, resolved) => {
    err; // $ExpectType ErrnoException | null
    resolved; // $ExpectType string
});
fs.realpath.native(path); // $ExpectType Promise<string>
fs.realpath.native(path, "utf-8"); // $ExpectType Promise<string>
fs.realpath.native(path, "buffer"); // $ExpectType Promise<Buffer>
fs.realpath.native(path, { encoding: "utf-8" }); // $ExpectType Promise<string>
fs.realpath.native(path, { encoding: "buffer" }); // $ExpectType Promise<Buffer>
fs.realpath.native(path, { encoding: null }); // $ExpectType Promise<string>
// $ExpectType void
fs.realpath.native(path, (err, resolved) => {
    err; // $ExpectType ErrnoException | null
    resolved; // $ExpectType string
});
// $ExpectType void
fs.realpath.native(path, "utf-8", (err, resolved) => {
    err; // $ExpectType ErrnoException | null
    resolved; // $ExpectType string
});
// $ExpectType void
fs.realpath.native(path, "buffer", (err, resolved) => {
    err; // $ExpectType ErrnoException | null
    resolved; // $ExpectType Buffer
});
// $ExpectType void
fs.realpath.native(path, { encoding: "utf-8" }, (err, resolved) => {
    err; // $ExpectType ErrnoException | null
    resolved; // $ExpectType string
});
// $ExpectType void
fs.realpath.native(path, { encoding: "buffer" }, (err, resolved) => {
    err; // $ExpectType ErrnoException | null
    resolved; // $ExpectType Buffer
});
// $ExpectType void
fs.realpath.native(path, { encoding: null }, (err, resolved) => {
    err; // $ExpectType ErrnoException | null
    resolved; // $ExpectType string
});

fs.rename(src, dest); // $ExpectType Promise<void>
// $ExpectType void
fs.rename(src, dest, err => {
    err; // $ExpectType ErrnoException | null
});
fs.renameSync(src, dest); // $ExpectType void

fs.rm(path); // $ExpectType Promise<void>
fs.rm(path, { force: true }); // $ExpectType Promise<void>
fs.rm(path, { maxRetries: 1 }); // $ExpectType Promise<void>
fs.rm(path, { recursive: true }); // $ExpectType Promise<void>
fs.rm(path, { retryDelay: 200 }); // $ExpectType Promise<void>
// $ExpectType void
fs.rm(path, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.rm(path, { force: true }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.rm(path, { maxRetries: 1 }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.rm(path, { recursive: true }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.rm(path, { retryDelay: 200 }, err => {
    err; // $ExpectType ErrnoException | null
});

fs.rmdir(dir); // $ExpectType Promise<void>
fs.rmdir(dir, { maxRetries: 1 }); // $ExpectType Promise<void>
fs.rmdir(dir, { retryDelay: 200 }); // $ExpectType Promise<void>
// $ExpectType void
fs.rmdir(dir, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.rmdir(dir, { maxRetries: 1 }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.rmdir(dir, { retryDelay: 200 }, err => {
    err; // $ExpectType ErrnoException | null
});

fs.stat(path); // $ExpectType Promise<Stats>
fs.stat(path, { bigint: false }); // $ExpectType Promise<Stats>
fs.stat(path, { bigint: true }); // $ExpectType Promise<BigIntStats>
// $ExpectType void
fs.stat(path, (err, stats) => {
    err; // $ExpectType ErrnoException | null
    stats; // $ExpectType Stats
});
// $ExpectType void
fs.stat(path, { bigint: false }, (err, stats) => {
    err; // $ExpectType ErrnoException | null
    stats; // $ExpectType Stats
});
// $ExpectType void
fs.stat(path, { bigint: true }, (err, stats) => {
    err; // $ExpectType ErrnoException | null
    stats; // $ExpectType BigIntStats
});
fs.statSync(path); // $ExpectType Stats

fs.symlink(path, path); // $ExpectType Promise<void>
fs.symlink(path, path, "dir"); // $ExpectType Promise<void>
fs.symlink(path, path, "file"); // $ExpectType Promise<void>
fs.symlink(path, path, "junction"); // $ExpectType Promise<void>
// $ExpectType void
fs.symlink(path, path, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.symlink(path, path, "dir", err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.symlink(path, path, "file", err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.symlink(path, path, "junction", err => {
    err; // $ExpectType ErrnoException | null
});

fs.truncate(path); // $ExpectType Promise<void>
fs.truncate(path, len); // $ExpectType Promise<void>
// $ExpectType void
fs.truncate(path, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.truncate(path, len, err => {
    err; // $ExpectType ErrnoException | null
});
fs.truncateSync(path, len); // $ExpectType void

fs.unlink(path); // $ExpectType Promise<void>
// $ExpectType void
fs.unlink(path, err => {
    err; // $ExpectType ErrnoException | null
});

fs.utimes(path, new Date(), new Date()); // $ExpectType Promise<void>
fs.utimes(path, new Date().toUTCString(), new Date().toUTCString()); // $ExpectType Promise<void>
fs.utimes(path, Date.now(), Date.now()); // $ExpectType Promise<void>
// $ExpectType void
fs.utimes(path, new Date(), new Date(), err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.utimes(path, new Date().toUTCString(), new Date().toUTCString(), err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.utimes(path, Date.now(), Date.now(), err => {
    err; // $ExpectType ErrnoException | null
});

fs.writeFile(path, "i am foo", "utf-8"); // $ExpectType Promise<void>
fs.writeFile(path, "i am foo", { encoding: "utf-8" }); // $ExpectType Promise<void>
fs.writeFile(path, "i am foo", { flag: "rw" }); // $ExpectType Promise<void>
fs.writeFile(path, "i am foo", { mode: 0o777 }); // $ExpectType Promise<void>
fs.writeFile(path, "i am foo", { signal: new AbortController().signal }); // $ExpectType Promise<void>
fs.writeFile(path, Buffer.from("i am foo"), "utf-8"); // $ExpectType Promise<void>
fs.writeFile(path, Buffer.from("i am foo"), { encoding: "utf-8" }); // $ExpectType Promise<void>
fs.writeFile(path, Buffer.from("i am foo"), { flag: "rw" }); // $ExpectType Promise<void>
fs.writeFile(path, Buffer.from("i am foo"), { mode: 0o777 }); // $ExpectType Promise<void>
fs.writeFile(path, Buffer.from("i am foo"), { signal: new AbortController().signal }); // $ExpectType Promise<void>
// $ExpectType void
fs.writeFile(path, "i am foo", "utf-8", err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.writeFile(path, "i am foo", { encoding: "utf-8" }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.writeFile(path, "i am foo", { flag: "rw" }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.writeFile(path, "i am foo", { mode: 0o777 }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.writeFile(path, "i am foo", { signal: new AbortController().signal }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.writeFile(path, Buffer.from("i am foo"), "utf-8", err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.writeFile(path, Buffer.from("i am foo"), { encoding: "utf-8" }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.writeFile(path, Buffer.from("i am foo"), { flag: "rw" }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.writeFile(path, Buffer.from("i am foo"), { mode: 0o777 }, err => {
    err; // $ExpectType ErrnoException | null
});
// $ExpectType void
fs.writeFile(path, Buffer.from("i am foo"), { signal: new AbortController().signal }, err => {
    err; // $ExpectType ErrnoException | null
});

fs.read(fd); // $ExpectType Promise<{ bytesRead: number; buffer: ArrayBufferView; }>
fs.read(fd, { offset: 1 }); // $ExpectType Promise<{ bytesRead: number; buffer: ArrayBufferView; }>
fs.read(fd, { length: 10 }); // $ExpectType Promise<{ bytesRead: number; buffer: ArrayBufferView; }>
fs.read(fd, { position: 1 }); // $ExpectType Promise<{ bytesRead: number; buffer: ArrayBufferView; }>
fs.read(fd, { position: BigInt(1) }); // $ExpectType Promise<{ bytesRead: number; buffer: ArrayBufferView; }>
fs.read(fd, { buffer: Buffer.alloc(10) }); // $ExpectType Promise<{ bytesRead: number; buffer: Buffer; }>
fs.read(0, Buffer.from(""), 0, 0, null); // $ExpectType Promise<{ bytesRead: number; buffer: Buffer; }>
// $ExpectType void
fs.read(fd, (err, bytesRead, buffer) => {
    err; // $ExpectType ErrnoException | null
    bytesRead; // $ExpectType number
    buffer; // $ExpectType ArrayBufferView
});
// $ExpectType void
fs.read(fd, { offset: 1 }, (err, bytesRead, buffer) => {
    err; // $ExpectType ErrnoException | null
    bytesRead; // $ExpectType number
    buffer; // $ExpectType ArrayBufferView
});
// $ExpectType void
fs.read(fd, { length: 10 }, (err, bytesRead, buffer) => {
    err; // $ExpectType ErrnoException | null
    bytesRead; // $ExpectType number
    buffer; // $ExpectType ArrayBufferView
});
// $ExpectType void
fs.read(fd, { position: 1 }, (err, bytesRead, buffer) => {
    err; // $ExpectType ErrnoException | null
    bytesRead; // $ExpectType number
    buffer; // $ExpectType ArrayBufferView
});
// $ExpectType void
fs.read(fd, { position: BigInt(1) }, (err, bytesRead, buffer) => {
    err; // $ExpectType ErrnoException | null
    bytesRead; // $ExpectType number
    buffer; // $ExpectType ArrayBufferView
});
// $ExpectType void
fs.read(fd, { buffer: Buffer.alloc(10) }, (err, bytesRead, buffer) => {
    err; // $ExpectType ErrnoException | null
    bytesRead; // $ExpectType number
    buffer; // $ExpectType Buffer
});
// $ExpectType void
fs.read(fd, Buffer.from(""), 0, 0, null, (err, bytesRead, buffer) => {
    err; // $ExpectType ErrnoException | null
    bytesRead; // $ExpectType number
    buffer; // $ExpectType Buffer
});

fs.readv(fd, [Buffer.alloc(10)] as const); // $ExpectType Promise<ReadVResult>
fs.readv(fd, [Buffer.alloc(10)] as const, 1); // $ExpectType Promise<ReadVResult>
// $ExpectType void
fs.readv(fd, [Buffer.alloc(10)] as const, (err, bytesRead, buffers) => {
    err; // $ExpectType ErrnoException | null
    bytesRead; // $ExpectType number
    buffers; // $ExpectType ArrayBufferView[]
});
// $ExpectType void
fs.readv(fd, [Buffer.alloc(10)] as const, 1, (err, bytesRead, buffers) => {
    err; // $ExpectType ErrnoException | null
    bytesRead; // $ExpectType number
    buffers; // $ExpectType ArrayBufferView[]
});

fs.write(fd, "foo"); // $ExpectType Promise<{ bytesWritten: number; buffer: string; }>
fs.write(fd, "foo", 0); // $ExpectType Promise<{ bytesWritten: number; buffer: string; }>
fs.write(fd, "foo", 0, "utf-8"); // $ExpectType Promise<{ bytesWritten: number; buffer: string; }>
fs.write(fd, Buffer.from("foo")); // $ExpectType Promise<{ bytesWritten: number; buffer: Buffer; }>
fs.write(fd, Buffer.from("foo"), 0); // $ExpectType Promise<{ bytesWritten: number; buffer: Buffer; }>
fs.write(fd, Buffer.from("foo"), 0, 0); // $ExpectType Promise<{ bytesWritten: number; buffer: Buffer; }>
fs.write(fd, Buffer.from("foo"), 0, 0, 1); // $ExpectType Promise<{ bytesWritten: number; buffer: Buffer; }>
// $ExpectType void
fs.write(fd, "foo", (err, written, buffer) => {
    err; // $ExpectType ErrnoException | null
    written; // $ExpectType number
    buffer; // $ExpectType string
});
// $ExpectType void
fs.write(fd, "foo", 0, (err, written, buffer) => {
    err; // $ExpectType ErrnoException | null
    written; // $ExpectType number
    buffer; // $ExpectType string
});
// $ExpectType void
fs.write(fd, "foo", 0, "utf-8", (err, written, buffer) => {
    err; // $ExpectType ErrnoException | null
    written; // $ExpectType number
    buffer; // $ExpectType string
});
// $ExpectType void
fs.write(fd, Buffer.from("foo"), (err, written, buffer) => {
    err; // $ExpectType ErrnoException | null
    written; // $ExpectType number
    buffer; // $ExpectType Buffer
});
// $ExpectType void
fs.write(fd, Buffer.from("foo"), 0, (err, written, buffer) => {
    err; // $ExpectType ErrnoException | null
    written; // $ExpectType number
    buffer; // $ExpectType Buffer
});
// $ExpectType void
fs.write(fd, Buffer.from("foo"), 0, 0, (err, written, buffer) => {
    err; // $ExpectType ErrnoException | null
    written; // $ExpectType number
    buffer; // $ExpectType Buffer
});
// $ExpectType void
fs.write(fd, Buffer.from("foo"), 0, 0, 1, (err, written, buffer) => {
    err; // $ExpectType ErrnoException | null
    written; // $ExpectType number
    buffer; // $ExpectType Buffer
});

fs.writev(fd, [Buffer.alloc(10)] as const); // $ExpectType Promise<WriteVResult>
fs.writev(fd, [Buffer.alloc(10)] as const, 1); // $ExpectType Promise<WriteVResult>
// $ExpectType void
fs.writev(fd, [Buffer.alloc(10)] as const, (err, bytesWritten, buffers) => {
    err; // $ExpectType ErrnoException | null
    bytesWritten; // $ExpectType number
    buffers; // $ExpectType ArrayBufferView[]
});
// $ExpectType void
fs.writev(fd, [Buffer.alloc(10)] as const, 1, (err, bytesWritten, buffers) => {
    err; // $ExpectType ErrnoException | null
    bytesWritten; // $ExpectType number
    buffers; // $ExpectType ArrayBufferView[]
});
