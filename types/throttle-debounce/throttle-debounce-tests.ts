import { throttle, debounce } from "throttle-debounce";

type Func = () => void;

const func: Func = () => {};

const throttleWithoutCancel1: Func = throttle(42, true, func, true);
const throttleWithoutCancel2: Func = throttle(42, true, func);
const throttleWithoutCancel3: Func = throttle(42, func, true);
const throttleWithoutCancel4: Func = throttle(42, func);

throttleWithoutCancel1();
// $ExpectError
throttleWithoutCancel1.cancel();
const throttleWithCancel1: throttle<Func> = throttle(42, true, func, true);
const throttleWithCancel2: throttle<Func> = throttle(42, true, func);
const throttleWithCancel3: throttle<Func> = throttle(42, func, true);
const throttleWithCancel4: throttle<Func> = throttle(42, func);
throttleWithCancel1();
throttleWithCancel1.cancel();

const debounceWithoutCancel1: Func = debounce(42, true, func);
const debounceWithoutCancel2: Func = debounce(42, func);
debounceWithoutCancel1();
// $ExpectError
debounceWithoutCancel1.cancel();
const debounceWithCancel1: debounce<Func> = debounce(42, true, func);
const debounceWithCancel2: debounce<Func> = debounce(42, func);
debounceWithCancel1();
debounceWithCancel1.cancel();
