import { assert, expect, use, should } from 'chai';
import Chaifs = require('chai-fs');

use(Chaifs);
should();

const name = 'name';
const path = 'tmp/';
const otherPath = 'otherPath/';
const msg = 'message';
const array: any[] = [1, 2, 3, 4];
const data: ArrayBuffer = new ArrayBuffer(512);
const obj: object = { key: 'value' };
const schema = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');

// basename()
expect(path).to.have.basename(name);
expect(path).to.have.basename(name, msg);
expect(path).to.not.have.basename(name);
expect(path).to.not.have.basename(name, msg);

path.should.have.basename(name);
path.should.have.basename(name, msg);
path.should.not.have.basename(name);
path.should.not.have.basename(name, msg);

assert.basename(path, name);
assert.basename(path, name, msg);
assert.notBasename(path, name);
assert.notBasename(path, name, msg);

// dirname()
expect(path).to.have.dirname(name);
expect(path).to.have.dirname(name, msg);
expect(path).to.not.have.dirname(name);
expect(path).to.not.have.dirname(name, msg);

path.should.have.dirname(name);
path.should.have.dirname(name, msg);
path.should.not.have.dirname(name);
path.should.not.have.dirname(name, msg);

assert.dirname(path, name);
assert.dirname(path, name, msg);
assert.notDirname(path, name);
assert.notDirname(path, name, msg);

// extname()
expect(path).to.have.extname(name);
expect(path).to.have.extname(name, msg);
expect(path).to.not.have.extname(name);
expect(path).to.not.have.extname(name, msg);

path.should.have.extname(name);
path.should.have.extname(name, msg);
path.should.not.have.extname(name);
path.should.not.have.extname(name, msg);

assert.extname(path, name);
assert.extname(path, name, msg);
assert.notExtname(path, name);
assert.notExtname(path, name, msg);

// path()
expect(path).to.be.a.path();
expect(path).to.be.a.path(msg);
expect(path).to.not.be.a.path();
expect(path).to.not.be.a.path(msg);

path.should.be.a.path();
path.should.be.a.path(msg);
path.should.be.a.path();
path.should.be.a.path(msg);
path.should.not.be.a.path();
path.should.not.be.a.path(msg);

assert.pathExists(path);
assert.pathExists(path, msg);
assert.notPathExists(path);
assert.notPathExists(path, msg);

// directory
expect(path).to.be.a.directory();
expect(path).to.be.a.directory(msg);
expect(path).to.not.be.a.directory();
expect(path).to.not.be.a.directory(msg);

path.should.be.a.directory();
path.should.be.a.directory(msg);
path.should.not.be.a.directory();
path.should.not.be.a.directory(msg);

assert.isDirectory(path);
assert.isDirectory(path, msg);
assert.notIsDirectory(path);
assert.notIsDirectory(path, msg);

// directory().and.empty
expect(path).to.be.a.directory().and.empty;
expect(path).to.be.a.directory(msg).and.empty;
expect(path).to.be.a.directory().and.not.empty;
expect(path).to.be.a.directory(msg).and.not.empty;

path.should.be.a.directory().and.empty;
path.should.be.a.directory(msg).and.empty;
path.should.be.a.directory().and.not.empty;
path.should.be.a.directory(msg).and.not.empty;

assert.isEmptyDirectory(path);
assert.isEmptyDirectory(path, msg);
assert.notIsEmptyDirectory(path);
assert.notIsEmptyDirectory(path, msg);

// directory().with.contents([...])
// #1
expect(path).to.be.a.directory(msg).with.contents(array);
expect(path).to.be.a.directory(msg).with.contents(array, msg);
// #2
expect(path).to.be.a.directory(msg).and.not.have.contents(array);
expect(path).to.be.a.directory(msg).and.not.have.contents(array, msg);
// #3
expect(path).to.be.a.directory(msg).with.deep.contents(array);
expect(path).to.be.a.directory(msg).with.deep.contents(array, msg);
// #4
expect(path).to.be.a.directory(msg).and.not.have.deep.contents(array);
expect(path).to.be.a.directory(msg).and.not.have.deep.contents(array, msg);
// #5
expect(path).to.be.a.directory(msg).and.include.contents(array);
expect(path).to.be.a.directory(msg).and.include.contents(array, msg);
// #6
expect(path).to.be.a.directory(msg).and.not.include.contents(array);
expect(path).to.be.a.directory(msg).and.not.include.contents(array, msg);

