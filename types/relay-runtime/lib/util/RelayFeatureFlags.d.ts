export interface FeatureFlags {
    ENABLE_VARIABLE_CONNECTION_KEY: boolean;
    ENABLE_CONNECTION_RESOLVERS: boolean;
    ENABLE_PARTIAL_RENDERING_DEFAULT: boolean;
    USE_RECORD_SOURCE_MAP_IMPL: boolean;
}

export const RelayFeatureFlags: FeatureFlags;
