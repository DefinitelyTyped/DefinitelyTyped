/**
 * @param {string} property Name of a css property to check for.
 * @return {?string} property name supported in the browser, or null if not
 * supported.
 */
declare function getVendorPrefixedName(property): string | null | undefined;

declare namespace getVendorPrefixedName {}

export = getVendorPrefixedName;
