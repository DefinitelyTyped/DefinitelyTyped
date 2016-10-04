// Type definitions for Seamless-immutable 6.1.3
// Project: https://github.com/rtfeldman/seamless-immutable
// Definitions by: alex3165 <https://github.com/alex3165>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Copyright (c) 2016, Richard Feldman
// All rights reserved.

// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:

// * Redistributions of source code must retain the above copyright notice, this
//   list of conditions and the following disclaimer.

// * Redistributions in binary form must reproduce the above copyright notice,
//   this list of conditions and the following disclaimer in the documentation
//   and/or other materials provided with the distribution.

// * Neither the name of seamless-immutable nor the names of its
//   contributors may be used to endorse or promote products derived from
//   this software without specific prior written permission.

declare namespace SeamlessImmutable {
  interface MergeConfig {
    deep?: boolean;
    merger?: Function;
  }

  interface Options {
    prototype?: any;
  }

  interface AsMutableOptions {
    deep: boolean;
  }

  export interface ImmutableObject<T> {
    set(property: string, value: any): ImmutableObject<any>;
    setIn(propertyPath: Array<string>, value: any): Immutable<any>;

    asMutable(): T;
    asMutable(opts: AsMutableOptions): T;

    merge(part: any, config?: MergeConfig): ImmutableObject<T>;

    update(property: string, updaterFunction: (value: any) => any): ImmutableObject<T>;
    update(property: string, updaterFunction: (value: any, additionalParameter1: any) => any, arg1: any): ImmutableObject<T>;
    update(property: string, updaterFunction: (value: any, additionalParameter1: any, additionalParameter2: any) => any, arg1: any, arg2: any): ImmutableObject<T>;
    update(property: string, updaterFunction: (value: any, additionalParameter1: any, additionalParameter2: any, additionalParameter3: any) => any, arg1: any, arg2: any, arg3: any): ImmutableObject<T>;
    update(property: string, updaterFunction: (value: any, additionalParameter1: any, additionalParameter2: any, additionalParameter3: any, additionalParameter4: any) => any, arg1: any, arg2: any, arg3: any, arg4: any): ImmutableObject<T>;

    updateIn(propertyPath: Array<string>, updaterFunction: (value: any) => any): ImmutableObject<T>;
    updateIn(propertyPath: Array<string>, updaterFunction: (value: any, additionalParameter1: any) => any, arg1: any): ImmutableObject<T>;
    updateIn(propertyPath: Array<string>, updaterFunction: (value: any, additionalParameter1: any, additionalParameter2: any) => any, arg1: any, arg2: any): ImmutableObject<T>;
    updateIn(propertyPath: Array<string>, updaterFunction: (value: any, additionalParameter1: any, additionalParameter2: any, additionalParameter3: any) => any, arg1: any, arg2: any, arg3: any): ImmutableObject<T>;
    updateIn(propertyPath: Array<string>, updaterFunction: (value: any, additionalParameter1: any, additionalParameter2: any, additionalParameter3: any, additionalParameter4: any) => any, arg1: any, arg2: any, arg3: any): ImmutableObject<T>;

    without(property: string): ImmutableObject<any>;
    without(propertyPath: string[]): ImmutableObject<any>;
    without(...properties: string[]): ImmutableObject<any>;
    without(filter: (value: any, key: string) => boolean): ImmutableObject<any>;
  }

  export interface ImmutableArray<T> {
    asMutable(): Array<T>;
    asMutable(opts: AsMutableOptions): Array<T>;
    asObject(toKeyValue: (item: T) => Array<any>): ImmutableObject<T>;
    flatMap(mapFunction: (item: T) => Array<any>): ImmutableArray<any>;
  }

  // an immutable object is both of Type T (i.e., looks like a normal T) and of type Immutable<T>
  export type Immutable<T> = T & (ImmutableObject<T> | ImmutableArray<T>);

  export function from<T>(obj: Array<T>, options?: Options): Array<T> & ImmutableArray<T>;
  export function from<T>(obj: T, options?: Options): T & ImmutableObject<T>;

  export function isImmutable(target: any): boolean;
  export function ImmutableError(message: string): Error;
}

declare module "seamless-immutable" {
  export = SeamlessImmutable;
}
