// Type definitions for metro-cache 0.76
// Project: https://github.com/facebook/metro
// Definitions by: Adam Foxman <https://github.com/afoxman>
//                 Tommy Nguyen <https://github.com/tido64>
//                 Alex Hunt <https://github.com/huntie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import AutoCleanFileStore from './stores/AutoCleanFileStore';
import FileStore from './stores/FileStore';
import HttpGetStore from './stores/HttpGetStore';
import HttpStore from './stores/HttpStore';
import Cache from './Cache';
import stableHash from './stableHash';

export type { Options as FileOptions } from './stores/FileStore';
export type { Options as HttpOptions } from './stores/HttpStore';
export type { CacheStore } from './types';

export interface MetroCache {
    AutoCleanFileStore: typeof AutoCleanFileStore;
    Cache: typeof Cache;
    FileStore: typeof FileStore;
    HttpGetStore: typeof HttpGetStore;
    HttpStore: typeof HttpStore;
    stableHash: typeof stableHash;
}

export { AutoCleanFileStore, Cache, FileStore, HttpGetStore, HttpStore, stableHash };
