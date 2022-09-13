import { Loggly, flushLogsAndExit } from 'winston-loggly-bulk';

const loggly = new Loggly({
    auth: {
        username: 'user',
        password: 'guest',
    },
    bufferOptions: {
        size: 500,
        retriesInMilliseconds: 30000,
    },
    isBulk: false,
    json: true,
    networkErrorsOnConsole: false,
    proxy: 'www.example.com',
    stripColors: true,
    subdomain: 'my_subdomain',
    tags: ['NodeJS'],
    timestamp: true,
    token: 'mysupersecrettoken',
});

loggly; // $ExpectType Loggly

flushLogsAndExit(); // $ExpectType void
