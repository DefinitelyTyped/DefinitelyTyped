
import request = require('request');
import http = require('http');
import stream = require('stream');
import fs = require('fs');
import FormData = require('form-data');

var value: any;
var str: string;
var buffer: NodeBuffer;
var num: number;
var bool: boolean;
var date: Date;
var obj: Object;
var dest: string;

var uri: string;
var headers: {[key: string]: string};

var agent: http.Agent;
var write: stream.Writable;
var req: request.Request;
var form1: FormData;

var bodyArr: request.RequestPart[] = [{
	body: value
}, {
	body: value
}, {
	body: value
}];

//Defaults tests
(() => {
  const githubUrl = 'https://github.com';
  const defaultJarRequest = request.defaults({ jar: true });
  defaultJarRequest.get(githubUrl);
  //defaultJarRequest(); //this line doesn't compile (and shouldn't)
  const defaultUrlRequest = request.defaults({ url: githubUrl });
  defaultUrlRequest();
  defaultUrlRequest.get();
  const defaultBodyRequest = defaultUrlRequest.defaults({body: '{}', json: true});
  defaultBodyRequest.get();
  defaultBodyRequest.post();
  defaultBodyRequest.put();
})();


// --- --- --- --- --- --- --- --- --- --- --- ---

obj = req.toJSON();

var cookieValue: request.CookieValue;
str = cookieValue.name;
value = cookieValue.value;
bool = cookieValue.httpOnly;

var cookie: request.Cookie;
str = cookie.str;
date = cookie.expires;
str = cookie.path;
str = cookie.toString();

var jar: request.CookieJar;
jar.setCookie(cookie, uri);
str = jar.getCookieString(uri);
var cookies: request.Cookie[] = jar.getCookies(uri);

var aws: request.AWSOptions;
str = aws.secret;
str = aws.bucket;

var oauth: request.OAuthOptions;
str = oauth.callback;
str = oauth.consumer_key;
str = oauth.consumer_secret;
str = oauth.token;
str = oauth.token_secret;
str = oauth.verifier;

var options: request.Options = {
	url: str,
	uri: str,
	callback: (error: any, response: any, body: any) => {

	},
	jar: value,
	form: obj,
	oauth: value,
	aws: aws,
	qs: obj,
	json: value,
	multipart: value,
	agent: new http.Agent(),
	agentOptions: value,
	agentClass: value,
	forever: value,
	host: str,
	port: num,
	method: str,
	headers: value,
	body: value,
	followRedirect: bool,
	followAllRedirects: bool,
	maxRedirects: num,
	encoding: str,
	pool: value,
	timeout: num,
	proxy: value,
	strictSSL: bool
};

// Below line has compile error, use OptionsWithUri or OptionsWithUrl instead. See #7979.
// options.uri = str;

const opt: request.OptionsWithUri = {
  baseUrl: 'http://localhost',
  uri: 'bar'
};
opt.uri = str;

// --- --- --- --- --- --- --- --- --- --- --- ---

agent = req.getAgent();
//req.start();
//req.abort();
req.pipeDest(dest);
req = req.setHeader(str, str);
req = req.setHeader(str, str, bool);
req = req.setHeaders(headers);
req = req.qs(obj);
req = req.qs(obj, bool);
req = req.form(obj);
form = req.form();
req = req.multipart(bodyArr);
req = req.json(value);
req = req.aws(aws);
req = req.aws(aws, bool);
req = req.oauth(oauth);
req = req.jar(jar);
write = req.pipe(write);
write = req.pipe(write, value);
req.pipe(req);
req.write(value);
req.end(str);
req.end(buffer);
req.pause();
req.resume();
req.abort();
req.destroy();

// --- --- --- --- --- --- --- --- --- --- --- ---

value = request.initParams;

req = request(uri);
req = request(uri, options);
req = request(uri, options, callback);
req = request(uri, callback);
req = request(options);
req = request(options, callback);

req = request.get(uri);
req = request.get(uri, options);
req = request.get(uri, options, callback);
req = request.get(uri, callback);
req = request.get(options);
req = request.get(options, callback);

req = request.post(uri);
req = request.post(uri, options);
req = request.post(uri, options, callback);
req = request.post(uri, callback);
req = request.post(options);
req = request.post(options, callback);

req = request.put(uri);
req = request.put(uri, options);
req = request.put(uri, options, callback);
req = request.put(uri, callback);
req = request.put(options);
req = request.put(options, callback);

req = request.head(uri);
req = request.head(uri, options);
req = request.head(uri, options, callback);
req = request.head(uri, callback);
req = request.head(options);
req = request.head(options, callback);

