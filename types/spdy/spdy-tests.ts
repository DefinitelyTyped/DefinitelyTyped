// copied unit tests from https://github.com/indutny/node-spdy/tree/a583cf6/test

import * as spdy from 'spdy';

declare var describe: any;
declare var it: any;
declare var fixtures: any;
declare var http: any;
declare var https: any;
declare var util: any;
declare var assert: any;
declare var afterEach: any;
declare var beforeEach: any;
declare var net: any;
declare var tls: any;
declare var transport: any;

describe('SPDY Client', () => {
  describe('regular', () => {
    fixtures.everyConfig((protocol: any, npn: string, version: string, plain: boolean) => {
      let server: any;
      let agent: any;
      let hmodule: any;

      beforeEach((done: any) => {
        hmodule = plain ? http : https;

        const options = util._extend({
                                     spdy: {
                                       plain
                                     }
                                   }, fixtures.keys);
        server = spdy.createServer(options, (req: any, res: any) => {
          let body = '';
          req.on('data', (chunk: any) => {
            body += chunk;
          });
          req.on('end', () => {
            res.writeHead(200, req.headers);
            res.addTrailers({ trai: 'ler' });

            const push = res.push('/push', {
              request: {
                push: 'yes'
              }
            }, (err: any) => {
              assert(!err);

              push.end('push');
              push.on('error', () => {
              });

              res.end(body || 'okay');
            });
          });
        });

        server.listen(fixtures.port, () => {
          agent = spdy.createAgent({
                                     rejectUnauthorized: false,
                                     port: <number> fixtures.port,
                                     spdy: {
                                       plain,
                                       protocol: plain ? npn : null,
                                       protocols: [ npn ]
                                     }
                                   });

          done();
        });
      });

      afterEach((done: any) => {
        let waiting = 2;
        agent.close(next);
        server.close(next);

        function next() {
          if (--waiting === 0)
            done();
        }
      });

      it('should send GET request', (done: any) => {
        const req = hmodule.request({
                                    agent,

                                    method: 'GET',
                                    path: '/get',
                                    headers: {
                                      a: 'b'
                                    }
                                  }, (res: any) => {
          assert.equal(res.statusCode, 200);
          assert.equal(res.headers.a, 'b');

          fixtures.expectData(res, 'okay', done);
        });
        req.end();
      });

      it('should send POST request', (done: any) => {
        const req = hmodule.request({
                                    agent,

                                    method: 'POST',
                                    path: '/post',

                                    headers: {
                                      post: 'headers'
                                    }
                                  }, (res: any) => {
          assert.equal(res.statusCode, 200);
          assert.equal(res.headers.post, 'headers');

          fixtures.expectData(res, 'post body', done);
        });

        agent._spdyState.socket.once(plain ? 'connect' : 'secureConnect',
                                     () => {
                                       req.end('post body');
                                     });
      });

      it('should receive PUSH_PROMISE', (done: any) => {
        const req = hmodule.request({
                                    agent,

                                    method: 'GET',
                                    path: '/get'
                                  }, (res: any) => {
          assert.equal(res.statusCode, 200);

          res.resume();
        });
        req.on('push', (push: any) => {
          assert.equal(push.path, '/push');
          assert.equal(push.headers.push, 'yes');

          push.resume();
          push.once('end', done);
        });
        req.end();
      });

      it('should receive trailing headers', (done: any) => {
        const req = hmodule.request({
                                    agent,

                                    method: 'GET',
                                    path: '/get'
                                  }, (res: any) => {
          assert.equal(res.statusCode, 200);

          res.on('trailers', (headers: any) => {
            assert.equal(headers.trai, 'ler');
            fixtures.expectData(res, 'okay', done);
          });
        });
        req.end();
      });
    });
  });

  describe('x-forwarded-for', () => {
    fixtures.everyConfig((protocol: any, npn: any, version: string, plain: boolean) => {
      let server: any;
      let agent: any;
      let hmodule: any;

      beforeEach((done: any) => {
        hmodule = plain ? http : https;

        const options = util._extend({
                                     spdy: {
                                       plain,
                                       'x-forwarded-for': true
                                     }
                                   }, fixtures.keys);
        server = spdy.createServer(options, (req: any, res: any) => {
          res.writeHead(200, req.headers);
          res.end();
        });

        server.listen(fixtures.port, () => {
          agent = spdy.createAgent({
                                     rejectUnauthorized: false,
                                     port: fixtures.port,
                                     spdy: {
                                       'x-forwarded-for': '1.2.3.4',
                                       plain,
                                       protocol: plain ? npn : null,
                                       protocols: [ npn ]
                                     }
                                   });

          done();
        });
      });

      afterEach((done: any) => {
        let waiting = 2;
        agent.close(next);
        server.close(next);

        function next() {
          if (--waiting === 0)
            done();
        }
      });

      it('should send x-forwarded-for', (done: any) => {
        const req = hmodule.request({
                                    agent,

                                    method: 'GET',
                                    path: '/get'
                                  }, (res: any) => {
          assert.equal(res.statusCode, 200);
          assert.equal(res.headers['x-forwarded-for'], '1.2.3.4');

          res.resume();
          res.once('end', done);
        });
        req.end();
      });
    });
  });
});

