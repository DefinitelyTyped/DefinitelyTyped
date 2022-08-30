import DockerModem = require('docker-modem');
import * as fs from 'fs';
import { Stream } from 'stream';
import { Agent } from 'http';

const modem = new DockerModem(); // defaults to above if env variables are not used
const modem1 = new DockerModem({ socketPath: '/var/run/docker.sock' });
const modem2 = new DockerModem({ host: 'http://192.168.1.10', port: 3000 });
const modem3 = new DockerModem({ protocol: 'http', host: '127.0.0.1', port: 3000 });
const modem4 = new DockerModem({ host: '127.0.0.1', port: 3000 }); // defaults to http

const modem5 = new DockerModem({
    host: '192.168.1.10',
    port: process.env.DOCKER_PORT || 2375,
    ca: 'ca',
    cert: 'cert',
    key: 'key',
});

const modem6 = new DockerModem({
    protocol: 'https', // you can enforce a protocol
    host: '192.168.1.10',
    port: process.env.DOCKER_PORT || 2375,
    ca: 'ca',
    cert: 'cert',
    key: 'key',
});

const modem7 = new DockerModem({
    host: '192.168.1.10',
    port: process.env.DOCKER_PORT || 2375,
    ca: fs.readFileSync('ca.pem'),
    cert: fs.readFileSync('cert.pem'),
    key: fs.readFileSync('key.pem'),
    version: 'v1.25', // required when DockerModem >= v1.13, https://docs.modem.com/engine/api/version-history/
});

const modem8 = new DockerModem({
    protocol: 'https', // you can enforce a protocol
    host: '192.168.1.10',
    port: process.env.DOCKER_PORT || 2375,
    ca: fs.readFileSync('ca.pem'),
    cert: fs.readFileSync('cert.pem'),
    key: fs.readFileSync('key.pem'),
});

// built-in SSH agent
const modem9 = new DockerModem({
    protocol: 'ssh',
    host: 'ssh://127.0.0.1',
    port: 22,
});

// custom agent
const customAgent = new Agent();
const modem10 = new DockerModem({ agent: customAgent });

const abortController = new AbortController();

modem.dial({ path: '/path', abortSignal: abortController.signal }, (err, result) => {
    // NOOP;
});

modem.demuxStream(new Stream(), process.stdout, process.stderr);

modem.followProgress(
    new Stream(),
    (error, result) => {
        // NOOP;
    },
    obj => {
        // NOOP;
    },
);

new modem.Promise<any>((resolve, reject) => {
    // NOOP;
}).then(() => {
    // NOOP;
});
