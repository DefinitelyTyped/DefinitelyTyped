import type { DBSchema, IDBPDatabase } from "idb";
import type { MessageData, Chunk, SendQueue, AddressBook, BlacklistedPeer, UniqueRoom, NewChunk } from "../types";
export declare const dbName = "p2party";
export declare const dbVersion = 14;
export interface RepoSchema extends DBSchema {
    addressBook: {
        value: AddressBook;
        key: [string];
        indexes: {
            peerId: string;
            peerPublicKey: string;
            username: string;
        };
    };
    blacklist: {
        value: BlacklistedPeer;
        key: [string];
        indexes: {
            peerId: string;
            peerPublicKey: string;
            username: string;
        };
    };
    uniqueRoom: {
        value: UniqueRoom;
        key: [string];
        indexes: {
            roomId: string;
            roomUrl: string;
        };
    };
    messageData: {
        value: MessageData;
        key: [number, string, string];
        indexes: {
            roomId: string;
            hash: string;
            merkleRoot: string;
            fromPeerId: string;
        };
    };
    chunks: {
        value: Chunk;
        key: [string, number];
        indexes: {
            merkleRoot: string;
            hash: string;
        };
    };
    newChunks: {
        value: NewChunk;
        key: [string, number];
        indexes: {
            hash: string;
            merkleRoot: string;
            realChunkHash: string;
        };
    };
    sendQueue: {
        value: SendQueue;
        key: [number, string, string];
        indexes: {
            labelPeer: string;
        };
    };
}
export declare function getDB(): Promise<IDBPDatabase<RepoSchema>>;
//# sourceMappingURL=getDB.d.ts.map