import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { RTCPeerConnectionParams, IRTCPeerConnection, IRTCDataChannel } from "./interfaces";
export interface RTCPeerConnectionParamsExtend extends RTCPeerConnectionParams {
    peerConnections: IRTCPeerConnection[];
    dataChannels: IRTCDataChannel[];
    decryptionWasmMemory: WebAssembly.Memory;
    merkleWasmMemory: WebAssembly.Memory;
}
declare const webrtcBaseQuery: BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>;
export default webrtcBaseQuery;
//# sourceMappingURL=baseQuery.d.ts.map