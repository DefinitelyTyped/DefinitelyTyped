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
 * CommercePayout
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommercePayout extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      amount: 'amount',
      payout_date: 'payout_date',
      payout_reference_id: 'payout_reference_id',
      status: 'status',
      transfer_id: 'transfer_id',
    });
  }

}
