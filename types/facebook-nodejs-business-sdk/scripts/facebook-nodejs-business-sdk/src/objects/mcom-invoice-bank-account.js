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
 * McomInvoiceBankAccount
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class McomInvoiceBankAccount extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      num_pending_verification_accounts: 'num_pending_verification_accounts',
      num_verified_accounts: 'num_verified_accounts',
      pending_verification_accounts: 'pending_verification_accounts',
      verified_accounts: 'verified_accounts',
    });
  }

}
