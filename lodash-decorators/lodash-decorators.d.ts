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

    export interface TypedMethodDecorator<TFunction extends Function> {
        (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<TFunction>): TypedPropertyDescriptor<TFunction> | void;
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
        (): TypedMethodDecorator<(<R>() => R)>;
        <T1>(param1?: T1):
            TypedMethodDecorator<(<R>(param1: T1) => R)>;
        <T1, T2>(param1?: T1, param2?: T2):
            TypedMethodDecorator<(<R>(param1: T1, param2: T2) => R)>;
        <T1, T2, T3>(param1?: T1, param2?: T2, param3?: T3):
            TypedMethodDecorator<(<R>(param1: T1, param2: T2, param3: T3) => R)>;
        <T1, T2, T3, T4>(param1?: T1, param2?: T2, param3?: T3, param4?: T4):
            TypedMethodDecorator<(<R>(param1: T1, param2: T2, param3: T3, param4: T4) => R)>;
        <T1, T2, T3, T4, T5>(param1?: T1, param2?: T2, param3?: T3, param4?: T4, param5?: T5):
            TypedMethodDecorator<(<R>(param1: T1, param2: T2, param3: T3, param4: T4, param5: T5) => R)>;
        <T1, T2, T3, T4, T5, T6>(param1?: T1, param2?: T2, param3?: T3, param4?: T4, param5?: T5, param6?: T6):
            TypedMethodDecorator<(<R>(param1: T1, param2: T2, param3: T3, param4: T4, param5: T5, param6: T6) => R)>;
    }
    export interface BindAllDecorator {
        (...methodNames: string[]): ClassDecorator;
    }
    export interface ModArgsDecorator {
        (...transforms: Function[]): MethodDecorator;
    }

    export const debounce: DebounceDecorator & Accessor<DebounceDecorator>;
    export const Debounce: DebounceDecorator & Accessor<DebounceDecorator>;

    export const throttle: ThrottleDecorator & Accessor<ThrottleDecorator>;
    export const Throttle: ThrottleDecorator & Accessor<ThrottleDecorator>;

    export const memoize: MemoizeDecorator & Accessor<MemoizeDecorator>;
    export const Memoize: MemoizeDecorator & Accessor<MemoizeDecorator>;

    export const after: AfterDecorator & Accessor<AfterDecorator>;
    export const After: AfterDecorator & Accessor<AfterDecorator>;

    export const before: BeforeDecorator & Accessor<BeforeDecorator>;
    export const Before: BeforeDecorator & Accessor<BeforeDecorator>;

    export const ary: AryDecorator & Accessor<AryDecorator>;
    export const Ary: AryDecorator & Accessor<AryDecorator>;

    export const curry: CurryDecorator & Accessor<CurryDecorator>;
    export const Curry: CurryDecorator & Accessor<CurryDecorator>;

    export const curryRight: CurryRightDecorator & Accessor<CurryRightDecorator>;
    export const CurryRight: CurryRightDecorator & Accessor<CurryRightDecorator>;

    export const restParam: RestParamDecorator & Accessor<RestParamDecorator>;
    export const RestParam: RestParamDecorator & Accessor<RestParamDecorator>;

    export const partial: PartialDecorator & Accessor<PartialDecorator>;
    export const Partial: PartialDecorator & Accessor<PartialDecorator>;

    export const partialRight: PartialDecorator & Accessor<PartialDecorator>;
    export const PartialRight: PartialDecorator & Accessor<PartialDecorator>;

    export const wrap: WrapDecorator & Accessor<WrapDecorator>;
    export const Wrap: WrapDecorator & Accessor<WrapDecorator>;

    export const compose: ComposeDecorator & Accessor<ComposeDecorator>;
    export const Compose: ComposeDecorator & Accessor<ComposeDecorator>;

    export const flow: ComposeDecorator & Accessor<ComposeDecorator>;
    export const Flow: ComposeDecorator & Accessor<ComposeDecorator>;

    export const flowRight: ComposeDecorator & Accessor<ComposeDecorator>;
    export const FlowRight: ComposeDecorator & Accessor<ComposeDecorator>;

    export const backflow: ComposeDecorator & Accessor<ComposeDecorator>;
    export const Backflow: ComposeDecorator & Accessor<ComposeDecorator>;

    export const delay: DelayDecorator & Accessor<DelayDecorator>;
    export const Delay: DelayDecorator & Accessor<DelayDecorator>;

    export const defer: DeferDecorator & Accessor<DeferDecorator>;
    export const Defer: DeferDecorator & Accessor<DeferDecorator>;

    export const bind: BindDecorator & Accessor<BindDecorator>;
    export const Bind: BindDecorator & Accessor<BindDecorator>;

    export const bindAll: BindAllDecorator;
    export const BindAll: BindAllDecorator;

    export const modArgs: ModArgsDecorator & Accessor<ModArgsDecorator>;
    export const ModArgs: ModArgsDecorator & Accessor<ModArgsDecorator>;

    export const once: MethodDecoratorWithAccessor;
    export const Once: MethodDecoratorWithAccessor;

    export const spread: MethodDecoratorWithAccessor;
    export const Spread: MethodDecoratorWithAccessor;

    export const rearg: MethodDecoratorWithAccessor;
    export const Rearg: MethodDecoratorWithAccessor;

    export const negate: MethodDecoratorWithAccessor;
    export const Negate: MethodDecoratorWithAccessor;

    export const tap: MethodDecoratorWithAccessor;
    export const Tap: MethodDecoratorWithAccessor;
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
    export const Deprecated: DeprecatedDecorator;

    export const writable: (writable?: boolean) => MethodDecorator;
    export const Writable: (writable?: boolean) => MethodDecorator;

    export const configurable: (configurable?: boolean) => MethodDecorator;
    export const Configurable: (configurable?: boolean) => MethodDecorator;

    export const returnsArg: (index?: number) => MethodDecorator;
    export const ReturnsArg: (index?: number) => MethodDecorator;

    export const enumerable: (enumerable?: boolean) => MethodDecorator;
    export const Enumerable: (enumerable?: boolean) => MethodDecorator;

    export const nonenumerable: MethodDecorator;
    export const Nonenumerable: MethodDecorator;

    export const nonconfigurable: MethodDecorator;
    export const Nonconfigurable: MethodDecorator;

    export const readonly: MethodDecorator;
    export const Readonly: MethodDecorator;
}

