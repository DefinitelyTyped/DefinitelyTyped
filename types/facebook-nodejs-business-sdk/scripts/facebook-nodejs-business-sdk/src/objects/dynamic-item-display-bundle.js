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
 * DynamicItemDisplayBundle
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicItemDisplayBundle extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      additional_urls: 'additional_urls',
      description: 'description',
      id: 'id',
      name: 'name',
      product_set: 'product_set',
      text_tokens: 'text_tokens',
      url: 'url',
    });
  }



  get (fields: Array<string>, params: Object = {}): DynamicItemDisplayBundle {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
