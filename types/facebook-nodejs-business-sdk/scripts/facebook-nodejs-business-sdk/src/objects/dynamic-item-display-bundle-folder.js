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
 * DynamicItemDisplayBundleFolder
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicItemDisplayBundleFolder extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      categorization_criteria: 'categorization_criteria',
      id: 'id',
      name: 'name',
      product_catalog: 'product_catalog',
      product_set: 'product_set',
      valid_labels: 'valid_labels',
    });
  }



  get (fields: Array<string>, params: Object = {}): DynamicItemDisplayBundleFolder {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
