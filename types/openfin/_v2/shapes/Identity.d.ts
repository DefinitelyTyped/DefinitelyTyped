import { EntityType } from './EntityType';
export interface Identity {
    uuid: string;
    name?: string | undefined;
    runtimeUuid?: string | undefined;
    entityType?: EntityType | undefined;
    parentFrame?: string | undefined;
}
export interface ProviderIdentity extends Identity {
    channelId?: string | undefined;
    channelName?: string | undefined;
    isExternal?: boolean | undefined;
    runtimeUuid?: string | undefined;
}
export interface ClientIdentity extends Identity {
    endpointId?: string | undefined;
}
export interface ResourceFetchIdentity extends Identity {
    resourceFetch?: boolean | undefined;
}
