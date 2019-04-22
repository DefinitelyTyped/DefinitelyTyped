import bunyanBugsnag = require('bunyan-bugsnag');
import * as bunyan from 'bunyan';

const stream1 = bunyanBugsnag();

const stream2 = bunyanBugsnag({
    systemInfo: ['name', 'hostname', 'pid', 'req_id', 'level', 'time', 'v'],
    warningLevel: 'warn',
    errorLevel: 'error',
});

const options: bunyanBugsnag.Options = {
    systemInfo: ['name', 'hostname', 'pid', 'req_id', 'level', 'time', 'v'],
    warningLevel: 30,
    errorLevel: 20
};

const stream3 = bunyanBugsnag(options);

const logger = bunyan.createLogger({
    name: 'appName',
    streams: [{
        type: 'raw',
        level: 'warn',
        stream: stream3
    }]
});
