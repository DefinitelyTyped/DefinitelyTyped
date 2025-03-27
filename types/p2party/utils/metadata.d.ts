import { MessageType } from "./messageTypes";
export interface BasicMetadata {
    schemaVersion: number;
    messageType: MessageType;
    totalSize: number;
    date: Date;
    name: string;
    chunkStartIndex: number;
    chunkEndIndex: number;
}
export interface Metadata extends BasicMetadata {
    chunkIndex: number;
}
export declare const METADATA_LEN: number;
export declare const formatSize: (size: number) => string;
export declare const serializeMetadata: (metadata: Metadata) => Uint8Array;
export declare const deserializeMetadata: (buffer: Uint8Array) => Metadata;
//# sourceMappingURL=metadata.d.ts.map