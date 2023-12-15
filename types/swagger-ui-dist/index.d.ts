import implementation = require("./absolute-path");

export as namespace SwaggerUIDist;

/**
 * get an absolute path to swagger ui for static file serving
 */
export const getAbsoluteFSPath: typeof implementation;
export const absolutePath: typeof implementation;
export const SwaggerUIStandalonePreset: any;
export const SwaggerUIBundle: SwaggerUIBundle;

export interface Url {
    url: string;
    name: string;
}

export interface Spec {
    [k: string]: any;
}

export interface SwaggerConfigs {
    /**
     * URL to fetch external configuration document from.
     */
    configUrl?: string | undefined;

    /**
     * If set to true, enables deep linking for tags and operations. See the Deep Linking documentation for more information.
     */
    deepLinking?: boolean | undefined;

    /**
     * REQUIRED if domNode is not provided. The ID of a DOM element inside which SwaggerUI will put its user interface.
     */
    dom_id?: string | null | undefined;

    /**
     *  REQUIRED if dom_id is not provided. The HTML DOM element inside which SwaggerUI will put its user interface. Overrides dom_id.
     */
    domNode?: string | HTMLElement | null | undefined;

    /**
     * An array of presets to use in Swagger UI. Usually, you'll want to include ApisPreset if you use this option.
     */
    presets?: any[] | undefined;

    /**
     * An array of plugin functions to use in Swagger UI.
     */
    plugins?: any;

    /**
     * A JavaScript object describing the OpenAPI definition. When used, the url parameter will not be parsed. This is useful for testing manually-generated definitions without hosting them.
     */
    spec?: Spec | undefined;

    /**
     * The URL pointing to API definition (normally swagger.json or swagger.yaml). Will be ignored if urls or spec is used.
     */
    url?: Url["url"] | undefined;

    /**
     * An array of API definition objects ([{url: "<url1>", name: "<name1>"},{url: "<url2>", name: "<name2>"}]) used by Topbar plugin. When used and Topbar plugin is enabled,
     * the url parameter will not be parsed. Names and URLs must be unique among all items in this array,
     * since they're used as identifiers.
     */
    urls?: Url[] | undefined;

    /**
     * The name of a component available via the plugin system to use as the top-level layout for Swagger UI.
     */
    layout?: string | undefined;

    /**
     * Controls the default expansion setting for the operations and tags. It can be 'list' (expands only the tags), 'full' (expands the tags and operations) or 'none' (expands nothing).
     */
    docExpansion?: "list" | "full" | "none" | undefined;

    /**
     * If set, limits the number of tagged operations displayed to at most this many. The default is to show all operations.
     */
    maxDisplayedTags?: number | undefined;

    /**
     * Apply a sort to the operation list of each API.
     * It can be 'alpha' (sort by paths alphanumerically), 'method' (sort by HTTP method) or a function (see Array.prototype.sort() to know how sort function works).
     * Default is the order returned by the server unchanged.
     */
    operationsSorter?: (() => void) | undefined;

    /**
     *  Function to intercept remote definition, "Try it out", and OAuth 2.0 requests.
     *  Accepts one argument requestInterceptor(request) and must return the modified request, or a Promise that resolves to the modified request.
     */
    requestInterceptor?: ((request: SwaggerRequest) => SwaggerRequest) | undefined;

    /**
     *  Function to intercept remote definition, "Try it out", and OAuth 2.0 responses.
     *  Accepts one argument responseInterceptor(response) and must return the modified response, or a Promise that resolves to the modified response.
     */
    responseInterceptor?: ((response: SwaggerResponse) => SwaggerResponse) | undefined;

    [k: string]: any;
}

export interface SwaggerUIBundle {
    (a?: SwaggerConfigs): any;

    [k: string]: any;

    getConfigs(): SwaggerConfigs;
}

export interface SwaggerRequest {
    url: string;
    credentials: string;
    [k: string]: any;
}

export interface SwaggerResponse {
    [k: string]: any;
}
