// Type definitions for try-to-catch 3.0
// Project: https://github.com/coderaiser/try-to-catch
// Definitions by: Coderaiser <https://github.com/coderaiser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

declare function tryToCatch<PromiseData, FnArgs extends any[]>(
  fn: (...args: FnArgs) => Promise<PromiseData>,
  ...fnArgs: FnArgs
): Promise<[Error] | [null, PromiseData]>;

declare function tryToCatch<Data, FnArgs extends any[]>(
  fn: (...args: FnArgs) => Data,
  ...fnArgs: FnArgs
): Promise<[Error] | [null, Data]>;
export = tryToCatch;
