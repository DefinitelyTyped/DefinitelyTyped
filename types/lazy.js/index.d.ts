// Type definitions for Lazy.js 0.5.1
// Project: https://github.com/dtao/lazy.js/
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 Mike Doughty <https://github.com/miso440>
//                 Gabriel Lorquet <https://github.com/gablorquet>
//                 Alexey Gerasimov <https://github.com/fan-tom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

declare namespace LazyJS {
    interface LazyStatic {
      (value: string): StringLikeSequence;
      <T>(value: T[]): ArrayLikeSequence<T>;
      (value: any[]): ArrayLikeSequence<any>;
      <T>(value: any): ObjectLikeSequence<T>;
      (value: any): ObjectLikeSequence<any>;

      strict(): LazyStatic;

      generate<T>(
        generatorFn: GeneratorCallback<T>,
        length?: number
      ): GeneratedSequence<T>;

      range(to: number): GeneratedSequence<number>;
      range(from: number, to: number, step?: number): GeneratedSequence<number>;

      repeat<T>(value: T, count?: number): GeneratedSequence<T>;

      on<T>(eventType: string): Sequence<T>;

      readFile(path: string): StringLikeSequence;
      makeHttpRequest(path: string): StringLikeSequence;
    }

    interface ArrayLike<T> {
      length: number;
      [index: number]: T;
    }

    interface Callback {
      (): void;
    }

    interface ErrorCallback {
      (error: any): void;
    }

    interface ValueCallback<T> {
      (value: T): void;
    }

    interface GetKeyCallback<T> {
      (value: T): string;
    }

    interface TestCallback<T, U> {
      (value: T, index: U): boolean;
    }

    interface MapCallback<T, U> {
      (value: T): U;
    }

    interface MapStringCallback {
      (value: string): string;
    }

    interface NumberCallback<T> {
      (value: T): number;
    }

    interface MemoCallback<T, U> {
      (memo: U, value: T): U;
    }

    interface GeneratorCallback<T> {
      (index: number): T;
    }

    interface CompareCallback {
      (x: any, y: any): number;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    interface Iterator<T> {
      new (sequence: Sequence<T>): Iterator<T>;
      current(): T;
      moveNext(): boolean;
    }

    interface GeneratedSequence<T> extends Sequence<T> {
      new (generatorFn: GeneratorCallback<T>, length: number): GeneratedSequence<
        T
      >;
      length(): number;
    }

    interface AsyncSequence<T> extends SequenceBase<T> {
      each(callback: ValueCallback<T>): AsyncHandle<T>;
    }

    interface AsyncHandle<T> {
      cancel(): void;
      onComplete(callback: Callback): void;
      onError(callback: ErrorCallback): void;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    namespace Sequence {
      function define(methodName: string[], overrides: any): Function;
    }

    interface Sequence<T> extends SequenceBase<T> {
      each(eachFn: ValueCallback<T>): Sequence<T>;
    }

    interface SequenceBase<T> extends SequenceBaser<T> {
      first(): any;
      first(count: number): Sequence<T>;
      indexOf(value: any, startIndex?: number): number;

      last(): any;
      last(count: number): Sequence<T>;
      lastIndexOf(value: any): number;

      reverse(): Sequence<T>;
    }

    type Flatten<T, Shallow extends boolean> =
        Shallow extends true
            ? T extends Sequence<infer U>
              ? U
              : T
            // workaround for https://github.com/microsoft/TypeScript/issues/26980
            : {
                0: T extends Sequence<infer U>
                    ? Flatten<U, Shallow>
                    : T extends Array<infer U>
                        ? Flatten<U, Shallow>
                        : T extends ReadonlyArray<infer U>
                            ? Flatten<U, Shallow>
                            : never;
                1: T;
            } [T extends Sequence<any> ? 0 : T extends any[] ? 0 : T extends ReadonlyArray<any> ? 0 : 1];

    type PushFront<TailT extends any[], FrontT> = (
        ((front: FrontT, ...rest: TailT) => any) extends ((...tuple: infer TupleT) => any) ?
            TupleT :
            never
        );

