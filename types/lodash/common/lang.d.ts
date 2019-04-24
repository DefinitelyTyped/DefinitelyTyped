import _ = require("../index");
declare module "../index" {
    interface Stat {
        castArray<T>(value?: Many<T>): T[];
    }
    interface Imp<TValue> {
        castArray<T>(this: Imp<Many<T>>): Imp<T[]>;
    }
    interface Exp<TValue> {
        castArray<T>(this: Exp<Many<T>>): Exp<T[]>;
    }

    interface Stat {
        clone<T>(value: T): T;
    }

    interface ImpF<T> extends Imp<T> {
        clone(): T;
        cloneDeep(): T;
        cloneDeepWith(customizer: CloneDeepWithCustomizer<T>): any;
        cloneDeepWith(): T;
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<T, TResult>): TResult;
        cloneWith<TResult>(customizer: CloneWithCustomizer<T, TResult | undefined>): TResult | T;
        cloneWith(): T;
    }
    interface ImpS extends Imp<string> {
        clone(): string;
        cloneDeep(): string;
        cloneDeepWith(customizer: CloneDeepWithCustomizer<string>): any;
        cloneDeepWith(): string;
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<string, TResult>): TResult;
        cloneWith<TResult>(customizer: CloneWithCustomizer<string, TResult | undefined>): TResult | string;
        cloneWith(): string;
    }
    interface ImpO<T> extends Imp<object> {
        clone(): object;
        cloneDeep(): object;
        cloneDeepWith(customizer: CloneDeepWithCustomizer<object>): any;
        cloneDeepWith(): object;
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<object, TResult>): TResult;
        cloneWith<TResult>(customizer: CloneWithCustomizer<object, TResult | undefined>): TResult | object;
        cloneWith(): object;
    }
    interface ImpL<T> {
        clone(): List<T>;
        cloneDeep(): List<T>;
        cloneDeepWith(customizer: CloneDeepWithCustomizer<List<T>>): any;
        cloneDeepWith(): List<T>;
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<List<T>, TResult>): TResult;
        cloneWith<TResult>(customizer: CloneWithCustomizer<List<T>, TResult | undefined>): TResult | List<T>;
        cloneWith(): List<T>;
    }
    interface ImpU extends Imp<unknown> {
        clone(): unknown;
        cloneDeep(): unknown;
        cloneDeepWith(customizer: CloneDeepWithCustomizer<unknown>): any;
        cloneDeepWith(): unknown;
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<unknown, TResult>): TResult;
        cloneWith<TResult>(customizer: CloneWithCustomizer<unknown, TResult | undefined>): TResult | unknown;
        cloneWith(): unknown;
    }

    interface ExpF<T> extends Exp<T> {
        clone(): Exp<T>;
        cloneDeep(): Exp<T>;
        cloneDeepWith(customizer: CloneDeepWithCustomizer<T>): Exp<any>;
        cloneDeepWith(): Exp<T>;
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<T, TResult>): Exp<TResult>;
        cloneWith<TResult>(customizer: CloneWithCustomizer<T, TResult | undefined>): Exp<TResult | T>;
        cloneWith(): Exp<T>;
    }
    interface ExpS extends Exp<string> {
        clone(): Exp<string>;
        cloneDeep(): Exp<string>;
        cloneDeepWith(customizer: CloneDeepWithCustomizer<string>): Exp<any>;
        cloneDeepWith(): Exp<string>;
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<string, TResult>): Exp<TResult>;
        cloneWith<TResult>(customizer: CloneWithCustomizer<string, TResult | undefined>): Exp<TResult | string>;
        cloneWith(): Exp<string>;
    }
    interface ExpO<T> extends Exp<object> {
        clone(): Exp<object>;
        cloneDeep(): Exp<object>;
        cloneDeepWith(customizer: CloneDeepWithCustomizer<object>): Exp<any>;
        cloneDeepWith(): Exp<object>;
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<object, TResult>): Exp<TResult>;
        cloneWith<TResult>(customizer: CloneWithCustomizer<object, TResult | undefined>): Exp<TResult | object>;
        cloneWith(): Exp<object>;
    }
    interface ExpL<T> {
        clone(): Exp<List<T>>;
        cloneDeep(): Exp<List<T>>;
        cloneDeepWith(customizer: CloneDeepWithCustomizer<List<T>>): Exp<any>;
        cloneDeepWith(): Exp<List<T>>;
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<List<T>, TResult>): Exp<TResult>;
        cloneWith<TResult>(customizer: CloneWithCustomizer<List<T>, TResult | undefined>): Exp<TResult | List<T>>;
        cloneWith(): Exp<List<T>>;
    }
    interface ExpU extends Exp<unknown> {
        clone(): Exp<unknown>;
        cloneDeep(): Exp<unknown>;
        cloneDeepWith(customizer: CloneDeepWithCustomizer<unknown>): Exp<any>;
        cloneDeepWith(): Exp<unknown>;
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<unknown, TResult>): Exp<TResult>;
        cloneWith<TResult>(customizer: CloneWithCustomizer<unknown, TResult | undefined>): Exp<TResult | unknown>;
        cloneWith(): Exp<unknown>;
    }

    interface Stat {
        cloneDeep<T>(value: T): T;
    }
    type CloneDeepWithCustomizer<TObject> = (value: any, key: number | string | undefined, object: TObject | undefined, stack: any) => any;
    interface Stat {
        cloneDeepWith<T>(value: T, customizer: CloneDeepWithCustomizer<T>): any;
        cloneDeepWith<T>(value: T): T;
    }
    type CloneWithCustomizer<TValue, TResult> = (value: TValue, key: number | string | undefined, object: any, stack: any) => TResult;
    interface Stat {
        cloneWith<T, TResult extends object | string | number | boolean | null>(value: T, customizer: CloneWithCustomizer<T, TResult>): TResult;
        cloneWith<T, TResult>(value: T, customizer: CloneWithCustomizer<T, TResult | undefined>): TResult | T;
        cloneWith<T>(value: T): T;
    }
    interface Stat {
        conformsTo<T>(object: T, source: ConformsPredicateObject<T>): boolean;
    }
    interface Imp<TValue> {
        conformsTo<T>(this: Imp<T>, source: ConformsPredicateObject<T>): boolean;
    }
    interface Exp<TValue> {
        conformsTo<T>(this: Exp<T>, source: ConformsPredicateObject<T>): Exp<boolean>;
    }
    type CondPair<T, R> = [(val: T) => boolean, (val: T) => R];
    interface Stat {
        eq(value: any, other: any): boolean;
    }
    interface Imp<TValue> {
        eq(other: any): boolean;
    }
    interface Exp<TValue> {
        eq(other: any): Exp<boolean>;
    }

    interface Stat {
        gt(value: any, other: any): boolean;
    }
    interface Imp<TValue> {
        gt(other: any): boolean;
    }
    interface Exp<TValue> {
        gt(other: any): Exp<boolean>;
    }

    interface Stat {
        gte(value: any, other: any): boolean;
    }
    interface Imp<TValue> {
        gte(other: any): boolean;
    }
    interface Exp<TValue> {
        gte(other: any): Exp<boolean>;
    }

    interface Stat {
        isArguments(value?: any): value is IArguments;
    }
    interface Imp<TValue> {
        isArguments(): boolean;
    }
    interface Exp<TValue> {
        isArguments(): Exp<boolean>;
    }

    interface Stat {
        isArray(value?: any): value is any[];
        isArray<T>(value?: any): value is any[];
    }
    interface Imp<TValue> {
        isArray(): boolean;
    }
    interface Exp<TValue> {
        isArray(): Exp<boolean>;
    }

    interface Stat {
        isArrayBuffer(value?: any): value is ArrayBuffer;
    }
    interface Imp<TValue> {
        isArrayBuffer(): boolean;
    }
    interface Exp<TValue> {
        isArrayBuffer(): Exp<boolean>;
    }

    interface Stat {
        isArrayLike(value: any): value is { length: number };
    }
    interface Imp<TValue> {
        isArrayLike(): boolean;
    }
    interface Exp<TValue> {
        isArrayLike(): Exp<boolean>;
    }

    interface Stat {
        isArrayLikeObject(value: any): value is object & { length: number };
    }
    interface Imp<TValue> {
        isArrayLikeObject(): boolean;
    }
    interface Exp<TValue> {
        isArrayLikeObject(): Exp<boolean>;
    }

    interface Stat {
        isBoolean(value?: any): value is boolean;
    }
    interface Imp<TValue> {
        isBoolean(): boolean;
    }
    interface Exp<TValue> {
        isBoolean(): Exp<boolean>;
    }

    interface Stat {
        isBuffer(value?: any): boolean;
    }
    interface Imp<TValue> {
        isBuffer(): boolean;
    }
    interface Exp<TValue> {
        isBuffer(): Exp<boolean>;
    }

    interface Stat {
        isDate(value?: any): value is Date;
    }
    interface Imp<TValue> {
        isDate(): boolean;
    }
    interface Exp<TValue> {
        isDate(): Exp<boolean>;
    }

    interface Stat {
        isElement(value?: any): boolean;
    }
    interface Imp<TValue> {
        isElement(): boolean;
    }
    interface Exp<TValue> {
        isElement(): Exp<boolean>;
    }

    interface Stat {
        isEmpty(value?: any): boolean;
    }
    interface Imp<TValue> {
        isEmpty(): boolean;
    }
    interface Exp<TValue> {
        isEmpty(): Exp<boolean>;
    }

    interface Stat {
        isEqual(value: any, other: any): boolean;
    }
    interface Imp<TValue> {
        isEqual(other: any): boolean;
    }
    interface Exp<TValue> {
        isEqual(other: any): Exp<boolean>;
    }

    type IsEqualCustomizer = (value: any, other: any, indexOrKey: PropertyName | undefined, parent: any, otherParent: any, stack: any) => boolean | undefined;
    interface Stat {
        isEqualWith(value: any, other: any, customizer?: IsEqualCustomizer): boolean;
    }
    interface Imp<TValue> {
        isEqualWith(other: any, customizer?: IsEqualCustomizer): boolean;
    }
    interface Exp<TValue> {
        isEqualWith(other: any, customizer?: IsEqualCustomizer): Exp<boolean>;
    }

    interface Stat {
        isError(value: any): value is Error;
    }
    interface Imp<TValue> {
        isError(): boolean;
    }
    interface Exp<TValue> {
        isError(): Exp<boolean>;
    }

    interface Stat {
        isFinite(value?: any): boolean;
    }
    interface Imp<TValue> {
        isFinite(): boolean;
    }
    interface Exp<TValue> {
        isFinite(): Exp<boolean>;
    }

    interface Stat {
        isFunction(value: any): value is (...args: any[]) => any;
    }
    interface Imp<TValue> {
        isFunction(): boolean;
    }
    interface Exp<TValue> {
        isFunction(): Exp<boolean>;
    }

    interface Stat {
        isInteger(value?: any): boolean;
    }
    interface Imp<TValue> {
        isInteger(): boolean;
    }
    interface Exp<TValue> {
        isInteger(): Exp<boolean>;
    }

    interface Stat {
        isLength(value?: any): boolean;
    }
    interface Imp<TValue> {
        isLength(): boolean;
    }
    interface Exp<TValue> {
        isLength(): Exp<boolean>;
    }

    interface Stat {
        isMap(value?: any): value is Map<any, any>;
    }
    interface Imp<TValue> {
        isMap(): boolean;
    }
    interface Exp<TValue> {
        isMap(): Exp<boolean>;
    }

    type isMatchCustomizer = (value: any, other: any, indexOrKey?: PropertyName) => boolean;
    interface Stat {
        isMatch(object: object, source: object): boolean;
    }
    interface Imp<TValue> {
        isMatch(source: object): boolean;
    }
    interface Exp<TValue> {
        isMatch(source: object): Exp<boolean>;
    }

    type isMatchWithCustomizer = (value: any, other: any, indexOrKey: PropertyName, object: object, source: object) => boolean;
    interface Stat {
        isMatchWith(object: object, source: object, customizer: isMatchWithCustomizer): boolean;
    }
    interface Imp<TValue> {
        isMatchWith(source: object, customizer: isMatchWithCustomizer): boolean;
    }
    interface Exp<TValue> {
        isMatchWith(source: object, customizer: isMatchWithCustomizer): Exp<boolean>;
    }

    interface Stat {
        isNaN(value?: any): boolean;
    }
    interface Imp<TValue> {
        isNaN(): boolean;
    }
    interface Exp<TValue> {
        isNaN(): Exp<boolean>;
    }

    interface Stat {
        isNative(value: any): value is (...args: any[]) => any;
    }
    interface Imp<TValue> {
        isNative(): boolean;
    }
    interface Exp<TValue> {
        isNative(): Exp<boolean>;
    }

    interface Stat {
        isNil(value: any): value is null | undefined;
    }
    interface Imp<TValue> {
        isNil(): boolean;
    }
    interface Exp<TValue> {
        isNil(): Exp<boolean>;
    }

    interface Stat {
        isNull(value: any): value is null;
    }
    interface Imp<TValue> {
        isNull(): boolean;
    }
    interface Exp<TValue> {
        isNull(): Exp<boolean>;
    }

    interface Stat {
        isNumber(value?: any): value is number;
    }
    interface Imp<TValue> {
        isNumber(): boolean;
    }
    interface Exp<TValue> {
        isNumber(): Exp<boolean>;
    }

    interface Stat {
        isObject(value?: any): value is object;
    }
    interface Imp<TValue> {
        isObject(): this is Imp<object>;
    }
    interface Exp<TValue> {
        isObject(): Exp<boolean>;
    }

    interface Stat {
        isObjectLike(value?: any): boolean;
    }
    interface Imp<TValue> {
        isObjectLike(): boolean;
    }
    interface Exp<TValue> {
        isObjectLike(): Exp<boolean>;
    }

    interface Stat {
        isPlainObject(value?: any): boolean;
    }
    interface Imp<TValue> {
        isPlainObject(): boolean;
    }
    interface Exp<TValue> {
        isPlainObject(): Exp<boolean>;
    }

    interface Stat {
        isRegExp(value?: any): value is RegExp;
    }
    interface Imp<TValue> {
        isRegExp(): boolean;
    }
    interface Exp<TValue> {
        isRegExp(): Exp<boolean>;
    }

    interface Stat {
        isSafeInteger(value: any): boolean;
    }
    interface Imp<TValue> {
        isSafeInteger(): boolean;
    }
    interface Exp<TValue> {
        isSafeInteger(): Exp<boolean>;
    }

    interface Stat {
        isSet(value?: any): value is Set<any>;
    }
    interface Imp<TValue> {
        isSet(): boolean;
    }
    interface Exp<TValue> {
        isSet(): Exp<boolean>;
    }

    interface Stat {
        isString(value?: any): value is string;
    }
    interface Imp<TValue> {
        isString(): boolean;
    }
    interface Exp<TValue> {
        isString(): Exp<boolean>;
    }

    interface Stat {
        isSymbol(value: any): boolean;
    }
    interface Imp<TValue> {
        isSymbol(): boolean;
    }
    interface Exp<TValue> {
        isSymbol(): Exp<boolean>;
    }

    interface Stat {
        isTypedArray(value: any): boolean;
    }
    interface Imp<TValue> {
        isTypedArray(): boolean;
    }
    interface Exp<TValue> {
        isTypedArray(): Exp<boolean>;
    }

    interface Stat {
        isUndefined(value: any): value is undefined;
    }
    interface Imp<TValue> {
        isUndefined(): boolean;
    }
    interface Exp<TValue> {
        isUndefined(): Exp<boolean>;
    }

    interface Stat {
        isWeakMap(value?: any): value is WeakMap<object, any>;
    }
    interface Imp<TValue> {
        isWeakMap(): boolean;
    }
    interface Exp<TValue> {
        isWeakMap(): Exp<boolean>;
    }

    interface Stat {
        isWeakSet(value?: any): value is WeakSet<object>;
    }
    interface Imp<TValue> {
        isWeakSet(): boolean;
    }
    interface Exp<TValue> {
        isWeakSet(): Exp<boolean>;
    }

    interface Stat {
        lt(value: any, other: any): boolean;
    }
    interface Imp<TValue> {
        lt(other: any): boolean;
    }
    interface Exp<TValue> {
        lt(other: any): Exp<boolean>;
    }

    interface Stat {
        lte(value: any, other: any): boolean;
    }
    interface Imp<TValue> {
        lte(other: any): boolean;
    }
    interface Exp<TValue> {
        lte(other: any): Exp<boolean>;
    }

    interface Stat {
        toArray<T>(value:  Dictionary<T> | NumericDictionary<T> | null | undefined): T[];
        toArray<T>(value: T): Array<T[keyof T]>;
        toArray(): any[];
    }
    interface Imp<TValue> {
        toArray<T>(this: Imp< Dictionary<T> | NumericDictionary<T> | null | undefined>): Imp<T[]>;
        toArray<T extends object>(this: Imp<T>): Imp<Array<T[keyof T]>>;
    }
    interface Exp<TValue> {
        toArray<T>(this: Exp< Dictionary<T> | NumericDictionary<T> | null | undefined>): Exp<T[]>;
        toArray<T extends object>(this: Imp<T>): Exp<Array<T[keyof T]>>;
    }

    interface Stat {
        toFinite(value: any): number;
    }
    interface Imp<TValue> {
        toFinite(): number;
    }
    interface Exp<TValue> {
        toFinite(): Exp<number>;
    }

    interface Stat {
        toInteger(value: any): number;
    }
    interface Imp<TValue> {
        toInteger(): number;
    }
    interface Exp<TValue> {
        toInteger(): Exp<number>;
    }

    interface Stat {
        toLength(value: any): number;
    }
    interface Imp<TValue> {
        toLength(): number;
    }
    interface Exp<TValue> {
        toLength(): Exp<number>;
    }

    interface Stat {
        toNumber(value: any): number;
    }
    interface Imp<TValue> {
        toNumber(): number;
    }
    interface Exp<TValue> {
        toNumber(): Exp<number>;
    }

    interface Stat {
        toPlainObject(value?: any): any;
    }
    interface Imp<TValue> {
        toPlainObject(): Imp<any>;
    }
    interface Exp<TValue> {
        toPlainObject(): Exp<any>;
    }

    interface Stat {
        toSafeInteger(value: any): number;
    }
    interface Imp<TValue> {
        toSafeInteger(): number;
    }
    interface Exp<TValue> {
        toSafeInteger(): Exp<number>;
    }

    interface Stat {
        toString(value: any): string;
    }
}
