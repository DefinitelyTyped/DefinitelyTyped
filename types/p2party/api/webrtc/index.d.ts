import type { RTCPeerConnectionParams, RTCSendMessageParams, RTCSetDescriptionParams, RTCSetCandidateParams, RTCOpenChannelParams, RTCDisconnectFromRoomParams, RTCDisconnectFromAllRoomsParams, RTCDisconnectFromPeerParams, RTCDisconnectFromChannelLabelParams, RTCDisconnectFromPeerChannelLabelParams, RTCDisconnectParams } from "./interfaces";
export declare const rtcDataChannelMessageLimit: number;
export declare const messageLen: number;
export declare const encryptedLen: number;
declare const webrtcApi: import("@reduxjs/toolkit/query").Api<import("@reduxjs/toolkit/query").BaseQueryFn<import("./baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, {
    connectWithPeer: import("@reduxjs/toolkit/query").MutationDefinition<RTCPeerConnectionParams, import("@reduxjs/toolkit/query").BaseQueryFn<import("./baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
    setDescription: import("@reduxjs/toolkit/query").MutationDefinition<RTCSetDescriptionParams, import("@reduxjs/toolkit/query").BaseQueryFn<import("./baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
    setCandidate: import("@reduxjs/toolkit/query").MutationDefinition<RTCSetCandidateParams, import("@reduxjs/toolkit/query").BaseQueryFn<import("./baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
    openChannel: import("@reduxjs/toolkit/query").MutationDefinition<RTCOpenChannelParams, import("@reduxjs/toolkit/query").BaseQueryFn<import("./baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
    sendMessage: import("@reduxjs/toolkit/query").MutationDefinition<RTCSendMessageParams, import("@reduxjs/toolkit/query").BaseQueryFn<import("./baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
    disconnect: import("@reduxjs/toolkit/query").MutationDefinition<RTCDisconnectParams, import("@reduxjs/toolkit/query").BaseQueryFn<import("./baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
    disconnectFromRoom: import("@reduxjs/toolkit/query").MutationDefinition<RTCDisconnectFromRoomParams, import("@reduxjs/toolkit/query").BaseQueryFn<import("./baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
    disconnectFromAllRooms: import("@reduxjs/toolkit/query").MutationDefinition<RTCDisconnectFromAllRoomsParams, import("@reduxjs/toolkit/query").BaseQueryFn<import("./baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
    disconnectFromPeer: import("@reduxjs/toolkit/query").MutationDefinition<RTCDisconnectFromPeerParams, import("@reduxjs/toolkit/query").BaseQueryFn<import("./baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
    disconnectFromChannelLabel: import("@reduxjs/toolkit/query").MutationDefinition<RTCDisconnectFromChannelLabelParams, import("@reduxjs/toolkit/query").BaseQueryFn<import("./baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
    disconnectFromPeerChannelLabel: import("@reduxjs/toolkit/query").MutationDefinition<RTCDisconnectFromPeerChannelLabelParams, import("@reduxjs/toolkit/query").BaseQueryFn<import("./baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
}, "webrtcApi", never, typeof import("@reduxjs/toolkit/query").coreModuleName>;
export default webrtcApi;
//# sourceMappingURL=index.d.ts.map