/// <reference types="mocha" />

import * as fs from 'fs';
import * as path from 'path';
import * as expect from 'expect';
const miss = require('mississippi');
const cloneable = require('cloneable-readable');

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

const pipe: (streams: [NodeJS.ReadableStream, NodeJS.WritableStream], cb: (err?: Error) => void) => void = miss.pipe;
const from: (values: any[]) => NodeJS.ReadableStream = miss.from;
const concat: (fn: (d: Buffer) => void) => NodeJS.WritableStream = miss.concat;
const isCloneable: (obj: any) => boolean = cloneable.isCloneable;

const isWin = (process.platform === 'win32');

describe('File', () => {
	describe('isVinyl()', () => {
		it('returns true for a Vinyl object', done => {
			const file = new File();
			const result = File.isVinyl(file);
			expect(result).toEqual(true);
			done();
		});

		it('returns false for a normal object', done => {
			const result = File.isVinyl({});
			expect(result).toEqual(false);
			done();
		});

		it('returns false for null', done => {
			const result = File.isVinyl(null);
			expect(result).toEqual(false);
			done();
		});

		it('returns false for a string', done => {
			const result = File.isVinyl('foobar');
			expect(result).toEqual(false);
			done();
		});

		it('returns false for a String object', done => {
			// tslint:disable-next-line:no-construct
			const result = File.isVinyl(new String('foobar'));
			expect(result).toEqual(false);
			done();
		});

		it('returns false for a number', done => {
			const result = File.isVinyl(1);
			expect(result).toEqual(false);
			done();
		});

		it('returns false for a Number object', done => {
			// tslint:disable-next-line:no-construct
			const result = File.isVinyl(new Number(1));
			expect(result).toEqual(false);
			done();
		});

		// This is based on current implementation
		// A test was added to document and make aware during internal changes
		// TODO: decide if this should be leak-able
		it('returns true for a mocked object', done => {
			const result = File.isVinyl({ _isVinyl: true });
			expect(result).toEqual(true);
			done();
		});
	});

	describe('defaults', () => {
		it('defaults cwd to process.cwd', done => {
			const file = new File();
			expect(file.cwd).toEqual(process.cwd());
			done();
		});

		it('defaults base to process.cwd', done => {
			const file = new File();
			expect(file.base).toEqual(process.cwd());
			done();
		});

		it('defaults base to cwd property', done => {
			const cwd = path.normalize('/');
			const file = new File({ cwd });
			expect(file.base).toEqual(cwd);
			done();
		});

		it('defaults path to null', done => {
			const file = new File();
			expect(file.path).toNotExist();
			expect(file.path).toEqual(null);
			done();
		});

		it('defaults history to an empty array', done => {
			const file = new File();
			expect(file.history).toEqual([]);
			done();
		});

		it('defaults stat to null', done => {
			const file = new File();
			expect(file.stat).toNotExist();
			expect(file.stat).toEqual(null);
			done();
		});

		it('defaults contents to null', done => {
			const file = new File();
			expect(file.contents).toNotExist();
			expect(file.contents).toEqual(null);
			done();
		});
	});

	describe('constructor()', () => {
		it('sets base', done => {
			const val = path.normalize('/');
			const file = new File({ base: val });
			expect(file.base).toEqual(val);
			done();
		});

		it('sets cwd', done => {
			const val = path.normalize('/');
			const file = new File({ cwd: val });
			expect(file.cwd).toEqual(val);
			done();
		});

		it('sets path (and history)', done => {
			const val = path.normalize('/test.coffee');
			const file = new File({ path: val });
			expect(file.path).toEqual(val);
			expect(file.history).toEqual([val]);
			done();
		});

		it('sets history (and path)', done => {
			const val = path.normalize('/test.coffee');
			const file = new File({ history: [val] });
			expect(file.path).toEqual(val);
			expect(file.history).toEqual([val]);
			done();
		});

		it('sets stat', done => {
			const val = {};
			const file = new File({ stat: val as any as fs.Stats });
			expect(file.stat).toEqual(val);
			done();
		});

		it('sets contents', done => {
			const val = new Buffer('test');
			const file = new File({ contents: val });
			expect(file.contents).toEqual(val);
			done();
		});

		it('sets custom properties', done => {
			const sourceMap = {};
			const file = new File({ sourceMap }) as TestFile;
			expect(file.sourceMap).toEqual(sourceMap);
			done();
		});

		it('normalizes path', done => {
			const val = '/test/foo/../test.coffee';
			const expected = path.normalize(val);
			const file = new File({ path: val });
			expect(file.path).toEqual(expected);
			expect(file.history).toEqual([expected]);
			done();
		});

		it('normalizes and removes trailing separator from path', done => {
			const val = '/test/foo/../foo/';
			const expected = path.normalize(val.slice(0, -1));
			const file = new File({ path: val });
			expect(file.path).toEqual(expected);
			done();
		});

		it('normalizes history', done => {
			const val = [
				'/test/bar/../bar/test.coffee',
				'/test/foo/../test.coffee',
			];
			const expected = val.map(p => {
				return path.normalize(p);
			});
			const file = new File({ history: val });
			expect(file.path).toEqual(expected[1]);
			expect(file.history).toEqual(expected);
			done();
		});

		it('normalizes and removes trailing separator from history', done => {
			const val = [
				'/test/foo/../foo/',
				'/test/bar/../bar/',
			];
			const expected = val.map(p => {
				return path.normalize(p.slice(0, -1));
			});
			const file = new File({ history: val });
			expect(file.history).toEqual(expected);
			done();
		});

		it('appends path to history if both exist and different from last', done => {
			const val = path.normalize('/test/baz/test.coffee');
			const history = [
				path.normalize('/test/bar/test.coffee'),
				path.normalize('/test/foo/test.coffee'),
			];
			const file = new File({ path: val, history });

			const expectedHistory = history.concat(val);

			expect(file.path).toEqual(val);
			expect(file.history).toEqual(expectedHistory);
			done();
		});

		it('does not append path to history if both exist and same as last', done => {
			const val = path.normalize('/test/baz/test.coffee');
			const history = [
				path.normalize('/test/bar/test.coffee'),
				path.normalize('/test/foo/test.coffee'),
				val,
			];
			const file = new File({ path: val, history });

			expect(file.path).toEqual(val);
			expect(file.history).toEqual(history);
			done();
		});

		it('does not mutate history array passed in', done => {
			const val = path.normalize('/test/baz/test.coffee');
			const history = [
				path.normalize('/test/bar/test.coffee'),
				path.normalize('/test/foo/test.coffee'),
			];
			const historyCopy = Array.prototype.slice.call(history);
			const file = new File({ path: val, history });

			const expectedHistory = history.concat(val);

			expect(file.path).toEqual(val);
			expect(file.history).toEqual(expectedHistory);
			expect(history).toEqual(historyCopy);
			done();
		});
	});

	describe('isBuffer()', () => {
		it('returns true when the contents are a Buffer', done => {
			const val = new Buffer('test');
			const file = new File({ contents: val });
			expect(file.isBuffer()).toEqual(true);
			done();
		});

		it('returns false when the contents are a Stream', done => {
			const val = from([]);
			const file = new File({ contents: val });
			expect(file.isBuffer()).toEqual(false);
			done();
		});

		it('returns false when the contents are null', done => {
			const file = new File({ contents: null });
			expect(file.isBuffer()).toEqual(false);
			done();
		});
	});

	describe('isStream()', () => {
		it('returns false when the contents are a Buffer', done => {
			const val = new Buffer('test');
			const file = new File({ contents: val });
			expect(file.isStream()).toEqual(false);
			done();
		});

		it('returns true when the contents are a Stream', done => {
			const val = from([]);
			const file = new File({ contents: val });
			expect(file.isStream()).toEqual(true);
			done();
		});

		it('returns false when the contents are null', done => {
			const file = new File({ contents: null });
			expect(file.isStream()).toEqual(false);
			done();
		});
	});

	describe('isNull()', () => {
		it('returns false when the contents are a Buffer', done => {
			const val = new Buffer('test');
			const file = new File({ contents: val });
			expect(file.isNull()).toEqual(false);
			done();
		});

		it('returns false when the contents are a Stream', done => {
			const val = from([]);
			const file = new File({ contents: val });
			expect(file.isNull()).toEqual(false);
			done();
		});

		it('returns true when the contents are null', done => {
			const file = new File({ contents: null });
			expect(file.isNull()).toEqual(true);
			done();
		});
	});

	describe('isDirectory()', () => {
		const fakeStat = {
			isDirectory() {
				return true;
			},
		} as any as fs.Stats;

		it('returns false when the contents are a Buffer', done => {
			const val = new Buffer('test');
			const file = new File({ contents: val, stat: fakeStat });
			expect(file.isDirectory()).toEqual(false);
			done();
		});

		it('returns false when the contents are a Stream', done => {
			const val = from([]);
			const file = new File({ contents: val, stat: fakeStat });
			expect(file.isDirectory()).toEqual(false);
			done();
		});

		it('returns true when the contents are null & stat.isDirectory is true', done => {
			const file = new File({ contents: null, stat: fakeStat });
			expect(file.isDirectory()).toEqual(true);
			done();
		});

		it('returns false when stat exists but does not contain an isDirectory method', done => {
			const file = new File({ contents: null, stat: {} as any as fs.Stats });
			expect(file.isDirectory()).toEqual(false);
			done();
		});

		it('returns false when stat does not exist', done => {
			const file = new File({ contents: null });
			expect(file.isDirectory()).toEqual(false);
			done();
		});
	});

	describe('isSymbolic()', () => {
		const fakeStat = {
			isSymbolicLink() {
				return true;
			},
		} as any as fs.Stats;

		it('returns false when the contents are a Buffer', done => {
			const val = new Buffer('test');
			const file = new File({ contents: val, stat: fakeStat });
			expect(file.isSymbolic()).toEqual(false);
			done();
		});

		it('returns false when the contents are a Stream', done => {
			const val = from([]);
			const file = new File({ contents: val, stat: fakeStat });
			expect(file.isSymbolic()).toEqual(false);
			done();
		});

		it('returns true when the contents are null & stat.isSymbolicLink is true', done => {
			const file = new File({ contents: null, stat: fakeStat });
			expect(file.isSymbolic()).toEqual(true);
			done();
		});

		it('returns false when stat exists but does not contain an isSymbolicLink method', done => {
			const file = new File({ contents: null, stat: {} as any as fs.Stats });
			expect(file.isSymbolic()).toEqual(false);
			done();
		});

		it('returns false when stat does not exist', done => {
			const file = new File({ contents: null });
			expect(file.isSymbolic()).toEqual(false);
			done();
		});
	});

	describe('clone()', () => {
		it('copies all attributes over with Buffer contents', done => {
			const options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: new Buffer('test'),
			};
			const file = new File(options);
			const file2 = file.clone();

			expect(file2).toNotBe(file);
			expect(file2.cwd).toEqual(file.cwd);
			expect(file2.base).toEqual(file.base);
			expect(file2.path).toEqual(file.path);
			expect(file2.contents).toNotBe(file.contents);
			expect(file2.contents.toString('utf8')).toEqual(file.contents.toString('utf8'));
			done();
		});

		it('assigns Buffer content reference when contents option is false', done => {
			const options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.js',
				contents: new Buffer('test'),
			};
			const file = new File(options);

			const copy1 = file.clone({ contents: false });
			expect(copy1.contents).toBe(file.contents);

			const copy2 = file.clone();
			expect(copy2.contents).toNotBe(file.contents);

			// TypeScript: expected compilation error
			// var copy3 = file.clone({ contents: 'invalid' });
			// expect(copy3.contents).toNotBe(file.contents);
			// done();
		});

		it('copies all attributes over with Stream contents', done => {
			const options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: from(['wa', 'dup']),
			};
			const file = new File(options);
			const file2 = file.clone();

			expect(file2).toNotBe(file);
			expect(file2.cwd).toEqual(file.cwd);
			expect(file2.base).toEqual(file.base);
			expect(file2.path).toEqual(file.path);
			expect(file2.contents).toNotBe(file.contents);

			let ends = 2;
			let data: Buffer;
			let data2: Buffer;

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
				concat(d => {
					data = d;
				}),
			], assert);

			pipe([
				file2.contents,
				concat(d => {
					data2 = d;
				}),
			], assert);
		});

		it('does not start flowing until all clones flows (data)', done => {
			const options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: from(['wa', 'dup']),
			};
			const file = new File(options);
			const file2 = file.clone();
			let ends = 2;

			let data = '';
			let data2 = '';

			function assert() {
				if (--ends === 0) {
					expect(data).toEqual(data2);
					done();
				}
			}

			// Start flowing file2
			file2.contents.on('data', (chunk: Buffer) => {
				data2 += chunk.toString('utf8');
			});

			process.nextTick(() => {
				// Nothing was written yet
				expect(data).toEqual('');
				expect(data2).toEqual('');

				// Starts flowing file
				file.contents.on('data', (chunk: Buffer) => {
					data += chunk.toString('utf8');
				});
			});

			file2.contents.on('end', assert);
			file.contents.on('end', assert);
		});

		it('does not start flowing until all clones flows (readable)', done => {
			const options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: from(['wa', 'dup']),
			};
			const file = new File(options);
			const file2 = file.clone();

			let data2 = '';

			function assert(data: Buffer) {
				expect(data.toString('utf8')).toEqual(data2);
			}

			// Start flowing file2
			file2.contents.on('readable', function(this: NodeJS.ReadableStream) {
				for (let chunk: string | Buffer = this.read(); chunk !== null; chunk = this.read()) {
					data2 += chunk.toString();
				}
			});

			pipe([
				file.contents,
				concat(assert),
			], done);
		});

		it('copies all attributes over with null contents', done => {
			const options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: null,
			};
			const file = new File(options);
			const file2 = file.clone();

			expect(file2).toNotBe(file);
			expect(file2.cwd).toEqual(file.cwd);
			expect(file2.base).toEqual(file.base);
			expect(file2.path).toEqual(file.path);
			expect(file2.contents).toNotExist();
			done();
		});

		it('properly clones the `stat` property', done => {
			const options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.js',
				contents: new Buffer('test'),
				stat: fs.statSync(__filename),
			};

			const file = new File(options);
			const copy = file.clone();

			expect(copy.stat).toExist();
			if (copy.stat != null) {
				expect(copy.stat.isFile()).toEqual(true);
				expect(copy.stat.isDirectory()).toEqual(false);
				expect(file.stat).toBeAn(fs.Stats);
				expect(copy.stat).toBeAn(fs.Stats);
			}
			done();
		});

		it('properly clones the `history` property', done => {
			const options = {
				cwd: path.normalize('/'),
				base: path.normalize('/test/'),
				path: path.normalize('/test/test.js'),
				contents: new Buffer('test'),
			};

			const file = new File(options);
			const copy = file.clone();

			expect(copy.history[0]).toEqual(options.path);
			copy.path = 'lol';
			expect(file.path).toNotEqual(copy.path);
			done();
		});

		it('copies custom properties', done => {
			const options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: null,
				custom: { meta: {} },
			};

			const file = new File(options) as TestFile;
			const file2 = file.clone();

			expect(file2).toNotBe(file);
			expect(file2.cwd).toEqual(file.cwd);
			expect(file2.base).toEqual(file.base);
			expect(file2.path).toEqual(file.path);
			expect(file2.custom).toNotBe(file.custom);
			expect(file2.custom.meta).toNotBe(file.custom.meta);
			expect(file2.custom).toEqual(file.custom);
			done();
		});

		it('copies history', done => {
			const options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: null,
			};
			const history = [
				path.normalize('/test/test.coffee'),
				path.normalize('/test/test.js'),
				path.normalize('/test/test-938di2s.js'),
			];

			const file = new File(options);
			file.path = history[1];
			file.path = history[2];
			const file2 = file.clone();

			expect(file2.history).toEqual(history);
			expect(file2.history).toNotBe(file.history);
			expect(file2.path).toEqual(history[2]);
			done();
		});

		it('supports deep & shallow copy of all attributes', done => {
			const options = {
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: null,
				custom: { meta: {} },
			};

			const file = new File(options) as TestFile;

			const file2 = file.clone();
			expect(file2.custom).toEqual(file.custom);
			expect(file2.custom).toNotBe(file.custom);
			expect(file2.custom.meta).toEqual(file.custom.meta);
			expect(file2.custom.meta).toNotBe(file.custom.meta);

			const file3 = file.clone(true);
			expect(file3.custom).toEqual(file.custom);
			expect(file3.custom).toNotBe(file.custom);
			expect(file3.custom.meta).toEqual(file.custom.meta);
			expect(file3.custom.meta).toNotBe(file.custom.meta);

			const file4 = file.clone({ deep: true });
			expect(file4.custom).toEqual(file.custom);
			expect(file4.custom).toNotBe(file.custom);
			expect(file4.custom.meta).toEqual(file.custom.meta);
			expect(file4.custom.meta).toNotBe(file.custom.meta);

			const file5 = file.clone(false);
			expect(file5.custom).toEqual(file.custom);
			expect(file5.custom).toBe(file.custom);
			expect(file5.custom.meta).toEqual(file.custom.meta);
			expect(file5.custom.meta).toBe(file.custom.meta);

			const file6 = file.clone({ deep: false });
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

	describe('inspect()', () => {
		it('returns correct format when no contents and no path', done => {
			const file = new File();
			expect(file.inspect()).toEqual('<File >');
			done();
		});

		it('returns correct format when Buffer contents and no path', done => {
			const val = new Buffer('test');
			const file = new File({ contents: val });
			expect(file.inspect()).toEqual('<File <Buffer 74 65 73 74>>');
			done();
		});

		it('returns correct format when Buffer contents and relative path', done => {
			const val = new Buffer('test');
			const file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: val,
			});
			expect(file.inspect()).toEqual('<File "test.coffee" <Buffer 74 65 73 74>>');
			done();
		});

		it('returns correct format when Stream contents and relative path', done => {
			const file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: from([]),
			});
			expect(file.inspect()).toEqual('<File "test.coffee" <CloneableStream>>');
			done();
		});

		it('returns correct format when null contents and relative path', done => {
			const file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
				contents: null,
			});
			expect(file.inspect()).toEqual('<File "test.coffee">');
			done();
		});
	});

	describe('contents get/set', () => {
		it('returns _contents', done => {
			const val = new Buffer('test');
			const file = new File() as TestFile;
			file._contents = val;
			expect(file.contents).toEqual(val);
			done();
		});

		it('sets _contents', done => {
			const val = new Buffer('test');
			const file = new File() as TestFile;
			file.contents = val;
			expect(file._contents).toEqual(val);
			done();
		});

		it('sets a Buffer', done => {
			const val = new Buffer('test');
			const file = new File();
			file.contents = val;
			expect(file.contents).toEqual(val);
			done();
		});

		it('wraps Stream in Cloneable', done => {
			const val = from([]);
			const file = new File();
			file.contents = val;
			expect(isCloneable(file.contents)).toEqual(true);
			done();
		});

		it('does not double wrap a Cloneable', done => {
			const val = from([]);
			const clone = cloneable(val);
			const file = new File();
			file.contents = clone;
			expect((file.contents as any)._original).toBe(val);
			done();
		});

		it('sets null', done => {
			const val = null;
			const file = new File();
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

	describe('cwd get/set', () => {
		it('returns _cwd', done => {
			const val = '/test';
			const file = new File() as TestFile;
			file._cwd = val;
			expect(file.cwd).toEqual(val);
			done();
		});

		it('sets _cwd', done => {
			const val = '/test';
			const file = new File() as TestFile;
			file.cwd = val;
			expect(file._cwd).toEqual(path.normalize(val));
			done();
		});

		it('normalizes and removes trailing separator on set', done => {
			const val = '/test/foo/../foo/';
			const expected = path.normalize(val.slice(0, -1));
			const file = new File();

			file.cwd = val;

			expect(file.cwd).toEqual(expected);

			const val2 = '\\test\\foo\\..\\foo\\';
			const expected2 = path.normalize(isWin ? val2.slice(0, -1) : val2);

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

	describe('base get/set', () => {
		it('proxies cwd when omitted', done => {
			const file = new File({ cwd: '/test' });
			expect(file.base).toEqual(file.cwd);
			done();
		});

		it('proxies cwd when same', done => {
			const file = new File({
				cwd: '/test',
				base: '/test',
			});
			file.cwd = '/foo/';
			expect(file.base).toEqual(file.cwd);

			const file2 = new File({
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

		it('returns _base', done => {
			const val = '/test/';
			const file = new File() as TestFile;
			file._base = val;
			expect(file.base).toEqual(val);
			done();
		});

		it('sets _base', done => {
			const val = '/test/foo';
			const file = new File() as TestFile;
			file.base = val;
			expect(file._base).toEqual(path.normalize(val));
			done();
		});

		it('normalizes and removes trailing separator on set', done => {
			const val = '/test/foo/../foo/';
			const expected = path.normalize(val.slice(0, -1));
			const file = new File();

			file.base = val;

			expect(file.base).toEqual(expected);

			const val2 = '\\test\\foo\\..\\foo\\';
			const expected2 = path.normalize(isWin ? val2.slice(0, -1) : val2);

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

	describe('relative get/set', () => {
		it('throws on set', done => {
			const file = new File();

			function invalid() {
				file.relative = 'test';
			}

			expect(invalid).toThrow('File.relative is generated from the base and path attributes. Do not modify it.');
			done();
		});

		it('throws on get with no path', done => {
			const file = new File();

			function invalid() {
				file.relative;
			}

			expect(invalid).toThrow('No path specified! Can not get relative.');
			done();
		});

		it('returns a relative path from base', done => {
			const file = new File({
				base: '/test/',
				path: '/test/test.coffee',
			});

			expect(file.relative).toEqual('test.coffee');
			done();
		});

		it('returns a relative path from cwd', done => {
			const file = new File({
				cwd: '/',
				path: '/test/test.coffee',
			});

			expect(file.relative).toEqual(path.normalize('test/test.coffee'));
			done();
		});

		it('does not append separator when directory', done => {
			const file = new File({
				base: '/test',
				path: '/test/foo/bar',
				stat: {
					isDirectory() {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.relative).toEqual(path.normalize('foo/bar'));
			done();
		});

		it('does not append separator when symlink', done => {
			const file = new File({
				base: '/test',
				path: '/test/foo/bar',
				stat: {
					isSymbolicLink() {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.relative).toEqual(path.normalize('foo/bar'));
			done();
		});

		it('does not append separator when directory & symlink', done => {
			const file = new File({
				base: '/test',
				path: '/test/foo/bar',
				stat: {
					isDirectory() {
						return true;
					},
					isSymbolicLink() {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.relative).toEqual(path.normalize('foo/bar'));
			done();
		});
	});

	describe('dirname get/set', () => {
		it('throws on get with no path', done => {
			const file = new File();

			function invalid() {
				file.dirname;
			}

			expect(invalid).toThrow('No path specified! Can not get dirname.');
			done();
		});

		it('returns the dirname without trailing separator', done => {
			const file = new File({
				cwd: '/',
				base: '/test',
				path: '/test/test.coffee',
			});

			expect(file.dirname).toEqual(path.normalize('/test'));
			done();
		});

		it('throws on set with no path', done => {
			const file = new File();

			function invalid() {
				file.dirname = '/test';
			}

			expect(invalid).toThrow('No path specified! Can not set dirname.');
			done();
		});

		it('replaces the dirname of the path', done => {
			const file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
			});

			file.dirname = '/test/foo';
			expect(file.path).toEqual(path.normalize('/test/foo/test.coffee'));
			done();
		});
	});

	describe('basename get/set', () => {
		it('throws on get with no path', done => {
			const file = new File();

			function invalid() {
				return file.basename;
			}

			expect(invalid).toThrow('No path specified! Can not get basename.');
			done();
		});

		it('returns the basename of the path', done => {
			const file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
			});

			expect(file.basename).toEqual('test.coffee');
			done();
		});

		it('does not append trailing separator when directory', done => {
			const file = new File({
				path: '/test/foo',
				stat: {
					isDirectory() {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.basename).toEqual('foo');
			done();
		});

		it('does not append trailing separator when symlink', done => {
			const file = new File({
				path: '/test/foo',
				stat: {
					isSymbolicLink() {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.basename).toEqual('foo');
			done();
		});

		it('does not append trailing separator when directory & symlink', done => {
			const file = new File({
				path: '/test/foo',
				stat: {
					isDirectory() {
						return true;
					},
					isSymbolicLink() {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.basename).toEqual('foo');
			done();
		});

		it('removes trailing separator', done => {
			const file = new File({
				path: '/test/foo/',
			});

			expect(file.basename).toEqual('foo');
			done();
		});

		it('removes trailing separator when directory', done => {
			const file = new File({
				path: '/test/foo/',
				stat: {
					isDirectory() {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.basename).toEqual('foo');
			done();
		});

		it('removes trailing separator when symlink', done => {
			const file = new File({
				path: '/test/foo/',
				stat: {
					isSymbolicLink() {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.basename).toEqual('foo');
			done();
		});

		it('removes trailing separator when directory & symlink', done => {
			const file = new File({
				path: '/test/foo/',
				stat: {
					isDirectory() {
						return true;
					},
					isSymbolicLink() {
						return true;
					},
				} as any as fs.Stats,
			});

			expect(file.basename).toEqual('foo');
			done();
		});

		it('throws on set with no path', done => {
			const file = new File();

			function invalid() {
				file.basename = 'test.coffee';
			}

			expect(invalid).toThrow('No path specified! Can not set basename.');
			done();
		});

		it('replaces the basename of the path', done => {
			const file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
			});

			file.basename = 'foo.png';
			expect(file.path).toEqual(path.normalize('/test/foo.png'));
			done();
		});
	});

	describe('stem get/set', () => {
		it('throws on get with no path', done => {
			const file = new File();

			function invalid() {
				file.stem;
			}

			expect(invalid).toThrow('No path specified! Can not get stem.');
			done();
		});

		it('returns the stem of the path', done => {
			const file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
			});

			expect(file.stem).toEqual('test');
			done();
		});

		it('throws on set with no path', done => {
			const file = new File();

			function invalid() {
				file.stem = 'test.coffee';
			}

			expect(invalid).toThrow('No path specified! Can not set stem.');
			done();
		});

		it('replaces the stem of the path', done => {
			const file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
			});

			file.stem = 'foo';
			expect(file.path).toEqual(path.normalize('/test/foo.coffee'));
			done();
		});
	});

	describe('extname get/set', () => {
		it('throws on get with no path', done => {
			const file = new File();

			function invalid() {
				file.extname;
			}

			expect(invalid).toThrow('No path specified! Can not get extname.');
			done();
		});

		it('returns the extname of the path', done => {
			const file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
			});

			expect(file.extname).toEqual('.coffee');
			done();
		});

		it('throws on set with no path', done => {
			const file = new File();

			function invalid() {
				file.extname = '.coffee';
			}

			expect(invalid).toThrow('No path specified! Can not set extname.');
			done();
		});

		it('replaces the extname of the path', done => {
			const file = new File({
				cwd: '/',
				base: '/test/',
				path: '/test/test.coffee',
			});

			file.extname = '.png';
			expect(file.path).toEqual(path.normalize('/test/test.png'));
			done();
		});
	});

	describe('path get/set', () => {
		it('records path in history upon instantiation', done => {
			const file = new File({
				cwd: '/',
				path: '/test/test.coffee',
			});
			const history = [
				path.normalize('/test/test.coffee'),
			];

			expect(file.path).toEqual(history[0]);
			expect(file.history).toEqual(history);
			done();
		});

		it('records path in history when set', done => {
			const val = path.normalize('/test/test.js');
			const file = new File({
				cwd: '/',
				path: '/test/test.coffee',
			});
			const history = [
				path.normalize('/test/test.coffee'),
				val,
			];

			file.path = val;
			expect(file.path).toEqual(val);
			expect(file.history).toEqual(history);

			const val2 = path.normalize('/test/test.es6');
			history.push(val2);

			file.path = val2;
			expect(file.path).toEqual(val2);
			expect(file.history).toEqual(history);
			done();
		});

		it('does not record path in history when set to the current path', done => {
			const val = path.normalize('/test/test.coffee');
			const file = new File({
				cwd: '/',
				path: val,
			});
			const history = [
				val,
			];

			file.path = val;
			file.path = val;
			expect(file.path).toEqual(val);
			expect(file.history).toEqual(history);
			done();
		});

		it('does not record path in history when set to empty string', done => {
			const val = path.normalize('/test/test.coffee');
			const file = new File({
				cwd: '/',
				path: val,
			});
			const history = [
				val,
			];

			file.path = '';
			expect(file.path).toEqual(val);
			expect(file.history).toEqual(history);
			done();
		});

		// TypeScript: known issue, see the comment for the `base` property.
		// it('throws on set with null path', done => {
		//   var file = new File();

		//   expect(file.path).toNotExist();
		//   expect(file.history).toEqual([]);

		//   function invalid() {
		//     file.path = null;
		//   }

		//   expect(invalid).toThrow('path should be a string.');
		//   done();
		// });

		it('normalizes the path upon set', done => {
			const val = '/test/foo/../test.coffee';
			const expected = path.normalize(val);
			const file = new File();

			file.path = val;

			expect(file.path).toEqual(expected);
			expect(file.history).toEqual([expected]);
			done();
		});

		it('removes the trailing separator upon set', done => {
			const file = new File();
			file.path = '/test/';

			expect(file.path).toEqual(path.normalize('/test'));
			expect(file.history).toEqual([path.normalize('/test')]);
			done();
		});

		it('removes the trailing separator upon set when directory', done => {
			const file = new File({
				stat: {
					isDirectory() {
						return true;
					},
				} as any as fs.Stats,
			});
			file.path = '/test/';

			expect(file.path).toEqual(path.normalize('/test'));
			expect(file.history).toEqual([path.normalize('/test')]);
			done();
		});

		it('removes the trailing separator upon set when symlink', done => {
			const file = new File({
				stat: {
					isSymbolicLink() {
						return true;
					},
				} as any as fs.Stats,
			});
			file.path = '/test/';

			expect(file.path).toEqual(path.normalize('/test'));
			expect(file.history).toEqual([path.normalize('/test')]);
			done();
		});

		it('removes the trailing separator upon set when directory & symlink', done => {
			const file = new File({
				stat: {
					isDirectory() {
						return true;
					},
					isSymbolicLink() {
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

	describe('symlink get/set', () => {
		it('return null on get with no symlink', done => {
			const file = new File();

			expect(file.symlink).toEqual(null);
			done();
		});

		it('returns _symlink', done => {
			const val = '/test/test.coffee';
			const file = new File() as TestFile;
			file._symlink = val;

			expect(file.symlink).toEqual(val);
			done();
		});

		it('throws on set with non-string', done => {
			const file = new File();

			function invalid() {
				file.symlink = null;
			}

			expect(invalid).toThrow('symlink should be a string');
			done();
		});

		it('sets _symlink', done => {
			const val = '/test/test.coffee';
			const expected = path.normalize(val);
			const file = new File() as TestFile;
			file.symlink = val;

			expect(file._symlink).toEqual(expected);
			done();
		});

		it('allows relative symlink', done => {
			const val = 'test.coffee';
			const file = new File();
			file.symlink = val;

			expect(file.symlink).toEqual(val);
			done();
		});

		it('normalizes and removes trailing separator upon set', done => {
			const val = '/test/foo/../bar/';
			const expected = path.normalize(val.slice(0, -1));
			const file = new File();
			file.symlink = val;

			expect(file.symlink).toEqual(expected);
			done();
		});
	});
});
