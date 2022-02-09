// Type definitions for Lowdb 1.0
// Project: https://github.com/typicode/lowdb
// Definitions by: typicode <https://github.com/typicode>
//                 Bazyli Brzóska <https://github.com/niieani>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { LoDashStatic, ObjectChain } from "lodash";
declare module "lodash" {
    interface ObjectChain<T> {
        /**
         * @description Be careful: This function overwrites the whole database.
         */
        write(): T & Promise<T>;
    }
    interface PrimitiveChain<T> {
        write(): T & Promise<T>;
    }
    interface CollectionChain<T> {
        write(): ArrayLike<T> & Promise<ArrayLike<T>>;
    }
    interface FunctionChain<T> {
        write(): T & Promise<T>;
    }
    interface StringChain {
        write(): string & Promise<string>;
    }
}

declare let Lowdb: Lowdb.lowdb;
export = Lowdb;

declare namespace Lowdb {
  interface AdapterOptions<SchemaT = any> {
    defaultValue?: SchemaT | undefined;
    serialize?: ((data: SchemaT) => string) | undefined;
    deserialize?: ((serializedData: string) => SchemaT) | undefined;
  }

  interface BaseAdapter<SchemaT = any> extends AdapterOptions<SchemaT> {
    readonly "@@reference": SchemaT;
    new <SchemaT = any>(
      source: string,
      options?: AdapterOptions<SchemaT>
    ): BaseAdapter<SchemaT>;
    source: string;
  }

  interface AdapterSync<SchemaT = any> extends BaseAdapter<SchemaT> {
    new <SchemaT = any>(
      source: string,
      options?: AdapterOptions<SchemaT>
    ): AdapterSync<SchemaT>;
    write(state: object): void;
  }

  interface AdapterAsync<SchemaT = any> extends BaseAdapter<SchemaT> {
    new <SchemaT = any>(
      source: string,
      options?: AdapterOptions<SchemaT>
    ): AdapterAsync<SchemaT>;
    write(state: object): Promise<void>;
  }

  interface LowdbBase<SchemaT> {
    getState: () => SchemaT;
    setState: (state: SchemaT) => this;
  }

  interface LowdbSync<SchemaT> extends LowdbBase<SchemaT>, ObjectChain<SchemaT> {
    _: LoDashStatic;
    read: () => this;
    /**
     * @description Be careful: This function overwrites the whole database.
     */
    write<T = void>(returnValue?: T): T & Promise<T>;
  }

  interface LowdbAsync<SchemaT> extends LowdbBase<SchemaT>, ObjectChain<SchemaT> {
    _: LoDashStatic;
    read: () => Promise<this>;
    /**
     * @description Be careful: This function overwrites the whole database.
     */
    write<T = void>(returnValue?: T): T & Promise<T>;
  }

  interface LowdbFpSync<SchemaT> extends LowdbBase<SchemaT> {
    /**
     * @description Be careful: This function overwrites the whole database.
     */
    write<T = void>(returnValue?: T): T;
    /**
     * @description Returns a function that allows you to access/modify the database at a given path.
     * @example
     * ```js
     *  const posts = db('posts')
     *  const firstPost = posts(all => all[0])
     *  posts.write((allPosts) => [...allPosts, {title: 'Yup!'}])
     * ```
     */
    <TKey extends keyof SchemaT>(
      path: TKey | [TKey],
      defaultValue?: SchemaT[TKey]
    ): FpReturnSync<SchemaT[TKey]>;
    <TKey extends keyof SchemaT, TSubKey extends keyof SchemaT[TKey]>(
      path: [TKey, TSubKey],
      defaultValue?: SchemaT[TKey][TSubKey]
    ): FpReturnSync<SchemaT[TKey][TSubKey]>;
    <
      TKey extends keyof SchemaT,
      TSubKey extends keyof SchemaT[TKey],
      TSubKey2 extends keyof SchemaT[TKey][TSubKey]
    >(
      path: [TKey, TSubKey, TSubKey2],
      defaultValue?: SchemaT[TKey][TSubKey][TSubKey2]
    ): FpReturnSync<SchemaT[TKey][TSubKey][TSubKey2]>;
    <
      TKey extends keyof SchemaT,
      TSubKey extends keyof SchemaT[TKey],
      TSubKey2 extends keyof SchemaT[TKey][TSubKey],
      TSubKey3 extends keyof SchemaT[TKey][TSubKey][TSubKey2]
    >(
      path: [TKey, TSubKey, TSubKey2, TSubKey3],
      defaultValue?: SchemaT[TKey][TSubKey][TSubKey2][TSubKey3]
    ): FpReturnSync<SchemaT[TKey][TSubKey][TSubKey2][TSubKey3]>;
    <
      TKey extends keyof SchemaT,
      TSubKey extends keyof SchemaT[TKey],
      TSubKey2 extends keyof SchemaT[TKey][TSubKey],
      TSubKey3 extends keyof SchemaT[TKey][TSubKey][TSubKey2],
      TSubKey4 extends keyof SchemaT[TKey][TSubKey][TSubKey2][TSubKey3]
    >(
      path: [TKey, TSubKey, TSubKey2, TSubKey3, TSubKey4],
      defaultValue?: SchemaT[TKey][TSubKey][TSubKey2][TSubKey3][TSubKey4]
    ): FpReturnSync<SchemaT[TKey][TSubKey][TSubKey2][TSubKey3][TSubKey4]>;
    <T = any>(path: string | string[], defaultValue?: T): FpReturnSync<T>;
  }

