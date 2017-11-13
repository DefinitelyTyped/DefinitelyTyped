import rp = require('request-promise');
import errors = require('request-promise/errors');
import * as path from "path";

rp('http://www.google.com')
    .then(console.dir)
    .catch(console.error);

let options: rp.Options = {
    uri : 'http://posttestserver.com/post.php',
    method : 'POST',
    json: true,
    body: { some: 'payload' }
};

rp(options)
    .then(console.dir)
    .catch(console.error);

rp('http://google.com').finally(() => {});

// This works:
rp('http://google.com').then(console.dir);
rp('http://google.com').catch(console.error);
rp('http://google.com').then(console.dir, console.error);

// This works as well since additional methods are only used AFTER the FIRST call in the chain:

// todo: Fix BlueBird 3.0 definition to include 'spread'
//rp('http://google.com').then(console.dir).spread(console.dir);

// todo: Fix BlueBird 3.0 definition to include 'error'
//rp('http://google.com').catch(console.error).error(console.error);

// Use .promise() in these cases:
// todo: Fix BlueBird 3.0 definition to include 'bind'
//rp('http://google.com').promise().bind(this).then(console.dir);

rp({ uri: 'http://google.com', resolveWithFullResponse: true }).then((response) => {});
rp({ uri: 'http://google.com', simple: false }).catch((reason) => {});

// todo: fix to make sure this works with BlueBird 3.0
/* rp({
    uri: 'http://google.com',
    transform: (body: any, response: http.IncomingMessage, resolveWithFullResponse: boolean): any => {
        throw new Error('Transform failed!');
    }
}).catch(errors.StatusCodeError, (reason: errors.StatusCodeError) => {
    // The server responded with a status codes other than 2xx.
    // Check reason.statusCode
}).catch(errors.RequestError, (reason: errors.RequestError) => {
    // The request failed due to technical reasons.
    // reason.cause is the Error object Request would pass into a callback.
}).catch(errors.TransformError, (reason: errors.TransformError) => {
    console.log(reason.cause.message); // => Transform failed!
    // reason.response is the original response for which the transform operation failed
}); */

//Defaults tests
(() => {
  const githubUrl = 'https://github.com';
  const defaultJarRequest = rp.defaults({ jar: true });
  defaultJarRequest.get(githubUrl).then(() => {});
  //defaultJarRequest(); //this line doesn't compile (and shouldn't)
  const defaultUrlRequest = rp.defaults({ url: githubUrl });
  defaultUrlRequest().then(() => {});
  defaultUrlRequest.get().then(() => {});
  const defaultBodyRequest = defaultUrlRequest.defaults({body: '{}', json: true});
  defaultBodyRequest.get().then(() => {});
  defaultBodyRequest.post().then(() => {});
  defaultBodyRequest.put().then(() => {});
})();

// Get full response after DELETE
options = {
    method: 'DELETE',
    uri: 'http://my-server/path/to/resource/1234'
};

rp(options)
    .then((response: http.IncomingMessage) => {
        console.log("DELETE succeeded with status %d", response.statusCode);
    })
    .catch(console.error);

//The following examples from https://github.com/request/request
import fs = require('fs');
import http = require('http');
const request = rp;

request('http://www.google.com', (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body); // Show the HTML for the Google homepage.
  }
});

request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'));

fs.createReadStream('file.json').pipe(request.put('http://mysite.com/obj.json'));

request.get('http://google.com/img.png').pipe(request.put('http://mysite.com/img.png'));

request
  .get('http://google.com/img.png')
  .on('response', (response: any) => {
    console.log(response.statusCode); // 200
    console.log(response.headers['content-type']); // 'image/png'
  })
  .pipe(request.put('http://mysite.com/img.png'));

request
  .get('http://mysite.com/doodle.png')
  .on('error', (err: any) => {
    console.log(err);
  })
  .pipe(fs.createWriteStream('doodle.png'));

http.createServer((req, resp) => {
  if (req.url === '/doodle.png') {
    switch (req.method) {
      case 'Put':
        req.pipe(request.put('http://mysite.com/doodle.png'));
        break;
      case 'GET':
      case 'HEAD':
       request.get('http://mysite.com/doodle.png').pipe(resp);
       break;
    }
  }
});

http.createServer((req, resp) => {
  if (req.url === '/doodle.png') {
    const x = request('http://mysite.com/doodle.png');
    req.pipe(x);
    x.pipe(resp);
  }
});

declare const resp: http.ServerResponse;
declare const req: rp.RequestPromise;
req.pipe(request('http://mysite.com/doodle.png')).pipe(resp);

const r = request;
http.createServer((req, resp) => {
  if (req.url === '/doodle.png') {
    r.get('http://google.com/doodle.png').pipe(resp);
  }
});

request.post('http://service.com/upload', { form: { key: 'value' } });
// or
request.post('http://service.com/upload').form({ key: 'value' });
// or
request.post({ url: 'http://service.com/upload', form: { key: 'value' } }, (err, httpResponse, body) => { /* ... */ });

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
request.post({ url: 'http://service.com/upload', formData: data }, (err, httpResponse, body) => {
  if (err) {
    console.error('upload failed:', err);
    return;
  }
  console.log('Upload successful!  Server responded with:', body);
});

const requestMultipart = request.post('http://service.com/upload', (err, httpResponse, body) =>  {});
const form = requestMultipart.form();
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
          body: JSON.stringify({ foo: 'bar', _attachments: { 'message.txt': {follows: true, length: 18, content_type: 'text/plain' } } })
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
request({
    method: 'PUT',
    preambleCRLF: true,
    postambleCRLF: true,
    uri: 'http://service.com/upload',
    multipart: [
      {
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, content_type: 'text/plain' }}})
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

