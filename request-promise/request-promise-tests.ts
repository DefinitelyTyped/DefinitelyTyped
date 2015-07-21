/// <reference path="request-promise.d.ts" />

import rp = require('request-promise');

rp('http://www.google.com')
    .then(console.dir)
    .catch(console.error);

var options: rp.Options = {
    uri : 'http://posttestserver.com/post.php',
    method : 'POST'
};

rp(options)
    .then(console.dir)
    .catch(console.error);

