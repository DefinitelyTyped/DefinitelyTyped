// Type definitions for should.js 1.2.2
// Project: https://github.com/visionmedia/should.js
// Definitions by: Alex Varju <https://github.com/varju/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Object {
  should: ShouldAssertion;
}

interface ShouldAssertion {
  // basic grammar
  an: ShouldAssertion;
  // a: ShouldAssertion;
  and: ShouldAssertion;
  be: ShouldAssertion;
  have: ShouldAssertion;
  with: ShouldAssertion;
  not: ShouldAssertion;

  // validators
  arguments: ShouldAssertion;
  empty: ShouldAssertion;
  ok: ShouldAssertion;
  true: ShouldAssertion;
  false: ShouldAssertion;
  eql(expected: any, description?: string): ShouldAssertion;
  equal(expected: any, description?: string): ShouldAssertion;
  within(start: number, finish: number, description?: string): ShouldAssertion;
  approximately(value: number, delta: number, description?: string): ShouldAssertion;
  a(expected: any, description?: string): ShouldAssertion;
  instanceof(constructor: Function, description?: string): ShouldAssertion;
  above(n: number, description?: string): ShouldAssertion;
  below(n: number, description?: string): ShouldAssertion;
  match(regexp: RegExp, description?: string): ShouldAssertion;
  length(n: number, description?: string): ShouldAssertion;
  property(name: string, description?: string): ShouldAssertion;
  property(name: string, val: any, description?: string): ShouldAssertion;
  ownProperty(name: string, description?: string): ShouldAssertion;
  include(obj: any, description?: string): ShouldAssertion;
  includeEql(obj: Array, description?: string): ShouldAssertion;
  contain(obj: any): ShouldAssertion;
  keys(...allKeys: string[]): ShouldAssertion;
  keys(allKeys: string[]): ShouldAssertion;
  header(field: string, val?: string): ShouldAssertion;
  status(code: number): ShouldAssertion;
  json: ShouldAssertion;
  html: ShouldAssertion;
  throw(message?: any): ShouldAssertion;

  // aliases
  instanceOf(constructor: Function, description?: string): ShouldAssertion;
  throwError(message?: any): ShouldAssertion;
  lengthOf(n: number, description?: string): ShouldAssertion;
  key(key: string): ShouldAssertion;
  haveOwnProperty(name: string, description?: string): ShouldAssertion;
  greaterThan(n: number, description?: string): ShouldAssertion;
  lessThan(n: number, description?: string): ShouldAssertion;
}

interface ShouldInternal {
  // should.js's extras
  exist(actual: any): void;
  exists(actual: any): void;
  not: ShouldInternal;
}

interface Internal extends ShouldInternal {
  // node.js's assert functions
  fail(actual: any, expected: any, message: string, operator: string): void;
  assert(value: any, message: string): void;
  ok(value: any, message?: string): void;
  equal(actual: any, expected: any, message?: string): void;
  notEqual(actual: any, expected: any, message?: string): void;
  deepEqual(actual: any, expected: any, message?: string): void;
  notDeepEqual(actual: any, expected: any, message?: string): void;
  strictEqual(actual: any, expected: any, message?: string): void;
  notStrictEqual(actual: any, expected: any, message?: string): void;
  throws(block: any, error?: any, message?: string): void;
  doesNotThrow(block: any, message?: string): void;
  ifError(value: any): void;
}

declare module "should" {
  export = Internal;
}
