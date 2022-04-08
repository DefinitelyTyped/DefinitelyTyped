export {};
import { PusherUser } from './user';
import { PusherRoom } from './room';
import { RoomHook, RoomUserHook, UserPresenceHook, UserParams, RoomParams } from './hooks';
import { CurrentUser } from './currentuser';

interface GlobalHooks {
    onAddedToRoom: RoomHook;
    onRemovedFromRoom: RoomHook;
    onRoomUpdated: RoomHook;
    onRoomDeleted: RoomHook;
    onUserStartedTyping: RoomUserHook;
    onUserStoppedTyping: RoomUserHook;
    onUserJoinedRoom: RoomUserHook;
    onUserLeftRoom: RoomUserHook;
    onPresenceChanged: UserPresenceHook;
    onNewReadCursor: RoomUserHook;
}

type LoggerFunction = (...args: any) => void;

interface Logger {
    verbose: LoggerFunction;
    debug: LoggerFunction;
    info: LoggerFunction;
    warn: LoggerFunction;
    error: LoggerFunction;
}

interface ChatManagerConstructorArgs {
    instanceLocator: string;
    userId: string;
    tokenProvider: {};
    logger?: Logger;
    connectionTimeout?: number;
}

interface ChatManagerConstructor {
    new (args: ChatManagerConstructorArgs): ChatManager;
}

interface ChatManager {
    connect(hooks?: GlobalHooks): Promise<CurrentUser>;
    getUser(params: UserParams): Promise<PusherUser>;
    getRoom(params: RoomParams): Promise<PusherRoom>;
    disablePushNotifications: () => Promise<void>;
}

export const ChatManager: ChatManagerConstructor;

interface TokenProviderConstructorArgs {
    url: string;
    queryParams?: any;
    headers?: any;
    withCredentials?: boolean;
}

interface TokenProviderConstructor {
    new (args: TokenProviderConstructorArgs): {};
}

export const TokenProvider: TokenProviderConstructor;
