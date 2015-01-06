// Type definitions for di-lite 0.3.3
// Project: https://github.com/NickQiZhu/di.js
// Definitions by: Timothy Morris <https://github.com/dcrusader>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface DiLite {
    version: string;
    createContext(): DiCreateContext;
    dependencyExpression(depExp: string): string;
    entry(name: string, ctx: DiCreateContext): DiEntry;
    strategy: DiStrategy;
    factory: DiFactory;
    utils: DiUtils;
}

interface DiCreateContext {
    map: Object;
    entry(name: string): Object;
    register(name: string, type?: any, args?: any): DiEntry;
    has(name: string): boolean;
    "get"(name: string): any;
    create(name: string, args: any): any;
    initialize(): void;
    clear(): void;
    inject(name: string, o: Object, dependencies: string): Object;
    ready(o: Function): Object;
    ready(o: Object): Object;
}

interface DiEntry {
    create(newArgs: any): DiEntry;
    object(): Object;
    object(o: Object): DiEntry;
    strategy(s: Function): DiEntry;
    type(t: any): DiEntry;
    dependencies(d: string): DiEntry;
    args(a: any): DiEntry;
    factory(f: Function): DiEntry;
}

interface DiStrategy {
    proto(name: string, object: Object, type: any, args: any, ctx: DiCreateContext, dependencies: string): Object;
    singleton(name: string, object: Object, type: any, args: any, ctx?: DiCreateContext, dependencies?: string): Object;
}

interface DiFactory {
    "constructor"(type: any, args: any): Object;
    func(type: any, args: any): any;
}

interface DiUtils {
    invokeStmt(args: any, op: string): string;
}

declare module "di-lite" {
    export = di;
}
declare var di: DiLite;
