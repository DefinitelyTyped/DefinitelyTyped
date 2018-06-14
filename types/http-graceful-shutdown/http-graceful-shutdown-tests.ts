import GracefulShutdown = require('http-graceful-shutdown');
import * as http from "http";

const opts: GracefulShutdown.Options = {
    signals: "SIGINT SIGTERM",
    timeout: 1337,
    development: false,
    onShutdown: () => {
        console.log('fake shutdown handler');
        return Promise.resolve();
    },
    finally: () => {
        console.log('fake finally handler');
    }
};

const server = http.createServer((req, res) => {
    res.end();
});

GracefulShutdown(server, opts);
