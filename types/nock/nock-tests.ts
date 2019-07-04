import nock = require('nock');
import * as fs from 'fs';
import { URL } from 'url';

let scope: nock.Scope = nock("http://example.com");
let inst: nock.Interceptor;
let str = "foo";
let strings: string[];
let bool = true;
let defs: nock.NockDefinition[];
let options: nock.Options = {};

const num = 42;
const obj: { [k: string]: any } = {};
const regex = /test/;

inst = scope.head(str);

inst = scope.get(str);
inst = scope.get(str, str);
inst = scope.get(str, str, options);

inst = scope.options(str);
inst = scope.options(str, str);
inst = scope.options(str, str, options);

inst = scope.patch(str);
inst = scope.patch(str, str);
inst = scope.patch(str, obj);
inst = scope.patch(str, obj, options);
inst = scope.patch(str, regex);

inst = scope.post(str);
inst = scope.post(str, str);
inst = scope.post(str, str, options);
inst = scope.post(str, obj);
inst = scope.post(str, regex);

inst = scope.put(str);
inst = scope.put(str, str);
inst = scope.put(str, str, options);
inst = scope.put(str, obj);
inst = scope.put(str, regex);

inst = scope.delete(str);
inst = scope.delete(str, str);
inst = scope.delete(str, str, options);
inst = scope.delete(str, obj);
inst = scope.delete(str, regex);

inst = scope.merge(str);
inst = scope.merge(str, str);
inst = scope.merge(str, str, options);
inst = scope.merge(str, obj);
inst = scope.merge(str, regex);

inst = inst.query(obj);
inst = inst.query(bool);

inst = scope.intercept(str, str);
inst = scope.intercept(str, str, str);
inst = scope.intercept(str, str, obj);
inst = scope.intercept(str, str, regex);
inst = scope.intercept(str, str, str, obj);
inst = scope.intercept(str, str, obj, obj);
inst = scope.intercept(str, str, regex, obj);

scope = inst.reply(num);
scope = inst.reply(num, str);

scope = inst.reply(num, str, obj);
scope = inst.reply(num, obj, obj);
scope = inst.reply(num, (uri: string, body: string) => {
  return str;
});
scope = inst.reply(num, (uri: string, body: string) => {
  return str;
}, obj);
scope = inst.replyWithFile(num, str);

inst = inst.times(4);
inst = inst.once();
inst = inst.twice();
inst = inst.thrice();

inst = inst.optionally();

scope = scope.defaultReplyHeaders({'X-Foo': 'bar'});

scope = scope.matchHeader(str, str);
scope = scope.matchHeader(str, regex);
scope = scope.matchHeader(str, (val: string) => true);

inst = inst.delay(num);
inst = inst.delayConnection(num);

scope = scope.filteringPath(regex, str);
scope = scope.filteringPath((path: string) => {
  return str;
});
scope = scope.filteringRequestBody(regex, str);
scope = scope.filteringRequestBody((path: string) => {
  return str;
});

scope = scope.log(() => { });
scope = scope.persist();
scope = scope.persist(false);
bool = scope.shouldPersist();
scope = scope.replyContentLength();
scope = scope.replyDate();
scope = scope.replyDate(new Date());

inst = inst.delay(2000);
inst = inst.delay({ head: 1000, body: 1000 });
inst = inst.delayBody(2000);
inst = inst.delayConnection(2000);
inst.getTotalDelay();
inst = inst.socketDelay(2000);

scope.done();
bool = scope.isDone();
scope.restore();

nock.recorder.rec();
nock.recorder.rec(true);
nock.recorder.rec({
  dont_print: true,
  output_objects: true
});
nock.recorder.clear();
strings = nock.recorder.play() as string[];
defs = nock.recorder.play() as nock.NockDefinition[];

// Usage
const couchdb = nock('http://myapp.iriscouch.com')
                .get('/users/1')
                .reply(200, {
                  _id: '123ABC',
                  _rev: '946B7D1C',
                  username: 'pgte',
                  email: 'pedro.teixeira@gmail.com'
                 });

