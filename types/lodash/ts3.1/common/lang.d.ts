import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
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
        conformsTo(source: ConformsPredicateObject<TValue>): ExpU<boolean>;
    }
    type CondPair<T, R> = [(val: T) => boolean, (val: T) => R];
    interface LoDashStatic {
        eq(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        eq(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        eq(other: any): ExpU<boolean>;
    }

    interface LoDashStatic {
        gt(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        gt(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        gt(other: any): ExpU<boolean>;
    }

    interface LoDashStatic {
        gte(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        gte(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        gte(other: any): ExpU<boolean>;
    }

    interface LoDashStatic {
        isArguments(value?: any): value is IArguments;
    }
    interface LoDashImplicitWrapper<TValue> {
        isArguments(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isArguments(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isArray(value?: any): value is any[];
        isArray<T>(value?: any): value is any[];
    }
    interface LoDashImplicitWrapper<TValue> {
        isArray(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isArray(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isArrayBuffer(value?: any): value is ArrayBuffer;
    }
    interface LoDashImplicitWrapper<TValue> {
        isArrayBuffer(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isArrayBuffer(): ExpU<boolean>;
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
        isArrayLike(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isArrayLikeObject<T extends { __lodashAnyHack: any }>(value: T): boolean;
        // tslint:disable-next-line:ban-types (type guard doesn't seem to work correctly without the Function type)
        isArrayLikeObject(value: ((...args: any[]) => any) | Function | string | boolean | number | null | undefined): value is never;
        isArrayLikeObject(value: any): value is object & { length: number };
    }
    interface LoDashImplicitWrapper<TValue> {
        isArrayLikeObject(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isArrayLikeObject(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isBoolean(value?: any): value is boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isBoolean(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isBoolean(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isBuffer(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isBuffer(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isBuffer(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isDate(value?: any): value is Date;
    }
    interface LoDashImplicitWrapper<TValue> {
        isDate(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isDate(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isElement(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isElement(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isElement(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isEmpty(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isEmpty(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isEmpty(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isEqual(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isEqual(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isEqual(other: any): ExpU<boolean>;
    }

    type IsEqualCustomizer = (value: any, other: any, indexOrKey: PropertyName | undefined, parent: any, otherParent: any, stack: any) => boolean | undefined;
    interface LoDashStatic {
        isEqualWith(value: any, other: any, customizer?: IsEqualCustomizer): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isEqualWith(other: any, customizer?: IsEqualCustomizer): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isEqualWith(other: any, customizer?: IsEqualCustomizer): ExpU<boolean>;
    }

    interface LoDashStatic {
        isError(value: any): value is Error;
    }
    interface LoDashImplicitWrapper<TValue> {
        isError(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isError(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isFinite(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isFinite(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isFinite(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isFunction(value: any): value is (...args: any[]) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        isFunction(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isFunction(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isInteger(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isInteger(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isInteger(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isLength(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isLength(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isLength(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isMap(value?: any): value is Map<any, any>;
    }
    interface LoDashImplicitWrapper<TValue> {
        isMap(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isMap(): ExpU<boolean>;
    }

    type isMatchCustomizer = (value: any, other: any, indexOrKey?: PropertyName) => boolean;
    interface LoDashStatic {
        isMatch(object: object, source: object): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isMatch(source: object): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isMatch(source: object): ExpU<boolean>;
    }

    type isMatchWithCustomizer = (value: any, other: any, indexOrKey: PropertyName, object: object, source: object) => boolean;
    interface LoDashStatic {
        isMatchWith(object: object, source: object, customizer: isMatchWithCustomizer): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isMatchWith(source: object, customizer: isMatchWithCustomizer): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isMatchWith(source: object, customizer: isMatchWithCustomizer): ExpU<boolean>;
    }

    interface LoDashStatic {
        isNaN(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isNaN(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isNaN(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isNative(value: any): value is (...args: any[]) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        isNative(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isNative(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isNil(value: any): value is null | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        isNil(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isNil(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isNull(value: any): value is null;
    }
    interface LoDashImplicitWrapper<TValue> {
        isNull(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isNull(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isNumber(value?: any): value is number;
    }
    interface LoDashImplicitWrapper<TValue> {
        isNumber(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isNumber(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isObject(value?: any): value is object;
    }
    interface LoDashImplicitWrapper<TValue> {
        isObject(): this is LoDashImplicitWrapper<object>;
    }
    interface LoDashExplicitWrapper<TValue> {
        isObject(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isObjectLike(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isObjectLike(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isObjectLike(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isPlainObject(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isPlainObject(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isPlainObject(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isRegExp(value?: any): value is RegExp;
    }
    interface LoDashImplicitWrapper<TValue> {
        isRegExp(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isRegExp(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isSafeInteger(value: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isSafeInteger(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isSafeInteger(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isSet(value?: any): value is Set<any>;
    }
    interface LoDashImplicitWrapper<TValue> {
        isSet(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isSet(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isString(value?: any): value is string;
    }
    interface LoDashImplicitWrapper<TValue> {
        isString(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isString(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isSymbol(value: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isSymbol(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isSymbol(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isTypedArray(value: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        isTypedArray(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isTypedArray(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isUndefined(value: any): value is undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        isUndefined(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isUndefined(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isWeakMap(value?: any): value is WeakMap<object, any>;
    }
    interface LoDashImplicitWrapper<TValue> {
        isWeakMap(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isWeakMap(): ExpU<boolean>;
    }

    interface LoDashStatic {
        isWeakSet(value?: any): value is WeakSet<object>;
    }
    interface LoDashImplicitWrapper<TValue> {
        isWeakSet(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        isWeakSet(): ExpU<boolean>;
    }

    interface LoDashStatic {
        lt(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        lt(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        lt(other: any): ExpU<boolean>;
    }

    interface LoDashStatic {
        lte(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        lte(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        lte(other: any): ExpU<boolean>;
    }

    interface LoDashStatic {
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

    interface LoDashStatic {
        toFinite(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        toFinite(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        toFinite(): ExpU<number>;
    }

    interface LoDashStatic {
        toInteger(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        toInteger(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        toInteger(): ExpU<number>;
    }

    interface LoDashStatic {
        toLength(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        toLength(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        toLength(): ExpU<number>;
    }

    interface LoDashStatic {
        toNumber(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        toNumber(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        toNumber(): ExpU<number>;
    }

    interface LoDashStatic {
        toPlainObject(value?: any): any;
    }
    interface LoDashImplicitWrapper<TValue> {
        toPlainObject(): ImpO<any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        toPlainObject(): ExpO<any>;
    }

    interface LoDashStatic {
        toSafeInteger(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        toSafeInteger(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        toSafeInteger(): ExpU<number>;
    }

    interface LoDashStatic {
        toString(value: any): string;
    }
}
