import { http, https } from 'follow-redirects';

http.request({
    host: 'localhost',
    path: '/a/b',
    port: 8000,
    maxRedirects: 12,
    beforeRedirect: (options) => {
        options.followRedirects = false;
    }
}, (response) => {
    console.log(response.responseUrl, response.redirects);
    response.on('data', (chunk) => {
        console.log(chunk);
    });
}).on('error', (err) => {
    console.error(err);
});

http.get('http://bit.ly/900913', (response) => {
    response.on('data', (chunk) => {
        console.log(chunk);
    });
}).on('error', (err) => {
    console.error(err);
});

https.get('http://bit.ly/900913', (response) => {
    console.log(response.responseUrl, response.redirects);
    response.on('data', (chunk) => {
        console.log(chunk);
    });
}).on('error', (err: Error) => {
    console.error(err);
});
