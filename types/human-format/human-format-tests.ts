import humanFormat = require("human-format");

// $ExpectType string
humanFormat(1337);

// $ExpectType string
humanFormat(1337, {
    maxDecimals: 1,
});

// $ExpectType string
humanFormat(13337, {
    maxDecimals: 'auto',
});

// $ExpectType string
humanFormat(1337, {
    decimals: 4,
});

// $ExpectType string
humanFormat.bytes(65536);

// $ExpectType string
humanFormat(1337, {
    separator: ' - ',
});

const timeScale = new humanFormat.Scale({
    seconds: 1,
    minutes: 60,
    hours: 3600,
    days: 86400,
    months: 2592000,
});
// $ExpectType string
humanFormat(26729235, { scale: timeScale });
// $ExpectType ScaleOptions
timeScale.findPrefix(100);
// $ExpectType ParseResult
timeScale.parse('10 months');

// $ExpectType string
humanFormat.raw(100, { prefix: 'k' });

// $ExpectType string
humanFormat(100, { unit: 'm', prefix: 'k' });

// $ExpectType number
humanFormat.parse('1.34 kiB', { scale: 'binary' });

// $ExpectType ParseResult
humanFormat.parse.raw('1.34 kB');
