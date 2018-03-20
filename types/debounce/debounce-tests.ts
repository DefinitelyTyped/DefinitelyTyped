import debounce = require("debounce");

const doThings = () => 1;

debounce(doThings)();

debounce(doThings, 1000)();

debounce((a: string) => doThings, 1000)("foo");

// Immediate true should return the value
const imm1: number = (debounce((x: number) => x * 2, 100, true))(2);

const clearable = debounce(doThings);
clearable.clear();
