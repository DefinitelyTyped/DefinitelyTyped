import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { IRTCDataChannel, IRTCPeerConnection, RTCDisconnectFromRoomParams } from "./interfaces";
export interface RTCDisconnectFromRoomParamsExtension extends RTCDisconnectFromRoomParams {
    peerConnections: IRTCPeerConnection[];
    dataChannels: IRTCDataChannel[];
}
declare const webrtcDisconnectRoomQuery: BaseQueryFn<RTCDisconnectFromRoomParamsExtension, void, unknown>;
export default webrtcDisconnectRoomQuery;
//# sourceMappingURL=disconnectFromRoomQuery.d.ts.map