// Using URL as input
scope = nock(new URL('https://example.org/'))
    .get('/resource')
    .reply(200, 'url matched');

// Specifying hostname
scope = nock('http://www.example.com')
    .get('/resource')
    .reply(200, 'domain matched');
scope = nock(/example\.com/)
    .get('/resource')
    .reply(200, 'domain regex matched');

// Specifying path
scope = nock('http://www.example.com')
    .get('/resource')
    .reply(200, 'path matched');

scope = nock('http://www.example.com')
    .get(/source$/)
    .reply(200, 'path using regex matched');

scope = nock('http://www.example.com')
    .get((uri) => {
      return uri.indexOf('cats') >= 0;
    })
    .reply(200, 'path using function matched');

// Specifying request body
scope = nock('http://myapp.iriscouch.com')
                .post('/users', {
                  username: 'pgte',
                  email: 'pedro.teixeira@gmail.com'
                })
                .reply(201, {
                  ok: true,
                  id: '123ABC',
                  rev: '946B7D1C'
                });

scope = nock('http://myapp.iriscouch.com')
                .post('/users', /email=.?@gmail.com/gi)
                .reply(201, {
                  ok: true,
                  id: '123ABC',
                  rev: '946B7D1C'
                });

scope = nock('http://myapp.iriscouch.com')
                .post('/users', {
                  username: 'pgte',
                  password: /a.+/,
                  email: 'pedro.teixeira@gmail.com'
                })
                .reply(201, {
                  ok: true,
                  id: '123ABC',
                  rev: '946B7D1C'
                });

scope = nock('http://myapp.iriscouch.com')
                .post('/users', (body: any) => {
                  return body.id === '123ABC';
                })
                .reply(201, {
                  ok: true,
                  id: '123ABC',
                  rev: '946B7D1C'
                });

// Specifying request query string
nock('http://example.com')
  .get('/users')
  .query({name: 'pedro', surname: 'teixeira'})
  .reply(200, {results: [{id: 'pgte'}]});

nock('http://example.com')
  .get('/users')
  .query({
      names: ['alice', 'bob'],
      tags: {
        alice: ['admin', 'tester'],
        bob: ['tester']
      }
  })
  .reply(200, {results: [{id: 'pgte'}]});

nock('http://example.com')
  .get('/users')
  .query((actualQueryObject: any) => {
    // do some compare with the actual Query Object
    // return true for matched
    // return false for not matched
    return true;
  })
  .reply(200, {results: [{id: 'pgte'}]});

nock('http://example.com')
  .get('/users')
  .query(true)
  .reply(200, {results: [{id: 'pgte'}]});

nock('http://example.com', { encodedQueryParams: true })
  .get('/users')
  .query('foo%5Bbar%5D%3Dhello%20world%21')
  .reply(200, { results: [{ id: 'pgte' }] });

// Specifying replies
scope = nock('http://myapp.iriscouch.com')
                .get('/users/1')
                .reply(404);

scope = nock('http://www.google.com')
                .get('/')
                .reply(200, 'Hello from Google!');

scope = nock('http://myapp.iriscouch.com')
                .get('/')
                .reply(200, {
                  username: 'pgte',
                  email: 'pedro.teixeira@gmail.com',
                  _id: '4324243fsd'
                });

scope = nock('http://myapp.iriscouch.com')
                .get('/')
                .replyWithFile(200, __dirname + '/replies/user.json');

scope = nock('http://www.google.com')
   .filteringRequestBody(/.*/, '*')
   .post('/echo', '*')
   .reply(201, (uri: string, requestBody: string) => {
     return requestBody;
   });

scope = nock('http://www.google.com')
   .filteringRequestBody(/.*/, '*')
   .post('/echo', '*')
   .reply(201, (uri: string, requestBody: string, cb: nock.ReplyCallback) => {
     fs.readFile('cat-poems.txt' , cb); // Error-first callback
   });

scope = nock('http://www.google.com')
   .filteringRequestBody(/.*/, '*')
   .post('/echo', '*')
   .reply((uri, requestBody) => {
     str = uri;
     return [
       201,
       'THIS IS THE REPLY BODY',
       {header: 'value'} // optional headers
     ];
   });

