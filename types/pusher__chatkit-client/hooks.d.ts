import { PusherRoom, PusherReadCursor } from './room';
import { PusherUser, PusherUserPresence } from './user';

export type UserHook = (room: PusherUser) => void;
export type UserPresenceState = { current: PusherUserPresence, previous: PusherUserPresence };
export type UserPresenceHook = (state: UserPresenceState, user: PusherUser) => void;
export type RoomHook = (room: PusherRoom) => void;
export type RoomUserHook = (room: PusherRoom, user: PusherUser) => void;
export type ReadCursorHook = (cursor: PusherReadCursor) => void;

export interface UserParams {
    userId: string;
}

export interface RoomParams {
    roomId: string;
}

export interface UserAndRoomParams extends RoomParams {
    userId: string;
}
