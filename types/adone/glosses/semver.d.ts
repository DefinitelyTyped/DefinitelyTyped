declare namespace adone {
    namespace semver {
        const SEMVER_SPEC_VERSION: "2.0.0";

        namespace I {
            type ReleaseType = "major"
                | "premajor"
                | "minor"
                | "preminor"
                | "patch"
                | "prepatch"
                | "prerelease";

            type Operator = '==='
                | "!=="
                | ""
                | "="
                | "=="
                | "!="
                | ">"
                | ">="
                | "<"
                | "<=";
        }

        /**
         * Returns the parsed version as a SemVer object, or null if it's not valid.
         */
        function parse(v: string | SemVer, loose?: boolean): SemVer | null;

        /**
         * Returns the parsed version, or null if it's not valid.
         */
        function valid(v: string | SemVer, loose?: boolean): string | null;

        /**
         * Returns cleaned (removed leading/trailing whitespace, remove '=v' prefix) and parsed version, or null if version is invalid.
         */
        function clean(version: string, loose?: boolean): string | null;

        /**
         * Returns the version incremented by the release type (major, minor, patch, or prerelease), or null if it's not valid.
         */
        function inc(v: string | SemVer, release: I.ReleaseType, loose?: boolean, identifier?: string): string | null;

        /**
         * Returns the major version number.
         */
        function major(v: string | SemVer, loose?: boolean): number;

        /**
         * Returns the minor version number.
         */
        function minor(v: string | SemVer, loose?: boolean): number;

        /**
         * Returns the patch version number.
         */
        function patch(v: string | SemVer, loose?: boolean): number;

        /**
         * Returns an array of prerelease components, or null if none exist.
         */
        function prerelease(v: string | SemVer, loose?: boolean): string[] | null;

        // Comparison

        /**
         * v1 > v2
         */
        function gt(v1: string | SemVer, v2: string | SemVer, loose?: boolean): boolean;

        /**
         * v1 >= v2
         */
        function gte(v1: string | SemVer, v2: string | SemVer, loose?: boolean): boolean;

        /**
         * v1 < v2
         */
        function lt(v1: string | SemVer, v2: string | SemVer, loose?: boolean): boolean;

        /**
         * v1 <= v2
         */
        function lte(v1: string | SemVer, v2: string | SemVer, loose?: boolean): boolean;

        /**
         * v1 == v2 This is true if they're logically equivalent, even if they're not the exact same string. You already know how to compare strings.
         */
        function eq(v1: string | SemVer, v2: string | SemVer, loose?: boolean): boolean;

        /**
         * v1 != v2 The opposite of eq.
         */
        function neq(v1: string | SemVer, v2: string | SemVer, loose?: boolean): boolean;

        /**
         * Pass in a comparison string, and it'll call the corresponding semver comparison function.
         * "===" and "!==" do simple string comparison, but are included for completeness.
         * Throws if an invalid comparison string is provided.
         */
        function cmp(v1: string | SemVer, operator: I.Operator, v2: string | SemVer, loose?: boolean): boolean;

        /**
         * Returns 0 if v1 == v2, or 1 if v1 is greater, or -1 if v2 is greater. Sorts in ascending order if passed to Array.sort().
         */
        function compare(v1: string | SemVer, v2: string | SemVer, loose?: boolean): 1 | 0 | -1;

        /**
         * The reverse of compare. Sorts an array of versions in descending order when passed to Array.sort().
         */
        function rcompare(v1: string | SemVer, v2: string | SemVer, loose?: boolean): 1 | 0 | -1;

        /**
         * Compares two identifiers, must be numeric strings or truthy/falsy values. Sorts in ascending order if passed to Array.sort().
         */
        function compareIdentifiers(a: string | null, b: string | null): 1 | 0 | -1;

        /**
         * The reverse of compareIdentifiers. Sorts in descending order when passed to Array.sort().
         */
        function rcompareIdentifiers(a: string | null, b: string | null): 1 | 0 | -1;

        /**
         * Sorts an array of semver entries in ascending order.
         */
        function sort(list: Array<string | SemVer>, loose?: boolean): Array<string | SemVer>;

        /**
         * Sorts an array of semver entries in descending order.
         */
        function rsort(list: Array<string | SemVer>, loose?: boolean): Array<string | SemVer>;

        /**
         * Returns difference between two versions by the release type (major, premajor, minor, preminor, patch, prepatch, or prerelease), or null if the versions are the same.
         */
        function diff(v1: string, v2: string, loose?: boolean): I.ReleaseType | null;

        // Ranges

        /**
         * Returns the valid range or null if it's not valid
         */
        function validRange(range: string | Range, loose?: boolean): string;

        /**
         * Returns true if the version satisfies the range.
         */
        function satisfies(version: string | SemVer, range: string | Range, loose?: boolean): boolean;

        /**
         * Returns the highest version in the list that satisfies the range, or null if none of them do.
         */
        function maxSatisfying(versions: Array<string | SemVer>, range: string | Range, loose?: boolean): string;

        /**
         * Returns the lowest version in the list that satisfies the range, or null if none of them do.
         */
        function minSatisfying(versions: Array<string | SemVer>, range: string, loose?: boolean): string;

        /**
         * Returns true if version is greater than all the versions possible in the range.
         */
        function gtr(version: string | SemVer, range: string | Range, loose?: boolean): boolean;

        /**
         * Returns true if version is less than all the versions possible in the range.
         */
        function ltr(version: string | SemVer, range: string | Range, loose?: boolean): boolean;

        /**
         * Returns true if the version is outside the bounds of the range in either the high or low direction.
         * The hilo argument must be either the string '>' or '<'. (This is the function called by gtr and ltr.)
         */
        function outside(version: string | SemVer, range: string | Range, hilo: '>' | '<', loose?: boolean): boolean;

        /**
         * Returns true if any of the ranges comparators intersect
         */
        function intersects(range1: string | Range, range2: string | Range, loose?: boolean): boolean;

        // Coercion

        /**
         * Coerces a string to semver if possible
         */
        function coerce(version: string | SemVer): SemVer | null;

        class SemVer {
            constructor(version: string | SemVer, loose?: boolean);

            raw: string;
            loose: boolean;
            format(): string;
            inspect(): string;

            major: number;
            minor: number;
            patch: number;
            version: string;
            build: string[];
            prerelease: string[];

            compare(other: string | SemVer): 1 | 0 | -1;
            compareMain(other: string | SemVer): 1 | 0 | -1;
            comparePre(other: string | SemVer): 1 | 0 | -1;
            inc(release: I.ReleaseType, identifier?: string): SemVer;
        }

        class Comparator {
            constructor(comp: string | Comparator, loose?: boolean);

            semver: SemVer;
            operator: string;
            value: boolean;
            parse(comp: string): void;
            test(version: string | SemVer): boolean;
            intersects(comp: Comparator, loose?: boolean): boolean;
        }

        class Range {
            constructor(range: string | Range, loose?: boolean);

            range: string;
            raw: string;
            loose: boolean;
            format(): string;
            inspect(): string;

            set: Comparator[][];
            parseRange(range: string): Comparator[];
            test(version: string | SemVer): boolean;
            intersects(range: Range, loose?: boolean): boolean;
        }
    }
}
