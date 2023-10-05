// Type definitions for aws-greengrass-core-sdk 1.6
// Project: https://github.com/aws/aws-greengrass-core-sdk-js#readme
// Definitions by: Alister Hatt <https://github.com/ozxcorp>
//                 Harris Lummis <https://github.com/lummish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

/// <reference types="node" />
import * as StreamManager from "./stream-manager";

export interface PublishParams {
    topic: string;
    payload: Buffer | Blob | string | ArrayLike<any>;
    queueFullPolicy?: "AllOrError" | "BestEffort" | undefined;
}

export interface IotCallbackData {
    payload: Buffer | Blob | string | ArrayLike<any>;
}

export type IotCallback = (error: Error | null, data: IotCallbackData | null) => void;

export class IotData {
    constructor();
    publish(params: PublishParams, callback: IotCallback): void;
}

export const GreengrassInterfaceVersion: string;

export { StreamManager };
