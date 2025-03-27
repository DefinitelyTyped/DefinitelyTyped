import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { IRTCDataChannel, IRTCPeerConnection, RTCDisconnectParams } from "./interfaces";
export interface RTCDisconnectParamsExtension extends RTCDisconnectParams {
    peerConnections: IRTCPeerConnection[];
    dataChannels: IRTCDataChannel[];
}
declare const webrtcDisconnectQuery: BaseQueryFn<RTCDisconnectParamsExtension, void, unknown>;
export default webrtcDisconnectQuery;
//# sourceMappingURL=disconnectQuery.d.ts.map