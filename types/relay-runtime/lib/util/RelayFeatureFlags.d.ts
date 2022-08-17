import { Disposable } from './RelayRuntimeTypes';

export interface FeatureFlags {
    ENABLE_CLIENT_EDGES: boolean;
    ENABLE_VARIABLE_CONNECTION_KEY: boolean;
    ENABLE_PARTIAL_RENDERING_DEFAULT: boolean;
    ENABLE_REACT_FLIGHT_COMPONENT_FIELD: boolean;
    ENABLE_RELAY_RESOLVERS: boolean;
    ENABLE_GETFRAGMENTIDENTIFIER_OPTIMIZATION: boolean;
    ENABLE_FRIENDLY_QUERY_NAME_GQL_URL: boolean;
    ENABLE_LOAD_QUERY_REQUEST_DEDUPING: boolean;
    ENABLE_DO_NOT_WRAP_LIVE_QUERY: boolean;
    ENABLE_NOTIFY_SUBSCRIPTION: boolean;
    BATCH_ASYNC_MODULE_UPDATES_FN: null | undefined | ((arg: () => void) => Disposable);
    ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT: boolean;
    MAX_DATA_ID_LENGTH: number | null | undefined;
    STRING_INTERN_LEVEL: number;
    USE_REACT_CACHE: boolean;
    USE_REACT_CACHE_LEGACY_TIMEOUTS: boolean;
}

export const RelayFeatureFlags: FeatureFlags;