    type Tuple<ElementT, LengthT extends number, OutputT extends any[] = []> = {
        0: ElementT[],
        1: unknown,
        2: OutputT,
        3: Tuple<ElementT, LengthT, PushFront<OutputT, ElementT>>,
    }[
        // LengthT is not compile-time constant
        number extends LengthT
            ? 0
            // LengthT is 0 constant, forbidden
            : LengthT extends 0
            ? 1
            // LengthT = OutputT["length']
            : OutputT["length"] extends LengthT
                ? 2
                // we need to go deeper
                : 3
        ];

    interface SequenceBaser<T> {
      // TODO improve define() (needs ugly overload)
      async(interval: number): AsyncSequence<T>;
      chunk<N extends number>(size: N): Sequence<Tuple<T, N>>;
      compact(): Sequence<T>;
      concat(var_args: T[]): Sequence<T>;
      consecutive(length: number): Sequence<T>;
      contains(value: T): boolean;
      countBy(keyFn: GetKeyCallback<T>): ObjectLikeSequence<T>;
      countBy(propertyName: string): ObjectLikeSequence<T>;
      dropWhile(predicateFn: TestCallback<T, string | number>): Sequence<T>;
      every(predicateFn: TestCallback<T, string | number>): boolean;
      filter(predicateFn: TestCallback<T, string | number>): Sequence<T>;
      find(predicateFn: TestCallback<T, string | number>): T;
      findWhere(properties: any): T;
      flatten(shallow: true): Sequence<Flatten<T, true>>;
      flatten(shallow?: false): Sequence<Flatten<T, false>>;
      groupBy(keyFn: GetKeyCallback<T>): ObjectLikeSequence<T>;
      initial(count?: number): Sequence<T>;
      intersection(var_args: T[]): Sequence<T>;
      invoke(methodName: string): Sequence<T>;
      isEmpty(): boolean;
      join(delimiter?: string): string;
      map<U>(mapFn: MapCallback<T, U>): Sequence<U>;
      max(valueFn?: NumberCallback<T>): T;
      min(valueFn?: NumberCallback<T>): T;
      none(valueFn?: TestCallback<T, string | number>): boolean;
      pluck(propertyName: string): Sequence<any>;
      reduce<U>(aggregatorFn: MemoCallback<T, U>, memo?: U): U;
      reduceRight<U>(aggregatorFn: MemoCallback<T, U>, memo: U): U;
      reject(predicateFn: TestCallback<T, string | number>): Sequence<T>;
      rest(count?: number): Sequence<T>;
      shuffle(): Sequence<T>;
      size(): number;
      some(predicateFn?: TestCallback<T, string | number>): boolean;
      sort(sortFn?: CompareCallback, descending?: boolean): Sequence<T>;
      sortBy(sortFn: NumberCallback<T>, descending?: boolean): Sequence<T>;
      sortBy(sortFn: string, descending?: boolean): Sequence<T>;
      sortedIndex(value: T): number;
      sum(valueFn?: NumberCallback<T>): number;
      takeWhile(predicateFn: TestCallback<T, string | number>): Sequence<T>;
      toArray(): T[];
      toObject(): any;
      union(var_args: T[]): Sequence<T>;
      uniq(key?: keyof T): Sequence<T>;
      where(properties: any): Sequence<T>;
      without(...var_args: T[]): Sequence<T>;
      without(var_args: T[]): Sequence<T>;
      zip(var_args: T[]): Sequence<T>;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    namespace ArrayLikeSequence {
      function define(methodName: string[], overrides: any): Function;
    }

    interface ArrayLikeSequence<T> extends Sequence<T> {
      // define()X;
      concat(var_args: T[]): ArrayLikeSequence<T>;
      first(): T;
      first(count?: number): ArrayLikeSequence<T>;
      get(index: number): T;
      length(): number;
      map<U>(mapFn: MapCallback<T, U>): ArrayLikeSequence<U>;
      pop(): ArrayLikeSequence<T>;
      push(value: T): ArrayLikeSequence<T>;
      rest(count?: number): ArrayLikeSequence<T>;
      reverse(): ArrayLikeSequence<T>;
      shift(): ArrayLikeSequence<T>;
      slice(begin: number, end?: number): ArrayLikeSequence<T>;
      unshift(value: T): ArrayLikeSequence<T>;