describe('SPDY Server', () => {
  fixtures.everyConfig((protocol: any, npn: any, version: number, plain: boolean) => {
    let server: any; // spdy.Server;
    let client: any;

    beforeEach((done: any) => {
      server = spdy.createServer(util._extend({
                                                spdy: {
                                                  'x-forwarded-for': true,
                                                  plain
                                                }
                                              }, fixtures.keys));

      server.listen(fixtures.port, () => {
        const socket = (plain ? net : tls).connect({
                                                   rejectUnauthorized: false,
                                                   port: fixtures.port,
                                                   NPNProtocols: [ npn ]
                                                 }, () => {
          client = transport.connection.create(socket, {
            protocol,
            isServer: false
          });
          client.start(version);
          done();
        });
      });
    });

    afterEach((done: any) => {
      client.socket.destroy();
      server.close(done);
    });

    it('should process GET request', (done: any) => {
      const stream = client.request({
                                    method: 'GET',
                                    path: '/get',
                                    headers: {
                                      a: 'b'
                                    }
                                  }, (err: any) => {
        assert(!err);

        stream.on('response', (status: any, headers: any) => {
          assert.equal(status, 200);
          assert.equal(headers.ok, 'yes');

          fixtures.expectData(stream, 'response', done);
        });

        stream.end();
      });

      server.on('request', (req: any, res: any) => {
        assert.equal(req.isSpdy, res.isSpdy);
        assert.equal(req.spdyVersion, res.spdyVersion);
        assert(req.isSpdy);
        if (!plain) {
          const socket = req.socket;
          assert(socket.encrypted);
          assert(socket.getPeerCertificate());
        }

        // Auto-detection
        if (version === 3.1)
          assert(req.spdyVersion >= 3 && req.spdyVersion <= 3.1);
        else
          assert.equal(req.spdyVersion, version);
        assert(req.spdyStream);
        assert(res.spdyStream);

        assert.equal(req.method, 'GET');
        assert.equal(req.url, '/get');
        assert.deepEqual(req.headers, { a: 'b', host: 'localhost' });

        req.on('end', () => {
          res.writeHead(200, {
            ok: 'yes'
          });
          res.end('response');
          assert(res.finished, 'res.finished should be set');
        });
        req.resume();
      });
    });

    it('should process POST request', (done: any) => {
      const stream = client.request({
                                    method: 'POST',
                                    path: '/post'
                                  }, (err: any) => {
        assert(!err);

        stream.on('response', (status: any, headers: any) => {
          assert.equal(status, 200);
          assert.equal(headers.ok, 'yes');

          fixtures.expectData(stream, 'response', next);
        });

        stream.end('request');
      });

      server.on('request', (req: any, res: any) => {
        assert.equal(req.method, 'POST');
        assert.equal(req.url, '/post');

        res.writeHead(200, {
          ok: 'yes'
        });
        res.end('response');

        fixtures.expectData(req, 'request', next);
      });

      let waiting = 2;
      function next() {
        if (--waiting === 0)
          return done();
      }
    });

    it('should process expect-continue request', (done: any) => {
      const stream = client.request({
                                    method: 'GET',
                                    path: '/get',
                                    headers: {
                                      Expect: '100-continue'
                                    }
                                  }, (err: any) => {
        assert(!err);

        stream.on('response', (status: any, headers: any) => {
          assert.equal(status, 100);

          fixtures.expectData(stream, 'response', done);
        });

        stream.end();
      });

      server.on('request', (req: any, res: any) => {
        req.on('end', () => {
          res.end('response');
        });
        req.resume();
      });
    });

    it('should emit `checkContinue` request', (done: any) => {
      const stream = client.request({
                                    method: 'GET',
                                    path: '/get',
                                    headers: {
                                      Expect: '100-continue'
                                    }
                                  }, (err: any) => {
        assert(!err);

        stream.on('response', (status: any, headers: any) => {
          assert.equal(status, 100);

          fixtures.expectData(stream, 'response', done);
        });

        stream.end();
      });

      server.on('checkContinue', (req: any, res: any) => {
        req.on('end', () => {
          res.writeContinue();
          res.end('response');
        });
        req.resume();
      });
    });

    it('should send PUSH_PROMISE', (done: any) => {
      const stream = client.request({
                                    method: 'POST',
                                    path: '/page'
                                  }, (err: any) => {
        assert(!err);

        stream.on('pushPromise', (push: any) => {
          assert.equal(push.path, '/push');
          assert.equal(push.headers.yes, 'push');

          fixtures.expectData(push, 'push', next);
          fixtures.expectData(stream, 'response', next);
        });

        stream.end('request');
      });

      server.on('request', (req: any, res: any) => {
        assert.equal(req.method, 'POST');
        assert.equal(req.url, '/page');

        res.writeHead(200, {
          ok: 'yes'
        });

        const push = res.push('/push', {
          request: {
            yes: 'push'
          }
        });
        push.end('push');

        res.end('response');

        fixtures.expectData(req, 'request', next);
      });

      let waiting = 3;
      function next() {
        if (--waiting === 0)
          return done();
      }
    });

    it('should receive trailing headers', (done: any) => {
      const stream = client.request({
                                    method: 'POST',
                                    path: '/post'
                                  }, (err: any) => {
        assert(!err);

        stream.sendHeaders({ trai: 'ler' });
        stream.end();

        stream.on('response', (status: any, headers: any) => {
          assert.equal(status, 200);
          assert.equal(headers.ok, 'yes');

          fixtures.expectData(stream, 'response', done);
        });
      });

      server.on('request', (req: any, res: any) => {
        let gotHeaders = false;
        req.on('trailers', (headers: any) => {
          gotHeaders = true;
          assert.equal(headers.trai, 'ler');
        });

        req.on('end', () => {
          assert(gotHeaders);

          res.writeHead(200, {
            ok: 'yes'
          });
          res.end('response');
        });
        req.resume();
      });
    });

    it('should call .writeHead() automatically', (done: any) => {
      const stream = client.request({
                                    method: 'POST',
                                    path: '/post'
                                  }, (err: any) => {
        assert(!err);

        stream.on('response', (status: any, headers: any) => {
          assert.equal(status, 300);

          fixtures.expectData(stream, 'response', done);
        });
        stream.end();
      });

      server.on('request', (req: any, res: any) => {
        req.on('end', () => {
          res.statusCode = 300;
          res.end('response');
        });
        req.resume();
      });
    });

    it('should not crash on .writeHead() after socket close', (done: any) => {
      const stream = client.request({
                                    method: 'POST',
                                    path: '/post'
                                  }, (err: any) => {
        assert(!err);

        setTimeout(() => {
          client.socket.destroy();
        }, 50);
        stream.on('error', () => {});
        stream.end();
      });

      server.on('request', (req: any, res: any) => {
        req.connection.on('close', () => {
          assert.doesNotThrow(() => {
            res.writeHead(200);
            res.end('response');
          });
          done();
        });
      });
    });

    it('should not crash on .push() after socket close', (done: any) => {
      const stream = client.request({
                                    method: 'POST',
                                    path: '/post'
                                  }, (err: any) => {
        assert(!err);

        setTimeout(() => {
          client.socket.destroy();
        }, 50);
        stream.on('error', () => {});
        stream.end();
      });

      server.on('request', (req: any, res: any) => {
        req.connection.on('close', () => {
          assert.doesNotThrow(() => {
            assert.equal(res.push('/push', {}), undefined);
            res.end('response');
          });
          done();
        });
      });
    });

    it('should end response after writing everything down', (done: any) => {
      const stream = client.request({
                                    method: 'GET',
                                    path: '/post'
                                  }, (err: any) => {
        assert(!err);

        stream.on('response', (status: any, headers: any) => {
          assert.equal(status, 200);

          fixtures.expectData(stream, 'hello world, what\'s up?', done);
        });

        stream.end();
      });

      server.on('request', (req: any, res: any) => {
        req.resume();
        res.writeHead(200);
        res.write('hello ');
        res.write('world');
        res.write(', what\'s');
        res.write(' up?');
        res.end();
      });
    });

    it('should handle x-forwarded-for', (done: any) => {
      client.sendXForwardedFor('1.2.3.4');

      const stream = client.request({
                                    method: 'GET',
                                    path: '/post'
                                  }, (err: any) => {
        assert(!err);

        stream.resume();
        stream.on('end', done);
        stream.end();
      });

      server.on('request', (req: any, res: any) => {
        assert.equal(req.headers['x-forwarded-for'], '1.2.3.4');
        req.resume();
        res.end();
      });
    });
  });

  it('should respond to http/1.1', (done: any) => {
    const server = spdy.createServer(fixtures.keys, (req: any, res: any) => {
      assert.equal(req.isSpdy, res.isSpdy);
      assert.equal(req.spdyVersion, res.spdyVersion);
      assert(!req.isSpdy);
      assert.equal(req.spdyVersion, 1);

      res.writeHead(200);
      res.end();
    });

    server.listen(fixtures.port, () => {
      const req = https.request({
                                agent: false,
                                rejectUnauthorized: false,
                                NPNProtocols: [ 'http/1.1' ],
                                port: fixtures.port,
                                method: 'GET',
                                path: '/'
                              }, (res: any) => {
        assert.equal(res.statusCode, 200);
        res.resume();
        res.on('end', () => {
          server.close(done);
        });
      });

      req.end();
    });
  });

  it('should support custom base', (done: any) => {
    function Pseuver(options: spdy.ServerOptions, listener: () => void) {
      https.Server.call(this, options, listener);
    }
    util.inherits(Pseuver, https.Server);

    const server = spdy.createServer(Pseuver, fixtures.keys, (req: any, res: any) => {
      assert.equal(req.isSpdy, res.isSpdy);
      assert.equal(req.spdyVersion, res.spdyVersion);
      assert(!req.isSpdy);
      assert.equal(req.spdyVersion, 1);

      res.writeHead(200);
      res.end();
    });

    server.listen(fixtures.port, () => {
      const req = https.request({
                                agent: false,
                                rejectUnauthorized: false,
                                NPNProtocols: [ 'http/1.1' ],
                                port: fixtures.port,
                                method: 'GET',
                                path: '/'
                              }, (res: any) => {
        assert.equal(res.statusCode, 200);
        res.resume();
        res.on('end', () => {
          server.close(done);
        });
      });

      req.end();
    });
  });

  it('should accept express app', () => {
    const express = require('express');
    const app = express();
    spdy.createServer({}, app);
  });
});
