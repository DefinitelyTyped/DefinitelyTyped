import Http from "./http";
import { FacebookRequestError } from "./exceptions";
import CrashReporter from "./crash-reporter";
/**
 * Facebook Ads API
 */

export default class FacebookAdsApi {
  _debug: boolean;
  _showHeader: boolean;
  accessToken: string;
  locale: string;
  static _defaultApi: FacebookAdsApi;

  static get VERSION(): string {
    return 'v20.0';
  }

  static get SDK_VERSION(): string {
    return '20.0.0';
  }

  static get GRAPH(): string {
    return 'https://graph.facebook.com';
  }

  static get GRAPH_VIDEO(): string {
    return 'https://graph-video.facebook.com';
  }

  /**
   * @param {String} accessToken
   * @param {String} [locale]
   */
  constructor(accessToken: string, locale: string = 'en_US', crash_log: boolean = true) {
    if (!accessToken) {
      throw new Error('Access token required');
    }

    this.accessToken = accessToken;
    this.locale = locale;
    this._debug = false;
    this._showHeader = false;

    if (crash_log) {
      CrashReporter.enable();
    }
  }

  /**
   * Instantiate an API and store it as the default
   * @param  {String} accessToken
   * @param  {String} [locale]
   * @return {FacebookAdsApi}
   */
  static init(accessToken: string, locale: string = 'en_US', crash_log: boolean = true): FacebookAdsApi {
    const api = new this(accessToken, locale, crash_log);
    this.setDefaultApi(api);
    return api;
  }

  static setDefaultApi(api: FacebookAdsApi) {
    this._defaultApi = api;
  }

  static getDefaultApi(): FacebookAdsApi {
    return this._defaultApi;
  }

  getAppID(): Promise<any> {
    let url = [FacebookAdsApi.GRAPH, FacebookAdsApi.VERSION, 'debug_token'].join('/');
    type Params = Record<string, any>;
    let params: Params = {};
    params['access_token'] = this.accessToken;
    params['input_token'] = this.accessToken;
    params['fields'] = 'app_id';
    url += `?${FacebookAdsApi._encodeParams(params)}`;
    return Http.request('GET', url, {}, {}, false);
  }

  setDebug(flag: boolean): FacebookAdsApi {
    this._debug = flag;
    return this;
  }

  setShowHeader(flag: boolean): FacebookAdsApi {
    this._showHeader = flag;
    return this;
  }

  /**
   * Http Request
   * @param  {String} method
   * @param  {String} path
   * @param  {Object} [params]
   * @param  {Object} [files]
   * @return {Promise}
   */
  call(method: string, path: string | Array<string> | String, params: Record<string, any> = {}, files: Record<string, any> = {}, useMultipartFormData: boolean = false, urlOverride: string = ''): Promise<any> {
    let url: any;
    let data: Record<string, any> = {};

    if (method === 'POST' || method === 'PUT') {
      data = params;
      params = {};
    }

    const domain = urlOverride || FacebookAdsApi.GRAPH;

    if (typeof path !== 'string' && !(path instanceof String)) {
      url = [domain, FacebookAdsApi.VERSION, ...path].join('/');
      params['access_token'] = this.accessToken;
      url += `?${FacebookAdsApi._encodeParams(params)}`;
    } else {
      url = path;
    }

    const strUrl: string = (url as any);
    return Http.request(method, strUrl, data, files, useMultipartFormData, this._showHeader).then(response => {
      if (this._showHeader) {
        response.data['headers'] = response.headers;
      }

      response = response.data;

      if (this._debug) {
        console.log(`200 ${method} ${url} ${Object.keys(data).length > 0 ? JSON.stringify(data) : ""}`);
        console.log(`Response: ${response ? JSON.stringify(response) : ""}`);
      }

      return Promise.resolve(response);
    }).catch(response => {
      if (this._debug && response.response) {
        console.log(`${response.response.status} ${method} ${url}
            ${Object.keys(data).length > 0 ? JSON.stringify(data) : ''}`);
      }

      throw new FacebookRequestError(response, method, url, data);
    });
  }

  static _encodeParams(params: Record<string, any>): string {
    return Object.keys(params).map(key => {
      var param = params[key];

      if (typeof param === 'object') {
        param = param ? JSON.stringify(param) : '';
      }

      return `${encodeURIComponent(key)}=${encodeURIComponent(param)}`;
    }).join('&');
  }

}