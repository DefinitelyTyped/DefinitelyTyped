// Type definitions for Lowdb 1.0.0
// Project: https://github.com/typicode/lowdb
// Definitions by: typicode <https://github.com/typicode>
//                 Bazyli Brzóska <https://github.com/niieani>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { LoDashExplicitWrapper, LoDashStatic } from "lodash";

declare let Lowdb: Lowdb.lowdb;
export = Lowdb;

declare namespace Lowdb {
  export type AdapterOptions<SchemaT extends {} = any> = {
    defaultValue?: SchemaT;
    serialize?: (data: SchemaT) => string;
    deserialize?: (serializedData: string) => SchemaT;
  };

  export interface BaseAdapter<SchemaT extends Object = any>
    extends AdapterOptions<SchemaT> {
    readonly "@@reference": SchemaT;
    new <SchemaT extends {} = any>(
      source: string,
      options?: AdapterOptions<SchemaT>
    ): BaseAdapter<SchemaT>;
    source: string;
  }

  export interface AdapterSync<SchemaT extends {} = any>
    extends BaseAdapter<SchemaT> {
    new <SchemaT extends {} = any>(
      source: string,
      options?: AdapterOptions<SchemaT>
    ): AdapterSync<SchemaT>;
    readonly "@@isAsync": False;
    write(state: Object): void;
  }

  export interface AdapterAsync<SchemaT extends {} = any>
    extends BaseAdapter<SchemaT> {
    new <SchemaT extends {} = any>(
      source: string,
      options?: AdapterOptions<SchemaT>
    ): AdapterAsync<SchemaT>;
    readonly "@@isAsync": True;
    write(state: Object): Promise<void>;
  }

  export type Adapter<SchemaT extends {} = any> =
    | AdapterSync<SchemaT>
    | AdapterAsync<SchemaT>;

  export interface LowdbBase<
    SchemaT extends {},
    AdapterT extends Adapter<SchemaT>
  > {
    read: () => Wrapper<this, AdapterT>;
    getState: () => SchemaT;
    setState: (state: SchemaT) => this;
  }

  export interface Lowdb<SchemaT extends {}, AdapterT extends Adapter<SchemaT>>
    extends LowdbBase<SchemaT, AdapterT>,
      LoDashExplicitWrapper<SchemaT> {
    _: LoDashStatic;
    /**
     * @description Be careful: This function overwrites the whole database.
     */
    write<T = void>(returnValue?: T): Wrapper<T, AdapterT>;
  }

