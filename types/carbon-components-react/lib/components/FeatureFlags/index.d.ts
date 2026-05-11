import * as React from "react";

// TODO: import FeatureFlagScope related things from @types/carbon__feature-flags when available
export type FeatureFlagRecord = Record<string, boolean>;

export declare class FeatureFlagScope {
    constructor(flags?: FeatureFlagRecord);

    add(name: string, enabled: boolean): void;
    checkForFlag(name: string): void;
    enable(name: string): void;
    enabled(name: string): boolean;
    disable(name: string): void;
    merge(flags: FeatureFlagRecord): void;
    mergeWithScope(scope: FeatureFlagScope): void;
}

export interface FeatureFlagsProps {
    children?: React.ReactNode | undefined;
    flags?: FeatureFlagRecord | undefined;
}

declare const FeatureFlagContext: React.Context<FeatureFlagScope>;
declare const FeatureFlags: React.FC<FeatureFlagsProps>;
declare function useFeatureFlag(flag: string): boolean;
declare function useFeatureFlags(): FeatureFlagScope;

export { FeatureFlagContext, FeatureFlags, useFeatureFlag, useFeatureFlags };
