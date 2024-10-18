export {};
import { ReadCursorHook, RoomParams, UserAndRoomParams, UserHook, UserPresenceHook } from "./hooks";
import { PusherMessage, SendMessagePayload } from "./message";
import { PusherReadCursor, PusherRoom } from "./room";
import { PusherUser } from "./user";

export interface RoomSubscriptionHooks {
    onMessage?: ((message: PusherMessage) => void) | undefined;
    onMessageDeleted?: ((messageId: number) => void) | undefined;
    onUserStartedTyping?: UserHook | undefined;
    onUserStoppedTyping?: UserHook | undefined;
    onUserJoined?: UserHook | undefined;
    onUserLeft?: UserHook | undefined;
    onPresenceChanged?: UserPresenceHook | undefined;
    onNewReadCursor?: ReadCursorHook | undefined;
}

export interface RoomSubscription {
    roomId: string;
    hooks?: RoomSubscriptionHooks | undefined;
    messageLimit: number;
    disableCursors: boolean;
    cancel: () => Promise<void>;
}

interface RoomSubcriptionParams {
    roomId: string;
    hooks?: RoomSubscriptionHooks | undefined;
    messageLimit?: number | undefined;
    disableCursors?: boolean | undefined;
}

interface RoomIdParams {
    roomId: string;
}

interface CreateRoomParams {
    id?: string | undefined;
    name: string;
    private?: boolean | undefined;
    addUserIds?: string[] | undefined;
    customData?: any;
}

interface UpdateRoomParams {
    roomId: string;
    name?: string | undefined;
    private?: boolean | undefined;
    customData?: any;
}

interface FetchMultipartMessagesParams {
    roomId: string;
    initialId?: number | undefined;
    direction?: "older" | "newer" | undefined;
    limit?: number | undefined;
}

interface SendSimpleMessageParams {
    roomId: string;
    text: string;
}

interface SendMultipartMessageParams {
    roomId: string;
    parts: SendMessagePayload[];
}

interface SetReadCursorParams {
    roomId: string;
    position: number;
}

interface ReadCursorParams {
    roomId: string;
    userId: string;
}

interface RoomSubscriptions {
    [key: string]: RoomSubscription;
}

export interface CurrentUser {
    rooms: PusherRoom[];
    users: PusherUser[];
    roomSubscriptions: RoomSubscriptions;
    disconnect: () => Promise<void>;
    createRoom: (params: CreateRoomParams) => Promise<PusherRoom>;
    updateRoom: (params: UpdateRoomParams) => Promise<PusherRoom>;
    deleteRoom: (params: RoomIdParams) => Promise<void>;
    fetchMultipartMessages: (params: FetchMultipartMessagesParams) => Promise<PusherMessage[]>;
    addUserToRoom: (params: UserAndRoomParams) => Promise<void>;
    removeUserFromRoom: (params: UserAndRoomParams) => Promise<void>;
    getJoinableRooms: () => Promise<PusherRoom[]>;
    joinRoom: (params: RoomIdParams) => Promise<PusherRoom>;
    leaveRoom: (params: RoomIdParams) => Promise<PusherRoom>;
    subscribeToRoomMultipart: (params: RoomSubcriptionParams) => Promise<PusherRoom>;
    sendSimpleMessage: (params: SendSimpleMessageParams) => Promise<number>;
    sendMultipartMessage: (params: SendMultipartMessageParams) => Promise<number>;
    isTypingIn: (params: RoomIdParams) => Promise<void>;
    setReadCursor: (params: SetReadCursorParams) => Promise<void>;
    readCursor: (params: ReadCursorParams) => Promise<PusherReadCursor>;
    enablePushNotifications: () => Promise<void>;
}
