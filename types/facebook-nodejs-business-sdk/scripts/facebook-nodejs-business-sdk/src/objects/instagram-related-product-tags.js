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
 * InstagramRelatedProductTags
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramRelatedProductTags extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      checkout_setting: 'checkout_setting',
      id: 'id',
      image_uri: 'image_uri',
      name: 'name',
      price_label: 'price_label',
      sale_price_label: 'sale_price_label',
    });
  }

}
