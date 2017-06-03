import { RemoteCallbacks } from './remote-callbacks';

export interface FetchOptions {
    version?: number;
    callbacks?: RemoteCallbacks;
    prune?: number;
    updateFetchhead?: number;
    downloadTags?: number;
}
