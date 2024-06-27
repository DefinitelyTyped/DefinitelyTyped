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
import AbstractObject from './../abstract-object';

/**
 * ExtendedCreditAllocationConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCreditAllocationConfig extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      currency_amount: 'currency_amount',
      id: 'id',
      liability_type: 'liability_type',
      owning_business: 'owning_business',
      owning_credential: 'owning_credential',
      partition_type: 'partition_type',
      receiving_business: 'receiving_business',
      receiving_credential: 'receiving_credential',
      request_status: 'request_status',
      send_bill_to: 'send_bill_to',
    });
  }

  static get LiabilityType () {
    return Object.freeze({
      msa: 'MSA',
      normal: 'Normal',
      sequential: 'Sequential',
    });
  }
  static get PartitionType () {
    return Object.freeze({
      auth: 'AUTH',
      fixed: 'FIXED',
      fixed_without_partition: 'FIXED_WITHOUT_PARTITION',
    });
  }
  static get SendBillTo () {
    return Object.freeze({
      advertiser: 'Advertiser',
      agency: 'Agency',
    });
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }


  get (fields: Array<string>, params: Object = {}): ExtendedCreditAllocationConfig {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): ExtendedCreditAllocationConfig {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
