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
 * CurrencyAmount
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CurrencyAmount extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      amount: 'amount',
      amount_in_hundredths: 'amount_in_hundredths',
      currency: 'currency',
      offsetted_amount: 'offsetted_amount',
    });
  }

}
