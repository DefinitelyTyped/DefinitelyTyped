import express = require('express');
import expressStatusMonitor = require('express-status-monitor');
import socketIO = require('socket.io');

const app = express();
app.use(expressStatusMonitor());
app.use(
    expressStatusMonitor({
        title: 'Type Test',
        theme: 'default.css',
        path: '/status',
        socketPath: '/socket.io',
        websocket: null,
        chartVisibility: {
            cpu: true,
            mem: false,
            load: true,
        },
        ignoreStartsWith: '/admin',
        healthChecks: [],
    }),
);
app.use(
    expressStatusMonitor({
        spans: [{ interval: 10000, retention: 60 * 1000 }],
        healthChecks: [
            {
                protocol: 'http',
                host: 'localhost',
                path: '/healthcheck',
                port: '4000',
            },
        ],
    }),
);

const io = socketIO.listen(80);

app.use(
    expressStatusMonitor({
        websocket: io,
    }),
);
