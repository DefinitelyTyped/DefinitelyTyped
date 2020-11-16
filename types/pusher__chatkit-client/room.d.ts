import { PusherUser } from './user';

export interface PusherReadCursor {
    position: number;
    updatedAt: string;
    room: PusherRoom;
    user: PusherUser;
    type: number;
}

export interface PusherRoom {
    id: string;
    createdAt: string;
    createdByUserId: string;
    customData?: any;
    isPrivate: boolean;
    lastMessageAt: string;
    name: string;
    unreadCount: number;
    updatedAt: string;
    users: PusherUser[];
}
