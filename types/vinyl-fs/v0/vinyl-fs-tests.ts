// from src

import * as vfs from 'vinyl-fs';

import * as path from 'path';
import * as fs from 'fs'; // require('graceful-fs');

// import bufEqual = require('buffer-equal');
declare const bufEqual: any;
// import through = require('through2');
declare const through: any;
import File = require('vinyl');
// const spies = require('./spy');
declare const spies: any;

// Stub mocha functions
const {describe, it, before, after, beforeEach, afterEach} = null as any as {
    [s: string]: ((s: string, cb: (done: any) => void) => void) & ((cb: (done: any) => void) => void) & {only: any, skip: any};
};

// TODO: These aren't useful as types tests since they take `any`.
declare const should: ShouldStatic;
interface ShouldStatic {
    exist(obj: any, desc?: string): void;
    not: this;
}
declare global {
    interface Object {
        should: { equal(obj: any): void; };
    }
}

declare const gulp: any;
let bufferStream: any;

let dataWrap = (fn: any) => {
   return (data: any, enc: any, cb: any) => {
      fn(data);
      cb();
   };
};

describe('source stream', () => {
   it('should explode on invalid glob (empty)', done => {
      let stream: any;
      try {
         stream = gulp.src();
      } catch (err) {
         should.exist(err);
         should.not.exist(stream);
         done();
      }
   });

   it('should explode on invalid glob (number)', done => {
      let stream: any;
      try {
         stream = gulp.src(123);
      } catch (err) {
         should.exist(err);
         should.not.exist(stream);
         done();
      }
   });

   it('should explode on invalid glob (empty array)', done => {
      let stream: any;
      try {
         stream = gulp.src([]);
      } catch (err) {
         should.exist(err);
         should.not.exist(stream);
         done();
      }
   });

   it('should pass through writes', done => {
      const expectedPath = path.join(__dirname, "./fixtures/test.coffee");
      const expectedContent = fs.readFileSync(expectedPath);

      const expectedFile = new File({
         base: __dirname,
         cwd: __dirname,
         path: expectedPath,
         contents: expectedContent
      });

      const onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].should.equal(expectedFile);
         bufEqual(buffered[0].contents, expectedContent).should.equal(true);
         done();
      };

      const stream = vfs.src("./fixtures/nothing.coffee");

      const buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should glob a file with default settings', done => {
      const expectedPath = path.join(__dirname, "./fixtures/test.coffee");
      const expectedContent = fs.readFileSync(expectedPath);

      const onEnd = () => {
         buffered.length.should.equal(1);
         should.exist(buffered[0].stat);
         buffered[0].path.should.equal(expectedPath);
         buffered[0].isBuffer().should.equal(true);
         bufEqual(buffered[0].contents, expectedContent).should.equal(true);
         done();
      };

      const stream = vfs.src("./fixtures/*.coffee", { cwd: __dirname });

      const buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
   });

   it('should glob a file with default settings and relative cwd', done => {
      const expectedPath = path.join(__dirname, "./fixtures/test.coffee");
      const expectedContent = fs.readFileSync(expectedPath);

      const onEnd = () => {
         buffered.length.should.equal(1);
         should.exist(buffered[0].stat);
         buffered[0].path.should.equal(expectedPath);
         buffered[0].isBuffer().should.equal(true);
         bufEqual(buffered[0].contents, expectedContent).should.equal(true);
         done();
      };

      const stream = vfs.src("./fixtures/*.coffee", { cwd: path.relative(process.cwd(), __dirname) });

      const buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
   });

   it('should glob a directory with default settings', done => {
      const expectedPath = path.join(__dirname, "./fixtures/wow");

      const onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].path.should.equal(expectedPath);
         buffered[0].isNull().should.equal(true);
         buffered[0].isDirectory().should.equal(true);
         done();
      };

      const stream = vfs.src("./fixtures/wow/", { cwd: __dirname });

      const buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
   });

   it('should glob a file with with no contents', done => {
      const expectedPath = path.join(__dirname, "./fixtures/test.coffee");
      const expectedContent = fs.readFileSync(expectedPath);

      const onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].path.should.equal(expectedPath);
         buffered[0].isNull().should.equal(true);
         should.not.exist(buffered[0].contents);
         done();
      };

      const stream = vfs.src("./fixtures/*.coffee", { cwd: __dirname, read: false });

      const buffered: any = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
   });

   it('should glob a file with streaming contents', done => {
      const expectedPath = path.join(__dirname, "./fixtures/test.coffee");
      const expectedContent = fs.readFileSync(expectedPath);

      const onEnd = () => {
         buffered.length.should.equal(1);
         should.exist(buffered[0].stat);
         buffered[0].path.should.equal(expectedPath);
         buffered[0].isStream().should.equal(true);

         let contentBuffer = new Buffer([]);
         const contentBufferStream = through(dataWrap((data: any) => {
            contentBuffer = Buffer.concat([contentBuffer, data]);
         }));
         buffered[0].contents.pipe(contentBufferStream);
         buffered[0].contents.once('end', () => {
            bufEqual(contentBuffer, expectedContent);
            done();
         });
      };

      const stream = vfs.src("./fixtures/*.coffee", { cwd: __dirname, buffer: false });

      const buffered: any = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
   });
});

