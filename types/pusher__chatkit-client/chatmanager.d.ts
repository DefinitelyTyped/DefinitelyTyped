export {};
import { CurrentUser } from "./currentuser";
import { RoomHook, RoomParams, RoomUserHook, UserParams, UserPresenceHook } from "./hooks";
import { PusherRoom } from "./room";
import { PusherUser } from "./user";

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
    logger?: Logger | undefined;
    connectionTimeout?: number | undefined;
}

interface ChatManagerConstructor {
    new(args: ChatManagerConstructorArgs): ChatManager;
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
    withCredentials?: boolean | undefined;
}

interface TokenProviderConstructor {
    new(args: TokenProviderConstructorArgs): {};
}

export const TokenProvider: TokenProviderConstructor;
