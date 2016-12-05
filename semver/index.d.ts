// Type definitions for semver v5.3.0
// Project: https://github.com/npm/node-semver
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/semver

declare namespace SemVerModule {
    /**
     * Return the parsed version, or null if it's not valid.
     */
    function valid(v: string, loose?: boolean): string;
    /**
     * Returns cleaned (removed leading/trailing whitespace, remove '=v' prefix) and parsed version, or null if version is invalid.
     */
    function clean(version: string, loose?: boolean): string;
    /**
     * Return the version incremented by the release type (major, minor, patch, or prerelease), or null if it's not valid.
     */
    function inc(v: string, release: string, loose?: boolean): string;
    /**
     * Return the major version number.
     */
    function major(v: string, loose?: boolean): number;
    /**
     * Return the minor version number.
     */
    function minor(v: string, loose?: boolean): number;
    /**
     * Return the patch version number.
     */
    function patch(v: string, loose?: boolean): number;
    /**
     * Returns an array of prerelease components, or null if none exist.
     */
    function prerelease(v: string, loose?: boolean): string[];

    // Comparison
    /**
     * v1 > v2
     */
    function gt(v1: string, v2: string, loose?: boolean): boolean;
    /**
     * v1 >= v2
     */
    function gte(v1: string, v2: string, loose?: boolean): boolean;
    /**
     * v1 < v2
     */
    function lt(v1: string, v2: string, loose?: boolean): boolean;
    /**
     * v1 <= v2
     */
    function lte(v1: string, v2: string, loose?: boolean): boolean;
    /**
     * v1 == v2 This is true if they're logically equivalent, even if they're not the exact same string. You already know how to compare strings.
     */
    function eq(v1: string, v2: string, loose?: boolean): boolean;
    /**
     * v1 != v2 The opposite of eq.
     */
    function neq(v1: string, v2: string, loose?: boolean): boolean;
    /**
     * Pass in a comparison string, and it'll call the corresponding semver comparison function. "===" and "!==" do simple string comparison, but are included for completeness. Throws if an invalid comparison string is provided.
     */
    function cmp(v1: string, comparator: any, v2: string, loose?: boolean): boolean;
    /**
     * Return 0 if v1 == v2, or 1 if v1 is greater, or -1 if v2 is greater. Sorts in ascending order if passed to Array.sort().
     */
    function compare(v1: string, v2: string, loose?: boolean): number;
    /**
     * The reverse of compare. Sorts an array of versions in descending order when passed to Array.sort().
     */
    function rcompare(v1: string, v2: string, loose?: boolean): number;
    /**
     * Returns difference between two versions by the release type (major, premajor, minor, preminor, patch, prepatch, or prerelease), or null if the versions are the same.
     */
    function diff(v1: string, v2: string, loose?: boolean): string;

    // Ranges
    /**
     * Return the valid range or null if it's not valid
     */
    function validRange(range: string, loose?: boolean): string;
    /**
     * Return true if the version satisfies the range.
     */
    function satisfies(version: string, range: string, loose?: boolean): boolean;
    /**
     * Return the highest version in the list that satisfies the range, or null if none of them do.
     */
    function maxSatisfying(versions: string[], range: string, loose?: boolean): string;
    /**
     * Return the lowest version in the list that satisfies the range, or null if none of them do.
     */
    function minSatisfying(versions: string[], range: string, loose?: boolean): string;
    /**
     * Return true if version is greater than all the versions possible in the range.
     */
    function gtr(version: string, range: string, loose?: boolean): boolean;
    /**
     * Return true if version is less than all the versions possible in the range.
     */
    function ltr(version: string, range: string, loose?: boolean): boolean;
    /**
     * Return true if the version is outside the bounds of the range in either the high or low direction. The hilo argument must be either the string '>' or '<'. (This is the function called by gtr and ltr.)
     */
    function outside(version: string, range: string, hilo: string, loose?: boolean): boolean;

    class SemVerBase {
        raw: string;
        loose: boolean;
        format(): string;
        inspect(): string;
        toString(): string;
    }

    class SemVer extends SemVerBase {
        constructor(version: string, loose?: boolean);

        major: number;
        minor: number;
        patch: number;
        version: string;
        build: string[];
        prerelease: string[];

        compare(other:SemVer): number;
        compareMain(other:SemVer): number;
        comparePre(other:SemVer): number;
        inc(release: string): SemVer;
    }

    class Comparator extends SemVerBase {
        constructor(comp: string, loose?: boolean);

        semver: SemVer;
        operator: string;
        value: boolean;
        parse(comp: string): void;
        test(version:SemVer): boolean;
    }

    class Range extends SemVerBase {
        constructor(range: string, loose?: boolean);

        set: Comparator[][];
        parseRange(range: string): Comparator[];
        test(version: SemVer): boolean;
    }
}

interface SemVerStatic {
    SemVer(version: string, loose?: boolean): SemVerModule.SemVer;
    Comparator(comp: string, loose?: boolean): SemVerModule.Comparator;
    Range(range: string, loose?: boolean): SemVerModule.Range;
    clean(version: string, loose?: boolean): string;

    SEMVER_SPEC_VERSION: string;

    valid(v: string, loose?: boolean): string;
    inc(v: string, release: string, loose?: boolean): string;
    major(v: string, loose?: boolean): number;
    minor(v: string, loose?: boolean): number;
    patch(v: string, loose?: boolean): number;
    gt(v1: string, v2: string, loose?: boolean): boolean;
    gte(v1: string, v2: string, loose?: boolean): boolean;
    lt(v1: string, v2: string, loose?: boolean): boolean;
    lte(v1: string, v2: string, loose?: boolean): boolean;
    eq(v1: string, v2: string, loose?: boolean): boolean;
    neq(v1: string, v2: string, loose?: boolean): boolean;
    cmp(v1: string, comparator: any, v2: string, loose?: boolean): boolean;
    compare(v1: string, v2: string, loose?: boolean): number;
    rcompare(v1: string, v2: string, loose?: boolean): number;
    diff(v1: string, v2: string, loose?: boolean): string;
    validRange(range: string, loose?: boolean): string;
    satisfies(version: string, range: string, loose?: boolean): boolean;
    maxSatisfying(versions: string[], range: string, loose?: boolean): string;
    gtr(version: string, range: string, loose?: boolean): boolean;
    ltr(version: string, range: string, loose?: boolean): boolean;
    outside(version: string, range: string, hilo: string, loose?: boolean): boolean;
}

declare var semver: SemVerStatic;

declare module "semver" {
    export = SemVerModule;
}
