export {};
import { PusherUser } from './user';
import { PusherRoom, PusherReadCursor } from './room';
import { PusherMessage, SendMessagePayload } from './message';
import { UserHook, UserPresenceHook, ReadCursorHook, RoomParams, UserAndRoomParams } from './hooks';

export interface RoomSubscriptionHooks {
    onMessage?: (message: PusherMessage) => void;
    onMessageDeleted?: (messageId: number) => void;
    onUserStartedTyping?: UserHook;
    onUserStoppedTyping?: UserHook;
    onUserJoined?: UserHook;
    onUserLeft?: UserHook;
    onPresenceChanged?: UserPresenceHook;
    onNewReadCursor?: ReadCursorHook;
}

export interface RoomSubscription {
    roomId: string;
    hooks?: RoomSubscriptionHooks;
    messageLimit: number;
    disableCursors: boolean;
    cancel: () => Promise<void>;
}

interface RoomSubcriptionParams {
    roomId: string;
    hooks?: RoomSubscriptionHooks;
    messageLimit?: number;
    disableCursors?: boolean;
}

interface RoomIdParams {
    roomId: string;
}

interface CreateRoomParams {
    id?: string;
    name: string;
    private?: boolean;
    addUserIds?: string[];
    customData?: any;
}

interface UpdateRoomParams {
    roomId: string;
    name?: string;
    private?: boolean;
    customData?: any;
}

interface FetchMultipartMessagesParams {
    roomId: string;
    initialId?: number;
    direction?: 'older' | 'newer';
    limit?: number;
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
