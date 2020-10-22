import {
    isTextSync,
    isText,
    isBinarySync,
    isBinary,
    getEncodingSync,
    getEncoding,
} from 'istextorbinary';

isTextSync('foo.txt'); // $ExpectType boolean
isTextSync('foo.txt', new Buffer(1)); // $ExpectType boolean
isTextSync(undefined, new Buffer(1)); // $ExpectType boolean
isTextSync(); // $ExpectError
isTextSync(undefined); // $ExpectError
isTextSync(undefined, undefined); // $ExpectError

isText('foo.txt', undefined, (err, result) => {
    err; // $ExpectType null
    result; // $ExpectType boolean
});
isText('foo.txt', new Buffer(1), (err, result) => {
    err; // $ExpectType null
    result; // $ExpectType boolean
});
isText(undefined, new Buffer(1), (err, result) => {
    err; // $ExpectType null
    result; // $ExpectType boolean
});
isText(undefined, undefined, (err, result) => {}); // $ExpectError

isBinarySync('foo.txt'); // $ExpectType boolean
isBinarySync('foo.txt', new Buffer(1)); // $ExpectType boolean
isBinarySync(undefined, new Buffer(1)); // $ExpectType boolean
isBinarySync(); // $ExpectError
isBinarySync(undefined); // $ExpectError
isBinarySync(undefined, undefined); // $ExpectError

isBinary('foo.txt', undefined, (err, result) => {
    err; // $ExpectType null
    result; // $ExpectType boolean
});
isBinary('foo.txt', new Buffer(1), (err, result) => {
    err; // $ExpectType null
    result; // $ExpectType boolean
});
isBinary(undefined, new Buffer(1), (err, result) => {
    err; // $ExpectType null
    result; // $ExpectType boolean
});
isBinary(undefined, undefined, (err, result) => {}); // $ExpectError

getEncodingSync(new Buffer(1)); // $ExpectType "utf8" | "binary"
getEncodingSync(new Buffer(1), { chunkBegin: 0 }); // $ExpectType "utf8" | "binary"
getEncodingSync(new Buffer(1), { chunkLength: 10 }); // $ExpectType "utf8" | "binary"

getEncoding(new Buffer(1), undefined, (err, result) => {
    err; // $ExpectType null
    result; // $ExpectType "utf8" | "binary"
});
getEncoding(new Buffer(1), { chunkBegin: 0 }, (err, result) => {
    err; // $ExpectType null
    result; // $ExpectType "utf8" | "binary"
});
getEncoding(new Buffer(1), { chunkLength: 10 }, (err, result) => {
    err; // $ExpectType null
    result; // $ExpectType "utf8" | "binary"
});
