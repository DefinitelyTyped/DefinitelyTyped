import * as request from 'superagent';
import * as bunyan from 'bunyan';

import superagentLogger = require('superagent-bunyan');

const logger = bunyan.createLogger({name: 'my_log'});

logger.info('Hey!');

request
    .get('http://localhost:3000')
    .use(superagentLogger(logger))
    .use(superagentLogger(logger, 'requestId'))
    .use(superagentLogger(logger, 'requestId', { foo: 'bar' }))
    .use(superagentLogger(logger, undefined, { foo: 'bar' }))
    .end((err, res) => {});
