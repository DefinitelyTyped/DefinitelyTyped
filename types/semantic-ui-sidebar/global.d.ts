interface JQuery {
    sidebar: SemanticUI.Sidebar;
}

declare namespace SemanticUI {
    interface Sidebar {
        settings: SidebarSettings;

        /**
         * Attaches sidebar action to given selector. Default event if none specified is toggle
         */
        (behavior: 'attach events', selector: string | JQuery, event?: string): JQuery;
        /**
         * Shows sidebar
         */
        (behavior: 'show'): JQuery;
        /**
         * Hides sidebar
         */
        (behavior: 'hide'): JQuery;
        /**
         * Toggles visibility of sidebar
         */
        (behavior: 'toggle'): JQuery;
        /**
         * Returns whether sidebar is visible
         */
        (behavior: 'is visible'): boolean;
        /**
         * Returns whether sidebar is hidden
         */
        (behavior: 'is hidden'): boolean;
        /**
         * Pushes page content to be visible alongside sidebar
         */
        (behavior: 'push page'): JQuery;
        /**
         * Returns direction of current sidebar
         */
        (behavior: 'get direction'): string;
        /**
         * Returns page content to original position
         */
        (behavior: 'pull page'): JQuery;
        /**
         * Adds stylesheet to page head to trigger sidebar animations
         */
        (behavior: 'add body CSS'): JQuery;
        /**
         * Removes any inline stylesheets for sidebar animation
         */
        (behavior: 'remove body CSS'): JQuery;
        /**
         * Returns vendor prefixed transition end event
         */
        (behavior: 'get transition event'): string;
        (behavior: 'destroy'): JQuery;
        <K extends keyof SidebarSettings>(behavior: 'setting', name: K, value?: undefined): SidebarSettings._Impl[K];
        <K extends keyof SidebarSettings>(behavior: 'setting', name: K, value: SidebarSettings._Impl[K]): JQuery;
        (behavior: 'setting', value: SidebarSettings): JQuery;
        (settings?: SidebarSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/sidebar.html#/settings}
     */
    type SidebarSettings = SidebarSettings.Param;

    namespace SidebarSettings {
        type Param = (Pick<_Impl, 'context'> |
            Pick<_Impl, 'exclusive'> |
            Pick<_Impl, 'closable'> |
            Pick<_Impl, 'dimPage'> |
            Pick<_Impl, 'scrollLock'> |
            Pick<_Impl, 'returnScroll'> |
            Pick<_Impl, 'delaySetup'> |
            Pick<_Impl, 'transition'> |
            Pick<_Impl, 'mobileTransition'> |
            Pick<_Impl, 'defaultTransition'> |
            Pick<_Impl, 'useLegacy'> |
            Pick<_Impl, 'duration'> |
            Pick<_Impl, 'easing'> |
            Pick<_Impl, 'onVisible'> |
            Pick<_Impl, 'onShow'> |
            Pick<_Impl, 'onChange'> |
            Pick<_Impl, 'onHide'> |
            Pick<_Impl, 'onHidden'> |
            Pick<_Impl, 'className'> |
            Pick<_Impl, 'regExp'> |
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
             * Context which sidebar will appear inside
             *
             * @default 'body'
             */
            context: string | JQuery;
            /**
             * Whether multiple sidebars can be open at once
             *
             * @default false
             */
            exclusive: boolean;
            /**
             * Whether sidebar can be closed by clicking on page
             *
             * @default true
             */
            closable: boolean;
            /**
             * Whether to dim page contents when sidebar is visible
             *
             * @default true
             */
            dimPage: boolean;
            /**
             * Whether to lock page scroll when sidebar is visible
             *
             * @default false
             */
            scrollLock: boolean;
            /**
             * Whether to return to original scroll position when sidebar is hidden, automatically occurs with transition: scale
             *
             * @default false
             */
            returnScroll: boolean;
            /**
             * When sidebar is initialized without the proper HTML, using this option will defer creation of DOM to use requestAnimationFrame.
             *
             * @default false
             */
            delaySetup: boolean;

            // endregion

            // region Animation

            /**
             * Named transition to use when animating sidebar. Defaults to 'auto' which selects transition from defaultTransition based on direction.
             *
             * @default 'auto'
             */
            transition: string;
            /**
             * Named transition to use when animating when detecting mobile device. Defaults to 'auto' which selects transition from defaultTransition based on direction.
             *
             * @default 'auto'
             */
            mobileTransition: string;
            /**
             * Default transitions for each direction and screen size, used with transition: auto
             */
            defaultTransition: Sidebar.DefaultTransitionSettings;
            /**
             * Whether Javascript animations should be used. Defaults to false. Setting to auto will use legacy animations only for browsers that do not support CSS transforms
             *
             * @default false
             */
            useLegacy: 'auto' | boolean;
            /**
             * Duration of sidebar animation when using legacy Javascript animation
             *
             * @default 500
             */
            duration: number;
            /**
             * Easing to use when using legacy Javascript animation
             *
             * @default 'easeInOutQuint'
             */
            easing: string;

            // endregion

            // region Callbacks

            /**
             * Is called when a sidebar begins animating in.
             */
            onVisible(this: JQuery): void;
            /**
             * Is called when a sidebar has finished animating in.
             */
            onShow(this: JQuery): void;
            /**
             * Is called when a sidebar begins to hide or show
             */
            onChange(this: JQuery): void;
            /**
             * Is called before a sidebar begins to animate out.
             */
            onHide(this: JQuery): void;
            /**
             * Is called after a sidebar has finished animating out.
             */
            onHidden(this: JQuery): void;

            // endregion

            // region DOM Settings

            className: Sidebar.ClassNameSettings;
            regExp: Sidebar.RegExpSettings;
            selector: Sidebar.SelectorSettings;

            // endregion

            // region Debug Settings

            error: Sidebar.ErrorSettings;

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

    namespace Sidebar {
        type DefaultTransitionSettings = DefaultTransitionSettings.Param;

        namespace DefaultTransitionSettings {
            type Param = (Pick<_Impl, 'computer'> |
                Pick<_Impl, 'mobile'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                computer: ComputerSettings;
                mobile: MobileSettings;
            }

            type ComputerSettings = ComputerSettings.Param;

            namespace ComputerSettings {
                type Param = (Pick<_Impl, 'left'> |
                    Pick<_Impl, 'right'> |
                    Pick<_Impl, 'top'> |
                    Pick<_Impl, 'bottom'>) &
                    Partial<Pick<_Impl, keyof _Impl>>;

                interface _Impl {
                    /**
                     * @default 'uncover'
                     */
                    left: string;
                    /**
                     * @default 'uncover'
                     */
                    right: string;
                    /**
                     * @default 'overlay'
                     */
                    top: string;
                    /**
                     * @default 'overlay'
                     */
                    bottom: string;
                }
            }

            type MobileSettings = MobileSettings.Param;

            namespace MobileSettings {
                type Param = (Pick<_Impl, 'left'> |
                    Pick<_Impl, 'right'> |
                    Pick<_Impl, 'top'> |
                    Pick<_Impl, 'bottom'>) &
                    Partial<Pick<_Impl, keyof _Impl>>;

                interface _Impl {
                    /**
                     * @default 'uncover'
                     */
                    left: string;
                    /**
                     * @default 'uncover'
                     */
                    right: string;
                    /**
                     * @default 'overlay'
                     */
                    top: string;
                    /**
                     * @default 'overlay'
                     */
                    bottom: string;
                }
            }
        }

        type ClassNameSettings = ClassNameSettings.Param;

        namespace ClassNameSettings {
            type Param = (Pick<_Impl, 'active'> |
                Pick<_Impl, 'animating'> |
                Pick<_Impl, 'dimmed'> |
                Pick<_Impl, 'ios'> |
                Pick<_Impl, 'pushable'> |
                Pick<_Impl, 'pushed'> |
                Pick<_Impl, 'right'> |
                Pick<_Impl, 'top'> |
                Pick<_Impl, 'left'> |
                Pick<_Impl, 'bottom'> |
                Pick<_Impl, 'visible'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'active'
                 */
                active: string;
                /**
                 * @default 'animating'
                 */
                animating: string;
                /**
                 * @default 'dimmed'
                 */
                dimmed: string;
                /**
                 * @default 'ios'
                 */
                ios: string;
                /**
                 * @default 'pushable'
                 */
                pushable: string;
                /**
                 * @default 'pushed'
                 */
                pushed: string;
                /**
                 * @default 'right'
                 */
                right: string;
                /**
                 * @default 'top'
                 */
                top: string;
                /**
                 * @default 'left'
                 */
                left: string;
                /**
                 * @default 'bottom'
                 */
                bottom: string;
                /**
                 * @default 'visible'
                 */
                visible: string;
            }
        }

        type RegExpSettings = RegExpSettings.Param;

        namespace RegExpSettings {
            type Param = (Pick<_Impl, 'ios'> |
                Pick<_Impl, 'mobile'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default /(iPad|iPhone|iPod)/g
                 */
                ios: RegExp;
                /**
                 * @default /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
                 */
                mobile: RegExp;
            }
        }

        type SelectorSettings = SelectorSettings.Param;

        namespace SelectorSettings {
            type Param = (Pick<_Impl, 'fixed'> |
                Pick<_Impl, 'omitted'> |
                Pick<_Impl, 'pusher'> |
                Pick<_Impl, 'sidebar'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default '.fixed'
                 */
                fixed: string;
                /**
                 * @default 'script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed'
                 */
                omitted: string;
                /**
                 * @default '.pusher'
                 */
                pusher: string;
                /**
                 * @default '.ui.sidebar'
                 */
                sidebar: string;
            }
        }

        type ErrorSettings = ErrorSettings.Param;

        namespace ErrorSettings {
            type Param = (Pick<_Impl, 'method'> |
                Pick<_Impl, 'pusher'> |
                Pick<_Impl, 'movedSidebar'> |
                Pick<_Impl, 'overlay'> |
                Pick<_Impl, 'notFound'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'The method you called is not defined.'
                 */
                method: string;
                /**
                 * @default 'Had to add pusher element. For optimal performance make sure body content is inside a pusher element'
                 */
                pusher: string;
                /**
                 * @default 'Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag'
                 */
                movedSidebar: string;
                /**
                 * @default 'The overlay setting is no longer supported, use animation: overlay'
                 */
                overlay: string;
                /**
                 * @default 'There were no elements that matched the specified selector'
                 */
                notFound: string;
            }
        }
    }
}
