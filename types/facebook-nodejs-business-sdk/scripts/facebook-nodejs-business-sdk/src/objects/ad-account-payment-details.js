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
 * AdAccountPaymentDetails
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountPaymentDetails extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      amount: 'amount',
      create_date: 'create_date',
      id: 'id',
      last_action_status: 'last_action_status',
      metadata: 'metadata',
      payment_details_id: 'payment_details_id',
    });
  }

}
