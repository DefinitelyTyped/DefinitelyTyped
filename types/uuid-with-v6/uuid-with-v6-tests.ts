import * as uuid from "uuid-with-v6";

// Re-exports
typeof uuid.v1() === "string";
typeof uuid.v4() === "string";
typeof uuid.v5("test", "test-namespace") === "string";
typeof uuid.v5([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]) === "string";

// New exports
typeof uuid.v6() === "string";
typeof uuid.v6setup()() === "string";
typeof uuid.v6setup({ disableRandom: true })() === "string";
typeof uuid.v6setup({ disableRandom: false })() === "string";
