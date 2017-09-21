import * as bugsnagStream from 'bunyan-bugsnag';
import * as bunyan from 'bunyan';

const stream1 = bugsnagStream();

const stream2 = bugsnagStream({
    systemInfo: ['name', 'hostname', 'pid', 'req_id', 'level', 'time', 'v'],
    warningLevel: 'warn',
    errorLevel: 'error',
});

const stream3 = bugsnagStream({
    systemInfo: ['name', 'hostname', 'pid', 'req_id', 'level', 'time', 'v'],
    warningLevel: 30,
    errorLevel: 20
});

const logger = bunyan.createLogger({
    name: 'appName',
    streams: [{
        type: 'raw',
        level: 'warn',
        stream: stream3
    }]
});
