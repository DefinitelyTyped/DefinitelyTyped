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
 * MerchantCompliance
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MerchantCompliance extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      active_campaigns: 'active_campaigns',
      compliance_status: 'compliance_status',
      count_down_start_time: 'count_down_start_time',
      purchase: 'purchase',
      purchase_conversion_value: 'purchase_conversion_value',
    });
  }

}
