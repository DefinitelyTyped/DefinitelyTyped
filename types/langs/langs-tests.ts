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

// $ExpectType string[]
langs.names();

// $ExpectType Language | undefined
langs.where('1', 'he');

// @ts-expect-error
langs.codes(5);

// @ts-expect-error
langs.codes('foo');