// from dest
// const vfs = require('../');

// const path = require('path');
// const fs = require('graceful-fs');
import rimraf = require('rimraf');

// const bufEqual = require('buffer-equal');
// const through = require('through2');
// const File = require('vinyl');

// const should = require('should');
// require('mocha');

const wipeOut = (cb: any) => {
   rimraf(path.join(__dirname, "./out-fixtures/"), cb);
};

dataWrap = (fn: any) => {
   return (data: any, enc: any, cb: any) => {
      fn(data);
      cb();
   };
};

const realMode = (n: any) => {
   return n & parseInt("07777", 8);
};

describe('dest stream', () => {
   beforeEach(wipeOut);
   afterEach(wipeOut);

   it('should explode on invalid folder', done => {
      let stream: any;
      try {
         stream = gulp.dest();
      } catch (err) {
         should.exist(err);
         should.not.exist(stream);
         done();
      }
   });

   it('should pass through writes with cwd', done => {
      const inputPath = path.join(__dirname, "./fixtures/test.coffee");

      const expectedFile = new File({
         base: __dirname,
         cwd: __dirname,
         path: inputPath,
         contents: null
      });

      const onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].should.equal(expectedFile);
         done();
      };

      const stream = vfs.dest("./out-fixtures/", { cwd: __dirname });

      const buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should pass through writes with default cwd', done => {
      const inputPath = path.join(__dirname, "./fixtures/test.coffee");

      const expectedFile = new File({
         base: __dirname,
         cwd: __dirname,
         path: inputPath,
         contents: null
      });

      const onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].should.equal(expectedFile);
         done();
      };

      const stream = vfs.dest(path.join(__dirname, "./out-fixtures/"));

      const buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should not write null files', done => {
      const inputPath = path.join(__dirname, "./fixtures/test.coffee");
      const inputBase = path.join(__dirname, "./fixtures/");
      const expectedPath = path.join(__dirname, "./out-fixtures/test.coffee");
      const expectedCwd = __dirname;
      const expectedBase = path.join(__dirname, "./out-fixtures");

      const expectedFile = new File({
         base: inputBase,
         cwd: __dirname,
         path: inputPath,
         contents: null
      });

      const onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].should.equal(expectedFile);
         buffered[0].cwd.should.equal(expectedCwd, 'cwd should have changed');
         buffered[0].base.should.equal(expectedBase, 'base should have changed');
         buffered[0].path.should.equal(expectedPath, 'path should have changed');
         fs.existsSync(expectedPath).should.equal(false);
         done();
      };

      const stream = vfs.dest("./out-fixtures/", { cwd: __dirname });

      const buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should write buffer files to the right folder with relative cwd', done => {
      const inputPath = path.join(__dirname, "./fixtures/test.coffee");
      const inputBase = path.join(__dirname, "./fixtures/");
      const expectedPath = path.join(__dirname, "./out-fixtures/test.coffee");
      const expectedCwd = __dirname;
      const expectedBase = path.join(__dirname, "./out-fixtures");
      const expectedContents = fs.readFileSync(inputPath);

      const expectedFile = new File({
         base: inputBase,
         cwd: __dirname,
         path: inputPath,
         contents: expectedContents
      });

      const onEnd = () => {
         buffered.length.should.equal(1);
         buffered[0].should.equal(expectedFile);
         buffered[0].cwd.should.equal(expectedCwd, 'cwd should have changed');
         buffered[0].base.should.equal(expectedBase, 'base should have changed');
         buffered[0].path.should.equal(expectedPath, 'path should have changed');
         fs.existsSync(expectedPath).should.equal(true);
         bufEqual(fs.readFileSync(expectedPath), expectedContents).should.equal(true);
         done();
      };

      const stream = vfs.dest("./out-fixtures/", { cwd: path.relative(process.cwd(), __dirname) });

      const buffered: any = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should write buffer files to the right folder', done => {
      const inputPath = path.join(__dirname, "./fixtures/test.coffee");
      const inputBase = path.join(__dirname, "./fixtures/");
      const expectedPath = path.join(__dirname, "./out-fixtures/test.coffee");
      const expectedContents = fs.readFileSync(inputPath);
      const expectedCwd = __dirname;
      const expectedBase = path.join(__dirname, "./out-fixtures");
      const expectedMode = parseInt("0655", 8);

      const expectedFile = new File({
         base: inputBase,
         cwd: __dirname,
         path: inputPath,
         contents: expectedContents,
         stat: <any> {
            mode: expectedMode
         } as fs.Stats
      });

      const onEnd = () => {
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

      const stream = vfs.dest("./out-fixtures/", { cwd: __dirname });

      const buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should write streaming files to the right folder', done => {
      const inputPath = path.join(__dirname, "./fixtures/test.coffee");
      const inputBase = path.join(__dirname, "./fixtures/");
      const expectedPath = path.join(__dirname, "./out-fixtures/test.coffee");
      const expectedContents = fs.readFileSync(inputPath);
      const expectedCwd = __dirname;
      const expectedBase = path.join(__dirname, "./out-fixtures");
      const expectedMode = parseInt("0655", 8);

      const contentStream = through.obj();
      const expectedFile = new File({
         base: inputBase,
         cwd: __dirname,
         path: inputPath,
         contents: contentStream,
         stat: <any> {
            mode: expectedMode
         } as fs.Stats
      });

      const onEnd = () => {
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

      const stream = vfs.dest("./out-fixtures/", { cwd: __dirname });

      const buffered: any = [];
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
      const inputPath = path.join(__dirname, "./fixtures/test");
      const inputBase = path.join(__dirname, "./fixtures/");
      const expectedPath = path.join(__dirname, "./out-fixtures/test");
      const expectedCwd = __dirname;
      const expectedBase = path.join(__dirname, "./out-fixtures");
      const expectedMode = parseInt("0655", 8);

      const expectedFile = new File({
         base: inputBase,
         cwd: __dirname,
         path: inputPath,
         contents: null,
         stat: <any> {
            isDirectory: () => true,
            mode: expectedMode
         } as fs.Stats
      });

      const onEnd = () => {
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

      const stream = vfs.dest("./out-fixtures/", { cwd: __dirname });

      const buffered: any[] = [];
      bufferStream = through.obj(dataWrap(buffered.push.bind(buffered)), onEnd);
      stream.pipe(bufferStream);
      stream.write(expectedFile);
      stream.end();
   });

   it('should allow piping multiple dests in streaming mode', done => {
      const inputPath1 = path.join(__dirname, "./out-fixtures/multiple-first");
      const inputPath2 = path.join(__dirname, "./out-fixtures/multiple-second");
      const inputBase = path.join(__dirname, "./out-fixtures/");
      const srcPath = path.join(__dirname, "./fixtures/test.coffee");
      const stream1 = vfs.dest('./out-fixtures/', { cwd: __dirname });
      const stream2 = vfs.dest('./out-fixtures/', { cwd: __dirname });
      const content = fs.readFileSync(srcPath);
      const rename = through.obj(function(file: any, _: any, next: any) {
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

      const file = new File({
         base: inputBase,
         path: inputPath1,
         cwd: __dirname,
         contents: content
      });

      stream1.write(file);
      stream1.end();
   });
});
