import type { FilterCondition, Filters } from "frappe";

interface TestDoc {
    field1: string;
    num: number;
    date: Date;
    flag: boolean;
}

// Valid FilterCondition assignments
let cond1: FilterCondition = "text";
cond1 = ["=", "text"];
cond1 = [">", 10];
cond1 = ["in", [1, 2, 3]];
cond1 = ["between", new Date(0), new Date()];

// @ts-expect-error: invalid array operator value
cond1 = ["in", 5];
// @ts-expect-error: wrong operator
cond1 = ["unknown", "value"];
// @ts-expect-error: missing range value
cond1 = ["between", 1];

// Valid Filters map
const filters: Filters<keyof TestDoc> = {
    field1: "hello",
    num: [">=", 100],
    flag: ["not in", [true, false]],
    date: ["between", new Date(0), new Date(1000)],
};

const badFilters2: Filters<keyof TestDoc> = {
    // @ts-expect-error: wrong operator
    num: ["unknown", 1],
};
const badFilters3: Filters<keyof TestDoc> = {
    // @ts-expect-error: wrong operand types
    flag: ["between", true],
};
const badFilters4: Filters<keyof TestDoc> = {
    // @ts-expect-error: extra field not in TestDoc
    extra: "value",
};
