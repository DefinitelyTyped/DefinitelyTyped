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
    children?: React.ReactNode;
    flags?: FeatureFlagRecord;
}

export declare const FeatureFlags: React.FC<FeatureFlagsProps>;

export declare function useFeatureFlag(flag: string): boolean;

export declare function useFeatureFlags(): FeatureFlagScope;
