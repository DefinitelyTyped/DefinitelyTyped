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
 * PaymentSubscription
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PaymentSubscription extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      amount: 'amount',
      app_param_data: 'app_param_data',
      application: 'application',
      billing_period: 'billing_period',
      canceled_reason: 'canceled_reason',
      created_time: 'created_time',
      currency: 'currency',
      id: 'id',
      last_payment: 'last_payment',
      next_bill_time: 'next_bill_time',
      next_period_amount: 'next_period_amount',
      next_period_currency: 'next_period_currency',
      next_period_product: 'next_period_product',
      payment_status: 'payment_status',
      pending_cancel: 'pending_cancel',
      period_start_time: 'period_start_time',
      product: 'product',
      status: 'status',
      test: 'test',
      trial_amount: 'trial_amount',
      trial_currency: 'trial_currency',
      trial_expiry_time: 'trial_expiry_time',
      updated_time: 'updated_time',
      user: 'user',
    });
  }



  get (fields: Array<string>, params: Object = {}): PaymentSubscription {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
