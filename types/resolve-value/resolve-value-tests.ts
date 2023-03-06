import resolveValue = require('resolve-value');

// $ExpectType Promise<boolean>
resolveValue(true);

// $ExpectType Promise<string>
resolveValue(Promise.resolve('Hi'));

// $ExpectType Promise<{ prop1: boolean; prop2: number; }>
resolveValue({
  prop1: true,
  prop2: Promise.resolve(2348)
});

// $ExpectType Promise<{ prop: string; }[]>
resolveValue([{ prop: Promise.resolve('Hi') }]);

// $ExpectType Promise<{ promise: boolean; }>
resolveValue(Promise.resolve({ promise: Promise.resolve(false) }));
