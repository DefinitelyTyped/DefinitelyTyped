import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { IRTCDataChannel, IRTCPeerConnection, RTCDisconnectFromPeerChannelLabelParams } from "./interfaces";
export interface RTCDisconnectFromPeerChannelLabelParamsExtension extends RTCDisconnectFromPeerChannelLabelParams {
    peerConnections: IRTCPeerConnection[];
    dataChannels: IRTCDataChannel[];
}
declare const webrtcDisconnectFromPeerChannelLabelQuery: BaseQueryFn<RTCDisconnectFromPeerChannelLabelParamsExtension, void, unknown>;
export default webrtcDisconnectFromPeerChannelLabelQuery;
//# sourceMappingURL=disconnectFromPeerChannelLabelQuery.d.ts.map