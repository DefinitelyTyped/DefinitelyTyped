/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Abstract Object
 * Manages object data fields and provides matching properties
 *
 * @flow
 * @format
 */
export default class AbstractObject {
  _data: any;
  _fields: Array<string>;
  // This is a Flow workaround for setting `this[field]` in the set() function.
  $key: string;
  $value: mixed;

  static get Fields(): {} {
    return Object.freeze({});
  }

  constructor() {
    this._data = {};
    if (this.constructor.Fields === undefined) {
      throw new Error(
        'A "Fields" frozen object must be defined in the object class',
      );
    }
    let fields: any = this.constructor.Fields;
    this._fields = Object.keys(fields);
    this._fields.forEach(field => {
      this._defineProperty(field);
    });
  }

  /**
   * Define data getter and setter field
   * @param {String} field
   */
  _defineProperty(field: string) {
    Object.defineProperty(this, field, {
      get: () => this._data[field],
      set: (value: string) => {
        this._data[field] = value;
      },
      enumerable: true,
    });
  }

  /**
   * Set data field
   * @param {String} field
   * @param {Mixed} value
   * @return this
   */
  set(field: string, value: mixed): AbstractObject {
    if (this._fields.indexOf(field) < 0) {
      this._defineProperty(field);
    }
    this[field] = value;
    return this;
  }

  /**
   * Set multiple data fields
   * @param {Object} data
   * @return this
   */
  setData(data: Object): AbstractObject {
    Object.keys(data).forEach(key => {
      this.set(key, data[key]);
    });
    return this;
  }

  /**
   * Export object data
   * @return {Object}
   */
  exportData(): Object {
    return this._data;
  }
}
