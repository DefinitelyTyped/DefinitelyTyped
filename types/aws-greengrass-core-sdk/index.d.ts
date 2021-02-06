// Type definitions for aws-greengrass-core-sdk 1.6
// Project: https://github.com/aws/aws-greengrass-core-sdk-js#readme
// Definitions by: Alister Hatt <https://github.com/ozxcorp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface PublishParams {
    topic: string;
    payload: Buffer | Blob | string | ArrayLike<any>;
    queueFullPolicy?: 'AllOrError' | 'BestEffort';
}

export interface IotCallbackData {
    payload: Buffer | Blob | string | ArrayLike<any>;
}

export type IotCallback = (error: Error | null, data: IotCallbackData | null) => void;

export class IotData {
    constructor();
    publish(params: PublishParams, callback: IotCallback): void;
}
