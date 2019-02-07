import toposort = require('toposort');

const testGraph: ReadonlyArray<[string, string]> = [
    ["string1", "string2"],
    ["string2", "string3"],
    ["string3", "string1"]
];

// $ExpectType ReadonlyArray<string>
toposort(testGraph);
