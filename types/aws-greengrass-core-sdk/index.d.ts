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
