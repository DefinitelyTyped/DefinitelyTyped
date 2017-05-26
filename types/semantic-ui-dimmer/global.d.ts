interface JQuery {
    dimmer: SemanticUI.Dimmer;
}

declare namespace SemanticUI {
    interface Dimmer {
        settings: DimmerSettings;

        /**
         * Detaches a given element from DOM and reattaches element inside dimmer
         */
        (behavior: 'add content', element: string | JQuery): JQuery;
        /**
         * Shows dimmer
         */
        (behavior: 'show'): JQuery;
        /**
         * Hides dimmer
         */
        (behavior: 'hide'): JQuery;
        /**
         * Toggles current dimmer visibility
         */
        (behavior: 'toggle'): JQuery;
        /**
         * Changes dimmer opacity
         */
        (behavior: 'set opacity', opacity: number): JQuery;
        /**
         * Creates a new dimmer in dimmable context
         */
        (behavior: 'create'): JQuery;
        /**
         * Returns current duration for show or hide event depending on current visibility
         */
        (behavior: 'get duration'): number;
        /**
         * Returns DOM element for dimmer
         */
        (behavior: 'get dimmer'): JQuery;
        /**
         * Returns whether current dimmable has a dimmer
         */
        (behavior: 'has dimmer'): boolean;
        /**
         * Whether section's dimmer is active
         */
        (behavior: 'is active'): boolean;
        /**
         * Whether dimmer is animating
         */
        (behavior: 'is animating'): boolean;
        /**
         * Whether current element is a dimmer
         */
        (behavior: 'is dimmer'): boolean;
        /**
         * Whether current element is a dimmable section
         */
        (behavior: 'is dimmable'): boolean;
        /**
         * Whether dimmer is disabled
         */
        (behavior: 'is disabled'): boolean;
        /**
         * Whether dimmer is not disabled
         */
        (behavior: 'is enabled'): boolean;
        /**
         * Whether dimmable section is body
         */
        (behavior: 'is page'): boolean;
        /**
         * Whether dimmer is a page dimmer
         */
        (behavior: 'is page dimmer'): boolean;
        /**
         * Sets page dimmer to active
         */
        (behavior: 'set active'): JQuery;
        /**
         * Sets an element as a dimmable section
         */
        (behavior: 'set dimmable'): JQuery;
        /**
         * Sets a dimmable section as dimmed
         */
        (behavior: 'set dimmed'): JQuery;
        /**
         * Sets current dimmer as a page dimmer
         */
        (behavior: 'set page dimmer'): JQuery;
        /**
         * Sets a dimmer as disabled
         */
        (behavior: 'set disabled'): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof DimmerSettings>(behavior: 'setting', name: K, value?: undefined): DimmerSettings[K];
        <K extends keyof DimmerSettings>(behavior: 'setting', name: K, value: DimmerSettings[K]): JQuery;
        (behavior: 'setting', value: DimmerSettings | object): JQuery;
        (settings?: DimmerSettings | object): JQuery;
    }

    interface DimmerSettings extends Pick<Dimmer._Settings, keyof Dimmer._Settings> { }

    namespace Dimmer {
        /**
         * @see {@link http://semantic-ui.com/modules/dimmer.html#/settings}
         */
        interface _Settings {
            // region Behavior

            /**
             * Dimmers opacity from 0-1. Defaults to auto which uses the CSS specified opacity.
             *
             * @default 'auto'
             */
            opacity: 'auto' | number;
            /**
             * Specify a variation to add when generating dimmer, like inverted
             *
             * @default false
             */
            variation: false | string;
            /**
             * If initializing a dimmer on a dimmable context, you can use dimmerName to distinguish between multiple dimmers in that context.
             *
             * @default false
             */
            dimmerName: false | string;
            /**
             * Whether clicking on the dimmer should hide the dimmer (Defaults to auto, closable only when settings.on is not hover
             *
             * @default 'auto'
             */
            closable: 'auto' | boolean;
            /**
             * Can be set to hover or click to show/hide dimmer on dimmable event
             *
             * @default false
             */
            on: false | 'hover' | 'click';
            /**
             * Whether to dim dimmers using CSS transitions.
             *
             * @default true
             */
            useCSS: boolean;
            /**
             * Animation duration of dimming. If an integer is used, that value will apply to both show and hide animations.
             */
            duration: number | DurationSettings;
            /**
             * Named transition to use when animating menu in and out. Fade and slide down are available without including ui transitions
             *
             * @default 'fade'
             * @see {@link http://semantic-ui.com/modules/transition.html}
             */
            transition: string;

            // endregion

            // region Callbacks

            /**
             * Callback on element show
             */
            onShow(this: JQuery): void;
            /**
             * Callback on element hide
             */
            onHide(this: JQuery): void;
            /**
             * Callback on element show or hide
             */
            onChange(this: JQuery): void;

            // endregion

            // region DOM Settings

            /**
             * Object containing selectors used by module.
             */
            selector: SelectorSettings;
            /**
             * Templates used to generate dimmer content
             */
            template: TemplateSettings;
            /**
             * Class names used to attach style to state
             */
            className: ClassNameSettings;

            // endregion

            // region Debug Settings

            /**
             * Error messages displayed to console
             */
            error: ErrorSettings;

            // endregion

            // region Component Settings

            // region DOM Settings

            /**
             * Event namespace. Makes sure module teardown does not effect other events attached to an element.
             */
            namespace: string;

            // endregion

            // region Debug Settings

            /**
             * Name used in log statements
             */
            name: string;
            /**
             * Silences all console output including error messages, regardless of other debug settings.
             */
            silent: boolean;
            /**
             * Debug output to console
             */
            debug: boolean;
            /**
             * Show console.table output with performance metrics
             */
            performance: boolean;
            /**
             * Debug output includes all internal behaviors
             */
            verbose: boolean;

            // endregion

            // endregion
        }

        interface DurationSettings extends Pick<_DurationSettings, keyof _DurationSettings> { }

        interface _DurationSettings {
            /**
             * @default 500
             */
            show: number;
            /**
             * @default 500
             */
            hide: number;
        }

        interface SelectorSettings extends Pick<_SelectorSettings, keyof _SelectorSettings> { }

        interface _SelectorSettings {
            /**
             * @default '.dimmable'
             */
            dimmable: string;
            /**
             * @default '.ui.dimmer'
             */
            dimmer: string;
            /**
             * @default '.ui.dimmer > .content, .ui.dimmer > .content > .center'
             */
            content: string;
        }

        interface TemplateSettings extends Pick<_TemplateSettings, keyof _TemplateSettings> { }

        interface _TemplateSettings {
            dimmer(): JQuery;
        }

        interface ClassNameSettings extends Pick<_ClassNameSettings, keyof _ClassNameSettings> { }

        interface _ClassNameSettings {
            /**
             * @default 'active'
             */
            active: string;
            /**
             * @default 'dimmable'
             */
            dimmable: string;
            /**
             * @default 'dimmed'
             */
            dimmed: string;
            /**
             * @default 'disabled'
             */
            disabled: string;
            /**
             * @default 'page'
             */
            pageDimmer: string;
            /**
             * @default 'hide'
             */
            hide: string;
            /**
             * @default 'show'
             */
            show: string;
            /**
             * @default 'transition'
             */
            transition: string;
        }

        interface ErrorSettings extends Pick<_ErrorSettings, keyof _ErrorSettings> { }

        interface _ErrorSettings {
            /**
             * @default 'The method you called is not defined.'
             */
            method: string;
        }
    }
}
