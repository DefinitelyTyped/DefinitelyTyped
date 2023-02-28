/**
 * Returns a URL or a path with slash at the end
 * In production can be URL, absolute path, relative path
 * In development always will be an absolute path
 * In development can use `path` module functions for operations
 */
declare function getPublicUrlOrPath(
    isEnvDevelopment: boolean,
    homepage: string | undefined,
    envPublicUrl: string | undefined,
): string;

export = getPublicUrlOrPath;
