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
 * UserAvailableCatalogs
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserAvailableCatalogs extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      catalog_id: 'catalog_id',
      catalog_name: 'catalog_name',
      product_count: 'product_count',
      shop_name: 'shop_name',
    });
  }

}
