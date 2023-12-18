import crackJson = require("crack-json");

crackJson.extractJson(""); // $ExpectType any
crackJson.extractJson(`{"foo":"bar"}`); // $ExpectType any
crackJson.extractJson(`...{"foo":"bar"}`); // $ExpectType any
// $ExpectType any
crackJson.extractJson(`{"foo":"bar"}`, {
    filter: (input: string) => {
        return input.includes("foo");
    },
});
// $ExpectType any
crackJson.extractJson(`{"foo":"bar"}`, {
    parser: (input: string) => {
        return JSON.parse(input);
    },
});
// $ExpectType any
crackJson.extractJson(`{"foo":"bar"}`, {
    filter: (input: string) => {
        return input.includes("foo");
    },
    parser: (input: string) => {
        return JSON.parse(input);
    },
});
