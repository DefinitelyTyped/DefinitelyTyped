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
 * UserPaymentMethodsInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserPaymentMethodsInfo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      available_card_types: 'available_card_types',
      available_payment_methods: 'available_payment_methods',
      available_payment_methods_details: 'available_payment_methods_details',
      country: 'country',
      currency: 'currency',
      existing_payment_methods: 'existing_payment_methods',
    });
  }

}
