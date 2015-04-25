﻿/// <reference path="../mocha/mocha.d.ts" />
/// <reference path="../should/should.d.ts" />
/// <reference path='../gulp/gulp.d.ts' />
/// <reference path='../through2/through2.d.ts' />
/// <reference path='gulp-util.d.ts' />

import gulp = require('gulp');
import util = require('gulp-util');
import path = require('path');
import should = require('should');
import Stream = require('stream');
import through = require('through2');
var es = require('event-stream');

// ReSharper disable WrongExpressionStatement
describe('File()', () => {
	it('should return a valid file', done => {
		var fname = path.join(__dirname, './fixtures/test.coffee');
		var base = path.join(__dirname, './fixtures/');
		var file = new util.File({
			base: base,
			cwd: __dirname,
			path: fname
		});
		should.exist(file, 'root');
		should.exist(file.relative, 'relative');
		should.exist(file.path, 'path');
		should.exist(file.cwd, 'cwd');
		should.exist(file.base, 'base');
		file.path.should.equal(fname);
		file.cwd.should.equal(__dirname);
		file.base.should.equal(base);
		file.relative.should.equal('test.coffee');
		done();
	});

	it('should return a valid file 2', done => {
		var fname = path.join(__dirname, './fixtures/test.coffee');
		var base = __dirname;
		var file = new util.File({
			base: base,
			cwd: __dirname,
			path: fname
		});
		should.exist(file, 'root');
		should.exist(file.relative, 'relative');
		should.exist(file.path, 'path');
		should.exist(file.cwd, 'cwd');
		should.exist(file.base, 'base');
		file.path.should.equal(fname);
		file.cwd.should.equal(__dirname);
		file.base.should.equal(base);
		file.relative.should.equal(path.normalize('fixtures/test.coffee'));
		done();
	});
});

describe('replaceExtension()', () => {
	it('should return a valid replaced extension on nested', done => {
		var fname = path.join(__dirname, './fixtures/test.coffee');
		var expected = path.join(__dirname, './fixtures/test.js');
		var nu = util.replaceExtension(fname, '.js');
		should.exist(nu);
		nu.should.equal(expected);
		done();
	});

	it('should return a valid replaced extension on flat', done => {
		var fname = 'test.coffee';
		var expected = 'test.js';
		var nu = util.replaceExtension(fname, '.js');
		should.exist(nu);
		nu.should.equal(expected);
		done();
	});

	it('should not return a valid replaced extension on empty string', done => {
		var fname = '';
		var expected = '';
		var nu = util.replaceExtension(fname, '.js');
		should.exist(nu);
		nu.should.equal(expected);
		done();
	});

});

describe('colors', () => {
	it('should be a chalk instance', done => {
		util.colors.should.equal(require('chalk'));
		done();
	});
});
util.log('stuff happened', 'Really it did', util.colors.cyan('123'));

describe('date', () => {
	it('should be a date format instance', done => {
		util.date.should.equal(require('dateformat'));
		done();
	});
	it('should return today\'s date', done => {
		var time = new Date();
		var dateutil = util.date('HH:MM:ss');
		dateutil.should.equal(('0' + time.getHours()).slice(-2) + ':' + ('0' + time.getMinutes()).slice(-2) + ':' + ('0' + time.getSeconds()).slice(-2));
		done();
	});
});

var now = new Date();

