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
        <K extends keyof NagSettings>(behavior: 'setting', name: K, value?: undefined): NagSettings._Impl[K];
        <K extends keyof NagSettings>(behavior: 'setting', name: K, value: NagSettings._Impl[K]): JQuery;
        (behavior: 'setting', value: NagSettings): JQuery;
        (settings?: NagSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/nag.html}
     */
    type NagSettings = NagSettings.Param;

    namespace NagSettings {
        type Param = (Pick<_Impl, 'persist'> |
            Pick<_Impl, 'displayTime'> |
            Pick<_Impl, 'animation'> |
            Pick<_Impl, 'context'> |
            Pick<_Impl, 'detachable'> |
            Pick<_Impl, 'expires'> |
            Pick<_Impl, 'domain'> |
            Pick<_Impl, 'path'> |
            Pick<_Impl, 'storageMethod'> |
            Pick<_Impl, 'key'> |
            Pick<_Impl, 'value'> |
            Pick<_Impl, 'speed'> |
            Pick<_Impl, 'easing'> |
            Pick<_Impl, 'onHide'> |
            Pick<_Impl, 'className'> |
            Pick<_Impl, 'selector'> |
            Pick<_Impl, 'error'> |
            Pick<_Impl, 'namespace'> |
            Pick<_Impl, 'name'> |
            Pick<_Impl, 'silent'> |
            Pick<_Impl, 'debug'> |
            Pick<_Impl, 'performance'> |
            Pick<_Impl, 'verbose'>) &
            Partial<Pick<_Impl, keyof _Impl>>;

        interface _Impl {
            // region Behavior

            /**
             * allows cookie to be overridden
             *
             * @default false
             */
            persist: boolean;
            /**
             * set to zero to require manually dismissal, otherwise hides on its own
             *
             * @default 0
             */
            displayTime: number;
            animation: Nag.AnimationSettings;
            /**
             * @default false
             */
            context: false | string | JQuery;
            /**
             * @default false
             */
            detachable: boolean;

            /**
             * @default 30
             */
            expires: number;
            /**
             * @default false
             */
            domain: false | string;
            /**
             * @default '/'
             */
            path: string;

            /**
             * type of storage to use
             *
             * @default 'cookie'
             */
            storageMethod: 'cookie' | 'localstorage' | 'sessionstorage';

            /**
             * @default 'nag'
             */
            key: any;
            /**
             * @default 'dismiss'
             */
            value: any;

            /**
             * @default 500
             */
            speed: number;
            /**
             * @default 'easeOutQuad'
             */
            easing: string;

            // endregion

            // region Callbacks

            onHide(this: JQuery): void;

            // endregion

            // region DOM Settings

            className: Nag.ClassNameSettings;
            selector: Nag.SelectorSettings;

            // endregion

            // region Debug Settings

            error: Nag.ErrorSettings;

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
    }

    namespace Nag {
        type AnimationSettings = AnimationSettings.Param;

        namespace AnimationSettings {
            type Param = (Pick<_Impl, 'show'> |
                Pick<_Impl, 'hide'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'slide'
                 */
                show: string;
                /**
                 * @default 'slide'
                 */
                hide: string;
            }
        }

        type ClassNameSettings = ClassNameSettings.Param;

        namespace ClassNameSettings {
            type Param = (Pick<_Impl, 'bottom'> |
                Pick<_Impl, 'fixed'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'bottom'
                 */
                bottom: string;
                /**
                 * @default 'fixed'
                 */
                fixed: string;
            }
        }

        type SelectorSettings = SelectorSettings.Param;

        namespace SelectorSettings {
            type Param = (Pick<_Impl, 'close'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default '.close.icon'
                 */
                close: string;
            }
        }

        type ErrorSettings = ErrorSettings.Param;

        namespace ErrorSettings {
            type Param = (Pick<_Impl, 'noCookieStorage'> |
                Pick<_Impl, 'noStorage'> |
                Pick<_Impl, 'method'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default '$.cookie is not included. A storage solution is required.'
                 */
                noCookieStorage: string;
                /**
                 * @default 'Neither $.cookie or store is defined. A storage solution is required for storing state'
                 */
                noStorage: string;
                /**
                 * @default 'The method you called is not defined.'
                 */
                method: string;
            }
        }
    }
}
