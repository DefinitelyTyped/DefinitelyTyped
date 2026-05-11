import * as iniparser from "iniparser";

type Result = { section: { param: string } };

declare const file: string;

// $ExpectType void
iniparser.parse<Result>(file, (err, data) => {
    // $ExpectType any
    err;
    // $ExpectType Result
    data;
});

// $ExpectType Result
iniparser.parseSync<Result>(file);
// $ExpectType Result
iniparser.parseString<Result>("");
