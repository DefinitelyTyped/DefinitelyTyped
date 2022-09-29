import Client = require('ssh2-sftp-client');
import * as fs from 'fs';

(async () => {
    const client = new Client('name');

    client
        .connect({
            host: 'asdb',
            port: 1234,
            privateKey: 'my private key rsa in openssh format',
            readyTimeout: 1000,
            tryKeyboard: false,
        })
        .then(() => null);

    client.list('/remote/path').then(() => null);
    client.list('/remote/path', /foobar$/).then(() => null);
    client.list('/remote/path', 'foo*').then(() => null);

    const type = (await client.list('/remote/path'))[0].type;
    switch (type) {
        case 'd':
            break;
        case '-':
            break;
        case 'l':
            break;
    }

    client.exists('/remote/path').then(() => null);

    client.stat('/remote/path').then(() => null);

    client.realPath('/remote/path').then(() => null);

    client.get('/remote/path').then(() => null);
    client.get('/remote/path', fs.createWriteStream('/local/path/copy.txt')).then(() => null);
    client
        .get('/remote/path', fs.createWriteStream('/local/path/copy.txt'), {
            readStreamOptions: {
                flags: 'r',
                encoding: null,
                handle: null,
                mode: 0o666,
                autoClose: true,
            },
            pipeOptions: {
                end: false,
            },
        })
        .then(() => null);

    client.fastGet('/remote/path', 'local/path').then(() => null);
    client
        .fastGet('/remote/path', 'local/path', {
            concurrency: 64,
            chunkSize: 32768,
            step: (total_transferred, chunk, total) => null,
        })
        .then(() => null);

    client.put('/local/path', '/remote/path').then(() => null);
    client.put(new Buffer('content'), '/remote/path').then(() => null);
    client.put(fs.createReadStream('Hello World'), '/remote/path').then(() => null);
    client
        .put(fs.createReadStream('Hello World'), '/remote/path', {
            writeStreamOptions: {
                flags: 'w',
                encoding: null,
                mode: 0o666,
                autoClose: true,
            },
            pipeOptions: {
                end: false,
            },
        })
        .then(() => null);

    client.fastPut('/remote/path', 'local/path').then(() => null);
    client
        .fastPut('/remote/path', 'local/path', {
            concurrency: 64,
            chunkSize: 32768,
            mode: '0o755', // mixed. Integer or string representing the file mode to set
            step: (total_transferred, chunk, total) => null,
        })
        .then(() => null);

    client.cwd().then(() => null);

    client.mkdir('/remote/path/dir', true).then(() => null);
    client.rmdir('/remote/path/dir', true).then(() => null);

    client.delete('remote/path').then(() => null);
    client.delete('remote/path', true).then(() => null);

    client.rename('/remote/from', '/remote/to').then(() => null);

    client.posixRename('/remote/path/old', 'remote/path/new');

    client.chmod('/remote/path', 777).then(() => null);
    client.chmod('/remote/path', '777').then(() => null);

    client.realPath('./relative/remote/path').then(() => null);

    client.uploadDir('/local/path', '/remote/path').then(() => null);
    client.uploadDir('/local/path', '/remote/path', /foo*/).then(() => null);

    client.downloadDir('/remote/path', '/local/path', /foo*/).then(() => null);
    client.downloadDir('/remote/path', '/local/path', /foo*/).then(() => null);

    client.end().then(() => null);

    client.on('event', () => null);

    client.append(new Buffer('content'), 'remote/to');
    client.append(fs.createReadStream('content'), 'remote/to');
    client.append(new Buffer('content'), 'remote/to', {
        flags: 'a',
        encoding: null,
        mode: 0o666,
        autoClose: true,
    });

    client.rcopy('/remote/path/from', '/remote/path/to').then(() => null);

    client.createReadStream('/remote/path', {
        flags: 'r',
        mode: 0o666,
        autoClose: true,
    });

    client.createWriteStream('/remote/path', {
        flags: 'r',
        mode: 0o666,
        autoClose: true,
    });
})();
