import { clearInterval, clearTimeout, setInterval, setTimeout } from "k6/experimental/timers";

// setTimeout

// @ts-expect-error
setTimeout();

// @ts-expect-error
setTimeout(5);

// @ts-expect-error
setTimeout("functionRef", 5);

// @ts-expect-error
setTimeout("functionRef", 5, "arg");

// clearTimeout

// @ts-expect-error
clearTimeout();

// setInterval

// @ts-expect-error
setInterval();

// @ts-expect-error
setInterval(5);

// @ts-expect-error
setInterval("functionRef", 5);

// @ts-expect-error
setInterval("functionRef", 5, "arg");

const intervalId = setInterval(() => {}, 5);

// clearInterval

clearInterval(intervalId);

clearInterval(5);

// @ts-expect-error
clearInterval();
