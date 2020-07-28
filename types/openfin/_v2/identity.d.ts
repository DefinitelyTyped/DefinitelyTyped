export interface Identity {
    uuid: string;
    name?: string;
    entityType?: any;
}
export interface NamedIdentity {
    uuid: string;
    name: string;
}
export interface GroupWindowIdentity extends Identity {
    isExternalWindow?: boolean;
}
interface NativeIdOptional extends Identity {
    nativeId?: string;
}
interface UuidOptional {
    nativeId: string;
    name?: string;
    uuid?: string;
}
export declare type ExternalWindowIdentity = NativeIdOptional | UuidOptional;
export {};
