import toposort = require('toposort');

const testGraph: Array<[string, string | undefined]> = [
    ['string1', 'string2'],
    ['string2', 'string3'],
    ['string3', 'string1'],
    ['string4', undefined],
];

// Note that the manually specified type parameter is required for typescript
// 2.3 compat

// $ExpectType string[]
toposort<string>(testGraph); // tslint:disable-line: use-default-type-parameter
