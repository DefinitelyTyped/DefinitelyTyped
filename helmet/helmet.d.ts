// Type definitions for helmet
// Project: https://github.com/helmetjs/helmet
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Helmet {
    (): void;

    /**
     * @summary Prevent clickjacking.
     * @param {string} header The header.
     */
    frameguard(header ?: string): void;

    /**
     * @summary Hide "X-Powered-By" header.
     * @param {Object} options The options.
     */
    hidePoweredBy(options ?: Object): void;

    /**
     * @summary Adds the "Strict-Transport-Security" header.
     * @param {Object} options The options.
     */
    hsts(options ?: Object): void;

    /**
     * @summary Add the "X-Download-Options" header.
     */
    ieNoOpen(): void;

    /**
     * @summary Add the "Cache-Control" and "Pragma" headers to stop caching.
     */
    nocache(options ?: Object): void;

    /**
     * @summary Adds the "X-Content-Type-Options" header.
     */
    noSniff(): void;

    /**
     * @summary Adds the "Public-Key-Pins" header.
     */
    publicKeyPins(options ?: Object): void;

    /**
     * @summary Prevent Cross-site scripting attacks.
     * @param {Object} options The options.
     */
    xssFilter(options ?: Object): void;
}

declare module "helmet" {
    var helmet: Helmet;
    export = helmet;
}