// #1
path.should.be.a.directory(msg).with.contents(array);
path.should.be.a.directory(msg).with.contents(array, msg);
// #2
path.should.be.a.directory(msg).and.not.have.contents(array);
path.should.be.a.directory(msg).and.not.have.contents(array, msg);
// #3
path.should.be.a.directory(msg).with.deep.contents(array);
path.should.be.a.directory(msg).with.deep.contents(array, msg);
// #4
path.should.be.a.directory(msg).and.not.have.deep.contents(array);
path.should.be.a.directory(msg).and.not.have.deep.contents(array, msg);
// #5
path.should.be.a.directory(msg).and.include.contents(array);
path.should.be.a.directory(msg).and.include.contents(array, msg);
// #6
path.should.be.a.directory(msg).and.not.include.contents(array);
path.should.be.a.directory(msg).and.not.include.contents(array, msg);

assert.directoryContent(path, array);
assert.directoryContent(path, array, msg);
assert.notDirectoryContent(path, array);
assert.notDirectoryContent(path, array, msg);
assert.directoryDeepContent(path, array);
assert.directoryDeepContent(path, array, msg);
assert.notDirectoryDeepContent(path, array);
assert.notDirectoryDeepContent(path, array, msg);
assert.directoryInclude(path, array);
assert.directoryInclude(path, array, msg);
assert.notDirectoryInclude(path, array);
assert.notDirectoryInclude(path, array, msg);

// directory().with.files([...])
// #1
expect(path).to.be.a.directory(msg).with.files(array);
expect(path).to.be.a.directory(msg).with.files(array, msg);
// #2
expect(path).to.be.a.directory(msg).with.files(array);
expect(path).to.be.a.directory(msg).with.files(array, msg);
// #3
expect(path).to.be.a.directory(msg).and.not.have.files(array);
expect(path).to.be.a.directory(msg).and.not.have.files(array, msg);
// #4
expect(path).to.be.a.directory(msg).and.not.have.files(array);
expect(path).to.be.a.directory(msg).and.not.have.files(array, msg);
// #5
expect(path).to.be.a.directory(msg).with.deep.files(array, msg);
expect(path).to.be.a.directory(msg).with.deep.files(array);
// #6
expect(path).to.be.a.directory(msg).with.deep.files(array);
expect(path).to.be.a.directory(msg).with.deep.files(array, msg);
// #7
expect(path).to.be.a.directory(msg).and.not.have.deep.files(array);
expect(path).to.be.a.directory(msg).and.not.have.deep.files(array, msg);
// #8
expect(path).to.be.a.directory(msg).and.not.have.deep.files(array);
expect(path).to.be.a.directory(msg).and.not.have.deep.files(array, msg);
// #9
expect(path).to.be.a.directory(msg).and.include.files(array);
expect(path).to.be.a.directory(msg).and.include.files(array, msg);
// #10
expect(path).to.be.a.directory(msg).and.not.include.files(array);
expect(path).to.be.a.directory(msg).and.not.include.files(array, msg);

// #1
path.should.be.a.directory(msg).with.files(array);
path.should.be.a.directory(msg).with.files(array, msg);
// #2
path.should.be.a.directory().and.not.have.files(array);
path.should.be.a.directory(msg).and.not.have.files(array);
path.should.be.a.directory(msg).and.not.have.files(array, msg);
// #3
path.should.be.a.directory().with.deep.files(array);
path.should.be.a.directory(msg).with.deep.files(array);
path.should.be.a.directory(msg).with.deep.files(array, msg);
// #4
path.should.be.a.directory(msg).and.not.have.deep.files(array);
path.should.be.a.directory(msg).and.not.have.deep.files(array, msg);
// #5
path.should.be.a.directory(msg).and.include.files(array);
path.should.be.a.directory(msg).and.include.files(array, msg);
// #6
path.should.be.a.directory(msg).and.not.include.files(array);
path.should.be.a.directory(msg).and.not.include.files(array, msg);

