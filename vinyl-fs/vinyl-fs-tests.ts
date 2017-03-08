// from src

import * as vfs from 'vinyl-fs';

import * as path from 'path';
import * as fs from 'fs'; // require('graceful-fs');

// import bufEqual = require('buffer-equal');
declare var bufEqual: any;
// import through = require('through2');
declare var through: any;
import File = require('vinyl');
// var spies = require('./spy');
declare var spies: any;

import * as should from 'should';
import 'mocha';

declare var gulp: any;
declare var bufferStream: any;

var dataWrap = (fn: any) => {
   return (data: any, enc: any, cb: any) => {
      fn(data);
      cb();
   };
};

describe('source stream', () => {

   it('should explode on invalid glob (empty)', done => {
      var stream: any;
      try {
         stream = gulp.src();
      } catch (err) {
         should.exist(err);
         should.not.exist(stream);
         done();
      }
   });

   it('should explode on invalid glob (number)', done => {
      var stream: any;
      try {
         stream = gulp.src(123);
      } catch (err) {
         should.exist(err);
         should.not.exist(stream);
         done();
      }
   });

   it('should explode on invalid glob (empty array)', done => {
      var stream: any;
      try {
         stream = gulp.src([]);
      } catch (err) {
         should.exist(err);
         should.not.exist(stream);
         done();
      }
   });

   it('should pass through writes', done => {
      var expectedPath = path.join(__dirname, "./fixtures/test.coffee");
      var expectedContent = fs.readFileSync(expectedPath);

      var expectedFile = new File({
         base: __dirname,
         cwd: __dirname,
         path: expectedPath,
         contents: expectedContent
      });

      var onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].should.equal(expectedFile);
         bufEqual(buffered[0].contents, expectedContent).should.equal(true);
         done();
      };

      var stream = vfs.src("./fixtures/nothing.coffee");

      var buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should glob a file with default settings', done => {
      var expectedPath = path.join(__dirname, "./fixtures/test.coffee");
      var expectedContent = fs.readFileSync(expectedPath);

      var onEnd = () => {
         buffered.length.should.equal(1);
         should.exist(buffered[0].stat);
         buffered[0].path.should.equal(expectedPath);
         buffered[0].isBuffer().should.equal(true);
         bufEqual(buffered[0].contents, expectedContent).should.equal(true);
         done();
      };

      var stream = vfs.src("./fixtures/*.coffee", { cwd: __dirname });

      var buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
   });

   it('should glob a file with default settings and relative cwd', done => {
      var expectedPath = path.join(__dirname, "./fixtures/test.coffee");
      var expectedContent = fs.readFileSync(expectedPath);

      var onEnd = () => {
         buffered.length.should.equal(1);
         should.exist(buffered[0].stat);
         buffered[0].path.should.equal(expectedPath);
         buffered[0].isBuffer().should.equal(true);
         bufEqual(buffered[0].contents, expectedContent).should.equal(true);
         done();
      };

      var stream = vfs.src("./fixtures/*.coffee", { cwd: path.relative(process.cwd(), __dirname) });

      var buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
   });

   it('should glob a directory with default settings', done => {
      var expectedPath = path.join(__dirname, "./fixtures/wow");

      var onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].path.should.equal(expectedPath);
         buffered[0].isNull().should.equal(true);
         buffered[0].isDirectory().should.equal(true);
         done();
      };

      var stream = vfs.src("./fixtures/wow/", { cwd: __dirname });

      var buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
   });

   it('should glob a file with with no contents', done => {
      var expectedPath = path.join(__dirname, "./fixtures/test.coffee");
      var expectedContent = fs.readFileSync(expectedPath);

      var onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].path.should.equal(expectedPath);
         buffered[0].isNull().should.equal(true);
         should.not.exist(buffered[0].contents);
         done();
      };

      var stream = vfs.src("./fixtures/*.coffee", { cwd: __dirname, read: false });

      var buffered: any = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
   });

   it('should glob a file with streaming contents', done => {
      var expectedPath = path.join(__dirname, "./fixtures/test.coffee");
      var expectedContent = fs.readFileSync(expectedPath);

      var onEnd = () => {
         buffered.length.should.equal(1);
         should.exist(buffered[0].stat);
         buffered[0].path.should.equal(expectedPath);
         buffered[0].isStream().should.equal(true);

         var contentBuffer = new Buffer([]);
         var contentBufferStream = through(dataWrap((data: any) => {
            contentBuffer = Buffer.concat([contentBuffer, data]);
         }));
         buffered[0].contents.pipe(contentBufferStream);
         buffered[0].contents.once('end', () => {
            bufEqual(contentBuffer, expectedContent);
            done();
         });
      };

      var stream = vfs.src("./fixtures/*.coffee", { cwd: __dirname, buffer: false });

      var buffered: any = [];
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
// require('mocha');

var wipeOut = (cb: any) => {
   rimraf(path.join(__dirname, "./out-fixtures/"), cb);
};

var dataWrap = (fn: any) => {
   return (data: any, enc: any, cb: any) => {
      fn(data);
      cb();
   };
};

var realMode = (n: any) => {
   return n & parseInt("07777", 8);
};

describe('dest stream', () => {
   beforeEach(wipeOut);
   afterEach(wipeOut);

   it('should explode on invalid folder', done => {
      var stream: any;
      try {
         stream = gulp.dest();
      } catch (err) {
         should.exist(err);
         should.not.exist(stream);
         done();
      }
   });

   it('should pass through writes with cwd', done => {
      var inputPath = path.join(__dirname, "./fixtures/test.coffee");

      var expectedFile = new File({
         base: __dirname,
         cwd: __dirname,
         path: inputPath,
         contents: null
      });

      var onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].should.equal(expectedFile);
         done();
      };

      var stream = vfs.dest("./out-fixtures/", { cwd: __dirname });

      var buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should pass through writes with default cwd', done => {
      var inputPath = path.join(__dirname, "./fixtures/test.coffee");

      var expectedFile = new File({
         base: __dirname,
         cwd: __dirname,
         path: inputPath,
         contents: null
      });

      var onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].should.equal(expectedFile);
         done();
      };

      var stream = vfs.dest(path.join(__dirname, "./out-fixtures/"));

      var buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should not write null files', done => {
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

      var onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].should.equal(expectedFile);
         buffered[0].cwd.should.equal(expectedCwd, 'cwd should have changed');
         buffered[0].base.should.equal(expectedBase, 'base should have changed');
         buffered[0].path.should.equal(expectedPath, 'path should have changed');
         fs.existsSync(expectedPath).should.equal(false);
         done();
      };

      var stream = vfs.dest("./out-fixtures/", { cwd: __dirname });

      var buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should write buffer files to the right folder with relative cwd', done => {
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

      var onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].should.equal(expectedFile);
         buffered[0].cwd.should.equal(expectedCwd, 'cwd should have changed');
         buffered[0].base.should.equal(expectedBase, 'base should have changed');
         buffered[0].path.should.equal(expectedPath, 'path should have changed');
         fs.existsSync(expectedPath).should.equal(true);
         bufEqual(fs.readFileSync(expectedPath), expectedContents).should.equal(true);
         done();
      };

      var stream = vfs.dest("./out-fixtures/", { cwd: path.relative(process.cwd(), __dirname) });

      var buffered: any = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should write buffer files to the right folder', done => {
      var inputPath = path.join(__dirname, "./fixtures/test.coffee");
      var inputBase = path.join(__dirname, "./fixtures/");
      var expectedPath = path.join(__dirname, "./out-fixtures/test.coffee");
      var expectedContents = fs.readFileSync(inputPath);
      var expectedCwd = __dirname;
      var expectedBase = path.join(__dirname, "./out-fixtures");
      var expectedMode = parseInt("0655", 8);

      var expectedFile = new File({
         base: inputBase,
         cwd: __dirname,
         path: inputPath,
         contents: expectedContents,
         stat: <fs.Stats> {
            mode: expectedMode
         }
      });

      var onEnd = () => {
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

      var stream = vfs.dest("./out-fixtures/", { cwd: __dirname });

      var buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should write streaming files to the right folder', done => {
      var inputPath = path.join(__dirname, "./fixtures/test.coffee");
      var inputBase = path.join(__dirname, "./fixtures/");
      var expectedPath = path.join(__dirname, "./out-fixtures/test.coffee");
      var expectedContents = fs.readFileSync(inputPath);
      var expectedCwd = __dirname;
      var expectedBase = path.join(__dirname, "./out-fixtures");
      var expectedMode = parseInt("0655", 8);

      var contentStream = through.obj();
      var expectedFile = new File({
         base: inputBase,
         cwd: __dirname,
         path: inputPath,
         contents: contentStream,
         stat: <fs.Stats> {
            mode: expectedMode
         }
      });

      var onEnd = () => {
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

      var stream = vfs.dest("./out-fixtures/", { cwd: __dirname });

      var buffered: any = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      setTimeout(() => {
         contentStream.write(expectedContents);
         contentStream.end();
      }, 100);
      stream.end();
   });

   it('should write directories to the right folder', done => {
      var inputPath = path.join(__dirname, "./fixtures/test");
      var inputBase = path.join(__dirname, "./fixtures/");
      var expectedPath = path.join(__dirname, "./out-fixtures/test");
      var expectedCwd = __dirname;
      var expectedBase = path.join(__dirname, "./out-fixtures");
      var expectedMode = parseInt("0655", 8);

      var expectedFile = new File({
         base: inputBase,
         cwd: __dirname,
         path: inputPath,
         contents: null,
         stat: <fs.Stats> {
            isDirectory: () => true,
            mode: expectedMode
         }
      });

      var onEnd = () => {
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

      var stream = vfs.dest("./out-fixtures/", { cwd: __dirname });

      var buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should allow piping multiple dests in streaming mode', done => {
      var inputPath1 = path.join(__dirname, "./out-fixtures/multiple-first");
      var inputPath2 = path.join(__dirname, "./out-fixtures/multiple-second");
      var inputBase = path.join(__dirname, "./out-fixtures/");
      var srcPath = path.join(__dirname, "./fixtures/test.coffee");
      var stream1 = vfs.dest('./out-fixtures/', { cwd: __dirname });
      var stream2 = vfs.dest('./out-fixtures/', { cwd: __dirname });
      var content = fs.readFileSync(srcPath);
      var rename = through.obj((file: any, _: any, next: any) => {
         file.path = inputPath2;
         this.push(file);
         next();
      });

      stream1.on('data', (file: any) => {
         file.path.should.equal(inputPath1);
      });

      stream1.pipe(rename).pipe(stream2);
      stream2.on('data', (file: any) => {
         file.path.should.equal(inputPath2);
      }).once('end', () => {
         fs.readFileSync(inputPath1, 'utf8').should.equal(content.toString());
         fs.readFileSync(inputPath2, 'utf8').should.equal(content.toString());
         done();
      });

      var file = new File({
         base: inputBase,
         path: inputPath1,
         cwd: __dirname,
         contents: content
      });

      stream1.write(file);
      stream1.end();
   });

});



