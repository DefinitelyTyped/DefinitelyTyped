import depcheck = require('depcheck');

const options: depcheck.Options = {
    withoutDev: false,
    ignoreBinPackage: false,
    ignoreDirs: ['sandbox', 'dist', 'bower_components'],
    ignoreMatches: ['grunt-*'],
    parsers: {
        '*.js': depcheck.parser.es6,
        '*.jsx': depcheck.parser.jsx,
    },
    detectors: [depcheck.detector.requireCallExpression, depcheck.detector.importDeclaration],
    specials: [depcheck.special.eslint, depcheck.special.webpack],
};

// $ExpectType Promise<Results>
depcheck('/', options);

depcheck('/', options, unused => {
    const dependencies: string[] = unused.dependencies;
    const devDependencies: string[] = unused.devDependencies;
    const missing: { [dependencyName: string]: string[] } = unused.missing;
    const using: { [dependencyName: string]: string[] } = unused.using;
    const invalidFiles: { [filePath: string]: any } = unused.invalidFiles;
    const invalidDirs: { [filePath: string]: any } = unused.invalidDirs;
});

const exampleResult: depcheck.Results = {
    dependencies: ['underscore'],
    devDependencies: ['jasmine'],
    missing: {
        lodash: ['/path/to/my/project/file.using.lodash.js'],
    },
    using: {
        react: ['/path/to/my/project/file.using.react.jsx', '/path/to/my/project/another.file.using.react.jsx'],
        lodash: ['/path/to/my/project/file.using.lodash.js'],
    },
    invalidFiles: {
        '/path/to/my/project/file.having.syntax.error.js': 'SyntaxError: <call stack here>',
    },
    invalidDirs: {
        '/path/to/my/project/folder/without/permission': 'Error: EACCES, <call stack here>',
    },
};
