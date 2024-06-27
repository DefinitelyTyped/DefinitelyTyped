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
 * Shop
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Shop extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      commerce_merchant_settings: 'commerce_merchant_settings',
      fb_sales_channel: 'fb_sales_channel',
      id: 'id',
      ig_sales_channel: 'ig_sales_channel',
      is_onsite_enabled: 'is_onsite_enabled',
      shop_status: 'shop_status',
      workspace: 'workspace',
    });
  }



  get (fields: Array<string>, params: Object = {}): Shop {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
