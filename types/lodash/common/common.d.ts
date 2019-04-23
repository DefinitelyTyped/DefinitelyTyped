import _ = require("../index");
// tslint:disable-next-line:strict-export-declare-modifiers
type GlobalPartial<T> = Partial<T>;
declare module "../index" {
    type PartialObject<T> = GlobalPartial<T>;
    type Many<T> = T | ReadonlyArray<T>;
    interface Stat {
        (value: string): ImpS;
        <T>(value: List<T> | null | undefined): ImpL<T>;
        <T extends (...args: any[]) => any>(value: T): ImpF<T>;
        <T extends object>(value: T): ImpO<T>;
        (value: any): ImpU;
        VERSION: string;
        templateSettings: TemplateSettings;
    }
    interface TemplateSettings {
        escape?: RegExp;
        evaluate?: RegExp;
        imports?: Dictionary<any>;
        interpolate?: RegExp;
        variable?: string;
    }
    interface MapCache {
        delete(key: any): boolean;
        get(key: any): any;
        has(key: any): boolean;
        set(key: any, value: any): this;
        clear?: () => void;
    }
    interface MapCacheConstructor {
        new (): MapCache;
    }
    interface ImpL<T> extends Imp<List<T>> {
        pop<T>(): T | undefined;
        push<T>(...items: T[]): this;
        shift<T>(): T | undefined;
        sort<T>(compareFn?: (a: T, b: T) => number): this;
        splice<T>(start: number, deleteCount?: number, ...items: T[]): this;
        unshift<T>(...items: T[]): this;
    }
    interface ExpL<T> {
        pop<T>(): Exp<T | undefined>;
        push<T>( ...items: T[]): this;
        shift<T>(): Exp<T | undefined>;
        sort<T>( compareFn?: (a: T, b: T) => number): this;
        splice<T>( start: number, deleteCount?: number, ...items: T[]): this;
        unshift<T>( ...items: T[]): this;
    }
    interface ImpF<T extends (...args: any[]) => any> extends Imp<T> {
    }
    interface ImpS extends Imp<string> {
    }
    interface ImpO<T> extends Imp<object> {
    }
    interface ImpL<T> extends Imp<List<T>> {
    }
    interface ImpU extends Imp<unknown> {
    }
    interface ExpF<T extends (...args: any[]) => any> extends Exp<T> {
    }
    interface ExpS extends Exp<string> {
    }
    interface ExpO<T> extends Exp<object> {
    }
    interface ExpL<T> extends Exp<List<T>> {
    }
    interface ExpU extends Exp<unknown> {
    }
    type NotVoid = unknown;
    type IterateeShorthand<T> = PropertyName | [PropertyName, any] | PartialDeep<T>;
    type ArrayIterator<T, TResult> = (value: T, index: number, collection: T[]) => TResult;
    type ListIterator<T, TResult> = (value: T, index: number, collection: List<T>) => TResult;
    type ListIteratee<T> = ListIterator<T, NotVoid> | IterateeShorthand<T>;
    type ListIterateeCustom<T, TResult> = ListIterator<T, TResult> | IterateeShorthand<T>;
    type ListIteratorTypeGuard<T, S extends T> = (value: T, index: number, collection: List<T>) => value is S;
    // Note: key should be string, not keyof T, because the actual object may contain extra properties that were not specified in the type.
    type ObjectIterator<TObject, TResult> = (value: TObject[keyof TObject], key: string, collection: TObject) => TResult;
    type ObjectIteratee<TObject> = ObjectIterator<TObject, NotVoid> | IterateeShorthand<TObject[keyof TObject]>;
    type ObjectIterateeCustom<TObject, TResult> = ObjectIterator<TObject, TResult> | IterateeShorthand<TObject[keyof TObject]>;
    type ObjectIteratorTypeGuard<TObject, S extends TObject[keyof TObject]> = (value: TObject[keyof TObject], key: string, collection: TObject) => value is S;
    type StringIterator<TResult> = (char: string, index: number, string: string) => TResult;
    type MemoVoidIterator<T, TResult> = (prev: TResult, curr: T, indexOrKey: any, list: T[]) => void;
    type MemoIterator<T, TResult> = (prev: TResult, curr: T, indexOrKey: any, list: T[]) => TResult;
    type MemoListIterator<T, TResult, TList> = (prev: TResult, curr: T, index: number, list: TList) => TResult;
    type MemoObjectIterator<T, TResult, TList> = (prev: TResult, curr: T, key: string, list: TList) => TResult;
    type MemoIteratorCapped<T, TResult> = (prev: TResult, curr: T) => TResult;
    type MemoIteratorCappedRight<T, TResult> = (curr: T, prev: TResult) => TResult;
    type MemoVoidArrayIterator<T, TResult> = (acc: TResult, curr: T, index: number, arr: T[]) => void;
    type MemoVoidDictionaryIterator<T, TResult> = (acc: TResult, curr: T, key: string, dict: Dictionary<T>) => void;
    type MemoVoidIteratorCapped<T, TResult> = (acc: TResult, curr: T) => void;
    type ValueIteratee<T> = ((value: T) => NotVoid) | IterateeShorthand<T>;
    type ValueIterateeCustom<T, TResult> = ((value: T) => TResult) | IterateeShorthand<T>;
    type ValueIteratorTypeGuard<T, S extends T> = (value: T) => value is S;
    type ValueKeyIteratee<T> = ((value: T, key: string) => NotVoid) | IterateeShorthand<T>;
    type ValueKeyIterateeTypeGuard<T, S extends T> = (value: T, key: string) => value is S;
    type Comparator<T> = (a: T, b: T) => boolean;
    type Comparator2<T1, T2> = (a: T1, b: T2) => boolean;
    type PropertyName = string | number | symbol;
    type PropertyPath = Many<PropertyName>;
    type List<T> = ArrayLike<T>;
    interface Dictionary<T> {
        [index: string]: T;
    }
    interface NumericDictionary<T> {
        [index: number]: T;
    }
    // Crazy typedef needed get _.omit to work properly with Dictionary and NumericDictionary
    type AnyKindOfDictionary =
        | Dictionary<unknown>
        | NumericDictionary<unknown>;
    interface Cancelable {
        cancel(): void;
        flush(): void;
    }
    type PartialDeep<T> = {
        [P in keyof T]?: PartialDeep<T[P]>;
    };
    // For backwards compatibility
    type LoDashImplicitArrayWrapper<T> = Imp<T[]>;
    type LoDashImplicitNillableArrayWrapper<T> = Imp<T[] | null | undefined>;
    type LoDashImplicitObjectWrapper<T> = Imp<T>;
    type LoDashImplicitNillableObjectWrapper<T> = Imp<T | null | undefined>;
    type LoDashImplicitNumberArrayWrapper = Imp<number[]>;
    type LoDashImplicitStringWrapper = Imp<string>;
    type LoDashExplicitArrayWrapper<T> = Exp<T[]>;
    type LoDashExplicitNillableArrayWrapper<T> = Exp<T[] | null | undefined>;
    type LoDashExplicitObjectWrapper<T> = Exp<T>;
    type LoDashExplicitNillableObjectWrapper<T> = Exp<T | null | undefined>;
    type LoDashExplicitNumberArrayWrapper = Exp<number[]>;
    type LoDashExplicitStringWrapper = Exp<string>;
    type DictionaryIterator<T, TResult> = ObjectIterator<Dictionary<T>, TResult>;
    type DictionaryIteratee<T> = ObjectIteratee<Dictionary<T>>;
    type DictionaryIteratorTypeGuard<T, S extends T> = ObjectIteratorTypeGuard<Dictionary<T>, S>;
    // NOTE: keys of objects at run time are always strings, even when a NumericDictionary is being iterated.
    type NumericDictionaryIterator<T, TResult> = (value: T, key: string, collection: NumericDictionary<T>) => TResult;
    type NumericDictionaryIteratee<T> = NumericDictionaryIterator<T, NotVoid> | IterateeShorthand<T>;
    type NumericDictionaryIterateeCustom<T, TResult> = NumericDictionaryIterator<T, TResult> | IterateeShorthand<T>;
}
