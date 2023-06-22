import cssEscape = require('css.escape');

// $ExpectType string
cssEscape('--string');

// @ts-expect-error
cssEscape({});

// $ExpectType string
CSS.escape('');

// @ts-expect-error
CSS.escape({});
