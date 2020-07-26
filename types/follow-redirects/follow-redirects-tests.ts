import followRedirects = require('follow-redirects');
import { http, https, wrap } from 'follow-redirects';
import url = require('url');
import browserHttp = require('follow-redirects/http');
import browserHttps = require('follow-redirects/https');

followRedirects.maxRedirects = 10;
followRedirects.maxBodyLength = 20 * 1024 * 1024;

const wrappedProtocols = wrap({
    http: require('http'),
    https: require('https'),
});
wrappedProtocols.maxBodyLength = 20;
wrappedProtocols.maxBodyLength = 20 * 1024 * 1024;

const options = url.parse('http://bit.ly/900913');
options.maxRedirects = 10;
options.beforeRedirect = options => {
    if (options.hostname === 'example.com') {
        options.auth = 'user:password';
    }
};

http.request(options);
http.request(
    {
        host: 'localhost',
        path: '/a/b',
        port: 8000,
        maxRedirects: 12,
        beforeRedirect: (options, { headers }) => {
            headers; // $ExpectType IncomingHttpHeaders
            options.followRedirects = false;
        },
    },
    response => {
        console.log(response.responseUrl, response.redirects);
        response.on('data', chunk => {
            console.log(chunk);
        });
    },
).on('error', err => {
    console.error(err);
});

const request = http.request({});
request.end();

http.get('http://bit.ly/900913', response => {
    response.on('data', chunk => {
        console.log(chunk);
    });
}).on('error', err => {
    console.error(err);
});

https
    .get('http://bit.ly/900913', response => {
        console.log(response.responseUrl, response.redirects);
        response.on('data', chunk => {
            console.log(chunk);
        });
    })
    .on('error', (err: Error) => {
        console.error(err);
    });
