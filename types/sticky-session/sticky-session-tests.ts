import sticky = require('sticky-session');

import http = require('http');

const server = http.createServer();

if (!sticky.listen(server, 3000, { workers: 2 })) {
    server.once('listening', () => {
        console.log("Server listening on port X");
    });
} else {
    console.log("Worker listening on process: " + process.pid);
}
