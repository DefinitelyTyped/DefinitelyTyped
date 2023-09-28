export interface Identity {
    uuid: string;
    name?: string | undefined;
    entityType?: any;
}
export interface NamedIdentity {
    uuid: string;
    name: string;
}
export interface GroupWindowIdentity extends Identity {
    isExternalWindow?: boolean | undefined;
}
interface NativeIdOptional extends Identity {
    nativeId?: string | undefined;
}
interface UuidOptional {
    nativeId: string;
    name?: string | undefined;
    uuid?: string | undefined;
}
export declare type ExternalWindowIdentity = NativeIdOptional | UuidOptional;
export {};
