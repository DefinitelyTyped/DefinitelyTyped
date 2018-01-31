import * as rpn from 'request-promise-native';
import * as errors from 'request-promise-native/errors';
import * as path from 'path';

rpn('http://www.google.com')
  .then(console.dir)
  .catch(console.error);

let options: rpn.Options = {
  uri: 'http://posttestserver.com/post.php',
  method: 'POST',
  json: true,
  body: { some: 'payload' }
};

const j = rpn.jar();

rpn(options)
  .then(console.dir)
  .catch(console.error);

rpn('http://google.com').then(() => { });

// This works:
rpn('http://google.com').then(console.dir);
rpn('http://google.com').catch(console.error);
rpn('http://google.com').then(console.dir, console.error);
rpn('http://google.com').promise().then(console.dir);

rpn({ uri: 'http://google.com', resolveWithFullResponse: true }).then((response) => { });
rpn({ uri: 'http://google.com', simple: false }).catch((reason) => { });

const rp: rpn.RequestPromise = rpn('http://google.com', {transform2xxOnly: true, json: true});

const promiseLike: PromiseLike<any> = rpn('http://google.com');
const promise: Promise<any> = rpn('http://google.com').promise();

// Defaults tests
(() => {
  const githubUrl = 'https://github.com';
  const defaultJarRequest = rpn.defaults({ jar: true });
  defaultJarRequest.get(githubUrl).then(() => { });
  // defaultJarRequest(); //this line doesn't compile (and shouldn't)
  const defaultUrlRequest = rpn.defaults({ url: githubUrl });
  defaultUrlRequest().then(() => { });
  defaultUrlRequest.get().then(() => { });
  const defaultBodyRequest = defaultUrlRequest.defaults({ body: '{}', json: true });
  defaultBodyRequest.get().then(() => { });
  defaultBodyRequest.post().then(() => { });
  defaultBodyRequest.put().then(() => { });
})();

// Get full response after DELETE
options = {
  method: 'DELETE',
  uri: 'http://my-server/path/to/resource/1234'
};

rpn(options)
  .then((response: http.IncomingMessage) => {
    console.log("DELETE succeeded with status %d", response.statusCode);
  })
  .catch(console.error);

// The following examples from https://github.com/request/request
import * as fs from 'fs';
import * as http from 'http';

rpn('http://www.google.com', (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body); // Show the HTML for the Google homepage.
  }
});

rpn('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'));

fs.createReadStream('file.json').pipe(rpn.put('http://mysite.com/obj.json'));

rpn.get('http://google.com/img.png').pipe(rpn.put('http://mysite.com/img.png'));

rpn
  .get('http://google.com/img.png')
  .on('response', (response: any) => {
    console.log(response.statusCode); // 200
    console.log(response.headers['content-type']); // 'image/png'
  })
  .pipe(rpn.put('http://mysite.com/img.png'));

rpn
  .get('http://mysite.com/doodle.png')
  .on('error', (err: any) => {
    console.log(err);
  })
  .pipe(fs.createWriteStream('doodle.png'));

http.createServer((req, resp) => {
  if (req.url === '/doodle.png') {
    switch (req.method) {
      case 'PUT':
        req.pipe(rpn.put('http://mysite.com/doodle.png'));
        break;
      case 'GET':
      case 'HEAD':
        rpn.get('http://mysite.com/doodle.png').pipe(resp);
        break;
    }
  }
});

http.createServer((req, resp) => {
  if (req.url === '/doodle.png') {
    const x = rpn('http://mysite.com/doodle.png');
    req.pipe(x);
    x.pipe(resp);
  }
});

declare const resp: http.ServerResponse;
declare const req: rpn.RequestPromise;
req.pipe(rpn('http://mysite.com/doodle.png')).pipe(resp);

const r = rpn;
http.createServer((req, resp) => {
  if (req.url === '/doodle.png') {
    r.get('http://google.com/doodle.png').pipe(resp);
  }
});

rpn.post('http://service.com/upload', { form: { key: 'value' } });
// or
rpn.post('http://service.com/upload').form({ key: 'value' });
// or
rpn.post({ url: 'http://service.com/upload', form: { key: 'value' } }, (err, httpResponse, body) => { /* ... */ });

