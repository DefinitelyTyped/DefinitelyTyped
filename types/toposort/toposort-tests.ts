import toposort = require('toposort');

const testGraph: ReadonlyArray<[string, string | undefined]> = [
  ['string1', 'string2'],
  ['string2', 'string3'],
  ['string3', 'string1'],
  ['string4', undefined],
];

// $ExpectType ReadonlyArray<string>
toposort(testGraph);
