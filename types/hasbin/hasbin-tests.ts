import hasBin = require('hasbin');

// $ExpectType void
hasBin('ls', (result: boolean) => { });
// $ExpectType void
hasBin.all(['ls', 'cd'], (result: boolean) => { });
// $ExpectType void
hasBin.some(['ls', 'cd'], (result: boolean) => { });
// $ExpectType void
hasBin.first(['ls', 'cd'], (result: string | boolean) => {});

// $ExpectType boolean
hasBin.all.sync(['ls', 'cd']);
// $ExpectType boolean
hasBin.some.sync(['ls', 'cd']);

// $ExpectType string | false
hasBin.first.sync(['ls', 'cd']);
