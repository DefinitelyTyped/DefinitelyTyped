interface JQuery {
    modal: SemanticUI.Modal;
}

declare namespace SemanticUI {
    interface Modal {
        settings: ModalSettings;

        /**
         * Shows the modal
         */
        (behavior: 'show'): JQuery;
        /**
         * Hides the modal
         */
        (behavior: 'hide'): JQuery;
        /**
         * Toggles the modal
         */
        (behavior: 'toggle'): JQuery;
        /**
         * Refreshes centering of modal on page
         */
        (behavior: 'refresh'): JQuery;
        /**
         * Shows associated page dimmer
         */
        (behavior: 'show dimmer'): JQuery;
        /**
         * Hides associated page dimmer
         */
        (behavior: 'hide dimmer'): JQuery;
        /**
         * Hides all modals not selected modal in a dimmer
         */
        (behavior: 'hide others'): JQuery;
        /**
         * Hides all visible modals in the same dimmer
         */
        (behavior: 'hide all'): JQuery;
        /**
         * Caches current modal size
         */
        (behavior: 'cache sizes'): JQuery;
        /**
         * Returns whether the modal can fit on the page
         */
        (behavior: 'can fit'): boolean;
        /**
         * Returns whether the modal is active
         */
        (behavior: 'is active'): boolean;
        /**
         * Sets modal to active
         */
        (behavior: 'set active'): JQuery;
        (behavior: 'attach events', selector: string | JQuery, event?: string): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof ModalSettings>(behavior: 'setting', name: K, value?: undefined): ModalSettings._Impl[K];
        <K extends keyof ModalSettings>(behavior: 'setting', name: K, value: ModalSettings._Impl[K]): JQuery;
        (behavior: 'setting', value: ModalSettings): JQuery;
        (settings?: ModalSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/modal.html#/settings}
     */
    type ModalSettings = ModalSettings.Param;

    namespace ModalSettings {
        type Param = (Pick<_Impl, 'detachable'> |
            Pick<_Impl, 'autofocus'> |
            Pick<_Impl, 'observeChanges'> |
            Pick<_Impl, 'allowMultiple'> |
            Pick<_Impl, 'keyboardShortcuts'> |
            Pick<_Impl, 'offset'> |
            Pick<_Impl, 'context'> |
            Pick<_Impl, 'closable'> |
            Pick<_Impl, 'dimmerSettings'> |
            Pick<_Impl, 'transition'> |
            Pick<_Impl, 'duration'> |
            Pick<_Impl, 'queue'> |
            Pick<_Impl, 'onShow'> |
            Pick<_Impl, 'onVisible'> |
            Pick<_Impl, 'onHide'> |
            Pick<_Impl, 'onHidden'> |
            Pick<_Impl, 'onApprove'> |
            Pick<_Impl, 'onDeny'> |
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
            // region Modal Settings

            /**
             * If set to false will prevent the modal from being moved to inside the dimmer
             *
             * @default true
             */
            detachable: boolean;
            /**
             * When true, the first form input inside the modal will receive focus when shown. Set this to false to prevent this behavior.
             *
             * @default true
             */
            autofocus: boolean;
            /**
             * Whether any change in modal DOM should automatically refresh cached positions
             *
             * @default false
             */
            observeChanges: boolean;
            /**
             * If set to true will not close other visible modals when opening a new one
             *
             * @default false
             */
            allowMultiple: boolean;
            /**
             * Whether to automatically bind keyboard shortcuts
             *
             * @default true
             */
            keyboardShortcuts: boolean;
            /**
             * A vertical offset to allow for content outside of modal, for example a close button, to be centered.
             *
             * @default 0
             */
            offset: number;
            /**
             * Selector or jquery object specifying the area to dim
             *
             * @default 'body'
             */
            context: string | JQuery;
            /**
             * Setting to false will not allow you to close the modal by clicking on the dimmer
             *
             * @default true
             */
            closable: boolean;
            /**
             * You can specify custom settings to extend UI dimmer
             *
             * @see {@link http://semantic-ui.com/modules/dimmer.html}
             */
            dimmerSettings: DimmerSettings;
            /**
             * Named transition to use when animating menu in and out, full list can be found in ui transitions docs.
             *
             * @default 'scale'
             * @see {@link http://semantic-ui.com/modules/transition.html}
             */
            transition: string;
            /**
             * Duration of animation
             *
             * @default 400
             */
            duration: number;
            /**
             * Whether additional animations should queue
             *
             * @default false
             */
            queue: boolean;

            // endregion

            // region Callbacks

            /**
             * Is called when a modal starts to show.
             */
            onShow(this: JQuery): void;
            /**
             * Is called after a modal has finished showing animating.
             */
            onVisible(this: JQuery): void;
            /**
             * Is called after a modal starts to hide. If the function returns false, the modal will not hide.
             */
            onHide(this: JQuery, $element: JQuery): false | void;
            /**
             * Is called after a modal has finished hiding animation.
             */
            onHidden(this: JQuery): void;
            /**
             * Is called after a positive, approve or ok button is pressed. If the function returns false, the modal will not hide.
             */
            onApprove(this: JQuery, $element: JQuery): false | void;
            /**
             * Is called after a negative, deny or cancel button is pressed. If the function returns false the modal will not hide.
             */
            onDeny(this: JQuery, $element: JQuery): false | void;

            // endregion

            // region DOM Settings

            selector: Modal.SelectorSettings;
            className: Modal.ClassNameSettings;

            // endregion

            // region Debug Settings

            error: Modal.ErrorSettings;

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

    namespace Modal {
        type SelectorSettings = SelectorSettings.Param;

        namespace SelectorSettings {
            type Param = (Pick<_Impl, 'close'> |
                Pick<_Impl, 'approve'> |
                Pick<_Impl, 'deny'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default '.close, .actions .button'
                 */
                close: string;
                /**
                 * @default '.actions .positive, .actions .approve, .actions .ok'
                 */
                approve: string;
                /**
                 * @default '.actions .negative, .actions .deny, .actions .cancel'
                 */
                deny: string;
            }
        }

        type ClassNameSettings = ClassNameSettings.Param;

        namespace ClassNameSettings {
            type Param = (Pick<_Impl, 'active'> |
                Pick<_Impl, 'scrolling'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'active'
                 */
                active: string;
                /**
                 * @default 'scrolling'
                 */
                scrolling: string;
            }
        }

        type ErrorSettings = ErrorSettings.Param;

        namespace ErrorSettings {
            type Param = (Pick<_Impl, 'method'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'The method you called is not defined.'
                 */
                method: string;
            }
        }
    }
}
