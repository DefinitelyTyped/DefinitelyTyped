import sade = require('sade');

const prog = sade('my-cli');

const argv = ['sirv', 'build'];

prog.version('1.0.5')
    .option('--global, -g', 'An example global flag')
    .option('-c, --config', 'Provide path to custom config', 'foo.config.js');

prog.command('build <src> <dest>')
    .describe('Build the source directory. Expects an `index.js` entry file.')
    .option('-o, --output', 'Change the name of the output file', 'bundle.js')
    .example('build src build --global --config my-conf.js')
    .example('build app public -o main.js')
    .action((src: any, dest: any, opts: any) => {});

prog.help('build');

prog.parse(argv);
