import * as request from 'superagent';
import plugin = require('superagent-no-cache');

request
    .get('/some-url')
    .use(plugin)
    .end((err, res) => {
        // Do something
    });
