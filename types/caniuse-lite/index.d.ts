// Type definitions for caniuse-lite 1.0
// Project: https://github.com/ben-eb/caniuse-lite#readme
// Definitions by: Michael Utech <https://github.com/mutech>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/**
 * Information about user agents (browsers, platforms) indexed by their ID.
 */
export const agents: AgentsByID;

/**
 * Features index by their ID. The feature ID is a human readable identifier. The
 * associated value is a packed version of information about the feature that
 * can be unpacked using the function `feature(packed)`
 */
export const features: { [featureID: string]: PackedFeature; };

/**
 * @param packedFeature a packed feature obtained from `features[key]` for some valid key.
 * @return the unpacked information as `Feature`.
 */
export function feature(packedFeature: PackedFeature): Feature;

/**
 * @param packedRegion a packed version of regional usage data by agent OD.
 * @return the unpacked usage data indexed by agent ID and then version.
 */
export function region(packedRegion: PackedRegion): { [agentID: string]: UsageByVersion };

/**
 * Agents indexed by their ID. .
 */
export type AgentsByID = Readonly<{ [id: string]: Readonly<Agent> | undefined }>;

/**
 * Feature support status by version indexed by agent ID.
 */
export type StatsByAgentID = Readonly<{ [agentID: string]: SupportStatusByVersion }>;

/**
 * Feature support status indexed by an agent's versions.
 */
export type SupportStatusByVersion = Readonly<{ [version: string]: SupportStatus }>;

/**
 * Usage (percentage/market share) indexed by an agent's versions.
 */
export type UsageByVersion = Readonly<{ [version: string]: number | undefined }>;

/**
 * The standardization status of a feature:
 * * ls - WHATWG living standard
 * * rec - W3C recommendation
 * * pr - W3C proposed recommendation
 * * cr - W3C candidate recommendation
 * * wd - W3C working draft
 * * other - Non-W3C, but reputable
 * * unoff - Unofficial
 */
export type FeatureStatus = "ls" | "rec" | "pr" | "cr" | "wd" | "other" | "unoff" | string;

/**
 * Encoded support status:
 * * `n` - not supported
 * * `p` - not supported, polyfill available
 * * `u` - unknown
 * * `a x` - partially supported, vendor prefix
 * * `a` - partially supported
 * * `y x` - fully supported, vendor prefix
 * * `y` - fully supported
 *
 * The support status can additionally have one or more footnote references as `#<n>`, f.e.
 * `a x #1 #3`.
 */
export type SupportStatus = 'n' | 'p' | 'u' | "a x" | 'a' | "y x" | 'y' | string;

/**
 * Provides information about the Agent.
 */
export interface Agent {
    /**
     * Global agent usage by version
     */
    usage_global: UsageByVersion;

    /**
     * The agents vendor prefix
     */
    prefix: string;

    /**
     * Version matrix. See [caniuse](https://caniuse.com)
     */
    versions: [ // Tuple of 70 version slots:
        string|null, string|null, string|null, string|null, string|null,
        string|null, string|null, string|null, string|null, string|null,
        string|null, string|null, string|null, string|null, string|null,
        string|null, string|null, string|null, string|null, string|null,
        string|null, string|null, string|null, string|null, string|null,
        string|null, string|null, string|null, string|null, string|null,
        string|null, string|null, string|null, string|null, string|null,
        string|null, string|null, string|null, string|null, string|null,
        string|null, string|null, string|null, string|null, string|null,
        string|null, string|null, string|null, string|null, string|null,
        string|null, string|null, string|null, string|null, string|null,
        string|null, string|null, string|null, string|null, string|null,
        string|null, string|null, string|null, string|null, string|null,
        string|null, string|null, string|null, string|null, string|null ];

    /**
     * The agent's name
     */
    browser: string;

    /**
     * Release dates as seconds since epoch by version.
     */
    release_date: { [version: string]: number | undefined };

    /**
     * Exceptions to vendor prefix use.
     */
    prefix_exceptions?: { [version: string]: string | undefined };
}

/**
 * Specifies a feature and its support status in all known agent versions.
 */
export interface Feature {
    /**
     * Specification status of the feature.
     */
    status: FeatureStatus;

    /**
     * Descriptive title of the feature.
     */
    title: string;

    /**
     * Agent support matrix for this feature.
     */
    stats: StatsByAgentID;
}

/**
 * A space optimized version of Feature that can be unpacked using `feature(PackedFeature)`.
 */
export interface PackedFeature {
    [encodedKey: string]: any;
}

/**
 * A space optimized version of Region that can be unpacked using `region(PackedFeature)`.
 */
export interface PackedRegion {
    [encodedKey: string]: any;
}
