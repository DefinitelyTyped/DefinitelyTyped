/// <reference types="node" />

/**
 * Returns the filename of the main module entry point.
 * Handles IIS Node environments specially.
 * Falls back to process.cwd() if require.main is not available.
 */
declare function requireMainFilename(_require?: NodeRequire): string;
export = requireMainFilename;
