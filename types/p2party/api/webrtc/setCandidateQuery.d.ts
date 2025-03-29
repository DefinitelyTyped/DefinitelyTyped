import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { RTCSetCandidateParams, IRTCPeerConnection, IRTCIceCandidate } from "./interfaces";
export interface RTCSetCandidateParamsExtention extends RTCSetCandidateParams {
    peerConnections: IRTCPeerConnection[];
    iceCandidates: IRTCIceCandidate[];
}
declare const webrtcSetIceCandidateQuery: BaseQueryFn<RTCSetCandidateParamsExtention, void, unknown>;
export default webrtcSetIceCandidateQuery;
//# sourceMappingURL=setCandidateQuery.d.ts.map