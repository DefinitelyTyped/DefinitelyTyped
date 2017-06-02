import * as request from 'superagent';
import plugin from 'superagent-prefix';

request
    .get('/some-url')
    .use(plugin('/static'))
    .end((err, res) => {
        // Do something
    });