declare module "lodash-decorators/validate" {
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

    export interface TypedMethodDecorator<TFunction extends Function> {
        (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<TFunction>): TypedPropertyDescriptor<TFunction> | void;
    }

    export interface Predicate<T> {
        (t: T): boolean;
    }
    type Predicates<T> = Predicate<T>|Predicate<T>[];

    export interface ValidateDecorator {
        <T1>(p1: Predicates<T1>):
            TypedMethodDecorator<(<R>(param1: T1) => R)>;
        <T1, T2>(p1: Predicates<T1>, p2?: Predicates<T2>):
            TypedMethodDecorator<(<R>(param1: T1, param2: T2) => R)>;
        <T1, T2, T3>(p1: Predicates<T1>, p2?: Predicates<T2>, p3?: Predicates<T3>):
            TypedMethodDecorator<(<R>(param1: T1, param2: T2, param3: T3) => R)>;
        <T1, T2, T3, T4>(p1: Predicates<T1>, p2?: Predicates<T2>, p3?: Predicates<T3>, p4?: Predicates<T4>):
            TypedMethodDecorator<(<R>(param1: T1, param2: T2, param3: T3, param4: T4) => R)>;
        <T1, T2, T3, T4, T5>(p1: Predicates<T1>, p2?: Predicates<T2>, p3?: Predicates<T3>, p4?: Predicates<T4>, p5?: Predicates<T5>):
            TypedMethodDecorator<(<R>(param1: T1, param2: T2, param3: T3, param4: T4, param5: T5) => R)>;
        <T1, T2, T3, T4, T5, T6>(p1: Predicates<T1>, p2?: Predicates<T2>, p3?: Predicates<T3>, p4?: Predicates<T4>, p5?: Predicates<T5>, p6?: Predicates<T6>):
            TypedMethodDecorator<(<R>(param1: T1, param2: T2, param3: T3, param4: T4, param5: T5, param6: T6) => R)>;
    }

    export interface ValidateReturnDecorator {
        <R>(p1: Predicates<R>): TypedMethodDecorator<((...args: any[]) => R)>;
    }

    export const validate: ValidateDecorator;
    export const Validate: ValidateDecorator;

    export const validateReturn: ValidateReturnDecorator;
    export const ValidateReturn: ValidateReturnDecorator;
}
