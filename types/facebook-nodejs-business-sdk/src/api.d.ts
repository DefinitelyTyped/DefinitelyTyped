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
    constructor(accessToken: string, locale?: string, crash_log?: boolean);
    static init(accessToken: string, locale?: string, crash_log?: boolean): FacebookAdsApi;
    static setDefaultApi(api: FacebookAdsApi): void;
    static getDefaultApi(): FacebookAdsApi;
    getAppID(): Promise<any>;
    setDebug(flag: boolean): FacebookAdsApi;
    setShowHeader(flag: boolean): FacebookAdsApi;
    call(
        method: string,
        path: string | string[],
        params?: Record<string, any>,
        files?: Record<string, any>,
        useMultipartFormData?: boolean,
        urlOverride?: string,
    ): Promise<any>;
    static _encodeParams(params: Record<string, any>): string;
}
