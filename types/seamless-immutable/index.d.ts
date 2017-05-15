// Type definitions for Seamless-immutable 6.1.3
// Project: https://github.com/rtfeldman/seamless-immutable
// Definitions by: alex3165 <https://github.com/alex3165>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// This project is licensed under the MIT license.
// Copyrights are respective of each contributor listed at the beginning of each definition file.

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

export = SeamlessImmutable;

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
    setIn(propertyPath: Array<string>, value: any): ImmutableObject<any>;

    asMutable(): T;
    asMutable(opts: AsMutableOptions): T;

    merge(part: any, config?: MergeConfig): ImmutableObject<T>;

    update(property: string, updaterFunction: (value: any, ...additionalParamters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;
    updateIn(propertyPath: Array<string>, updaterFunction: (value: any, ...additionalParamters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;

    without(property: string): ImmutableObject<any>;
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