const data = {
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
    value: fs.createReadStream('/dev/urandom'),
    options: {
      filename: 'topsecret.jpg',
      contentType: 'image/jpg'
    }
  }
};
rpn.post({ url: 'http://service.com/upload', formData: data }, function optionalCallback(err, httpResponse, body) {
  if (err) {
    console.error('upload failed:', err);
    return;
  }
  console.log('Upload successful!  Server responded with:', body);
});

const requestMultipart = rpn.post('http://service.com/upload', function optionalCallback(err, httpResponse, body) { });
const form = requestMultipart.form();
form.append('my_field', 'my_value');
form.append('my_buffer', new Buffer([1, 2, 3]));
form.append('custom_file', fs.createReadStream(__dirname + '/unicycle.jpg'), { filename: 'unicycle.jpg' });

rpn({
  method: 'PUT',
  preambleCRLF: true,
  postambleCRLF: true,
  uri: 'http://service.com/upload',
  multipart: {
    chunked: false,
    data: [
      {
        'content-type': 'application/json',
        body: JSON.stringify({ foo: 'bar', _attachments: { 'message.txt': { follows: true, length: 18, content_type: 'text/plain' } } })
      },
      { body: 'I am an attachment' }
    ]
  }
},
  (error, response, body) => {
    if (error) {
      console.error('upload failed:', error);
      return;
    }
    console.log('Upload successful!  Server responded with:', body);
  });
rpn({
  method: 'PUT',
  preambleCRLF: true,
  postambleCRLF: true,
  uri: 'http://service.com/upload',
  multipart: [
    {
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ foo: 'bar', _attachments: { 'message.txt': { follows: true, length: 18, content_type: 'text/plain' } } })
    },
    { body: 'I am an attachment' },
    { body: fs.createReadStream('image.png') }
  ]
},
  (error, response, body) => {
    if (error) {
      console.error('upload failed:', error);
      return;
    }
    console.log('Upload successful!  Server responded with:', body);
  });

rpn.get('http://some.server.com/').auth('username', 'password', false);
// or
rpn.get('http://some.server.com/', {
  auth: {
    user: 'username',
    pass: 'password',
    sendImmediately: false
  }
});
// or
rpn.get('http://some.server.com/').auth(null, null, true, 'bearerToken');
// or
rpn.get('http://some.server.com/', {
  auth: {
    bearer: 'bearerToken'
  }
});

const username = 'username';
const password = 'password';
let url = `http://${username}:${password}@some.server.com`;

rpn({ url }, (error, response, body) => {
  // Do more stuff with 'body' here
});

options = {
  url: 'https://api.github.com/repos/request/request',
  headers: {
    'User-Agent': 'request'
  }
};

function callback(error: any, response: http.IncomingMessage, body: string) {
  if (!error && response.statusCode === 200) {
    const info = JSON.parse(body);
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
  }
}

rpn(options, callback);

// OAuth1.0 - 3-legged server side flow (Twitter example)
// step 1
import * as qs from 'querystring';
const CONSUMER_KEY = 'key';
const CONSUMER_SECRET = 'secret';
const oauth = {
  callback: 'http://mysite.com/callback/',
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
};

url = 'https://api.twitter.com/oauth/request_token';

rpn.post({ url, oauth }, (e, r, body) => {
  // Ideally, you would take the body in the response
  // and construct a URL that a user clicks on (like a sign in button).
  // The verifier is only available in the response after a user has
  // verified with twitter that they are authorizing your app.

  // step 2
  const req_data = qs.parse(body);
  const uri = `https://api.twitter.com/oauth/authenticate?${qs.stringify({ oauth_token: req_data.oauth_token })}`;
  // redirect the user to the authorize uri

  // step 3
  // after the user is redirected back to your server
  const auth_data: any = qs.parse(body);
  const oauth = {
    consumer_key: CONSUMER_KEY,
    consumer_secret: CONSUMER_SECRET,
    token: auth_data.oauth_token,
    token_secret: req_data.oauth_token_secret as string,
    verifier: auth_data.oauth_verifier,
  };
  url = 'https://api.twitter.com/oauth/access_token';

  rpn.post({ url, oauth }, (e, r, body) => {
    // ready to make signed requests on behalf of the user
    const perm_data: any = qs.parse(body);
    const oauth = {
      consumer_key: CONSUMER_KEY,
      consumer_secret: CONSUMER_SECRET,
      token: perm_data.oauth_token,
      token_secret: perm_data.oauth_token_secret,
    };

    url = 'https://api.twitter.com/1.1/users/show.json';
    const query = {
      screen_name: perm_data.screen_name,
      user_id: perm_data.user_id
    };
    rpn.get({ url, oauth, qs: query, json: true }, (e, r, user) => {
      console.log(user);
    });
  });
});

