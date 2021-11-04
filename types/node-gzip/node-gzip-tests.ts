import { gzip, ungzip } from 'node-gzip';

const testGzip = async () => {
    const someBuffer = Buffer.from('hello');
    const zipped1 = await gzip(someBuffer);

    const zipped2 = await gzip('gzipping a string directly');

    return [zipped1.byteLength, zipped2[0]];
};

const testUngzip = async () => {
    const data = Buffer.from('H4sICHeEGV0AA2EA4wIAkwbXMgEAAAA=', 'base64');
    const ungzipped = await ungzip(data);
    return ungzipped.toString('utf-8');
};
