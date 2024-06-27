 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdExportPreset
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdExportPreset extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      created_time: 'created_time',
      fields: 'fields',
      id: 'id',
      name: 'name',
      owner: 'owner',
      updated_time: 'updated_time',
    });
  }



  get (fields: Array<string>, params: Object = {}): AdExportPreset {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
