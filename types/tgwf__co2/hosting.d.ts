/**
 * Check if a domain is hosted by a green web host.
 * @param {string|string[]} domain - The domain to check, or an array of domains to be checked.
 * @param {string} userAgentIdentifier - Optional. The app, site, or organisation that is making the request. This gets sent as a User-Agent header with the outbound fetch request.
 * @returns {boolean|string[]} - A boolean if a string was provided, or an array of strings if an array of domains was provided.
 */

export function check(domain: string | string[], userAgentIdentifier?: string): boolean | string[];
