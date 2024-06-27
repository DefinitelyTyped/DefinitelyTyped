/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 * @flow
 */
import FacebookAdsApi from './api';
import AbstractObject from './abstract-object';
import Cursor from './cursor';
import Utils from './utils';

/**
 * Abstract Crud Object
 * Facebook Object basic persistence functions
 * @extends AbstractObject
 * @flow
 */
export class AbstractCrudObject extends AbstractObject {
  _parentId: ?string;
  _changes: Object;
  _api: FacebookAdsApi;
  id: string;
  /**
   * @param  {Object} data
   * @param  {String} parentId
   * @param  {FacebookAdApi} [api]
   */
  constructor(
    id: number | ?string = null,
    data: Object = {},
    parentId: ?string,
    api: ?FacebookAdsApi,
  ) {
    super();
    this._parentId = parentId;
    this._api = api || FacebookAdsApi.getDefaultApi();
    if (id) {
      data.id = id;
    }
    if (data) {
      super.setData(data);
    }
  }

  /**
   * Define data getter and setter recording changes
   * @param {String} field
   */
  _defineProperty(field: string): void {
    if (this._changes === undefined) {
      this._changes = {};
    }
    Object.defineProperty(this, field, {
      get: () => this._data[field],
      set: (value: string) => {
        this._changes[field] = value;
        this._data[field] = value;
      },
      enumerable: true,
    });
  }

  /**
   * Set object data as if it were read from the server. Wipes related changes
   * @param {Object} data
   * @return this
   */
  setData(data: Object): AbstractCrudObject {
    super.setData(data);
    Object.keys(data).forEach(key => {
      delete this._changes[key];
    });
    return this;
  }

  /**
   * Export changed object data
   * @return {Object}
   */
  exportData(): Object {
    return this._changes;
  }

  /**
   * Export object data
   * @return {Object}
   */
  exportAllData(): Object {
    return this._data;
  }

  /**
   * Clear change history
   * @return this
   */
  clearHistory(): Object {
    this._changes = {};
    return this;
  }

  /**
   * @throws {Error} if object has no id
   * @return {String}
   */
  getId(): string {
    if (!this.id) {
      throw new Error(`${this.constructor.name} Id not defined`);
    }
    return this.id;
  }

  /**
   * @throws {Error} if object has no parent id
   * @return {String}
   */
  getParentId(): string {
    if (!this._parentId) {
      throw new Error(`${this.constructor.name} parentId not defined`);
    }
    return this._parentId;
  }

  /**
   * @return {String}
   */
  getNodePath(): string {
    return this.getId();
  }

  /**
   * Return object API instance
   * @throws {Error} if object doesn't hold an API
   * @return {FacebookAdsApi}
   */
  getApi(): FacebookAdsApi {
    const api = this._api;
    if (!api) {
      throw new Error(
        `${this.constructor.name} does not yet have an
        associated api object.\n Did you forget to
        instantiate an API session with:
        "FacebookAdsApi.init"?`,
      );
    }
    return api;
  }

  /**
   * Read object data
   * @param   {Array}   [fields]
   * @param   {Object}  [params]
   * @return  {Promise}
   */
  read(fields: Array<string>, params: Object = {}): Promise<*> {
    const api = this.getApi();
    const path: Array<string> = [this.getNodePath()];
    if (fields) {
      params['fields'] = fields.join(',');
    }
    return new Promise((resolve, reject) => {
      api
        .call('GET', path, params)
        .then(data => resolve(this.setData(data)))
        .catch(reject);
    });
  }

  /**
   * Update object
   * @param   {Object}  [params]
   * @return  {Promise}
   */
  update(params: Object = {}): Promise<*> {
    const api = this.getApi();
    const path = [this.getNodePath()];
    params = Object.assign(params, this.exportData());
    return new Promise((resolve, reject) => {
      api
        .call('POST', path, params)
        .then(data => resolve(data))
        .catch(reject);
    });
  }

  /**
   * Delete object
   * @param   {Object}  [params]
   * @return  {Promise}
   */
  delete(params: Object = {}): Promise<*> {
    const api = this.getApi();
    const path = [this.getNodePath()];
    params = Object.assign(params, this.exportData());
    return new Promise((resolve, reject) => {
      api
        .call('DELETE', path, params)
        .then(data => resolve(data))
        .catch(reject);
    });
  }

  /**
   * Initialize Cursor to paginate on edges
   * @param  {Object}  targetClass
   * @param  {Array}   [fields]
   * @param  {Object}  [params]
   * @param  {Boolean} [fetchFirstPage]
   * @param  {String}  [endpoint]
   * @return {Cursor}
   */
  getEdge(
    targetClass: Object,
    fields: Array<string>,
    params: Object = {},
    fetchFirstPage: boolean = true,
    endpoint: ?string,
  ): Cursor | Promise<*> {
    if (fields && fields.length > 0) {
      params['fields'] = fields.join(',');
    }
    const sourceObject = this;
    const cursor = new Cursor(sourceObject, targetClass, params, endpoint);
    if (fetchFirstPage) {
      return cursor.next();
    }
    return cursor;
  }

  /**
   * Create edge object
   * @param   {String}  [endpoint]
   * @param   {Array}  [fields]
   * @param   {Object}  [params]
   * @param   {Function} [targetClassConstructor]
   * @return  {Promise}
   */
  createEdge(
    endpoint: string,
    fields: Array<string>,
    params: Object = {},
    targetClassConstructor: Function = null,
    pathOverride?: ?string = null,
  ): Promise<*> {
    if (fields && fields.length > 0) {
      params['fields'] = fields.join(',');
    }
    const api = this.getApi();
    const path = pathOverride != null
      ? pathOverride
      : [this.getNodePath(), Utils.removePreceedingSlash(endpoint)];
    params = Object.assign(params, this.exportData());
    return new Promise((resolve, reject) => {
      api
        .call('POST', path, params)
        .then(data => {
          resolve(
            /* eslint new-cap: "off" */
            targetClassConstructor === null
              ? this.setData(data)
              : new targetClassConstructor(data.id, data),
          );
        })
        .catch(reject);
    });
  }

  /**
   * Delete edge object
   * @param   {String}  [endpoint]
   * @param   {Object}  [params]
   * @return  {Promise}
   */
  deleteEdge(endpoint: string, params: Object = {}): Promise<*> {
    const api = this.getApi();
    const path = [this.getNodePath(), Utils.removePreceedingSlash(endpoint)];
    params = Object.assign(params, this.exportData());
    return new Promise((resolve, reject) => {
      api
        .call('DELETE', path, params)
        .then(data => resolve(data))
        .catch(reject);
    });
  }

  /**
   * Read Objects by Ids
   * @param  {Array}          ids
   * @param  {Array}          [fields]
   * @param  {Object}         [params]
   * @param  {FacebookAdsApi} [api]
   * @return {Promise}
   */
  static getByIds(
    ids: Array<number>,
    fields: Array<string>,
    params: Object = {},
    api: FacebookAdsApi,
  ): Promise<*> {
    api = api || FacebookAdsApi.getDefaultApi();
    if (fields && fields.length > 0) {
      params['fields'] = fields.join(',');
    }
    params['ids'] = ids.join(',');
    return new Promise((resolve, reject) => {
      return api
        .call('GET', [''], params)
        .then(response => {
          var result = [];
          for (let id in response) {
            let data = response[id];
            let That: any = this;
            let object = new That(data);
            result.push(object);
          }
          resolve(result);
        })
        .catch(reject);
    });
  }
}

export default AbstractCrudObject;
