// Type definitions for once v1.3.3
// Project: https://github.com/isaacs/once
// Definitions by: Denis Sokolov <https://github.com/denis-sokolov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface SimpleFunction<Result> {
  (...args: any[]): Result;
}

interface OnceFunction<Result> extends SimpleFunction<Result> {
  called: boolean;
  value: Result;
}

interface Once {
  <Result>(f: SimpleFunction<Result>): OnceFunction<Result>;
  proto: Function;
}

declare module "once" {
  var once: Once;
  export default once;
}
