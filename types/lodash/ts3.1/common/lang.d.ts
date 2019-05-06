import _ = require("../index");
// tslint:disable-next-line:strict-export-declare-modifiers
type GlobalFunction = Function;
declare module "../index" {
    type FunctionBase = GlobalFunction;
    interface LoDashStatic {
        /**
         * @see _.castArray
         */
        castArray<T>(value?: Many<T>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.castArray
         */
        castArray(): Collection<T>;
    }
    interface String {
        /**
         * @see _.castArray
         */
        castArray(): Collection<string>;
    }
    interface Object<T> {
        /**
         * @see _.castArray
         */
        castArray(): Collection<T>;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.castArray
         */
        castArray(): Collection<T>;
    }
    interface Primitive<T> {
        /**
         * @see _.castArray
         */
        castArray(): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.castArray
         */
        castArray(): CollectionChain<T>;
    }
    interface StringChain {
        /**
         * @see _.castArray
         */
        castArray(): CollectionChain<string>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.castArray
         */
        castArray(): CollectionChain<T>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.castArray
         */
        castArray(): CollectionChain<T>;
    }
    interface PrimitiveChain<T> {
        /**
         * @see _.castArray
         */
        castArray(): CollectionChain<T>;
    }

    interface LoDashStatic {
        /**
         * @see _.clone
         */
        clone<T>(value: T): T;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.clone
         */
        clone(): TValue;
        /**
         * @see _.cloneDeep
         */
        cloneDeep(): TValue;
        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith(customizer: CloneDeepWithCustomizer<TValue>): any;
        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith(): TValue;
        /**
         * @see _.cloneWith
         */
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<TValue, TResult>): TResult;
        /**
         * @see _.cloneWith
         */
        cloneWith<TResult>(customizer: CloneWithCustomizer<TValue, TResult | undefined>): TResult | TValue;
        /**
         * @see _.cloneWith
         */
        cloneWith(): TValue;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.clone
         */
        clone(): this;
        /**
         * @see _.cloneDeep
         */
        cloneDeep(): this;
        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith(customizer: CloneDeepWithCustomizer<TValue>): LoDashExplicitWrapper<any>;
        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith(): this;
        /**
         * @see _.cloneWith
         */
        cloneWith<TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<TValue, TResult>): ExpChain<TResult>;
        /**
         * @see _.cloneWith
         */
        cloneWith<TResult>(customizer: CloneWithCustomizer<TValue, TResult | undefined>): ExpChain<TResult | TValue>;
        /**
         * @see _.cloneWith
         */
        cloneWith(): this;
    }

    interface LoDashStatic {
        /**
         * @see _.cloneDeep
         */
        cloneDeep<T>(value: T): T;
    }
    type CloneDeepWithCustomizer<TObject> = (value: any, key: number | string | undefined, object: TObject | undefined, stack: any) => any;
    interface LoDashStatic {
        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith<T>(value: T, customizer: CloneDeepWithCustomizer<T>): any;
        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith<T>(value: T): T;
    }
    type CloneWithCustomizer<TValue, TResult> = (value: TValue, key: number | string | undefined, object: any, stack: any) => TResult;
    interface LoDashStatic {
        /**
         * @see _.cloneWith
         */
        cloneWith<T, TResult extends object | string | number | boolean | null>(value: T, customizer: CloneWithCustomizer<T, TResult>): TResult;
        /**
         * @see _.cloneWith
         */
        cloneWith<T, TResult>(value: T, customizer: CloneWithCustomizer<T, TResult | undefined>): TResult | T;
        /**
         * @see _.cloneWith
         */
        cloneWith<T>(value: T): T;
    }
    interface LoDashStatic {
        /**
         * @see _.conformsTo
         */
        conformsTo<T>(object: T, source: ConformsPredicateObject<T>): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.conformsTo
         */
        conformsTo(source: ConformsPredicateObject<TValue>): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.conformsTo
         */
        conformsTo(source: ConformsPredicateObject<TValue>): PrimitiveChain<boolean>;
    }
    type CondPair<T, R> = [(val: T) => boolean, (val: T) => R];
    interface LoDashStatic {
        /**
         * @see _.eq
         */
        eq(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.eq
         */
        eq(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.eq
         */
        eq(other: any): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.gt
         */
        gt(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.gt
         */
        gt(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.gt
         */
        gt(other: any): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.gte
         */
        gte(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.gte
         */
        gte(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.gte
         */
        gte(other: any): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isArguments
         */
        isArguments(value?: any): value is IArguments;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArguments
         */
        isArguments(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isArguments
         */
        isArguments(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isArray
         */
        isArray(value?: any): value is any[];
        /**
         * @see _.isArray
         */
        isArray<T>(value?: any): value is any[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArray
         */
        isArray(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isArray
         */
        isArray(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isArrayBuffer
         */
        isArrayBuffer(value?: any): value is ArrayBuffer;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArrayBuffer
         */
        isArrayBuffer(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isArrayBuffer
         */
        isArrayBuffer(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isArrayLike
         */
        isArrayLike<T extends { __lodashAnyHack: any }>(t: T): boolean;
        /**
         * @see _.isArrayLike
         */
        isArrayLike(value: ((...args: any[]) => any) | null | undefined): value is never;
        /**
         * @see _.isArrayLike
         */
        isArrayLike(value: any): value is { length: number };
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArrayLike
         */
        isArrayLike(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isArrayLike
         */
        isArrayLike(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isArrayLikeObject
         */
        isArrayLikeObject<T extends { __lodashAnyHack: any }>(value: T): boolean;
        // tslint:disable-next-line:ban-types (type guard doesn't seem to work correctly without the Function type)
        /**
         * @see _.isArrayLikeObject
         */
        isArrayLikeObject(value: ((...args: any[]) => any) | FunctionBase | string | boolean | number | null | undefined): value is never;
        /**
         * @see _.isArrayLikeObject
         */
        isArrayLikeObject(value: any): value is object & { length: number };
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isArrayLikeObject
         */
        isArrayLikeObject(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isArrayLikeObject
         */
        isArrayLikeObject(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isBoolean
         */
        isBoolean(value?: any): value is boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isBoolean
         */
        isBoolean(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isBoolean
         */
        isBoolean(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isBuffer
         */
        isBuffer(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isBuffer
         */
        isBuffer(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isBuffer
         */
        isBuffer(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isDate
         */
        isDate(value?: any): value is Date;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isDate
         */
        isDate(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isDate
         */
        isDate(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isElement
         */
        isElement(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isElement
         */
        isElement(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isElement
         */
        isElement(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isEmpty
         */
        isEmpty(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isEmpty
         */
        isEmpty(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isEmpty
         */
        isEmpty(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isEqual
         */
        isEqual(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isEqual
         */
        isEqual(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isEqual
         */
        isEqual(other: any): PrimitiveChain<boolean>;
    }

    type IsEqualCustomizer = (value: any, other: any, indexOrKey: PropertyName | undefined, parent: any, otherParent: any, stack: any) => boolean | undefined;
    interface LoDashStatic {
        /**
         * @see _.isEqualWith
         */
        isEqualWith(value: any, other: any, customizer?: IsEqualCustomizer): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isEqualWith
         */
        isEqualWith(other: any, customizer?: IsEqualCustomizer): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isEqualWith
         */
        isEqualWith(other: any, customizer?: IsEqualCustomizer): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isError
         */
        isError(value: any): value is Error;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isError
         */
        isError(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isError
         */
        isError(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isFinite
         */
        isFinite(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isFinite
         */
        isFinite(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isFinite
         */
        isFinite(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isFunction
         */
        isFunction(value: any): value is (...args: any[]) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isFunction
         */
        isFunction(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isFunction
         */
        isFunction(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isInteger
         */
        isInteger(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isInteger
         */
        isInteger(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isInteger
         */
        isInteger(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isLength
         */
        isLength(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isLength
         */
        isLength(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isLength
         */
        isLength(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isMap
         */
        isMap(value?: any): value is Map<any, any>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isMap
         */
        isMap(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isMap
         */
        isMap(): PrimitiveChain<boolean>;
    }

    type isMatchCustomizer = (value: any, other: any, indexOrKey?: PropertyName) => boolean;
    interface LoDashStatic {
        /**
         * @see _.isMatch
         */
        isMatch(object: object, source: object): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isMatch
         */
        isMatch(source: object): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isMatch
         */
        isMatch(source: object): PrimitiveChain<boolean>;
    }

    type isMatchWithCustomizer = (value: any, other: any, indexOrKey: PropertyName, object: object, source: object) => boolean;
    interface LoDashStatic {
        /**
         * @see _.isMatchWith
         */
        isMatchWith(object: object, source: object, customizer: isMatchWithCustomizer): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isMatchWith
         */
        isMatchWith(source: object, customizer: isMatchWithCustomizer): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isMatchWith
         */
        isMatchWith(source: object, customizer: isMatchWithCustomizer): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isNaN
         */
        isNaN(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isNaN
         */
        isNaN(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isNaN
         */
        isNaN(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isNative
         */
        isNative(value: any): value is (...args: any[]) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isNative
         */
        isNative(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isNative
         */
        isNative(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isNil
         */
        isNil(value: any): value is null | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isNil
         */
        isNil(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isNil
         */
        isNil(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isNull
         */
        isNull(value: any): value is null;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isNull
         */
        isNull(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isNull
         */
        isNull(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isNumber
         */
        isNumber(value?: any): value is number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isNumber
         */
        isNumber(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isNumber
         */
        isNumber(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isObject
         */
        isObject(value?: any): value is object;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isObject
         */
        isObject(): this is LoDashImplicitWrapper<object>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isObject
         */
        isObject(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isObjectLike
         */
        isObjectLike(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isObjectLike
         */
        isObjectLike(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isObjectLike
         */
        isObjectLike(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isPlainObject
         */
        isPlainObject(value?: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isPlainObject
         */
        isPlainObject(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isPlainObject
         */
        isPlainObject(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isRegExp
         */
        isRegExp(value?: any): value is RegExp;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isRegExp
         */
        isRegExp(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isRegExp
         */
        isRegExp(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isSafeInteger
         */
        isSafeInteger(value: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isSafeInteger
         */
        isSafeInteger(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isSafeInteger
         */
        isSafeInteger(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isSet
         */
        isSet(value?: any): value is Set<any>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isSet
         */
        isSet(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isSet
         */
        isSet(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isString
         */
        isString(value?: any): value is string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isString
         */
        isString(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isString
         */
        isString(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isSymbol
         */
        isSymbol(value: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isSymbol
         */
        isSymbol(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isSymbol
         */
        isSymbol(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isTypedArray
         */
        isTypedArray(value: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isTypedArray
         */
        isTypedArray(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isTypedArray
         */
        isTypedArray(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isUndefined
         */
        isUndefined(value: any): value is undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isUndefined
         */
        isUndefined(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isUndefined
         */
        isUndefined(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isWeakMap
         */
        isWeakMap(value?: any): value is WeakMap<object, any>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isWeakMap
         */
        isWeakMap(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isWeakMap
         */
        isWeakMap(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.isWeakSet
         */
        isWeakSet(value?: any): value is WeakSet<object>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isWeakSet
         */
        isWeakSet(): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isWeakSet
         */
        isWeakSet(): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.lt
         */
        lt(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.lt
         */
        lt(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.lt
         */
        lt(other: any): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.lte
         */
        lte(value: any, other: any): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.lte
         */
        lte(other: any): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.lte
         */
        lte(other: any): PrimitiveChain<boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.toArray
         */
        toArray<T>(value:  Dictionary<T> | NumericDictionary<T> | null | undefined): T[];
        /**
         * @see _.toArray
         */
        toArray<T>(value: T): Array<T[keyof T]>;
        /**
         * @see _.toArray
         */
        toArray(): any[];
    }
    interface String {
        /**
         * @see _.toArray
         */
        toArray(): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.toArray
         */
        toArray(): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.toArray
         */
        toArray(): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.toArray
         */
        toArray(): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.toArray
         */
        toArray(): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.toArray
         */
        toArray(): CollectionChain<T[keyof T]>;
    }

    interface LoDashStatic {
        /**
         * @see _.toFinite
         */
        toFinite(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toFinite
         */
        toFinite(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toFinite
         */
        toFinite(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.toInteger
         */
        toInteger(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toInteger
         */
        toInteger(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toInteger
         */
        toInteger(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.toLength
         */
        toLength(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toLength
         */
        toLength(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toLength
         */
        toLength(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.toNumber
         */
        toNumber(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toNumber
         */
        toNumber(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toNumber
         */
        toNumber(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.toPlainObject
         */
        toPlainObject(value?: any): any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPlainObject
         */
        toPlainObject(): Object<any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPlainObject
         */
        toPlainObject(): ObjectChain<any>;
    }

    interface LoDashStatic {
        /**
         * @see _.toSafeInteger
         */
        toSafeInteger(value: any): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toSafeInteger
         */
        toSafeInteger(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toSafeInteger
         */
        toSafeInteger(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.toString
         */
        toString(value: any): string;
    }
}
