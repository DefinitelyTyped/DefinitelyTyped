import Client = require('ssh2-sftp-client');
import * as fs from 'fs';

const client = new Client();

client.connect({
    host: 'asdb',
    port: 1234,
    privateKey: 'my private key rsa in openssh format',
    readyTimeout: 1000,
}).then(() => null);

client.connect({
    host: 'asdb',
    port: 1234,
    privateKey: 'my private key rsa in openssh format',
    readyTimeout: 1000,
    retries: 2,
    retry_factor: 2,
    retry_minTimeout: 2000,
}).then(() => null);

client.list('/remote/path').then(() => null);

client.exists('/remote/path').then(() => null);

client.stat('/remote/path').then(() => null);

client.realPath('/remote/path').then(() => null);

client.get('/remote/path').then(() => null);

client.fastGet('/remote/path', 'local/path').then(() => null);

client.put('/local/path', '/remote/path').then(() => null);
client.put(new Buffer('content'), '/remote/path').then(() => null);
client.put(fs.createReadStream('Hello World'), '/remote/path').then(() => null);
client.put('/local/path', '/remote/path', { flags: 'w', encoding: 'utf-8', autoClose: true }).then(() => null);

client.fastPut('/remote/path', 'local/path').then(() => null);
client.fastPut('/remote/path', 'local/path', { concurrency: 4, chunkSize: 256, mode: 0o066 }).then(() => null);

client.cwd().then(() => null);

client.mkdir('/remote/path/dir', true).then(() => null);
client.rmdir('/remote/path/dir', true).then(() => null);

client.delete('remote/path').then(() => null);

client.rename('/remote/from', '/remote/to').then(() => null);

client.chmod('/remote/path', 777).then(() => null);

client.end().then(() => null);

client.on('event', () => null);

client.posixRename('remote/path/from', 'remote/path/to').then(() => null);
