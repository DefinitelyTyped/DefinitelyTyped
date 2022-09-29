// Type definitions for @carbon/elements 0.8
// Project: https://github.com/carbon-design-system/carbon/tree/master/packages/feature-flags
// Definitions by: Eric Liu <https://github.com/metonym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

export type FeatureFlagName =
    | 'enable-css-custom-properties'
    | 'enable-use-controlled-state-with-value'
    | 'enable-css-grid'
    | 'enable-v11-release';

export type FeatureFlags = Partial<Record<FeatureFlagName, boolean>> | Record<string, boolean>;

export class FeatureFlagScope {
    flags: Map<FeatureFlagName, boolean>;
    constructor(flags?: FeatureFlags);
    checkForFlag(name: string): void;
    add: typeof add;
    enable: typeof enable;
    disable: typeof disable;
    merge: typeof merge;
    mergeWithScope(scope: this): void;
    enabled: typeof enabled;
}

export function add(name: string, enabled: boolean): void;
export function createScope(flags?: FeatureFlags): FeatureFlagScope;
export function enable(name: string): void;
export function disable(name: string): void;
export function merge(flags: FeatureFlags): void;
export function enabled(name: string): boolean;
