// Type definitions for @woocommerce/woocommerce-rest-api 1.0
// Project: https://github.com/woocommerce/woocommerce-rest-api-js-lib
// Definitions by: KaKa <https://github.com/climba03003>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export type WooCommerceRestApiVersion = 'wc/v3' | 'wc/v2' | 'wc/v1' | 'wc-api/v3' | 'wc-api/v2' | 'wc-api/v1';
export type WooCommerceRestApiEncoding = 'utf-8' | 'ascii';
export type WooCommerceRestApiMethod = 'get' | 'post' | 'put' | 'delete' | 'options';

export interface WooCommerceRestApiOptions {
    /* Your Store URL, example: http://woo.dev/ */
    url: string;
    /* Your API consumer key */
    consumerKey: string;
    /* Your API consumer secret */
    consumerSecret: string;
    /* Custom WP REST API URL prefix, used to support custom prefixes created with the `rest_url_prefix filter` */
    wpAPIPrefix?: string;
    /* API version, default is `v3` */
    version?: WooCommerceRestApiVersion;
    /* Encoding, default is 'utf-8' */
    encoding?: WooCommerceRestApiEncoding;
    /* When `true` and using under HTTPS force Basic Authentication as query string, default is `false` */
    queryStringAuth?: boolean;
    /* Provide support for URLs with ports, eg: `8080` */
    port?: number;
    /* Define the request timeout */
    timeout?: number;
    /* Define the custom Axios config, also override this library options */
    axiosConfig?: any;
}

export interface WooCommerceRestApiQuery {
    [key: string]: string;
}

/**
 * WooCommerce REST API wrapper
 */
export default class WooCommerceRestApi {
    classVersion: string;
    url: string;
    consumerKey: string;
    consumerSecret: string;
    wpAPIPrefix: string;
    version: WooCommerceRestApiVersion;
    encoding: WooCommerceRestApiEncoding;
    queryStringAuth: boolean;
    port: number;
    timeout: number;
    axiosConfig: any;

    /**
     * Class constructor.
     */
    constructor(opt: WooCommerceRestApiOptions | WooCommerceRestApi);

    /**
     * Set default options
     */
    _setDefaultsOptions(opt: WooCommerceRestApiOptions): void;

    /**
     * Parse params object.
     */
    _parseParamsObject(params: any, query: any): WooCommerceRestApiQuery;

    /**
     * Normalize query string for oAuth
     */
    _normalizeQueryString(url: string, params: any): string;

    /**
     * Get URL
     */
    _getUrl(endpoint: string, params: any): string;

    /**
     * Get OAuth
     */
    _getOAuth(): any;

    /**
     * Do requests
     */
    _request(method: WooCommerceRestApiMethod, endpoint: string, data: any, params: any): Promise<any>;

    /**
     * GET requests
     */
    get(endpoint: string, params?: any): Promise<any>;

    /**
     * POST requests
     */
    post(endpoint: string, data: any, params?: any): Promise<any>;

    /**
     * PUT requests
     */
    put(endpoint: string, data: any, params?: any): Promise<any>;

    /**
     * DELETE requests
     */
    delete(endpoint: string, params?: any): Promise<any>;

    /**
     * OPTIONS requests
     */
    options(endpoint: string, params?: any): Promise<any>;
}

/**
 * Options Exception.
 */
export class OptionsException {
    name: 'Options Error';
    message: string;

    /**
     * Constructor.
     */
    constructor(message: string);
}
