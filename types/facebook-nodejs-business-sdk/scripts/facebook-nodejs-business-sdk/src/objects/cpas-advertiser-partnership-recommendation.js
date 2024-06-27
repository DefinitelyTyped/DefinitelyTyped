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
 * CPASAdvertiserPartnershipRecommendation
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASAdvertiserPartnershipRecommendation extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      advertiser_business_id: 'advertiser_business_id',
      brand_business_id: 'brand_business_id',
      brands: 'brands',
      countries: 'countries',
      id: 'id',
      merchant_business_id: 'merchant_business_id',
      merchant_categories: 'merchant_categories',
      status: 'status',
      status_reason: 'status_reason',
    });
  }



  get (fields: Array<string>, params: Object = {}): CPASAdvertiserPartnershipRecommendation {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
