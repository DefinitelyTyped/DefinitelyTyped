/**
 * Returns a cache identifier (string) consisting of the specified environment
 * and related package versions.
 */
declare function getCacheIdentifier(environment: string, packages: ReadonlyArray<string>): string;
export = getCacheIdentifier;
