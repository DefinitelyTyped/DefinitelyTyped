import bindArgs = require('bind-args');

// $ExpectType number
bindArgs(() => 3)();

// $ExpectError
bindArgs(() => 3, 'arg')();

// $ExpectType boolean
bindArgs((a: string, b: number) => false, '')(2);

// $ExpectError
bindArgs((a: string, b: number) => false, true);

// $ExpectError
bindArgs((a: string, b: number) => false, '')({});
