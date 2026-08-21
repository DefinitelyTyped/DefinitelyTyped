import fs = require("fs");
import gitignore = require("parse-gitignore");
import { format, parse, stringify } from "parse-gitignore";

gitignore(fs.readFileSync("foo/bar/.gitignore")); // $ExpectType string[]
const res = parse(fs.readFileSync("foo/bar/.gitignore")); // $ExpectType State
stringify(res.sections); // $ExpectType string
format(res.sections[0]); // $ExpectType string

gitignore.parse(fs.readFileSync("foo/bar/.gitignore")); // $ExpectType State
gitignore.stringify(res.sections); // $ExpectType string
gitignore.format(res.sections[0]); // $ExpectType string
