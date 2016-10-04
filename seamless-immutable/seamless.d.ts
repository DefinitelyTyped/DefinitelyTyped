/* tslint:disable:max-line-length */

declare module 'seamless-immutable' {

  interface MergeConfig {
    deep?: boolean;
    merger?: Function;
  };

  interface Options {
    prototype?: any;
  }

  interface AsMutableOptions {
    deep: boolean;
  }

  export interface ImmutableObject<T> {

    set(property: string, value: any): ImmutableObject<T>;
    setIn(propertyPath: Array<string>, value: any): Immutable<T>;

    asMutable(): T;
    asMutable(opts: AsMutableOptions): T;

    merge(part: T, config: MergeConfig): ImmutableObject<T>;

    update(property: string, updaterFunction: (value: any) => any): ImmutableObject<T>;
    update(property: string, updaterFunction: (value: any, additionalParameter1: any) => any, arg1: any): ImmutableObject<T>;
    update(property: string, updaterFunction: (value: any, additionalParameter1: any, additionalParameter2: any) => any, arg1: any, arg2: any): ImmutableObject<T>;
    update(property: string, updaterFunction: (value: any, additionalParameter1: any, additionalParameter2: any, additionalParameter3: any) => any, arg1: any, arg2: any, arg3: any): ImmutableObject<T>;
    update(property: string, updaterFunction: (value: any, additionalParameter1: any, additionalParameter2: any, additionalParameter3: any, additionalParameter4: any) => any, arg1: any, arg2: any, arg3: any, arg4: any): ImmutableObject<T>;

    updateIn(propertyPath: Array<string>, updaterFunction: (value: any) => any): Immutable<T>;
    updateIn(propertyPath: Array<string>, updaterFunction: (value: any, additionalParameter1: any) => any, arg1: any): Immutable<T>;
    updateIn(propertyPath: Array<string>, updaterFunction: (value: any, additionalParameter1: any, additionalParameter2: any) => any, arg1: any, arg2: any): Immutable<T>;
    updateIn(propertyPath: Array<string>, updaterFunction: (value: any, additionalParameter1: any, additionalParameter2: any, additionalParameter3: any) => any, arg1: any, arg2: any, arg3: any): Immutable<T>;
    updateIn(propertyPath: Array<string>, updaterFunction: (value: any, additionalParameter1: any, additionalParameter2: any, additionalParameter3: any, additionalParameter4: any) => any, arg1: any, arg2: any, arg3: any): Immutable<T>;

    without(property: string): ImmutableObject<T>;
    without(propertyPath: string[]): ImmutableObject<T>;
    without(...properties: string[]): ImmutableObject<T>;
    without(filter: (value: any, key: string) => boolean): ImmutableObject<T>;
  }

  export interface ImmutableArray<T> {
    asMutable(): Array<T>;
    asMutable(opts: AsMutableOptions): Array<T>;
    asObject(toKeyValue: (item: T) => Array<Array<any>>): ImmutableArray<T>;
    flatMap(mapFunction: (item: T) => ImmutableArray<T>): any;
  }

  // an immutable object is both of Type T (i.e., looks like a normal T) and of type Immutable<T>
  export type Immutable<T> = T & (ImmutableObject<T> | ImmutableArray<T>);

  export function from<T>(obj: T, options?: Options): T & ImmutableObject<T>;
  export function from<T>(obj: Array<T>, options?: Options): Array<T> & ImmutableArray<T>;

  export function isImmutable(target: any): boolean;
  export function ImmutableError(message: string): Error;
}
