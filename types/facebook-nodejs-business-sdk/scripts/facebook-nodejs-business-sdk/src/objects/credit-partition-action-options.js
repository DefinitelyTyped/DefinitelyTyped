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
 * CreditPartitionActionOptions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreditPartitionActionOptions extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      liability_type: 'liability_type',
      partition_type: 'partition_type',
      send_bill_to: 'send_bill_to',
    });
  }

}
