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
 * DirectDebit
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DirectDebit extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      bank_account_last_4: 'bank_account_last_4',
      bank_code_last_4: 'bank_code_last_4',
      bank_name: 'bank_name',
      default_receiving_method_products: 'default_receiving_method_products',
      display_string: 'display_string',
      id: 'id',
      last_four_digits: 'last_four_digits',
      onboarding_url: 'onboarding_url',
      owner_name: 'owner_name',
      status: 'status',
    });
  }

}
