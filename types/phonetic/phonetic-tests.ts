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

// $ExpectError
phonetic.generate({ syllables: 'two' });

// $ExpectError
phonetic.generate({ seed: 3 });

// $ExpectError
phonetic.generate({ compoundSimplicity: 'three' });

// $ExpectError
phonetic.generate({ phoneticSimplicity: 'three' });

// $ExpectError
phonetic.generate({ capFirst: 1 });
