import rafSchd = require('raf-schd');

const expensiveSideEffect = (a: number, b: number): void => {};

// $ExpectType Schedule<(a: number, b: number) => void>
const scheduledFunction = rafSchd(expensiveSideEffect);

// $ExpectType void
scheduledFunction(1, 1);

// $ExpectType void
scheduledFunction.cancel();
