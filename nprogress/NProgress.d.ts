// Type definitions for NProgress
// Project: https://github.com/rstacruz/nprogress
// Definitions by: Judah Gabriel Himango <http://debuggerdotbreak.wordpress.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface NProgressStatic {
    /**
     * Shows the progress bar and begins trickling progress.
     * @returns {NProgressConfigureOptions} The current NProgress object, useful for chaining.
     */
    start(): NProgressStatic;

    /**
     * Finishes loading by transitioning it to 100%, then fading out.
     * @param {boolean} forceShow Forces the progress bar to show, even if it's not being shown. (The default behavior is that .done() will not do anything if .start() isn't called.)
     * @returns {NProgressConfigureOptions} The current NProgress object, useful for chaining.
     */
    done(forceShow?: boolean): NProgressStatic;

    /**
     * Increments the progress bar with a random amount. This will never get to 100%: use it for every image load (or similar).
     * @returns {NProgressConfigureOptions} The current NProgress object, useful for chaining.
     */
    inc(): NProgressStatic;

    /**
     * Increments the progress bar with a set amount.
     * @param {number} amount This will get the current status value and adds the value until status is max 0.994
     * @returns {NProgressConfigureOptions} The current NProgress object, useful for chaining.
     */
    inc(amount: number): NProgressStatic;

    /**
     * Removes the progress indicator.
     */
    remove(): void;

    /**
     * Sets the progress percentage.
     * @param {number} progressPercent A number between 0.0 and 1.0 that represents the progress percentage.
     * @returns {NProgressConfigureOptions} The current NProgress object, useful for chaining.
     */
    set(progressPercent: number): NProgressStatic;

    /**
     * Configures the progress indicator.
     * @param {NProgressConfigureOptions} options An object containing the configuration options.
     * @returns {NProgressConfigureOptions} The current NProgress object, useful for chaining.
     */
    configure(options: NProgressConfigureOptions): NProgressStatic;

    /**
     * Gets the NProgress version.
     */
    version: string;

    /**
     * Gets the status. If started, it will be the last progress number set.
     */
    status: any;

    /**
     * Gets whether progress has been started.
     * @returns {boolean} Whether the progress has started.
     */
    isStarted(): boolean;
}

interface NProgressConfigureOptions {

    /**
     * The minimum progress percentage. Default is 0.08.
     */
    minimum?: number;

    /**
     * How much to increase per trickle. Example: .02. Default is true.
     */
    trickleRate?: number;

    /**
     * How often to trickle, in milliseconds. Default is 800.
     */
    trickleSpeed?: number;

    /**
     * Whether to show the spinner. Defaults to true. Default is true.
     */
    showSpinner?: boolean;

    /**
     * Whether to enable trickling the progress. Default is true.
     */
    trickle?: boolean;

    /**
     * The CSS easing animation to use. Default is 'ease'.
     */
    ease?: string;

    /**
     * The animation speed in milliseconds. Default is 200.
     */
    speed?: number;

    /**
     * The HTML markup inserted for the progress indicator. To keep the progress bar working, keep an element with role='bar' in there.
     */
    template?: string;
}

declare var NProgress: NProgressStatic;

declare module "nprogress" {
    export = NProgress;
}
