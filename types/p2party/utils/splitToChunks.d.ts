import { MessageType } from "./messageTypes";
import type { BaseQueryApi } from "@reduxjs/toolkit/query";
export declare const PROOF_LEN: number;
export declare const IMPORTANT_DATA_LEN: number;
export declare const CHUNK_LEN: number;
export declare const metadataSchemaVersions: number[];
/**
 * Splits a Uint8Array into chunks of a specified size, padding with zeros if necessary.
 * Ensures a minimum number of chunks are created.
 * Returns the chunks and the last valid byte index in the last chunk before padding.
 *
 * @param data - The Uint8Array to be split.
 * @param minChunks - The minimum number of chunks to produce.
 * @param chunkSize - The desired size of each chunk.
 * @param percentageFilledChunk - If = 1 then all chunk is filled with useful data. Range (0, 1].
 * @returns An object containing the chunks, their merkle proofs and the last valid byte index.
 */
export declare const splitToChunks: (message: string | File, api: BaseQueryApi, label: string, roomId: string, minChunks?: number, // TODO errors when =2 due to merkle
chunkSize?: number, percentageFilledChunk?: number, metadataSchemaVersion?: number) => Promise<{
    merkleRoot: Uint8Array;
    merkleRootHex: string;
    hash: Uint8Array;
    hashHex: string;
    totalChunks: number;
    totalSize: number;
    messageType: MessageType;
    chunkHashes: Uint8Array;
}>;
//# sourceMappingURL=splitToChunks.d.ts.map