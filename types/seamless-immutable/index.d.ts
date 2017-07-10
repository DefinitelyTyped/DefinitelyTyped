// Type definitions for Seamless-immutable 6.1.3
// Project: https://github.com/rtfeldman/seamless-immutable
// Definitions by: alex3165 <https://github.com/alex3165>
//                 Stepan Burguchev <https://github.com/xsburg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// This project is licensed under the MIT license.
// Copyrights are respective of each contributor listed at the beginning of each definition file.

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

export = SeamlessImmutable;

declare namespace SeamlessImmutable {
    type DeepPartial<T> = {
        [P in keyof T]?: DeepPartial<T[P]>;
    };

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

    interface IImmutableObject<T> {
        set<K extends keyof T>(property: K, value: T[K]): ImmutableObject<T>;
        set<TValue>(property: string, value: TValue): ImmutableObject<T>;

        setIn<K extends keyof T>
            (propertyPath: [ K ], value: T[K]): ImmutableObject<T>;
        setIn<K extends keyof T, L extends keyof T[K]>
            (propertyPath: [ K, L ], value: T[K][L]): ImmutableObject<T>;
        setIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>
            (propertyPath: [ K, L, M ], value: T[K][L][M]): ImmutableObject<T>;
        setIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>
            (propertyPath: [ K, L, M, N ], value: T[K][L][M][N]): ImmutableObject<T>;
        setIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M], O extends keyof T[K][L][M][N]>
            (propertyPath: [ K, L, M, N, O ], value: T[K][L][M][N][O]): ImmutableObject<T>;
        setIn<TValue>(propertyPath: string[], value: TValue): ImmutableObject<T>;

        asMutable(): T;
        asMutable(opts: AsMutableOptions): T;

        merge(part: DeepPartial<T>, config?: MergeConfig): ImmutableObject<T>;

        update<K extends keyof T>(property: K, updaterFunction: (value: T[K], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;
        update<TValue>(property: string, updaterFunction: (value: TValue, ...additionalParameters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;

        updateIn<K extends keyof T>
            (propertyPath: [ K ], updaterFunction: (value: T[K], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;
        updateIn<K extends keyof T, L extends keyof T[K]>
            (propertyPath: [ K, L ], updaterFunction: (value: T[K][L], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;
        updateIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>
            (propertyPath: [ K, L, M ], updaterFunction: (value: T[K][L][M], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;
        updateIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>
            (propertyPath: [ K, L, M, N ], updaterFunction: (value: T[K][L][M][N], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;
        updateIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M], O extends keyof T[K][L][M][N]>
            (propertyPath: [ K, L, M, N, O ], updaterFunction: (value: T[K][L][M][N][O], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;
        updateIn<TValue>(propertyPath: string[], updaterFunction: (value: TValue, ...additionalParameters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;

        without(property: keyof T): ImmutableObject<T>;
        without(...properties: Array<keyof T>): ImmutableObject<T>;
        without(filter: (value: T[keyof T], key: keyof T) => boolean): ImmutableObject<T>;
    }

    interface IImmutableArray<T> {
        asMutable(): Array<T>;
        asMutable(opts: AsMutableOptions): Array<T>;
        asObject(toKeyValue: (item: T) => [string, any]): ImmutableObject<any>;
        flatMap<TTarget>(mapFunction: (item: T) => Array<TTarget>): ImmutableArray<TTarget>;
    }

    export type ImmutableObject<T> = T & IImmutableObject<T>;
    export type ImmutableArray<T> = Array<T> & IImmutableArray<T>;
    export type Immutable<T> = ImmutableObject<T> | ImmutableArray<T>;

    export function from<T>(obj: Array<T>, options?: Options): ImmutableArray<T>;
    export function from<T>(obj: T, options?: Options): ImmutableObject<T>;

    export function isImmutable(target: any): boolean;
    export function ImmutableError(message: string): Error;
}
