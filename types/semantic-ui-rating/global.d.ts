interface JQuery {
    rating: SemanticUI.Rating;
}

declare namespace SemanticUI {
    interface Rating {
        settings: RatingSettings;

        /**
         * Sets rating programmatically
         */
        (behavior: 'set rating', rating: number): JQuery;
        /**
         * Gets current rating
         */
        (behavior: 'get rating'): number;
        /**
         * Disables interactive rating mode
         */
        (behavior: 'disable'): JQuery;
        /**
         * Enables interactive rating mode
         */
        (behavior: 'enable'): JQuery;
        /**
         * Clears current rating
         */
        (behavior: 'clear rating'): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof RatingSettings>(behavior: 'setting', name: K, value?: undefined): RatingSettings._Impl[K];
        <K extends keyof RatingSettings>(behavior: 'setting', name: K, value: RatingSettings._Impl[K]): JQuery;
        (behavior: 'setting', value: RatingSettings): JQuery;
        (settings?: RatingSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/rating.html#/settings}
     */
    type RatingSettings = RatingSettings.Param;

    namespace RatingSettings {
        type Param = (Pick<_Impl, 'initialRating'> |
            Pick<_Impl, 'fireOnInit'> |
            Pick<_Impl, 'clearable'> |
            Pick<_Impl, 'interactive'> |
            Pick<_Impl, 'onRate'> |
            Pick<_Impl, 'selector'> |
            Pick<_Impl, 'className'> |
            Pick<_Impl, 'error'> |
            Pick<_Impl, 'namespace'> |
            Pick<_Impl, 'name'> |
            Pick<_Impl, 'silent'> |
            Pick<_Impl, 'debug'> |
            Pick<_Impl, 'performance'> |
            Pick<_Impl, 'verbose'>) &
            Partial<Pick<_Impl, keyof _Impl>>;

        interface _Impl {
            // region Rating Settings

            /**
             * A number representing the default rating to apply
             *
             * @default 0
             */
            initialRating: number;
            /**
             * Whether callbacks like onRate should fire immediately after initializing with the current value.
             *
             * @default false
             */
            fireOnInit: boolean;
            /**
             * By default a rating will be only clearable if there is 1 icon. Setting to true/false will allow or disallow a user to clear their rating
             *
             * @default 'auto'
             */
            clearable: 'auto' | boolean;
            /**
             * Whether to enable user's ability to rate
             *
             * @default true
             */
            interactive: boolean;

            // endregion

            // region Callbacks

            /**
             * Is called after user selects a new rating
             */
            onRate(this: JQuery, value: number): void;

            // endregion

            // region DOM Settings

            selector: Rating.SelectorSettings;
            className: Rating.ClassNameSettings;

            // endregion

            // region Debug Settings

            error: Rating.ErrorSettings;

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

    namespace Rating {
        type SelectorSettings = SelectorSettings.Param;

        namespace SelectorSettings {
            type Param = (Pick<_Impl, 'icon'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default '.icon'
                 */
                icon: string;
            }
        }

        type ClassNameSettings = ClassNameSettings.Param;

        namespace ClassNameSettings {
            type Param = (Pick<_Impl, 'active'> |
                Pick<_Impl, 'hover'> |
                Pick<_Impl, 'loading'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'active'
                 */
                active: string;
                /**
                 * @default 'hover'
                 */
                hover: string;
                /**
                 * @default 'loading'
                 */
                loading: string;
            }
        }

        type ErrorSettings = ErrorSettings.Param;

        namespace ErrorSettings {
            type Param = (Pick<_Impl, 'action'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'You called a rating action that was not defined'
                 */
                action: string;
            }
        }
    }
}
