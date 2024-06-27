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
 * ShadowIGMediaProductTags
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGMediaProductTags extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      image_url: 'image_url',
      is_checkout: 'is_checkout',
      merchant_id: 'merchant_id',
      name: 'name',
      price_string: 'price_string',
      product_id: 'product_id',
      review_status: 'review_status',
      stripped_price_string: 'stripped_price_string',
      stripped_sale_price_string: 'stripped_sale_price_string',
      x: 'x',
      y: 'y',
    });
  }

}
