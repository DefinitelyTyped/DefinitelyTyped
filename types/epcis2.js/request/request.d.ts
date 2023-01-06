/**
 * Concatenate url with parameters from request options.
 *
 * @param options request options including url and params
 * @param path - the path to add to the url
 */
export function buildUrl(options: any, path: string): string;
/**
 * Make request to provided Url. Custom user options are merged with
 * the globally defined settings and request defaults.
 *
 * This method returns both a Promise and accepts error first callbacks.
 *
 * @param path - The url of the request
 * @param [customOptions] - User options for this single request
 * @returns Response promise
 */
export default function request(path: string, customOptions?: Settings): Promise<any>;
import { Settings } from "../settings";
