import S3rver = require('s3rver');
import { IncomingMessage, ServerResponse } from 'http';
import { Http2ServerRequest, Http2ServerResponse } from 'http2';
import { AddressInfo } from 'net';

const s3rver = new S3rver({
    address: 'localhost',
    port: 5694,
    key: '',
    cert: '',
    silent: true,
    serviceEndpoint: '',
    directory: '/tmp/s3rver_test_directory',
    resetOnClose: false,
    allowMismatchedSignatures: false,
    vhostBuckets: true,
    configureBuckets: [
        { name: 'bucket1', configs: [''] },
        { name: 'bucket1', configs: [Buffer.alloc(1)] },
    ],
});

s3rver.run().then((address: AddressInfo) => {});
s3rver.run((err: Error | null, address: AddressInfo) => {});

s3rver.close().then(() => {});
s3rver.close((err?: Error) => {});

function testMiddleware1(req: IncomingMessage, res: ServerResponse) {
    s3rver.callback()(req, res);
    s3rver.getMiddleware()(req, res);
}

function testMiddleware2(req: Http2ServerRequest, res: Http2ServerResponse) {
    s3rver.callback()(req, res);
    s3rver.getMiddleware()(req, res);
}

s3rver.configureBuckets().then(() => {});

s3rver.reset();
