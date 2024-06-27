import FacebookAdsApi from "./api";
import Utils from "./utils";
export default class Cursor extends Array<Record<string, any>> {
  sourceObject: Record<string, any>;
  _api: FacebookAdsApi;
  _targetClass: Record<string, any>;
  _loadPage: (path: string) => Promise<any>;
  _buildObjectsFromResponse: (response: Record<string, any>) => Array<Record<string, any>>;
  paging: any;
  summary: any;
  headers: any;
  clear: () => void;
  next: () => any;
  previous: () => Promise<any>;
  hasNext: () => boolean;
  hasPrevious: () => boolean;
  set: (array: Array<Record<string, any>>) => void;

  /**
   * @param  {Object} sourceObject
   * @param  {Object} targetClass
   * @param  {Object} [params]
   * @param  {String} [endpoint]
   */
  constructor(sourceObject: Record<string, any>, targetClass: Record<string, any>, params: Record<string, any>, endpoint: string | null | undefined) {
    super();
    const next = [sourceObject.getId()];

    if (endpoint) {
      next.push(Utils.normalizeEndpoint(endpoint));
    } else {
      throw new Error('No endpoint specified for the target edge.');
    }

    this._api = sourceObject.getApi();
    this._targetClass = targetClass;
    this.paging = {
      next: next,
      params: params
    };

    this.clear = () => {
      this.length = 0;
    };

    this.set = array => {
      this.clear();
      this.push(...array);
    };

    this.next = () => {
      if (!this.hasNext()) {
        return Promise.reject(new RangeError('end of pagination'));
      }

      return this._loadPage(this.paging.next);
    };

    this.hasNext = () => {
      return Boolean(this.paging) && Boolean(this.paging.next);
    };

    this.previous = () => {
      if (!this.hasPrevious()) {
        return Promise.reject(new RangeError('start of pagination'));
      }

      return this._loadPage(this.paging.previous);
    };

    this.hasPrevious = () => {
      return Boolean(this.paging) && Boolean(this.paging.previous);
    };

    this._loadPage = path => {
      const promise = new Promise((resolve, reject) => {
        this._api.call('GET', path, this.paging.params).then((response: Record<string, any>) => {
          const objects = this._buildObjectsFromResponse(response);

          this.set(objects);
          this.paging = response.paging;
          this.summary = response.summary;
          this.headers = response.headers;
          resolve(this);
        }).catch(reject);
      });
      return promise;
    };

    this._buildObjectsFromResponse = response => {
      return response.data.map(item => {
        let That: any = this._targetClass;

        if (That.name === 'AbstractObject') {
          var result = new That();
          result.setData(item);
          return result;
        }

        return new That(item && item.id ? item.id : null, item, undefined, this._api);
      });
    };
  }

}