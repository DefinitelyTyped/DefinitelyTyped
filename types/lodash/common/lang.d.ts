import _ = require("../index");
declare module "../index" {
    interface Stat {
        castArray<T>(value?: Many<T>): T[];
    }
    interface ImpL<T> {
        castArray(): ImpL<T>;
    }
    interface ImpS {
        castArray(): ImpL<string>;
    }
    interface ImpO<T> {
        castArray(): ImpL<T>;
    }
    interface ImpF<T extends (...args: any) => any> {
        castArray(): ImpL<T>;
    }
    interface ImpU<T> {
        castArray(): ImpL<T>;
    }
    interface ExpL<T> {
        castArray(): ExpL<T>;
    }
    interface ExpS {
        castArray(): ExpL<string>;
    }
    interface ExpO<T> {
        castArray(): ExpL<T>;
    }
    interface ExpF<T extends (...args: any) => any> {
        castArray(): ExpL<T>;
    }
    interface ExpU<T> {
        castArray(): ExpL<T>;
    }

    interface Stat {
        clone<T>(value: T): T;
    }

    interface Imp<TValue> {
        clone(): TValue;
        cloneDeep(): TValue;
        cloneDeepWith(customizer: CloneDeepWithCustomizer<TValue>): any;
        cloneDeepWith(): TValue;
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<TValue, TResult>): TResult;
        cloneWith<TResult>(customizer: CloneWithCustomizer<TValue, TResult | undefined>): TResult | TValue;
        cloneWith(): TValue;
    }
    interface Exp<TValue> {
        clone(): Exp<TValue>;
        cloneDeep(): Exp<TValue>;
        cloneDeepWith(customizer: CloneDeepWithCustomizer<TValue>): Exp<any>;
        cloneDeepWith(): Exp<TValue>;
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<TValue, TResult>): Exp<TResult>;
        cloneWith<TResult>(customizer: CloneWithCustomizer<TValue, TResult | undefined>): Exp<TResult | TValue>;
        cloneWith(): Exp<TValue>;
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
        conformsTo(source: ConformsPredicateObject<TValue>): boolean;
    }
    interface Exp<TValue> {
        conformsTo(source: ConformsPredicateObject<TValue>): Exp<boolean>;
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
        isArrayLike<T extends { __lodashAnyHack: any }>(t: T): boolean;
        isArrayLike(value: ((...args: any[]) => any) | null | undefined): value is never;
        isArrayLike(value: any): value is { length: number };
    }
    interface Imp<TValue> {
        isArrayLike(): boolean;
    }
    interface Exp<TValue> {
        isArrayLike(): Exp<boolean>;
    }

    interface Stat {
        isArrayLikeObject<T extends { __lodashAnyHack: any }>(value: T): boolean;
        // tslint:disable-next-line:ban-types (type guard doesn't seem to work correctly without the Function type)
        isArrayLikeObject(value: ((...args: any[]) => any) | Function | string | boolean | number | null | undefined): value is never;
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
    interface ImpS {
        toArray(): ImpL<string>;
    }
    interface ImpL<T> {
        toArray(): ImpL<T>;
    }
    interface ImpO<T> {
        toArray(): ImpL<T[keyof T]>;
    }
    interface ExpS {
        toArray(): ExpL<string>;
    }
    interface ExpL<T> {
        toArray(): ExpL<T>;
    }
    interface ExpO<T> {
        toArray(): ExpL<T[keyof T]>;
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
