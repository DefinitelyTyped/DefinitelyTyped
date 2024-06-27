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
 * ProductCatalogHotelRoomsBatch
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogHotelRoomsBatch extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      errors: 'errors',
      errors_total_count: 'errors_total_count',
      handle: 'handle',
      status: 'status',
    });
  }

}
