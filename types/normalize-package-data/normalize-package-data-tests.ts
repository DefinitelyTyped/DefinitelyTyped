import normalize = require('normalize-package-data');

normalize({name: 'foo'}, (msg: string) => {}, true);
normalize({name: 'foo'}, (msg: string) => {});
normalize({name: 'foo'}, true);
normalize({name: 'foo'});

const empty: normalize.Package = {
    name: '',
    version: '',
    readme: 'ERROR: No README data found!',
    _id: '@'
};

const cliEngineUtil: normalize.Package = {
    name: '@cli-engine/util',
    description: 'scripts to use with cli-engine codebases',
    version: '1.0.13',
    author: { name: 'Jeff Dickey @jdxcode' },
    bin: { 'cli-engine-util': './bin/run' },
    'cli-engine': { bin: 'cli-engine-util', commands: './lib/commands' },
    dependencies:
    { '@cli-engine/command': '^12.1.0',
        '@cli-engine/config': '^5.0.11',
        '@cli-engine/engine': '^6.1.29',
        '@heroku-cli/color': '^1.1.1',
        '@types/handlebars': '^4.0.36',
        '@types/pkg-dir': '^2.0.0',
        'cli-ux': '^2.0.21',
        'cross-spawn': '^5.1.0',
        del: '^3.0.0',
        execa: '^0.8.0',
        'fs-extra': '^5.0.0',
        globby: '^7.1.1',
        handlebars: '^4.0.11',
        'pkg-dir': '^2.0.0',
        'read-pkg-up': '^3.0.0',
        'ts-lodash': '^4.0.9',
        tslib: '^1.8.1' },
    devDependencies:
    { '@heroku-cli/tslint': '^1.1.2',
        '@types/ansi-styles': '^2.0.30',
        '@types/del': '^3.0.0',
        '@types/execa': '^0.8.1',
        '@types/fs-extra': '^5.0.0',
        '@types/jest': '^22.0.1',
        '@types/lodash': '^4.14.92',
        '@types/node': '8.5.7',
        '@types/read-pkg-up': '^2.0.0',
        '@types/supports-color': '^3.1.0',
        husky: '^0.14.3',
        jest: '^22.0.4',
        prettier: '^1.9.2',
        'ts-jest': '^22.0.1',
        tslint: '^5.8.0',
        typescript: '^2.6.2' },
    engines: { node: '>=6.0.0' },
    files: [ 'bin', 'lib' ],
    license: 'MIT',
    repository:
    { type: 'git',
        url: 'git+https://github.com/jdxcode/cli-engine-util.git' },
    scripts:
    { precommit: './bin/run',
        prepare: './bin/run',
        test: './bin/run' },
    bugs: { url: 'https://github.com/jdxcode/cli-engine-util/issues' },
    readme: 'ERROR: No README data found!',
    homepage: 'https://github.com/jdxcode/cli-engine-util#readme',
    _id: '@cli-engine/util@1.0.13',
};
