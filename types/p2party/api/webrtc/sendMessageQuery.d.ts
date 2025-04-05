import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { IRTCDataChannel, IRTCPeerConnection, RTCSendMessageParams } from "./interfaces";
export interface RTCChannelMessageParamsExtension extends RTCSendMessageParams {
    peerConnections: IRTCPeerConnection[];
    dataChannels: IRTCDataChannel[];
    encryptionWasmMemory: WebAssembly.Memory;
    decryptionWasmMemory: WebAssembly.Memory;
    merkleWasmMemory: WebAssembly.Memory;
}
declare const webrtcMessageQuery: BaseQueryFn<RTCChannelMessageParamsExtension, void, unknown>;
export default webrtcMessageQuery;
//# sourceMappingURL=sendMessageQuery.d.ts.map