assert.directoryFiles(path, array);
assert.directoryFiles(path, array, msg);
assert.notDirectoryFiles(path, array);
assert.notDirectoryFiles(path, array, msg);
assert.directoryDeepFiles(path, array);
assert.directoryDeepFiles(path, array, msg);
assert.notDirectoryDeepFiles(path, array);
assert.notDirectoryDeepFiles(path, array, msg);
assert.directoryIncludeFiles(path, array);
assert.directoryIncludeFiles(path, array, msg);
assert.notDirectoryIncludeFiles(path, array);
assert.notDirectoryIncludeFiles(path, array, msg);

// directory().with.subDirs([...])
// #1
expect(path).to.be.a.directory(msg).with.subDirs(array);
expect(path).to.be.a.directory(msg).with.subDirs(array, msg);
// #2
expect(path).to.be.a.directory(msg).and.not.have.subDirs(array);
expect(path).to.be.a.directory(msg).and.not.have.subDirs(array, msg);
// #3
expect(path).to.be.a.directory(msg).with.deep.subDirs(array);
expect(path).to.be.a.directory(msg).with.deep.subDirs(array, msg);
// #4
expect(path).to.be.a.directory(msg).and.not.have.deep.subDirs(array);
expect(path).to.be.a.directory(msg).and.not.have.deep.subDirs(array, msg);
// #5
expect(path).to.be.a.directory(msg).and.include.subDirs(array);
expect(path).to.be.a.directory(msg).and.include.subDirs(array, msg);
// #6
expect(path).to.be.a.directory(msg).and.not.include.subDirs(array);
expect(path).to.be.a.directory(msg).and.not.include.subDirs(array, msg);

// #1
path.should.be.a.directory(msg).with.subDirs(array);
path.should.be.a.directory(msg).with.subDirs(array, msg);
// #2
path.should.be.a.directory(msg).and.not.have.subDirs(array);
path.should.be.a.directory(msg).and.not.have.subDirs(array, msg);
// #3
path.should.be.a.directory(msg).with.deep.subDirs(array);
path.should.be.a.directory(msg).with.deep.subDirs(array, msg);
// #4
path.should.be.a.directory(msg).and.not.have.deep.subDirs(array);
path.should.be.a.directory(msg).and.not.have.deep.subDirs(array, msg);
// #5
path.should.be.a.directory(msg).and.include.subDirs(array);
path.should.be.a.directory(msg).and.include.subDirs(array, msg);
// #6
path.should.be.a.directory(msg).and.not.include.subDirs(array);
path.should.be.a.directory(msg).and.not.include.subDirs(array, msg);

assert.directorySubDirs(path, array, msg);
assert.notDirectorySubDirs(path, array, msg);
assert.directoryDeepSubDirs(path, array, msg);
assert.notDirectoryDeepSubDirs(path, array, msg);
assert.directoryIncludeSubDirs(path, array, msg);
assert.notDirectoryIncludeSubDirs(path, array, msg);

// directory().and.equal(otherPath)
// #1
expect(path).to.be.a.directory(msg).and.equal(otherPath);
expect(path).to.be.a.directory(msg).and.equal(otherPath, msg);
// #2
expect(path).to.be.a.directory(msg).and.not.equal(otherPath);
expect(path).to.be.a.directory(msg).and.not.equal(otherPath, msg);
// #3
expect(path).to.be.a.directory(msg).and.deep.equal(otherPath);
expect(path).to.be.a.directory(msg).and.deep.equal(otherPath, msg);
// #4
expect(path).to.be.a.directory(msg).and.not.deep.equal(otherPath);
expect(path).to.be.a.directory(msg).and.not.deep.equal(otherPath, msg);

// #1
path.should.be.a.directory(msg).and.equal(otherPath);
path.should.be.a.directory(msg).and.equal(otherPath, msg);
// #2
path.should.be.a.directory(msg).and.not.equal(otherPath);
path.should.be.a.directory(msg).and.not.equal(otherPath, msg);
// #3
path.should.be.a.directory(msg).and.deep.equal(otherPath);
path.should.be.a.directory(msg).and.deep.equal(otherPath, msg);
// #4
path.should.be.a.directory(msg).and.not.deep.equal(otherPath);
path.should.be.a.directory(msg).and.not.deep.equal(otherPath, msg);

