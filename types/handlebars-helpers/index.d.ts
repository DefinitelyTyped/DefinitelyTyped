type Groups = typeof import("./lib/index.js");

// Keys of the category object whose value is a real helper group. Groups typed
// `any` (e.g. `logging`) are dropped so they can't collapse the merge to `any`.
type HelperGroupKeys<T> = {
    [K in keyof T]: 0 extends 1 & T[K] ? never : K;
}[keyof T];

type UnionToIntersection<U> = (
    U extends unknown ? (group: U) => void : never
) extends (group: infer I) => void ? I
    : never;

/** Names of the helper category groups (`"math"`, `"string"`, etc.). */
type GroupName = HelperGroupKeys<Groups>;

/** All helpers, flattened from every category group into one object. */
type Helpers = UnionToIntersection<Groups[GroupName]>;

/** The helpers belonging to the named category groups, flattened into one object. */
type HelpersOf<K extends GroupName> = UnionToIntersection<Groups[K]>;

/** Options accepted when loading helpers. */
interface Options {
    /** Pass your own instance of handlebars to register the helpers on. */
    handlebars?: typeof import("handlebars");
}

interface LoadHelpers {
    /** Load the helpers from the named category groups. */
    <K extends GroupName>(groups: readonly K[], options?: Options): HelpersOf<K>;
    /** Load the helpers from a single category group. */
    <K extends GroupName>(group: K, options?: Options): Groups[K];
    /** Load all helpers. */
    (options?: Options): Helpers;
}

/**
 * `handlebars-helpers`' default export: call it (optionally scoped to a group
 * name / with options) to get the object of registered helpers, or use one of
 * the category getters (e.g. `helpers.math()`) to load just that group.
 */
declare const helpers:
    & LoadHelpers
    & {
        [K in keyof Groups]: (options?: Options) => Groups[K];
    };
export = helpers;