  interface LowdbFpAsync<SchemaT> extends LowdbBase<SchemaT> {
    /**
     * @description Be careful: This function overwrites the whole database.
     */
    write<T = void>(returnValue?: T): Promise<T>;
    /**
     * @description Returns a function that allows you to access/modify the database at a given path.
     * @example
     * ```js
     *  const posts = db('posts')
     *  const firstPost = posts(all => all[0])
     *  posts.write((allPosts) => [...allPosts, {title: 'Yup!'}])
     * ```
     */
    <TKey extends keyof SchemaT>(
      path: TKey | [TKey],
      defaultValue?: SchemaT[TKey]
    ): FpReturnAsync<SchemaT[TKey]>;
    <TKey extends keyof SchemaT, TSubKey extends keyof SchemaT[TKey]>(
      path: [TKey, TSubKey],
      defaultValue?: SchemaT[TKey][TSubKey]
    ): FpReturnAsync<SchemaT[TKey][TSubKey]>;
    <
      TKey extends keyof SchemaT,
      TSubKey extends keyof SchemaT[TKey],
      TSubKey2 extends keyof SchemaT[TKey][TSubKey]
    >(
      path: [TKey, TSubKey, TSubKey2],
      defaultValue?: SchemaT[TKey][TSubKey][TSubKey2]
    ): FpReturnAsync<SchemaT[TKey][TSubKey][TSubKey2]>;
    <
      TKey extends keyof SchemaT,
      TSubKey extends keyof SchemaT[TKey],
      TSubKey2 extends keyof SchemaT[TKey][TSubKey],
      TSubKey3 extends keyof SchemaT[TKey][TSubKey][TSubKey2]
    >(
      path: [TKey, TSubKey, TSubKey2, TSubKey3],
      defaultValue?: SchemaT[TKey][TSubKey][TSubKey2][TSubKey3]
    ): FpReturnAsync<SchemaT[TKey][TSubKey][TSubKey2][TSubKey3]>;
    <
      TKey extends keyof SchemaT,
      TSubKey extends keyof SchemaT[TKey],
      TSubKey2 extends keyof SchemaT[TKey][TSubKey],
      TSubKey3 extends keyof SchemaT[TKey][TSubKey][TSubKey2],
      TSubKey4 extends keyof SchemaT[TKey][TSubKey][TSubKey2][TSubKey3]
    >(
      path: [TKey, TSubKey, TSubKey2, TSubKey3, TSubKey4],
      defaultValue?: SchemaT[TKey][TSubKey][TSubKey2][TSubKey3][TSubKey4]
    ): FpReturnAsync<SchemaT[TKey][TSubKey][TSubKey2][TSubKey3][TSubKey4]>;
    <T = any>(path: string | string[], defaultValue?: T): FpReturnAsync<T>;
  }

  interface FpReturnBase<PathT> {
    /**
     * Execute a series of functions on the data at a given path.
     * Result of previous function is the input of the next one.
     * Returns the result of the last function.
     */
    <R1>(f1: (a1: PathT) => R1): R1;
    // <R1>(f1: [(a1: PathT) => R1]): R1;
    <R1, R2>(f1: [(a1: PathT) => R1, (a: R1) => R2]): R2;
    <R1, R2, R3>(f1: [(a1: PathT) => R1, (a: R1) => R2, (a: R2) => R3]): R3;
    <R1, R2, R3, R4>(
      f1: [(a1: PathT) => R1, (a: R1) => R2, (a: R2) => R3, (a: R3) => R4]
    ): R4;
    <R1, R2, R3, R4, R5>(
      f1: [
        (a1: PathT) => R1,
        (a: R1) => R2,
        (a: R2) => R3,
        (a: R3) => R4,
        (a: R4) => R5
      ]
    ): R5;
    <R1, R2, R3, R4, R5, R6>(
      f1: [
        (a1: PathT) => R1,
        (a: R1) => R2,
        (a: R2) => R3,
        (a: R3) => R4,
        (a: R4) => R5,
        (a: R5) => R6
      ]
    ): R6;
    <R1, R2, R3, R4, R5, R6, R7>(
      f1: [
        (a1: PathT) => R1,
        (a: R1) => R2,
        (a: R2) => R3,
        (a: R3) => R4,
        (a: R4) => R5,
        (a: R5) => R6,
        (a: R6) => R7
      ]
    ): R7;
    (funcs: Array<(a: any) => any>): any;
  }
  interface FpReturnSync<PathT> extends FpReturnBase<PathT> {
    /**
     * @description Writes the change to the database, based on the callback's return value.
     * @example
     * ```js
     *  posts.write((allPosts) => [...allPosts, {title: 'Yup!'}])
     * ```
     */
    write<R1 extends PathT>(f1: (a1: PathT) => R1): R1;
  }
  interface FpReturnAsync<PathT> extends FpReturnBase<PathT> {
    /**
     * @description Writes the change to the database, based on the callback's return value.
     * @example
     * ```js
     *  posts.write((allPosts) => [...allPosts, {title: 'Yup!'}])
     * ```
     */
    write<R1 extends PathT>(f1: (a1: PathT) => R1): Promise<R1>;
  }

  interface lowdb {
    <AdapterT extends AdapterAsync>(adapter: AdapterT): Promise<LowdbAsync<AdapterT[ReferenceProperty]>>;
    <AdapterT extends AdapterSync>(adapter: AdapterT): LowdbSync<AdapterT[ReferenceProperty]>;
  }

  interface lowdbFp {
    <AdapterT extends AdapterAsync>(adapter: AdapterT): Promise<LowdbFpAsync<AdapterT[ReferenceProperty]>>;
    <AdapterT extends AdapterSync>(adapter: AdapterT): LowdbFpSync<AdapterT[ReferenceProperty]>;
  }
}

type ReferenceProperty = "@@reference";
