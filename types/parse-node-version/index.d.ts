interface ParsedNodeVersion {
    /**
     * Major version
     */
    major: number;
    /**
     * Minor version
     */
    minor: number;
    /**
     * Patch version
     */
    patch: number;
    /**
     * Pre-release version
     */
    pre: string;
    /**
     * Build information
     */
    build: string;
}

/**
 * Takes a Node version string (usually `process.version`) and returns an object
 * with the `major`/`minor`/`patch` (which will all be numbers) and `pre`/`build`
 * keys (which will always be a string). If the version doesn't contain any
 * pre-release or build information, the properties will be returned
 * as empty string.
 *
 * @param nodeVersionString Node version string
 */
declare function parseNodeVersion(nodeVersionString: string): ParsedNodeVersion;

export = parseNodeVersion;
