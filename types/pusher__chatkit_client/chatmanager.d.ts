import { PusherUser } from './user';
import { PusherRoom } from './room';
import { RoomHook, RoomUserHook, UserPresenceHook, UserParams, RoomParams } from './hooks';
import { CurrentUser } from './currentuser';

interface GlobalHooks {
    onAddedToRoom: RoomHook
    onRemovedFromRoom: RoomHook
    onRoomUpdated: RoomHook
    onRoomDeleted: RoomHook
    onUserStartedTyping: RoomUserHook
    onUserStoppedTyping: RoomUserHook
    onUserJoinedRoom: RoomUserHook
    onUserLeftRoom: RoomUserHook
    onPresenceChanged: UserPresenceHook
    onNewReadCursor: RoomUserHook
}

type LoggerFunction = (...args: any) => void;

interface Logger {
    verbose: LoggerFunction
    debug: LoggerFunction
    info: LoggerFunction
    warn: LoggerFunction
    error: LoggerFunction
}

interface ChatManagerConstructor {
    instanceLocator: string,
    userId: string,
    tokenProvider: TokenProvider,
    logger?: Logger,
    connectionTimeout?: number,
}

export declare class ChatManager {
    constructor(args: ChatManagerConstructor)
    connect(hooks?: GlobalHooks): Promise<CurrentUser>
    getUser(params: UserParams): Promise<PusherUser>
    getRoom(params: RoomParams): Promise<PusherRoom>
    disablePushNotifications: () => Promise<void>
}

interface TokenProviderConstructor {
    url: string,
    queryParams?: any,
    headers?: any,
    withCredentials?: boolean,
}

export declare class TokenProvider {
    constructor(args: TokenProviderConstructor)
}
