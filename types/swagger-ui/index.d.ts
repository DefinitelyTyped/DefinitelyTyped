// Type definitions for swagger-ui 3.47
// Project: https://github.com/swagger-api/swagger-ui
// Definitions by: Julian Pfeil <https://github.com/juarrow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = SwaggerUI;

declare function SwaggerUI(opts: SwaggerUI.SwaggerUIOptions): SwaggerUI;

declare namespace SwaggerUI {
    interface SwaggerUIOptions {
        // Core

        /**
         * URL to fetch external configuration document from.
         */
        configUrl?: string;
        /**
         * REQUIRED if domNode is not provided. The ID of a DOM element inside which SwaggerUI will put its user interface.
         */
        dom_id?: string;
        /**
         *  REQUIRED if dom_id is not provided. The HTML DOM element inside which SwaggerUI will put its user interface. Overrides dom_id.
         */
        domNode?: HTMLElement | null;
        /**
         * A JavaScript object describing the OpenAPI definition. When used, the url parameter will not be parsed. This is useful for testing manually-generated definitions without hosting them
         */
        spec?: { [propName: string]: any };
        /**
         * The URL pointing to API definition (normally swagger.json or swagger.yaml). Will be ignored if urls or spec is used.
         */
        url?: string;
        /**
         * An array of API definition objects ([{url: "<url1>", name: "<name1>"},{url: "<url2>", name: "<name2>"}])
         * used by Topbar plugin. When used and Topbar plugin is enabled, the url parameter will not be parsed.
         * Names and URLs must be unique among all items in this array, since they're used as identifiers.
         */
        urls?: Array<{
            url: string;
            name: string;
        }>;

        // Plugin system

        /**
         * The name of a component available via the plugin system to use as the top-level layout
         * for Swagger UI.
         */
        layout?: string;
        /**
         * An array of plugin functions to use in Swagger UI.
         */
        plugins?: SwaggerUIPlugin[];
        /**
         * An array of presets to use in Swagger UI.
         * Usually, you'll want to include ApisPreset if you use this option.
         */
        presets?: SwaggerUIPlugin[];

        // Display

        /**
         * If set to true, enables deep linking for tags and operations.
         * See the Deep Linking documentation for more information.
         */
        deepLinking?: boolean;
        /**
         * Controls the display of operationId in operations list. The default is false.
         */
        displayOperationId?: boolean;
        /**
         * The default expansion depth for models (set to -1 completely hide the models).
         */
        defaultModelsExpandDepth?: number;
        /**
         * The default expansion depth for the model on the model-example section.
         */
        defaultModelExpandDepth?: number;
        /**
         * Controls how the model is shown when the API is first rendered.
         * (The user can always switch the rendering for a given model by clicking the
         * 'Model' and 'Example Value' links.)
         */
        defaultModelRendering?: "example" | "model";
        /**
         * Controls the display of the request duration (in milliseconds) for "Try it out" requests.
         */
        displayRequestDuration?: boolean;
        /**
         * Controls the default expansion setting for the operations and tags.
         * It can be 'list' (expands only the tags), 'full' (expands the tags and operations)
         * or 'none' (expands nothing).
         */
        docExpansion?: "list" | "full" | "none";
        /**
         * If set, enables filtering.
         * The top bar will show an edit box that you can use to filter the tagged operations that are shown.
         * Can be Boolean to enable or disable, or a string, in which case filtering will be enabled
         * using that string as the filter expression.
         * Filtering is case sensitive matching the filter expression anywhere inside the tag.
         */
        filter?: boolean | string;
        /**
         * If set, limits the number of tagged operations displayed to at most this many.
         * The default is to show all operations.
         */
        maxDisplayedTags?: number;
        /**
         * Apply a sort to the operation list of each API.
         * It can be 'alpha' (sort by paths alphanumerically),
         * 'method' (sort by HTTP method) or a function (see Array.prototype.sort() to know how sort function works).
         * Default is the order returned by the server unchanged.
         */
        operationsSorter?: SorterLike;
        /**
         * Controls the display of vendor extension (x-) fields and values for Operations,
         * Parameters, Responses, and Schema.
         */
        showExtensions?: boolean;
        /**
         * Controls the display of extensions (pattern, maxLength, minLength, maximum, minimum) fields
         * and values for Parameters.
         */
        showCommonExtensions?: boolean;
        /**
         * Apply a sort to the tag list of each API.
         * It can be 'alpha' (sort by paths alphanumerically)
         * or a function (see Array.prototype.sort() to learn how to write a sort function).
         * Two tag name strings are passed to the sorter for each pass.
         * Default is the order determined by Swagger UI.
         */
        tagsSorter?: SorterLike;
        /**
         * When enabled, sanitizer will leave style, class and data-* attributes untouched
         * on all HTML Elements declared inside markdown strings.
         * This parameter is Deprecated and will be removed in 4.0.0.
         * @deprecated
         */
        useUnsafeMarkdown?: boolean;
        /**
         * Provides a mechanism to be notified when Swagger UI has finished rendering a newly provided definition.
         */
        onComplete?: () => any;
        /**
         * Set to false to deactivate syntax highlighting of payloads and cURL command,
         * can be otherwise an object with the activate and theme properties.
         */
        syntaxHighlight?:
            | false
            | {
                  /**
                   * Whether syntax highlighting should be activated or not.
                   */
                  activate?: boolean;
                  /**
                   * Highlight.js syntax coloring theme to use. (Only these 6 styles are available.)
                   */
                  theme?: "agate" | "arta" | "monokai" | "nord" | "obsidian" | "tomorrow-night";
              };
        /**
         * Controls whether the "Try it out" section should be enabled by default.
         */
        tryItOutEnabled?: boolean;
        /**
         * This is the default configuration section for the the requestSnippets plugin.
         */
        requestSnippets?: {
            generators?: {
                [genName: string]: {
                    title: string;
                    syntax: string;
                };
            };
            defaultExpanded?: boolean;
            /**
             * e.g. only show curl bash = ["curl_bash"]
             */
            languagesMask?: string[];
        };

