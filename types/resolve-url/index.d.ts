/**
 * Resolves URLs by leveraging the browser's URL resolution mechanism.
 * Requires at least one argument. Additional arguments are resolved against
 * the accumulated base.
 */
declare function resolveUrl(...urls: string[]): string;
export = resolveUrl;
