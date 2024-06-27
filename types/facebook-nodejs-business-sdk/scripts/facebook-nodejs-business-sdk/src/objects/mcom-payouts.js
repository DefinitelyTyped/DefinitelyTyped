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
 * McomPayouts
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class McomPayouts extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      number_of_orders: 'number_of_orders',
      order_ids: 'order_ids',
      payout_amount: 'payout_amount',
      payout_provider_reference_id: 'payout_provider_reference_id',
      payout_status: 'payout_status',
      payout_time: 'payout_time',
      provider: 'provider',
    });
  }

}
