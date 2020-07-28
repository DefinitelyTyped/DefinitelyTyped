import { Tail } from 'tail';

const tail = new Tail('test.txt');

tail.on('line', data => {
    console.log(data);
});

tail.on('error', error => {
    console.log('ERROR: ', error);
});

tail.unwatch();

tail.watch();

// With options object
const tail2 = new Tail('test2.txt', {
    separator: /[\r]{0,1}\n/,
    fromBeginning: false,
    fsWatchOptions: {},
    follow: true,
    logger: console,
    useWatchFile: false,
    encoding: 'utf-8',
    flushAtEOF: false,
});
