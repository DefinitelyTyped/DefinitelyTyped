import stickyCluster = require('sticky-cluster');
import express = require('express');
import * as http from 'http';

/** test with all params */
stickyCluster(
    (callback) => {
        const app = express();
        const server = http.createServer(app);

        // don't do server.listen(), just pass the server instance into the callback
        callback(server);
    },
    {
        prefix: 'sticky-cluster:',
        concurrency: 10,
        port: 3000,
        debug: true,
        hardShutdownDelay: 60 * 1000,
        env: (index) => ({ stickycluster_worker_index: index }),
        errorHandler: (err) => { console.log(err); process.exit(1); }
    }
);

/** test with no params */
stickyCluster(
    (callback) => {
        const app = express();
        const server = http.createServer(app);

        // don't do server.listen(), just pass the server instance into the callback
        callback(server);
    }
);
