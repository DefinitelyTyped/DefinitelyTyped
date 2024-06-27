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
 * ManagedPartnerExtendedCredit
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ManagedPartnerExtendedCredit extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      max_balance: 'max_balance',
      receiving_credit_allocation_config: 'receiving_credit_allocation_config',
    });
  }

}
