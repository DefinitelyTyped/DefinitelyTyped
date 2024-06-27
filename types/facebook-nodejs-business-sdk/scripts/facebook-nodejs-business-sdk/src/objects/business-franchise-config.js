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
 * BusinessFranchiseConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessFranchiseConfig extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      active_partner_count: 'active_partner_count',
      agency_business: 'agency_business',
      agency_business_asset_group: 'agency_business_asset_group',
      brand_name: 'brand_name',
      business: 'business',
      business_vertical: 'business_vertical',
      id: 'id',
      partner_count: 'partner_count',
      pending_agency_business: 'pending_agency_business',
      program_count: 'program_count',
      shared_business_asset_group: 'shared_business_asset_group',
      shared_creative_folder_count: 'shared_creative_folder_count',
      shared_custom_audience_count: 'shared_custom_audience_count',
    });
  }



  get (fields: Array<string>, params: Object = {}): BusinessFranchiseConfig {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
