import expired = require('expired');

const headers = `
Age: 0
Cache-Control: public, max-age=300
Content-Encoding: gzip
Content-Type: application/json;charset=utf-8
Date: Fri, 23 Dec 2016 05:50:31 GMT
Last-Modified: Fri, 23 Dec 2016 05:23:23 GMT`;

expired(headers); // $ExpectType boolean
expired.in(headers); // $ExpectType number
expired.on(headers); // $ExpectType Date

const parsedHeaders = {
    age: '0',
    'cache-control': 'public, max-age=300',
    'content-encoding': 'gzip',
    'content-type': 'application/json;charset=utf-8',
    date: 'Fri, 23 Dec 2016 05:50:31 GMT',
    'last-modified': 'Fri, 23 Dec 2016 05:23:23 GMT',
};

expired(parsedHeaders); // $ExpectType boolean

const date = new Date();

expired(headers, date); // $ExpectType boolean
expired.in(headers, date); // $ExpectType number
