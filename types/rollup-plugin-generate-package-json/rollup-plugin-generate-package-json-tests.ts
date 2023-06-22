import generatePackageJson = require('rollup-plugin-generate-package-json');

generatePackageJson();

generatePackageJson({});

generatePackageJson({
    // @ts-expect-error
    baseContents: () => 0,
});

generatePackageJson({
    // @ts-expect-error
    baseContents: 0,
});

generatePackageJson({
    additionalDependencies: ['vue', 'react'],
    inputFolder: '.',
    outputFolder: 'dist',
    baseContents: {
        name: 'test',
    },
});

generatePackageJson({
    additionalDependencies: {
        react: '^18.0.0',
    },
});

generatePackageJson({
    baseContents: pkg => ({
        name: pkg.name,
    }),
});
