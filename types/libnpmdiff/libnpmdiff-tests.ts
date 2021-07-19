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
