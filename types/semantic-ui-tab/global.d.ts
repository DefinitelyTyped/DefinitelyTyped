interface JQuery {
    tab: SemanticUI.Tab;
}

declare namespace SemanticUI {
    interface Tab {
        settings: TabSettings;

        // Documentation says this exists but it does not.
        // /**
        //  * Attaches tab action to given selector. Default event if none specified is toggle
        //  */
        // (behavior: 'attach events', selector: Selector, event?: string): JQuery;
        /**
         * Changes tab to path
         */
        (behavior: 'change tab', path: string): JQuery;
        /**
         * Sets current path to state
         */
        (behavior: 'set state', path: string): JQuery;
        /**
         * Returns current path
         */
        (behavior: 'get path'): string;
        /**
         * Returns whether tab exists
         */
        (behavior: 'is tab'): boolean;
        /**
         * Returns cached HTML for path
         */
        (behavior: 'cache read', path: string): string | false;
        /**
         * Sets cached HTML for path
         */
        (behavior: 'cache add', path: string, html: string): JQuery;
        /**
         * Removes cached HTML for path
         */
        (behavior: 'cache remove', path: string): JQuery;
        (behavior: 'destroy'): JQuery;
        <K extends keyof TabSettings>(behavior: 'setting', name: K, value?: undefined): TabSettings._Impl[K];
        <K extends keyof TabSettings>(behavior: 'setting', name: K, value: TabSettings._Impl[K]): JQuery;
        (behavior: 'setting', value: TabSettings): JQuery;
        (settings?: TabSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/tab.html#/settings}
     */
    type TabSettings = TabSettings.Param;

    namespace TabSettings {
        type Param = (Pick<_Impl, 'auto'> |
            Pick<_Impl, 'deactivate'> |
            Pick<_Impl, 'history'> |
            Pick<_Impl, 'ignoreFirstLoad'> |
            Pick<_Impl, 'evaluateScripts'> |
            Pick<_Impl, 'alwaysRefresh'> |
            Pick<_Impl, 'cacheType'> |
            Pick<_Impl, 'cache'> |
            Pick<_Impl, 'apiSettings'> |
            Pick<_Impl, 'historyType'> |
            Pick<_Impl, 'path'> |
            Pick<_Impl, 'context'> |
            Pick<_Impl, 'childrenOnly'> |
            Pick<_Impl, 'maxDepth'> |
            Pick<_Impl, 'loadOnce'> |
            Pick<_Impl, 'onFirstLoad'> |
            Pick<_Impl, 'onLoad'> |
            Pick<_Impl, 'onRequest'> |
            Pick<_Impl, 'onVisible'> |
            Pick<_Impl, 'templates'> |
            Pick<_Impl, 'selector'> |
            Pick<_Impl, 'metadata'> |
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
            // region Tab Settings

            /**
             * Whether tab should load remote content as same url as history
             *
             * @default false
             */
            auto: boolean;
            /**
             * When set to siblings will only deactivate elements that are DOM siblings with the activated element.
             * When set to all the component will deactivate all other elements initialized at the same time.
             *
             * @default 'siblings'
             * @since 2.2
             */
            deactivate: 'siblings' | 'all';
            /**
             * Whether to record history events for tab changes
             *
             * @default false
             */
            history: boolean;
            /**
             * Do not load content remotely on first tab load. Useful when open tab is rendered on server.
             *
             * @default false
             */
            ignoreFirstLoad: boolean;
            /**
             * Whether inline scripts in tab HTML should be parsed on tab load.
             * Defaults to once, parsing only on first load.
             * Can also be set to true or false to always parse or never parse inline scripts.
             *
             * @default 'once'
             */
            evaluateScripts: 'once' | boolean;
            /**
             * Tab should reload content every time it is opened
             */
            alwaysRefresh: boolean;
            /**
             * Can be set to either response, DOM or html.
             * Using DOM will cache the a clone of the DOM tree, preserving all events as they existed on render.
             * response will cache the original response on load, this way callbacks always receive the same content.
             * Using html will cache the resulting html after all callbacks, making sure any changes to content are preserved.
             *
             * @default 'response'
             */
            cacheType: 'response' | 'DOM' | 'html';
            /**
             * Tab should cache content after loading locally to avoid server trip on second load
             *
             * @default true
             */
            cache: boolean;
            /**
             * Settings object for $.api call
             *
             * @default false
             * @see {@link http://semantic-ui.com/behaviors/api.html}
             */
            apiSettings: ApiSettings;
            /**
             * Can be set to hash or state.
             * Hash will use an in-page link to create history events.
             * State will use DOM History and load pages from server on refresh.
             *
             * @default 'hash'
             * @see {@link https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history}
             */
            historyType: 'hash' | 'state';
            /**
             * When using historyType state you must specify the base URL for all internal links.
             *
             * @default false
             */
            path: false | string;
            /**
             * Tabs are limited to those found inside this context
             *
             * @default false
             */
            context: false | string | JQuery;
            /**
             * If enabled limits tabs to children of passed context
             *
             * @default false
             */
            childrenOnly: boolean;
            /**
             * Maximum amount of nested tabs allowed (avoids recursion)
             *
             * @default 25
             */
            maxDepth: number;
            /**
             * When enabled only calls remote endpoint for tab data on first load and leaves the DOM undisturbed afterwards.
             *
             * @default false
             * @since 2.2.8
             */
            loadOnce: boolean;

            // endregion

            // region Callbacks

            /**
             * Callback only the first time a tab is loaded
             */
            onFirstLoad(this: JQuery, tabPath: string, parameterArray: any[], historyEvent: any): void;
            /**
             * Callback every time a tab is loaded
             */
            onLoad(this: JQuery, tabPath: string, parameterArray: any[], historyEvent: any): void;
            /**
             * Called when a tab begins loading remote content
             */
            onRequest(this: JQuery, tabPath: string): void;
            /**
             * Called after a tab becomes visible
             */
            onVisible(this: JQuery, tabPath: string): void;

            // endregion

            // region DOM Settings

            /**
             * Functions used to return content
             */
            templates: Tab.TemplatesSettings;
            /**
             * Selectors used by module
             */
            selector: Tab.SelectorSettings;
            /**
             * DOM metadata used by module
             */
            metadata: Tab.MetadataSettings;
            /**
             * Class names used to attach style to state
             */
            className: Tab.ClassNameSettings;

            // endregion

            // region Debug Settings

            error: Tab.ErrorSettings;

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

    namespace Tab {
        type TemplatesSettings = TemplatesSettings.Param;

        namespace TemplatesSettings {
            type Param = (Pick<_Impl, 'determineTitle'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * returns page title
                 */
                determineTitle(tabArray: any[]): string;
            }
        }

        type SelectorSettings = SelectorSettings.Param;

        namespace SelectorSettings {
            type Param = (Pick<_Impl, 'tabs'> |
                Pick<_Impl, 'parent'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default '.ui.tab'
                 */
                tabs: string;
                /**
                 * @default '.ui:not(.menu)'
                 */
                parent: string;
            }
        }

        type MetadataSettings = MetadataSettings.Param;

        namespace MetadataSettings {
            type Param = (Pick<_Impl, 'tab'> |
                Pick<_Impl, 'loaded'> |
                Pick<_Impl, 'promise'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'tab'
                 */
                tab: string;
                /**
                 * @default 'loaded'
                 */
                loaded: string;
                /**
                 * @default 'promise'
                 */
                promise: string;
            }
        }

        type ClassNameSettings = ClassNameSettings.Param;

        namespace ClassNameSettings {
            type Param = (Pick<_Impl, 'loading'> |
                Pick<_Impl, 'active'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'loading'
                 */
                loading: string;
                /**
                 * @default 'active'
                 */
                active: string;
            }
        }

        type ErrorSettings = ErrorSettings.Param;

        namespace ErrorSettings {
            type Param = (Pick<_Impl, 'api'> |
                Pick<_Impl, 'method'> |
                Pick<_Impl, 'missingTab'> |
                Pick<_Impl, 'noContent'> |
                Pick<_Impl, 'path'> |
                Pick<_Impl, 'recursion'> |
                Pick<_Impl, 'state'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'You attempted to load content without API module'
                 */
                api: string;
                /**
                 * @default 'The method you called is not defined'
                 */
                method: string;
                /**
                 * @default 'Activated tab cannot be found for this context.'
                 */
                missingTab: string;
                /**
                 * @default 'The tab you specified is missing a content url.'
                 */
                noContent: string;
                /**
                 * @default 'History enabled, but no path was specified'
                 */
                path: string;
                /**
                 * @default 'Max recursive depth reached'
                 */
                recursion: string;
                /**
                 * @default 'The state library has not been initialized'
                 */
                state: string;
            }
        }
    }
}
