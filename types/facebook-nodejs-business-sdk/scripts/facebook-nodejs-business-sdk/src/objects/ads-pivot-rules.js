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
 * AdsPivotRules
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPivotRules extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      creation_time: 'creation_time',
      creator: 'creator',
      description: 'description',
      id: 'id',
      name: 'name',
      permission: 'permission',
      rules: 'rules',
      scope: 'scope',
      update_by: 'update_by',
      update_time: 'update_time',
    });
  }



  get (fields: Array<string>, params: Object = {}): AdsPivotRules {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
