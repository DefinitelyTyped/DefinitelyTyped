import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { RTCSetDescriptionParams, IRTCPeerConnection, IRTCIceCandidate, IRTCDataChannel } from "./interfaces";
export interface RTCSetDescriptionParamsExtension extends RTCSetDescriptionParams {
    peerConnections: IRTCPeerConnection[];
    iceCandidates: IRTCIceCandidate[];
    dataChannels: IRTCDataChannel[];
    decryptionWasmMemory: WebAssembly.Memory;
    merkleWasmMemory: WebAssembly.Memory;
}
declare const webrtcSetDescriptionQuery: BaseQueryFn<RTCSetDescriptionParamsExtension, void, unknown>;
export default webrtcSetDescriptionQuery;
//# sourceMappingURL=setDescriptionQuery.d.ts.map