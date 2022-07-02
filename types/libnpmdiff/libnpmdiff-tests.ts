import libnpmdiff = require('libnpmdiff');

// $ExpectType Promise<string>
const result = libnpmdiff(['a@1', '2']);

// $ExpectType Promise<string>
const result2 = libnpmdiff(['a@1', '2'], {
    // Test all options from https://github.com/npm/libnpmdiff#api
    color: true,
    tagVersionPrefix: 'version',
    diffUnified: 10,
    diffFiles: ['a', 'b'],
    diffIgnoreAllSpace: true,
    diffNameOnly: true,
    diffNoPrefix: true,
    diffSrcPrefix: 'x/',
    diffDstPrefix: 'y/',
    diffText: true,
});

// $ExpectType Promise<string>
const result3 = libnpmdiff(['a@1', '2'], {
    // Test some of the pacote options
    cache: './cache',
    registry: 'example',
    where: 'example',
});

// Test incorrect type of specs

// @ts-expect-error
const result4 = libnpmdiff('a@1...b@2');

// Test incorrect type of Options

// @ts-expect-error
libnpmdiff(['a@1', 'b@2'], 'string');
// @ts-expect-error
libnpmdiff(['a@1', 'b@2'], 12345567);

// Testing that unknown properties fails will unfortunately not be possible
// since the npm-registry-fetch options includes `[key: string]: any`.
//
// libnpmdiff(
//     ['a@1', 'b@2'],
//     // @ts-expect-error
//     { unknownproperty: 'hello' },
// );

// Test incorrect types of properties of the options Object.

libnpmdiff(
    ['a@1', 'b@2'],
    // @ts-expect-error
    { diffUnified: 'string' },
);
libnpmdiff(
    ['a@1', 'b@2'],
    // @ts-expect-error
    { tagVersionPrefix: true },
);
