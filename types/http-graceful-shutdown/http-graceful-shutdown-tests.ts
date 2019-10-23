import GracefulShutdown = require('http-graceful-shutdown');
import * as http from "http";
import * as https from "https";

const opts: GracefulShutdown.Options = {
    signals: "SIGINT SIGTERM",
    timeout: 1337,
    development: false,
    onShutdown: (signal) => {
        console.log('fake shutdown handler', signal);
        return Promise.resolve();
    },
    finally: () => {
        console.log('fake finally handler');
    }
};

const httpServer = http.createServer((req, res) => {
    res.end();
});

const httpsServer = https.createServer({
    key: new Buffer('foo'),
    cert: new Buffer('bar')
}, (req, res) => {
    res.end();
});

GracefulShutdown(httpServer, opts);
GracefulShutdown(httpsServer, opts);
