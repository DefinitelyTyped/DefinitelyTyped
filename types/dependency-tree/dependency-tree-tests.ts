import dependencyTree = require('dependency-tree');

const tree = dependencyTree({
    filename: 'path/to/a/file',
    directory: 'path/to/all/files',
    requireConfig: 'path/to/requirejs/config',
    webpackConfig: 'path/to/webpack/config',
    tsConfig: 'path/to/typescript/config',
    nodeModulesConfig: {
        entry: 'module',
    },
    filter: path => path.indexOf('node_modules') === -1,
    nonExistent: [],
});

const list = dependencyTree.toList({
    filename: 'path/to/a/file',
    directory: 'path/to/all/files',
});

dependencyTree({
    filename: 'path/to/a/file',
    directory: 'path/to/all/files',
    requireConfig: 'path/to/requirejs/config',
    webpackConfig: 'path/to/webpack/config',
    tsConfig: {
        compilerOptions: {
            allowJs: true,
            allowSyntheticDefaultImports: true,
            strict: true,
            esModuleInterop: true,
            importHelpers: true,
            module: 'CommonJS',
            target: 'ES2020',
        },
        extends: '',
        exclude: [''],
        include: [''],
        files: [''],
        compileOnSave: true,
        references: [{ path: '' }],
    },
    nodeModulesConfig: {
        entry: 'module',
    },
    filter: path => path.indexOf('node_modules') === -1,
    nonExistent: [],
});
