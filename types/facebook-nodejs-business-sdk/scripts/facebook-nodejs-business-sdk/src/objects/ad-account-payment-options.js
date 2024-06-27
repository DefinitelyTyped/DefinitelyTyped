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
 * AdAccountPaymentOptions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountPaymentOptions extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      available_altpay_options: 'available_altpay_options',
      available_card_types: 'available_card_types',
      available_payment_options: 'available_payment_options',
      existing_payment_methods: 'existing_payment_methods',
    });
  }

}
