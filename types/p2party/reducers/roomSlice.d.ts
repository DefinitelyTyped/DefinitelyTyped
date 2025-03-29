import type { State } from "../store";
import type { MessageType } from "../utils/messageTypes";
export interface Channel {
    label: string;
    peerIds: string[];
}
export interface Peer {
    peerId: string;
    peerPublicKey: string;
}
export interface Message {
    merkleRootHex: string;
    sha512Hex: string;
    fromPeerId: string;
    filename: string;
    messageType: MessageType;
    savedSize: number;
    totalSize: number;
    chunksCreated: number;
    totalChunks: number;
    channelLabel: string;
    timestamp: number;
}
export interface SetRoomArgs {
    url: string;
    id: string;
    canBeConnectionRelay?: boolean;
    onlyConnectWithKnownPeers?: boolean;
    rtcConfig?: RTCConfiguration;
}
export interface SetPeerArgs extends Peer {
    roomId: string;
}
export interface SetIceServersArgs {
    roomId: string;
    iceServers: RTCIceServer[];
}
export interface SetMessageArgs {
    roomId: string;
    merkleRootHex: string;
    sha512Hex: string;
    chunkSize: number;
    totalSize: number;
    chunksCreated?: number;
    totalChunks?: number;
    timestamp?: number;
    fromPeerId: string;
    filename: string;
    messageType: MessageType;
    channelLabel: string;
}
export interface SetMessageAllChunksArgs {
    roomId: string;
    merkleRootHex: string;
    sha512Hex: string;
    fromPeerId: string;
    filename: string;
    messageType: MessageType;
    totalSize: number;
    channelLabel: string;
    timestamp: number;
}
export interface SetMessageDeliveredSizeArgs {
    roomId: string;
    merkleRootHex: string;
    sha512Hex: string;
    fromPeerId: string;
    deliveredSize: number;
}
export interface SetChannelArgs {
    roomId: string;
    peerId: string;
    label: string;
}
export interface DeleteMessageArgs {
    merkleRootHex: string;
}
export interface DeleteChannelArgs {
    peerId?: string;
    label?: string;
}
export interface SetCanOnlyConnectWithKnownPeers {
    roomId: string;
    onlyConnectWithKnownPeers: boolean;
}
export interface Room extends SetRoomArgs {
    connectingToPeers: boolean;
    connectedToPeers: boolean;
    canBeConnectionRelay: boolean;
    onlyConnectWithKnownAddresses: boolean;
    rtcConfig: RTCConfiguration;
    peers: Peer[];
    channels: Channel[];
    messages: Message[];
}
export declare const defaultRTCConfig: RTCConfiguration;
export declare const setRoom: import("@reduxjs/toolkit").ActionCreatorWithPayload<SetRoomArgs, "rooms/setRoom">, setConnectingToPeers: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    roomId: string;
    connectingToPeers: boolean;
}, "rooms/setConnectingToPeers">, setConnectedToPeers: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    roomId: string;
    connectedToPeers: boolean;
}, "rooms/setConnectedToPeers">, setConnectionRelay: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    roomId: string;
    canBeConnectionRelay: boolean;
}, "rooms/setConnectionRelay">, setOnlyConnectWithKnownPeers: import("@reduxjs/toolkit").ActionCreatorWithPayload<SetCanOnlyConnectWithKnownPeers, "rooms/setOnlyConnectWithKnownPeers">, setPeer: import("@reduxjs/toolkit").ActionCreatorWithPayload<SetPeerArgs, "rooms/setPeer">, setChannel: import("@reduxjs/toolkit").ActionCreatorWithPayload<SetChannelArgs, "rooms/setChannel">, setIceServers: import("@reduxjs/toolkit").ActionCreatorWithPayload<SetIceServersArgs, "rooms/setIceServers">, setMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<SetMessageArgs, "rooms/setMessage">, setMessageAllChunks: import("@reduxjs/toolkit").ActionCreatorWithPayload<SetMessageAllChunksArgs, "rooms/setMessageAllChunks">, deletePeer: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    peerId: string;
}, "rooms/deletePeer">, deleteChannel: import("@reduxjs/toolkit").ActionCreatorWithPayload<DeleteChannelArgs, "rooms/deleteChannel">, deleteMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<DeleteMessageArgs, "rooms/deleteMessage">, deleteRoom: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "rooms/deleteRoom">;
export declare const roomSelector: (state: State) => Room[];
declare const _default: import("redux").Reducer<Room[]>;
export default _default;
//# sourceMappingURL=roomSlice.d.ts.map