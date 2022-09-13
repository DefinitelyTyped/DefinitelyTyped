export const STATUS_AVAILABLE: string;
export const STATUS_BUSY: string;
export const STATUS_AWAY: string;
export const STATUS_ON_THE_PHONE: string;
export const STATUS_BE_RIGHT_BACK: string;
export const STATUS_IN_A_MEETING: string;
export const STATUS_OUT_OF_OFFICE: string;
export const STATUS_OFF_WORK: string;

export interface UserPresenceResponse {
    category: string;
    userId: number;
    timestamp: number;
}

export function getUserPresence(userId: number, local: boolean): void;
export function setPresence(status: string): Promise<UserPresenceResponse>;
export function registerInterestExtUser(userIds: number[]): void;
