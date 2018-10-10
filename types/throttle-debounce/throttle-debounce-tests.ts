import throttleDebounce = require('throttle-debounce');

const { throttle, debounce } = throttleDebounce;

type Func = () => void;

const func: Func = () => {};

const throttle1: Func = throttle(42, true, func, true);
const throttle2: Func = throttle(42, true, func);
const throttle3: Func = throttle(42, func, true);
const throttle4: Func = throttle(42, func);

const debounce1: Func = debounce(42, true, func);
const debounce2: Func = debounce(42, func);
