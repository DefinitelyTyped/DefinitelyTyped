import concurrently = require('concurrently');
import path = require('path');
import { CommandObj, Options } from 'concurrently';

const _COMMAND_OBJ: CommandObj = {
    command: 'foo',
};

const _OPTIONS: Options = {};

concurrently(['echo foo']); // $ExpectType Promise<ExitInfos[]>
// $ExpectType Promise<ExitInfos[]>
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

// $ExpectType Promise<void>
concurrently(['npm:watch-*', { command: 'nodemon', name: 'server' }], {
    cwd: path.resolve(__dirname, 'scripts/watchers'),
    prefix: 'name',
    killOthers: ['failure', 'success'],
    maxProcesses: 2,
    restartTries: 3,
}).then(
    // $ExpectType (results: ExitInfos[]) => void
    results => {},
    // $ExpectType (reason: any) => void
    reason => {},
);

/**
 * @description
 * example with returned exit information
 */
// $ExpectType Promise<void | ExitInfos[]>
concurrently(['echo foo', 'npm:watch-*', { command: 'nodemon', name: 'server' }], {
    cwd: path.resolve(__dirname, 'scripts/watchers'),
    prefix: 'name',
    killOthers: ['failure', 'success'],
    maxProcesses: 2,
    restartTries: 3,
}).then(
    // $ExpectType (results: ExitInfos[]) => ExitInfos[]
    results => results,
    // $ExpectType (reason: any) => void
    reason => {},
);
