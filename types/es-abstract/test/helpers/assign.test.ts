import assign = require('es-abstract/helpers/assign');

const a1 = assign({ foo: 1 }, { bar: 2 }); // $ExpectType { foo: number; } & { bar: number; }
assign(a1, { baz: 3 }); // $ExpectType { foo: number; } & { bar: number; } & { baz: number; }
