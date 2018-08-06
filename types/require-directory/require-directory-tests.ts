import requireDirectory = require("require-directory");
import { defaults } from "require-directory";
import { CheckPathFn, RequireDirectoryOptions, RequireDirectoryResult } from "require-directory";

const requiredModules1 = requireDirectory(module);
const requiredModules2 = requireDirectory(module, 'subdirectory');
const requiredModules3 = requireDirectory(module, 'subdirectory', {
    exclude: /foo/,
    include: /bar/,
    extensions: ['js', 'json', 'ts'],
    recurse: true,
    rename: (name) => name,
    visit: (obj: { foo: number, bar: number}) => obj.foo + obj.bar
});
const someModule1 = requiredModules3['someModule'];
if (typeof someModule1 === 'number') {
    const number1: number = someModule1;
} else {
    const someSubModule = someModule1['someSubModule'];
    if (typeof someSubModule === 'number') {
        const number2: number = someSubModule;
    }
}

class TestClass {
    baz = 'baz';
    constructor(
        public foo: number,
        public bar: number) { }
}
const requiredModules4 = requireDirectory(module, {
    exclude: /foo/,
    include: /bar/,
    extensions: ['js', 'json', 'ts'],
    recurse: false,
    rename: (name) => name,
    visit: (obj: { foo: number, bar: number }) => new TestClass(obj.foo, obj.bar)
});
const someModule2 = requiredModules4['someModule'];
if (someModule2 instanceof TestClass) {
    const obj1: TestClass = someModule2;
} else {
    const someSubModule = someModule2['someSubModule'];
    if (someSubModule instanceof TestClass) {
        const obj2: TestClass = someSubModule;
    }
}

if (defaults.exclude) {
    if (!(defaults.exclude instanceof Function)) {
        const exclude: RegExp = defaults.exclude;
    }
    if (defaults.exclude instanceof Function) {
        const excludeFn: (path: string) => boolean = defaults.exclude;
    }
}
if (defaults.include) {
    if (!(defaults.include instanceof Function)) {
        const include: RegExp = defaults.include;
    }
    if (defaults.include instanceof Function) {
        const includeFn: (path: string) => boolean = defaults.include;
    }
}
if (defaults.extensions) {
    const extensions: string[] = defaults.extensions;
}
if (defaults.recurse) {
    const recurse: boolean = defaults.recurse;
}
if (defaults.rename) {
    const rename: (path: string) => string = defaults.rename;
}
if (defaults.visit) {
    const visit: (obj: any) => any = defaults.visit;
}
