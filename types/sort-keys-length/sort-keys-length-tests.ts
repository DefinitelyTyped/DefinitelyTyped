import { asc, desc } from "sort-keys-length";

// Test ascending sort
const ascResult = asc({ ab: "x", a: "y", abc: "z" });

// Test descending sort
const descResult = desc({ ab: "x", a: "y", abc: "z" });

// Test with deep option
const deepAsc = asc({ ab: "x", a: "y" }, { deep: true });
const deepDesc = desc({ ab: "x", a: "y" }, { deep: false });

// Test with nested objects
const nested = asc({
    longKey: {
        short: 1,
        longerKey: 2,
    },
    a: "value",
}, { deep: true });

// Type preservation
interface MyObject {
    foo: string;
    barbaz: number;
}

const typed: MyObject = { foo: "hello", barbaz: 42 };
const sortedTyped: MyObject = asc(typed);
const sortedTypedDesc: MyObject = desc(typed);
