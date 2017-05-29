import * as Client from 'ssh2-sftp-client';
var client = new Client();

client.connect({
    host: 'asdb',
    port: 1234,
    privateKey: 'my private key rsa in openssh format',
    readyTimeout: 1000,
}).then(() => null);

client.list('/remote/path').then(() => null);

client.get('/remote/path').then(stream => stream.read(0));

client.put('/local/path', '/remote/path').then(() => null);

client.put(new Buffer('content'), '/remote/path').then(() => null);

client.mkdir('/remote/path/dir', true).then(() => null);

client.delete('remote/path').then(() => null);

client.remove('/remote/from', '/remote/to').then(() => null);

client.end().then(() => null);