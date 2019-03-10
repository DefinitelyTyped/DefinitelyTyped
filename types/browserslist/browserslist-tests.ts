import browserslist from "browserslist";

browserslist(); // $ExpectType string[]
browserslist(""); // $ExpectType string[]
browserslist([""]); // $ExpectType string[]

const opts: browserslist.Options[] = [
    {},
    { path: "" },
    { env: "" },
    { stats: { "": { "": 0 } } },
    { config: "" },
    { ignoreUnknownVersions: false },
    { dangerousExtend: false }
];
for (const opt of opts) {
    browserslist("", opt); // $ExpectType string[]
    browserslist([""], opt); // $ExpectType string[]
}

browserslist.coverage([""]); // $ExpectType number
browserslist.coverage([""], { "": { "": 0 } }); // $ExpectType number
