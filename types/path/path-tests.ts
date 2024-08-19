import path, {
    type PathObject,
    resolve,
    normalize,
    isAbsolute,
    join,
    relative,
    dirname,
    basename,
    extname,
    format,
    parse,
    sep,
    delimiter,
    win32,
    posix
} from "path";

path.resolve === resolve;
path.normalize === normalize;
path.isAbsolute === isAbsolute;
path.join === join;
path.relative === relative;
path.dirname === dirname;
path.basename === basename;
path.extname === extname;
path.format === format;
path.parse === parse;
path.sep === sep;
path.delimiter === delimiter;
path.win32 === win32;
path.posix === posix;

win32.resolve !== posix.resolve;
win32.normalize !== posix.normalize;
win32.isAbsolute !== posix.isAbsolute;
win32.join !== posix.join;
win32.relative !== posix.relative;
win32.dirname !== posix.dirname;
win32.basename !== posix.basename;
win32.extname !== posix.extname;
win32.format !== posix.format;
win32.parse !== posix.parse;
win32.sep !== posix.sep;
win32.delimiter !== posix.delimiter;
win32.win32 === win32;
win32.posix === posix;
posix.win32 === win32;
posix.posix === posix;

// $ExpectType string
resolve("a/b/c", "d/e/f", "g/h/i");

// $ExpectType string
normalize("a/b/c");

// $ExpectType boolean
isAbsolute("/");

// $ExpectType string
join("a/b/c", "d/e/f", "g/h/i");

// $ExpectType string
relative("a/b/c", "d/e/f");

// $ExpectType string
dirname("a/b/c");

// $ExpectType string
basename("a/b/c");

// $ExpectType string
extname("a/b/c");

// $ExpectType string
format({
    base: "base",
    dir: "dir",
    ext: "ext",
    name: "name",
    root: "root"
});

// $ExpectType PathObject
parse("a/b/c");

// $ExpectType string
const sep2 = sep;

// $ExpectType string
const delimiter2 = delimiter;
