export interface WebSocketMessagePingRequest {
    type: "ping";
}
export interface WebSocketMessagePongResponse {
    type: "pong";
    fromPeerId: string;
}
export interface WebSocketMessageChallengeRequest {
    type: "peerId";
    peerId: string;
    challenge: string;
    signature?: string;
    challengeId?: string;
    username?: string;
    credential?: string;
    message: string;
}
export interface WebSocketMessageChallengeResponse {
    type: "challenge";
    challenge: string;
    signature: string;
    fromPeerId: string;
}
export interface WebSocketMessageSuccessfulChallenge {
    type: "challenge";
    challengeId: string;
    username?: string;
    credential?: string;
}
export interface WebSocketMessageRoomIdRequest {
    type: "room";
    fromPeerId: string;
    roomUrl: string;
}
export interface WebSocketMessageRoomIdResponse {
    type: "roomId";
    roomId: string;
    roomUrl: string;
}
export interface WebSocketMessageDescriptionSend {
    type: "description";
    description: RTCSessionDescription;
    fromPeerId: string;
    fromPeerPublicKey: string;
    toPeerId: string;
    roomId: string;
}
export interface WebSocketMessageDescriptionReceive {
    type: "description";
    description: RTCSessionDescription;
    fromPeerId: string;
    fromPeerPublicKey: string;
    roomId: string;
}
export interface WebSocketMessageCandidateSend {
    type: "candidate";
    candidate: RTCIceCandidate;
    fromPeerId: string;
    toPeerId: string;
    roomId: string;
}
export interface WebSocketMessageCandidateReceive {
    type: "candidate";
    candidate: RTCIceCandidate;
    fromPeerId: string;
}
export interface WebSocketMessagePeersRequest {
    type: "peers";
    fromPeerId: string;
    roomId: string;
}
export interface RoomPeer {
    id: string;
    publicKey: string;
}
export interface WebSocketMessagePeersResponse {
    type: "peers";
    roomId: string;
    peers: RoomPeer[];
}
export interface WebSocketMessageConnectionRequest {
    type: "peerConnection";
    roomId: string;
    peer: RoomPeer;
}
export interface WebSocketMessageConnectionResponse {
    type: "peerConnection";
    roomId: string;
    fromPeerId: string;
    toPeerId: string;
}
export interface WebSocketMessagePeerConnectionRequest {
    type: "connection";
    roomId: string;
    fromPeerId: string;
    toPeerId: string;
    labels: string[];
}
export interface WebSocketMessagePeerConnectionResponse {
    type: "connection";
    roomId: string;
    fromPeerId: string;
    fromPeerPublicKey: string;
    labels: string[];
}
export interface WebSocketMessageMessageSendRequest {
    type: "message";
    message: string;
    roomId: string;
    fromPeerId: string;
    toPeerId: string;
    label: string;
}
export interface WebSocketMessageMessageSendResponse {
    type: "message";
    message: string;
    roomId: string;
    fromPeerId: string;
    label: string;
}
export interface WebSocketPeerConnectionParams {
    peerId: string;
    peerPublicKey: string;
    roomId: string;
}
export interface WebSocketSendMessageToPeerParams {
    data: string | File;
    toChannel: string;
}
export interface WebSocketMessageError {
    type: "error";
    fromAction: "ping" | "sendCandidate" | "receiveCandidate" | "sendDescription" | "receiveDescription" | "requestRoomId" | "requestPeerId" | "sendChallengeResponse";
    error: Error | {
        message: string;
        [key: string]: unknown;
    };
}
//# sourceMappingURL=interfaces.d.ts.map