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
 * ProductSetUsage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductSetUsage extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      product_set: 'product_set',
      usage_type: 'usage_type',
    });
  }



  get (fields: Array<string>, params: Object = {}): ProductSetUsage {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
