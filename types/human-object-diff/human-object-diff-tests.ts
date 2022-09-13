import { Options } from "human-object-diff";
import HumanDiff = require("human-object-diff");

const lhs = { foo: "bar" };
const rhs = { foo: "baz" };
const options: Options = {
    dateFormat: "MM/dd/yyyy hh:mm a",
    dontHumanizePropertyNames: true,
    ignoreArrays: true,
    objectName: "obj",
    prefilter: (path, key) => path[4] === "bar" && key === "foo",
    sensitivePaths: [],
    templates: {
        N: '"FIELD", with a value of "NEWVALUE" (at DOTPATH) was added',
        D: '"FIELD", with a value of "OLDVALUE" (at DOTPATH) was removed',
        E: '"FIELD", with a value of "OLDVALUE" (at DOTPATH) was changed to "NEWVALUE"',
        I: 'Array "FIELD" (at DOTPATH), had a value of "NEWVALUE" inserted at index INDEX',
        R: 'Array "FIELD" (at DOTPATH), had a value of "OLDVALUE" removed at index INDEX',
        AE: 'Array "FIELD" (at DOTPATH), had a value of "OLDVALUE" changed to "NEWVALUE" at index INDEX',
        NS: '"FIELD" (at DOTPATH) was added',
        DS: '"FIELD" (at DOTPATH) was removed',
        ES: '"FIELD" (at DOTPATH) was changed',
        IS: 'Array "FIELD" (at DOTPATH), had a value inserted at index INDEX',
        RS: 'Array "FIELD" (at DOTPATH), had a value removed at index INDEX',
        AES: 'Array "FIELD" (at DOTPATH), had a value changed at index INDEX',
    },
};

const { diff } = new HumanDiff(options);
diff(lhs, rhs); // $ExpectType string[]

const diffEngine = new HumanDiff();
diffEngine.diff(lhs, rhs); // $ExpectType string[]
diffEngine.config; // $Expect Options
diffEngine.sentenceDiffs; // $ExpectType string[]
diffEngine.sentences; // $ExpectType string[]
diffEngine.templates; // $ExpectType Record<TemplateType, string>
if (diffEngine.config.prefilter) {
    const { prefilter } = diffEngine.config;
    prefilter; // $ExpectType string[] | PathPredicate
}
