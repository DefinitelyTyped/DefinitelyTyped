/// <reference types="node" />
import { Plugin } from "rollup";

export interface PluginSizeSnapshotOptions {
    snapshotPath?: string | undefined;
    matchSnapshot?: boolean | undefined;
    threshold?: number | undefined;
    printInfo?: boolean | undefined;
}

export function sizeSnapshot(options?: PluginSizeSnapshotOptions): Plugin;
