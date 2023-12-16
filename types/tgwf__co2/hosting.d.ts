declare namespace _default {
    export { check };
}

/**
 * Check if a domain is hosted by a green web host.
 * @param {string|array} domain - The domain to check, or an array of domains to be checked.
 * @returns {boolean|array} - A boolean if a string was provided, or an array of booleans if an array of domains was provided.
 */
declare function check(domain: string | any[]): boolean | any[];

export default _default;
