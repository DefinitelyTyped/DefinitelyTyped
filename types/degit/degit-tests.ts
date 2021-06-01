/// <reference types="node" />
import degit = require('degit');
import { DegitError } from 'degit/utils';

degit('user/repo');

const emitter = degit('user/repo', {
    cache: true,
    force: true,
    verbose: true,
    mode: 'git',
});

emitter.on('info', info => {
    console.log(info.message);
});
emitter.on('warn', info => {
    console.log(info.message);
});

emitter.clone('path/to/dest').then(() => {
    console.log('done');
});
emitter.remove('path/to/dir', 'path/to/dest', {
    action: 'remove',
    files: ['README.md'],
});

(async () => {
    try {
        await emitter.clone('path/to/dest');
    } catch (error) {
        if (error instanceof DegitError) {
            error.code; // $ExpectType DegitErrorCode
            error.original; // $ExpectType Error | undefined
            error.ref; // $ExpectTpe string | undefined
            error.url; // $ExpectType string | undefined
        }
    }
})();
