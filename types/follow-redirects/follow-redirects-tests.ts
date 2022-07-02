import { http, https } from 'follow-redirects';
import { URL } from 'url';

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

http.get('http://bit.ly/900913');
http.get({ headers: { Accept: 'application/json' } });
http.get(new URL('http://bit.ly/900913'));
http.get('http://bit.ly/900913', response => {
    response.on('data', chunk => {
        console.log(chunk);
    });
}).on('error', err => {
    console.error(err);
});
http.get('http://bit.ly/900913', { headers: { Accept: 'application/json' } }, _res => {});
http.get(new URL('http://bit.ly/900913'), _res => {});
http.get(new URL('http://bit.ly/900913'), { headers: { Accept: 'application/json' } }, _res => {});

https.get('http://bit.ly/900913');
https.get({ headers: { Accept: 'application/json' } });
https.get(new URL('http://bit.ly/900913'));
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
https.get('http://bit.ly/900913', { headers: { Accept: 'application/json' } }, _res => {});
https.get(new URL('http://bit.ly/900913'), _res => {});
https.get(new URL('http://bit.ly/900913'), { headers: { Accept: 'application/json' } }, _res => {});

// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/58510#issuecomment-1027810928
declare const isHTTP: boolean;
(isHTTP ? http : https).request({ headers: { Accept: 'application/json' } }, _res => {});
