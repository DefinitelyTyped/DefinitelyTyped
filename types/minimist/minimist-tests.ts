import minimist = require("minimist");
import { Opts, ParsedArgs } from "minimist";

interface CustomArgs {
    foo: boolean;
}

interface CustomArgs2 extends ParsedArgs {
    foo: boolean;
}

const opts: Opts = {};
opts.string = "str";
opts.string = ["strArr"];
opts.boolean = true;
opts.boolean = "str";
opts.boolean = ["strArr"];
opts.alias = {
    foo: ["strArr"],
};
opts.alias = {
    foo: "str",
};
opts.default = {
    foo: "str",
};
opts.default = {
    foo: 0,
};
opts.unknown = (arg: string) => {
    if (/xyz/.test(arg)) {
        return true;
    }

    return false;
};
opts.stopEarly = true;
opts["--"] = true;

minimist(); // $ExpectType ParsedArgs
minimist(["--a.b", "22"]); // $ExpectType ParsedArgs
minimist(["--a.b", "22"], { default: { "a.b": 11 }, alias: { "a.b": "aa.bb" } }); // $ExpectType ParsedArgs
minimist<CustomArgs>(); // $ExpectType CustomArgs & ParsedArgs
minimist<CustomArgs>(["--a.b", "22"]); // $ExpectType CustomArgs & ParsedArgs
minimist<CustomArgs>(["--a.b", "22"], { default: { "a.b": 11 }, alias: { "a.b": "aa.bb" } }); // $ExpectType CustomArgs & ParsedArgs
minimist<CustomArgs2>(); // $ExpectType CustomArgs2 & ParsedArgs
minimist<CustomArgs2>(["--a.b", "22"]); // $ExpectType CustomArgs2 & ParsedArgs
minimist<CustomArgs2>(["--a.b", "22"], { default: { "a.b": 11 }, alias: { "a.b": "aa.bb" } }); // $ExpectType CustomArgs2 & ParsedArgs

const obj = minimist<CustomArgs>(["--a.b", "22"], opts);
obj._.length; // $ExpectType number
obj["foo"]; // $ExpectType boolean
