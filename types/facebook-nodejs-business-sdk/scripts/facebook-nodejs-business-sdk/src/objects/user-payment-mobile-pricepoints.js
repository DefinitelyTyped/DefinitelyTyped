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
 * UserPaymentMobilePricepoints
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserPaymentMobilePricepoints extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      mobile_country: 'mobile_country',
      phone_number_last4: 'phone_number_last4',
      pricepoints: 'pricepoints',
      user_currency: 'user_currency',
    });
  }

}
