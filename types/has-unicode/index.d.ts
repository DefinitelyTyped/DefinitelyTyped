/**
 * Detects whether the current environment supports Unicode (UTF-8).
 *
 * On Windows, returns `false` as there's no reliable way to detect Unicode
 * console support. On other platforms, checks the `LC_ALL`, `LC_CTYPE`, or
 * `LANG` environment variables for UTF-8 encoding.
 */
declare function hasUnicode(): boolean;

export = hasUnicode;
