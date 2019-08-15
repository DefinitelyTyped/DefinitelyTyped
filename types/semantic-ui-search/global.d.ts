interface JQuery {
    search: SemanticUI.Search;
}

declare namespace SemanticUI {
    interface Search {
        settings: SearchSettings;

        /**
         * Search for value currently set in search input
         */
        (behavior: 'query', callback?: () => void): JQuery;
        /**
         * Displays message in search results with text, using template matching type
         */
        (behavior: 'display message', text: string, type: string): JQuery;
        /**
         * Cancels current remote search query
         */
        (behavior: 'cancel query'): JQuery;
        /**
         * Search local object for specified query and display results
         */
        (behavior: 'search local', query: string): JQuery;
        /**
         * Whether has minimum characters
         */
        (behavior: 'has minimum characters'): boolean;
        /**
         * Search remote endpoint for specified query and display results
         */
        (behavior: 'search remote', query: string, callback?: () => void): JQuery;
        /**
         * Search object for specified query and return results
         */
        (behavior: 'search object', query: string, object: any, searchFields: string[]): any;
        /**
         * Cancels current remote search request
         */
        (behavior: 'cancel query'): JQuery;
        /**
         * Whether search is currently focused
         */
        (behavior: 'is focused'): boolean;
        /**
         * Whether search results are visible
         */
        (behavior: 'is visible'): boolean;
        /**
         * Whether search results are empty
         */
        (behavior: 'is empty'): boolean;
        /**
         * Returns current search value
         */
        (behavior: 'get value'): any;
        /**
         * Returns JSON object matching searched title or id (see above)
         */
        (behavior: 'get result', value: any): any;
        /**
         * Sets search input to value
         */
        (behavior: 'set value', value: any): JQuery;
        /**
         * Reads cached results for query
         */
        (behavior: 'read cache', query: string): JQuery;
        /**
         * Clears value from cache, if no parameter passed clears all cache
         */
        (behavior: 'clear cache', query?: string): JQuery;
        /**
         * Writes cached results for query
         */
        (behavior: 'write cache', query: string): JQuery;
        /**
         * Adds HTML to results and displays
         */
        (behavior: 'add results', html: string): JQuery;
        /**
         * Shows results container
         */
        (behavior: 'show results', callback?: () => void): JQuery;
        /**
         * Hides results container
         */
        (behavior: 'hide results', callback?: () => void): JQuery;
        /**
         * Generates results using parser specified by settings.template
         */
        (behavior: 'generate results', response: any): JQuery;
        /**
         * Removes all events
         */
        (behavior: 'destroy'): JQuery;
        <K extends keyof SearchSettings>(behavior: 'setting', name: K, value?: undefined): SearchSettings._Impl[K];
        <K extends keyof SearchSettings>(behavior: 'setting', name: K, value: SearchSettings._Impl[K]): JQuery;
        (behavior: 'setting', value: SearchSettings): JQuery;
        (settings?: SearchSettings): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/search.html#/settings}
     */
    type SearchSettings = SearchSettings.Param;

