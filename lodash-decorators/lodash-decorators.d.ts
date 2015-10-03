// Type definitions for lodash-decorators 1.0.5
// Project: https://github.com/steelsojka/lodash-decorators
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../lodash/lodash.d.ts"/>


declare module "lodash-decorators" {
    // Originally copied from ../node_modules/typescript/lib/lib.es6.d.ts
    export interface ClassDecorator {
        <TFunction extends Function>(target: TFunction): TFunction|void;
    }
    export interface PropertyDecorator {
        (target: Object, propertyKey: string | symbol): void;
    }
    export interface MethodDecorator {
        <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
    }
    export interface ParameterDecorator {
        (target: Object, propertyKey: string | symbol, parameterIndex: number): void;
    }

    export interface MethodDecoratorWithAccessor extends MethodDecorator, Accessor<MethodDecorator> {
    }

    export interface Accessor<T> {
        set: T;
        get: T;
        proto: T;
    }

    export interface DebounceDecorator {
        (wait: number, options?: _.DebounceSettings): MethodDecorator;
    }
    export interface ThrottleDecorator {
        (wait: number, options?: _.ThrottleSettings): MethodDecorator;
    }
    export interface MemoizeDecorator {
        (resolver?: Function): MethodDecorator;
    }
    export interface AfterDecorator {
        (n: number): MethodDecorator;
    }
    export interface BeforeDecorator {
        (n: number): MethodDecorator;
    }
    export interface AryDecorator {
        (n: number): MethodDecorator;
    }
    export interface CurryDecorator {
        (arity?: number): MethodDecorator;
    }
    export interface CurryRightDecorator {
        (arity?: number): MethodDecorator;
    }
    export interface RestParamDecorator {
        (start?: number): MethodDecorator;
    }
    export interface PartialDecorator {
        (func: Function|string, ...args: any[]): MethodDecorator;
    }
    export interface WrapDecorator {
        (wrapper: ((func: Function, ...args: any[]) => any)|string): MethodDecorator;
    }
    export interface ComposeDecorator {
        (...funcs: (Function|string)[]): MethodDecorator;
    }
    export interface DelayDecorator {
        (wait: number, ...args: any[]): MethodDecorator;
    }
    export interface DeferDecorator {
        (...args: any[]): MethodDecorator;
    }
    export interface BindDecorator {
        (...args: any[]): MethodDecorator;
    }
    export interface BindAllDecorator {
        (...methodNames: string[]): ClassDecorator;
    }
    export interface ModArgsDecorator {
        (...transforms: Function[]): MethodDecorator;
    }

    export const debounce: DebounceDecorator & Accessor<DebounceDecorator>;
    export const throttle: ThrottleDecorator & Accessor<ThrottleDecorator>;
    export const memoize: MemoizeDecorator & Accessor<MemoizeDecorator>;
    export const after: AfterDecorator & Accessor<AfterDecorator>;
    export const before: BeforeDecorator & Accessor<BeforeDecorator>;
    export const ary: AryDecorator & Accessor<AryDecorator>;
    export const curry: CurryDecorator & Accessor<CurryDecorator>;
    export const curryRight: CurryRightDecorator & Accessor<CurryRightDecorator>;
    export const restParam: RestParamDecorator & Accessor<RestParamDecorator>;
    export const partial: PartialDecorator & Accessor<PartialDecorator>;
    export const partialRight: PartialDecorator & Accessor<PartialDecorator>;
    export const wrap: WrapDecorator & Accessor<WrapDecorator>;
    export const compose: ComposeDecorator & Accessor<ComposeDecorator>;
    export const flow: ComposeDecorator & Accessor<ComposeDecorator>;
    export const flowRight: ComposeDecorator & Accessor<ComposeDecorator>;
    export const backflow: ComposeDecorator & Accessor<ComposeDecorator>;
    export const delay: DelayDecorator & Accessor<DelayDecorator>;
    export const defer: DeferDecorator & Accessor<DeferDecorator>;
    export const bind: BindDecorator & Accessor<BindDecorator>;
    export const bindAll: BindAllDecorator;
    export const modArgs: ModArgsDecorator & Accessor<ModArgsDecorator>;
    export const once: MethodDecoratorWithAccessor;
    export const spread: MethodDecoratorWithAccessor;
    export const rearg: MethodDecoratorWithAccessor;
    export const negate: MethodDecoratorWithAccessor;
    export const tap: MethodDecoratorWithAccessor;
}

declare module "lodash-decorators/extensions" {
    // Originally copied from ../node_modules/typescript/lib/lib.es6.d.ts
    export interface ClassDecorator {
        <TFunction extends Function>(target: TFunction): TFunction|void;
    }
    export interface PropertyDecorator {
        (target: Object, propertyKey: string | symbol): void;
    }
    export interface MethodDecorator {
        <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
    }
    export interface ParameterDecorator {
        (target: Object, propertyKey: string | symbol, parameterIndex: number): void;
    }

    export interface DeprecatedDecorator extends MethodDecorator, ClassDecorator {
        methodAction(fn: Function & { name: string }): void;
    }

    export const deprecated: DeprecatedDecorator;
    export const writable: (writable?: boolean) => MethodDecorator;
    export const Writable: (writable?: boolean) => MethodDecorator;
    export const configurable: (configurable?: boolean) => MethodDecorator;
    export const returnsArg: (index?: number) => MethodDecorator;
    export const enumerable: (enumerable?: boolean) => MethodDecorator;
    export const nonenumerable: MethodDecorator;
    export const nonconfigurable: MethodDecorator;
    export const readonly: MethodDecorator;
}
