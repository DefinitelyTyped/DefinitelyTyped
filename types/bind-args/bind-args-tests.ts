import bindArgs = require('bind-args');

// $ExpectType number
bindArgs(() => 3)();

// @ts-expect-error
bindArgs(() => 3, 'arg')();

// $ExpectType boolean
bindArgs((a: string, b: number) => false, '')(2);

// @ts-expect-error
bindArgs((a: string, b: number) => false, true);

// @ts-expect-error
bindArgs((a: string, b: number) => false, '')({});
