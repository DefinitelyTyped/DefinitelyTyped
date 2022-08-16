export interface FeatureFlags {
    ENABLE_VARIABLE_CONNECTION_KEY: boolean;
    ENABLE_RELAY_CONTAINERS_SUSPENSE: boolean;
    ENABLE_PARTIAL_RENDERING_DEFAULT: boolean;
    ENABLE_UNIQUE_MUTATION_ROOT: boolean;
    ENABLE_RELAY_RESOLVERS: boolean;
    ENABLE_CLIENT_EDGES: boolean;
}

export const RelayFeatureFlags: FeatureFlags;