request.get('http://some.server.com/').auth('username', 'password', false);
// or
request.get('http://some.server.com/', {
  auth: {
    user: 'username',
    pass: 'password',
    sendImmediately: false
  }
});
// or
request.get('http://some.server.com/').auth(null, null, true, 'bearerToken');
// or
request.get('http://some.server.com/', {
  auth: {
    bearer: 'bearerToken'
  }
});

const username = 'username';
const password = 'password';
let url = `http://${username}:${password}@some.server.com`;

request({ url }, (error, response, body) => {
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

request(options, callback);

// OAuth1.0 - 3-legged server side flow (Twitter example)
// step 1
import qs = require('querystring');
const CONSUMER_KEY = 'key';
const CONSUMER_SECRET = 'secret';
const oauth = { callback: 'http://mysite.com/callback/', consumer_key: CONSUMER_KEY, consumer_secret: CONSUMER_SECRET };
url = 'https://api.twitter.com/oauth/request_token';
request.post({ url, oauth }, (e, r, body) => {
  // Ideally, you would take the body in the response
  // and construct a URL that a user clicks on (like a sign in button).
  // The verifier is only available in the response after a user has
  // verified with twitter that they are authorizing your app.

  // step 2
  const req_data = qs.parse(body);
  const uri = `https://api.twitter.com/oauth/authenticate?${qs.stringify({oauth_token: req_data.oauth_token})}`;
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
  const url = 'https://api.twitter.com/oauth/access_token';
  request.post({ url, oauth }, (e, r, body) => {
    // ready to make signed requests on behalf of the user
    const perm_data: any = qs.parse(body);
    const oauth = {
      consumer_key: CONSUMER_KEY,
      consumer_secret: CONSUMER_SECRET,
      token: perm_data.oauth_token,
      token_secret: perm_data.oauth_token_secret,
    };
    const url = 'https://api.twitter.com/1.1/users/show.json';
    const query = {
      screen_name: perm_data.screen_name,
      user_id: perm_data.user_id
    };
    request.get({ url, oauth, qs: query, json: true }, (e, r, user) => {
      console.log(user);
    });
  });
});

let certFile = path.resolve(__dirname, 'ssl/client.crt');
let keyFile = path.resolve(__dirname, 'ssl/client.key');
const caFile = path.resolve(__dirname, 'ssl/ca.cert.pem');

options = {
    url: 'https://api.some-server.com/',
    cert: fs.readFileSync(certFile),
    key: fs.readFileSync(keyFile),
    passphrase: 'password',
    ca: fs.readFileSync(caFile)
};

request.get(options);

certFile = path.resolve(__dirname, 'ssl/client.crt');
keyFile = path.resolve(__dirname, 'ssl/client.key');

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
const baseRequest = request.defaults({
  headers: {'x-token': 'my-token'}
});

//requests using specialRequest() will include the 'x-token' header set in
//baseRequest and will also include the 'special' header
const specialRequest = baseRequest.defaults({
  headers: {special: 'special value'}
});

request.put(url);
request.patch(url);
request.post(url);
request.head(url);
request.del(url);
request.get(url);
request.cookie('key1=value1');
request.jar();
request.debug = true;

request.get('http://10.255.255.1', {timeout: 1500}, err => {
    console.log(err.code === 'ETIMEDOUT');
    // Set to `true` if the timeout was a connection timeout, `false` or
    // `undefined` otherwise.
    console.log(err.connect === true);
    process.exit(0);
});

const rand = Math.floor(Math.random() * 100000000).toString();
request(
  {
    method: 'PUT',
    uri: 'http://mikeal.iriscouch.com/testjs/' + rand,
    multipart: [
      {
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ foo: 'bar', _attachments: { 'message.txt': { follows: true, length: 18, content_type: 'text/plain' } } })
      },
      { body: 'I am an attachment' }
    ]
  }, (error, response, body) => {
    if (response.statusCode === 201) {
      console.log('document saved as: http://mikeal.iriscouch.com/testjs/' + rand);
    } else {
      console.log('error: ' + response.statusCode);
      console.log(body);
    }
  });

request(
  {
    method: 'GET',
    uri: 'http://www.google.com',
    gzip: true
  },
  (error, response, body) => {
    // body is the decompressed response body
    console.log('server encoded the data as: ' + (response.headers['content-encoding'] || 'identity'));
    console.log('the decoded data is: ' + body);
  })
  .on('data', (data: any) => {
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

let requestWithJar = request.defaults({ jar: true });
requestWithJar('http://www.google.com', () => {
  requestWithJar('http://images.google.com');
});

let jar = request.jar();
requestWithJar = request.defaults({ jar });
requestWithJar('http://www.google.com', () => {
  requestWithJar('http://images.google.com');
});

jar = request.jar();
const cookie = request.cookie('key1=value1');
url = 'http://www.google.com';
jar.setCookie(cookie, url);
request({ url, jar }, () => {
  request('http://images.google.com');
});

//TODO: add definitions for tough-cookie-filestore
//const FileCookieStore = require('tough-cookie-filestore');
// NOTE - currently the 'cookies.json' file must already exist!
//const j = request.jar(new FileCookieStore('cookies.json'));
requestWithJar = request.defaults({ jar });
request('http://www.google.com', () => {
  request('http://images.google.com');
});

jar = request.jar();
request({ url: 'http://www.google.com', jar }, () => {
  const cookie_string = jar.getCookieString(url); // "key1=value1; key2=value2; ..."
  const cookies = jar.getCookies(url);
  // [{key: 'key1', value: 'value1', domain: "www.google.com", ...}, ...]
});