        // Network

        /**
         * OAuth redirect URL.
         */
        oauth2RedirectUrl?: string;
        /**
         * MUST be a function. Function to intercept remote definition,
         * "Try it out", and OAuth 2.0 requests.
         * Accepts one argument requestInterceptor(request) and must return the modified request,
         * or a Promise that resolves to the modified request.
         */
        requestInterceptor?: (a: Request) => Request | Promise<Request>;
        /**
         * MUST be a function. Function to intercept remote definition,
         * "Try it out", and OAuth 2.0 responses.
         * Accepts one argument responseInterceptor(response) and must return the modified response,
         * or a Promise that resolves to the modified response.
         */
        responseInterceptor?: (a: Response) => Response | Promise<Response>;
        /**
         * If set to true, uses the mutated request returned from a requestInterceptor
         * to produce the curl command in the UI, otherwise the request
         * beforethe requestInterceptor was applied is used.
         */
        showMutatedRequest?: boolean;
        /**
         * List of HTTP methods that have the "Try it out" feature enabled.
         * An empty array disables "Try it out" for all operations.
         * This does not filter the operations from the display.
         */
        supportedSubmitMethods?: SupportedHTTPMethods[];
        /**
         * By default, Swagger UI attempts to validate specs against swagger.io's online validator.
         * You can use this parameter to set a different validator URL,
         * for example for locally deployed validators (Validator Badge).
         * Setting it to either none, 127.0.0.1 or localhost will disable validation.
         */
        validatorUrl?: string;
        /**
         * If set to true, enables passing credentials, as defined in the Fetch standard,
         * in CORS requests that are sent by the browser.
         * Note that Swagger UI cannot currently set cookies cross-domain (see swagger-js#1163)
         * - as a result, you will have to rely on browser-supplied
         * cookies (which this setting enables sending) that Swagger UI cannot control.
         */
        withCredentials?: boolean;

        // Macros

        /**
         * Function to set default values to each property in model.
         * Accepts one argument modelPropertyMacro(property), property is immutable
         */
        modelPropertyMacro?: (propName: Readonly<any>) => any;
        /**
         * Function to set default value to parameters.
         * Accepts two arguments parameterMacro(operation, parameter).
         * Operation and parameter are objects passed for context, both remain immutable
         */
        parameterMacro?: (operation: Readonly<any>, parameter: Readonly<any>) => any;

        // Authorization

        /**
         * If set to true, it persists authorization data and it would not be lost on browser close/refresh
         */
        persistAuthorization?: boolean;
    }

    type SupportedHTTPMethods = "get" | "put" | "post" | "delete" | "options" | "head" | "patch" | "trace";

    type SorterLike =
        | "alpha"
        | "method"
        | {
              (name1: string, name2: string): number;
          };

    interface Request {
        [prop: string]: any;
    }

    interface Response {
        [prop: string]: any;
    }

    /**
     * See https://swagger.io/docs/open-source-tools/swagger-ui/customization/plugin-api/
     */
    interface SwaggerUIPlugin {
        (system: any): {
            statePlugins?: {
                [stateKey: string]: {
                    actions?: Indexable;
                    reducers?: Indexable;
                    selectors?: Indexable;
                    wrapActions?: Indexable;
                    wrapSelectors?: Indexable;
                };
            };
            components?: Indexable;
            wrapComponents?: Indexable;
            rootInjects?: Indexable;
            afterLoad?: (system: any) => any;
            fn?: Indexable;
        };
    }

    interface Indexable {
        [index: string]: any;
    }
}

interface SwaggerUI {
    /**
     * Provide Swagger UI with information about your OAuth server - see the
     * OAuth 2.0 documentation for more information.
     *
     * @param options
     */
    initOAuth(options: any): void;

    /**
     * Programmatically set values for a Basic authorization scheme.
     *
     * @param authDefinitionKey
     * @param username
     * @param password
     */
    preauthorizeBasic(authDefinitionKey: any, username: any, password: any): any;

    /**
     * Programmatically set values for an API key or Bearer authorization scheme.
     * In case of OpenAPI 3.0 Bearer scheme, apiKeyValue must contain just the token
     * itself without the Bearer prefix.
     *
     * @param authDefinitionKey
     * @param apiKeyValue
     */
    preauthorizeApiKey(authDefinitionKey: any, apiKeyValue: any): any;
}
