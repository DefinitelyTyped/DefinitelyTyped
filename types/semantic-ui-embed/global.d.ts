interface JQuery {
    embed: SemanticUI.Embed;
}

declare namespace SemanticUI {
    interface Embed {
        settings: EmbedSettings;

        /**
         * Changes iframe to a new content source
         */
        (behavior: 'change', source: string, id: string, url: string): JQuery;
        /**
         * Removes embed and shows placeholder content if available
         */
        (behavior: 'reset'): JQuery;
        /**
         * Shows embed content
         */
        (behavior: 'show'): JQuery;
        /**
         * Hides embed content and shows placeholder content
         */
        (behavior: 'hide'): JQuery;
        /**
         * Returns current content id
         */
        (behavior: 'get id'): string;
        /**
         * Returns placeholder image url
         */
        (behavior: 'get placeholder'): string;
        /**
         * Returns source name
         */
        (behavior: 'get sources'): string;
        /**
         * Returns source type
         */
        (behavior: 'get type'): string;
        /**
         * Returns URL with all parameters added
         */
        (behavior: 'get url'): string;
        /**
         * Returns whether embed content has placeholder
         */
        (behavior: 'has placeholder'): boolean;
        /**
         * Destroys instance and removes all events
         */
        (behavior: 'destroy'): JQuery;
        <K extends keyof EmbedSettings>(behavior: 'setting', name: K, value?: undefined): EmbedSettings[K];
        <K extends keyof EmbedSettings>(behavior: 'setting', name: K, value: EmbedSettings[K]): JQuery;
        (behavior: 'setting', value: EmbedSettings.Param): JQuery;
        (settings?: EmbedSettings.Param): JQuery;
    }

    /**
     * @see {@link http://semantic-ui.com/modules/embed.html#/settings}
     */
    interface EmbedSettings extends Pick<EmbedSettings._Impl, keyof EmbedSettings._Impl> { }

    namespace EmbedSettings {
        type Param = EmbedSettings | object;

        interface _Impl {
            /**
             * Specifies a url to use for embed
             *
             * @default false
             */
            url: false | string;

            // region Embed Settings

            /**
             * Specifies an icon to use with placeholder content
             *
             * @default false
             */
            icon: false | string;
            /**
             * Specifies a source to use, if no source is provided it will be determined from the domain of a specified url.
             *
             * @default false
             */
            source: false | string;
            /**
             * Specifies an id value to replace with the {id} value found in templated urls
             *
             * @default false
             */
            id: false | string;
            /**
             * Specify an object containing key/value pairs to add to the iframes GET parameters
             *
             * @default false
             */
            parameters: false | Embed.ParametersSettings;

            // endregion

            // region Video Settings

            /**
             * Default setting auto will only autoplay content when a placeholder is specified. Setting to true or false will force autoplay.
             *
             * @default 'auto'
             */
            autoplay: 'auto' | boolean;
            /**
             * Specifies a default chrome color with Vimeo or YouTube.
             *
             * @default '#444444'
             */
            color: string;
            /**
             * Whether to prefer HD content
             *
             * @default true
             */
            hd: boolean;
            /**
             * Whether to show networks branded UI like title cards, or after video calls to action.
             *
             * @default false
             */
            brandedUI: boolean;

            // endregion

            // region Callbacks

            /**
             * Callback when iframe is generated
             */
            onCreate(this: JQuery, url: string): void;
            /**
             * Whenever an iframe contents is shown
             */
            onDisplay(this: JQuery): void;
            /**
             * Callback immediately before Embed is removed from DOM
             */
            onPlaceholderDisplay(this: JQuery): void;
            /**
             * Callback when module parameters are determined. Allows you to adjust parameters at run time by returning a new parameters object.
             */
            onEmbed(this: JQuery, parameters: Embed.ParametersSettings): Embed.ParametersSettings;

            // endregion

            // region DOM Settings

            /**
             * DOM Selectors used internally
             */
            selector: Embed.SelectorSettings;
            /**
             * HTML Data attributes used to store data
             */
            metadata: Embed.MetadataSettings;
            /**
             * Class names used to attach style to state
             */
            className: Embed.ClassNameSettings;
            templates: Embed.TemplatesSettings;

            // endregion

            // region Debug Settings

            error: Embed.ErrorSettings;

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

    namespace Embed {
        interface ParametersSettings extends Pick<ParametersSettings._Impl, keyof ParametersSettings._Impl> { }

        namespace ParametersSettings {
            type Param = ParametersSettings | object;

            interface _Impl {
                [key: string]: any;
            }
        }

        interface SelectorSettings extends Pick<SelectorSettings._Impl, keyof SelectorSettings._Impl> { }

        namespace SelectorSettings {
            type Param = SelectorSettings | object;

            interface _Impl {
                /**
                 * @default '.embed'
                 */
                embed: string;
                /**
                 * @default '.placeholder'
                 */
                placeholder: string;
                /**
                 * @default '.play'
                 */
                play: string;
            }
        }

        interface MetadataSettings extends Pick<MetadataSettings._Impl, keyof MetadataSettings._Impl> { }

        namespace MetadataSettings {
            type Param = MetadataSettings | object;

            interface _Impl {
                /**
                 * @default 'id'
                 */
                id: string;
                /**
                 * @default 'icon'
                 */
                icon: string;
                /**
                 * @default 'placeholder'
                 */
                placeholder: string;
                /**
                 * @default 'source'
                 */
                source: string;
                /**
                 * @default 'url'
                 */
                url: string;
            }
        }

        interface ClassNameSettings extends Pick<ClassNameSettings._Impl, keyof ClassNameSettings._Impl> { }

        namespace ClassNameSettings {
            type Param = ClassNameSettings | object;

            interface _Impl {
                /**
                 * @default 'active'
                 */
                active: string;
                /**
                 * @default 'embed'
                 */
                embed: string;
            }
        }

        interface TemplatesSettings extends Pick<TemplatesSettings._Impl, keyof TemplatesSettings._Impl> { }

        namespace TemplatesSettings {
            type Param = TemplatesSettings | object;

            interface _Impl {
                /**
                 * returns html for iframe
                 */
                iframe(url: string, parameters: string): string;
                /**
                 * returns html for placeholder element
                 */
                placeholder(image: string, icon: string): string;
            }
        }

        interface ErrorSettings extends Pick<ErrorSettings._Impl, keyof ErrorSettings._Impl> { }

        namespace ErrorSettings {
            type Param = ErrorSettings | object;

            interface _Impl {
                /**
                 * @default 'No URL specified'
                 */
                noURL: string;
                /**
                 * @default 'The method you called is not defined'
                 */
                method: string;
            }
        }
    }
}
