import type { Peer } from "../reducers/roomSlice";
import type { MessageType } from "../utils/messageTypes";
export interface UsernamedPeer extends Peer {
    username: string;
}
export interface AddressBook extends UsernamedPeer {
    dateAdded: number;
    challenge?: string;
    signature?: string;
}
export interface BlacklistedPeer extends Peer {
    dateAdded: number;
}
export interface UniqueRoom {
    roomUrl: string;
    roomId: string;
    messageCount: number;
    lastMessageMerkleRoot: string;
    createdAt: number;
    updatedAt: number;
}
export interface MessageData {
    roomId: string;
    timestamp: number;
    fromPeerId: string;
    channelLabel: string;
    hash: string;
    merkleRoot: string;
    filename: string;
    messageType: MessageType;
    totalSize: number;
    savedSize: number;
}
export interface Chunk {
    merkleRoot: string;
    hash: string;
    chunkIndex: number;
    data: ArrayBuffer;
    mimeType: string;
}
export interface NewChunk {
    hash: string;
    chunkIndex: number;
    merkleRoot: string;
    realChunkHash: string;
    data: ArrayBuffer;
    metadata: ArrayBuffer;
    merkleProof: ArrayBuffer;
}
export interface SendQueue {
    position: number;
    label: string;
    toPeerId: string;
    encryptedData: ArrayBuffer;
}
export type WorkerMessages = {
    id: number;
    method: "getDBAddressBookEntry";
    args: [peerId?: string, peerPublicKey?: string];
} | {
    id: number;
    method: "getAllDBAddressBookEntries";
    args: [];
} | {
    id: number;
    method: "setDBAddressBookEntry";
    args: [username: string, peerId: string, peerPublicKey: string];
} | {
    id: number;
    method: "deleteDBAddressBookEntry";
    args: [username?: string, peerId?: string, peerPublicKey?: string];
} | {
    id: number;
    method: "getDBPeerIsBlacklisted";
    args: [peerId?: string, peerPublicKey?: string];
} | {
    id: number;
    method: "getAllDBBlacklisted";
    args: [];
} | {
    id: number;
    method: "setDBPeerInBlacklist";
    args: [peerId: string, peerPublicKey: string];
} | {
    id: number;
    method: "getAllDBUniqueRooms";
    args: [];
} | {
    id: number;
    method: "setDBUniqueRoom";
    args: [roomUrl: string, roomId: string];
} | {
    id: number;
    method: "deleteDBPeerFromBlacklist";
    args: [peerId?: string, peerPublicKey?: string];
} | {
    id: number;
    method: "getDBMessageData";
    args: [merkleRootHex?: string, hashHex?: string];
} | {
    id: number;
    method: "getDBRoomMessageData";
    args: [roomId: string];
} | {
    id: number;
    method: "setDBRoomMessageData";
    args: [
        roomId: string,
        merkleRootHex: string,
        sha512Hex: string,
        fromPeerId: string,
        chunkSize: number,
        totalSize: number,
        messageType: MessageType,
        filename: string,
        channelLabel: string,
        timestamp: number
    ];
} | {
    id: number;
    method: "getDBChunk";
    args: [hashHex: string, chunkIndex: number];
} | {
    id: number;
    method: "existsDBChunk";
    args: [hashHex: string, chunkIndex: number];
} | {
    id: number;
    method: "getDBNewChunk";
    args: [hashHex: string, chunkIndex?: number];
} | {
    id: number;
    method: "existsDBNewChunk";
    args: [hashHex: string, chunkIndex: number];
} | {
    id: number;
    method: "getDBSendQueue";
    args: [label: string, toPeerId: string, position?: number];
} | {
    id: number;
    method: "getDBAllChunks";
    args: [merkleRootHex?: string, hashHex?: string];
} | {
    id: number;
    method: "getDBAllChunksCount";
    args: [merkleRootHex?: string, hashHex?: string];
} | {
    id: number;
    method: "setDBChunk";
    args: [chunk: Chunk];
} | {
    id: number;
    method: "getDBAllNewChunks";
    args: [hashHex?: string, merkleRootHex?: string];
} | {
    id: number;
    method: "getDBAllNewChunksCount";
    args: [hashHex: string];
} | {
    id: number;
    method: "setDBNewChunk";
    args: [chunk: NewChunk];
} | {
    id: number;
    method: "setDBSendQueue";
    args: [item: SendQueue];
} | {
    id: number;
    method: "countDBSendQueue";
    args: [label: string, toPeerId: string];
} | {
    id: number;
    method: "deleteDBChunk";
    args: [hashHex: string, chunkIndex?: number];
} | {
    id: number;
    method: "deleteDBNewChunk";
    args: [
        merkleRootHex?: string,
        realChunkHashHex?: string,
        hashHex?: string,
        chunkIndex?: number
    ];
} | {
    id: number;
    method: "deleteDBMessageData";
    args: [merkleRootHex: string];
} | {
    id: number;
    method: "deleteDBSendQueue";
    args: [label: string, toPeerId: string, position?: number];
} | {
    id: number;
    method: "deleteDBUniqueRoom";
    args: [roomId: string];
} | {
    id: number;
    method: "deleteDB";
    args: [];
};
export interface WorkerMethodReturnTypes {
    getDBAddressBookEntry: UsernamedPeer | undefined;
    getAllDBAddressBookEntries: UsernamedPeer[];
    setDBAddressBookEntry: void;
    deleteDBAddressBookEntry: string;
    getDBPeerIsBlacklisted: boolean;
    getAllDBBlacklisted: BlacklistedPeer[];
    setDBPeerInBlacklist: void;
    getAllDBUniqueRooms: UniqueRoom[];
    setDBUniqueRoom: void;
    deleteDBPeerFromBlacklist: void;
    getDBMessageData: MessageData | undefined;
    getDBRoomMessageData: MessageData[];
    getDBChunk: ArrayBuffer | undefined;
    existsDBChunk: boolean;
    getDBNewChunk: NewChunk | undefined;
    existsDBNewChunk: boolean;
    getDBSendQueue: SendQueue[];
    getDBAllChunks: Chunk[];
    getDBAllChunksCount: number;
    setDBChunk: void;
    getDBAllNewChunks: NewChunk[];
    getDBAllNewChunksCount: number;
    setDBNewChunk: void;
    setDBRoomMessageData: void;
    setDBSendQueue: void;
    countDBSendQueue: number;
    deleteDBChunk: void;
    deleteDBNewChunk: void;
    deleteDBMessageData: void;
    deleteDBSendQueue: void;
    deleteDBUniqueRoom: void;
    deleteDB: void;
}
//# sourceMappingURL=types.d.ts.map