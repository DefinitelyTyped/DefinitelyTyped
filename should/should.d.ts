// Type definitions for should.js v8.1.1
// Project: https://github.com/shouldjs/should.js
// Definitions by: Alex Varju <https://github.com/varju/>, Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Object {
  should: ShouldAssertion;
}

interface ShouldAssertion {
  // basic grammar
  a: ShouldAssertion;
  an: ShouldAssertion;
  and: ShouldAssertion;
  be: ShouldAssertion;
  has: ShouldAssertion;
  have: ShouldAssertion;
  is: ShouldAssertion;
  it: ShouldAssertion;
  with: ShouldAssertion;
  which: ShouldAssertion;
  the: ShouldAssertion;
  of: ShouldAssertion;
  not: ShouldAssertion;

  // validators
  arguments(): ShouldAssertion;
  empty(): ShouldAssertion;
  ok(): ShouldAssertion;
  true(): ShouldAssertion;
  false(): ShouldAssertion;
  NaN(): ShouldAssertion;
  Infinity(): ShouldAssertion;
  Array(): ShouldAssertion;
  Object(): ShouldAssertion;
  String(): ShouldAssertion;
  Boolean(): ShouldAssertion;
  Number(): ShouldAssertion;
  Error(): ShouldAssertion;
  Function(): ShouldAssertion;
  Date(): ShouldAssertion;
  Class(): ShouldAssertion;
  generator(): ShouldAssertion;
  iterable(): ShouldAssertion;
  iterator(): ShouldAssertion;
  eql(expected: any, description?: string): ShouldAssertion;
  equal(expected: any, description?: string): ShouldAssertion;
  equalOneOf(...values: any[]): ShouldAssertion;
  within(start: number, finish: number, description?: string): ShouldAssertion;
  approximately(value: number, delta: number, description?: string): ShouldAssertion;
  type(expected: any, description?: string): ShouldAssertion;
  instanceof(constructor: Function, description?: string): ShouldAssertion;
  above(n: number, description?: string): ShouldAssertion;
  below(n: number, description?: string): ShouldAssertion;
  aboveOrEqual(n: number, description?: string): ShouldAssertion;
  greaterThanOrEqual(n: number, description?: string): ShouldAssertion;
  belowOrEqual(n: number, description?: string): ShouldAssertion;
  lessThanOrEqual(n: number, description?: string): ShouldAssertion;
  match(other: {}, description?: string): ShouldAssertion;
  match(other: (val: any) => any, description?: string): ShouldAssertion;
  match(regexp: RegExp, description?: string): ShouldAssertion;
  match(other: any, description?: string): ShouldAssertion;
  matchEach(other: {}, description?: string): ShouldAssertion;
  matchEach(other: (val: any) => any, description?: string): ShouldAssertion;
  matchEach(regexp: RegExp, description?: string): ShouldAssertion;
  matchEach(other: any, description?: string): ShouldAssertion;
  matchAny(other: {}, description?: string): ShouldAssertion;
  matchAny(other: (val: any) => any, description?: string): ShouldAssertion;
  matchAny(regexp: RegExp, description?: string): ShouldAssertion;
  matchAny(other: any, description?: string): ShouldAssertion;
  length(n: number, description?: string): ShouldAssertion;
  property(name: string, description?: string): ShouldAssertion;
  property(name: string, val: any, description?: string): ShouldAssertion;
  properties(names: string[]): ShouldAssertion;
  properties(name: string): ShouldAssertion;
  properties(descriptor: any): ShouldAssertion;
  properties(...properties: string[]): ShouldAssertion;
  propertyByPath(...properties: string[]): ShouldAssertion;
  propertyWithDescriptor(name: string, descriptor: PropertyDescriptor): ShouldAssertion;
  oneOf(...values: any[]): ShouldAssertion;
  ownProperty(name: string, description?: string): ShouldAssertion;
  containEql(obj: any): ShouldAssertion;
  containDeep(obj: any): ShouldAssertion;
  containDeepOrdered(obj: any): ShouldAssertion;
  keys(...allKeys: string[]): ShouldAssertion;
  keys(allKeys: string[]): ShouldAssertion;
  enumerable(property: string, value?: any): ShouldAssertion;
  enumerables(...properties: string[]): ShouldAssertion;
  startWith(expected: string, message?: any): ShouldAssertion;
  endWith(expected: string, message?: any): ShouldAssertion;
  throw(message?: any): ShouldAssertion;

  //http
  header(field: string, val?: string): ShouldAssertion;
  status(code: number): ShouldAssertion;
  json(): ShouldAssertion;
  html(): ShouldAssertion;

  //stubs
  alwaysCalledOn(thisTarget: any): ShouldAssertion;
  alwaysCalledWith(...arguments: any[]): ShouldAssertion;
  alwaysCalledWithExactly(...arguments: any[]): ShouldAssertion;
  alwaysCalledWithMatch(...arguments: any[]): ShouldAssertion;
  alwaysCalledWithNew(): ShouldAssertion;
  alwaysThrew(exception?: any): ShouldAssertion;
  callCount(count: number): ShouldAssertion;
  called(): ShouldAssertion;
  calledOn(thisTarget: any): ShouldAssertion;
  calledOnce(): ShouldAssertion;
  calledTwice(): ShouldAssertion;
  calledThrice(): ShouldAssertion;
  calledWith(...arguments: any[]): ShouldAssertion;
  calledWithExactly(...arguments: any[]): ShouldAssertion;
  calledWithMatch(...arguments: any[]): ShouldAssertion;
  calledWithNew(): ShouldAssertion;
  neverCalledWith(...arguments: any[]): ShouldAssertion;
  neverCalledWithMatch(...arguments: any[]): ShouldAssertion;
  threw(exception?: any): ShouldAssertion;

  // aliases
  True(): ShouldAssertion;
  False(): ShouldAssertion;
  Arguments(): ShouldAssertion;
  class(): ShouldAssertion;
  deepEqual(expected: any, description?: string): ShouldAssertion;
  exactly(expected: any, description?: string): ShouldAssertion;
  instanceOf(constructor: Function, description?: string): ShouldAssertion;
  throwError(message?: any): ShouldAssertion;
  lengthOf(n: number, description?: string): ShouldAssertion;
  key(key: string): ShouldAssertion;
  hasOwnProperty(name: string, description?: string): ShouldAssertion;
  greaterThan(n: number, description?: string): ShouldAssertion;
  lessThan(n: number, description?: string): ShouldAssertion;
}

interface ShouldInternal {
  // should.js's extras
  exist(actual: any, msg?: string): void;
  exists(actual: any, msg?: string): void;
  not: ShouldInternal;
}

interface Internal extends ShouldInternal {
  (obj: any): ShouldAssertion;

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
  inspect(value: any, obj: any): any;
}

declare var should: Internal;
declare var Should: Internal;
interface Window {
  Should: Internal;
}

declare module "should" {
  export = should;
}
