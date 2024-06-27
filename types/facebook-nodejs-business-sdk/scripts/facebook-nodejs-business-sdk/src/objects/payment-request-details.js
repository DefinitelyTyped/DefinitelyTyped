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
 * PaymentRequestDetails
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PaymentRequestDetails extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      amount: 'amount',
      creation_time: 'creation_time',
      note: 'note',
      payment_request_id: 'payment_request_id',
      receiver_id: 'receiver_id',
      reference_number: 'reference_number',
      sender_id: 'sender_id',
      status: 'status',
      transaction_time: 'transaction_time',
    });
  }

}
