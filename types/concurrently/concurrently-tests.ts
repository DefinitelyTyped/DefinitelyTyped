import concurrently = require('concurrently');
import path = require('path');
import { CommandObj, Options } from 'concurrently';

const _COMMAND_OBJ: CommandObj = {
    command: 'foo',
};

const _OPTIONS: Options = {};

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
        { command: 'nodemon', name: 'server' },
        { command: 'watch', name: 'watch', cwd: path.resolve(__dirname, 'scripts/watchers') },
    ],
    {
        prefix: 'foo',
        killOthers: ['success'],
    },
);

concurrently(['npm:watch-*', { command: 'nodemon', name: 'server' }], {
    cwd: path.resolve(__dirname, 'scripts/watchers'),
    prefix: 'name',
    killOthers: ['failure', 'success'],
    maxProcesses: 2,
    restartTries: 3,
}).then(
    results => {},
    reason => {},
);