  export interface LowdbFp<
    SchemaT extends {} = any,
    AdapterT extends Adapter<SchemaT> = Adapter<SchemaT>
  > extends LowdbBase<SchemaT, AdapterT> {
    /**
     * @description Be careful: This function overwrites the whole database.
     */
    write<T = void>(returnValue?: T): Wrapper<T, AdapterT>;
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
    ): FpReturn<SchemaT[TKey], AdapterT>;
    <TKey extends keyof SchemaT, TSubKey extends keyof SchemaT[TKey]>(
      path: [TKey, TSubKey],
      defaultValue?: SchemaT[TKey][TSubKey]
    ): FpReturn<SchemaT[TKey][TSubKey], AdapterT>;
    <
      TKey extends keyof SchemaT,
      TSubKey extends keyof SchemaT[TKey],
      TSubKey2 extends keyof SchemaT[TKey][TSubKey]
    >(
      path: [TKey, TSubKey, TSubKey2],
      defaultValue?: SchemaT[TKey][TSubKey][TSubKey2]
    ): FpReturn<SchemaT[TKey][TSubKey][TSubKey2], AdapterT>;
    <
      TKey extends keyof SchemaT,
      TSubKey extends keyof SchemaT[TKey],
      TSubKey2 extends keyof SchemaT[TKey][TSubKey],
      TSubKey3 extends keyof SchemaT[TKey][TSubKey][TSubKey2]
    >(
      path: [TKey, TSubKey, TSubKey2, TSubKey3],
      defaultValue?: SchemaT[TKey][TSubKey][TSubKey2][TSubKey3]
    ): FpReturn<SchemaT[TKey][TSubKey][TSubKey2][TSubKey3], AdapterT>;
    <
      TKey extends keyof SchemaT,
      TSubKey extends keyof SchemaT[TKey],
      TSubKey2 extends keyof SchemaT[TKey][TSubKey],
      TSubKey3 extends keyof SchemaT[TKey][TSubKey][TSubKey2],
      TSubKey4 extends keyof SchemaT[TKey][TSubKey][TSubKey2][TSubKey3]
    >(
      path: [TKey, TSubKey, TSubKey2, TSubKey3, TSubKey4],
      defaultValue?: SchemaT[TKey][TSubKey][TSubKey2][TSubKey3][TSubKey4]
    ): FpReturn<SchemaT[TKey][TSubKey][TSubKey2][TSubKey3][TSubKey4], AdapterT>;
    <T = any>(path: string | Array<string>, defaultValue?: T): T;
  }
  export interface FpReturn<PathT, AdapterT extends Adapter> {
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

    /**
     * @description Writes the change to the database, based on the callback's return value.
     * @example
     * ```js
     *  posts.write((allPosts) => [...allPosts, {title: 'Yup!'}])
     * ```
     */
    write<R1 extends PathT>(f1: (a1: PathT) => R1): Wrapper<R1, AdapterT>;
  }

  export type lowdb = <
    SchemaT extends AdapterT[ReferenceProperty],
    AdapterT extends Adapter
  >(
    adapter: AdapterT
  ) => If<
    AdapterT[AsyncProperty],
    Promise<Lowdb<RecursivelyExtend<SchemaT, AsyncTag>, AdapterT>>,
    Lowdb<RecursivelyExtend<SchemaT, SyncTag>, AdapterT>
  >;

  export type lowdbFp = <
    SchemaT extends AdapterT[ReferenceProperty],
    AdapterT extends Adapter
  >(
    adapter: AdapterT
  ) => If<
    AdapterT[AsyncProperty],
    Promise<LowdbFp<SchemaT & AsyncTag, AdapterT>>,
    LowdbFp<SchemaT & SyncTag, AdapterT>
  >;

  export type Wrapper<T, AdapterT extends Adapter> = WrapInPromiseIfTrue<
    T,
    AdapterT[AsyncProperty]
  >;
}

/**
 * lodash augmentation is necessary in order not to duplicate the whole lodash definition
 * it's mostly harmless, aside from the fact that 'write' becomes a method in a lodash.chain()
 */
declare module "lodash" {
  interface LoDashExplicitWrapper<TValue> {
    write(): WrapInPromiseIfAsyncTag<TValue, GetReferenceTypeIfDefined<TValue>>;
    // override lodash's methods only if source tag is present:
    value(): GetReferenceTypeIfDefined<TValue>;
  }
}

// utility types:
type WrapInPromiseIfTrue<T, IsAsync extends Bool> = If<IsAsync, Promise<T>, T>;
type ReferenceProperty = "@@reference";
/**
 * Hidden source property for resolving to the correct type.
 * It is doubly nested so that we retain all nullability information
 */
type SourceReference<T> = {
  readonly "@@reference"?: { readonly "@@reference": T };
};
type GetReferenceParent<T, U = NonNull<T>> = NonNull<
  U[keyof U & ReferenceProperty]
>;
type GetDefinedReferenceType<
  TValue,
  SourceParent = GetReferenceParent<TValue>
> = SourceParent[keyof SourceParent & ReferenceProperty];
type AsyncProperty = "@@isAsync";
type AsyncTag = { readonly "@@reference"?: { readonly "@@isAsync"?: true } };
type SyncTag = {};
type HasAsyncTag<TaggedT, ReferenceT = GetReferenceParent<TaggedT>> = If<
  HasReferenceProperty<TaggedT>,
  UnionHasKey<keyof ReferenceT, AsyncProperty>,
  False
>;
type HasReferenceProperty<T> = UnionHasKey<keyof NonNull<T>, ReferenceProperty>;
type WrapInPromiseIfAsyncTag<
  TaggedT,
  WrappedT = GetReferenceTypeIfDefined<TaggedT>
