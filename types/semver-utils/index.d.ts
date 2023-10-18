export interface SemVer {
    semver?: string | undefined;
    version?: string | undefined;
    major?: string | undefined;
    minor?: string | undefined;
    patch?: string | undefined;
    release?: string | undefined;
    build?: string | undefined;
    operator?: string | undefined;
}

export function parse(version: string): SemVer;
export function stringify(version: SemVer): string;
export function parseRange(range: string): SemVer[];
export function stringifyRange(version: SemVer[]): string;
