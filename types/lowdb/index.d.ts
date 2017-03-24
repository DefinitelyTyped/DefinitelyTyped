// Type definitions for Lowdb 0.15
// Project: https://github.com/typicode/lowdb
// Definitions by: typicode, <https://github.com/typicode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Lowdb {

    interface PromiseLike<T> {
        /**
        * Attaches callbacks for the resolution and/or rejection of the Promise.
        * @param onfulfilled The callback to execute when the Promise is resolved.
        * @param onrejected The callback to execute when the Promise is rejected.
        * @returns A Promise for the completion of which ever callback is executed.
        */
        then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>): PromiseLike<TResult>;
        then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void): PromiseLike<TResult>;
    }

    interface StringRepresentable {
        toString(): string;
    }

    interface List<T> {
        [index: number]: T;
        length: number;
    }

    interface Dictionary<T> {
        [index: string]: T;
    }

    interface DictionaryIterator<T, TResult> {
        (value: T, key?: string, collection?: Dictionary<T>): TResult;
    }

    interface ListIterator<T, TResult> {
        (value: T, index: number, collection: List<T>): TResult;
    }

    interface StringIterator<TResult> {
        (char: string, index?: number, string?: string): TResult;
    }

    interface MixinOptions {
        chain?: boolean;
    }

    class LoDashWrapper<LowEntryClass extends LoDashWrapper<any>> {

        /**
         * @see  _.has
         */
        has(path: StringRepresentable | StringRepresentable[]): LowEntryClass;

        /**
         * @see  _.hasIn
         */
        hasIn(path: StringRepresentable | StringRepresentable[]): LowEntryClass;

        /**
         * @see _.assign
         */
        assign<TSource extends {}, TResult extends {}>(
            source: TSource
        ): LowEntryClass;

        /**
         * @see _.assign
         */
        assign<TSource1 extends {}, TSource2 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2
        ): LowEntryClass;

        /**
         * @see _.assign
         */
        assign<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LowEntryClass;

        /**
         * @see  _.assign
         */
        assign<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TSource4 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LowEntryClass;

        /**
         * @see _.assign
         */
        assign(): LowEntryClass;

        /**
         * @see _.assign
         */
        assign<TResult extends {}>(...otherArgs: any[]): LowEntryClass;

        /**
         * @see _.cloneDeep
         */
        cloneDeep<T>(): LowEntryClass;

        /**
         * @see _.cloneDeep
         */
        cloneDeep<T>(): LowEntryClass;

        /**
         * @see _.cloneDeep
         */
        cloneDeepWith<T>(customizer: (value: any) => any): LowEntryClass[];

        /**
         * @see _.cloneDeep
         */
        cloneDeepWith<T>(customizer: (value: any) => any): LowEntryClass;

        /**
       * @see _.defaults
       */
        defaults<S1 extends {}, TResult extends {}>(
            source1: S1,
            ...sources: {}[]
        ): LowEntryClass;

        /**
         * @see _.defaults
         */
        defaults<S1 extends {}, S2 extends {}, TResult extends {}>(
            source1: S1,
            source2: S2,
            ...sources: {}[]
        ): LowEntryClass;

        /**
         * @see _.defaults
         */
        defaults<S1 extends {}, S2 extends {}, S3 extends {}, TResult extends {}>(
            source1: S1,
            source2: S2,
            source3: S3,
            ...sources: {}[]
        ): LowEntryClass;

        /**
         * @see _.defaults
         */
        defaults<S1 extends {}, S2 extends {}, S3 extends {}, S4 extends {}, TResult extends {}>(
            source1: S1,
            source2: S2,
            source3: S3,
            source4: S4,
            ...sources: {}[]
        ): LowEntryClass;

        /**
         * @see _.defaults
         */
        defaults(): LowEntryClass;

        /**
         * @see _.defaults
         */
        defaults<TResult>(...sources: {}[]): LowEntryClass;

        /**
         * @see _.get
         */
        get<TResult>(object: any,
            path: string | number | boolean | Array<string | number | boolean>,
            defaultValue?: TResult
        ): LowEntryClass;

        /**
         * @see _.get
         */
        get<TResult>(path: string | number | boolean | Array<string | number | boolean>,
            defaultValue?: TResult
        ): LowEntryClass;


        /**
         * @see _.mixin
         */
        mixin<TResult>(
            source: Dictionary<() => void>,
            options?: MixinOptions
        ): LowEntryClass;

        /**
         * @see _.mixin
         */
        mixin<TResult>(
            options?: MixinOptions
        ): LowEntryClass;

        /**
         * @see _.set
         */
        set<TResult>(
            path: StringRepresentable | StringRepresentable[],
            value: any
        ): LowEntryClass;

        /**
         * @see _.set
         */
        set<V, TResult>(
            path: StringRepresentable | StringRepresentable[],
            value: V
        ): LowEntryClass;

        /**
         * @see _.find
         */
        find<T>(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LowEntryClass;

        /**
         * @see _.find
         */
        find(
            predicate?: string,
            thisArg?: any
        ): LowEntryClass;

        /**
         * @see _.find
         */
        find<TObject extends {}>(
            predicate?: TObject
        ): LowEntryClass;

        /**
         * @see _.find
         */
        filter<TObject extends {}>(
            predicate?: TObject
        ): LowEntryClass;

        /**
         * @see _.filter
         */
        filter<T>(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LowEntryClass;

        /**
         * @see _.filter
         */
        filter(
            predicate: string,
            thisArg?: any
        ): LowEntryClass;

        /**
         * @see _.filter
         */
        filter<T>(
            predicate: ListIterator<T, boolean> | DictionaryIterator<T, boolean>,
            thisArg?: any
        ): LowEntryClass;

        /**
         * @see _.filter
         */
        filter(
            predicate?: StringIterator<boolean>,
            thisArg?: any
        ): LowEntryClass;

        /**
         * @see _.filter
         */
        filter<W>(predicate: W): LowEntryClass;
        /**
         * @see _.map
         */
        map<T, TResult>(
            iteratee?: ListIterator<T, TResult>,
            thisArg?: any
        ): LowEntryClass;

        /**
         * @see _.map
         */
        map<TResult>(
            iteratee?: string
        ): LowEntryClass;

        /**
         * @see _.map
         */
        map<TObject extends {}>(
            iteratee?: TObject
        ): LowEntryClass;
        /**
         * @see _.map
         */
        map<TValue, TResult>(
            iteratee?: ListIterator<TValue, TResult> | DictionaryIterator<TValue, TResult>,
            thisArg?: any
        ): LowEntryClass;

        /**
         * @see _.range
         */
        range(
            end?: number,
            step?: number
        ): LowEntryClass;

        /**
         * @see _.rangeRight
         */
        rangeRight(
            end?: number,
            step?: number
        ): LowEntryClass;

        /**
       * @see _.remove
       */
        remove<T>(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LowEntryClass;

        /**
         * @see _.remove
         */
        remove(
            predicate?: string,
            thisArg?: any
        ): LowEntryClass;

        /**
         * @see _.remove
         */
        remove<W>(
            predicate?: W
        ): LowEntryClass;

        /**
       * @see _.sortBy
       */
        sortBy<T, TSort>(
            iteratee?: ListIterator<T, TSort>
        ): LowEntryClass;

        /**
         * @see _.sortBy
         */
        sortBy(iteratee: string): LowEntryClass;

        /**
         * @see _.sortBy
         */
        sortBy<W extends {}>(whereValue: W): LowEntryClass;

        /**
         * @see _.sortBy
         */
        sortBy(): LowEntryClass;

        /**
         * @see _.sortBy
         */
        sortBy<T>(...iteratees: (ListIterator<T, boolean> | any | string)[]): LowEntryClass;

        /**
         * @see _.sortBy
         */
        sortBy<T>(iteratees: (ListIterator<T, any> | string | any)[]): LowEntryClass;

        /**
         * @see _.slice
         */
        slice(
            start?: number,
            end?: number
        ): LowEntryClass;

        /**
         * @see _.size
         */
        size(): LowEntryClass;

        /**
         * @see _.take
         */
        take(n?: number): LowEntryClass;

        /**
         * @see _.times
         */
        times<TResult>(
          iteratee: (num: number) => TResult
        ): LowEntryClass;

        /**
         * @see _.times
         */
        times(): LowEntryClass;

        /**
         * @see _.uniqueId
         */
        uniqueId(): LowEntryClass;

        value<T>(): T;

        pop<T>(): T;
        push<T>(...items: T[]): LowEntryClass;
        shift<T>(): T;
        sort<T>(compareFn?: (a: T, b: T) => number): LowEntryClass;
        splice<T>(start: number): LowEntryClass;
        splice<T>(start: number, deleteCount: number, ...items: any[]): LowEntryClass;
        unshift<T>(...items: T[]): LowEntryClass;
    }

    export interface Storage {

        /**
          * Reads the database.
          *
          * @param source The source location.
          * @param deserialize The deserialize function to apply.
          * @return Returns a promise with the deserialized db object.
        */
        read?(source: string, deserialize: any): PromiseLike<any>

        /**
          * Reads the database.
          *
          * @param source The source location.
          * @param deserialize The deserialize function to apply.
          * @return Returns the deserialized db object.
        */
        read?(source: string, deserialize: any): {}

        /**
          * Writes to the database.
          *
          * @param destination The destination location.
          * @param obj The object to write.
          * @param serialize The serialize function to apply.
        */
        write?(destination: string, obj: any, serialize: any): void

        /**
          * Writes to the database.
          *
          * @param destination The destination location.
          * @param obj The object to write.
          * @param serialize The serialize function to apply.
        */
        write?(destination: string, obj: any, serialize: any): PromiseLike<void>
    }

    export interface Format {

        /**
          * Writes to the database.
          *
          * @param obj The object to serialize.
          * @return Returns the serialized object string.
        */
        serialize(obj: any): string

        /**
          * Writes to the database.
          *
          * @param data The object to deserialize.
          * @return Returns the deserialized object.
        */
        deserialize(data: string): any
    }

    export interface Options {

        /**
         * The custom "storage" object.
         */
        storage?: Storage

        /**
         * The custom "format" object.
         */
        format?: Format

        /**
         * The flag to automatically persist changes.
         */
        writeOnChange?: boolean

    }

    export class Lowdb extends LoDashWrapper<Lowdb> {

        constructor(filePath: string, options?: Options);

        /**
         * Access current database state.
         * Returns Returns the database state.
         */
        getState(): any

        /**
         * Drop or reset database state.
         * @param newState New state of the database
         */
        setState(newState: any): void

        /**
         * Persist database.
         * @param source The source location.
         */
        write(source?: string): void

        /**
         * Persist database.
         * @param source The source location.
         */
        write(source?: string): PromiseLike<any>

        /**
         * Read database.
         * @param source The source location.
         */
        read(source?: string): any

        /**
         * Read database.
         * @param source The source location.
         */
        read(source?: string): PromiseLike<any>

  }

//   declare class lowdb {
//     new (source?: string, opts?: Options): Low;
//     (source?: string, opts?: Options) : Low;
//   }
}

declare module "lowdb" {
    export = Lowdb.Lowdb;
}