export type EffectiveConnectionType = 'slow-2g' | '2g' | '3g' | '4g';

export function useNetworkStatus(
    initialEffectiveConnectionType?: EffectiveConnectionType | null,
): {
    unsupported: boolean;
    effectiveConnectionType: EffectiveConnectionType | null;
};
