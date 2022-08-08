import phonetic = require('phonetic');

// $ExpectType string
phonetic.generate({ syllables: 2 });

// $ExpectType string
phonetic.generate({ seed: 'dreams' });

// $ExpectType string
phonetic.generate({ compoundSimplicity: 3 });

// $ExpectType string
phonetic.generate({ phoneticSimplicity: 3 });

// $ExpectType string
phonetic.generate({ capFirst: false });

// Errors

// @ts-expect-error
phonetic.generate({ syllables: 'two' });

// @ts-expect-error
phonetic.generate({ seed: 3 });

// @ts-expect-error
phonetic.generate({ compoundSimplicity: 'three' });

// @ts-expect-error
phonetic.generate({ phoneticSimplicity: 'three' });

// @ts-expect-error
phonetic.generate({ capFirst: 1 });
