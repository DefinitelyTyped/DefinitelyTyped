import * as fs from 'fs';
import pino = require('pino');
import pinoms = require('pino-multi-stream');

const streams: pinoms.Streams = [
    { stream: process.stdout }, // an "info" level destination stream
    { level: 'error', stream: process.stderr }, // an "error" level destination stream
    { stream: fs.createWriteStream('/tmp/info.stream.out') },
    { level: 'fatal', stream: fs.createWriteStream('/tmp/fatal.stream.out') },
    { stream: pino.destination() },
    { stream: pinoms.prettyStream() },
    { stream: pinoms.prettyStream({ prettyPrint: { colorize: true } }) },
    { level: 'silent', stream: pino.destination()} // "silent" stream
];
const opts: pinoms.MultiStreamOptions = {
    dedupe: true
};
const logger = pinoms({
    level: 'warn',
    streams
});

const log = pino(
    {
        level: 'debug',
    },
    pinoms.multistream(streams, opts)
);
