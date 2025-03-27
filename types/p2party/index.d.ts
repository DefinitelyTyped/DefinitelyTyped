import type { State } from "./store";
import type { Room, Peer, Channel, Message } from "./reducers/roomSlice";
import type { SignalingState } from "./reducers/signalingServerSlice";
import { MessageCategory, MessageType, type MimeType, type FileExtension } from "./utils/messageTypes";
import type { WebSocketMessageRoomIdRequest, WebSocketMessageRoomIdResponse, WebSocketMessageChallengeRequest, WebSocketMessageChallengeResponse, WebSocketMessageDescriptionSend, WebSocketMessageDescriptionReceive, WebSocketMessageCandidateSend, WebSocketMessageCandidateReceive, WebSocketMessageError } from "./utils/interfaces";
import type { RoomData } from "./api/webrtc/interfaces";
import type { BlacklistedPeer, UsernamedPeer, UniqueRoom } from "./db/types";
declare const _default: {
    store: import("@reduxjs/toolkit").EnhancedStore<{
        commonState: import("./reducers/commonSlice").CommonState;
        keyPair: import("./reducers/keyPairSlice").KeyPair;
        rooms: Room[];
        signalingServer: SignalingState;
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
            rooms: Room[];
            signalingServer: SignalingState;
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
    commonStateSelector: (state: State) => import("./reducers/commonSlice").CommonState;
    signalingServerSelector: (state: State) => SignalingState;
    roomSelector: (state: State) => Room[];
    keyPairSelector: (state: State) => import("./reducers/keyPairSlice").KeyPair;
    connect: (roomUrl: string, signalingServerUrl?: string, rtcConfig?: RTCConfiguration) => void;
    connectToSignalingServer: (roomUrl: string, signalingServerUrl?: string) => void;
    disconnectFromSignalingServer: () => void;
    disconnectFromRoom: (roomId: string, deleteMessages?: boolean) => void;
    disconnectFromAllRooms: (deleteMessages?: boolean, exceptionRoomIds?: string[]) => void;
    disconnectFromPeer: (peerId: string) => void;
    allowConnectionRelay: (roomId: string, allowed?: boolean) => void;
    onlyAllowConnectionsFromAddressBook: (roomUrl: string, onlyAllow: boolean) => Promise<void>;
    addPeerToAddressBook: (username: string, peerId: string, peerPublicKey: string) => Promise<void>;
    getPeerAddressBookEntry: (peerId?: string, peerPublicKey?: string) => Promise<UsernamedPeer | undefined>;
    getAllPeersInAddressBook: () => Promise<UsernamedPeer[]>;
    getAllPeersInBlacklist: () => Promise<BlacklistedPeer[]>;
    deletePeerFromAddressBook: (username?: string, peerId?: string, peerPublicKey?: string) => Promise<void>;
    blacklistPeer: (peerId: string, peerPublicKey: string) => Promise<void>;
    getPeerIsBlacklisted: (peerId?: string, peerPublicKey?: string) => Promise<boolean>;
    removePeerFromBlacklist: (peerId?: string, peerPublicKey?: string) => Promise<void>;
    getAllExistingRooms: () => Promise<UniqueRoom[]>;
    openChannel: (roomId: string, label: string, withPeers?: {
        peerId: string;
        peerPublicKey: string;
    }[]) => Promise<void>;
    sendMessage: (data: string | File, toChannel: string, roomId: string, minChunks?: number, chunkSize?: number, percentageFilledChunk?: number, metadataSchemaVersion?: number) => void;
    readMessage: (merkleRootHex?: string, hashHex?: string) => Promise<{
        message: string | Blob;
        percentage: number;
        size: number;
        filename: string;
        mimeType: MimeType;
        extension: FileExtension;
        category: MessageCategory;
    }>;
    cancelMessage: (channelLabel: string, merkleRoot?: string | Uint8Array, hash?: string | Uint8Array) => Promise<void>;
    deleteMessage: (merkleRoot?: string | Uint8Array, hash?: string | Uint8Array) => Promise<void>;
    purgeIdentity: () => void;
    purgeRoom: (roomUrl: string) => void;
    purge: () => Promise<void>;
    generateRandomRoomUrl: () => Promise<string>;
    MIN_CHUNKS: number;
    MIN_CHUNK_SIZE: number;
    MAX_CHUNK_SIZE: number;
    MIN_PERCENTAGE_FILLED_CHUNK: number;
    MAX_PERCENTAGE_FILLED_CHUNK: number;
};
export default _default;
export { MessageType, MessageCategory };
export type { State, Room, Peer, Channel, Message, RoomData, MimeType, FileExtension, UsernamedPeer, BlacklistedPeer, UniqueRoom, SignalingState, WebSocketMessageRoomIdRequest, WebSocketMessageRoomIdResponse, WebSocketMessageChallengeRequest, WebSocketMessageChallengeResponse, WebSocketMessageDescriptionSend, WebSocketMessageDescriptionReceive, WebSocketMessageCandidateSend, WebSocketMessageCandidateReceive, WebSocketMessageError, };
//# sourceMappingURL=index.d.ts.map