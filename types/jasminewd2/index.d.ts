// Type definitions for jasminewd2 2.0
// Project: https://github.com/angular/jasminewd
// Definitions by: Sammy Jelin <https://github.com/sjelin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="jasmine" />

declare function it(expectation: string, assertion?: () => Promise<void>, timeout?: number): void;
declare function fit(expectation: string, assertion?: () => Promise<void>, timeout?: number): void;
declare function xit(expectation: string, assertion?: () => Promise<void>, timeout?: number): void;
declare function beforeEach(action: () => Promise<void>, timeout?: number): void;
declare function afterEach(action: () => Promise<void>, timeout?: number): void;
declare function beforeAll(action: () => Promise<void>, timeout?: number): void;
declare function afterAll(action: () => Promise<void>, timeout?: number): void;

declare namespace jasmine {
  // The global `Promise` type is too strict and kinda wrong
  interface Promise<T> {
    then<U>(onFulfill?: (value: T) => U | Promise<U>, onReject?: (error: any) => U | Promise<U>): Promise<U>;
  }

  interface Matchers<T> {
    toBe(expected: any, expectationFailOutput?: any): Promise<void>;
    toEqual(expected: any, expectationFailOutput?: any): Promise<void>;
    toMatch(expected: string | RegExp | Promise<string | RegExp>, expectationFailOutput?: any): Promise<void>;
    toBeDefined(expectationFailOutput?: any): Promise<void>;
    toBeUndefined(expectationFailOutput?: any): Promise<void>;
    toBeNull(expectationFailOutput?: any): Promise<void>;
    toBeNaN(): Promise<void>;
    toBeTruthy(expectationFailOutput?: any): Promise<void>;
    toBeFalsy(expectationFailOutput?: any): Promise<void>;
    toHaveBeenCalled(): Promise<void>;
    toHaveBeenCalledWith(...params: any[]): Promise<void>;
    toHaveBeenCalledTimes(expected: number | Promise<number>): Promise<void>;
    toContain(expected: any, expectationFailOutput?: any): Promise<void>;
    toBeLessThan(expected: number | Promise<number>, expectationFailOutput?: any): Promise<void>;
    toBeLessThanOrEqual(expected: number | Promise<number>, expectationFailOutput?: any): Promise<void>;
    toBeGreaterThan(expected: number | Promise<number>, expectationFailOutput?: any): Promise<void>;
    toBeGreaterThanOrEqual(expected: number | Promise<number>, expectationFailOutput?: any): Promise<void>;
    toBeCloseTo(expected: number | Promise<number>, precision?: any, expectationFailOutput?: any): Promise<void>;
    toThrow(expected?: any): Promise<void>;
    toThrowError(message?: string | RegExp | Promise<string | RegExp>): Promise<void>;
    toThrowError(expected?: new (...args: any[]) => Error | Promise<new (...args: any[]) => Error>, message?: string | RegExp | Promise<string | RegExp>): Promise<void>;
  }

  interface ArrayLikeMatchers<T> extends Matchers<ArrayLike<T>> {
    toBe(expected: Expected<ArrayLike<T>>, expectationFailOutput?: any): Promise<void>;
    toEqual(expected: Expected<ArrayLike<T>>, expectationFailOutput?: any): Promise<void>;
    toContain(expected: T, expectationFailOutput?: any): Promise<void>;
    not: ArrayLikeMatchers<T>;
  }

  function addMatchers(matchers: AsyncCustomMatcherFactories): void;

  interface Env {
    addMatchers(matchers: AsyncCustomMatcherFactories): void;
  }

  interface Spec {
    addMatchers(matchers: AsyncCustomMatcherFactories): void;
  }

  interface AsyncCustomMatcherFactories {
    [index: string]: AsyncCustomMatcherFactory;
  }

  interface AsyncCustomMatcherFactory {
    (util: MatchersUtil, customEqualityTesters: CustomEqualityTester[]): AsyncCustomMatcher;
  }

  interface AsyncCustomMatcher {
    compare<T>(actual: T, expected: T): AsyncCustomMatcherResult;
    compare(actual: any, expected: any): AsyncCustomMatcherResult;
  }

  interface AsyncCustomMatcherResult {
    pass: boolean | Promise<boolean>;
    message?: string;
  }
}
