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
