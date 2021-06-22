import {
    access, constants, readFile, writeFile, copyFile, close, open, read, write, rename, rmdir, mkdir, readdir,
    Dirent, stat, Stats, lstat, fstat, appendFile, realpath, link, unlink, readlink, chmod, fchmod, chown,
    fchown, lchown, fsync, utimes, futimes, ftruncate
} from "promise-fs";
import { URL } from "url";

// $ExpectType Promise<void>
access("abc/def", constants.F_OK);

// $ExpectType Promise<void>
access(new Buffer("abc"));

// $ExpectType Promise<void>
access(new URL("file:foo/bar"), constants.R_OK);

readFile("bubble", { flag: "a" })
    .then((b: Buffer) => { });

readFile(3, { encoding: "utf8" })
    .then((s: string) => { });

readFile("f/f/s", "utf8")
    .then((s: string) => { });

// $ExpectType Promise<void>
writeFile("a/b/c/d", "1234", "ascii");

// $ExpectType Promise<void>
writeFile(1, new Uint8Array(16), { flag: "a" });

// $ExpectType Promise<void>
copyFile("src/file", "dest/file");

// $ExpectType Promise<void>
copyFile("src/file", "dest/file", constants.O_APPEND);

// $ExpectType Promise<void>
close(4);

open("abc", "r+")
    .then((fd: number) => { });

open(new Buffer("23434"), constants.O_CREAT)
    .then((fd: number) => { });

read(7, new Uint8Array(16), 5, 4, 100)
    .then(({ bytesRead: number, buffer: Uint8Array }) => { });

write(8, new Buffer("test test", "utf-8"), 3, 2, 256)
    .then(({ bytesWritten: number, buffer: Buffer }) => { });

write(9, "hello", null, "utf-8")
    .then(({ bytesWritten: number, buffer: string }) => { });

// $ExpectType Promise<void>
rename("old", "new");

// $ExpectType Promise<void>
rmdir("trash/unwanted", { maxRetries: 5 });

// $ExpectType Promise<void>
mkdir("new/goodies");

// $ExpectType Promise<void>
mkdir("candy", "644");

readdir("interesting/stuff")
    .then((names: string[]) => { });

readdir("more/stuff", { withFileTypes: true })
    .then((entries: Dirent[]) => { });

readdir("somewhat", "buffer")
    .then((entries: Buffer[]) => { });

stat("path/to/file")
    .then((stats: Stats) => { });

lstat("path/to/link")
    .then((stats: Stats) => { });

fstat(9)
    .then((stats: Stats) => { });

// $ExpectType Promise<void>
appendFile("log", "1234");

// $ExpectType Promise<void>
appendFile(2, "beep beep");

realpath("fake/path")
    .then((path: string) => { });

realpath("dubious", "buffer")
    .then((path: Buffer) => { });

// $ExpectType Promise<void>
link("a", "b");

// $ExpectType Promise<void>
unlink("unwanted");

readlink("b")
    .then((path: string) => { });

readlink("foo", "buffer")
    .then((path: Buffer) => { });

// $ExpectType Promise<void>
chmod("/usr/share/data", 0o700);

// $ExpectType Promise<void>
chmod("/public", "777");

// $ExpectType Promise<void>
fchmod(2, 0o700);

// $ExpectType Promise<void>
fchmod(3, "777");

// $ExpectType Promise<void>
chown("/root", 0, 0);

// $ExpectType Promise<void>
fchown(7, 0, 0);

// $ExpectType Promise<void>
lchown("/root", 0, 0);

// $ExpectType Promise<void>
fsync(5);

// $ExpectType Promise<void>
utimes("stamp", 123, 456);

// $ExpectType Promise<void>
futimes(3, 123, 456);

// $ExpectType Promise<void>
ftruncate(5);

// $ExpectType Promise<void>
ftruncate(5, 256);
