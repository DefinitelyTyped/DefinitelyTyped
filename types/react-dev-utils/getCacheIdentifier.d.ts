/**
 * Returns a cache identifier (string) consisting of the specified environment
 * and related package versions.
 */
declare function getCacheIdentifier(environment: string, packages: readonly string[]): string;
export = getCacheIdentifier;
