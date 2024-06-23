/**
 * Webpack loader to rewrite `import.meta` in modules with url data to the source code file location.
 *
 * @example
 * return import.meta;
 * // becomes: return ({ url: `${window.location.protocol}//${window.location.host}/relative/path/to/file.js` });
 *
 * return import.meta.url;
 * // becomes: return ({ url: `${window.location.protocol}//${window.location.host}/relative/path/to/file.js` }).url;
 */
declare function importMetaLoader(source: string): string;

export = importMetaLoader;
