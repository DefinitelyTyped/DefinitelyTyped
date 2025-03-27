import type { BaseQueryApi } from "@reduxjs/toolkit/query";
import type { IRTCPeerConnection, RTCPeerConnectionParams } from "../api/webrtc/interfaces";
export declare const handleConnectToPeer: ({ peerId, peerPublicKey, roomId, initiator, rtcConfig, }: RTCPeerConnectionParams, api: BaseQueryApi) => Promise<IRTCPeerConnection>;
//# sourceMappingURL=handleConnectToPeer.d.ts.map