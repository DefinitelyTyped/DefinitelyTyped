/// <reference path="../mocha/mocha.d.ts" />
/// <reference path="../should/should.d.ts" />

/// <reference path="../rimraf/rimraf.d.ts" />

/// <reference path="./vinyl-fs.d.ts" />


// from src

import vfs = require('vinyl-fs');

import path = require('path');
import fs = require('fs'); // require('graceful-fs');

// import bufEqual = require('buffer-equal');
declare var bufEqual: any;
// import through = require('through2');
declare var through: any;
import File = require('vinyl');

import should = require('should');
require('mocha');

declare var gulp: any;
declare var bufferStream: any;

var dataWrap = function(fn:any) {
	return function(data:any, enc:any, cb:any) {
		fn(data);
		cb();
	};
};

describe('source stream', function() {

	it('should explode on invalid glob (empty)', function(done) {
		var stream:any;
		try {
			stream = gulp.src();
		} catch (err) {
			should.exist(err);
			should.not.exist(stream);
			done();
		}
	});

	it('should explode on invalid glob (number)', function(done) {
		var stream:any;
		try {
			stream = gulp.src(123);
		} catch (err) {
			should.exist(err);
			should.not.exist(stream);
			done();
		}
	});

	it('should explode on invalid glob (empty array)', function(done) {
		var stream:any;
		try {
			stream = gulp.src([]);
		} catch (err) {
			should.exist(err);
			should.not.exist(stream);
			done();
		}
	});

	it('should pass through writes', function(done) {
		var expectedPath = path.join(__dirname, "./fixtures/test.coffee");
		var expectedContent = fs.readFileSync(expectedPath);

		var expectedFile = new File({
			base: __dirname,
			cwd: __dirname,
			path: expectedPath,
			contents: expectedContent
		});

		var onEnd = function(){
			buffered.length.should.equal(1);
			buffered[0].should.equal(expectedFile);
			bufEqual(buffered[0].contents, expectedContent).should.equal(true);
			done();
		};

		var stream = vfs.src("./fixtures/nothing.coffee");

		var buffered:any[] = [];
		bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
		stream.pipe(bufferStream);
		stream.write(expectedFile);
		stream.end();
	});

	it('should glob a file with default settings', function(done) {
		var expectedPath = path.join(__dirname, "./fixtures/test.coffee");
		var expectedContent = fs.readFileSync(expectedPath);

		var onEnd = function(){
			buffered.length.should.equal(1);
			should.exist(buffered[0].stat);
			buffered[0].path.should.equal(expectedPath);
			buffered[0].isBuffer().should.equal(true);
			bufEqual(buffered[0].contents, expectedContent).should.equal(true);
			done();
		};

		var stream = vfs.src("./fixtures/*.coffee", {cwd: __dirname});

		var buffered:any[] = [];
		bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
		stream.pipe(bufferStream);
	});

	it('should glob a file with default settings and relative cwd', function(done) {
		var expectedPath = path.join(__dirname, "./fixtures/test.coffee");
		var expectedContent = fs.readFileSync(expectedPath);

		var onEnd = function(){
			buffered.length.should.equal(1);
			should.exist(buffered[0].stat);
			buffered[0].path.should.equal(expectedPath);
			buffered[0].isBuffer().should.equal(true);
			bufEqual(buffered[0].contents, expectedContent).should.equal(true);
			done();
		};

		var stream = vfs.src("./fixtures/*.coffee", {cwd: path.relative(process.cwd(), __dirname)});

		var buffered:any[] = [];
		bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
		stream.pipe(bufferStream);
	});

	it('should glob a directory with default settings', function(done) {
		var expectedPath = path.join(__dirname, "./fixtures/wow");

		var onEnd = function(){
			buffered.length.should.equal(1);
			buffered[0].path.should.equal(expectedPath);
			buffered[0].isNull().should.equal(true);
			buffered[0].isDirectory().should.equal(true);
			done();
		};

		var stream = vfs.src("./fixtures/wow/", {cwd: __dirname});

		var buffered:any[] = [];
		bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
		stream.pipe(bufferStream);
	});

	it('should glob a file with with no contents', function(done) {
		var expectedPath = path.join(__dirname, "./fixtures/test.coffee");
		var expectedContent = fs.readFileSync(expectedPath);

		var onEnd = function(){
			buffered.length.should.equal(1);
			buffered[0].path.should.equal(expectedPath);
			buffered[0].isNull().should.equal(true);
			should.not.exist(buffered[0].contents);
			done();
		};

		var stream = vfs.src("./fixtures/*.coffee", {cwd: __dirname, read: false});

		var buffered:any = [];
		bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
		stream.pipe(bufferStream);
	});

	it('should glob a file with streaming contents', function(done) {
		var expectedPath = path.join(__dirname, "./fixtures/test.coffee");
		var expectedContent = fs.readFileSync(expectedPath);

		var onEnd = function(){
			buffered.length.should.equal(1);
			should.exist(buffered[0].stat);
			buffered[0].path.should.equal(expectedPath);
			buffered[0].isStream().should.equal(true);

			var contentBuffer = new Buffer([]);
			var contentBufferStream = through(dataWrap(function(data:any){
				contentBuffer = Buffer.concat([contentBuffer, data]);
			}));
			buffered[0].contents.pipe(contentBufferStream);
			buffered[0].contents.once('end', function(){
				bufEqual(contentBuffer, expectedContent);
				done();
			});
		};

		var stream = vfs.src("./fixtures/*.coffee", {cwd: __dirname, buffer: false});

		var buffered:any = [];
		bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
		stream.pipe(bufferStream);
	});

});

