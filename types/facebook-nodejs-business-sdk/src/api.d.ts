/**
 * Facebook Ads API
 */
export default class FacebookAdsApi {
    _debug: boolean;
    _showHeader: boolean;
    accessToken: string;
    locale: string;
    static _defaultApi: FacebookAdsApi;
    static get VERSION(): string;
    static get SDK_VERSION(): string;
    static get GRAPH(): string;
    static get GRAPH_VIDEO(): string;
    /**
     * @param {String} accessToken
     * @param {String} [locale]
     */
    constructor(accessToken: string, locale?: string, crash_log?: boolean);
    /**
     * Instantiate an API and store it as the default
     * @param  {String} accessToken
     * @param  {String} [locale]
     * @return {FacebookAdsApi}
     */
    static init(accessToken: string, locale?: string, crash_log?: boolean): FacebookAdsApi;
    static setDefaultApi(api: FacebookAdsApi): void;
    static getDefaultApi(): FacebookAdsApi;
    getAppID(): Promise<any>;
    setDebug(flag: boolean): FacebookAdsApi;
    setShowHeader(flag: boolean): FacebookAdsApi;
    /**
     * Http Request
     * @param  {String} method
     * @param  {String} path
     * @param  {Object} [params]
     * @param  {Object} [files]
     * @return {Promise}
     */
    call(method: string, path: string | string[] | string, params?: Record<any, any>, files?: Record<any, any>, useMultipartFormData?: boolean, urlOverride?: string): Promise<any>;
    static _encodeParams(params: Record<any, any>): string;
}
