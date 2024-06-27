/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Cursor
 * Iterates over edge objects and controls pagination
 * @flow
 * @format
 */
import FacebookAdsApi from './api';
import Utils from './utils';
export default class Cursor extends Array<Object> {
  sourceObject: Object;
  _api: FacebookAdsApi;
  _targetClass: Object;
  _loadPage: (path: string) => Promise<*>;
  _buildObjectsFromResponse: (response: Object) => Array<Object>;
  paging: any;
  summary: any;
  headers: any;
  clear: () => void;
  next: () => any;
  previous: () => Promise<*>;
  hasNext: () => boolean;
  hasPrevious: () => boolean;
  set: (array: Array<Object>) => void;
  /**
   * @param  {Object} sourceObject
   * @param  {Object} targetClass
   * @param  {Object} [params]
   * @param  {String} [endpoint]
   */
  constructor(
    sourceObject: Object,
    targetClass: Object,
    params: Object,
    endpoint: ?string,
  ) {
    super();
    const next = [sourceObject.getId()];
    if (endpoint) {
      next.push(Utils.normalizeEndpoint(endpoint));
    } else {
      throw new Error('No endpoint specified for the target edge.');
    }
    this._api = sourceObject.getApi();
    this._targetClass = targetClass;
    this.paging = {next: next, params: params};

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
        this._api
          .call('GET', path, this.paging.params)
          .then((response: Object) => {
            const objects = this._buildObjectsFromResponse(response);
            this.set(objects);
            this.paging = response.paging;
            this.summary = response.summary;
            this.headers = response.headers;
            resolve(this);
          })
          .catch(reject);
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
        return new That(
          item && item.id ? item.id : null,
          item,
          undefined,
          this._api,
        );
      });
    };
  }
}
