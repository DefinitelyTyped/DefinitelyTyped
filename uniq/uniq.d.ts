// Type definitions for uniq
// Project: https://www.npmjs.com/package/uniq
// Definitions by: Hans Windhoff <https://github.com/hansrwindhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface Uniq{
  <T>(ip:Array<T>): Array<T>;
}

declare var uniq :Uniq;

declare module "uniq" {
export = uniq;
}
