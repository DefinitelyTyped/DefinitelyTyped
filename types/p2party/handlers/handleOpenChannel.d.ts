import type { BaseQueryApi } from "@reduxjs/toolkit/query";
import type { IRTCPeerConnection, IRTCDataChannel } from "../api/webrtc/interfaces";
import type { LibCrypto } from "../cryptography/libcrypto";
export interface OpenChannelHelperParams {
    channel: string | RTCDataChannel;
    epc: IRTCPeerConnection;
    roomId: string;
    dataChannels: IRTCDataChannel[];
    decryptionModule: LibCrypto;
    merkleModule: LibCrypto;
}
export declare const KB64: number;
export declare const MAX_BUFFERED_AMOUNT: number;
export declare const handleOpenChannel: ({ channel, epc, roomId, dataChannels, decryptionModule, merkleModule, }: OpenChannelHelperParams, api: BaseQueryApi) => Promise<IRTCDataChannel>;
//# sourceMappingURL=handleOpenChannel.d.ts.map