import { MessageType } from "../utils/messageTypes";
import type { LibCrypto } from "../cryptography/libcrypto";
import type { Room } from "../reducers/roomSlice";
export declare const handleReceiveMessage: (data: ArrayBuffer, merkleRoot: Uint8Array, hashHex: string, senderPublicKey: Uint8Array, receiverSecretKey: Uint8Array, room: Room, decryptionModule: LibCrypto, merkleModule: LibCrypto) => Promise<{
    date: Date;
    chunkSize: number;
    savedSize: number;
    totalSize: number;
    chunkIndex: number;
    chunkHashHex: string;
    receivedFullSize: boolean;
    messageAlreadyExists: boolean;
    messageType: MessageType;
    filename: string;
}>;
//# sourceMappingURL=handleReceiveMessage.d.ts.map