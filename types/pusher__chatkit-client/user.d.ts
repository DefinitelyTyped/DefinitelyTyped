export type PusherUserPresence = 'online' | 'offline' | 'unknown';

export interface PusherUser {
    avatarURL?: string;
    createdAt: string;
    customData?: any;
    id: string;
    name: string;
    presence: PusherUserPresence;
    updatedAt: string;
}