// Basic usage
util.date(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
// Saturday, June 9th, 2007, 5:46:21 PM

// You can use one of several named masks
util.date(now, 'isoDateTime');
// 2007-06-09T17:46:21

// ...Or add your own
util.date.masks.hammerTime = 'HH:MM! "Can\'t touch this!"';
util.date(now, 'hammerTime');
// 17:46! Can't touch this!

// When using the standalone dateFormat function,
// you can also provide the date as a string
util.date('Jun 9 2007', 'fullDate');
// Saturday, June 9, 2007

// Note that if you don't include the mask argument,
// dateFormat.masks.default is used
util.date(now);
// Sat Jun 09 2007 17:46:21

// And if you don't include the date argument,
// the current date and time is used
util.date();
// Sat Jun 09 2007 17:46:22

// You can also skip the date argument (as long as your mask doesn't
// contain any numbers), in which case the current date/time is used
util.date('longTime');
// 5:46:22 PM EST

// And finally, you can convert local time to UTC time. Simply pass in
// true as an additional argument (no argument skipping allowed in this case):
util.date(now, 'longTime', true);
// 10:46:21 PM UTC

// ...Or add the prefix 'UTC:' or 'GMT:' to your mask.
util.date(now, 'UTC:h:MM:ss TT Z');
// 10:46:21 PM UTC

// You can also get the ISO 8601 week of the year:
util.date(now, 'W');
// 42

// and also get the ISO 8601 numeric representation of the day of the week:
util.date(now, 'N');
// 6

describe('log()', () => {
	it('should work i guess', done => {
		var writtenValue = '';

		util.log(1, 2, 3, 4, 'five');
		var time = util.date(new Date(), 'HH:MM:ss');
		writtenValue.should.eql('[' + util.colors.gray(time) + '] 1 2 3 4 five\n');

		done();
	});
});

describe('template()', () => {
	it('should work with just a template', done => {
		var opt = {
			name: 'todd',
			file: {
				path: 'hi.js'
			}
		};
		var expected = 'test todd hi.js';

		var tmpl = util.template('test <%= name %> <%= file.path %>');
		should.exist(tmpl);
		'function'.should.equal(typeof (tmpl));

		// eval it now
		var etmpl = tmpl(opt);
		'string'.should.equal(typeof (etmpl));
		etmpl.should.equal(expected);
		done();
	});

	it('should work with a template and data', done => {
		var opt = {
			name: 'todd',
			file: {
				path: 'hi.js'
			}
		};
		var expected = 'test todd hi.js';
		var tmpl = util.template('test <%= name %> <%= file.path %>', opt);
		should.exist(tmpl);
		'string'.should.equal(typeof (tmpl));
		tmpl.should.equal(expected);
		done();
	});

	//it('should throw an error when no file object is passed', done => {
	//	var opt = {
	//		name: 'todd'
	//	};
	//	try {
	//		var tmpl = util.template('test <%= name %> <%= file.path %>', opt);
	//	} catch (err) {
	//		should.exist(err);
	//		done();
	//	}
	//});

	it('should ignore modified templateSettings', done => {
		var templateSettings = require('lodash.templatesettings');
		templateSettings.interpolate = /\{\{([\s\S]+?)\}\}/g;

		var opt = {
			name: 'todd',
			file: {
				path: 'hi.js'
			}
		};
		var expected = 'test {{name}} hi.js';

		var tmpl = util.template('test {{name}} <%= file.path %>');
		should.exist(tmpl);
		'function'.should.equal(typeof (tmpl));

		// eval it now
		var etmpl = tmpl(opt);
		'string'.should.equal(typeof (etmpl));
		etmpl.should.equal(expected);

		done();
	});

	it('should allow ES6 delimiters', done => {
		var opt = {
			name: 'todd',
			file: {
				path: 'hi.js'
			}
		};
		var expected = 'test todd hi.js';

		var tmpl = util.template('test ${name} ${file.path}');
		should.exist(tmpl);
		'function'.should.equal(typeof (tmpl));

		// eval it now
		var etmpl = tmpl(opt);
		'string'.should.equal(typeof (etmpl));
		etmpl.should.equal(expected);

		done();
	});

});

describe('env', () => {
	it('should exist', done => {
		should.exist(util.env);
		should.exist(util.env._);
		done();
	});
});

describe('noop()', () => {
	it('should return a stream', done => {
		util.isStream(util.noop()).should.equal(true);
		done();
	});
	it('should return a stream that passes through all data', done => {
		var inp = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		var stream = util.noop();
		es.readArray(inp)
			.pipe(stream)
			.pipe(es.writeArray((err: Error, arr: any[]) => {
				should.not.exist(err);
				should.exist(arr);
				arr.should.eql(inp);
				done();
			}));
	});
});

describe('beep()', () => {
	it('should send the right code to stdout', done => {
		var writtenValue = '';

		util.beep();
		writtenValue.should.equal('\x07');

		done();
	});
});

describe('isStream()', () => {
	it('should work on a stream', done => {
		util.isStream(through()).should.equal(true);
		done();
	});
	it('should not work on a buffer', done => {
		util.isStream(new Buffer('huh')).should.equal(false);
		done();
	});
});

describe('isBuffer()', () => {
	it('should work on a buffer', done => {
		util.isBuffer(new Buffer('huh')).should.equal(true);
		done();
	});
	it('should not work on a stream', done => {
		util.isBuffer(through()).should.equal(false);
		done();
	});
});

describe('isNull()', () => {
	it('should work on a null', done => {
		util.isNull(null).should.equal(true);
		done();
	});
	it('should not work on a stream', done => {
		util.isNull(through()).should.equal(false);
		done();
	});
	it('should not work on undefined', done => {
		util.isNull(undefined).should.equal(false);
		done();
	});
});

// linefeed
declare var lines: string[];
lines.join(util.linefeed);

describe('combine()', () => {
	it('should return a function', done => {
		var src = [1, 2, 3];
		var inp = es.readArray(src);
		var factory = util.combine(inp);
		factory.should.be.type('function');
		done();
	});
	it('should return a function that returns a stream combination', done => {
		var src = [1, 2, 3];
		var inp = es.readArray(src);
		var inp2 = es.writeArray((err: Error, data: any[]) => {
			should.not.exist(err);
			data.should.eql(src);
			done();
		});
		var factory = util.combine(inp, inp2);
		factory().should.be.instanceof(Stream.Readable);
	});
	it('should return a function that returns a stream combination when given an array', done => {
		var src = [1, 2, 3];
		var inp = es.readArray(src);
		var inp2 = es.writeArray((err: Error, data: any[]) => {
			should.not.exist(err);
			data.should.eql(src);
			done();
		});
		var factory = util.combine([inp, inp2]);
		factory().should.be.instanceof(Stream.Readable);
	});
});

describe('buffer()', () => {
	it('should buffer stuff and return an array into the callback', done => {
		var src = [1, 2, 3];
		var inp = es.readArray(src);
		inp.pipe(util.buffer((err: Error, data: any[]) => {
			should.not.exist(err);
			should.exist(data);
			data.should.eql(src);
			done();
		}));
	});
	it('should buffer stuff and emit it as a data event', done => {
		var src = [1, 2, 3];
		var inp = es.readArray(src);
		inp.pipe(util.buffer()).on('data', (data: any[]) => {
			should.exist(data);
			data.should.eql(src);
			done();
		});
	});
	it('should buffer stuff and return a stream with the buffered data', done => {
		var src = [1, 2, 3];
		var inp = es.readArray(src);
		inp.pipe(util.buffer()).pipe(es.through((data: any[]) => {
			should.exist(data);
			data.should.eql(src);
			done();
		}));
	});
});

describe('PluginError()', () => {
	it('should default name to Error', () => {
		var err = new util.PluginError('test', 'something broke');
		err.name.should.equal('Error');
	});

	it('should default name to Error, even when wrapped error has no name', () => {
		var realErr = { message: 'something broke' };
		var err = new util.PluginError('test', realErr);
		err.name.should.equal('Error');
	});

	it('should print the plugin name in toString', () => {
		var err = new util.PluginError('test', 'something broke');
		err.toString().indexOf('test').should.not.equal(-1);
	});

	it('should not include the stack by default in toString', () => {
		var err = new util.PluginError('test', 'something broke');
		// just check that there are no 'at' lines
		err.toString().indexOf('at').should.equal(-1);
	});

	it('should include the stack when specified in toString', () => {
		var err = new util.PluginError('test', 'something broke', { stack: "at huh", showStack: true });
		// just check that there are 'at' lines
		err.toString().indexOf('at').should.not.equal(-1);
	});

	it('should take arguments as one object', () => {
		var err = new util.PluginError({
			plugin: 'test',
			message: 'something broke'
		});
		err.plugin.should.equal('test');
		err.message.should.equal('something broke');
	});

	it('should take arguments as plugin name and one object', () => {
		var err = new util.PluginError('test', {
			message: 'something broke'
		});
		err.plugin.should.equal('test');
		err.message.should.equal('something broke');
	});

	it('should take arguments as plugin name and message', () => {
		var err = new util.PluginError('test', 'something broke');
		err.plugin.should.equal('test');
		err.message.should.equal('something broke');
	});

	it('should take arguments as plugin name, message, and one object', () => {
		var err = new util.PluginError('test', 'something broke', { showStack: true });
		err.plugin.should.equal('test');
		err.message.should.equal('something broke');
		err.showStack.should.equal(true);
	});

	it('should take arguments as plugin name, error, and one object', () => {
		var realErr = new Error('something broke');
		(<any>realErr).fileName = 'original.js';
		var err = new util.PluginError('test', realErr, { showStack: true, fileName: 'override.js' });
		err.plugin.should.equal('test');
		err.message.should.equal('something broke');
		err.fileName.should.equal('override.js');
		err.showStack.should.equal(true);
	});

	it('should take properties from error', () => {
		var realErr = new Error('something broke');
		(<any>realErr).abstractProperty = 'abstract';
		var err = new util.PluginError('test', realErr);
		err.plugin.should.equal('test');
		err.message.should.equal('something broke');
		(<any>err).abstractProperty.should.equal('abstract');
	});

	it('should be configured to show properties by default', () => {
		var err = new util.PluginError('test', 'something broke');
		err.showProperties.should.be.true;
	});

	it('should not be configured to take option to show properties', () => {
		var err = new util.PluginError('test', 'something broke', { showProperties: false });
		err.showProperties.should.be.false;
	});

	it('should show properties', () => {
		var err = new util.PluginError('test', 'it broke', { showProperties: true });
		err.fileName = 'original.js';
		err.lineNumber = 35;
		err.toString().indexOf('it broke').should.not.equal(-1);
		err.toString().indexOf('message:').should.equal(-1);
		err.toString().indexOf('fileName:').should.not.equal(-1);
	});

	it('should show properties', () => {
		var realErr = new Error('something broke');
		(<any>realErr).fileName = 'original.js';
		(<any>realErr).lineNumber = 35;
		var err = new util.PluginError('test', realErr, { showProperties: true });
		err.toString().indexOf('message:').should.equal(-1);
		err.toString().indexOf('fileName:').should.not.equal(-1);
	});

	it('should not show properties', () => {
		var realErr = new Error('something broke');
		(<any>realErr).fileName = 'original.js';
		(<any>realErr).lineNumber = 35;
		var err = new util.PluginError('test', realErr, { showProperties: false });
		err.toString().indexOf('message:').should.equal(-1);
		err.toString().indexOf('fileName:').should.equal(-1);
	});

	it('should not show properties, but should show stack', () => {
		var err = new util.PluginError('test', 'it broke', { stack: 'test stack', showStack: true, showProperties: false });
		err.fileName = 'original.js';
		err.lineNumber = 35;
		err.toString().indexOf('message:').should.equal(-1);
		err.toString().indexOf('fileName:').should.equal(-1);
		err.toString().indexOf('test stack').should.not.equal(-1);
	});

	it('should not show properties, but should show stack for real error', () => {
		var realErr = new Error('something broke');
		(<any>realErr).fileName = 'original.js';
		(<any>realErr).lineNumber = 35;
		(<any>realErr).stack = 'test stack';
		var err = new util.PluginError('test', realErr, { showStack: true, showProperties: false });
		err.toString().indexOf('message:').should.equal(-1);
		err.toString().indexOf('fileName:').should.equal(-1);
		err.toString().indexOf('test stack').should.not.equal(-1);
	});

	it('should not show properties, but should show stack for _stack', () => {
		var realErr = new Error('something broke');
		(<any>realErr).fileName = 'original.js';
		(<any>realErr).lineNumber = 35;
		(<any>realErr)._stack = 'test stack';
		var err = new util.PluginError('test', realErr, { showStack: true, showProperties: false });
		err.toString().indexOf('message:').should.equal(-1);
		err.toString().indexOf('fileName:').should.equal(-1);
		err.toString().indexOf('test stack').should.not.equal(-1);
	});

	it('should show properties and stack', () => {
		var realErr = new Error('something broke');
		(<any>realErr).fileName = 'original.js';
		(<any>realErr).stack = 'test stack';
		var err = new util.PluginError('test', realErr, { showStack: true });
		err.toString().indexOf('message:').should.equal(-1);
		err.toString().indexOf('fileName:').should.not.equal(-1);
		err.toString().indexOf('test stack').should.not.equal(-1);
	});

	it('should show properties added after the error is created', () => {
		var realErr = new Error('something broke');
		var err = new util.PluginError('test', realErr);
		err.fileName = 'original.js';
		err.toString().indexOf('message:').should.equal(-1);
		err.toString().indexOf('fileName:').should.not.equal(-1);
	});

	it('should toString quickly', function(done) {
		this.timeout(100);

		var err = new util.PluginError('test', 'it broke', { showStack: true });
		var str = err.toString();

		done();
	});

	it('should toString quickly with original error', function(done) {
		this.timeout(100);

		var realErr = new Error('it broke');
		var err = new util.PluginError('test', realErr, { showStack: true });
		var str = err.toString();

		done();
	});

	it('should not show "Details:" if there are no properties to show', () => {
		var err = new util.PluginError('plugin', 'message');
		err.toString().indexOf('Details:').should.equal(-1);
	});
});
