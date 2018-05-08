// Type definitions for cosmiconfig 5.0
// Project: https://github.com/davidtheclark/cosmiconfig
// Definitions by: ozum <https://github.com/ozum>
//                 szeck87 <https://github.com/szeck87>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace Cosmiconfig {
  interface Result {
    config: object;
    filePath: string;
    isEmpty?: boolean;
  }

  interface Explorer {
    search(searchFrom: string): Promise<null | Result>;
    searchSync(searchFrom: string): null | Result;
    load(loadPath: string): Promise<Result>;
    loadSync(loadPath: string): Result;
    clearLoadCache(): void;
    clearSearchCache(): void;
    clearCaches(): void;
  }

  interface Options {
    searchPlaces?: string[];
    loaders?: object;
    packageProp?: string;
    stopDir?: string;
    cache?: boolean;
    transform?: (result: Result) => Promise<Result> | Result;
    ignoreEmptySearchPlaces?: boolean;
  }
}

declare function cosmiconfig(
  moduleName: string,
  options: Cosmiconfig.Options
): Cosmiconfig.Explorer;

export = cosmiconfig;
