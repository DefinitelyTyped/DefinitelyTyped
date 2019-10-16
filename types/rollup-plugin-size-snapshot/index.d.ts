// Type definitions for rollup-plugin-size-snapshot 0.10
// Project: https://github.com/TrySound/rollup-plugin-size-snapshot
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />
import { Plugin } from 'rollup';

export interface PluginSizeSnapshotOptions {
    snapshotPath?: string;
    matchSnapshot?: boolean;
    threshold?: number;
    printInfo?: boolean;
}

export function sizeSnapshot(options?: PluginSizeSnapshotOptions): Plugin;
