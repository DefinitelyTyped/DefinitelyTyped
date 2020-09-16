export interface Identity {
    uuid: string;
    name?: string;
}
export interface GroupWindowIdentity extends Identity {
    isExternalWindow?: boolean;
}
