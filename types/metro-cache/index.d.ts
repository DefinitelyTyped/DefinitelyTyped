// Type definitions for metro-cache 0.66
// Project: https://github.com/facebook/metro
// Definitions by: Adam Foxman <https://github.com/afoxman>
//                 Tommy Nguyen <https://github.com/tido64>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export * from './types';

export interface MetroCache {
    AutoCleanFileStore: any;
    Cache: any;
    FileStore: any;
    HttpGetStore: any;
    HttpStore: any;
    stableHash: any;
}
