import _ = require("../index");
// tslint:disable-next-line:strict-export-declare-modifiers
type GlobalFunction = Function;
declare module "../index" {
    type FunctionBase = GlobalFunction;
    interface LoDashStatic {
        castArray<T>(value?: Many<T>): T[];
    }
    interface Collection<T> {
        castArray(): Collection<T>;
    }
    interface String {
        castArray(): Collection<string>;
    }
    interface Object<T> {
        castArray(): Collection<T>;
    }
    interface Function<T extends (...args: any) => any> {
        castArray(): Collection<T>;
    }
    interface Primitive<T> {
        castArray(): Collection<T>;
    }
    interface CollectionChain<T> {
        castArray(): CollectionChain<T>;
    }
    interface StringChain {
        castArray(): CollectionChain<string>;
    }
    interface ObjectChain<T> {
        castArray(): CollectionChain<T>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        castArray(): CollectionChain<T>;
    }
    interface PrimitiveChain<T> {
        castArray(): CollectionChain<T>;
    }

    interface LoDashStatic {
        clone<T>(value: T): T;
    }

    interface LoDashImplicitWrapper<TValue> {
        clone(): TValue;
        cloneDeep(): TValue;
        cloneDeepWith(customizer: CloneDeepWithCustomizer<TValue>): any;
        cloneDeepWith(): TValue;
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<TValue, TResult>): TResult;
        cloneWith<TResult>(customizer: CloneWithCustomizer<TValue, TResult | undefined>): TResult | TValue;
        cloneWith(): TValue;
    }
    interface LoDashExplicitWrapper<TValue> {
        clone(): this;
        cloneDeep(): this;
        cloneDeepWith(customizer: CloneDeepWithCustomizer<TValue>): LoDashExplicitWrapper<any>;
        cloneDeepWith(): this;
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<TValue, TResult>): ExpChain<TResult>;
        cloneWith<TResult>(customizer: CloneWithCustomizer<TValue, TResult | undefined>): ExpChain<TResult | TValue>;
        cloneWith(): this;
    }

    interface LoDashStatic {
        cloneDeep<T>(value: T): T;
    }
    type CloneDeepWithCustomizer<TObject> = (value: any, key: number | string | undefined, object: TObject | undefined, stack: any) => any;
    interface LoDashStatic {
        cloneDeepWith<T>(value: T, customizer: CloneDeepWithCustomizer<T>): any;
        cloneDeepWith<T>(value: T): T;
    }
    type CloneWithCustomizer<TValue, TResult> = (value: TValue, key: number | string | undefined, object: any, stack: any) => TResult;
    interface LoDashStatic {
        cloneWith<T, TResult extends object | string | number | boolean | null>(value: T, customizer: CloneWithCustomizer<T, TResult>): TResult;
        cloneWith<T, TResult>(value: T, customizer: CloneWithCustomizer<T, TResult | undefined>): TResult | T;
        cloneWith<T>(value: T): T;
    }
    interface LoDashStatic {
        conformsTo<T>(object: T, source: ConformsPredicateObject<T>): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        conformsTo(source: ConformsPredicateObject<TValue>): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        conformsTo(source: ConformsPredicateObject<TValue>): PrimitiveChain<boolean>;
    }
    type CondPair<T, R> = [(val: T) => boolean, (val: T) => R];
    interface LoDashStatic {
        eq(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        eq(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        eq(other: any): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        gt(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        gt(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        gt(other: any): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        gte(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        gte(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        gte(other: any): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isArguments(value?: any): value is IArguments;
    }
    interface LoDashImplicitWrapper<TValue> {
        isArguments(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isArguments(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isArray(value?: any): value is any[];
        isArray<T>(value?: any): value is any[];
    }
    interface LoDashImplicitWrapper<TValue> {
        isArray(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isArray(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isArrayBuffer(value?: any): value is ArrayBuffer;
    }
    interface LoDashImplicitWrapper<TValue> {
        isArrayBuffer(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isArrayBuffer(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isArrayLike<T extends { __lodashAnyHack: any }>(t: T): boolean;
        isArrayLike(value: ((...args: any[]) => any) | null | undefined): value is never;
        isArrayLike(value: any): value is { length: number };
    }
    interface LoDashImplicitWrapper<TValue> {
        isArrayLike(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isArrayLike(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isArrayLikeObject<T extends { __lodashAnyHack: any }>(value: T): boolean;
        // tslint:disable-next-line:ban-types (type guard doesn't seem to work correctly without the Function type)
        isArrayLikeObject(value: ((...args: any[]) => any) | FunctionBase | string | boolean | number | null | undefined): value is never;
        isArrayLikeObject(value: any): value is object & { length: number };
    }
    interface LoDashImplicitWrapper<TValue> {
        isArrayLikeObject(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isArrayLikeObject(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isBoolean(value?: any): value is boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isBoolean(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isBoolean(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isBuffer(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isBuffer(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isBuffer(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isDate(value?: any): value is Date;
    }
    interface LoDashImplicitWrapper<TValue> {
        isDate(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isDate(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isElement(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isElement(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isElement(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isEmpty(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isEmpty(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isEmpty(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isEqual(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isEqual(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isEqual(other: any): PrimitiveChain<boolean>;
    }

    type IsEqualCustomizer = (value: any, other: any, indexOrKey: PropertyName | undefined, parent: any, otherParent: any, stack: any) => boolean | undefined;
    interface LoDashStatic {
        isEqualWith(value: any, other: any, customizer?: IsEqualCustomizer): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isEqualWith(other: any, customizer?: IsEqualCustomizer): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isEqualWith(other: any, customizer?: IsEqualCustomizer): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isError(value: any): value is Error;
    }
    interface LoDashImplicitWrapper<TValue> {
        isError(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isError(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isFinite(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isFinite(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isFinite(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isFunction(value: any): value is (...args: any[]) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        isFunction(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isFunction(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isInteger(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isInteger(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isInteger(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isLength(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isLength(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isLength(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isMap(value?: any): value is Map<any, any>;
    }
    interface LoDashImplicitWrapper<TValue> {
        isMap(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isMap(): PrimitiveChain<boolean>;
    }

    type isMatchCustomizer = (value: any, other: any, indexOrKey?: PropertyName) => boolean;
    interface LoDashStatic {
        isMatch(object: object, source: object): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isMatch(source: object): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isMatch(source: object): PrimitiveChain<boolean>;
    }

    type isMatchWithCustomizer = (value: any, other: any, indexOrKey: PropertyName, object: object, source: object) => boolean;
    interface LoDashStatic {
        isMatchWith(object: object, source: object, customizer: isMatchWithCustomizer): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isMatchWith(source: object, customizer: isMatchWithCustomizer): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isMatchWith(source: object, customizer: isMatchWithCustomizer): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isNaN(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isNaN(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isNaN(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isNative(value: any): value is (...args: any[]) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        isNative(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isNative(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isNil(value: any): value is null | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        isNil(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isNil(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isNull(value: any): value is null;
    }
    interface LoDashImplicitWrapper<TValue> {
        isNull(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isNull(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isNumber(value?: any): value is number;
    }
    interface LoDashImplicitWrapper<TValue> {
        isNumber(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isNumber(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isObject(value?: any): value is object;
    }
    interface LoDashImplicitWrapper<TValue> {
        isObject(): this is LoDashImplicitWrapper<object>;
    }
    interface LoDashExplicitWrapper<TValue> {
        isObject(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isObjectLike(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isObjectLike(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isObjectLike(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isPlainObject(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isPlainObject(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isPlainObject(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isRegExp(value?: any): value is RegExp;
    }
    interface LoDashImplicitWrapper<TValue> {
        isRegExp(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isRegExp(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isSafeInteger(value: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isSafeInteger(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isSafeInteger(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isSet(value?: any): value is Set<any>;
    }
    interface LoDashImplicitWrapper<TValue> {
        isSet(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isSet(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isString(value?: any): value is string;
    }
    interface LoDashImplicitWrapper<TValue> {
        isString(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isString(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isSymbol(value: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isSymbol(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isSymbol(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isTypedArray(value: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isTypedArray(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isTypedArray(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isUndefined(value: any): value is undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        isUndefined(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isUndefined(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isWeakMap(value?: any): value is WeakMap<object, any>;
    }
    interface LoDashImplicitWrapper<TValue> {
        isWeakMap(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isWeakMap(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        isWeakSet(value?: any): value is WeakSet<object>;
    }
    interface LoDashImplicitWrapper<TValue> {
        isWeakSet(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isWeakSet(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        lt(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        lt(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        lt(other: any): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        lte(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        lte(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        lte(other: any): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        toArray<T>(value:  Dictionary<T> | NumericDictionary<T> | null | undefined): T[];
        toArray<T>(value: T): Array<T[keyof T]>;
        toArray(): any[];
    }
    interface String {
        toArray(): Collection<string>;
    }
    interface Collection<T> {
        toArray(): Collection<T>;
    }
    interface Object<T> {
        toArray(): Collection<T[keyof T]>;
    }
    interface StringChain {
        toArray(): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        toArray(): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        toArray(): CollectionChain<T[keyof T]>;
    }

    interface LoDashStatic {
        toFinite(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        toFinite(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        toFinite(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        toInteger(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        toInteger(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        toInteger(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        toLength(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        toLength(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        toLength(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        toNumber(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        toNumber(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        toNumber(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        toPlainObject(value?: any): any;
    }
    interface LoDashImplicitWrapper<TValue> {
        toPlainObject(): Object<any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        toPlainObject(): ObjectChain<any>;
    }

    interface LoDashStatic {
        toSafeInteger(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        toSafeInteger(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        toSafeInteger(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        toString(value: any): string;
    }
}
