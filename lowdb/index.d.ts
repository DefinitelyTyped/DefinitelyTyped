declare namespace lowdb {

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

    class LoDashWrapper {

        /**
         * @see  _.has
         */
        has(path: StringRepresentable | StringRepresentable[]): LoDashWrapper;

        /**
         * @see  _.hasIn
         */
        hasIn(path: StringRepresentable | StringRepresentable[]): LoDashWrapper;

        /**
         * @see _.assign
         */
        assign<TSource extends {}, TResult extends {}>(
            source: TSource
        ): LoDashWrapper;

        /**
         * @see _.assign
         */
        assign<TSource1 extends {}, TSource2 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2
        ): LoDashWrapper;

        /**
         * @see _.assign
         */
        assign<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashWrapper;

        /**
         * @see  _.assign
         */
        assign<TSource1 extends {}, TSource2 extends {}, TSource3 extends {}, TSource4 extends {}, TResult extends {}>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashWrapper;

        /**
         * @see _.assign
         */
        assign(): LoDashWrapper;

        /**
         * @see _.assign
         */
        assign<TResult extends {}>(...otherArgs: any[]): LoDashWrapper;

        /**
         * @see _.cloneDeep
         */
        cloneDeep<T>(): LoDashWrapper;

        /**
         * @see _.cloneDeep
         */
        cloneDeep<T>(): LoDashWrapper;

        /**
         * @see _.cloneDeep
         */
        cloneDeepWith<T>(customizer: (value: any) => any): LoDashWrapper[];

        /**
         * @see _.cloneDeep
         */
        cloneDeepWith<T>(customizer: (value: any) => any): LoDashWrapper;

        /**
       * @see _.defaults
       */
        defaults<S1 extends {}, TResult extends {}>(
            source1: S1,
            ...sources: {}[]
        ): LoDashWrapper;

        /**
         * @see _.defaults
         */
        defaults<S1 extends {}, S2 extends {}, TResult extends {}>(
            source1: S1,
            source2: S2,
            ...sources: {}[]
        ): LoDashWrapper;

        /**
         * @see _.defaults
         */
        defaults<S1 extends {}, S2 extends {}, S3 extends {}, TResult extends {}>(
            source1: S1,
            source2: S2,
            source3: S3,
            ...sources: {}[]
        ): LoDashWrapper;

        /**
         * @see _.defaults
         */
        defaults<S1 extends {}, S2 extends {}, S3 extends {}, S4 extends {}, TResult extends {}>(
            source1: S1,
            source2: S2,
            source3: S3,
            source4: S4,
            ...sources: {}[]
        ): LoDashWrapper;

        /**
         * @see _.defaults
         */
        defaults(): LoDashWrapper;

        /**
         * @see _.defaults
         */
        defaults<TResult>(...sources: {}[]): LoDashWrapper;

        /**
         * @see _.get
         */
        get<TResult>(object: Object,
            path: string | number | boolean | Array<string | number | boolean>,
            defaultValue?: TResult
        ): LoDashWrapper;

        /**
         * @see _.get
         */
        get<TResult>(path: string | number | boolean | Array<string | number | boolean>,
            defaultValue?: TResult
        ): LoDashWrapper;


        /**
         * @see _.mixin
         */
        mixin<TResult>(
            source: Dictionary<Function>,
            options?: MixinOptions
        ): LoDashWrapper;

        /**
         * @see _.mixin
         */
        mixin<TResult>(
            options?: MixinOptions
        ): LoDashWrapper;

        /**
         * @see _.set
         */
        set<TResult>(
            path: StringRepresentable | StringRepresentable[],
            value: any
        ): LoDashWrapper;

        /**
         * @see _.set
         */
        set<V, TResult>(
            path: StringRepresentable | StringRepresentable[],
            value: V
        ): LoDashWrapper;

        /**
         * @see _.find
         */
        find<T>(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashWrapper;

        /**
         * @see _.find
         */
        find(
            predicate?: string,
            thisArg?: any
        ): LoDashWrapper;

        /**
         * @see _.find
         */
        find<TObject extends {}>(
            predicate?: TObject
        ): LoDashWrapper;

        /**
         * @see _.find
         */
        filter<TObject extends {}>(
            predicate?: TObject
        ): LoDashWrapper;

        /**
         * @see _.filter
         */
        filter<T>(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashWrapper;

        /**
         * @see _.filter
         */
        filter(
            predicate: string,
            thisArg?: any
        ): LoDashWrapper;

        /**
         * @see _.filter
         */
        filter<T>(
            predicate: ListIterator<T, boolean> | DictionaryIterator<T, boolean>,
            thisArg?: any
        ): LoDashWrapper;

        /**
         * @see _.filter
         */
        filter(
            predicate?: StringIterator<boolean>,
            thisArg?: any
        ): LoDashWrapper;

        /**
         * @see _.filter
         */
        filter<W>(predicate: W): LoDashWrapper;
        /**
         * @see _.map
         */
        map<T, TResult>(
            iteratee?: ListIterator<T, TResult>,
            thisArg?: any
        ): LoDashWrapper;

        /**
         * @see _.map
         */
        map<TResult>(
            iteratee?: string
        ): LoDashWrapper;

        /**
         * @see _.map
         */
        map<TObject extends {}>(
            iteratee?: TObject
        ): LoDashWrapper;
        /**
         * @see _.map
         */
        map<TValue, TResult>(
            iteratee?: ListIterator<TValue, TResult> | DictionaryIterator<TValue, TResult>,
            thisArg?: any
        ): LoDashWrapper;

        /**
         * @see _.range
         */
        range(
            end?: number,
            step?: number
        ): LoDashWrapper;

        /**
         * @see _.rangeRight
         */
        rangeRight(
            end?: number,
            step?: number
        ): LoDashWrapper;

        /**
       * @see _.remove
       */
        remove<T>(
            predicate?: ListIterator<T, boolean>,
            thisArg?: any
        ): LoDashWrapper;

        /**
         * @see _.remove
         */
        remove(
            predicate?: string,
            thisArg?: any
        ): LoDashWrapper;

        /**
         * @see _.remove
         */
        remove<W>(
            predicate?: W
        ): LoDashWrapper;

        /**
       * @see _.sortBy
       */
        sortBy<T, TSort>(
            iteratee?: ListIterator<T, TSort>
        ): LoDashWrapper;

        /**
         * @see _.sortBy
         */
        sortBy(iteratee: string): LoDashWrapper;

        /**
         * @see _.sortBy
         */
        sortBy<W extends {}>(whereValue: W): LoDashWrapper;

        /**
         * @see _.sortBy
         */
        sortBy(): LoDashWrapper;

        /**
         * @see _.sortBy
         */
        sortBy<T>(...iteratees: (ListIterator<T, boolean> | Object | string)[]): LoDashWrapper;

        /**
         * @see _.sortBy
         */
        sortBy<T>(iteratees: (ListIterator<T, any> | string | Object)[]): LoDashWrapper;

        /**
         * @see _.slice
         */
        slice(
            start?: number,
            end?: number
        ): LoDashWrapper;

        /**
         * @see _.size
         */
        size(): LoDashWrapper;

        /**
         * @see _.take
         */
        take(n?: number): LoDashWrapper;

        /**
         * @see _.times
         */
        times<TResult>(
          iteratee: (num: number) => TResult
        ): LoDashWrapper;

        /**
         * @see _.times
         */
        times(): LoDashWrapper;

        /**
         * @see _.uniqueId
         */
        uniqueId(): LoDashWrapper;

        value<T>(): T;

        pop<T>(): T;
        push<T>(...items: T[]): LoDashWrapper;
        shift<T>(): T;
        sort<T>(compareFn?: (a: T, b: T) => number): LoDashWrapper;
        splice<T>(start: number): LoDashWrapper;
        splice<T>(start: number, deleteCount: number, ...items: any[]): LoDashWrapper;
        unshift<T>(...items: T[]): LoDashWrapper;
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
        read?(source: string, deserialize: any): Object

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
        serialize(obj: Object): string

        /**
          * Writes to the database.
          *
          * @param data The object to deserialize.
          * @return Returns the deserialized object.
        */
        deserialize(data: string): Object
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

    export class Low extends LoDashWrapper {

        constructor(filePath: string, options?: Options);

        /**
         * Access current database state.
         * Returns Returns the database state.
         */
        getState(): Object

        /**
         * Drop or reset database state.
         * @param newState New state of the database
         */
        setState(newState: Object): void

        /**
         * Persist database.
         * @param source The source location.
         */
        write(source: string): void

        /**
         * Persist database.
         * @param source The source location.
         */
        write(source: string): PromiseLike<any>

        /**
         * Read database.
         * @param source The source location.
         */
        read(source?: string): Object

        /**
         * Read database.
         * @param source The source location.
         */
        read(source?: string): PromiseLike<Object>

  }

//   declare class lowdb {
//     new (source?: string, opts?: Options): Low;
//     (source?: string, opts?: Options) : Low;
//   }
}

declare module "lowdb" {
    export = lowdb.Low;
}