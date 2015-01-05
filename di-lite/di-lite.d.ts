// Type definitions for di-lite 0.3.3
// Project: https://github.com/NickQiZhu/di.js
// Definitions by: Timothy Morris <https://github.com/dcrusader>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface di {
    version: string;
    createContext(): CreateContext;
    dependencyExpression(depExp: string): string;
    entry(name: string, ctx: CreateContext);
    strategy: Strategy;
    factory: Factory;
    utils: Utils;
}

interface CreateContext {
    map: Object;
    entry(name: string): Object;
    register(name: string, service: any): CreateContext;
    has(name: string): boolean;
    "get"(name: string): any;
    create(name: string, args: any)
    initialize(): void;
    clear(): void;
    inject(name: string, o: Object, dependencies: string): Object;
    ready(o: Function): Object;
    ready(o: Object): Object;
}

interface Entry {
    create(newArgs: any): Entry;
    object(): Object;
    object(o: Object): Entry;
    strategy(s: Function): Entry;
    type(t: any): Entry;
    dependencies(d: string): Entry;
    args(a: any): Entry;
    factory(f: Function): Entry;
}

interface Strategy {
    proto(name: string, object: Object, type: any, args: any, ctx: CreateContext, dependencies: string): Object;
    singleton(name: string, object: Object, type: any, args: any, ctx?: CreateContext, dependencies?: string): Object;
}

interface Factory {
    "constructor"(type: any, args: any): Object;
    func(type: any, args: any): any;
}

interface Utils {
    invokeStmt(args: any, op: string): string;
}

declare var di: di;
declare module "di" {
    export = di;
}
