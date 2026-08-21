/// <reference types="node" />

import { Readable } from "stream";

export interface PolyfillConfig {
    aliases: string[];
    dependencies: string[];
    spec: string;
    repo: string;
    docs: string;
    license: string;
    notes: string[];
    browsers: { [browser: string]: string };
    install: { [key: string]: string | string[] };
}

export interface PolyfillMeta extends PolyfillConfig {
    detectSource: string;
    baseDir: string;
    hasTests: boolean;
    isTestable: boolean;
    isPublic: boolean;
    size: number;
}

export interface Options {
    /**
     * Name of the JavaScript function to call after the polyfill bundle is loaded.
     * @default false
     */
    callback?: false | string;
    /**
     * Whether to return the minified or raw implementation of the polyfills.
     * @default true
     */
    minify?: boolean;
    /**
     * Whether to return all polyfills or no polyfills if the user-agent is unknown or unsupported.
     * @default 'polyfill'
     */
    unknown?: "ignore" | "polyfill";
    /**
     * Which features should be returned if the user-agent does not support them natively.
     * @default {}
     */
    features?: { [featureName: string]: { flags: Flag[] | Set<Flag> } };
    /**
     * Which features should be excluded from the returned object.
     * @default []
     */
    excludes?: string[];
    /**
     * The user-agent string to check each feature against.
     * @default ''
     */
    uaString?: string;
    /**
     * Whether to include a script that reports anonymous usage data in the polyfill bundle.
     * @default false
     */
    rum?: boolean;
}

export type Flag = "always" | "gated";

export interface Feature {
    [featureName: string]: {
        flags: Set<Flag>;
        aliasOf: Set<string>;
        dependencyOf: Set<string>;
    };
}

export interface AliasesMap {
    all: string[];
    default: string[];
    es5: string[];
    es6: string[];
    es7: string[];
    es2015: string[];
    es2016: string[];
    es2017: string[];
    es2018: string[];
    es2019: string[];
    es2021: string[];
    [aliases: string]: string[];
}

/**
 * Get a list of all the aliases which exist within the collection of polyfill sources.
 * Returns a promise which resolves with an object mapping all the aliases within the collection
 * to the polyfills they include.
 */
export function listAliases(): Promise<AliasesMap>;

/**
 * Get a list of all the polyfills which exist within the collection of polyfill sources.
 * Returns a Promise which resolves with an array of all the polyfills within the collection.
 */
export function listAllPolyfills(): Promise<string[]>;

/**
 * Get the metadata for a specific polyfill within the collection of polyfill sources.
 * @param featureName - The name of a polyfill whose metadata should be returned.
 * Returns a Promise which resolves with the metadata or with undefined if no metadata exists
 * for the polyfill.
 */
export function describePolyfill(featureName: string): Promise<PolyfillMeta | undefined>;

/**
 * Create an options object for use with `getPolyfills` or `getPolyfillString`.
 * @param opts - Valid keys are uaString, minify, unknown, excludes, rum and features.
 * Returns an object which has merged `opts` with the defaults option values.
 */
export function getOptions(opts?: Options): Options;

/**
 * Given a set of features that should be polyfilled in 'opts.features' (with flags i.e.
 * `{<featurename>: {flags:Set[<flaglist>]}, ...}`), determine which have a
 * configuration valid for the given opts.uaString, and return a promise of set of canonical
 * (unaliased) features (with flags) and polyfills.
 * @param opts -  Valid keys are uaString, minify, unknown, excludes, rum and features.
 * Returns a Promise which resolves to an Object which contains the canonicalised feature
 * definitions filtered for UA.
 */
export function getPolyfills(opts?: Options): Promise<Feature>;

/**
 * Create a polyfill bundle.
 * @param opts - Valid keys are uaString, minify, unknown, excludes, rum and features.
 * Returns a polyfill bundle as either a utf-8 ReadStream or as a Promise of a utf-8 String.
 */
export function getPolyfillString(opts?: Options): Promise<Readable | string>;
