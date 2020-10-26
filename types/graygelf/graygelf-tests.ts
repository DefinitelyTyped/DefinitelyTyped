/// <reference types="node" />
import graygelf =  require('graygelf');
import { join } from 'path';
import * as fs from 'fs';

graygelf.LOG_LEVELS;
graygelf.CHUNK_LAN;
graygelf.CHUNK_WAN;

let log = new graygelf('graylog.server.local');
log = graygelf({
    host: 'graylog.server.local',
    port: 12201,
    mock: false
});

log.on('message', (msg) => {
    // output messages to console
    console.log(msg.full_message);
});

log.on('error', (msg) => {
    // output messages to console
    console.log(msg);
});

// setup global custom fields to be passed with every message
log.fields.facility = 'redicomps';
log.fields.other = 'redicomps';

// printf style "hello world"
log.info('hello %s', 'world');

// concat by space style "hello world"
log.info('hello', 'world');

// include a full message and custom fields using .a(ttach)
log.info.a('short', 'full', { foo: 'bar' });
log.info.a('short', 'full', { foo: 'bar' });

// if an Error is passed as the only argument...
let er = new Error('oh no!');
log.info(er);
// ... it expands to:
log.info.a(er.message, er.stack);

// writable streams can be created
const infostream = log.stream('info');

// raw gelf: version, host, and timestamp will be supplied if missing
log.raw({
    // version: '1.1',
    // host: 'wavded',
    short_message: 'oh no!',
    full_message: 'howdy',
    // timestamp: 1412087767.704356,
    level: 6,
    _foo: 'bar'
});

// the following tests were taken from the tests in graygelf project
// test graygelf
log = graygelf(); // defaults
log.graylogHost;
log.graylogPort;
log.compressType;
log.chunkSize;
log.alwaysCompress;
log._udp;

const loghost = graygelf('a.server.yo');
loghost.graylogHost;

const logopts = graygelf({
    host: 'word',
    port: 23232,
    compressType: 'gzip',
    chunkSize: 10,
    alwaysCompress: true,
});
logopts.graylogHost;
logopts.graylogPort;
logopts.compressType;
logopts.chunkSize;
logopts.alwaysCompress;

const logmock = graygelf({ mock: true });
logmock.write('blah blah');

// test log.on("message")

log = graygelf();
log.once('message', (data) => {
    data.level;
    data.timestamp;
    data.version;
    data.host;
    data.short_message;
    data.full_message;
});
log.emerg('oh', 'no');

// test log.on("error")

log = graygelf();
log.once('error', (er) => {
    er; // 'will emit errors emitted by udp client')
});
if (log._udp) log._udp.emit('error', 'oh no');

// test log.fields

log = graygelf();
log.fields.facility = 'test';

let gelf = log.info('test');
gelf._facility;

gelf = log.info.a('test', 'full', { facility: 'testa', row: 32 });
gelf._row;
gelf._facility;

// test log[level]

log = graygelf();
gelf = log.info('hello', 'world');
gelf.short_message;
gelf.level;

gelf = log.error('hello %s', 'world');
gelf.short_message;
gelf.level;

er = new Error('oh no');
gelf = log.crit(er);
gelf.short_message;
gelf.level;
gelf.full_message;

log.once('message', () => {
    gelf.short_message;
    gelf.full_message;
});
const ee = new (require('events').EventEmitter)();
ee.on('error', log.crit);
ee.emit('error', new Error('oh no'));

// test log[level].a

log = graygelf();
gelf = log.info.a('hello world', 'a long message', { custom: 'field' });
gelf.short_message;
gelf.full_message;
gelf._custom;

// test log.stream

log = graygelf();

try {
    log.stream('wfasdfas');
} catch (e) {
    // throws cause is invalid, a valid message is one of the levels
}

const rstream = fs.createReadStream(join(__dirname, 'stream.txt'));
const data = [
    'A line',
    'A second line',
];

log.on('message', (gelf) => {
    gelf.level;
    gelf.short_message;
});

rstream.pipe(log.stream('info'));

// test log.raw

log = graygelf();
gelf = log.raw({
    level: 0,
    short_message: 'a short message',
    _custom: 'field',
});

gelf._custom;
gelf.version;
gelf.host;
gelf.timestamp;

gelf = log.raw({
    version: '1.0',
    host: 'ahost',
    timestamp: 100,
});
gelf.version;
gelf.host;
gelf.timestamp;

// test log._send (plain json)

log = graygelf();

// overwrite for testing
log.write = (chunk) => {
    Buffer.isBuffer(chunk);
    chunk[0] === 0x7b;
};

gelf = log._prepGelf(0, 'my message');
log._send(gelf);

// test log._send (deflate)

log = graygelf();

// overwrite for testing
log.write = (chunk) => {
    Buffer.isBuffer(chunk);
    chunk[0] === 0x78;
};

// Force the message to be too big to fit as simple JSON
// but not so large as to force splitting across multiple chunks
let full_message = Array(8192 / 16).fill(' 123456789abcdef').join('');
gelf = log._prepGelf(0, 'my message', full_message);
log._send(gelf);

// test log._send (gzip)

log = graygelf();
log.compressType = 'gzip';
// overwrite for testing
log.write = (chunk) => {
    Buffer.isBuffer(chunk);
    chunk[0] === 0x1f;
};

// Force the message to be too big to fit as simple JSON
// but not so large as to force splitting across multiple chunks
full_message = Array(8192 / 16).fill(' 123456789abcdef').join('');
gelf = log._prepGelf(0, 'my message', full_message);
log._send(gelf);

// test log._send (chunked)

log = graygelf();
log.chunkSize = 100;

const expectedChunks = 2;
const index = 0;

// overwrite for testing
log.write = (chunk) => {
    Buffer.isBuffer(chunk);
    chunk[0] === 0x1e;
    chunk[10] === index;
    chunk[11] === expectedChunks;
    (index + 1) === expectedChunks;
};

gelf = log._prepGelf(0, 'my message', 'full message', { extra: 'field' });
log._send(gelf);

// test log._send (gzip, alwaysCompress: false)

log = graygelf();
log.chunkSize = 500;
log.compressType = 'gzip';

// overwrite for testing
log.write = (chunk) => {
    Buffer.isBuffer(chunk);
    chunk[0] === 0x7b;
};

gelf = log._prepGelf(0, 'my message', 'full message', { extra: 'field' });
log._send(gelf);

// test log._send (gzip, alwaysCompress: true)

log = graygelf();
log.chunkSize = 500;
log.compressType = 'gzip';
log.alwaysCompress = true;

// overwrite for testing
log.write = (chunk) => {
    Buffer.isBuffer(chunk);
    chunk[0] === 0x1f;
};

gelf = log._prepGelf(0, 'my message', 'full message', { extra: 'field' });
log._send(gelf);
