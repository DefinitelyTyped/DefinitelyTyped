import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { IRTCDataChannel, IRTCPeerConnection, RTCDisconnectFromPeerParams } from "./interfaces";
export interface RTCDisconnectFromPeerParamsExtension extends RTCDisconnectFromPeerParams {
    peerConnections: IRTCPeerConnection[];
    dataChannels: IRTCDataChannel[];
}
declare const webrtcDisconnectPeerQuery: BaseQueryFn<RTCDisconnectFromPeerParamsExtension, void, unknown>;
export default webrtcDisconnectPeerQuery;
//# sourceMappingURL=disconnectFromPeerQuery.d.ts.map