// Type definitions for cosmiconfig 5.0
// Project: https://github.com/davidtheclark/cosmiconfig
// Definitions by: ozum <https://github.com/ozum>
//                 szeck87 <https://github.com/szeck87>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

export interface Config {
  [key: string]: any;
}

export type CosmiconfigResult = {
  config: Config;
  filePath: string;
  isEmpty?: boolean;
} | null;

export interface LoaderResult {
  config: Config | null;
  filepath: string;
}

export type SyncLoader = (filepath: string, content: string) => Config | null;
export type AsyncLoader = (filepath: string, content: string) => Config | null | Promise<object | null>;

export interface LoaderEntry {
  sync?: SyncLoader;
  async?: AsyncLoader;
}

export interface Loaders {
  [key: string]: LoaderEntry;
}

export interface Explorer {
  search(searchFrom: string): Promise<null | CosmiconfigResult>;
  searchSync(searchFrom: string): null | CosmiconfigResult;
  load(loadPath: string): Promise<CosmiconfigResult>;
  loadSync(loadPath: string): CosmiconfigResult;
  clearLoadCache(): void;
  clearSearchCache(): void;
  clearCaches(): void;
}

// These are the user options with defaults applied.
export interface ExplorerOptions {
  stopDir?: string;
  cache?: boolean;
  transform?: (result: CosmiconfigResult) => Promise<CosmiconfigResult> | CosmiconfigResult;
  packageProp?: string;
  loaders?: Loaders;
  searchPlaces?: string[];
  ignoreEmptySearchPlaces?: boolean;
}

export default function cosmiconfig(moduleName: string, options: ExplorerOptions): Explorer;
