import * as fs from "fs-extra/esm.mjs";

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

const src = "";
const dest = "";
const file = "";
const dir = "";
const path = "";
const data = "";
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
