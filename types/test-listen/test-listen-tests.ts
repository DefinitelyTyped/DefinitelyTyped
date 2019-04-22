import * as http from 'http';
import testListen = require('test-listen');

const test = async (): Promise<void> => {
    const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse): void => {
        res.write('hello');
        res.end();
    });

    const addr = await testListen(server);
    console.log(addr);
};

const testWithHostname = async (): Promise<void> => {
    const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse): void => {
        res.write('hello');
        res.end();
    });

    const addr = await testListen(server, '127.0.0.1');
    console.log(addr);
};

test();
testWithHostname();