req = request.patch(uri);
req = request.patch(uri, options);
req = request.patch(uri, options, callback);
req = request.patch(uri, callback);
req = request.patch(options);
req = request.patch(options, callback);

req = request.del(uri);
req = request.del(uri, options);
req = request.del(uri, options, callback);
req = request.del(uri, callback);
req = request.del(options);
req = request.del(options, callback);

req = request.forever(value, value);
jar = request.jar();
cookie = request.cookie(str);

var r = request.defaults(options);
r(str);
r.get(str);
r.post(str);

r(options);
r.get(options);
r.post(options);

request
.get('http://example.com/example.png')
.on('response', function(response: any) {
	// check response
})
.pipe(request.put('http://another.com/another.png'));

//The following examples from https://github.com/request/request
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); // Show the HTML for the Google homepage.
  }
});

request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'));

fs.createReadStream('file.json').pipe(request.put('http://mysite.com/obj.json'));

request.get('http://google.com/img.png').pipe(request.put('http://mysite.com/img.png'));

request
  .get('http://google.com/img.png')
  .on('response', function(response: any) {
    console.log(response.statusCode); // 200
    console.log(response.headers['content-type']); // 'image/png'
  })
  .pipe(request.put('http://mysite.com/img.png'));

request
  .get('http://mysite.com/doodle.png')
  .on('error', function(err: any) {
    console.log(err);
  })
  .pipe(fs.createWriteStream('doodle.png'));

http.createServer(function (req, resp) {
  if (req.url === '/doodle.png') {
    if (req.method === 'PUT') {
      req.pipe(request.put('http://mysite.com/doodle.png'));
    } else if (req.method === 'GET' || req.method === 'HEAD') {
      request.get('http://mysite.com/doodle.png').pipe(resp);
    }
  }
});

http.createServer(function (req, resp) {
  if (req.url === '/doodle.png') {
    var x = request('http://mysite.com/doodle.png');
    req.pipe(x);
    x.pipe(resp);
  }
});

var resp: http.ServerResponse;
req.pipe(request('http://mysite.com/doodle.png')).pipe(resp);

http.createServer(function (req, resp) {
  if (req.url === '/doodle.png') {
    r.get('http://google.com/doodle.png').pipe(resp);
  }
});

request.post('http://service.com/upload', {form:{key:'value'}});
// or
request.post('http://service.com/upload').form({key:'value'});
// or
request.post({url:'http://service.com/upload', form: {key:'value'}}, function(err,httpResponse,body){ /* ... */ });

var data = {
  // Pass a simple key-value pair
  my_field: 'my_value',
  // Pass data via Buffers
  my_buffer: new Buffer([1, 2, 3]),
  // Pass data via Streams
  my_file: fs.createReadStream(__dirname + '/unicycle.jpg'),
  // Pass multiple values /w an Array
  attachments: [
    fs.createReadStream(__dirname + '/attachment1.jpg'),
    fs.createReadStream(__dirname + '/attachment2.jpg')
  ],
  // Pass optional meta-data with an 'options' object with style: {value: DATA, options: OPTIONS}
  // Use case: for some types of streams, you'll need to provide "file"-related information manually.
  // See the `form-data` README for more information about options: https://github.com/felixge/node-form-data
  custom_file: {
    value:  fs.createReadStream('/dev/urandom'),
    options: {
      filename: 'topsecret.jpg',
      contentType: 'image/jpg'
    }
  }
};
request.post({url:'http://service.com/upload', formData: data}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
});

var requestMultipart = request.post('http://service.com/upload', function optionalCallback(err, httpResponse, body) {});
var form = requestMultipart.form();
form.append('my_field', 'my_value');
form.append('my_buffer', new Buffer([1, 2, 3]));
form.append('custom_file', fs.createReadStream(__dirname + '/unicycle.jpg'), {filename: 'unicycle.jpg'});

request({
    method: 'PUT',
    preambleCRLF: true,
    postambleCRLF: true,
    uri: 'http://service.com/upload',
    multipart: {
      chunked: false,
      data: [
        {
          'content-type': 'application/json',
          body: JSON.stringify({foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, 'content_type': 'text/plain' }}})
        },
        { body: 'I am an attachment' }
      ]
    }
  },
  function (error, response, body) {
    if (error) {
      return console.error('upload failed:', error);
    }
    console.log('Upload successful!  Server responded with:', body);
  });