scope = nock('http://www.google.com')
   .filteringRequestBody(/.*/, '*')
   .post('/echo', '*')
   .reply((uri, requestBody, cb) => {
     setTimeout(() => {
       cb(null, [201, 'THIS IS THE REPLY BODY']);
     }, 1e3);
   });

scope = nock('http://www.google.com')
   .get('/cat-poems')
   .reply(200, (uri: string, requestBody: string) => {
     return fs.createReadStream('cat-poems.txt');
   });

/// Access original request and headers
scope = nock('http://www.google.com')
   .get('/cat-poems')
   .reply(function(uri, requestBody) {
     str = this.req.path;
     console.log('path:', this.req.path);
     console.log('headers:', this.req.headers);
     // ...
   });

// Replying with errors
nock('http://www.google.com')
   .get('/cat-poems')
   .replyWithError('something awful happened');

nock('http://www.google.com')
  .get('/cat-poems')
  .replyWithError({message: 'something awful happened', code: 'AWFUL_ERROR'});

// Specifying headers

/// Specifying Request Headers
scope = nock('http://www.example.com', {
      reqheaders: {
        authorization: 'Basic Auth'
      }
    })
    .get('/')
    .reply(200);

scope = nock('http://www.example.com', {
      reqheaders: {
        'X-My-Headers': (headerValue) => {
           if (headerValue) {
             return true;
           }
           return false;
         },
         'X-My-Awesome-Header': /Awesome/i
      }
    })
    .get('/')
    .reply(200);

scope = nock('http://www.example.com', {
    badheaders: ['cookie', 'x-forwarded-for']
  })
  .get('/')
  .reply(200);

scope = nock('http://www.example.com')
    .get('/')
    .basicAuth({
      user: 'john',
      pass: 'doe'
    })
    .reply(200);

/// Specifying Reply Headers
scope = nock('http://www.headdy.com')
   .get('/')
   .reply(200, 'Hello World!', {
     'X-My-Headers': 'My Header value'
   });

scope = nock('http://www.headdy.com')
    .get('/')
    .reply(200, 'Hello World!', {
        'X-My-Headers': ['My Header value 1', 'My Header value 2']
    });

scope = nock('http://www.headdy.com')
   .get('/')
   .reply(200, 'Hello World!', {
     'X-My-Headers': (req, res, body) => {
       return body.toString();
     }
   });

// Default Reply Headers
scope = nock('http://www.headdy.com')
  .defaultReplyHeaders({
    'X-Powered-By': 'Rails',
    'Content-Type': 'application/json'
  })
  .get('/')
  .reply(200, 'The default headers should come too');

scope = nock('http://www.headdy.com')
  .defaultReplyHeaders({
    'Content-Length': (req, res, body) => {
      return body.length;
    }
  })
  .get('/')
  .reply(200, 'The default headers should come too');

// Including Content-Length Header Automatically
scope = nock('http://www.headdy.com')
  .replyContentLength()
  .get('/')
  .reply(200, { hello: 'world' });

// Including Date Header Automatically
scope = nock('http://www.headdy.com')
  .replyDate(new Date(2015, 0, 1)) // defaults to now, must use a Date object
  .get('/')
  .reply(200, { hello: 'world' });

// HTTP Verbs
nock('http://my.domain.com')
  .intercept('/path', 'PATCH')
  .reply(304);

// Support for HTTP and HTTPS
scope = nock('https://secure.my.server.com');

// Non-standard ports
scope = nock('http://my.server.com:8081');

// Repeat response n times
nock('http://zombo.com').get('/').times(4).reply(200, 'Ok');
nock('http://zombo.com').get('/').once().reply(200, 'Ok');
nock('http://zombo.com').get('/').twice().reply(200, 'Ok');
nock('http://zombo.com').get('/').thrice().reply(200, 'Ok');

// Make responding optional
nock('http://zombo.com').get('/').optionally().reply(200, 'Ok');

// Delay the response body
nock('http://my.server.com')
  .get('/')
  .delayBody(2000) // 2 seconds
  .reply(200, '<html></html>');

