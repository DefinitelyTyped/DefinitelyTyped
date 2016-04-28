
import debounce from "debounce";

const doThings = () => 1;

debounce(function(){ doThings(); })();

debounce(function(){ doThings(); }, 1000)();

debounce(function(a: string){ doThings(); }, 1000)("foo");

// Immediate true should return the value
const imm1: number = (debounce((x: number) => x * 2, 100, true))(2);
