import parse = require("path-parse");

const parsed = parse("/foo/bar.img");
const { root, dir, base, ext, name } = parsed;
