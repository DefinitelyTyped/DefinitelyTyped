import sticky = require('sticky-session');
import http = require('http');

const server = http.createServer();

// Test with all parameters
if (!sticky.listen(server, 3000, { workers: 2 })) {
    server.once('listening', () => {
        console.log("Server listening on port X");
    });
} else {
    console.log("Worker listening on process: " + process.pid);
}

// Test without options
if (!sticky.listen(server, 3000)) {
    server.once('listening', () => {
        console.log("Server listening on port X");
    });
} else {
    console.log("Worker listening on process: " + process.pid);
}

// Port is optional
if (!sticky.listen(server)) {
    server.once('listening', () => {
        console.log("Server listening on port X");
    });
} else {
    console.log("Worker listening on process: " + process.pid);
}