const certFile = path.resolve(__dirname, 'ssl/client.crt');
const keyFile = path.resolve(__dirname, 'ssl/client.key');
const caFile = path.resolve(__dirname, 'ssl/ca.cert.pem');

options = {
  url: 'https://api.some-server.com/',
  cert: fs.readFileSync(certFile),
  key: fs.readFileSync(keyFile),
  passphrase: 'password',
  ca: fs.readFileSync(caFile)
};

rpn.get(options);

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

rpn.get(options);

rpn.get({
  url: 'https://api.some-server.com/',
  agentOptions: {
    secureProtocol: 'SSLv3_method'
  }
});

rpn.get({
  url: 'https://api.some-server.com/',
  agentOptions: {
    ca: fs.readFileSync('ca.cert.pem')
  }
});

rpn({
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

// requests using baseRequest() will set the 'x-token' header
const baseRequest = rpn.defaults({
  headers: { 'x-token': 'my-token' }
});

// requests using specialRequest() will include the 'x-token' header set in
// baseRequest and will also include the 'special' header
const specialRequest = baseRequest.defaults({
  headers: { special: 'special value' }
});

rpn.put(url);
rpn.patch(url);
rpn.post(url);
rpn.head(url);
rpn.del(url);
rpn.get(url);
rpn.cookie('key1=value1');
rpn.jar();
console.log(rpn.debug);

rpn.get('http://10.255.255.1', { timeout: 1500 }, (err) => {
  console.log(err.code === 'ETIMEDOUT');
  // Set to `true` if the timeout was a connection timeout, `false` or
  // `undefined` otherwise.
  console.log(err.connect === true);
  process.exit(0);
});

const rand = Math.floor(Math.random() * 100000000).toString();
rpn(
  {
    method: 'PUT',
    uri: 'http://mikeal.iriscouch.com/testjs/' + rand,
    multipart:
    [{
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ foo: 'bar', _attachments: { 'message.txt': { follows: true, length: 18, content_type: 'text/plain' } } })
    },
    { body: 'I am an attachment' }
    ]
  },
  (error, response, body) => {
    if (response.statusCode === 201) {
      console.log('document saved as: http://mikeal.iriscouch.com/testjs/' + rand);
    } else {
      console.log('error: ' + response.statusCode);
      console.log(body);
    }
  }
);

rpn(
  {
    method: 'GET',
    uri: 'http://www.google.com',
    gzip: true
  },
  (error, response, body) => {
    // body is the decompressed response body
    console.log('server encoded the data as: ' + (response.headers['content-encoding'] || 'identity'));
    console.log('the decoded data is: ' + body);
  }
).on('data', (data: any) => {
  // decompressed data as it is received
  console.log('decoded chunk: ' + data);
})
  .on('response', (response: http.IncomingMessage) => {
    // unmodified http.IncomingMessage object
    response.on('data', (data: any[]) => {
      // compressed data as it is received
      console.log(`received ${data.length} bytes of compressed data`);
    });
  });

let requestWithJar = rpn.defaults({ jar: true });
requestWithJar('http://www.google.com', () => {
  requestWithJar('http://images.google.com');
});

requestWithJar = rpn.defaults({ jar: j });
requestWithJar('http://www.google.com', () => {
  requestWithJar('http://images.google.com');
});

const cookie = rpn.cookie('key1=value1');
url = 'http://www.google.com';
j.setCookie(cookie, url);
rpn({ url, jar: j }, () => {
  rpn('http://images.google.com');
});

// TODO: add definitions for tough-cookie-filestore
// const FileCookieStore = require('tough-cookie-filestore');
// NOTE - currently the 'cookies.json' file must already exist!
// const j = request.jar(new FileCookieStore('cookies.json'));
requestWithJar = rpn.defaults({ jar: j });
rpn('http://www.google.com', () => {
  rpn('http://images.google.com');
});

rpn({ url: 'http://www.google.com', jar: j }, () => {
  const cookie_string = j.getCookieString(url); // "key1=value1; key2=value2; ..."
  const cookies = j.getCookies(url);
  // [{key: 'key1', value: 'value1', domain: "www.google.com", ...}, ...]
});
