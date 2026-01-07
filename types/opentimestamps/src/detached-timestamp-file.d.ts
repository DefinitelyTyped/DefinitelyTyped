import { Op } from "./ops";
import Timestamp = require("./timestamp");
import { StreamDeserializationContext, StreamSerializationContext } from "./context";

declare class DetachedTimestampFile {
    constructor(fileHashOp: Op, timestamp: Timestamp);
    fileHashOp: Op;
    timestamp: Timestamp;
    fileDigest(): number[];
    serialize(ctx: StreamSerializationContext): void;
    serializeToBytes(): Uint8Array;
    static deserialize(
        buffer:
            | StreamDeserializationContext
            | number[]
            | Uint8Array
            | ArrayBuffer,
    ): DetachedTimestampFile;
    static fromBytes(
        fileHashOp: Op,
        buffer:
            | StreamDeserializationContext
            | number[]
            | Uint8Array
            | ArrayBuffer,
    ): DetachedTimestampFile;
    static fromHash(fileHashOp: Op, fdHash: number[] | ArrayBuffer | Uint8Array): DetachedTimestampFile;
    toString(): string;
    toJson(): any;
    equals(another: DetachedTimestampFile): boolean;
}

export = DetachedTimestampFile;
