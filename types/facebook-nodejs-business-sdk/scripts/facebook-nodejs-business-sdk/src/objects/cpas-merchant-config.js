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
 * CPASMerchantConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASMerchantConfig extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      accepted_tos: 'accepted_tos',
      beta_features: 'beta_features',
      business_outcomes_status: 'business_outcomes_status',
      id: 'id',
      is_test_merchant: 'is_test_merchant',
      outcomes_compliance_status: 'outcomes_compliance_status',
      qualified_to_onboard: 'qualified_to_onboard',
    });
  }



  get (fields: Array<string>, params: Object = {}): CPASMerchantConfig {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
