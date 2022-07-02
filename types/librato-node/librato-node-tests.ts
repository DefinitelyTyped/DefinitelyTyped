import * as librato from 'librato-node';

let str = '';
const num = 0;
const error  = new Error();
const optionalErrorCallback = (err?: Error | null) => {
    throw err;
};
const errorCallback = (err: Error) => {
    throw err;
};

librato.configure({
    simulate: true,
});
librato.configure({
    email: 'foo@bar.com',
    token: 'foobar',
});
librato.configure({
    email: 'foo@bar.com',
    token: 'foobar',
    prefix: 'foo.',
    source: 'bar',
    requestOptions: {
        method: 'POST',
        uri: 'https://foo.com',
    },
    period: 5000,
    simulate: false,
});

librato.increment(str);
librato.increment(str, num);
librato.increment(str, num, {
    source: 'foo',
});
librato.measure(str, num);
librato.measure(str, num, {
    source: 'foo',
});
librato.timing(str, () => {});
librato.timing(str, () => {}, optionalErrorCallback);
librato.timing(str, (done: () => void) => {
    done();
});
librato.timing(str, (done: () => void) => {
    done();
}, {
    source: str,
}, optionalErrorCallback);
librato.timing(str, (done: () => void) => {
    done();
}, optionalErrorCallback);
librato.timing(str, (done: (err: Error) => void) => {
    done(error);
});
librato.timing(str, (done: (err: Error) => void) => {
    done(error);
}, {
    source: str,
}, optionalErrorCallback);
librato.timing(str, (done: (err: Error) => void) => {
    done(error);
}, optionalErrorCallback);
str = librato.timing('key', (done: (err: Error, result: string) => string) => {
    return done(error, 'result string');
});
str = librato.timing('key', (done: (err: Error, result: string) => string) => {
    return done(error, 'result string');
}, {
    source: 'foobar source',
}, optionalErrorCallback);
str = librato.timing('key', (done: (err: Error, result: string) => string) => {
    return done(error, 'result string');
}, optionalErrorCallback);
librato.start();
librato.stop();
librato.stop(optionalErrorCallback);
librato.flush();
librato.flush(optionalErrorCallback);
librato.middleware();
librato.middleware({
    requestCountKey: str,
    responseTimeKey: str,
    statusCodeKey: str,
});

librato.on('error', errorCallback);
librato.on('SIGINT', () => {});
