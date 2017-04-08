/// <reference types="mocha" />

import assert = require('assert')
import fs = require('mz/fs')

describe('fs', function () {

  it('.stat()', function (done) {
    fs.stat(__filename).then(function (stats) {
      assert.equal(typeof stats.size, 'number')
      done()
    }).catch(done)
  })

  it('.statSync()', function () {
    var stats = fs.statSync(__filename)
    assert.equal(typeof stats.size, 'number')
  })

  it('.exists()', function (done) {
    fs.exists(__filename).then(function (exists) {
      assert(exists)
      done()
    }).catch(done)
  })

  it('.existsSync()', function () {
    var exists = fs.existsSync(__filename)
    assert(exists)
  })

  describe('callback support', function () {
    it('.stat()', function (done) {
      fs.stat(__filename, function (err, stats) {
        assert(!err)
        assert.equal(typeof stats.size, 'number')
        done()
      })
    })

    it('.exists()', function (done) {
      fs.exists(__filename, function (err, exists) {
        assert(!err)
        assert(exists)
        done()
      })
    })
  })
})

import cp = require('mz/child_process')
describe('child_process', function () {


  it('.exec().then()', function (done) {
    cp.exec('node --version').then(function (params) {
      assert.equal(params[0].toString('utf8')[0], 'v')
      done()
    })
  })

  it('.exec().catch()', function (done) {
    cp.exec('lkajsdfkljalskdfjalsdf').catch(function (err) {
      done()
    })
  })

  describe('callback support', function () {
    it('.exec() success', function (done) {
      cp.exec('node --version', function (err, stdout) {
        assert.equal(stdout.toString()[0], 'v')
        done()
      })
    })

    it('.exec() err', function (done) {
      cp.exec('lkajsdfkljalskdfjalsdf', function (err) {
        assert(err)
        done()
      })
    })
  })
})

import * as crypto from "mz/crypto";

describe('crypto', function () {

  it('.randomBytes().then()', function (done) {
    crypto.randomBytes(8).then(function (buf) {
      assert.equal(buf.length, 8)
      done()
    })
  })

  describe('callback support', function () {
    it('.randomBytes()', function (done) {
      crypto.randomBytes(8, function (err, buf) {
        assert(!err)
        assert.equal(buf.length, 8)
        done()
      })
    })
  })
})

import stream = require('stream')
import readline = require('mz/readline')

describe('readline', function () {


  it('.question().then()', function (done) {
    var input = new stream.PassThrough()
    var output = new stream.PassThrough()
    var rl = readline.createInterface({ input: input, output: output })

    rl.question('a').then(function (answer) {
      assert.equal(answer, 'b')
      done()
    })

    assert.equal(output.read(), 'a')
    input.write('b\n')
  })

  it('completer support', function (done) {
    function completer (line:string) {
      assert.equal(line, 'b')
      return Promise.resolve([['bTESTSTRING'], line])
    }

    var input = new stream.PassThrough()
    var output = new stream.PassThrough()
    var bufferedOutput = ''
    var rl = readline.createInterface( input, output, <readline.Completer>completer, true )

    rl.question('a').then(function (answer: string) {
      assert.equal(answer, 'bTESTSTRING')
      done()
    })

    function onOutputData (data: Buffer | String) {
      bufferedOutput += data.toString()

      if (bufferedOutput.match(/TESTSTRING/)) {
        input.write('\n')
        output.removeListener('data', onOutputData)
      }
    }

    output.on('data', onOutputData)
    input.write('b\t')
  })

  describe('callback support', function () {
    it('.question()', function (done) {
      var input = new stream.PassThrough()
      var output = new stream.PassThrough()
      var rl = readline.createInterface({ input: input, output: output })

      rl.question('a', function (answer) {
        assert.equal(answer, 'b')
        done()
      })

      assert.equal(output.read(), 'a')
      input.write('b\n')
    })

    it('completer support sync', function (done) {
      function completer (line: string) {
        assert.equal(line, 'b')
        return <[string[], string]>[['bTESTSTRING'], line]
      }

      var input = new stream.PassThrough()
      var output = new stream.PassThrough()
      var rl = readline.createInterface(input, output, <readline.Completer>completer, true)

      rl.question('a').then(function (answer) {
        assert.ok(output.read().toString().match(/TESTSTRING/))
        done()
      })

      input.write('b\t\n')
    })

    it('completer support async', function (done) {
      function completer (line: string, cb: (err: any, result: [string[], string]) => void) {
        assert.equal(line, 'b')
        cb(null, [['bTESTSTRING'], line])
      }

      var input = new stream.PassThrough()
      var output = new stream.PassThrough()
      var rl = readline.createInterface(input, output, <readline.Completer>completer, true )

      rl.question('a').then(function (answer) {
        assert.ok(output.read().toString().match(/TESTSTRING/))
        done()
      })

      input.write('b\t\n')
    })
  })
})

import zlib = require('mz/zlib')

describe('zlib', function () {

  it('.gzip().then().gunzip()', function (done) {
    var buf = new Buffer("lol", 'utf-8');
    zlib.gzip(buf).then(function (res) {
      return zlib.gunzip(res)
    }).then(function (string) {
      assert.equal(string, 'lol')
      done()
    })
  })

  describe('callback support', function () {
    it('.gzip() and .gunzip()', function (done) {
    var buf = new Buffer("lol", 'utf-8');
      zlib.gzip(buf, function (err, res) {
        assert(!err)
        assert(Buffer.isBuffer(res))
        zlib.gunzip(res, function (err, string) {
          assert(!err)
          assert.equal(string, 'lol')
          done()
        })
      })
    })
  })
})
