/**
 * Generate a base64 code from an image through a URL or a path.
 */
export as namespace imageToBase64;

/**
 * Generate a base64 code from an image through a URL or a path.
 * @param path - a URL or a path
 * @returns a base64 code from an image
 */
declare function imageToBase64(urlOrImage: string): Promise<string>;

export = imageToBase64;
