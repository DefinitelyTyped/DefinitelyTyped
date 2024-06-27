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
 * AdAssetOnsiteDestinations
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetOnsiteDestinations extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      auto_optimization: 'auto_optimization',
      details_page_product_id: 'details_page_product_id',
      shop_collection_product_set_id: 'shop_collection_product_set_id',
      storefront_shop_id: 'storefront_shop_id',
    });
  }

}