// This test is from


var chmodSpy = spies.chmodSpy;
var statSpy = spies.statSpy;

var wipeOut = (cb: any) => {
   rimraf(path.join(__dirname, './out-fixtures/'), cb);
   spies.setError('false');
   statSpy.reset();
   chmodSpy.reset();
};

var dataWrap = (fn: any) => {
   return (data: any, enc: any, cb: any) => {
      fn(data);
      cb();
   };
};

var realMode = (n: any) => {
   return n & parseInt("07777", 8);
};

describe('symlink stream', () => {
   beforeEach(wipeOut);
   afterEach(wipeOut);

   it('should explode on invalid folder', (done: any) => {
      var stream: any;
      try {
         stream = gulp.symlink();
      } catch (err) {
         should.exist(err);
         should.not.exist(stream);
         done();
      }
   });

   it('should pass through writes with cwd', done => {
      var inputPath = path.join(__dirname, './fixtures/test.coffee');

      var expectedFile = new File({
         base: __dirname,
         cwd: __dirname,
         path: inputPath,
         contents: null
      });

      var onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].should.equal(expectedFile);
         done();
      };

      var stream = vfs.symlink('./out-fixtures/', { cwd: __dirname });

      var buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should pass through writes with default cwd', done => {
      var inputPath = path.join(__dirname, './fixtures/test.coffee');

      var expectedFile = new File({
         base: __dirname,
         cwd: __dirname,
         path: inputPath,
         contents: null
      });

      var onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].should.equal(expectedFile);
         done();
      };

      var stream = vfs.symlink(path.join(__dirname, './out-fixtures/'));

      var buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should make link to the right folder with relative cwd', done => {
      var inputPath = path.join(__dirname, './fixtures/test.coffee');
      var inputBase = path.join(__dirname, './fixtures/');
      var expectedPath = path.join(__dirname, './out-fixtures/test.coffee');
      var expectedCwd = __dirname;
      var expectedBase = path.join(__dirname, './out-fixtures');
      var expectedContents = fs.readFileSync(inputPath);

      var expectedFile = new File({
         base: inputBase,
         cwd: __dirname,
         path: inputPath,
         contents: expectedContents
      });

      var onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].should.equal(expectedFile);
         buffered[0].cwd.should.equal(__dirname, 'cwd should have changed');
         buffered[0].base.should.equal(expectedBase, 'base should have changed');
         buffered[0].path.should.equal(expectedPath, 'path should have changed');
         fs.existsSync(expectedPath).should.equal(true);
         bufEqual(fs.readFileSync(expectedPath), expectedContents).should.equal(true);
         fs.readlinkSync(expectedPath).should.equal(inputPath);
         done();
      };

      var stream = vfs.symlink('./out-fixtures/', { cwd: path.relative(process.cwd(), __dirname) });

      var buffered: any = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should write buffer files to the right folder with function and relative cwd', done => {
      var inputPath = path.join(__dirname, './fixtures/test.coffee');
      var inputBase = path.join(__dirname, './fixtures/');
      var expectedPath = path.join(__dirname, './out-fixtures/test.coffee');
      var expectedCwd = __dirname;
      var expectedBase = path.join(__dirname, './out-fixtures');
      var expectedContents = fs.readFileSync(inputPath);

      var expectedFile = new File({
         base: inputBase,
         cwd: __dirname,
         path: inputPath,
         contents: expectedContents
      });

      var onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].should.equal(expectedFile);
         buffered[0].cwd.should.equal(__dirname, 'cwd should have changed');
         buffered[0].base.should.equal(expectedBase, 'base should have changed');
         buffered[0].path.should.equal(expectedPath, 'path should have changed');
         fs.existsSync(expectedPath).should.equal(true);
         bufEqual(fs.readFileSync(expectedPath), expectedContents).should.equal(true);
         fs.readlinkSync(expectedPath).should.equal(inputPath);
         done();
      };

      var stream = vfs.symlink(file => {
         should.exist(file);
         file.should.equal(expectedFile);
         return './out-fixtures';
      }, { cwd: path.relative(process.cwd(), __dirname) });

      var buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should write buffer files to the right folder', done => {
      var inputPath = path.join(__dirname, './fixtures/test.coffee');
      var inputBase = path.join(__dirname, './fixtures/');
      var expectedPath = path.join(__dirname, './out-fixtures/test.coffee');
      var expectedContents = fs.readFileSync(inputPath);
      var expectedCwd = __dirname;
      var expectedBase = path.join(__dirname, './out-fixtures');
      var expectedMode = parseInt("0655", 8);

      var expectedFile = new File({
         base: inputBase,
         cwd: __dirname,
         path: inputPath,
         contents: expectedContents,
         stat: <fs.Stats> {
            mode: expectedMode
         }
      });

      var onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].should.equal(expectedFile);
         buffered[0].cwd.should.equal(__dirname, 'cwd should have changed');
         buffered[0].base.should.equal(expectedBase, 'base should have changed');
         buffered[0].path.should.equal(expectedPath, 'path should have changed');
         fs.existsSync(expectedPath).should.equal(true);
         bufEqual(fs.readFileSync(expectedPath), expectedContents).should.equal(true);
         fs.readlinkSync(expectedPath).should.equal(inputPath);
         done();
      };

      var stream = vfs.symlink('./out-fixtures/', { cwd: __dirname });

      var buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should write streaming files to the right folder', done => {
      var inputPath = path.join(__dirname, './fixtures/test.coffee');
      var inputBase = path.join(__dirname, './fixtures/');
      var expectedPath = path.join(__dirname, './out-fixtures/test.coffee');
      var expectedContents = fs.readFileSync(inputPath);
      var expectedCwd = __dirname;
      var expectedBase = path.join(__dirname, './out-fixtures');
      var expectedMode = parseInt("0655", 8);

      var contentStream = through.obj();
      var expectedFile = new File({
         base: inputBase,
         cwd: __dirname,
         path: inputPath,
         contents: contentStream,
         stat: <fs.Stats> {
            mode: expectedMode
         }
      });

      var onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].should.equal(expectedFile);
         buffered[0].cwd.should.equal(__dirname, 'cwd should have changed');
         buffered[0].base.should.equal(expectedBase, 'base should have changed');
         buffered[0].path.should.equal(expectedPath, 'path should have changed');
         fs.existsSync(expectedPath).should.equal(true);
         bufEqual(fs.readFileSync(expectedPath), expectedContents).should.equal(true);
         fs.readlinkSync(expectedPath).should.equal(inputPath);
         done();
      };

      var stream = vfs.symlink('./out-fixtures/', { cwd: __dirname });

      var buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      setTimeout(() => {
         contentStream.write(expectedContents);
         contentStream.end();
      }, 100);
      stream.end();
   });

   it('should write directories to the right folder', done => {
      var inputPath = path.join(__dirname, './fixtures/wow');
      var inputBase = path.join(__dirname, './fixtures/');
      var expectedPath = path.join(__dirname, './out-fixtures/wow');
      var expectedCwd = __dirname;
      var expectedBase = path.join(__dirname, './out-fixtures');
      var expectedMode = parseInt("0655", 8);

      var expectedFile = new File({
         base: inputBase,
         cwd: __dirname,
         path: inputPath,
         contents: null,
         stat: <fs.Stats> {
            isDirectory: () => true,
            mode: expectedMode
         }
      });

      var onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].should.equal(expectedFile);
         buffered[0].cwd.should.equal(__dirname, 'cwd should have changed');
         buffered[0].base.should.equal(expectedBase, 'base should have changed');
         buffered[0].path.should.equal(expectedPath, 'path should have changed');
         fs.readlinkSync(expectedPath).should.equal(inputPath);
         fs.lstatSync(expectedPath).isDirectory().should.equal(false);
         fs.statSync(expectedPath).isDirectory().should.equal(true);
         done();
      };

      var stream = vfs.symlink('./out-fixtures/', { cwd: __dirname });

      var buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should use different modes for files and directories', done => {
      var inputBase = path.join(__dirname, './fixtures');
      var inputPath = path.join(__dirname, './fixtures/wow/suchempty');
      var expectedBase = path.join(__dirname, './out-fixtures/wow');
      var expectedDirMode = parseInt("0755", 8);
      var expectedFileMode = parseInt("0655", 8);

      var firstFile = new File({
         base: inputBase,
         cwd: __dirname,
         path: inputPath,
         stat: fs.statSync(inputPath)
      });

      var onEnd = () => {
         realMode(fs.lstatSync(expectedBase).mode).should.equal(expectedDirMode);
         realMode(buffered[0].stat.mode).should.equal(expectedFileMode);
         done();
      };

      var stream = vfs.symlink('./out-fixtures/', {
         cwd: __dirname,
         mode: expectedFileMode,
         dirMode: expectedDirMode
      });

      var buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);

      stream.pipe(bufferStream);
      stream.write(firstFile);
      stream.end();
   });

   it('should report IO errors', done => {
      var inputPath = path.join(__dirname, './fixtures/test.coffee');
      var inputBase = path.join(__dirname, './fixtures/');
      var expectedPath = path.join(__dirname, './out-fixtures/test.coffee');
      var expectedContents = fs.readFileSync(inputPath);
      var expectedCwd = __dirname;
      var expectedBase = path.join(__dirname, './out-fixtures');
      var expectedMode = parseInt("0722", 8);

      var expectedFile = new File({
         base: inputBase,
         cwd: __dirname,
         path: inputPath,
         contents: expectedContents,
         stat: <fs.Stats> {
            mode: expectedMode
         }
      });

      fs.mkdirSync(expectedBase);
      fs.chmodSync(expectedBase, 0);

      var stream = vfs.symlink('./out-fixtures/', { cwd: __dirname });
      stream.on('error', (err: any) => {
         err.code.should.equal('EACCES');
         done();
      });
      stream.write(expectedFile);
   });

   ['end', 'finish'].forEach(eventName => {
      it('should emit ' + eventName + ' event', done => {
         var srcPath = path.join(__dirname, './fixtures/test.coffee');
         var stream = vfs.symlink('./out-fixtures/', { cwd: __dirname });

         stream.on(eventName, () => {
            done();
         });

         var file = new File({
            path: srcPath,
            cwd: __dirname,
            contents: new Buffer("1234567890")
         });

         stream.write(file);
         stream.end();
      });
   });
   it('should check if it"s a vinyl file', () => {
      var srcPath = path.join(__dirname, './fixtures/test.coffee');
      var options = {
         path: srcPath,
         cwd: __dirname,
         contents: new Buffer("1234567890")
      };
      var file = new File(options);
      File.isVinyl(file).should.equal(true);
      File.isVinyl(options).should.equal(false);
   });
});
