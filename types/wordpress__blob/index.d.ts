// Type definitions for @wordpress/blob 2.4
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/blob/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

/**
 * Create a blob URL from a file.
 *
 * @param file - The file to create a blob URL for.
 *
 * @returns The blob URL.
 */
export function createBlobURL(file: File): string;

/**
 * Retrieve a file based on a blob URL. The file must have been created by
 * `createBlobURL` and not removed by `revokeBlobURL`, otherwise it will return
 * `undefined`.
 *
 * @param url - The blob URL.
 *
 * @returns The file for the blob URL.
 */
export function getBlobByURL(url: string): File | undefined;

/**
 * Check whether a url is a blob url.
 *
 * @param url - The URL.
 *
 * @returns Is the url a blob url?
 */
export function isBlobURL(url: string): boolean;

/**
 * Remove the resource and file cache from memory.
 *
 * @param url - The blob URL.
 */
export function revokeBlobURL(url: string): void;
