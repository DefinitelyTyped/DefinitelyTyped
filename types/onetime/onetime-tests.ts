import onetime = require('onetime');

const foo = onetime(() => 5);
foo(); // $ExpectType number

const foo2 = onetime(() => true, {throw: true});
foo2(); // $ExpectType boolean

onetime((t1: boolean) => 5)(true); // $ExpectType number
onetime((t1: boolean, t2: string) => 5)(true, ''); // $ExpectType number
onetime((t1: boolean, t2: string, t3: number) => 5)(true, '', 5); // $ExpectType number
onetime((t1: boolean, t2: string, t3: number, t4: undefined) => 5)(true, '', 5, undefined); // $ExpectType number
onetime((t1: boolean, t2: string, t3: number, t4: undefined, t5: string) => 5)(true, '', 5, undefined, ''); // $ExpectType number
onetime((t1: boolean, t2: string, t3: number, t4: undefined, t5: string, t6: number) => 5)(true, '', 5, undefined, '', 6); // $ExpectType number
onetime((t1: boolean, t2: string, t3: number, t4: undefined, t5: string, t6: number, t7: boolean) => 5)(true, '', 5, undefined, '', 6, false); // $ExpectType number

const t8 = onetime(
    (t1: boolean, t2: string, t3: number, t4: undefined, t5: string, t6: number, t7: boolean, t8: string) => 5);
t8(true, '', 5, undefined, '', 6, false, ''); // $ExpectType number

const t9 = onetime(
    (t1: boolean, t2: string, t3: number, t4: undefined, t5: string, t6: number, t7: boolean, t8: string, t9: number) => 5);
t9(true, '', 5, undefined, '', 6, false, '', 1); // $ExpectType number

const t10 = onetime(
    (t1: boolean, t2: string, t3: number, t4: undefined, t5: string, t6: number, t7: boolean, t8: string, t9: number, t10: boolean) => 5);
t10(true, '', 5, undefined, '', 6, false, '', 1, true); // $ExpectType number

const t11 = onetime(
    (t1: boolean, t2: string, t3: number, t4: undefined, t5: string, t6: number, t7: boolean, t8: string, t9: number, t10: boolean, t11: string) => 5);
t11(true, '', 5, undefined, '', 6, false, '', 1, true, 5); // $ExpectType number
