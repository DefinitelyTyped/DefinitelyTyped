import onetime = require('onetime');

const foo = onetime(() => 5);
foo(); // $ExpectType number

const foo2 = onetime(() => true, { throw: true });
foo2(); // $ExpectType boolean

onetime((t1: boolean) => 5)(true); // $ExpectType number
onetime((t1: boolean, t2: string) => 5)(true, ''); // $ExpectType number

onetime.callCount((t1: boolean, t2: string) => 5); // $ExpectType number | undefined