request({
    method: 'PUT',
    preambleCRLF: true,
    postambleCRLF: true,
    uri: 'http://service.com/upload',
    multipart: [
      {
        'content-type': 'application/json',
        body: JSON.stringify({foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, 'content_type': 'text/plain' }}})
      },
      { body: 'I am an attachment' },
      { body: fs.createReadStream('image.png') }
    ]
  },
  function (error, response, body) {
    if (error) {
      return console.error('upload failed:', error);
    }
    console.log('Upload successful!  Server responded with:', body);
  });

request.get('http://some.server.com/').auth('username', 'password', false);
// or
request.get('http://some.server.com/', {
  'auth': {
    'user': 'username',
    'pass': 'password',
    'sendImmediately': false
  }
});
// or
request.get('http://some.server.com/').auth(null, null, true, 'bearerToken');
// or
request.get('http://some.server.com/', {
  'auth': {
    'bearer': 'bearerToken'
  }
});

var username = 'username',
    password = 'password',
    url = 'http://' + username + ':' + password + '@some.server.com';

request({url: url}, function (error, response, body) {
   // Do more stuff with 'body' here
});

options = {
  url: 'https://api.github.com/repos/request/request',
  headers: {
    'User-Agent': 'request'
  }
};

function callback(error: any, response: http.IncomingMessage, body: string) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
  }
}

request(options, callback);

// OAuth1.0 - 3-legged server side flow (Twitter example)
// step 1
import qs = require('querystring');
const CONSUMER_KEY = 'key';
const CONSUMER_SECRET = 'secret';
oauth =
    { callback: 'http://mysite.com/callback/'
    , consumer_key: CONSUMER_KEY
    , consumer_secret: CONSUMER_SECRET
    }
  , url = 'https://api.twitter.com/oauth/request_token'
  ;
request.post({url:url, oauth:oauth}, function (e, r, body) {
  // Ideally, you would take the body in the response
  // and construct a URL that a user clicks on (like a sign in button).
  // The verifier is only available in the response after a user has
  // verified with twitter that they are authorizing your app.

  // step 2
  var req_data = qs.parse(body);
  var uri = 'https://api.twitter.com/oauth/authenticate'
    + '?' + qs.stringify({oauth_token: req_data.oauth_token});
  // redirect the user to the authorize uri

  // step 3
  // after the user is redirected back to your server
  var auth_data: any = qs.parse(body)
    , oauth =
      { consumer_key: CONSUMER_KEY
      , consumer_secret: CONSUMER_SECRET
      , token: auth_data.oauth_token
      , token_secret: req_data.oauth_token_secret
      , verifier: auth_data.oauth_verifier
      }
    , url = 'https://api.twitter.com/oauth/access_token'
    ;
  request.post({url:url, oauth:oauth}, function (e, r, body) {
    // ready to make signed requests on behalf of the user
    var perm_data: any = qs.parse(body);
    var oauth =
        { consumer_key: CONSUMER_KEY
        , consumer_secret: CONSUMER_SECRET
        , token: perm_data.oauth_token
        , token_secret: perm_data.oauth_token_secret
        };
    var url = 'https://api.twitter.com/1.1/users/show.json';
    var query = {
      screen_name: perm_data.screen_name,
      user_id: perm_data.user_id
    };
    request.get({url:url, oauth:oauth, qs:query, json:true}, function (e, r, user) {
      console.log(user);
    });
  });
});

var path = require('path')
    , certFile = path.resolve(__dirname, 'ssl/client.crt')
    , keyFile = path.resolve(__dirname, 'ssl/client.key')
    , caFile = path.resolve(__dirname, 'ssl/ca.cert.pem');

options = {
    url: 'https://api.some-server.com/',
    cert: fs.readFileSync(certFile),
    key: fs.readFileSync(keyFile),
    passphrase: 'password',
    ca: fs.readFileSync(caFile)
};

request.get(options);

var path = require('path')
    , certFile = path.resolve(__dirname, 'ssl/client.crt')
    , keyFile = path.resolve(__dirname, 'ssl/client.key');

options = {
    url: 'https://api.some-server.com/',
    agentOptions: {
        cert: fs.readFileSync(certFile),
        key: fs.readFileSync(keyFile),
        // Or use `pfx` property replacing `cert` and `key` when using private key, certificate and CA certs in PFX or PKCS12 format:
        // pfx: fs.readFileSync(pfxFilePath),
        passphrase: 'password',
        securityOptions: 'SSL_OP_NO_SSLv3'
    }
};

request.get(options);

request.get({
    url: 'https://api.some-server.com/',
    agentOptions: {
        secureProtocol: 'SSLv3_method'
    }
});

