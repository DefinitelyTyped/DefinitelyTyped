import type { IRTCDataChannel, IRTCPeerConnection } from "../api/webrtc/interfaces";
import type { LibCrypto } from "../cryptography/libcrypto";
import type { BaseQueryApi } from "@reduxjs/toolkit/query";
export declare const wait: (milliseconds: number) => Promise<unknown>;
export declare const handleSendMessage: (data: string | File, api: BaseQueryApi, label: string, roomId: string, peerConnections: IRTCPeerConnection[], dataChannels: IRTCDataChannel[], encryptionModule: LibCrypto, decryptionModule: LibCrypto, merkleModule: LibCrypto, minChunks?: number, // TODO errors when =2 due to merkle
chunkSize?: number, percentageFilledChunk?: number, metadataSchemaVersion?: number) => Promise<void>;
//# sourceMappingURL=handleSendMessage.d.ts.map