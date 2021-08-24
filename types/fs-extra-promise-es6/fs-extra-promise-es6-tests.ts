import fs = require('fs-extra-promise-es6');
import stream = require('stream');

let stats: fs.Stats;
let str: string;
let strArr: string[];
let bool: boolean;
let num: number;
declare const src: string;
declare const dest: string;
declare const file: string;
declare const filename: string;
declare const dir: string;
declare const path: string;
declare const data: any;
declare const object: any;
let buffer: Buffer;
declare const modeNum: number;
declare const modeStr: string;
declare const encoding: string;
declare const symlinkType: "file" | "dir" | "junction";
declare const flags: string;
declare const srcpath: string;
declare const dstpath: string;
declare const oldPath: string;
declare const newPath: string;
declare const cache: string;
declare const offset: number;
declare const length: number;
declare const position: number;
declare const cacheBool: boolean;
declare const cacheStr: string;
declare const fd: number;
declare const len: number;
declare const uid: number;
declare const gid: number;
declare const atime: number;
declare const mtime: number;
declare const statsCallback: (err: Error, stats: fs.Stats) => void;
declare const errorCallback: (err: Error) => void;
declare const openOpts: fs.OpenOptions;
let watcher: fs.FSWatcher;
let readStream: stream.Readable;
let writeStream: stream.Writable;
let isDirectory: boolean;

fs.copy(src, dest, errorCallback);
fs.copy(src, dest, (src: string) => {
    return false;
}, errorCallback);
fs.copySync(src, dest);
fs.copySync(src, dest, (src: string) => {
    return false;
});
fs.createFile(file, errorCallback);
fs.createFileSync(file);

fs.mkdirs(dir, errorCallback);
fs.mkdirsSync(dir);
fs.mkdirp(dir, errorCallback);
fs.mkdirpSync(dir);

fs.outputFile(file, data, errorCallback);
fs.outputFileSync(file, data);
fs.outputJson(file, data, errorCallback);
fs.outputJSON(file, data, errorCallback);

fs.outputJsonSync(file, data);
fs.outputJSONSync(file, data);

fs.readJson(file, errorCallback);
fs.readJson(file, openOpts, errorCallback);
fs.readJSON(file, errorCallback);
fs.readJSON(file, openOpts, errorCallback);

fs.readJsonSync(file, openOpts);
fs.readJSONSync(file, openOpts);

fs.remove(dir, errorCallback);
fs.removeSync(dir);

fs.writeJson(file, object, errorCallback);
fs.writeJson(file, object, openOpts, errorCallback);
fs.writeJSON(file, object, errorCallback);
fs.writeJSON(file, object, openOpts, errorCallback);

fs.writeJsonSync(file, object, openOpts);
fs.writeJSONSync(file, object, openOpts);

fs.rename(oldPath, newPath, errorCallback);
fs.renameSync(oldPath, newPath);
fs.truncate(fd, len, errorCallback);
fs.truncateSync(fd, len);
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
fs.lchmod(path, modeStr, errorCallback);
fs.lchmod(path, modeNum, errorCallback);
fs.lchmodSync(path, modeNum);
fs.lchmodSync(path, modeStr);
fs.stat(path, statsCallback);
fs.lstat(path, statsCallback);
fs.fstat(fd, statsCallback);
stats = fs.statSync(path);
stats = fs.lstatSync(path);
stats = fs.fstatSync(fd);
fs.link(srcpath, dstpath, errorCallback);
fs.linkSync(srcpath, dstpath);
fs.symlink(srcpath, dstpath, symlinkType, errorCallback);
fs.symlinkSync(srcpath, dstpath, symlinkType);
fs.readlink(path, (err: Error, linkString: string) => {
});
fs.realpath(path, (err: Error, resolvedPath: string) => {
});
fs.realpath(path, cache, (err: Error, resolvedPath: string) => {
});
str = fs.realpathSync(path, cacheBool);
fs.unlink(path, errorCallback);
fs.unlinkSync(path);
fs.rmdir(path, errorCallback);
fs.rmdirSync(path);
fs.mkdir(path, modeNum, errorCallback);
fs.mkdir(path, modeStr, errorCallback);
fs.mkdirSync(path, modeNum);
fs.mkdirSync(path, modeStr);
fs.readdir(path, (err: Error, files: string[]) => {
});
strArr = fs.readdirSync(path);
fs.close(fd, errorCallback);
fs.closeSync(fd);
fs.open(path, flags, modeStr, (err: Error, fd: number) => {
});
num = fs.openSync(path, flags, modeStr);
fs.utimes(path, atime, mtime, errorCallback);
fs.utimesSync(path, atime, mtime);
fs.futimes(fd, atime, mtime, errorCallback);
fs.futimesSync(fd, atime, mtime);
fs.fsync(fd, errorCallback);
fs.fsyncSync(fd);
fs.write(fd, buffer, offset, length, position, (err: Error, written: number, buffer: Buffer) => {
});
num = fs.writeSync(fd, buffer, offset, length, position);
fs.read(fd, buffer, offset, length, position, (err: Error, bytesRead: number, buffer: Buffer) => {
});
num = fs.readSync(fd, buffer, offset, length, position);
fs.readFile(filename, (err: Error, data: Buffer) => {
});
fs.readFile(filename, encoding, (err: Error, data: string) => {
});
fs.readFile(filename, openOpts, (err: Error, data: string) => {
});
fs.readFile(filename, (err: Error, data: Buffer) => {
});
buffer = fs.readFileSync(filename);
str = fs.readFileSync(filename, encoding);
str = fs.readFileSync(filename, openOpts);

fs.writeFile(filename, data, errorCallback);
fs.writeFile(filename, data, encoding, errorCallback);
fs.writeFile(filename, data, openOpts, errorCallback);
fs.writeFileSync(filename, data);
fs.writeFileSync(filename, data, encoding);
fs.writeFileSync(filename, data, openOpts);

fs.appendFile(filename, data, errorCallback);
fs.appendFile(filename, data, encoding, errorCallback);
fs.appendFile(filename, data, openOpts, errorCallback);
fs.appendFileSync(filename, data);
fs.appendFileSync(filename, data, encoding);
fs.appendFileSync(filename, data, openOpts);

fs.watchFile(filename, {
    curr: stats,
    prev: stats
});
fs.watchFile(filename, {
    persistent: bool,
    interval: num
}, {
    curr: stats,
    prev: stats
});
fs.unwatchFile(filename);
watcher = fs.watch(filename, { persistent: bool }, (event: string, filename: string) => {
});
fs.exists(path, (exists: boolean) => {
});
bool = fs.existsSync(path);

readStream = fs.createReadStream(path);
readStream = fs.createReadStream(path, {
    flags: str,
    encoding: str,
    fd: num,
    mode: num
});
writeStream = fs.createWriteStream(path);
writeStream = fs.createWriteStream(path, {
    flags: str,
    encoding: str
});

function isDirectoryCallback(err: Error, isDirectory: boolean) {}
fs.isDirectory(path, isDirectoryCallback);
fs.isDirectory(path);
isDirectory = fs.isDirectorySync(path);
fs.isDirectoryAsync(path);
