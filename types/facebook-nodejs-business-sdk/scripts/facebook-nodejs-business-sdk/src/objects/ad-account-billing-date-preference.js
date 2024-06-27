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
 * AdAccountBillingDatePreference
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountBillingDatePreference extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_account: 'ad_account',
      day_of_month: 'day_of_month',
      id: 'id',
      next_bill_date: 'next_bill_date',
      time_created: 'time_created',
      time_effective: 'time_effective',
    });
  }

}
