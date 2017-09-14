/// <reference types="mocha" />
/// <reference types="should" />



import File = require('vinyl');
import Stream = require('stream');
import fs = require('fs');

declare var fakeStream: NodeJS.ReadWriteStream;

describe('File', () => {

	describe('constructor()', () => {

		it('should default cwd to process.cwd', done => {
			var file = new File();
			file.cwd.should.equal(process.cwd());
			done();
		});

		it('should default base to cwd', done => {
			var cwd = "/";
			var file = new File({cwd: cwd});
			file.base.should.equal(cwd);
			done();
		});

		it('should default base to cwd even when none is given', done => {
			var file = new File();
			file.base.should.equal(process.cwd());
			done();
		});

		it('should default path to null', done => {
			var file = new File();
			should.not.exist(file.path);
			done();
		});

		it('should default stat to null', done => {
			var file = new File();
			should.not.exist(file.stat);
			done();
		});

		it('should default contents to null', done => {
			var file = new File();
			should.not.exist(file.contents);
			done();
		});

		it('should set base to given value', done => {
			var val = "/";
			var file = new File({base: val});
			file.base.should.equal(val);
			done();
		});

		it('should set cwd to given value', done => {
			var val = "/";
			var file = new File({cwd: val});
			file.cwd.should.equal(val);
			done();
		});

		it('should set path to given value', done => {
			var val = "/test.coffee";
			var file = new File({path: val});
			file.path.should.equal(val);
			done();
		});

		it('should set stat to given value', done => {
			var stat = {} as fs.Stats;
			var file = new File({ stat });
			file.stat.should.equal(stat);
			done();
		});

		it('should set contents to given value', done => {
			var val = new Buffer("test");
			var file = new File({contents: val});
			file.contents.should.equal(val);
			done();
		});
	});

	describe('isBuffer()', () => {
		it('should return true when the contents are a Buffer', done => {
			var val = new Buffer("test");
			var file = new File({contents: val});
			file.isBuffer().should.equal(true);
			done();
		});

		it('should return false when the contents are a Stream', done => {
			var file = new File({ contents: fakeStream});
			file.isBuffer().should.equal(false);
			done();
		});

		it('should return false when the contents are a null', done => {
			var file = new File({contents: null});
			file.isBuffer().should.equal(false);
			done();
		});
	});

	describe('isStream()', () => {
		it('should return false when the contents are a Buffer', done => {
			var val = new Buffer("test");
			var file = new File({contents: val});
			file.isStream().should.equal(false);
			done();
		});

		it('should return true when the contents are a Stream', done => {
			var file = new File({ contents: fakeStream});
			file.isStream().should.equal(true);
			done();
		});

		it('should return false when the contents are a null', done => {
			var file = new File({contents: null});
			file.isStream().should.equal(false);
			done();
		});
	});

	describe('isNull()', () => {
		it('should return false when the contents are a Buffer', done => {
			var val = new Buffer("test");
			var file = new File({contents: val});
			file.isNull().should.equal(false);
			done();
		});

		it('should return false when the contents are a Stream', done => {
			var file = new File({ contents: fakeStream});
			file.isNull().should.equal(false);
			done();
		});

		it('should return true when the contents are a null', done => {
			var file = new File({contents: null});
			file.isNull().should.equal(true);
			done();
		});
	});

	describe('isDirectory()', () => {
		var fakeStat = <fs.Stats>{
			isDirectory() {
				return true;
			}
		};

		it('should return false when the contents are a Buffer', done => {
			var val = new Buffer("test");
			var file = new File({contents: val, stat: fakeStat});
			file.isDirectory().should.equal(false);
			done();
		});

		it('should return false when the contents are a Stream', done => {
			var file = new File({ contents: fakeStream, stat: fakeStat});
			file.isDirectory().should.equal(false);
			done();
		});

		it('should return true when the contents are a null', done => {
			var file = new File({contents: null, stat: fakeStat});
			file.isDirectory().should.equal(true);
			done();
		});
	});

	describe('clone()', () => {
		it('should copy all attributes over with Buffer', done => {
			var options = {
				cwd: "/",
				base: "/test/",
				path: "/test/test.coffee",
				contents: new Buffer("test")
			};
			var file = new File(options);
			var file2 = file.clone();

			file2.should.not.equal(file, 'refs should be different');
			file2.cwd.should.equal(file.cwd);
			file2.base.should.equal(file.base);
			file2.path.should.equal(file.path);

			let fileContents = file.contents;
			let file2Contents = file2.contents;

			file2Contents.should.not.equal(fileContents, 'buffer ref should be different');

			let fileUtf8Contents = fileContents instanceof Buffer ?
				fileContents.toString('utf8') :
				(<NodeJS.ReadableStream>fileContents).toString();
			let file2Utf8Contents = file2Contents instanceof Buffer ?
				file2Contents.toString('utf8') :
				(<NodeJS.ReadableStream>file2Contents).toString();

			file2Utf8Contents.should.equal(fileUtf8Contents);
			done();
		});

		it('should copy all attributes over with Stream', done => {
			var options = {
				cwd: "/",
				base: "/test/",
				path: "/test/test.coffee",
				contents: fakeStream
			};
			var file = new File(options);
			var file2 = file.clone();

			file2.should.not.equal(file, 'refs should be different');
			file2.cwd.should.equal(file.cwd);
			file2.base.should.equal(file.base);
			file2.path.should.equal(file.path);
			file2.contents.should.equal(file.contents, 'stream ref should be the same');
			done();
		});

		it('should copy all attributes over with null', done => {
			var options = {
				cwd: "/",
				base: "/test/",
				path: "/test/test.coffee",
				contents: fakeStream
			};
			var file = new File(options);
			var file2 = file.clone();

			file2.should.not.equal(file, 'refs should be different');
			file2.cwd.should.equal(file.cwd);
			file2.base.should.equal(file.base);
			file2.path.should.equal(file.path);
			should.not.exist(file2.contents);
			done();
		});

		it('should properly clone the `stat` property', done => {
			var options = {
				cwd: "/",
				base: "/test/",
				path: "/test/test.js",
				contents: new Buffer("test"),
				stat: fs.statSync(__filename)
			};

			var file = new File(options);
			var copy = file.clone();

			// ReSharper disable WrongExpressionStatement
			copy.stat.isFile().should.be.true;
			copy.stat.isDirectory().should.be.false;
			// ReSharper restore WrongExpressionStatement

			done();
		});
	});

	describe('pipe()', () => {
		it('should write to stream with Buffer', done => {
			var options = {
				cwd: "/",
				base: "/test/",
				path: "/test/test.coffee",
				contents: new Buffer("test")
			};
			var file = new File(options);
			var stream = new Stream.PassThrough();
			stream.on('data', (chunk: any) => {
				should.exist(chunk);
				(chunk instanceof Buffer).should.equal(true, 'should write as a buffer');
				chunk.toString('utf8').should.equal(options.contents.toString('utf8'));
			});
			stream.on('end', () => {
				done();
			});
			var ret = file.pipe(stream);
			ret.should.equal(stream, 'should return the stream');
		});

		it('should pipe to stream with Stream', done => {
			var testChunk = new Buffer("test");
			var options = {
				cwd: "/",
				base: "/test/",
				path: "/test/test.coffee",
				contents: new Stream.PassThrough()
			};
			var file = new File(options);
			var stream = new Stream.PassThrough();
			stream.on('data', (chunk: any) => {
				should.exist(chunk);
				(chunk instanceof Buffer).should.equal(true, 'should write as a buffer');
				chunk.toString('utf8').should.equal(testChunk.toString('utf8'));
				done();
			});
			var ret = file.pipe(stream);
			ret.should.equal(stream, 'should return the stream');

			let fileContents = file.contents;
			if (fileContents instanceof Buffer) {
				fileContents.write(testChunk.toString());
			}
		});

		it('should do nothing with null', done => {
			var options = {
				cwd: "/",
				base: "/test/",
				path: "/test/test.coffee",
				contents: fakeStream
			};
			var file = new File(options);
			var stream = new Stream.PassThrough();
			stream.on('data', () => {
				throw new Error("should not write");
			});
			stream.on('end', () => {
				done();
			});
			var ret = file.pipe(stream);
			ret.should.equal(stream, 'should return the stream');
		});

		it('should write to stream with Buffer', done => {
			var options = {
				cwd: "/",
				base: "/test/",
				path: "/test/test.coffee",
				contents: new Buffer("test")
			};
			var file = new File(options);
			var stream = new Stream.PassThrough();
			stream.on('data', (chunk: any) => {
				should.exist(chunk);
				(chunk instanceof Buffer).should.equal(true, 'should write as a buffer');
				chunk.toString('utf8').should.equal(options.contents.toString('utf8'));
				done();
			});
			stream.on('end', () => {
				throw new Error("should not end");
			});
			var ret = file.pipe(stream, {end: false});
			ret.should.equal(stream, 'should return the stream');
		});

		it('should pipe to stream with Stream', done => {
			var testChunk = new Buffer("test");
			var options = {
				cwd: "/",
				base: "/test/",
				path: "/test/test.coffee",
				contents: new Stream.PassThrough()
			};
			var file = new File(options);
			var stream = new Stream.PassThrough();
			stream.on('data', (chunk: any) => {
				should.exist(chunk);
				(chunk instanceof Buffer).should.equal(true, 'should write as a buffer');
				chunk.toString('utf8').should.equal(testChunk.toString('utf8'));
				done();
			});
			stream.on('end', () => {
				throw new Error("should not end");
			});
			var ret = file.pipe(stream, {end: false});
			ret.should.equal(stream, 'should return the stream');

			let fileContents = file.contents;
			if (fileContents instanceof Buffer) {
				fileContents.write(testChunk.toString());
			}
		});

		it('should do nothing with null', done => {
			var options = {
				cwd: "/",
				base: "/test/",
				path: "/test/test.coffee",
				contents: fakeStream
			};
			var file = new File(options);
			var stream = new Stream.PassThrough();
			stream.on('data', () => {
				throw new Error("should not write");
			});
			stream.on('end', () => {
				throw new Error("should not end");
			});
			var ret = file.pipe(stream, {end: false});
			ret.should.equal(stream, 'should return the stream');
			process.nextTick(done);
		});
	});

	describe('inspect()', () => {
		it('should return correct format when no contents and no path', done => {
			var file = new File();
			file.inspect().should.equal('<File >');
			done();
		});

		it('should return correct format when Buffer and no path', done => {
			var val = new Buffer("test");
			var file = new File({
				contents: val
			});
			file.inspect().should.equal('<File <Buffer 74 65 73 74>>');
			done();
		});

		it('should return correct format when Buffer and relative path', done => {
			var val = new Buffer("test");
			var file = new File({
				cwd: "/",
				base: "/test/",
				path: "/test/test.coffee",
				contents: val
			});
			file.inspect().should.equal('<File "test.coffee" <Buffer 74 65 73 74>>');
			done();
		});

		it('should return correct format when Buffer and only path and no base', done => {
			var val = new Buffer("test");
			var file = new File({
				cwd: "/",
				path: "/test/test.coffee",
				contents: val
			});
			delete file.base;
			file.inspect().should.equal('<File "/test/test.coffee" <Buffer 74 65 73 74>>');
			done();
		});

		it('should return correct format when Stream and relative path', done => {
			var file = new File({
				cwd: "/",
				base: "/test/",
				path: "/test/test.coffee",
				contents: new Stream.PassThrough()
			});
			file.inspect().should.equal('<File "test.coffee" <PassThroughStream>>');
			done();
		});

		it('should return correct format when null and relative path', done => {
			var file = new File({
				cwd: "/",
				base: "/test/",
				path: "/test/test.coffee",
				contents: null
			});
			file.inspect().should.equal('<File "test.coffee">');
			done();
		});
	});

	describe('contents get/set', () => {
		it('should work with Buffer', done => {
			var val = new Buffer("test");
			var file = new File();
			file.contents = val;
			file.contents.should.equal(val);
			done();
		});

		it('should work with Stream', done => {
			var val = new Stream.PassThrough();
			var file = new File();
			file.contents = val;
			file.contents.should.equal(val);
			done();
		});

		it('should work with null', done => {
			var file = new File();
			file.contents = null;
			(file.contents === null).should.equal(true);
			done();
		});

		it('should not work with string', done => {
			var val = "test";
			var file = new File();
			try {
				file.contents = new Buffer(val);
			} catch (err) {
				should.exist(err);
				done();
			}
		});
	});

	describe('relative get/set', () => {
		it('should error on set', done => {
			var file = new File();
			try {
				file.relative = "test";
			} catch (err) {
				should.exist(err);
				done();
			}
		});

		it('should error on get when no base', done => {
			var a: string;
			var file = new File();
			delete file.base;
			try {
				// ReSharper disable once AssignedValueIsNeverUsed
				a = file.relative;
			} catch (err) {
				should.exist(err);
				done();
			}
		});

		it('should error on get when no path', done => {
			var a: string;
			var file = new File();
			try {
				// ReSharper disable once AssignedValueIsNeverUsed
				a = file.relative;
			} catch (err) {
				should.exist(err);
				done();
			}
		});

		it('should return a relative path from base', done => {
			var file = new File({
				cwd: "/",
				base: "/test/",
				path: "/test/test.coffee"
			});
			file.relative.should.equal("test.coffee");
			done();
		});

		it('should return a relative path from cwd', done => {
			var file = new File({
				cwd: "/",
				path: "/test/test.coffee"
			});
			file.relative.should.equal("test/test.coffee");
			done();
		});
	});

});
