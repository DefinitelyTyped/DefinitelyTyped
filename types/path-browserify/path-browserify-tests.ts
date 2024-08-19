import path = require("path-browserify");

const basename: string = path.basename(".js", ".js");
const dirname: string = path.dirname("/a/b/");
const extname: string = path.extname(".\\");
const isAbsolute: boolean = path.isAbsolute("/");
const join: string = path.join(".", "x/b", "..", "/b/c.js");
const parse: path.PathObject = path.parse("C:\\path\\dir\\index.html");
const relative: string = path.relative("c:/blah\\blah", "d:/games");
const resolve: string = path.resolve("c:/blah\\blah", "d:/games", "c:../a");

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
type ThisParameterTypeVoid<T> = ThisParameterType<T> extends void ? T : never;

function ensureThisParameterIsVoid<T>(fn: ThisParameterTypeVoid<T>): ThisParameterTypeVoid<T> {
    return fn;
}

ensureThisParameterIsVoid(path.basename);
ensureThisParameterIsVoid(path.dirname);
ensureThisParameterIsVoid(path.extname);
ensureThisParameterIsVoid(path.format);
ensureThisParameterIsVoid(path.isAbsolute);
ensureThisParameterIsVoid(path.join);
ensureThisParameterIsVoid(path.normalize);
ensureThisParameterIsVoid(path.parse);
ensureThisParameterIsVoid(path.relative);
ensureThisParameterIsVoid(path.resolve);