assert.directoryEqual(path, otherPath, msg);
assert.notDirectoryEqual(path, otherPath, msg);
assert.directoryDeepEqual(path, otherPath, msg);
assert.notDirectoryDeepEqual(path, otherPath, msg);

// file()
expect(path).to.be.a.file();
expect(path).to.be.a.file(msg);
expect(path).to.not.be.a.file();
expect(path).to.not.be.a.file(msg);

path.should.be.a.file();
path.should.be.a.file(msg);
path.should.not.be.a.file();
path.should.not.be.a.file(msg);

assert.isFile(path);
assert.isFile(path, msg);
assert.notIsFile(path);
assert.notIsFile(path, msg);

// file().and.empty
expect(path).to.be.a.file(msg).and.empty;
expect(path).to.be.a.file(msg).and.not.empty;

path.should.be.a.file(msg).and.empty;
path.should.be.a.file(msg).and.not.empty;

assert.isEmptyFile(path, msg);
assert.notIsEmptyFile(path, msg);

// file().with.content(str)
expect(path).to.be.a.file(msg).with.content(data);
expect(path).to.be.a.file(msg).with.content(data, msg);
expect(path).to.be.a.file(msg).and.not.have.content(data);
expect(path).to.be.a.file(msg).and.not.have.content(data, msg);

path.should.be.a.file(msg).with.content(data);
path.should.be.a.file(msg).with.content(data, msg);
path.should.be.a.file(msg).and.not.have.content(data);
path.should.be.a.file(msg).and.not.have.content(data, msg);

assert.fileContent(path, data);
assert.fileContent(path, data, msg);
assert.notFileContent(path, data);
assert.notFileContent(path, data, msg);

// file().with.contents.that.match(/xyz/)
// expect(path).to.be.a.file(msg).with.contents.that.match(/xyz/, msg);
// expect(path).to.be.a.file(msg).and.not.have.contents.that.match(/xyz/, msg);

// path.should.be.a.file(msg).with.contents.that.match(/xyz/, msg);
// path.should.be.a.file(msg).and.not.have.contents.that.match(/xyz/, msg);

assert.fileContentMatch(path, /xyz/);
assert.fileContentMatch(path, /xyz/, msg);
assert.notFileContentMatch(path, /xyz/);
assert.notFileContentMatch(path, /xyz/, msg);

// file().and.equal(otherPath)
expect(path).to.be.a.file(msg).and.equal(otherPath);
expect(path).to.be.a.file(msg).and.equal(otherPath, msg);
expect(path).to.be.a.file(msg).and.not.equal(otherPath);
expect(path).to.be.a.file(msg).and.not.equal(otherPath, msg);

path.should.be.a.file(msg).and.equal(otherPath);
path.should.be.a.file(msg).and.equal(otherPath, msg);
path.should.be.a.file(msg).and.not.equal(otherPath);
path.should.be.a.file(msg).and.not.equal(otherPath, msg);

assert.fileEqual(path, otherPath, msg);
assert.notFileEqual(path, otherPath, msg);

// file().with.json
expect(path).to.be.a.file(msg).with.json;
expect(path).to.be.a.file(msg).with.not.json;

path.should.be.a.file(msg).with.json;
path.should.be.a.file(msg).with.not.json;

assert.jsonFile(path);
assert.jsonFile(path, msg);
assert.notJsonFile(path);
assert.notJsonFile(path, msg);

// file().using.json.schema(obj)
expect(path).to.be.a.file(msg).with.json.using.schema(obj);
expect(path).to.be.a.file(msg).with.json.not.using.schema(obj);

path.should.be.a.file(msg).with.json.using.schema(obj);
path.should.be.a.file(msg).with.json.not.using.schema(obj);

assert.jsonSchemaFile(path, schema);
assert.jsonSchemaFile(path, schema, msg);
assert.notJsonSchemaFile(path, schema);
assert.notJsonSchemaFile(path, schema, msg);
