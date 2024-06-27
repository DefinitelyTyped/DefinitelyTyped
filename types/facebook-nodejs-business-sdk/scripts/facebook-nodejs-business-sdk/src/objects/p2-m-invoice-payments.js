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
 * P2MInvoicePayments
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class P2MInvoicePayments extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      page_id: 'page_id',
      payments: 'payments',
    });
  }

}
