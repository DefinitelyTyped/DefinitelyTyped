import checksum = require('check-sum');
import * as fs from 'fs';

const stream = fs.createReadStream('package.json');

checksum(stream, {
    md5: 'asdfasdfasdf',
    sha1: 'asdfasdfasdf'
}, err => {
    err; // $ExpectType any
});

checksum('package.json', {
    md5: 'asdfasdfasdf',
    sha1: 'asdfasdfasdf'
}, err => {
    err; // $ExpectType Error | ChecksumError | undefined
});