> = WrapInPromiseIfTrue<WrappedT, HasAsyncTag<TaggedT>>;

/**
 * Resolves the hidden source type
 * while preserving nullability as much as possible
 */
type GetReferenceType<TValue, Source = GetDefinedReferenceType<TValue>> = If<
  IsEmptyType<TValue>,
  Source | undefined,
  Source
>;

type GetReferenceTypeIfDefined<T> = If<
  HasReferenceProperty<T>,
  GetReferenceType<T>,
  T
>;

type RecursivelyExtend<T, AddT> = If<
  IsArrayType<T>,
  MapArrayType<T & List<{}>, AddT>,
  MapScalarOrObjectType<T, AddT>
> &
  SourceReference<T>;

type MapScalarOrObjectType<T, AddT> = If<
  IsScalarOrInstance<T>,
  T,
  MapObjectWithPossibleArrays<T, AddT> & SourceReference<T> & AddT
>;

type MapObjectWithPossibleArrays<T, AddT> = {
  [P in keyof T]: If<
    IsArrayType<T[P]>,
    MapArrayType<T[P] & List<{}>, AddT> & SourceReference<T[P]>,
    MapScalarOrObjectType<T[P], AddT>
  >
};

type MapArrayType<Arr extends List<T>, AddT, T = Arr[-1]> = Array<
  MapObjectWithPossibleArrays<T, AddT> & SourceReference<T> & AddT
> &
  AddT;

//////////////////////////////////////////
// generic utils (some from https://github.com/tycho01/typical/):

type False = "0";
type True = "1";
type Bool = True | False;
type If<Cond extends Bool, Then, Else> = { 1: Then; 0: Else }[Cond];

type Obj<T> = { [k: string]: T };

type And<A extends Bool, B extends Bool> = ({ 1: { 1: "1" } & Obj<"0"> } & Obj<
  Obj<"0">
>)[A][B];

type UnionHasKey<Union extends string, K extends string> = ({
  [S in Union]: "1"
} &
  Obj<"0">)[K];

type Indeterminate<T extends string> = And<
  UnionHasKey<T, "0">,
  UnionHasKey<T, "1">
>;

type Not<T extends Bool> = { "1": "0"; "0": "1" }[T];

type Determinate<T extends Bool> = Not<Indeterminate<T>>;

type DefinitelyYes<T extends Bool> = And<T, Determinate<T>>;

type UnionContained<T extends string, U extends string> = DefinitelyYes<
  ({ [P in U]: "1" } & Obj<"0">)[T | U]
>;

type UnionEmpty<T extends string> = And<
  UnionContained<T, "foo">,
  UnionContained<T, "bar">
>;

type UnionToObject<Keys extends string> = { [K in Keys]: K };

type Keyed<T> = { [K in keyof T]: K };

type KeyedSafe<T> = Keyed<T> & Obj<never>;

type IntersectionUnions<Big extends string, Small extends string> = KeyedSafe<
  UnionToObject<Small>
>[Big];
type UnionsOverlap<Big extends string, Small extends string> = Not<
  UnionEmpty<IntersectionUnions<Big, Small>>
>;

type DiffUnion<T extends string, U extends string> = ({ [P in T]: P } &
  { [P in U]: never } & { [k: string]: never })[T];

type ObjectHasKey<O extends {}, K extends string> = UnionHasKey<keyof O, K>;

type ArrayPrototypeProperties = DiffUnion<
  keyof Array<any>,
  "toString" | "toLocaleString"
>;
type IsArrayType<T> = DefinitelyYes<ObjectHasKey<T, ArrayPrototypeProperties>>;
/**
 * either: undefined, never, null or {}
 * can also be used to check if one union contains one of the above
 **/
type IsEmptyType<T> = UnionEmpty<keyof T>;

/**
 * false for: undefined, interfaces
 * true for: Array, boolean, number, string, Object
 */
type IsScalarOrInstance<T> = ObjectHasKeySafe<T, "valueOf">;
type ObjectHasKeySafe<O, K extends string> = UnionsOverlap<keyof O, K>;
type NonNull<T> = T & {};

interface List<T> {
  readonly [n: number]: T;
}
