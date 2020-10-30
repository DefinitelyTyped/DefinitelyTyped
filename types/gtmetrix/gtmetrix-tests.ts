/// <reference types="node" />

import app = require('gtmetrix');
import fs = require('fs');

const gtmetrix = app({
    email: 'your@mail.tld',
    apikey: 'abc123',
    timeout: 3000,
});
const test = {
    url: 'http://example.net/',
    location: 2,
    browser: 3,
};
gtmetrix.test.create(test, console.log);
gtmetrix.test.get('Ao0AYQbz', console.log);
gtmetrix.test.get('Ao0AYQbz', console.log);
gtmetrix.test
    .get('Ao0AYQbz', 'screenshot', 5000)
    .then(data => fs.writeFile(__dirname + '/screenshot.jpg', data, console.log));
gtmetrix.locations.list(console.log);
gtmetrix.browsers.get(3, console.log);
gtmetrix.account.status(console.log);
