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
 * CommerceMerchantSettingsSetupStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceMerchantSettingsSetupStatus extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      deals_setup: 'deals_setup',
      marketplace_approval_status: 'marketplace_approval_status',
      marketplace_approval_status_details: 'marketplace_approval_status_details',
      payment_setup: 'payment_setup',
      review_status: 'review_status',
      shop_setup: 'shop_setup',
    });
  }

}
