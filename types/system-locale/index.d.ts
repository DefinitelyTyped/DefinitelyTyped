// Type definitions for system-locale 0.1
// Project: https://github.com/derhuerst/system-locale
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = systemLocale;

/**
 * Get the [locale](https://en.wikipedia.org/wiki/Locale_(computer_software)) from your operating system.
 * Support macOS, Linux & Windows.
 *
 * @example
 * import locale = require('system-locale');
 *
 * locale().then(console.log);
 * // => 'en_DE'
 */
declare function systemLocale(): Promise<string>;

declare namespace systemLocale {
    /**
     * Get the [locale](https://en.wikipedia.org/wiki/Locale_(computer_software)) from your operating system.
     * Support macOS, Linux & Windows.
     *
     * @example
     * import locale = require('system-locale');
     *
     * console.log(locale.sync());
     * // => 'en_DE'
     */
    function sync(): string;
}