request.get({
    url: 'https://api.some-server.com/',
    agentOptions: {
        ca: fs.readFileSync('ca.cert.pem')
    }
});


request({
    // will be ignored
    method: 'GET',
    uri: 'http://www.google.com',

    // HTTP Archive Request Object
    har: {
      url: 'http://www.mockbin.com/har',
      method: 'POST',
      headers: [
        {
          name: 'content-type',
          value: 'application/x-www-form-urlencoded'
        }
      ],
      postData: {
        mimeType: 'application/x-www-form-urlencoded',
        params: [
          {
            name: 'foo',
            value: 'bar'
          },
          {
            name: 'hello',
            value: 'world'
          }
        ]
      }
    }
  });

//requests using baseRequest() will set the 'x-token' header
var baseRequest = request.defaults({
  headers: {'x-token': 'my-token'}
});

//requests using specialRequest() will include the 'x-token' header set in
//baseRequest and will also include the 'special' header
var specialRequest = baseRequest.defaults({
  headers: {special: 'special value'}
});

const urlRequest = specialRequest.defaults({url: 'https://github.com'});
urlRequest({}, function(error, response, body) {console.log(body);});

request.put(url);
request.patch(url);
request.post(url);
request.head(url);
request.del(url);
request.get(url);
request.cookie('key1=value1');
request.jar();
request.debug = true;

request.get('http://10.255.255.1', {timeout: 1500}, function(err) {
    console.log(err.code === 'ETIMEDOUT');
    // Set to `true` if the timeout was a connection timeout, `false` or
    // `undefined` otherwise.
    console.log(err.connect === true);
    process.exit(0);
});

var rand = Math.floor(Math.random()*100000000).toString();
  request(
    { method: 'PUT'
    , uri: 'http://mikeal.iriscouch.com/testjs/' + rand
    , multipart:
      [ { 'content-type': 'application/json'
        ,  body: JSON.stringify({foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, 'content_type': 'text/plain' }}})
        }
      , { body: 'I am an attachment' }
      ]
    }
  , function (error, response, body) {
      if(response.statusCode == 201){
        console.log('document saved as: http://mikeal.iriscouch.com/testjs/'+ rand)
      } else {
        console.log('error: '+ response.statusCode)
        console.log(body)
      }
    }
  );

request(
    { method: 'GET'
    , uri: 'http://www.google.com'
    , gzip: true
    }
  , function (error, response, body) {
      // body is the decompressed response body
      console.log('server encoded the data as: ' + (response.headers['content-encoding'] || 'identity'))
      console.log('the decoded data is: ' + body)
    }
  ).on('data', function(data: any) {
    // decompressed data as it is received
    console.log('decoded chunk: ' + data)
  })
  .on('response', function(response: http.IncomingMessage) {
    // unmodified http.IncomingMessage object
    response.on('data', function(data: any[]) {
      // compressed data as it is received
      console.log('received ' + data.length + ' bytes of compressed data')
    })
  });

var requestWithJar = request.defaults({jar: true})
requestWithJar('http://www.google.com', function () {
  requestWithJar('http://images.google.com');
});

var j = request.jar()
requestWithJar = request.defaults({jar:j})
requestWithJar('http://www.google.com', function () {
  requestWithJar('http://images.google.com');
});

var j = request.jar();
cookie = request.cookie('key1=value1');
var url = 'http://www.google.com';
j.setCookie(cookie, url);
request({url: url, jar: j}, function () {
  request('http://images.google.com');
});

//TODO: add definitions for tough-cookie-filestore
//var FileCookieStore = require('tough-cookie-filestore');
// NOTE - currently the 'cookies.json' file must already exist!
//var j = request.jar(new FileCookieStore('cookies.json'));
requestWithJar = request.defaults({ jar : j })
request('http://www.google.com', function() {
  request('http://images.google.com');
});

var j = request.jar()
request({url: 'http://www.google.com', jar: j}, function () {
  var cookie_string = j.getCookieString(url); // "key1=value1; key2=value2; ..."
  var cookies = j.getCookies(url);
  // [{key: 'key1', value: 'value1', domain: "www.google.com", ...}, ...]
});

request(
    { method: 'GET'
    , uri: 'http://www.google.com'
    , gzip: true
    }
  )
  .on('request', function(req: http.ClientRequest) { })
  .on('response', function(resp: http.IncomingMessage) { })
  .on('data', function(data: Buffer | string) { })
  .on('error', function(e: Error) { })
  .on('complete', function(resp: http.IncomingMessage, body?: string | Buffer) { });
