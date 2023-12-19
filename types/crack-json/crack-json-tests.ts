import { extractJson } from "crack-json";

extractJson(""); // $ExpectType any
extractJson(`{"foo":"bar"}`); // $ExpectType any
extractJson(`...{"foo":"bar"}`); // $ExpectType any
// $ExpectType any
extractJson(`{"foo":"bar"}`, {
    filter: (input: string) => {
        return input.includes("foo");
    },
});
// $ExpectType any
extractJson(`{"foo":"bar"}`, {
    parser: (input: string) => {
        return JSON.parse(input);
    },
});
// $ExpectType any
extractJson(`{"foo":"bar"}`, {
    filter: (input: string) => {
        return input.includes("foo");
    },
    parser: (input: string) => {
        return JSON.parse(input);
    },
});
