import S3rver = require('s3rver');

var s3rver = new S3rver({
    port: 5694,
    hostname: 'localhost',
    silent: true,
    indexDocument: 'index.html',
    errorDocument: '',
    directory: '/tmp/s3rver_test_directory'
}).run((err, hostname, port, directory) => {});

s3rver.close();
s3rver.close(e => console.log(e));

// using new options
import fs = require('fs');
(async () => {
    await new S3rver({
        port:5694,
        address: 'localhost',
        configureBuckets: [
            { name: 'my-bucket', configs: [fs.readFileSync(require.resolve('s3rver/example/cors.xml'))] },
        ],
        directory: '/tmp/s3rver_test_directory'
    }).run();
})();
