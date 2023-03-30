import findImports = require('find-imports');

// $ExpectType Record<string, string[]>
findImports('glob');

// $ExpectType Record<string, string[]>
findImports(['glob1', 'glob2', 'glob3']);

// $ExpectType Record<string, string[]>
findImports(['glob1', 'glob2', 'glob3'], {});

// $ExpectType Record<string, string[]>
findImports('glob', {
    flatten: true,
    packageImports: false,
    absoluteImports: undefined,
});

// @ts-expect-error
findImports();

findImports('glob', {
    packageImports: true,
    // @ts-expect-error
    absoluteImports: null,
    // @ts-expect-error
    relativeImports: '',
});

findImports(['glob1', 'glob2', 'glob3'], {
    relativeImports: false,
    // @ts-expect-error
    invalidOption: false,
});
