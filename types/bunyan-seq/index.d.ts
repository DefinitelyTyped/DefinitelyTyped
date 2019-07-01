// Type definitions for bunyan-seq 0.2
// Project: https://github.com/datalust/bunyan-seq, https://github.com/continuousit/bunyan-seq
// Definitions by: Ray Booysen <https://github.com/raybooysen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />
import * as Logger from "bunyan";
export interface Configuration {
    apiKey?: string;
    batchSizeLimit?: number;
    eventSizeLimit?: number;
    level?: string;
    maxBatchingTime?: number;
    name?: string;
    onError?: (e: Error) => void;
    reemitErrorEvents?: boolean;
    serverUrl?: string;
}

export function createStream(config: Configuration): Logger.Stream;
