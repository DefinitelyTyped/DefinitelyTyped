// Type definitions for koji-tools 0.5
// Project: https://github.com/madewithkoji/koji-tools
// Definitions by: Jeff Peterson <https://github.com/bdjeffyp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// tslint:disable-next-line:export-just-namespace
export = Koji;
export as namespace Koji;

declare namespace Koji {
    // index.js methods

    /**
     * Server-side function that sets file watchers on all .koji customization
     * files and allows for hot reloading of these properties.
     */
    function watch(): void;

    /**
     * Sets up Koji.config parameters for each client and handles communication
     * between the Koji live preview iframe and your app.
     */
    function pageLoad(options?: object): void;

    /**
     * Wrapper for fetch that takes objects from Koji.routes.
     */
    function request(route: object, params?: object): Promise<any>;

    /**
     * After the 'pwaPromptReady' event has fired, this function will make a popup
     * installation prompt appear.
     */
    function pwaPrompt(): any;

    /**
     * An auto-generated list of all of the Koji Customization Controls (VCCs) your
     * application has setup. When Koji.watch() is being used this list updates automatically.
     */
    const config: object;

    /**
     * A auto-generated list of routes based on koji.json files in your project that are
     * used in Koji.request() to request the backend of your app.
     */
    const routes: object;

    const pwa: any;

    /**
     * Registers a callback on a Koji event.
     * @param event name of the event being called
     * @param callback method to execute when the event occurs
     */
    function on(event: string, callback: () => void): void;

    /**
     * Resolve the value of a user's secret from the Koji Keystore. Secrets are used for
     * values that are not intended to be read by other users when a project is remixed.
     */
    function resolveSecret(key: string): string | null;
}
