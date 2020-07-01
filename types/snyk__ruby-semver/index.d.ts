// Type definitions for @snyk/ruby-semver 2.2
// Project: https://github.com/Snyk/ruby-semver#readme
// Definitions by: Jamie Magee <https://github.com/JamieMagee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

// comparison
export function gt(v1: string, v2: string): boolean;
export function gte(v1: string, v2: string): boolean;
export function lt(v1: string, v2: string): boolean;
export function lte(v1: string, v2: string): boolean;
export function eq(v1: string, v2: string): boolean;
export function neq(v1: string, v2: string): boolean;
export function cmp(v1: string, comparator: Comparator, v2: string): boolean;
export function compare(v1: string, v2: string): boolean;
export function rcompare(v1: string, v2: string): boolean;
export function diff(v1: string, v2: string): string;
// functions
export function valid(v: string): boolean;
export function prerelease(v: string): string[];
export function major(v: string): number;
export function minor(v: string): number;
export function patch(v: string): number;
// ranges
export function validRange(range: string): boolean;
export function satisfies(version: string, range: string): boolean;
export function maxSatisfying(versions: string[], range: string): string;
export function minSatisfying(versions: string[], range: string): string;
export function intersects(r1: string, r2: string): boolean;

export type Comparator = '>' | '>=' | '<' | '<=' | '==' | '!=' | '===' | '!==';
