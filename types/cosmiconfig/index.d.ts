// Type definitions for cosmiconfig 5.0
// Project: https://github.com/davidtheclark/cosmiconfig
// Definitions by: ozum <https://github.com/ozum>
//                 szeck87 <https://github.com/szeck87>
//                 saadq <https://github.com/saadq>
//                 jinwoo <https://github.com/jinwoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

declare function cosmiconfig(moduleName: string, options?: cosmiconfig.ExplorerOptions): cosmiconfig.Explorer;

declare namespace cosmiconfig {
  interface Config {
    [key: string]: any;
  }

  type CosmiconfigResult = {
    config: Config;
    filepath: string;
    isEmpty?: boolean;
  } | null;

  interface LoaderResult {
    config: Config | null;
    filepath: string;
  }

  type SyncLoader = (filepath: string, content: string) => Config | null;
  type AsyncLoader = (filepath: string, content: string) => Config | null | Promise<object | null>;

  interface LoaderEntry {
    sync?: SyncLoader;
    async?: AsyncLoader;
  }

  interface Loaders {
    [key: string]: LoaderEntry;
  }

  interface Explorer {
    search(searchFrom?: string): Promise<null | CosmiconfigResult>;
    searchSync(searchFrom?: string): null | CosmiconfigResult;
    load(loadPath: string): Promise<CosmiconfigResult>;
    loadSync(loadPath: string): CosmiconfigResult;
    clearLoadCache(): void;
    clearSearchCache(): void;
    clearCaches(): void;
  }

  // These are the user options with defaults applied.
  interface ExplorerOptions {
    stopDir?: string;
    cache?: boolean;
    transform?: (result: CosmiconfigResult) => Promise<CosmiconfigResult> | CosmiconfigResult;
    packageProp?: string;
    loaders?: Loaders;
    searchPlaces?: string[];
    ignoreEmptySearchPlaces?: boolean;
  }
}

export = cosmiconfig;
