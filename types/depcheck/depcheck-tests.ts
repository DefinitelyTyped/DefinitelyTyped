import * as depcheck from 'depcheck';

const options: depcheck.Options = {
    withoutDev: false,
    ignoreBinPackage: false,
    ignoreDirs: ['sandbox', 'dist', 'bower_components'],
    ignoreMatches: ['grunt-*'],
    parsers: {
        '*.js': depcheck.parser.es6,
        '*.jsx': depcheck.parser.jsx,
    },
    detectors: [
        depcheck.detector.requireCallExpression,
        depcheck.detector.importDeclaration,
    ],
    specials: [depcheck.special.eslint, depcheck.special.webpack],
};

// $ExpectType Promise<Results>
depcheck('/', options);

depcheck('/', options, unused => {
    const dependencies: string[] = unused.dependencies;
    const devDependencies: string[] = unused.devDependencies;
    const missing: string[] = unused.missing;
    const using: string[] = unused.using;
    const invalidFiles: string[] = unused.invalidFiles;
    const invalidDirs: string[] = unused.invalidDirs;
});
