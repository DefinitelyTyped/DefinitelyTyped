/**
 * Attempts to open the browser with a given URL.
 *
 * On Mac OS X, attempts to reuse an existing Chrome tab via AppleScript.
 *
 * Otherwise, falls back to [open](https://github.com/sindresorhus/open) behavior.
 */
declare function openBrowser(url: string): boolean;
export = openBrowser;
