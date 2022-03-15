// Type definitions for @carbon/elements 0.3
// Project: https://github.com/carbon-design-system/carbon/tree/master/packages/feature-flags
// Definitions by: Eric Liu <https://github.com/metonym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

export type FeatureFlagName =
    | "enable-css-custom-properties"
    | "enable-use-controlled-state-with-value"
    | "enable-2021-release";

export type FeatureFlags = Partial<Record<FeatureFlagName, boolean>> | Record<string, boolean>;

export class FeatureFlagScope {
    flags: Map<FeatureFlagName, boolean>;
    constructor(flags?: FeatureFlags);
    checkForFlag(name: string): void;
    add(name: string, enabled: boolean): void;
    enable(name: string): void;
    disable(name: string): void;
    merge(flags: FeatureFlags): void;
    mergeWithScope(scope: this): void;
    enabled(name: string): boolean;
}

export function add(name: string, enabled: boolean): void;
export function createScope(flags?: FeatureFlags): FeatureFlagScope;
export function enable(name: string): void;
export function disable(name: string): void;
export function merge(flags: FeatureFlags): void;
export function enabled(name: string): boolean;
