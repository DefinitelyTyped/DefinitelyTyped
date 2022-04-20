import { throttle, debounce } from 'throttle-debounce';

type Proc = () => void;
const proc: Proc = () => {};

type Func = (x: number) => string;
const func: Func = (x: number) => '';

// --------------- throttle ---------------

// Examples of available options.
throttle(1, proc);
throttle(2, proc, {});
throttle(3, proc, { noTrailing: true });
throttle(4, proc, { noTrailing: false });
throttle(5, proc, { noLeading: true });
throttle(6, proc, { noLeading: false });
throttle(7, proc, { debounceMode: true });
throttle(8, proc, { debounceMode: false });
throttle(9, proc, { noTrailing: false, noLeading: false, debounceMode: false });

// Examples of invalid options.
// $ExpectError
throttle();
// $ExpectError
throttle(func);
// $ExpectError
throttle('', func);
// $ExpectError
throttle(0);
// $ExpectError
throttle(0, 0);
// $ExpectError
throttle(0, func, { noTrailing: 0 });
// $ExpectError
throttle(0, func, { noLeading: 0 });
// $ExpectError
throttle(0, func, { debounceMode: 0 });

// Throttled functions should be subtype of `typeof callback` if `callback` will not return value.
const proc2: Proc = throttle(1, proc);

// Throttled functions should have `cancel`.
const proc3 = throttle(1, proc);
// $ExpectType throttle<Proc>
proc3;
// $ExpectType void
proc3();
// $ExpectType void
proc3.cancel();

// Throttled functions should not be subtype of `typeof callback` if `callback` will return value.
// $ExpectError
const func2: Func = throttle(1, func);

const func3 = throttle(1, func);
// $ExpectType throttle<Func>
func3;
// Throttled function should accept arguments if `callback` accept them.
// $ExpectType void
func3(100);
// Throttled function should reject arguments if `callback` reject them.
// $ExpectError
func3('abc');
// $ExpectError
func3();
// Throttled function should have `cancel`.
// $ExpectType void
func3.cancel();

// --------------- debounce ---------------

const debounceWithoutCancel1: Proc = debounce(42, true, proc);
const debounceWithoutCancel2: Proc = debounce(42, proc);
debounceWithoutCancel1();
// $ExpectError
debounceWithoutCancel1.cancel();
const debounceWithCancel1: debounce<Proc> = debounce(42, true, proc);
const debounceWithCancel2: debounce<Proc> = debounce(42, proc);
debounceWithCancel1();
debounceWithCancel1.cancel();
