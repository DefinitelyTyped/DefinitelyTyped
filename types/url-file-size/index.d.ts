// Type definitions for url-file-size 1.0
// Project: https://github.com/dimdenGD/url-file-size#readme
// Definitions by: Shehab Ali Tweel <https://github.com/shahoob>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { URL } from "url";

/**
 * Get file size from URL (in bytes) without downloading it.
 * @param url URL to get file size from
 * @param timeout [timeout=10000] Timeout in milliseconds
 * @param maxRedirects [maxRedirects=5] Maximum number of redirects to follow
 * @returns File size in bytes
 */
declare function ufs(url: string | URL, timeout?: number, maxRedirects?: number): Promise<number>;
export = ufs;
