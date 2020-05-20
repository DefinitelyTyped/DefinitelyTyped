import isTrademarked = require('is-trademarked');

// $ExpectType Promise<false | TrademarkedData[]>
isTrademarked('unicorns');
// $ExpectType Promise<false | TrademarkedData[]>
isTrademarked('unicorns', { token: 'foo' });
