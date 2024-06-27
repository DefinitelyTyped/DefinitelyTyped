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
 * ProductFeedMissingFeedItemReplacement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedMissingFeedItemReplacement extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      home_listing: 'home_listing',
      product_item: 'product_item',
      vehicle: 'vehicle',
    });
  }

}