// Delay the response
nock('http://my.server.com')
  .get('/')
  .delay(2000) // 2 seconds delay will be applied to the response header.
  .reply(200, '<html></html>');

nock('http://my.server.com')
  .get('/')
  .delay({
    head: 2000, // header will be delayed for 2 seconds, i.e. the whole response will be delayed for 2 seconds.
    body: 3000  // body will be delayed for another 3 seconds after header is sent out.
  })
  .reply(200, '<html></html>');

// Delay the connection
nock('http://my.server.com')
  .get('/')
  .socketDelay(2000) // 2 seconds
  .delayConnection(1000)
  .reply(200, '<html></html>');

// Chaining
scope = nock('http://myapp.iriscouch.com')
                .get('/users/1')
                .reply(404)
                .post('/users', {
                  username: 'pgte',
                  email: 'pedro.teixeira@gmail.com'
                })
                .reply(201, {
                  ok: true,
                  id: '123ABC',
                  rev: '946B7D1C'
                })
                .get('/users/123ABC')
                .reply(200, {
                  _id: '123ABC',
                  _rev: '946B7D1C',
                  username: 'pgte',
                  email: 'pedro.teixeira@gmail.com'
                });

// Scope filtering
scope = nock('https://api.dropbox.com', {
filteringScope: (scope: string) => {
      return /^https:\/\/api[0-9]*.dropbox.com/.test(scope);
    }
  })
  .get('/1/metadata/auto/Photos?include_deleted=false&list=true')
  .reply(200);

// Path filtering
scope = nock('http://api.myservice.com')
                .filteringPath(/password=[^&]*/g, 'password=XXX')
                .get('/users/1?password=XXX')
                .reply(200, 'user');

scope = nock('http://api.myservice.com')
                .filteringPath((path) => {
                   return '/ABC';
                 })
                .get('/ABC')
                .reply(200, 'user');

// Request Body filtering
scope = nock('http://api.myservice.com')
                .filteringRequestBody(/password=[^&]*/g, 'password=XXX')
                .post('/users/1', 'data=ABC&password=XXX')
                .reply(201, 'OK');

scope = nock('http://api.myservice.com')
                .filteringRequestBody((body) => {
                   return 'ABC';
                 })
                .post('/', 'ABC')
                .reply(201, 'OK');

// Request Headers Matching on the Scope Level
scope = nock('http://api.myservice.com')
                .matchHeader('accept', 'application/json')
                .get('/')
                .reply(200, {
                  data: 'hello world'
                });

scope = nock('http://api.myservice.com')
                .matchHeader('User-Agent', /Mozilla\/.*/)
                .get('/')
                .reply(200, {
                  data: 'hello world'
                });

scope = nock('http://api.myservice.com')
                .matchHeader('content-length', (val) => {
                  return Number(val) >= 1000;
                })
                .get('/')
                .reply(200, {
                  data: 'hello world'
                });

// Request Headers Matching on the Interceptor Level
scope = nock('http://api.myservice.com')
                .get('/')
                .matchHeader('accept', 'application/json')
                .reply(200, {
                  data: 'hello world'
                });

scope = nock('http://api.myservice.com')
                .get('/')
                .matchHeader('User-Agent', /Mozilla\/.*/)
                .reply(200, {
                  data: 'hello world'
                });

scope = nock('http://api.myservice.com')
                .get('/')
                .matchHeader('content-length', (val) => {
                  return Number(val) >= 1000;
                })
                .reply(200, {
                  data: 'hello world'
                });

// Allow unmocked requests on a mocked hostname
options = {allowUnmocked: true};
scope = nock('http://my.existing.service.com', options)
  .get('/my/url')
  .reply(200, 'OK!');

// Expectations
let google = nock('http://google.com')
                .get('/')
                .reply(200, 'Hello from Google!');
setTimeout(() => {
  google.done(); // will throw an assertion error if meanwhile a "GET http://google.com" was not performed.
}, 5000);

/// .isDone()
scope = nock('http://google.com')
  .get('/')
  .reply(200);
scope.isDone(); // will return false

nock.isDone();

/// .cleanAll()
nock.cleanAll();

