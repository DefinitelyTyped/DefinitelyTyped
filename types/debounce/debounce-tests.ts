import debounce = require("debounce");

const doThings = () => 1;

debounce(doThings)();

debounce(doThings, 1000)();

debounce((a: string) => doThings, 1000)("foo");

// Immediate true should return the value
const imm1: number = (debounce((x: number) => x * 2, 100, true))(2);

const clearable = debounce(doThings);
clearable.clear();

// Intentionally asserts that the member variable has all the same benefits as the direct export.
// Eventually, if debounce stop supporting the CommonJS-only module calling (`require("debounce")(...)`),
// we can remove this and change the top import&require to `import { debounce } from "debounce";`.
const assertsSame: typeof debounce = debounce.debounce;
