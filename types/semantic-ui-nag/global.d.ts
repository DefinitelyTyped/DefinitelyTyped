interface JQuery {
    nag: SemanticUI.Nag;
}

declare namespace SemanticUI {
    interface Nag {
        settings: NagSettings;

        (behavior: 'show'): JQuery;
        (behavior: 'hide'): JQuery;
        /**
         * Clears cookie so nag shows again
         */
        (behavior: 'clear'): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof NagSettings>(behavior: 'setting', name: K, value?: undefined): NagSettings[K];
        <K extends keyof NagSettings>(behavior: 'setting', name: K, value: NagSettings[K]): JQuery;
        (behavior: 'setting', value: NagSettings): JQuery;
        (settings?: NagSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/nag.html}
     */
    interface NagSettings {
        // region Behavior

        /**
         * allows cookie to be overridden
         *
         * @default false
         */
        persist?: boolean;
        /**
         * set to zero to require manually dismissal, otherwise hides on its own
         *
         * @default 0
         */
        displayTime?: number;
        animation?: Nag.AnimationSettings;
        /**
         * @default false
         */
        context?: false | string | JQuery;
        /**
         * @default false
         */
        detachable?: boolean;

        /**
         * @default 30
         */
        expires?: number;
        /**
         * @default false
         */
        domain?: false | string;
        /**
         * @default '/'
         */
        path?: string;

        /**
         * type of storage to use
         *
         * @default 'cookie'
         */
        storageMethod?: 'cookie' | 'localstorage' | 'sessionstorage';

        /**
         * @default 'nag'
         */
        key?: any;
        /**
         * @default 'dismiss'
         */
        value?: any;

        /**
         * @default 500
         */
        speed?: number;
        /**
         * @default 'easeOutQuad'
         */
        easing?: string;

        // endregion

        // region Callbacks

        onHide?(this: JQuery): void;

        // endregion

        // region DOM Settings

        className?: Nag.ClassNameSettings;
        selector?: Nag.SelectorSettings;

        // endregion

        // region Debug Settings

        error?: Nag.ErrorSettings;

        // endregion

        // region Component Settings

        // region DOM Settings

        /**
         * Event namespace. Makes sure module teardown does not effect other events attached to an element.
         */
        namespace?: string;

        // endregion

        // region Debug Settings

        /**
         * Name used in log statements
         */
        name?: string;
        /**
         * Silences all console output including error messages, regardless of other debug settings.
         */
        silent?: boolean;
        /**
         * Debug output to console
         */
        debug?: boolean;
        /**
         * Show console.table output with performance metrics
         */
        performance?: boolean;
        /**
         * Debug output includes all internal behaviors
         */
        verbose?: boolean;

        // endregion

        // endregion
    }

    namespace Nag {
        interface AnimationSettings {
            /**
             * @default 'slide'
             */
            show?: string;
            /**
             * @default 'slide'
             */
            hide?: string;
        }

        interface ClassNameSettings {
            /**
             * @default 'bottom'
             */
            bottom?: string;
            /**
             * @default 'fixed'
             */
            fixed?: string;
        }

        interface SelectorSettings {
            /**
             * @default '.close.icon'
             */
            close?: string;
        }

        interface ErrorSettings {
            /**
             * @default '$.cookie is not included. A storage solution is required.'
             */
            noCookieStorage?: string;
            /**
             * @default 'Neither $.cookie or store is defined. A storage solution is required for storing state'
             */
            noStorage?: string;
            /**
             * @default 'The method you called is not defined.'
             */
            method?: string;
        }
    }
}
