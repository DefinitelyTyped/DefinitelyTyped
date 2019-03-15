import lazyValue = require("lazy-value");

declare function expensiveComputation(): string;
declare function doSomething(x: string): void;

const val = lazyValue(expensiveComputation);

doSomething(val());
