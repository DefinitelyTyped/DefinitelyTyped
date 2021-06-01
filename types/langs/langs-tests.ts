import * as langs from 'langs';

// $ExpectType Langs
langs;

// $ExpectType Language[]
langs.all();

// $ExpectType boolean
langs.has('2B', 'he');

// $ExpectType string[]
langs.codes('1');

// $ExpectType string[]
langs.codes(2);

// $ExpectType string[]
langs.codes('2B');

// $ExpectType string[]
langs.codes('2T');

// $ExpectType string[]
langs.codes('3');

// $ExpectType string[]
langs.names(true);

// $ExpectType Language | undefined
langs.where('1', 'he');

// $ExpectError
langs.codes(5);

// $ExpectError
langs.codes('foo');
