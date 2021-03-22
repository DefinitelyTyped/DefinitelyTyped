import remotedev = require('remotedev-server');

remotedev({ hostname: 'localhost', port: 8000 });

remotedev({
    hostname: 'localhost',
    port: 8000,
    cert: 'path/to/cert.pem',
    key: 'path/to/keyFile.ppk',
    dbOptions: 'path/to/dbOptions.json',
    passphrase: 'very-secret',
    protocol: 'https',
    wsEngine: 'ws',
}).then(result => {
    if ('portAlreadyUsed' in result) {
        // Returned `PortUsedError` object
        result.on('any', () => console.log('port already in use :('));
    } else {
        // Returned `SocketCluster` instance
        result.on('workerClusterReady', () => console.log('socketcluster ready!'));
    }
});
