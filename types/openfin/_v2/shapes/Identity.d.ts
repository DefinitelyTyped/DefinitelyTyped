import { EntityType } from './EntityType';
export interface Identity {
    uuid: string;
    name?: string;
    runtimeUuid?: string;
    entityType?: EntityType;
    parentFrame?: string;
}
export interface ProviderIdentity extends Identity {
    channelId?: string;
    channelName?: string;
    isExternal?: boolean;
    runtimeUuid?: string;
}
export interface ClientIdentity extends Identity {
    endpointId?: string;
}
export interface ResourceFetchIdentity extends Identity {
    resourceFetch?: boolean;
}
