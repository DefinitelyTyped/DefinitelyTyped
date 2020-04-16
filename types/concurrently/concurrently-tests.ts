import concurrently = require('concurrently');

concurrently(['echo foo']); // $ExpectType Promise<null>
// $ExpectType Promise<null>
concurrently(
    [
        'echo foo',
        {
            command: 'echo bar',
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
    restartTries: 3,
}).then(
    results => {},
    reason => {},
);

concurrently('foo'); // $ExpectError
