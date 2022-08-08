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
// @ts-expect-error
throttle();
// @ts-expect-error
throttle(func);
// @ts-expect-error
throttle('', func);
// @ts-expect-error
throttle(0);
// @ts-expect-error
throttle(0, 0);
// @ts-expect-error
throttle(0, func, { noTrailing: 0 });
// @ts-expect-error
throttle(0, func, { noLeading: 0 });
// @ts-expect-error
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
// @ts-expect-error
const func2: Func = throttle(1, func);

const func3 = throttle(1, func);
// $ExpectType throttle<Func>
func3;
// Throttled function should accept arguments if `callback` accept them.
// $ExpectType void
func3(100);
// Throttled function should reject arguments if `callback` reject them.
// @ts-expect-error
func3('abc');
// @ts-expect-error
func3();
// Throttled function should have `cancel`.
// $ExpectType void
func3.cancel();

// --------------- debounce ---------------

// Examples of available options.
debounce(42, proc);
debounce(42, proc, {});
debounce(42, proc, { atBegin: true });
debounce(42, proc, { atBegin: false });

// Examples of invalid options.
// @ts-expect-error
debounce();
// @ts-expect-error
debounce(func);
// @ts-expect-error
debounce('', func);
// @ts-expect-error
debounce(10);
// @ts-expect-error
debounce(10, 0);
// @ts-expect-error
debounce(10, func, { atBegin: 0 });
// @ts-expect-error
debounce(10, true, func);

// Debounced functions should be subtype of `typeof callback` if `callback` will not return value.
const proc4: Proc = debounce(1, proc);

// Debounced functions should have `cancel`.
const proc5 = debounce(1, proc);
// $ExpectType void
proc5();
// $ExpectType void
proc5.cancel();

// Debounced functions should not be subtype of `typeof callback` if `callback` will return value.
// @ts-expect-error
const func4: Func = debounce(1, func);

const func5 = debounce(1, func);
// Debounced function should accept arguments if `callback` accept them.
// $ExpectType void
func5(100);
// Debounced function should reject arguments if `callback` reject them.
// @ts-expect-error
func5('abc');
// @ts-expect-error
func5();
// Debounced function should have `cancel`.
// $ExpectType void
func5.cancel();
// `cancel` should accept options with optional `upcomingOnly` boolean flag
// $ExpectType void
func5.cancel({ upcomingOnly: true });
// @ts-expect-error
func5.cancel({ upcomingOnly: 'true' });
// @ts-expect-error
func5.cancel({ upcomingOnly: 0 });
// @ts-expect-error
func5.cancel(true);
