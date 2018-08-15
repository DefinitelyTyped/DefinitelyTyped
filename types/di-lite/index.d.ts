// Type definitions for di-lite 0.3.3
// Project: https://github.com/NickQiZhu/di.js
// Definitions by: Timothy Morris <https://github.com/dcrusader>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace DiLite {
    interface DiLiteStatic {
        version: string;
        createContext(): CreateContext;
        dependencyExpression(depExp: string): string;
        entry(name: string, ctx: CreateContext): any;
        strategy: StrategyEnum;
        factory: FactoryEnum;
        utils: Utils;
    }

    interface Dictionary<T> {
        [index: string]: T;
    }

    interface CreateContext {
        map: Dictionary<any>;
        entry<T>(name: string): T;
        register<T>(name: string, service: T): Entry;
        has(name: string): boolean;
        get(name: string): any;
        create<T>(name: string, args: any): T;
        initialize(): void;
        clear(): void;
        inject<T>(name: string, o: T, dependencies: string): T;
        ready<T>(o: Function): T;
        ready<T>(o: any): T;
    }

    interface Entry {
        create(newArgs: any): Entry;
        object<T>(o: T): Entry;
        object<T>(): T;
        strategy<T>(s: Function): Entry;
        strategy<T>(): T;
        type<T>(t: T): Entry;
        type<T>(): T;
        dependencies<T>(d: T): Entry;
        dependencies<T>(): T;
        args<T>(a: T): Entry;
        args<T>(): T;
        factory(f: Function): Entry;
        factory<T>(): T;
    }

    interface StrategyEnum {
        proto<TObject, TType>(name: string, object: TObject, type: TType, args: any, ctx: CreateContext, dependencies: any): TObject;
        singleton<TObject, TType>(name: string, object: TObject, type: TType, args: any, ctx?: CreateContext, dependencies?: any): TObject;
    }

    interface FactoryEnum {
        constructor<T>(type: T, args: any): T;
        func<T>(type: T, args: any): T;
    }

    interface Utils {
        invokeStmt(args: any, op: string): string;
    }
}

declare module "di-lite" {
    export = di;
}
declare var di: DiLite.DiLiteStatic;
