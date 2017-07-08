// Type definitions for lodash-decorators 3.0
// Project: https://github.com/steelsojka/lodash-decorators
// Definitions by: Alan Agius <https://github.com/alan-agius4>, Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="lodash" />

declare module "lodash-decorators" {
    // Originally copied from ../node_modules/typescript/lib/lib.es6.d.ts

    type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;

    type PropertyDecorator = (target: object, propertyKey: string | symbol) => void;

    type MethodDecorator = <T>(target: object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;

    type ParameterDecorator = (target: object, propertyKey: string | symbol, parameterIndex: number) => void;

    type TypedMethodDecorator<TFunction extends Function> = (target: object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<TFunction>) => TypedPropertyDescriptor<TFunction> | void;

    interface MethodDecoratorWithAccessor extends MethodDecorator, Accessor<MethodDecorator> { }

    interface Accessor<T> {
        set: T;
        get: T;
        proto: T;
    }

    type DebounceDecorator = (wait: number, options?: _.DebounceSettings) => MethodDecorator;

    type ThrottleDecorator = (wait: number, options?: _.ThrottleSettings) => MethodDecorator;

    type MemoizeDecorator = (resolver?: Function) => MethodDecorator;

    type AfterDecorator = (n: number) => MethodDecorator;

    type BeforeDecorator = (n: number) => MethodDecorator;

    type AryDecorator = (n: number) => MethodDecorator;

    type CurryDecorator = (arity?: number) => MethodDecorator;

    type CurryRightDecorator = (arity?: number) => MethodDecorator;

    type RestDecorator = (start?: number) => MethodDecorator;

    type OverArgsDecorator = (func: Function, ...transforms: Function[]) => MethodDecorator;

    type PartialDecorator = (func: Function | string, ...args: any[]) => MethodDecorator;

    type WrapDecorator = (wrapper: ((func: Function, ...args: any[]) => any) | string) => MethodDecorator;

    type ComposeDecorator = (...funcs: Array<(Function | string)>) => MethodDecorator;

    type DelayDecorator = (wait: number, ...args: any[]) => MethodDecorator;

    type DeferDecorator = (...args: any[]) => MethodDecorator;

    interface BindDecorator {
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

    type BindAllDecorator = (...methodNames: string[]) => ClassDecorator;

    const debounce: DebounceDecorator & Accessor<DebounceDecorator>;
    const Debounce: DebounceDecorator & Accessor<DebounceDecorator>;

    const throttle: ThrottleDecorator & Accessor<ThrottleDecorator>;
    const Throttle: ThrottleDecorator & Accessor<ThrottleDecorator>;

    const memoize: MemoizeDecorator & Accessor<MemoizeDecorator>;
    const Memoize: MemoizeDecorator & Accessor<MemoizeDecorator>;

    const after: AfterDecorator & Accessor<AfterDecorator>;
    const After: AfterDecorator & Accessor<AfterDecorator>;

    const before: BeforeDecorator & Accessor<BeforeDecorator>;
    const Before: BeforeDecorator & Accessor<BeforeDecorator>;

    const ary: AryDecorator & Accessor<AryDecorator>;
    const Ary: AryDecorator & Accessor<AryDecorator>;

    const curry: CurryDecorator & Accessor<CurryDecorator>;
    const Curry: CurryDecorator & Accessor<CurryDecorator>;

    const curryRight: CurryRightDecorator & Accessor<CurryRightDecorator>;
    const CurryRight: CurryRightDecorator & Accessor<CurryRightDecorator>;

    const overArgs: OverArgsDecorator & Accessor<OverArgsDecorator>;
    const OverArgs: OverArgsDecorator & Accessor<OverArgsDecorator>;

    const rest: RestDecorator & Accessor<RestDecorator>;
    const Rest: RestDecorator & Accessor<RestDecorator>;

    const partial: PartialDecorator & Accessor<PartialDecorator>;
    const Partial: PartialDecorator & Accessor<PartialDecorator>;

    const partialRight: PartialDecorator & Accessor<PartialDecorator>;
    const PartialRight: PartialDecorator & Accessor<PartialDecorator>;

    const wrap: WrapDecorator & Accessor<WrapDecorator>;
    const Wrap: WrapDecorator & Accessor<WrapDecorator>;

    const flow: ComposeDecorator & Accessor<ComposeDecorator>;
    const Flow: ComposeDecorator & Accessor<ComposeDecorator>;

    const flowRight: ComposeDecorator & Accessor<ComposeDecorator>;
    const FlowRight: ComposeDecorator & Accessor<ComposeDecorator>;

    const delay: DelayDecorator & Accessor<DelayDecorator>;
    const Delay: DelayDecorator & Accessor<DelayDecorator>;

    const defer: DeferDecorator & Accessor<DeferDecorator>;
    const Defer: DeferDecorator & Accessor<DeferDecorator>;

    const bind: BindDecorator & Accessor<BindDecorator>;
    const Bind: BindDecorator & Accessor<BindDecorator>;

    const bindAll: BindAllDecorator;
    const BindAll: BindAllDecorator;

    const once: MethodDecoratorWithAccessor;
    const Once: MethodDecoratorWithAccessor;

    const attempt: MethodDecoratorWithAccessor;
    const Attempt: MethodDecoratorWithAccessor;

    const spread: MethodDecoratorWithAccessor;
    const Spread: MethodDecoratorWithAccessor;

    const rearg: MethodDecoratorWithAccessor;
    const Rearg: MethodDecoratorWithAccessor;

    const negate: MethodDecoratorWithAccessor;
    const Negate: MethodDecoratorWithAccessor;

    const tap: MethodDecoratorWithAccessor;
    const Tap: MethodDecoratorWithAccessor;

    const flip: MethodDecoratorWithAccessor;
    const Flip: MethodDecoratorWithAccessor;
}

declare module "lodash-decorators/extensions" {
    // Originally copied from ../node_modules/typescript/lib/lib.es6.d.ts
    type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;

    type PropertyDecorator = (target: object, propertyKey: string | symbol) => void;

    type MethodDecorator = <T>(target: object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;

    type ParameterDecorator = (target: object, propertyKey: string | symbol, parameterIndex: number) => void;

    interface DeprecatedDecorator extends MethodDecorator, ClassDecorator {
        methodAction(fn: Function & { name: string }): void;
    }

    const deprecated: DeprecatedDecorator;
    const Deprecated: DeprecatedDecorator;

    function writable(writable?: boolean): MethodDecorator;
    function Writable(writable?: boolean): MethodDecorator;

    function configurable(configurable?: boolean): MethodDecorator;
    function Configurable(configurable?: boolean): MethodDecorator;

    function returnsArg(index?: number): MethodDecorator;
    function ReturnsArg(index?: number): MethodDecorator;

    function enumerable(enumerable?: boolean): MethodDecorator;
    function Enumerable(enumerable?: boolean): MethodDecorator;

    const nonenumerable: MethodDecorator;
    const Nonenumerable: MethodDecorator;

    const nonconfigurable: MethodDecorator;
    const Nonconfigurable: MethodDecorator;

    const readonly: MethodDecorator;
    const Readonly: MethodDecorator;
}

declare module "lodash-decorators/validate" {
    // Originally copied from ../node_modules/typescript/lib/lib.es6.d.ts
    type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;

    type PropertyDecorator = (target: object, propertyKey: string | symbol) => void;

    type MethodDecorator = <T>(target: object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;

    type ParameterDecorator = (target: object, propertyKey: string | symbol, parameterIndex: number) => void;

    type TypedMethodDecorator<TFunction extends Function> = (target: object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<TFunction>) => TypedPropertyDescriptor<TFunction> | void;

    type Predicate<T> = (t: T) => boolean;

    type Predicates<T> = Predicate<T> | Array<Predicate<T>>;

    interface ValidateDecorator {
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

    type ValidateReturnDecorator = <R>(p1: Predicates<R>) => TypedMethodDecorator<((...args: any[]) => R)>;

    const validate: ValidateDecorator;
    const Validate: ValidateDecorator;

    const validateReturn: ValidateReturnDecorator;
    const ValidateReturn: ValidateReturnDecorator;
}
