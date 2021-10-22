export interface Identity {
    uuid: string;
    name?: string | undefined;
}
export interface GroupWindowIdentity extends Identity {
    isExternalWindow?: boolean | undefined;
}
