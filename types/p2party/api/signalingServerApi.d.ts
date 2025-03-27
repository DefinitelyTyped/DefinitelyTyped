import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { WebSocketMessageCandidateSend, WebSocketMessageDescriptionSend, WebSocketMessageChallengeResponse, WebSocketMessageRoomIdRequest, WebSocketMessagePeersRequest, WebSocketMessageConnectionResponse, WebSocketMessagePongResponse, WebSocketMessageMessageSendRequest, WebSocketPeerConnectionParams } from "../utils/interfaces";
export interface WebSocketParams {
    signalingServerUrl: string;
}
export interface WebSocketMessage {
    content: WebSocketMessagePongResponse | WebSocketMessageCandidateSend | WebSocketMessageDescriptionSend | WebSocketMessageChallengeResponse | WebSocketMessageRoomIdRequest | WebSocketMessagePeersRequest | WebSocketMessageConnectionResponse | WebSocketMessageMessageSendRequest;
}
export declare const rtcDataChannelMessageLimit: number;
export declare const messageLen: number;
export declare const encryptedLen: number;
declare const signalingServerApi: import("@reduxjs/toolkit/query").Api<BaseQueryFn<WebSocketParams, undefined, unknown>, {
    connectWebSocket: import("@reduxjs/toolkit/query").MutationDefinition<string, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
    disconnectWebSocket: import("@reduxjs/toolkit/query").MutationDefinition<void, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
    sendMessage: import("@reduxjs/toolkit/query").MutationDefinition<WebSocketMessage, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
    connectWithPeer: import("@reduxjs/toolkit/query").MutationDefinition<WebSocketPeerConnectionParams, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
}, "signalingServerApi", never, typeof import("@reduxjs/toolkit/query").coreModuleName>;
export default signalingServerApi;
//# sourceMappingURL=signalingServerApi.d.ts.map