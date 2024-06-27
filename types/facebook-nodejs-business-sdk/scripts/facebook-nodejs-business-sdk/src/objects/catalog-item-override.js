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
 * CatalogItemOverride
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogItemOverride extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      local_info: 'local_info',
      override_type: 'override_type',
      override_value: 'override_value',
    });
  }



  get (fields: Array<string>, params: Object = {}): CatalogItemOverride {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
