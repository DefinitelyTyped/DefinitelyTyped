// Type definitions for should.js 3.1.2
// Project: https://github.com/visionmedia/should.js
// Definitions by: Alex Varju <https://github.com/varju/>, Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Object {
  should: ShouldAssertion;
}

interface ShouldAssertion extends TypedShouldAssertion<any> 
{
    
}

interface TypedShouldAssertion<T> {
  // basic grammar
  a: TypedShouldAssertion<T>;
  an: TypedShouldAssertion<T>;
  and: TypedShouldAssertion<T>;
  be: TypedShouldAssertion<T>;
  have: TypedShouldAssertion<T>;
  with: TypedShouldAssertion<T>;
  of: TypedShouldAssertion<T>;
  not: TypedShouldAssertion<T>;

  // validators
  arguments: TypedShouldAssertion<T>;
  empty: TypedShouldAssertion<T>;
  ok: TypedShouldAssertion<T>;
  true: TypedShouldAssertion<T>;
  false: TypedShouldAssertion<T>;
  NaN: TypedShouldAssertion<T>;
  Infinity: TypedShouldAssertion<T>;
  Array: TypedShouldAssertion<T>;
  Object: TypedShouldAssertion<T>;
  String: TypedShouldAssertion<T>;
  Boolean: TypedShouldAssertion<T>;
  Number: TypedShouldAssertion<T>;
  Error: TypedShouldAssertion<T>;
  Function: TypedShouldAssertion<T>;
  eql(expected: T, description?: string): TypedShouldAssertion<T>;
  equal(expected: T, description?: string): TypedShouldAssertion<T>;
  within(start: number, finish: number, description?: string): TypedShouldAssertion<T>;
  approximately(value: number, delta: number, description?: string): TypedShouldAssertion<T>;
  type(expected: any, description?: string): TypedShouldAssertion<T>;
  instanceof(constructor: Function, description?: string): TypedShouldAssertion<T>;
  above(n: number, description?: string): TypedShouldAssertion<T>;
  below(n: number, description?: string): TypedShouldAssertion<T>;
  match(other: {}, description?: string): TypedShouldAssertion<T>;
  match(other: (val: any) => any, description?: string): TypedShouldAssertion<T>;
  match(regexp: RegExp, description?: string): TypedShouldAssertion<T>;
  match(other: any, description?: string): TypedShouldAssertion<T>;
  matchEach(other: {}, description?: string): TypedShouldAssertion<T>;
  matchEach(other: (val: any) => any, description?: string): TypedShouldAssertion<T>;
  matchEach(regexp: RegExp, description?: string): TypedShouldAssertion<T>;
  matchEach(other: any, description?: string): TypedShouldAssertion<T>;
  length(n: number, description?: string): TypedShouldAssertion<T>;
  property(name: string, description?: string): TypedShouldAssertion<T>;
  property(name: string, val: any, description?: string): TypedShouldAssertion<T>;
  properties(names: string[]): TypedShouldAssertion<T>;
  properties(name: string): TypedShouldAssertion<T>;
  properties(descriptor: any): TypedShouldAssertion<T>;
  properties(...properties: string[]): TypedShouldAssertion<T>;
  ownProperty(name: string, description?: string): TypedShouldAssertion<T>;
  contain(obj: any): TypedShouldAssertion<T>;
  containEql(obj: any): TypedShouldAssertion<T>;
  containDeep(obj: any): TypedShouldAssertion<T>;
  keys(...allKeys: string[]): TypedShouldAssertion<T>;
  keys(allKeys: string[]): TypedShouldAssertion<T>;
  header(field: string, val?: string): TypedShouldAssertion<T>;
  status(code: number): TypedShouldAssertion<T>;
  json: TypedShouldAssertion<T>;
  html: TypedShouldAssertion<T>;
  startWith(expected: string, message?: any): TypedShouldAssertion<T>;
  endWith(expected: string, message?: any): TypedShouldAssertion<T>;
  throw(message?: any): TypedShouldAssertion<T>;

  // deprecated
  include(obj: any, description?: string): TypedShouldAssertion<T>;
  includeEql(obj: any[], description?: string): TypedShouldAssertion<T>;

  // aliases
  exactly(expected: any, description?: string): TypedShouldAssertion<T>;
  instanceOf(constructor: Function, description?: string): TypedShouldAssertion<T>;
  throwError(message?: any): TypedShouldAssertion<T>;
  lengthOf(n: number, description?: string): TypedShouldAssertion<T>;
  key(key: string): TypedShouldAssertion<T>;
  haveOwnProperty(name: string, description?: string): TypedShouldAssertion<T>;
  greaterThan(n: number, description?: string): TypedShouldAssertion<T>;
  lessThan(n: number, description?: string): TypedShouldAssertion<T>;
}

interface ShouldInternal {
  // should.js's extras
  <T>(obj: T): TypedShouldAssertion<T>;  
  exist(actual: any, msg?: string): void;
  exists(actual: any, msg?: string): void;
  not: ShouldInternal;
}

interface Internal extends ShouldInternal {
  // node.js's assert functions
  fail(actual: any, expected: any, message: string, operator: string): void;
  assert(value: any, message: string): void;
  ok(value: any, message?: string): void;
  equal<T>(actual: T, expected: T, message?: string): void;
  notEqual<T>(actual: T, expected: T, message?: string): void;
  deepEqual<T>(actual: T, expected: T, message?: string): void;
  notDeepEqual<T>(actual: T, expected: T, message?: string): void;
  strictEqual<T>(actual: T, expected: T, message?: string): void;
  notStrictEqual<T>(actual: T, expected: T, message?: string): void;
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
