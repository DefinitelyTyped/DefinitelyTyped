export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    commonState: import("./reducers/commonSlice").CommonState;
    keyPair: import("./reducers/keyPairSlice").KeyPair;
    rooms: import("./reducers/roomSlice").Room[];
    signalingServer: import("./reducers/signalingServerSlice").SignalingState;
    signalingServerApi: import("@reduxjs/toolkit/dist/query").CombinedState<{
        connectWebSocket: import("@reduxjs/toolkit/dist/query").MutationDefinition<string, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/signalingServerApi").WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
        disconnectWebSocket: import("@reduxjs/toolkit/dist/query").MutationDefinition<void, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/signalingServerApi").WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
        sendMessage: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/signalingServerApi").WebSocketMessage, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/signalingServerApi").WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
        connectWithPeer: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./utils/interfaces").WebSocketPeerConnectionParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/signalingServerApi").WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
    }, never, "signalingServerApi">;
    webrtcApi: import("@reduxjs/toolkit/dist/query").CombinedState<{
        connectWithPeer: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCPeerConnectionParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
        setDescription: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCSetDescriptionParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
        setCandidate: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCSetCandidateParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
        openChannel: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCOpenChannelParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
        sendMessage: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCSendMessageParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
        disconnect: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCDisconnectParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
        disconnectFromRoom: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCDisconnectFromRoomParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
        disconnectFromAllRooms: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCDisconnectFromAllRoomsParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
        disconnectFromPeer: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCDisconnectFromPeerParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
        disconnectFromChannelLabel: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCDisconnectFromChannelLabelParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
        disconnectFromPeerChannelLabel: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCDisconnectFromPeerChannelLabelParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
    }, never, "webrtcApi">;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        commonState: import("./reducers/commonSlice").CommonState;
        keyPair: import("./reducers/keyPairSlice").KeyPair;
        rooms: import("./reducers/roomSlice").Room[];
        signalingServer: import("./reducers/signalingServerSlice").SignalingState;
        signalingServerApi: import("@reduxjs/toolkit/dist/query").CombinedState<{
            connectWebSocket: import("@reduxjs/toolkit/dist/query").MutationDefinition<string, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/signalingServerApi").WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
            disconnectWebSocket: import("@reduxjs/toolkit/dist/query").MutationDefinition<void, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/signalingServerApi").WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
            sendMessage: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/signalingServerApi").WebSocketMessage, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/signalingServerApi").WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
            connectWithPeer: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./utils/interfaces").WebSocketPeerConnectionParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/signalingServerApi").WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
        }, never, "signalingServerApi">;
        webrtcApi: import("@reduxjs/toolkit/dist/query").CombinedState<{
            connectWithPeer: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCPeerConnectionParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
            setDescription: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCSetDescriptionParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
            setCandidate: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCSetCandidateParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
            openChannel: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCOpenChannelParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
            sendMessage: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCSendMessageParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
            disconnect: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCDisconnectParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
            disconnectFromRoom: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCDisconnectFromRoomParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
            disconnectFromAllRooms: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCDisconnectFromAllRoomsParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
            disconnectFromPeer: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCDisconnectFromPeerParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
            disconnectFromChannelLabel: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCDisconnectFromChannelLabelParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
            disconnectFromPeerChannelLabel: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("./api/webrtc/interfaces").RTCDisconnectFromPeerChannelLabelParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<import("./api/webrtc/baseQuery").RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
        }, never, "webrtcApi">;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
export declare const dispatch: AppDispatch;
//# sourceMappingURL=store.d.ts.map