// Type definitions for clone-deep 4.0
// Project: https://github.com/jonschlinkert/clone-deep
// Definitions by: Tanfonto <https://github.com/tanfonto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

export interface InstanceClone<T> {
  (val: T): T;
}

export default function cloneDeep<T>(
  val: T,
  instanceClone?: true | InstanceClone<T>
): T;