/// .persist()
scope = nock('http://persisssists.con')
  .persist()
  .get('/')
  .reply(200, 'Persisting all the way');

/// .pendingMocks()
strings = scope.pendingMocks();
strings = nock.pendingMocks();
if (!scope.isDone()) {
  console.error('pending mocks: %j', scope.pendingMocks());
}
console.error('pending mocks: %j', nock.pendingMocks());

/// .activeMocks()
nock.activeMocks(); // $ExpectType string[]
nock('http://example.com').activeMocks(); // $ExpectType string[]

// Logging
google = nock('http://google.com').log(console.log);

// Restoring
nock.restore();

// Enable/Disable real HTTP request
nock.disableNetConnect();
nock.enableNetConnect();

// using a string
nock.enableNetConnect('amazon.com');

// or a RegExp
nock.enableNetConnect(/(amazon|github).com/);

nock.disableNetConnect();
nock.enableNetConnect('127.0.0.1'); // Allow localhost connections so we can test local routes and mock servers.

nock.cleanAll();
nock.enableNetConnect();

// Recording
nock.recorder.rec();

/// dont_print option
nock.recorder.rec({
  dont_print: true
});
// ... some HTTP calls
const nockCalls = nock.recorder.play();

/// output_objects option
nock.recorder.rec({
  output_objects: true
});
// ... some HTTP calls
const nockCallObjects = nock.recorder.play();

let nocks = nock.load(str);
nocks.forEach((nock) => {
  nock = nock.filteringRequestBody((body: string) => {
    return body;
  });
});

//  Pre-process the nock definitions as scope filtering has to be defined before the nocks are defined (due to its very hacky nature).
const nockDefs = nock.loadDefs(str);
nockDefs.forEach((def) => {
  //  Do something with the definition object e.g. scope filtering.
  def.options = def.options || {};
  def.options.filteringScope = (scope: string) => {
    return /^https:\/\/api[0-9]*.dropbox.com/.test(scope);
  };
});
//  Load the nocks from pre-processed definitions.
nocks = nock.define(nockDefs);

/// enable_reqheaders_recording option
nock.recorder.rec({
  dont_print: true,
  output_objects: true,
  enable_reqheaders_recording: true
});

/// logging option
const nullAppender = (content: string) => { };
nock.recorder.rec({
  logging: nullAppender
});

/// use_separator option
nock.recorder.rec({
  use_separator: false
});

// .removeInterceptor()
nock.removeInterceptor({
  hostname : 'localhost',
  path : '/mockedResource'
});
nock.removeInterceptor({
  hostname : 'localhost',
  path : '/login',
  method: 'POST',
  proto : 'https'
});

const interceptor = nock('http://example.org')
  .get('somePath');
nock.removeInterceptor(interceptor);

// Events
/// Global no match event
nock.emitter.on('no match', (req: any) => { });

// Nock Back
/// Setup
import { back as nockBack } from 'nock';

nockBack.fixtures = '/path/to/fixtures/';
nockBack.setMode('record');

/// Usage
nockBack.setMode('record');
nockBack.fixtures = './nockFixtures'; // this only needs to be set once in your test helper

const before = (def: nock.NockDefinition) => {
  def.options = def.options || {};
  def.options.filteringScope = (scope: string) => {
    return /^https:\/\/api[0-9]*.dropbox.com/.test(scope);
  };
};
const after = (scope: nock.Scope) => {
  scope = scope.filteringRequestBody((body: string): string => {
    return body;
  });
};

// recording of the fixture
declare var request: any;
nockBack('zomboFixture.json', { before, after }, (nockDone: () => void) => {
  request.get('http://zombo.com', (err: any, res: any, body: string) => {
    nockDone();
    // usage of the created fixture
    nockBack('zomboFixture.json', (nockDone: () => void) => {
      nockDone(); // never gets here
    });
  });
});

// in promise mode
nockBack('promisedFixture.json')
  .then(({nockDone, context}) => {
    context.assertScopesFinished();

    // do your tests returning a promise and chain it with
    Promise.resolve('foo')
      .then(nockDone);
  });
