export interface BrowserSpriteConfig {
    /**
     * Should following options be automatically configured:
     * - `syncUrlsWithBaseTag`
     * - `locationChangeAngularEmitter`
     * - `moveGradientsOutsideSymbol`
     * @default true
     */
    autoConfigure?: boolean;

    /**
     * Mounting selector
     * @default 'body'
     */
    mountTo?: string;

    /**
     * Fix disappearing SVG elements when <base href> exists.
     * Executes when sprite mounted.
     * @see http://stackoverflow.com/a/18265336/796152
     * @see https://github.com/everdimension/angular-svg-base-fix
     * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
     * @default false
     */
    syncUrlsWithBaseTag?: boolean;

    /**
     * Should sprite listen custom location change event
     * @default true
     */
    listenLocationChangeEvent?: boolean;

    /**
     * Custom window event name which should be emitted to update sprite urls
     * @default 'locationChange'
     */
    locationChangeEvent?: string;

    /**
     * Emit location change event in Angular automatically
     * @default {false}
     */
    locationChangeAngularEmitter?: boolean;

    /**
     * Selector to find symbols usages when updating sprite urls
     * @default 'use[*|href]'
     */
    usagesToUpdate?: string;

    /**
     * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
     * Executes when sprite is rendered, but not mounted.
     * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
     * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
     * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
     * @default false
     */
    moveGradientsOutsideSymbol?: boolean;
}

declare const config: BrowserSpriteConfig;

export default config;
