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
 * AdsPaymentCycle
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPaymentCycle extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      created_time: 'created_time',
      multiplier: 'multiplier',
      requested_threshold_amount: 'requested_threshold_amount',
      threshold_amount: 'threshold_amount',
      updated_time: 'updated_time',
    });
  }

}
