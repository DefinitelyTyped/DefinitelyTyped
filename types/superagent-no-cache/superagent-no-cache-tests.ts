import * as request from 'superagent';
import * as plugin from 'superagent-no-cache';

request
    .get('/some-url')
    .use(plugin)
    .end((err, res) => {
        // Do something
    });
