export interface FeatureFlags {
    ENABLE_VARIABLE_CONNECTION_KEY: boolean;
    ENABLE_RELAY_CONTAINERS_SUSPENSE: boolean;
    ENABLE_PARTIAL_RENDERING_DEFAULT: boolean;
    ENABLE_UNIQUE_MUTATION_ROOT: boolean;
}

export const RelayFeatureFlags: FeatureFlags;
