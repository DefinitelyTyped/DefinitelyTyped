import bunyan = require('bunyan');

import * as bsyslog from "bunyan-syslog";

const log = bunyan.createLogger({
    name: 'foo',
    streams: [{
        level: 'debug',
        type: 'raw',
        stream: bsyslog.createBunyanStream({
            type: 'sys',
            facility: bsyslog.local0,
            host: '192.168.0.1',
            port: 514
        })
    }]
});

log.debug({ foo: 'bar' }, 'hello %s', 'world');
