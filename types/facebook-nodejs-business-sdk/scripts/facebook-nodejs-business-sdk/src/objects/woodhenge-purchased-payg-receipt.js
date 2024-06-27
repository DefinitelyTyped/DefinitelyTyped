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
 * WoodhengePurchasedPAYGReceipt
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WoodhengePurchasedPAYGReceipt extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      number_of_subscriptions_purchased: 'number_of_subscriptions_purchased',
      purchase_time: 'purchase_time',
      user: 'user',
    });
  }



  get (fields: Array<string>, params: Object = {}): WoodhengePurchasedPAYGReceipt {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
