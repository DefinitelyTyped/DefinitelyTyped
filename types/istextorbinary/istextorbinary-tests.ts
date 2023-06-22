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
// @ts-expect-error
isTextSync();
// @ts-expect-error
isTextSync(undefined);
// @ts-expect-error
isTextSync(undefined, undefined);

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
// @ts-expect-error
isText(undefined, undefined, (err, result) => {});

isBinarySync('foo.txt'); // $ExpectType boolean
isBinarySync('foo.txt', new Buffer(1)); // $ExpectType boolean
isBinarySync(undefined, new Buffer(1)); // $ExpectType boolean
// @ts-expect-error
isBinarySync();
// @ts-expect-error
isBinarySync(undefined);
// @ts-expect-error
isBinarySync(undefined, undefined);

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
// @ts-expect-error
isBinary(undefined, undefined, (err, result) => {});

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