    namespace SearchSettings {
        type Param = (Pick<_Impl, 'apiSettings'> |
            Pick<_Impl, 'type'> |
            Pick<_Impl, 'minCharacters'> |
            Pick<_Impl, 'transition'> |
            Pick<_Impl, 'duration'> |
            Pick<_Impl, 'maxResults'> |
            Pick<_Impl, 'cache'> |
            Pick<_Impl, 'source'> |
            Pick<_Impl, 'selectFirstResult'> |
            Pick<_Impl, 'showNoResults'> |
            Pick<_Impl, 'searchFullText'> |
            Pick<_Impl, 'fields'> |
            Pick<_Impl, 'searchFields'> |
            Pick<_Impl, 'hideDelay'> |
            Pick<_Impl, 'searchDelay'> |
            Pick<_Impl, 'easing'> |
            Pick<_Impl, 'onSelect'> |
            Pick<_Impl, 'onResultsAdd'> |
            Pick<_Impl, 'onSearchQuery'> |
            Pick<_Impl, 'onResults'> |
            Pick<_Impl, 'onResultsOpen'> |
            Pick<_Impl, 'onResultsClose'> |
            Pick<_Impl, 'templates'> |
            Pick<_Impl, 'regExp'> |
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
            type: string;

            // region Behavior

            /**
             * Settings for API call.
             *
             * @see {@link http://semantic-ui.com/behaviors/api.html#/usage}
             */
            apiSettings: ApiSettings;
            /**
             * Minimum characters to query for results
             *
             * @default 1
             */
            minCharacters: number;
            /**
             * Named transition to use when animating menu in and out. Fade and slide down are available without including ui transitions
             *
             * @default 'fade'
             * @see {@link http://semantic-ui.com/modules/transition.html}
             */
            transition: string;
            /**
             * Duration of animation events
             *
             * @default 300
             */
            duration: number;
            /**
             * Maximum results to display when using local and simple search, maximum category count for category search
             *
             * @default 7
             */
            maxResults: number;
            /**
             * Caches results locally to avoid requerying server
             *
             * @default true
             */
            cache: boolean;
            /**
             * Specify a Javascript object which will be searched locally
             *
             * @default false
             */
            source: false | any;
            /**
             * Whether the search should automatically select the first search result after searching
             *
             * @default false
             */
            selectFirstResult: boolean;
            /**
             * Whether a "no results" message should be shown if no results are found. (These messages can be modified using the template object specified below)
             *
             * @default false
             */
            showNoResults: boolean;
            /**
             * Return local results that match anywhere inside your content
             *
             * @default true
             */
            searchFullText: boolean;
            /**
             * List mapping display content to JSON property, either with API or source.
             */
            fields: Search.FieldsSettings;
            /**
             * Specify object properties inside local source object which will be searched
             */
            searchFields: string[];
            /**
             * Delay before hiding results after search blur
             *
             * @default 0
             */
            hideDelay: number;
            /**
             * Delay before querying results on inputchange
             *
             * @default 100
             */
            searchDelay: number;
            /**
             * Easing equation when using fallback Javascript animation
             *
             * @default 'easeOutExpo'
             */
            easing: string;

            // endregion

            // region Callbacks

            /**
             * Callback on element selection by user.
             * The first parameter includes the filtered response results for that element.
             * The function should return false to prevent default action (closing search results and selecting value).
             */
            onSelect(this: JQuery, result: any, response: any): false | void;
            /**
             * Callback after processing element template to add HTML to results. Function should return false to prevent default actions.
             */
            onResultsAdd(this: JQuery, html: string): false | void;
            /**
             * Callback on search query
             */
            onSearchQuery(this: JQuery, query: string): void;
            /**
             * Callback on server response
             */
            onResults(this: JQuery, response: any): void;
            /**
             * Callback when results are opened
             */
            onResultsOpen(this: JQuery): void;
            /**
             * Callback when results are closed
             */
            onResultsClose(this: JQuery): void;

            // endregion

            // region Templates

            templates: Search.TemplatesSettings;

            // endregion

            // region DOM Settings

            /**
             * Regular expressions used for matching
             */
            regExp: Search.RegExpSettings;
            /**
             * Selectors used to find parts of a module
             */
            selector: Search.SelectorSettings;
            /**
             * HTML5 metadata attributes used internally
             */
            metadata: Search.MetadataSettings;
            /**
             * Class names used to determine element state
             */
            className: Search.ClassNameSettings;

            // endregion

            // region Debug Settings

            error: Search.ErrorSettings;

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

    namespace Search {
        type FieldsSettings = FieldsSettings.Param;

        namespace FieldsSettings {
            type Param = (Pick<_Impl, 'categories'> |
                Pick<_Impl, 'categoryName'> |
                Pick<_Impl, 'categoryResults'> |
                Pick<_Impl, 'description'> |
                Pick<_Impl, 'image'> |
                Pick<_Impl, 'price'> |
                Pick<_Impl, 'results'> |
                Pick<_Impl, 'title'> |
                Pick<_Impl, 'action'> |
                Pick<_Impl, 'actionText'> |
                Pick<_Impl, 'actionURL'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * array of categories (category view)
                 *
                 * @default 'results'
                 */
                categories: string;
                /**
                 * name of category (category view)
                 *
                 * @default 'name'
                 */
                categoryName: string;
                /**
                 * array of results (category view)
                 *
                 * @default 'results'
                 */
                categoryResults: string;
                /**
                 * result description
                 *
                 * @default 'description'
                 */
                description: string;
                /**
                 * result image
                 *
                 * @default 'image'
                 */
                image: string;
                /**
                 * result price
                 *
                 * @default 'price'
                 */
                price: string;
                /**
                 * array of results (standard)
                 *
                 * @default 'results'
                 */
                results: string;
                /**
                 * result title
                 *
                 * @default 'title'
                 */
                title: string;
                /**
                 * "view more" object name
                 *
                 * @default 'action'
                 */
                action: string;
                /**
                 * "view more" text
                 *
                 * @default 'text'
                 */
                actionText: string;
                /**
                 * "view more" url
                 *
                 * @default 'url'
                 */
                actionURL: string;
            }
        }

        type TemplatesSettings = TemplatesSettings.Param;

        namespace TemplatesSettings {
            type Param = (Pick<_Impl, 'escape'> |
                Pick<_Impl, 'message'> |
                Pick<_Impl, 'category'> |
                Pick<_Impl, 'standard'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                escape(string: string): string;
                message(message: string, type: string): string;
                category(response: any): string;
                standard(response: any): string;
            }
        }

        type RegExpSettings = RegExpSettings.Param;

        namespace RegExpSettings {
            type Param = (Pick<_Impl, 'escape'> |
                Pick<_Impl, 'beginsWith'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g
                 */
                escape: RegExp;
                /**
                 * @default '(?:\s|^)'
                 */
                beginsWith: string;
            }
        }

        type SelectorSettings = SelectorSettings.Param;

        namespace SelectorSettings {
            type Param = (Pick<_Impl, 'prompt'> |
                Pick<_Impl, 'searchButton'> |
                Pick<_Impl, 'results'> |
                Pick<_Impl, 'category'> |
                Pick<_Impl, 'result'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default '.prompt'
                 */
                prompt: string;
                /**
                 * @default '.search.button'
                 */
                searchButton: string;
                /**
                 * @default '.results'
                 */
                results: string;
                /**
                 * @default '.category'
                 */
                category: string;
                /**
                 * @default '.result'
                 */
                result: string;
            }
        }

        type MetadataSettings = MetadataSettings.Param;

        namespace MetadataSettings {
            type Param = (Pick<_Impl, 'cache'> |
                Pick<_Impl, 'results'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'cache'
                 */
                cache: string;
                /**
                 * @default 'results'
                 */
                results: string;
            }
        }

        type ClassNameSettings = ClassNameSettings.Param;

        namespace ClassNameSettings {
            type Param = (Pick<_Impl, 'active'> |
                Pick<_Impl, 'empty'> |
                Pick<_Impl, 'focus'> |
                Pick<_Impl, 'loading'> |
                Pick<_Impl, 'pressed'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'active'
                 */
                active: string;
                /**
                 * @default 'empty'
                 */
                empty: string;
                /**
                 * @default 'focus'
                 */
                focus: string;
                /**
                 * @default 'loading'
                 */
                loading: string;
                /**
                 * @default 'down'
                 */
                pressed: string;
            }
        }

        type ErrorSettings = ErrorSettings.Param;

        namespace ErrorSettings {
            type Param = (Pick<_Impl, 'source'> |
                Pick<_Impl, 'noResults'> |
                Pick<_Impl, 'logging'> |
                Pick<_Impl, 'noTemplate'> |
                Pick<_Impl, 'serverError'> |
                Pick<_Impl, 'maxResults'> |
                Pick<_Impl, 'method'>) &
                Partial<Pick<_Impl, keyof _Impl>>;

            interface _Impl {
                /**
                 * @default 'Cannot search. No source used, and Semantic API module was not included'
                 */
                source: string;
                /**
                 * @default 'Your search returned no results'
                 */
                noResults: string;
                /**
                 * @default 'Error in debug logging, exiting.'
                 */
                logging: string;
                /**
                 * @default 'A valid template name was not specified.'
                 */
                noTemplate: string;
                /**
                 * @default 'There was an issue with querying the server.'
                 */
                serverError: string;
                /**
                 * @default 'Results must be an array to use maxResults setting'
                 */
                maxResults: string;
                /**
                 * @default 'The method you called is not defined.'
                 */
                method: string;
            }
        }
    }
}
