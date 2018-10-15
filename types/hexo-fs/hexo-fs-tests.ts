import 'mocha';
import fs = require('hexo-fs');
import chai = require('chai');
import Promise = require('bluebird');
import { FSWatcher } from 'chokidar';

const should = chai.should();

let string = '';
let strings = [string];
let bool = false;
let boolPromise: Promise<boolean>;
let stringPromise: Promise<string>;
let stringsPromise: Promise<string[]>;
let stringOrStrings: string|string[];
let stringOrStringsPromise: Promise<string|string[]>;
let watcherPromise: Promise<FSWatcher>;
let writeStream: fs.WriteStream;
let writeStreamPromise: Promise<fs.WriteStream>;

boolPromise = fs.exists(string);

fs.exists(string, exist => {
    bool = exist;
});

// $ExpectType Bluebird<void>
fs.mkdirs(string);

fs.mkdirs(string, err => {
    should.not.exist(err);
});

// $ExpectType void
fs.mkdirsSync(string);

// $ExpectType Bluebird<void>
fs.writeFile(string, 'foo');

fs.writeFile(string, 'foo', err => {
    should.not.exist(err);
});

// $ExpectType void
fs.writeFileSync(string, 'foo');

// $ExpectType Bluebird<void>
fs.appendFile(string, 'foo');

fs.appendFile(string, 'bar', err => {
    should.not.exist(err);
});

// $ExpectType void
fs.appendFileSync(string, 'bar');

// $ExpectType Bluebird<void>
fs.copyFile(string, string);

fs.copyFile(string, string, err => {
    should.not.exist(err);
});

stringsPromise = fs.copyDir(string, string);

fs.copyDir(string, string, (err, files) => {
    should.not.exist(err);
    strings = files!;
});

stringsPromise = fs.copyDir(string, string, { ignoreHidden: false });
stringsPromise = fs.copyDir(string, string, { ignorePattern: /\.js/ });

stringsPromise = fs.listDir(string);

fs.listDir(string, (err, files) => {
    should.not.exist(err);
    strings = files!;
});

stringsPromise = fs.listDir(string, { ignoreHidden: false });
stringsPromise = fs.listDir(string, { ignorePattern: /\.js/ });

stringOrStrings = fs.listDirSync(string);
stringOrStrings = fs.listDirSync(string, { ignoreHidden: false });
stringOrStrings = fs.listDirSync(string, { ignorePattern: /\.js/ });

stringPromise = fs.readFile(string);

fs.readFile(string, (err, content) => {
    should.not.exist(err);
    string = content!;
});

string = fs.readFileSync(string);

// $ExpectType Bluebird<void>
fs.unlink(string);

stringOrStringsPromise = fs.emptyDir(string);

fs.emptyDir(string, (err, files) => {
    should.not.exist(err);
    stringOrStrings = files!;
});

stringOrStringsPromise = fs.emptyDir(string, { ignoreHidden: false });
stringOrStringsPromise = fs.emptyDir(string, { ignorePattern: /\.js/ });
stringOrStringsPromise = fs.emptyDir(string, { exclude: strings });

stringOrStrings = fs.emptyDirSync(string);
stringOrStrings = fs.emptyDirSync(string, { ignoreHidden: false });
stringOrStrings = fs.emptyDirSync(string, { ignorePattern: /\.js/ });
stringOrStrings = fs.emptyDirSync(string, { exclude: strings });

// $ExpectType Bluebird<void>
fs.rmdir(string);

fs.rmdir(string, err => {
    should.not.exist(err);
});

// $ExpectType void
fs.rmdirSync(string);

watcherPromise = fs.watch(string);

stringPromise = fs.ensurePath(string);

fs.ensurePath(string, (err, path) => {
    should.not.exist(err);
    string = path!;
});

string = fs.ensurePathSync(string);

writeStreamPromise = fs.ensureWriteStream(string);

fs.ensureWriteStream(string, (err, stream) => {
    should.not.exist(err);
    writeStream = stream!;
});

writeStream = fs.ensureWriteStreamSync(string);
