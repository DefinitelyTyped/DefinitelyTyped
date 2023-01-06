/**
 * Build url safe parameter string if an object provided.
 *
 * @export
 * @param {(Object | string)} [params] key-value object or final query string
 * @param {boolean} [useEncoding] whether to skip encoding
 * @returns {string}
 */
export default function buildParams(params?: (any | string), useEncoding?: boolean): string;
