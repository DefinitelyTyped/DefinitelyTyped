/// <reference path="../chai/chai.d.ts" />
/// <reference path="chai-http.d.ts" />

// tests taken from https://github.com/chaijs/chai-http

import chai = require('chai');
import chaiHttp = require('chai-http');
chai.use(chaiHttp);

// stubs
declare function describe(description:string, action:Function):void;
declare function it(description:string, action:Function):void;

var expect = chai.expect;

describe('assertions', function () {

  it('#status', function () {
    var res = { statusCode: 200 };
    expect(res).to.have.status(200);

    expect(function () {
      expect(res).not.have.status(200);
    }).to.throw('expected { statusCode: 200 } to not have status code 200');

    expect(function () {
      expect({}).to.not.have.status(200);
    }).to.throw("expected {} to have a property 'statusCode'");
  });

  it('#ip', function () {
    expect('127.0.0.1').to.be.an.ip;
    expect('2001:0db8:85a3:0000:0000:8a2e:0370:7334').to.be.an.ip;

    expect(function () {
      expect('127.0.0.1').to.not.be.an.ip;
    }).to.throw('expected \'127.0.0.1\' to not be an ip');

    expect(function () {
      expect('2001:0db8:85a3:0000:0000:8a2e:0370:7334').to.not.be.an.ip;
    }).to.throw('expected \'2001:0db8:85a3:0000:0000:8a2e:0370:7334\' to not be an ip');
  });

  it('#header test existence', function () {
    var req = { headers: { foo: 'bar' }};
    var res = {
      getHeader: function (key:string) {
        return key == 'foo' ? 'bar' : undefined;
      }
    };

    expect(req).have.header('foo');
    expect(req).not.have.header('bar');

    expect(res).have.header('foo');
    expect(res).not.have.header('bar');

    expect(function () {
      expect(req).have.header('bar');
    }).to.throw('expected header \'bar\' to exist');

    expect(function () {
      expect(res).have.header('bar');
    }).to.throw('expected header \'bar\' to exist');
  });

  it('#header test value', function () {
    var req = { headers: { foo: 'bar' }};
    var res = {
      getHeader: function (key:string) {
        return 'foo';
      }
    };

    expect(req).have.header('foo', 'bar');
    expect(res).have.header('bar', 'foo');

    (function () {
      expect(req).not.have.header('foo', 'bar');
    }, 'expected header \'foo\' to not have value bar');

    expect(function () {
      expect(res).not.have.header('bar', 'foo');
    }).to.throw('expected header \'bar\' to not have value foo');
  });

  it('#headers', function() {
    var req = { headers: { foo: 'bar' }};
    var res = {
      getHeader: function (key:string) {
        return 'foo';
      }
    };

    expect(req).have.headers;
    expect(res).have.headers;

    expect(function () {
      expect(req).not.have.headers;
    }).to.throw('expected { headers: { foo: \'bar\' } } to not have headers or getHeader method');

    expect(function () {
      expect(res).not.have.headers;
    }).to.throw('expected { getHeader: [Function] } to not have headers or getHeader method');
  });

  it('#json', function() {
    var req = { headers: { 'content-type': [ 'application/json' ] }};
    var res = {
      getHeader: function (key:string) {
        return 'application/json'
      }
    };

    expect(req).be.json;
    expect(res).be.json;

    expect(function () {
      expect(req).not.be.json;
    }).to.throw('expected [ \'application/json\' ] to not include \'application/json\'');

    expect(function () {
      expect(res).not.be.json;
    }).to.throw('expected \'application/json\' to not include \'application/json\'');
  });

  it('#text', function() {
    var req = { headers: { 'content-type': [ 'text/plain' ] }};
    var res = {
      getHeader: function (key:string) {
        return 'text/plain'
      }
    };

    expect(req).be.text;
    expect(res).be.text;

    expect(function () {
      expect(req).not.be.text;
    }).to.throw('expected [ \'text/plain\' ] to not include \'text/plain\'');

    expect(function () {
      expect(res).not.be.text;
    }).to.throw('expected \'text/plain\' to not include \'text/plain\'');
  });

  it('#html', function () {
    var req = { headers: { 'content-type': [ 'text/html' ] }};
    var res = {
      getHeader: function (key:string) {
        return 'text/html'
      }
    };

    expect(req).be.html;
    expect(res).be.html;

    expect(function () {
      expect(req).not.be.html;
    }).to.throw('expected [ \'text/html\' ] to not include \'text/html\'');

    expect(function () {
      expect(res).not.be.html;
    }).to.throw('expected \'text/html\' to not include \'text/html\'');
  });
});

describe('request', function () {

  it('is present on chai', function () {
    chai.expect(chai).to.respondTo('request');
  });

  it('can request a functioned "app"', function (done) {
    var app = function (req:any, res:any) {
      expect(req.headers['x-api-key']).to.equal('testing');
      res.writeHeader(200, { 'content-type' : 'text/plain' });
      res.end('hello universe');
    }

    chai.request(app).get('/')
      .req(function (req) {
        req.set('X-API-Key', 'testing')
      })
      .res(function (res) {
        expect(res).have.status(200);
        expect(res.text).to.equal('hello universe');
        done();
      });
  });

  it('can request an already existing url', function (done) {
    var server = require('http').createServer(function (req:any, res:any) {
      expect(req.headers['x-api-key']).to.equal('test2');
      res.writeHeader(200, { 'content-type' : 'text/plain' });
      res.end('hello world');
    });

    server.listen(4000, function () {
      chai.request('http://127.0.0.1:4000')
        .get('/')
        .req(function (req) {
          req.set('X-API-Key', 'test2')
        })
        .res(function (res) {
          expect(res).have.status(200);
          expect(res.text).to.equal('hello world');
          server.once('close', done);
          server.close();
        });
    });

  });

});
