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
 * IGShoppingProductAppeal
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGShoppingProductAppeal extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      eligible_for_appeal: 'eligible_for_appeal',
      product_appeal_status: 'product_appeal_status',
      product_id: 'product_id',
      rejection_reasons: 'rejection_reasons',
      review_status: 'review_status',
    });
  }

}
