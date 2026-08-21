import rafSchd = require("raf-schd");

function expensiveSideEffect(a: number, b: number): void;
function expensiveSideEffect(a: string, b: string): void;
function expensiveSideEffect(a: number | string, b: number | string): void {}

// $ExpectType ScheduledFn<{ (a: number, b: number): void; (a: string, b: string): void; }>
const scheduledFunction = rafSchd(expensiveSideEffect);

// $ExpectType void
scheduledFunction(1, 1);

// $ExpectType void
scheduledFunction.cancel();
