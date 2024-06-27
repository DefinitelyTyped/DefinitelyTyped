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
 * AdCreativeShopSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeShopSpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      collection_id: 'collection_id',
      landing_view: 'landing_view',
      shop_id: 'shop_id',
    });
  }

}
