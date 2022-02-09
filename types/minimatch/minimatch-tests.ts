import mm = require("minimatch");
let bool: boolean;
const pattern = "**/*.ts";
const options = {
    debug: true
};
const m = new mm.Minimatch(pattern, options);
const regxp = m.makeRe();

const files: ReadonlyArray<string> = ["test.ts"];
mm.match(files, pattern, options);

files.filter(mm.filter(pattern, options));

const str = "hello";
bool = mm(str, pattern, options);
bool = mm(str, pattern);
