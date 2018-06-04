import once = require('once');

// $ExpectType (() => number) & FnProps<number>
once(() => 3);
// $ExpectType ((t1: string) => number) & FnProps<number>
once((t1: string) => 3);
// $ExpectType ((t1: string, t2: null) => number) & FnProps<number>
once((t1: string, t2: null) => 3);
// $ExpectType ((t1: string, t2: null, t3: string) => number) & FnProps<number>
once((t1: string, t2: null, t3: string) => 3);
// $ExpectType ((t1: string, t2: null, t3: string, t4: null) => number) & FnProps<number>
once((t1: string, t2: null, t3: string, t4: null) => 3);
// $ExpectType ((t1: string, t2: null, t3: string, t4: null, t5: number) => number) & FnProps<number>
once((t1: string, t2: null, t3: string, t4: null, t5: number) => 3);
// $ExpectType ((t1: string, t2: null, t3: string, t4: null, t5: number, t6: null) => number) & FnProps<number>
once((t1: string, t2: null, t3: string, t4: null, t5: number, t6: null) => 3);
// $ExpectType ((t1: string, t2: null, t3: string, t4: null, t5: number, t6: null, t7: string) => number) & FnProps<number>
once((t1: string, t2: null, t3: string, t4: null, t5: number, t6: null, t7: string) => 3);
// $ExpectType ((t1: string, t2: null, t3: string, t4: null, t5: number, t6: null, t7: string, t8: null) => number) & FnProps<number>
once((t1: string, t2: null, t3: string, t4: null, t5: number, t6: null, t7: string, t8: null) => 3);
// $ExpectType ((t1: string, t2: null, t3: string, t4: null, t5: number, t6: null, t7: string, t8: null, t9: string) => number) & FnProps<number>
once((t1: string, t2: null, t3: string, t4: null, t5: number, t6: null, t7: string, t8: null, t9: string) => 3);
// $ExpectType ((t1: string, t2: null, t3: string, t4: null, t5: number, t6: null, t7: string, t8: null, t9: string, t10: null) => number) & FnProps<number>
once((t1: string, t2: null, t3: string, t4: null, t5: number, t6: null, t7: string, t8: null, t9: string, t10: null) => 3);
// $ExpectType ((...args: any[]) => number) & FnProps<number>
once((t1: string, t2: null, t3: string, t4: null, t5: number, t6: null, t7: string, t8: null, t9: string, t10: null, t11: string) => 3);

once(() => 3)(); // $ExpectType number
once(() => ({foo: 1}))(); // $ExpectType { foo: number; }

once(() => 3).called; // $ExpectType boolean
once(() => ({foo: 1})).value; // $ExpectType { foo: number; } | undefined

once.proto();

once.strict(() => 3); // $ExpectType (() => number) & FnProps<number>

Function.prototype.once; // ExpectType () => Function & once.FnProps<any>;
function fn() {
    return 3;
}
fn.once(); // $ExpectType Function & FnProps<any>

function greet(name: string | null, cb: (greeting: string) => void) {
    if (!name) cb('Hello anonymous');
    cb('Hello ' + name);
}
function log(msg: any) {
}
// this will print 'Hello anonymous' but the logical error will be missed
greet(null, once(log));
// once.strict will print 'Hello anonymous' and throw an error when the callback will be called the second time
greet(null, once.strict(log));
