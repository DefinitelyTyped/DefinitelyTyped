/**
 * Concatenate url with parameters from request options.
 *
 * @param {Object} options request options including url and params
 * @param {string} path - the path to add to the url
 * @returns {string}
 */
export function buildUrl(options: any, path: string): string;
/**
 * Make request to provided Url. Custom user options are merged with
 * the globally defined settings and request defaults.
 *
 * This method returns both a Promise and accepts error first callbacks.
 *
 * @param {string} path - The url of the request
 * @param {Settings} [customOptions] - User options for this single request
 * @returns {Promise} - Response promise
 */
export default function request(path: string, customOptions?: Settings): Promise<any>;
import { Settings } from "../settings";
