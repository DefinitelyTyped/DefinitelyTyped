import charset = require('charset');
import http = require('http');

http.get('https://nodejs.org', (res) => {
  res.on('data', (chunk: Buffer) => {
    console.log(charset(res.headers, chunk));
    console.log(charset(res, chunk));
    console.log(charset('content-type header, for example charset=utf8', chunk));
    res.destroy();
  });
});