// from dest
// var vfs = require('../');

// var path = require('path');
// var fs = require('graceful-fs');
import rimraf = require('rimraf');

// var bufEqual = require('buffer-equal');
// var through = require('through2');
// var File = require('vinyl');

// var should = require('should');
require('mocha');

var wipeOut = function(cb:any) {
	rimraf(path.join(__dirname, "./out-fixtures/"), cb);
};

var dataWrap = function(fn:any) {
	return function(data:any, enc:any, cb:any) {
		fn(data);
		cb();
	};
};

var realMode = function(n:any) {
	return n & 07777;
};

describe('dest stream', function() {
	beforeEach(wipeOut);
	afterEach(wipeOut);

	it('should explode on invalid folder', function(done) {
		var stream:any;
		try {
			stream = gulp.dest();
		} catch (err) {
			should.exist(err);
			should.not.exist(stream);
			done();
		}
	});

	it('should pass through writes with cwd', function(done) {
		var inputPath = path.join(__dirname, "./fixtures/test.coffee");

		var expectedFile = new File({
			base: __dirname,
			cwd: __dirname,
			path: inputPath,
			contents: null
		});

		var onEnd = function(){
			buffered.length.should.equal(1);
			buffered[0].should.equal(expectedFile);
			done();
		};

		var stream = vfs.dest("./out-fixtures/", {cwd: __dirname});

		var buffered:any[] = [];
		bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
		stream.pipe(bufferStream);
		stream.write(expectedFile);
		stream.end();
	});

	it('should pass through writes with default cwd', function(done) {
		var inputPath = path.join(__dirname, "./fixtures/test.coffee");

		var expectedFile = new File({
			base: __dirname,
			cwd: __dirname,
			path: inputPath,
			contents: null
		});

		var onEnd = function(){
			buffered.length.should.equal(1);
			buffered[0].should.equal(expectedFile);
			done();
		};

		var stream = vfs.dest(path.join(__dirname, "./out-fixtures/"));

		var buffered:any[] = [];
		bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
		stream.pipe(bufferStream);
		stream.write(expectedFile);
		stream.end();
	});

	it('should not write null files', function(done) {
		var inputPath = path.join(__dirname, "./fixtures/test.coffee");
		var inputBase = path.join(__dirname, "./fixtures/");
		var expectedPath = path.join(__dirname, "./out-fixtures/test.coffee");
		var expectedCwd = __dirname;
		var expectedBase = path.join(__dirname, "./out-fixtures");

		var expectedFile = new File({
			base: inputBase,
			cwd: __dirname,
			path: inputPath,
			contents: null
		});

		var onEnd = function(){
			buffered.length.should.equal(1);
			buffered[0].should.equal(expectedFile);
			buffered[0].cwd.should.equal(expectedCwd, 'cwd should have changed');
			buffered[0].base.should.equal(expectedBase, 'base should have changed');
			buffered[0].path.should.equal(expectedPath, 'path should have changed');
			fs.existsSync(expectedPath).should.equal(false);
			done();
		};

		var stream = vfs.dest("./out-fixtures/", {cwd: __dirname});

		var buffered:any[] = [];
		bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
		stream.pipe(bufferStream);
		stream.write(expectedFile);
		stream.end();
	});

	it('should write buffer files to the right folder with relative cwd', function(done) {
		var inputPath = path.join(__dirname, "./fixtures/test.coffee");
		var inputBase = path.join(__dirname, "./fixtures/");
		var expectedPath = path.join(__dirname, "./out-fixtures/test.coffee");
		var expectedCwd = __dirname;
		var expectedBase = path.join(__dirname, "./out-fixtures");
		var expectedContents = fs.readFileSync(inputPath);

		var expectedFile = new File({
			base: inputBase,
			cwd: __dirname,
			path: inputPath,
			contents: expectedContents
		});

		var onEnd = function(){
			buffered.length.should.equal(1);
			buffered[0].should.equal(expectedFile);
			buffered[0].cwd.should.equal(expectedCwd, 'cwd should have changed');
			buffered[0].base.should.equal(expectedBase, 'base should have changed');
			buffered[0].path.should.equal(expectedPath, 'path should have changed');
			fs.existsSync(expectedPath).should.equal(true);
			bufEqual(fs.readFileSync(expectedPath), expectedContents).should.equal(true);
			done();
		};

		var stream = vfs.dest("./out-fixtures/", {cwd: path.relative(process.cwd(), __dirname)});

		var buffered:any = [];
		bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
		stream.pipe(bufferStream);
		stream.write(expectedFile);
		stream.end();
	});

	it('should write buffer files to the right folder', function(done) {
		var inputPath = path.join(__dirname, "./fixtures/test.coffee");
		var inputBase = path.join(__dirname, "./fixtures/");
		var expectedPath = path.join(__dirname, "./out-fixtures/test.coffee");
		var expectedContents = fs.readFileSync(inputPath);
		var expectedCwd = __dirname;
		var expectedBase = path.join(__dirname, "./out-fixtures");
		var expectedMode = 0655;

		var expectedFile = new File({
			base: inputBase,
			cwd: __dirname,
			path: inputPath,
			contents: expectedContents,
			stat: {
				mode: expectedMode
			}
		});

		var onEnd = function(){
			buffered.length.should.equal(1);
			buffered[0].should.equal(expectedFile);
			buffered[0].cwd.should.equal(expectedCwd, 'cwd should have changed');
			buffered[0].base.should.equal(expectedBase, 'base should have changed');
			buffered[0].path.should.equal(expectedPath, 'path should have changed');
			fs.existsSync(expectedPath).should.equal(true);
			bufEqual(fs.readFileSync(expectedPath), expectedContents).should.equal(true);
			realMode(fs.lstatSync(expectedPath).mode).should.equal(expectedMode);
			done();
		};

		var stream = vfs.dest("./out-fixtures/", {cwd: __dirname});

		var buffered:any[] = [];
		bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
		stream.pipe(bufferStream);
		stream.write(expectedFile);
		stream.end();
	});

	it('should write streaming files to the right folder', function(done) {
		var inputPath = path.join(__dirname, "./fixtures/test.coffee");
		var inputBase = path.join(__dirname, "./fixtures/");
		var expectedPath = path.join(__dirname, "./out-fixtures/test.coffee");
		var expectedContents = fs.readFileSync(inputPath);
		var expectedCwd = __dirname;
		var expectedBase = path.join(__dirname, "./out-fixtures");
		var expectedMode = 0655;

		var contentStream = through.obj();
		var expectedFile = new File({
			base: inputBase,
			cwd: __dirname,
			path: inputPath,
			contents: contentStream,
			stat: {
				mode: expectedMode
			}
		});

		var onEnd = function(){
			buffered.length.should.equal(1);
			buffered[0].should.equal(expectedFile);
			buffered[0].cwd.should.equal(expectedCwd, 'cwd should have changed');
			buffered[0].base.should.equal(expectedBase, 'base should have changed');
			buffered[0].path.should.equal(expectedPath, 'path should have changed');
			fs.existsSync(expectedPath).should.equal(true);
			bufEqual(fs.readFileSync(expectedPath), expectedContents).should.equal(true);
			realMode(fs.lstatSync(expectedPath).mode).should.equal(expectedMode);
			done();
		};

		var stream = vfs.dest("./out-fixtures/", {cwd: __dirname});

		var buffered:any = [];
		bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
		stream.pipe(bufferStream);
		stream.write(expectedFile);
		setTimeout(function(){
			contentStream.write(expectedContents);
			contentStream.end();
		}, 100);
		stream.end();
	});

	it('should write directories to the right folder', function(done) {
		var inputPath = path.join(__dirname, "./fixtures/test");
		var inputBase = path.join(__dirname, "./fixtures/");
		var expectedPath = path.join(__dirname, "./out-fixtures/test");
		var expectedCwd = __dirname;
		var expectedBase = path.join(__dirname, "./out-fixtures");
		var expectedMode = 0655;

		var expectedFile = new File({
			base: inputBase,
			cwd: __dirname,
			path: inputPath,
			contents: null,
			stat: {
				isDirectory: function(){
					return true;
				},
				mode: expectedMode
			}
		});

		var onEnd = function(){
			buffered.length.should.equal(1);
			buffered[0].should.equal(expectedFile);
			buffered[0].cwd.should.equal(expectedCwd, 'cwd should have changed');
			buffered[0].base.should.equal(expectedBase, 'base should have changed');
			buffered[0].path.should.equal(expectedPath, 'path should have changed');
			fs.existsSync(expectedPath).should.equal(true);
			fs.lstatSync(expectedPath).isDirectory().should.equal(true);
			realMode(fs.lstatSync(expectedPath).mode).should.equal(expectedMode);
			done();
		};

		var stream = vfs.dest("./out-fixtures/", {cwd: __dirname});

		var buffered:any[] = [];
		bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
		stream.pipe(bufferStream);
		stream.write(expectedFile);
		stream.end();
	});

	it('should allow piping multiple dests in streaming mode', function(done) {
		var inputPath1 = path.join(__dirname, "./out-fixtures/multiple-first");
		var inputPath2 = path.join(__dirname, "./out-fixtures/multiple-second");
		var inputBase = path.join(__dirname, "./out-fixtures/");
		var srcPath = path.join(__dirname, "./fixtures/test.coffee");
		var stream1 = vfs.dest('./out-fixtures/', {cwd: __dirname});
		var stream2 = vfs.dest('./out-fixtures/', {cwd: __dirname});
		var content = fs.readFileSync(srcPath);
		var rename = through.obj(function(file:any, _:any, next:any) {
			file.path = inputPath2;
			this.push(file);
			next();
		});

		stream1.on('data', function(file:any) {
			file.path.should.equal(inputPath1);
		})

		stream1.pipe(rename).pipe(stream2);
		stream2.on('data', function(file:any) {
			file.path.should.equal(inputPath2);
		}).once('end', function() {
			fs.readFileSync(inputPath1, 'utf8').should.equal(content.toString());
			fs.readFileSync(inputPath2, 'utf8').should.equal(content.toString());
			done();
		});

		var file = new File({
			base: inputBase,
			path: inputPath1,
			cwd: __dirname,
			contents: content
		})

		stream1.write(file);
		stream1.end();
	})

});
