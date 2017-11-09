/// <reference types="mocha" />

import * as fs from 'fs';
import * as path from 'path';
import * as expect from 'expect';
var miss = require('mississippi');
var cloneable = require('cloneable-readable');

import File = require('vinyl');

/**
 * Custom and private properties needed for tests.
 *
 * TODO:
 * Is there a way to augment `File` (defined using `export =`) without introducing an extra
 * interface and type assertions?
 */
interface TestFile extends File {
	sourceMap?: any;
	custom?: any;
	_symlink?: string;
	_contents?: Buffer | NodeJS.ReadableStream | null;
	_cwd?: string;
	_base?: string;
}

var pipe: (streams: [NodeJS.ReadableStream, NodeJS.WritableStream], cb: (err?: Error) => void) => void = miss.pipe;
var from: (values: any[]) => NodeJS.ReadableStream = miss.from;
var concat: (fn: (d: Buffer) => void) => NodeJS.WritableStream = miss.concat;
var isCloneable: (obj: any) => boolean = cloneable.isCloneable;

var isWin = (process.platform === 'win32');

describe('File', function () {

	describe('isVinyl()', function () {

		it('returns true for a Vinyl object', function (done) {
			var file = new File();
			var result = File.isVinyl(file);
			expect(result).toEqual(true);
			done();
		});

		it('returns false for a normal object', function (done) {
			var result = File.isVinyl({});
			expect(result).toEqual(false);
			done();
		});

		it('returns false for null', function (done) {
			var result = File.isVinyl(null);
			expect(result).toEqual(false);
			done();
		});

		it('returns false for a string', function (done) {
			var result = File.isVinyl('foobar');
			expect(result).toEqual(false);
			done();
		});

		it('returns false for a String object', function (done) {
			var result = File.isVinyl(new String('foobar'));
			expect(result).toEqual(false);
			done();
		});

		it('returns false for a number', function (done) {
			var result = File.isVinyl(1);
			expect(result).toEqual(false);
			done();
		});

		it('returns false for a Number object', function (done) {
			var result = File.isVinyl(new Number(1));
			expect(result).toEqual(false);
			done();
		});

		// This is based on current implementation
		// A test was added to document and make aware during internal changes
		// TODO: decide if this should be leak-able
		it('returns true for a mocked object', function (done) {
			var result = File.isVinyl({ _isVinyl: true });
			expect(result).toEqual(true);
			done();
		});
	});

	describe('defaults', function () {

		it('defaults cwd to process.cwd', function (done) {
			var file = new File();
			expect(file.cwd).toEqual(process.cwd());
			done();
		});

		it('defaults base to process.cwd', function (done) {
			var file = new File();
			expect(file.base).toEqual(process.cwd());
			done();
		});

		it('defaults base to cwd property', function (done) {
			var cwd = path.normalize('/');
			var file = new File({ cwd: cwd });
			expect(file.base).toEqual(cwd);
			done();
		});

		it('defaults path to null', function (done) {
			var file = new File();
			expect(file.path).toNotExist();
			expect(file.path).toEqual(null);
			done();
		});

		it('defaults history to an empty array', function (done) {
			var file = new File();
			expect(file.history).toEqual([]);
			done();
		});

		it('defaults stat to null', function (done) {
			var file = new File();
			expect(file.stat).toNotExist();
			expect(file.stat).toEqual(null);
			done();
		});

		it('defaults contents to null', function (done) {
			var file = new File();
			expect(file.contents).toNotExist();
			expect(file.contents).toEqual(null);
			done();
		});
	});

	describe('constructor()', function () {

		it('sets base', function (done) {
			var val = path.normalize('/');
			var file = new File({ base: val });
			expect(file.base).toEqual(val);
			done();
		});

		it('sets cwd', function (done) {
			var val = path.normalize('/');
			var file = new File({ cwd: val });
			expect(file.cwd).toEqual(val);
			done();
		});

		it('sets path (and history)', function (done) {
			var val = path.normalize('/test.coffee');
			var file = new File({ path: val });
			expect(file.path).toEqual(val);
			expect(file.history).toEqual([val]);
			done();
		});

		it('sets history (and path)', function (done) {
			var val = path.normalize('/test.coffee');
			var file = new File({ history: [val] });
			expect(file.path).toEqual(val);
			expect(file.history).toEqual([val]);
			done();
		});

		it('sets stat', function (done) {
			var val = {};
			var file = new File({ stat: val as any as fs.Stats });
			expect(file.stat).toEqual(val);
			done();
		});

		it('sets contents', function (done) {
			var val = new Buffer('test');
			var file = new File({ contents: val });
			expect(file.contents).toEqual(val);
			done();
		});

		it('sets custom properties', function (done) {
			var sourceMap = {};
			var file = new File({ sourceMap: sourceMap }) as TestFile;
			expect(file.sourceMap).toEqual(sourceMap);
			done();
		});

		it('normalizes path', function (done) {
			var val = '/test/foo/../test.coffee';
			var expected = path.normalize(val);
			var file = new File({ path: val });
			expect(file.path).toEqual(expected);
			expect(file.history).toEqual([expected]);
			done();
		});

		it('normalizes and removes trailing separator from path', function (done) {
			var val = '/test/foo/../foo/';
			var expected = path.normalize(val.slice(0, -1));
			var file = new File({ path: val });
			expect(file.path).toEqual(expected);
			done();
		});

		it('normalizes history', function (done) {
			var val = [
				'/test/bar/../bar/test.coffee',
				'/test/foo/../test.coffee',
			];
			var expected = val.map(function (p) {
				return path.normalize(p);
			});
			var file = new File({ history: val });
			expect(file.path).toEqual(expected[1]);
			expect(file.history).toEqual(expected);
			done();
		});

		it('normalizes and removes trailing separator from history', function (done) {
			var val = [
				'/test/foo/../foo/',
				'/test/bar/../bar/',
			];
			var expected = val.map(function (p) {
				return path.normalize(p.slice(0, -1));
			});
			var file = new File({ history: val });
			expect(file.history).toEqual(expected);
			done();
		});

		it('appends path to history if both exist and different from last', function (done) {
			var val = path.normalize('/test/baz/test.coffee');
			var history = [
				path.normalize('/test/bar/test.coffee'),
				path.normalize('/test/foo/test.coffee'),
			];
			var file = new File({ path: val, history: history });

			var expectedHistory = history.concat(val);

			expect(file.path).toEqual(val);
			expect(file.history).toEqual(expectedHistory);
			done();
		});

		it('does not append path to history if both exist and same as last', function (done) {
			var val = path.normalize('/test/baz/test.coffee');
			var history = [
				path.normalize('/test/bar/test.coffee'),
				path.normalize('/test/foo/test.coffee'),
				val,
			];
			var file = new File({ path: val, history: history });

			expect(file.path).toEqual(val);
			expect(file.history).toEqual(history);
			done();
		});

		it('does not mutate history array passed in', function (done) {
			var val = path.normalize('/test/baz/test.coffee');
			var history = [
				path.normalize('/test/bar/test.coffee'),
				path.normalize('/test/foo/test.coffee'),
			];
			var historyCopy = Array.prototype.slice.call(history);
			var file = new File({ path: val, history: history });

			var expectedHistory = history.concat(val);

			expect(file.path).toEqual(val);
			expect(file.history).toEqual(expectedHistory);
			expect(history).toEqual(historyCopy);
			done();
		});
	});

	describe('isBuffer()', function () {

		it('returns true when the contents are a Buffer', function (done) {
			var val = new Buffer('test');
			var file = new File({ contents: val });
			expect(file.isBuffer()).toEqual(true);
			done();
		});

		it('returns false when the contents are a Stream', function (done) {
			var val = from([]);
			var file = new File({ contents: val });
			expect(file.isBuffer()).toEqual(false);
			done();
		});

		it('returns false when the contents are null', function (done) {
			var file = new File({ contents: null });
			expect(file.isBuffer()).toEqual(false);
			done();
		});
	});

	describe('isStream()', function () {

		it('returns false when the contents are a Buffer', function (done) {
			var val = new Buffer('test');
			var file = new File({ contents: val });
			expect(file.isStream()).toEqual(false);
			done();
		});

		it('returns true when the contents are a Stream', function (done) {
			var val = from([]);
			var file = new File({ contents: val });
			expect(file.isStream()).toEqual(true);
			done();
		});

		it('returns false when the contents are null', function (done) {
			var file = new File({ contents: null });
			expect(file.isStream()).toEqual(false);
			done();
		});
	});

	describe('isNull()', function () {

		it('returns false when the contents are a Buffer', function (done) {
			var val = new Buffer('test');
			var file = new File({ contents: val });
			expect(file.isNull()).toEqual(false);
			done();
		});

		it('returns false when the contents are a Stream', function (done) {
			var val = from([]);
			var file = new File({ contents: val });
			expect(file.isNull()).toEqual(false);
			done();
		});

		it('returns true when the contents are null', function (done) {
			var file = new File({ contents: null });
			expect(file.isNull()).toEqual(true);
			done();
		});
	});

	describe('isDirectory()', function () {
		var fakeStat = {
			isDirectory: function () {
				return true;
			},
		} as any as fs.Stats;

		it('returns false when the contents are a Buffer', function (done) {
			var val = new Buffer('test');
			var file = new File({ contents: val, stat: fakeStat });
			expect(file.isDirectory()).toEqual(false);
			done();
		});

		it('returns false when the contents are a Stream', function (done) {
			var val = from([]);
			var file = new File({ contents: val, stat: fakeStat });
			expect(file.isDirectory()).toEqual(false);
			done();
		});

		it('returns true when the contents are null & stat.isDirectory is true', function (done) {
			var file = new File({ contents: null, stat: fakeStat });
			expect(file.isDirectory()).toEqual(true);
			done();
		});

		it('returns false when stat exists but does not contain an isDirectory method', function (done) {
			var file = new File({ contents: null, stat: {} as any as fs.Stats });
			expect(file.isDirectory()).toEqual(false);
			done();
		});

		it('returns false when stat does not exist', function (done) {
			var file = new File({ contents: null });
			expect(file.isDirectory()).toEqual(false);
			done();
		});
	});

	describe('isSymbolic()', function () {
		var fakeStat = {
			isSymbolicLink: function () {
				return true;
			},
		} as any as fs.Stats;

		it('returns false when the contents are a Buffer', function (done) {
			var val = new Buffer('test');
			var file = new File({ contents: val, stat: fakeStat });
			expect(file.isSymbolic()).toEqual(false);
			done();
		});

		it('returns false when the contents are a Stream', function (done) {
			var val = from([]);
			var file = new File({ contents: val, stat: fakeStat });
			expect(file.isSymbolic()).toEqual(false);
			done();
		});

		it('returns true when the contents are null & stat.isSymbolicLink is true', function (done) {
			var file = new File({ contents: null, stat: fakeStat });
			expect(file.isSymbolic()).toEqual(true);
			done();
		});

		it('returns false when stat exists but does not contain an isSymbolicLink method', function (done) {
			var file = new File({ contents: null, stat: {} as any as fs.Stats });
			expect(file.isSymbolic()).toEqual(false);
			done();
		});

		it('returns false when stat does not exist', function (done) {
			var file = new File({ contents: null });
			expect(file.isSymbolic()).toEqual(false);
			done();
		});
	});

	describe('clone()', function () {

		it('copies all attributes over with Buffer contents', function (done) {
			var options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: new Buffer('test'),
			};
			var file = new File(options);
			var file2 = file.clone();

			expect(file2).toNotBe(file);
			expect(file2.cwd).toEqual(file.cwd);
			expect(file2.base).toEqual(file.base);
			expect(file2.path).toEqual(file.path);
			expect(file2.contents).toNotBe(file.contents);
			expect(file2.contents.toString('utf8')).toEqual(file.contents.toString('utf8'));
			done();
		});

		it('assigns Buffer content reference when contents option is false', function (done) {
			var options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.js',
				contents: new Buffer('test'),
			};
			var file = new File(options);

			var copy1 = file.clone({ contents: false });
			expect(copy1.contents).toBe(file.contents);

			var copy2 = file.clone();
			expect(copy2.contents).toNotBe(file.contents);

			// TypeScript: expected compilation error
			//var copy3 = file.clone({ contents: 'invalid' });
			//expect(copy3.contents).toNotBe(file.contents);
			//done();
		});

		it('copies all attributes over with Stream contents', function (done) {
			var options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: from(['wa', 'dup']),
			};
			var file = new File(options);
			var file2 = file.clone();

			expect(file2).toNotBe(file);
			expect(file2.cwd).toEqual(file.cwd);
			expect(file2.base).toEqual(file.base);
			expect(file2.path).toEqual(file.path);
			expect(file2.contents).toNotBe(file.contents);

			var ends = 2;
			var data: Buffer;
			var data2: Buffer;

			function assert(err: any) {
				if (err) {
					done(err);
					return;
				}

				if (--ends === 0) {
					expect(data).toNotBe(data2);
					expect(data.toString('utf8')).toEqual(data2.toString('utf8'));
					done();
				}
			}

			pipe([
				file.contents,
				concat(function (d) {
					data = d;
				}),
			], assert);

			pipe([
				file2.contents,
				concat(function (d) {
					data2 = d;
				}),
			], assert);
		});

		it('does not start flowing until all clones flows (data)', function (done) {
			var options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: from(['wa', 'dup']),
			};
			var file = new File(options);
			var file2 = file.clone();
			var ends = 2;

			var data = '';
			var data2 = '';

			function assert() {
				if (--ends === 0) {
					expect(data).toEqual(data2);
					done();
				}
			}

			// Start flowing file2
			file2.contents.on('data', function (chunk: Buffer) {
				data2 += chunk.toString('utf8');
			});

			process.nextTick(function () {
				// Nothing was written yet
				expect(data).toEqual('');
				expect(data2).toEqual('');

				// Starts flowing file
				file.contents.on('data', function (chunk: Buffer) {
					data += chunk.toString('utf8');
				});
			});

			file2.contents.on('end', assert);
			file.contents.on('end', assert);
		});

		it('does not start flowing until all clones flows (readable)', function (done) {
			var options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: from(['wa', 'dup']),
			};
			var file = new File(options);
			var file2 = file.clone();

			var data2 = '';

			function assert(data: Buffer) {
				expect(data.toString('utf8')).toEqual(data2);
			}

			// Start flowing file2
			file2.contents.on('readable', function (this: NodeJS.ReadableStream) {
				var chunk: string | Buffer;
				while ((chunk = this.read()) !== null) {
					data2 += chunk.toString();
				}
			});

			pipe([
				file.contents,
				concat(assert),
			], done);
		});

		it('copies all attributes over with null contents', function (done) {
			var options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: null,
			};
			var file = new File(options);
			var file2 = file.clone();

			expect(file2).toNotBe(file);
			expect(file2.cwd).toEqual(file.cwd);
			expect(file2.base).toEqual(file.base);
			expect(file2.path).toEqual(file.path);
			expect(file2.contents).toNotExist();
			done();
		});

		it('properly clones the `stat` property', function (done) {
			var options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.js',
				contents: new Buffer('test'),
				stat: fs.statSync(__filename),
			};

			var file = new File(options);
			var copy = file.clone();

			expect(copy.stat).toExist();
			if (copy.stat != null) {
				expect(copy.stat.isFile()).toEqual(true);
				expect(copy.stat.isDirectory()).toEqual(false);
				expect(file.stat).toBeAn(fs.Stats);
				expect(copy.stat).toBeAn(fs.Stats);
			}
			done();
		});

		it('properly clones the `history` property', function (done) {
			var options = {
				cwd: path.normalize('/'),
				base: path.normalize('/test/'),
				path: path.normalize('/test/test.js'),
				contents: new Buffer('test'),
			};

			var file = new File(options);
			var copy = file.clone();

			expect(copy.history[0]).toEqual(options.path);
			copy.path = 'lol';
			expect(file.path).toNotEqual(copy.path);
			done();
		});

		it('copies custom properties', function (done) {
			var options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: null,
				custom: { meta: {} },
			};

			var file = new File(options) as TestFile;
			var file2 = file.clone();

			expect(file2).toNotBe(file);
			expect(file2.cwd).toEqual(file.cwd);
			expect(file2.base).toEqual(file.base);
			expect(file2.path).toEqual(file.path);
			expect(file2.custom).toNotBe(file.custom);
			expect(file2.custom.meta).toNotBe(file.custom.meta);
			expect(file2.custom).toEqual(file.custom);
			done();
		});

		it('copies history', function (done) {
			var options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: null,
			};
			var history = [
				path.normalize('/test/test.coffee'),
				path.normalize('/test/test.js'),
				path.normalize('/test/test-938di2s.js'),
			];

			var file = new File(options);
			file.path = history[1];
			file.path = history[2];
			var file2 = file.clone();

			expect(file2.history).toEqual(history);
			expect(file2.history).toNotBe(file.history);
			expect(file2.path).toEqual(history[2]);
			done();
		});

		it('supports deep & shallow copy of all attributes', function (done) {
			var options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: null,
				custom: { meta: {} },
			};

			var file = new File(options) as TestFile;

			var file2 = file.clone();
			expect(file2.custom).toEqual(file.custom);
			expect(file2.custom).toNotBe(file.custom);
			expect(file2.custom.meta).toEqual(file.custom.meta);
			expect(file2.custom.meta).toNotBe(file.custom.meta);

			var file3 = file.clone(true);
			expect(file3.custom).toEqual(file.custom);
			expect(file3.custom).toNotBe(file.custom);
			expect(file3.custom.meta).toEqual(file.custom.meta);
			expect(file3.custom.meta).toNotBe(file.custom.meta);

			var file4 = file.clone({ deep: true });
			expect(file4.custom).toEqual(file.custom);
			expect(file4.custom).toNotBe(file.custom);
			expect(file4.custom.meta).toEqual(file.custom.meta);
			expect(file4.custom.meta).toNotBe(file.custom.meta);

			var file5 = file.clone(false);
			expect(file5.custom).toEqual(file.custom);
			expect(file5.custom).toBe(file.custom);
			expect(file5.custom.meta).toEqual(file.custom.meta);
			expect(file5.custom.meta).toBe(file.custom.meta);

			var file6 = file.clone({ deep: false });
			expect(file6.custom).toEqual(file.custom);
			expect(file6.custom).toBe(file.custom);
			expect(file6.custom.meta).toEqual(file.custom.meta);
			expect(file6.custom.meta).toBe(file.custom.meta);

			done();
		});

		// TypeScript: known issue
		// Compilation error: "Base constructors must all have the same return type."
		// it('supports inheritance', function (done) {
		// 	class ExtendedFile extends File { }
		// 	var file = new ExtendedFile();
		// 	var file2 = file.clone();

		// 	expect(file2).toNotBe(file);
		// 	expect(file2.constructor).toBe(ExtendedFile);
		// 	expect(file2).toBeAn(ExtendedFile);
		// 	expect(file2).toBeA(File);
		// 	expect(ExtendedFile.prototype.isPrototypeOf(file2)).toEqual(true);
		// 	expect(File.prototype.isPrototypeOf(file2)).toEqual(true);
		// 	done();
		// });
	});

	describe('inspect()', function () {

		it('returns correct format when no contents and no path', function (done) {
			var file = new File();
			expect(file.inspect()).toEqual('<File >');
			done();
		});

		it('returns correct format when Buffer contents and no path', function (done) {
			var val = new Buffer('test');
			var file = new File({ contents: val });
			expect(file.inspect()).toEqual('<File <Buffer 74 65 73 74>>');
			done();
		});

		it('returns correct format when Buffer contents and relative path', function (done) {
			var val = new Buffer('test');
			var file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: val,
			});
			expect(file.inspect()).toEqual('<File "test.coffee" <Buffer 74 65 73 74>>');
			done();
		});

		it('returns correct format when Stream contents and relative path', function (done) {
			var file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: from([]),
			});
			expect(file.inspect()).toEqual('<File "test.coffee" <CloneableStream>>');
			done();
		});

		it('returns correct format when null contents and relative path', function (done) {
			var file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: null,
			});
			expect(file.inspect()).toEqual('<File "test.coffee">');
			done();
		});
	});

	describe('contents get/set', function () {

		it('returns _contents', function (done) {
			var val = new Buffer('test');
			var file = new File() as TestFile;
			file._contents = val;
			expect(file.contents).toEqual(val);
			done();
		});

		it('sets _contents', function (done) {
			var val = new Buffer('test');
			var file = new File() as TestFile;
			file.contents = val;
			expect(file._contents).toEqual(val);
			done();
		});

		it('sets a Buffer', function (done) {
			var val = new Buffer('test');
			var file = new File();
			file.contents = val;
			expect(file.contents).toEqual(val);
			done();
		});

		it('wraps Stream in Cloneable', function (done) {
			var val = from([]);
			var file = new File();
			file.contents = val;
			expect(isCloneable(file.contents)).toEqual(true);
			done();
		});

		it('does not double wrap a Cloneable', function (done) {
			var val = from([]);
			var clone = cloneable(val);
			var file = new File();
			file.contents = clone;
			expect((file.contents as any)._original).toBe(val);
			done();
		});

		it('sets null', function (done) {
			var val = null;
			var file = new File();
			file.contents = val;
			expect(file.contents).toEqual(null);
			done();
		});

		// TypeScript: expected compilation error
		// it('does not set a string', function (done) {
		// 	var val = 'test';
		// 	var file = new File();
		// 	function invalid() {
		// 		file.contents = val;
		// 	}
		// 	expect(invalid).toThrow();
		// 	done();
		// });
	});

	describe('cwd get/set', function () {

		it('returns _cwd', function (done) {
			var val = '/test';
			var file = new File() as TestFile;
			file._cwd = val;
			expect(file.cwd).toEqual(val);
			done();
		});

		it('sets _cwd', function (done) {
			var val = '/test';
			var file = new File() as TestFile;
			file.cwd = val;
			expect(file._cwd).toEqual(path.normalize(val));
			done();
		});

		it('normalizes and removes trailing separator on set', function (done) {
			var val = '/test/foo/../foo/';
			var expected = path.normalize(val.slice(0, -1));
			var file = new File();

			file.cwd = val;

			expect(file.cwd).toEqual(expected);

			var val2 = '\\test\\foo\\..\\foo\\';
			var expected2 = path.normalize(isWin ? val2.slice(0, -1) : val2);

			file.cwd = val2;

			expect(file.cwd).toEqual(expected2);
			done();
		});

		// TypeScript: expected compilation error
		// it('throws on set with invalid values', function (done) {
		// 	var invalidValues = [
		// 		'',
		// 		null,
		// 		undefined,
		// 		true,
		// 		false,
		// 		0,
		// 		Infinity,
		// 		NaN,
		// 		{},
		// 		[],
		// 	];
		// 	var file = new File();

		// 	invalidValues.forEach(function (val) {
		// 		function invalid() {
		// 			file.cwd = val;
		// 		}
		// 		expect(invalid).toThrow('cwd must be a non-empty string.');
		// 	});

		// 	done();
		// });
	});

	describe('base get/set', function () {

		it('proxies cwd when omitted', function (done) {
			var file = new File({ cwd: '/test' });
			expect(file.base).toEqual(file.cwd);
			done();
		});

		it('proxies cwd when same', function (done) {
			var file = new File({
				cwd: '/test',
				base: '/test',
			});
			file.cwd = '/foo/';
			expect(file.base).toEqual(file.cwd);

			var file2 = new File({
				cwd: '/test',
			});
			file2.base = '/test/';
			file2.cwd = '/foo/';
			expect(file2.base).toEqual(file.cwd);
			done();
		});

		// TypeScript: known issue, see the comment for the `base` property.
		// it('proxies to cwd when null or undefined', function (done) {
		// 	var file = new File({
		// 		cwd: '/foo',
		// 		base: '/bar',
		// 	});
		// 	expect(file.base).toNotEqual(file.cwd);
		// 	file.base = null;
		// 	expect(file.base).toEqual(file.cwd);
		// 	file.base = '/bar/';
		// 	expect(file.base).toNotEqual(file.cwd);
		// 	file.base = undefined;
		// 	expect(file.base).toEqual(file.cwd);
		// 	done();
		// });

		it('returns _base', function (done) {
			var val = '/test/';
			var file = new File() as TestFile;
			file._base = val;
			expect(file.base).toEqual(val);
			done();
		});

		it('sets _base', function (done) {
			var val = '/test/foo';
			var file = new File() as TestFile;
			file.base = val;
			expect(file._base).toEqual(path.normalize(val));
			done();
		});

		it('normalizes and removes trailing separator on set', function (done) {
			var val = '/test/foo/../foo/';
			var expected = path.normalize(val.slice(0, -1));
			var file = new File();

			file.base = val;

			expect(file.base).toEqual(expected);

			var val2 = '\\test\\foo\\..\\foo\\';
			var expected2 = path.normalize(isWin ? val2.slice(0, -1) : val2);

			file.base = val2;

			expect(file.base).toEqual(expected2);
			done();
		});

		// TypeScript: expected compilation error
		// it('throws on set with invalid values', function (done) {
		// 	var invalidValues = [
		// 		true,
		// 		false,
		// 		1,
		// 		0,
		// 		Infinity,
		// 		NaN,
		// 		'',
		// 		{},
		// 		[],
		// 	];
		// 	var file = new File();

		// 	invalidValues.forEach(function (val) {
		// 		function invalid() {
		// 			file.base = val;
		// 		}
		// 		expect(invalid).toThrow('base must be a non-empty string, or null/undefined.');
		// 	});

		// 	done();
		// });
	});

	describe('relative get/set', function () {

		it('throws on set', function (done) {
			var file = new File();

			function invalid() {
				file.relative = 'test';
			}

			expect(invalid).toThrow('File.relative is generated from the base and path attributes. Do not modify it.');
			done();
		});

		it('throws on get with no path', function (done) {
			var file = new File();

			function invalid() {
				file.relative;
			}

			expect(invalid).toThrow('No path specified! Can not get relative.');
			done();
		});

		it('returns a relative path from base', function (done) {
			var file = new File({
				base: '/test/',
				path: '/test/test.coffee',
			});

			expect(file.relative).toEqual('test.coffee');
			done();
		});

		it('returns a relative path from cwd', function (done) {
			var file = new File({
				cwd: '/',
				path: '/test/test.coffee',
			});

			expect(file.relative).toEqual(path.normalize('test/test.coffee'));
			done();
		});

		it('does not append separator when directory', function (done) {
			var file = new File({
				base: '/test',
				path: '/test/foo/bar',
				stat: {
					isDirectory: function () {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.relative).toEqual(path.normalize('foo/bar'));
			done();
		});

		it('does not append separator when symlink', function (done) {
			var file = new File({
				base: '/test',
				path: '/test/foo/bar',
				stat: {
					isSymbolicLink: function () {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.relative).toEqual(path.normalize('foo/bar'));
			done();
		});

		it('does not append separator when directory & symlink', function (done) {
			var file = new File({
				base: '/test',
				path: '/test/foo/bar',
				stat: {
					isDirectory: function () {
						return true;
					},
					isSymbolicLink: function () {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.relative).toEqual(path.normalize('foo/bar'));
			done();
		});
	});

	describe('dirname get/set', function () {

		it('throws on get with no path', function (done) {
			var file = new File();

			function invalid() {
				file.dirname;
			}

			expect(invalid).toThrow('No path specified! Can not get dirname.');
			done();
		});

		it('returns the dirname without trailing separator', function (done) {
			var file = new File({
				cwd: '/',
				base: '/test',
				path: '/test/test.coffee',
			});

			expect(file.dirname).toEqual(path.normalize('/test'));
			done();
		});

		it('throws on set with no path', function (done) {
			var file = new File();

			function invalid() {
				file.dirname = '/test';
			}

			expect(invalid).toThrow('No path specified! Can not set dirname.');
			done();
		});

		it('replaces the dirname of the path', function (done) {
			var file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
			});

			file.dirname = '/test/foo';
			expect(file.path).toEqual(path.normalize('/test/foo/test.coffee'));
			done();
		});
	});

	describe('basename get/set', function () {

		it('throws on get with no path', function (done) {
			var file = new File();

			function invalid() {
				return file.basename;
			}

			expect(invalid).toThrow('No path specified! Can not get basename.');
			done();
		});

		it('returns the basename of the path', function (done) {
			var file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
			});

			expect(file.basename).toEqual('test.coffee');
			done();
		});

		it('does not append trailing separator when directory', function (done) {
			var file = new File({
				path: '/test/foo',
				stat: {
					isDirectory: function () {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.basename).toEqual('foo');
			done();
		});

		it('does not append trailing separator when symlink', function (done) {
			var file = new File({
				path: '/test/foo',
				stat: {
					isSymbolicLink: function () {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.basename).toEqual('foo');
			done();
		});

		it('does not append trailing separator when directory & symlink', function (done) {
			var file = new File({
				path: '/test/foo',
				stat: {
					isDirectory: function () {
						return true;
					},
					isSymbolicLink: function () {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.basename).toEqual('foo');
			done();
		});

		it('removes trailing separator', function (done) {
			var file = new File({
				path: '/test/foo/',
			});

			expect(file.basename).toEqual('foo');
			done();
		});

		it('removes trailing separator when directory', function (done) {
			var file = new File({
				path: '/test/foo/',
				stat: {
					isDirectory: function () {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.basename).toEqual('foo');
			done();
		});

		it('removes trailing separator when symlink', function (done) {
			var file = new File({
				path: '/test/foo/',
				stat: {
					isSymbolicLink: function () {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.basename).toEqual('foo');
			done();
		});

		it('removes trailing separator when directory & symlink', function (done) {
			var file = new File({
				path: '/test/foo/',
				stat: {
					isDirectory: function () {
						return true;
					},
					isSymbolicLink: function () {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.basename).toEqual('foo');
			done();
		});

		it('throws on set with no path', function (done) {
			var file = new File();

			function invalid() {
				file.basename = 'test.coffee';
			}

			expect(invalid).toThrow('No path specified! Can not set basename.');
			done();
		});

		it('replaces the basename of the path', function (done) {
			var file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
			});

			file.basename = 'foo.png';
			expect(file.path).toEqual(path.normalize('/test/foo.png'));
			done();
		});
	});

	describe('stem get/set', function () {

		it('throws on get with no path', function (done) {
			var file = new File();

			function invalid() {
				file.stem;
			}

			expect(invalid).toThrow('No path specified! Can not get stem.');
			done();
		});

		it('returns the stem of the path', function (done) {
			var file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
			});

			expect(file.stem).toEqual('test');
			done();
		});

		it('throws on set with no path', function (done) {
			var file = new File();

			function invalid() {
				file.stem = 'test.coffee';
			}

			expect(invalid).toThrow('No path specified! Can not set stem.');
			done();
		});

		it('replaces the stem of the path', function (done) {
			var file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
			});

			file.stem = 'foo';
			expect(file.path).toEqual(path.normalize('/test/foo.coffee'));
			done();
		});
	});

	describe('extname get/set', function () {

		it('throws on get with no path', function (done) {
			var file = new File();

			function invalid() {
				file.extname;
			}

			expect(invalid).toThrow('No path specified! Can not get extname.');
			done();
		});

		it('returns the extname of the path', function (done) {
			var file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
			});

			expect(file.extname).toEqual('.coffee');
			done();
		});

		it('throws on set with no path', function (done) {
			var file = new File();

			function invalid() {
				file.extname = '.coffee';
			}

			expect(invalid).toThrow('No path specified! Can not set extname.');
			done();
		});

		it('replaces the extname of the path', function (done) {
			var file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
			});

			file.extname = '.png';
			expect(file.path).toEqual(path.normalize('/test/test.png'));
			done();
		});
	});

	describe('path get/set', function () {

		it('records path in history upon instantiation', function (done) {
			var file = new File({
				cwd: '/',
				path: '/test/test.coffee',
			});
			var history = [
				path.normalize('/test/test.coffee'),
			];

			expect(file.path).toEqual(history[0]);
			expect(file.history).toEqual(history);
			done();
		});

		it('records path in history when set', function (done) {
			var val = path.normalize('/test/test.js');
			var file = new File({
				cwd: '/',
				path: '/test/test.coffee',
			});
			var history = [
				path.normalize('/test/test.coffee'),
				val,
			];

			file.path = val;
			expect(file.path).toEqual(val);
			expect(file.history).toEqual(history);

			var val2 = path.normalize('/test/test.es6');
			history.push(val2);

			file.path = val2;
			expect(file.path).toEqual(val2);
			expect(file.history).toEqual(history);
			done();
		});

		it('does not record path in history when set to the current path', function (done) {
			var val = path.normalize('/test/test.coffee');
			var file = new File({
				cwd: '/',
				path: val,
			});
			var history = [
				val,
			];

			file.path = val;
			file.path = val;
			expect(file.path).toEqual(val);
			expect(file.history).toEqual(history);
			done();
		});

		it('does not record path in history when set to empty string', function (done) {
			var val = path.normalize('/test/test.coffee');
			var file = new File({
				cwd: '/',
				path: val,
			});
			var history = [
				val,
			];

			file.path = '';
			expect(file.path).toEqual(val);
			expect(file.history).toEqual(history);
			done();
		});

		// TypeScript: known issue, see the comment for the `base` property.
		// it('throws on set with null path', function(done) {
		//   var file = new File();

		//   expect(file.path).toNotExist();
		//   expect(file.history).toEqual([]);

		//   function invalid() {
		//     file.path = null;
		//   }

		//   expect(invalid).toThrow('path should be a string.');
		//   done();
		// });

		it('normalizes the path upon set', function (done) {
			var val = '/test/foo/../test.coffee';
			var expected = path.normalize(val);
			var file = new File();

			file.path = val;

			expect(file.path).toEqual(expected);
			expect(file.history).toEqual([expected]);
			done();
		});

		it('removes the trailing separator upon set', function (done) {
			var file = new File();
			file.path = '/test/';

			expect(file.path).toEqual(path.normalize('/test'));
			expect(file.history).toEqual([path.normalize('/test')]);
			done();
		});

		it('removes the trailing separator upon set when directory', function (done) {
			var file = new File({
				stat: {
					isDirectory: function () {
						return true;
					},
				} as any as fs.Stats,
			});
			file.path = '/test/';

			expect(file.path).toEqual(path.normalize('/test'));
			expect(file.history).toEqual([path.normalize('/test')]);
			done();
		});

		it('removes the trailing separator upon set when symlink', function (done) {
			var file = new File({
				stat: {
					isSymbolicLink: function () {
						return true;
					},
				} as any as fs.Stats,
			});
			file.path = '/test/';

			expect(file.path).toEqual(path.normalize('/test'));
			expect(file.history).toEqual([path.normalize('/test')]);
			done();
		});

		it('removes the trailing separator upon set when directory & symlink', function (done) {
			var file = new File({
				stat: {
					isDirectory: function () {
						return true;
					},
					isSymbolicLink: function () {
						return true;
					},
				} as any as fs.Stats,
			});
			file.path = '/test/';

			expect(file.path).toEqual(path.normalize('/test'));
			expect(file.history).toEqual([path.normalize('/test')]);
			done();
		});
	});

	describe('symlink get/set', function () {

		it('return null on get with no symlink', function (done) {
			var file = new File();

			expect(file.symlink).toEqual(null);
			done();
		});

		it('returns _symlink', function (done) {
			var val = '/test/test.coffee';
			var file = new File() as TestFile;
			file._symlink = val;

			expect(file.symlink).toEqual(val);
			done();
		});

		it('throws on set with non-string', function (done) {
			var file = new File();

			function invalid() {
				file.symlink = null;
			}

			expect(invalid).toThrow('symlink should be a string');
			done();
		});

		it('sets _symlink', function (done) {
			var val = '/test/test.coffee';
			var expected = path.normalize(val);
			var file = new File() as TestFile;
			file.symlink = val;

			expect(file._symlink).toEqual(expected);
			done();
		});

		it('allows relative symlink', function (done) {
			var val = 'test.coffee';
			var file = new File();
			file.symlink = val;

			expect(file.symlink).toEqual(val);
			done();
		});

		it('normalizes and removes trailing separator upon set', function (done) {
			var val = '/test/foo/../bar/';
			var expected = path.normalize(val.slice(0, -1));
			var file = new File();
			file.symlink = val;

			expect(file.symlink).toEqual(expected);
			done();
		});
	});
});
