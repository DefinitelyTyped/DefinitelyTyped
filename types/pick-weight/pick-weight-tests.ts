import * as weight from "pick-weight";

const x = weight(["a", "b", "c"], [1, 2, 3]);

// Can only be applied since inferred type is string
x === "string";
