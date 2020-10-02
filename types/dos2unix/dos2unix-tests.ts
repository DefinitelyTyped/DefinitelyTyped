import { dos2unix as D2UConverter, Options } from 'dos2unix';

const defaultOptions: Options = {
    glob: {
        cwd: '.',
    },
    maxConcurrency: 50,
};

const d2u = new D2UConverter(defaultOptions);

d2u.on('error', err => err)
    .on('end', stats => stats)
    .on('processing.end', data => data);

d2u.process(['docs/README.txt']);
d2u.process(['docs/README.txt', 'examples/HelloWorld.js']);

const globOptions: Options = {
    glob: {
        cwd: 'docs',
    },
};

d2u.process(['*.txt'], globOptions);
