import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { IRTCDataChannel, IRTCPeerConnection, RTCDisconnectFromAllRoomsParams } from "./interfaces";
export interface RTCDisconnectFromAllRoomsParamsExtension extends RTCDisconnectFromAllRoomsParams {
    peerConnections: IRTCPeerConnection[];
    dataChannels: IRTCDataChannel[];
}
declare const webrtcDisconnectAllRoomsQuery: BaseQueryFn<RTCDisconnectFromAllRoomsParamsExtension, void, unknown>;
export default webrtcDisconnectAllRoomsQuery;
//# sourceMappingURL=disconnectFromAllRoomsQuery.d.ts.map