      dropWhile(predicateFn: TestCallback<T, number>): Sequence<T>;
      every(predicateFn: TestCallback<T, number>): boolean;
      filter(predicateFn: TestCallback<T, number>): Sequence<T>;
      find(predicateFn: TestCallback<T, number>): T;
      none(valueFn?: TestCallback<T, number>): boolean;
      reject(predicateFn: TestCallback<T, number>): Sequence<T>;
      some(predicateFn?: TestCallback<T, number>): boolean;
      takeWhile(predicateFn: TestCallback<T, number>): Sequence<T>;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    namespace ObjectLikeSequence {
      function define(methodName: string[], overrides: any): Function;
    }

    interface ObjectLikeSequence<T> extends Sequence<T> {
      assign(other: any): ObjectLikeSequence<T>;
      // throws error
      //async(): X;
      defaults(defaults: any): ObjectLikeSequence<T>;
      functions(): Sequence<T>;
      get(property: string): any;
      invert(): ObjectLikeSequence<T>;
      keys(): Sequence<string>;
      merge(others: any | ObjectLikeSequence<T>, mergeFn?: Function): ObjectLikeSequence<T>;
      omit(properties: string[]): ObjectLikeSequence<T>;
      pairs(): Sequence<T>;
      pick(properties: string[]): ObjectLikeSequence<T>;
      toArray(): T[];
      toObject(): any;
      values(): Sequence<T>;
      watch(propertyNames: string | string[]): Sequence<{property: string; value: any;}>;

      dropWhile(predicateFn: TestCallback<T, string>): Sequence<T>;
      every(predicateFn: TestCallback<T, string>): boolean;
      filter(predicateFn: TestCallback<T, string>): Sequence<T>;
      find(predicateFn: TestCallback<T, string>): T;
      none(valueFn?: TestCallback<T, string>): boolean;
      reject(predicateFn: TestCallback<T, string>): Sequence<T>;
      some(predicateFn?: TestCallback<T, string>): boolean;
      takeWhile(predicateFn: TestCallback<T, string>): Sequence<T>;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    namespace StringLikeSequence {
      function define(methodName: string[], overrides: any): Function;
    }

    interface StringLikeSequence extends SequenceBaser<string> {
      charAt(index: number): string;
      charCodeAt(index: number): number;
      contains(value: string): boolean;
      endsWith(suffix: string): boolean;
      first(): string;
      first(count: number): StringLikeSequence;
      indexOf(substring: string, startIndex?: number): number;
      last(): string;
      last(count: number): StringLikeSequence;
      lastIndexOf(substring: string, startIndex?: number): number;
      mapString(mapFn: MapStringCallback): StringLikeSequence;
      match(pattern: RegExp): StringLikeSequence;
      reverse(): StringLikeSequence;
      split(delimiter: RegExp): StringLikeSequence;
      split(delimiter: string): StringLikeSequence;
      startsWith(prefix: string): boolean;
      substring(start: number, stop?: number): StringLikeSequence;
      toLowerCase(): StringLikeSequence;
      toUpperCase(): StringLikeSequence;

      dropWhile(predicateFn: TestCallback<string, number>): Sequence<string>;
      every(predicateFn: TestCallback<string, number>): boolean;
      filter(predicateFn: TestCallback<string, number>): Sequence<string>;
      find(predicateFn: TestCallback<string, number>): string;
      none(valueFn?: TestCallback<string, number>): boolean;
      reject(predicateFn: TestCallback<string, number>): Sequence<string>;
      some(predicateFn?: TestCallback<string, number>): boolean;
      takeWhile(predicateFn: TestCallback<string, number>): Sequence<string>;
    }
  }

  declare var Lazy: LazyJS.LazyStatic;

  declare module 'lazy.js' {
    export = Lazy;
  }

