import cabinet = require('filing-cabinet');

const result = cabinet({
    partial: 'somePartialPath',
    directory: 'path/to/all/files',
    filename: 'path/to/parent/file',
    ast: {},
    config: 'path/to/requirejs/config',
    webpackConfig: 'path/to/webpack/config',
    nodeModulesConfig: {
        entry: 'module',
    },
    tsConfig: 'path/to/typescript/config',
});
result; // $ExpectType string

cabinet.register('.scss', (partial, filename, directory, config) => {
    return `file.scss`;
});
