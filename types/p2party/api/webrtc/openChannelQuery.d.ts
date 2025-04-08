import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { RTCOpenChannelParams, IRTCDataChannel, IRTCPeerConnection } from "./interfaces";
export interface RTCOpenChannelParamsExtention extends RTCOpenChannelParams {
    peerConnections: IRTCPeerConnection[];
    dataChannels: IRTCDataChannel[];
    decryptionWasmMemory: WebAssembly.Memory;
    merkleWasmMemory: WebAssembly.Memory;
}
declare const webrtcOpenChannelQuery: BaseQueryFn<RTCOpenChannelParamsExtention, void, unknown>;
export default webrtcOpenChannelQuery;
//# sourceMappingURL=openChannelQuery.d.ts.map