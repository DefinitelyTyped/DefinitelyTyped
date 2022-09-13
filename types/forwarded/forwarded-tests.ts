import forwarded = require('forwarded');
import * as http from 'http';

http.createServer((req) => {
    // $ExpectType string[]
    forwarded(req);
});
