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
 * AdAccountPromotionProgressBar
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountPromotionProgressBar extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      adaccount_permission: 'adaccount_permission',
      coupon_currency: 'coupon_currency',
      coupon_value: 'coupon_value',
      expiration_time: 'expiration_time',
      progress_completed: 'progress_completed',
      promotion_type: 'promotion_type',
      spend_requirement_in_cent: 'spend_requirement_in_cent',
      spend_since_enrollment: 'spend_since_enrollment',
    });
  }

}
