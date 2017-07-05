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
        <K extends keyof TabSettings>(behavior: 'setting', name: K, value?: undefined): TabSettings[K];
        <K extends keyof TabSettings>(behavior: 'setting', name: K, value: TabSettings[K]): JQuery;
        (behavior: 'setting', value: TabSettings.Param): JQuery;
        (settings?: TabSettings.Param): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/tab.html#/settings}
     */
    interface TabSettings extends Pick<TabSettings._Impl, keyof TabSettings._Impl> { }

    namespace TabSettings {
        type Param = TabSettings | object;

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
        interface TemplatesSettings extends Pick<TemplatesSettings._Impl, keyof TemplatesSettings._Impl> { }

        namespace TemplatesSettings {
            type Param = TemplatesSettings | object;

            interface _Impl {
                /**
                 * returns page title
                 */
                determineTitle(tabArray: any[]): string;
            }
        }

        interface SelectorSettings extends Pick<SelectorSettings._Impl, keyof SelectorSettings._Impl> { }

        namespace SelectorSettings {
            type Param = SelectorSettings | object;

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

        interface MetadataSettings extends Pick<MetadataSettings._Impl, keyof MetadataSettings._Impl> { }

        namespace MetadataSettings {
            type Param = MetadataSettings | object;

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

        interface ClassNameSettings extends Pick<ClassNameSettings._Impl, keyof ClassNameSettings._Impl> { }

        namespace ClassNameSettings {
            type Param = ClassNameSettings | object;

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

        interface ErrorSettings extends Pick<ErrorSettings._Impl, keyof ErrorSettings._Impl> { }

        namespace ErrorSettings {
            type Param = ErrorSettings | object;

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
