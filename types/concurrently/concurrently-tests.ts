import concurrently = require('concurrently');

concurrently(['echo foo']); // $ExpectType Promise<null>
// $ExpectType Promise<null>
concurrently(
    [
        'echo foo',
        {
            command: 'echo bar',
            env: {
                a: 'bar',
                b: undefined,
            },
            name: 'bar',
            prefixColor: 'yellow',
        },
    ],
    {
        prefix: 'foo',
        killOthers: ['success'],
    },
);

concurrently(['npm:watch-*', { command: 'nodemon', name: 'server' }], {
    prefix: 'name',
    killOthers: ['failure', 'success'],
    maxProcesses: 2,
    restartTries: 3,
}).then(
    results => {},
    reason => {},
);

concurrently('foo'); // $ExpectError
