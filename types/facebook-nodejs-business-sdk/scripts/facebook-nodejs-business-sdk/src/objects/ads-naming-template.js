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
 * AdsNamingTemplate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsNamingTemplate extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      api_fields: 'api_fields',
      api_version: 'api_version',
      field_order: 'field_order',
      id: 'id',
      level: 'level',
      separator: 'separator',
      template_version: 'template_version',
      user_defined_fields: 'user_defined_fields',
      value_separator: 'value_separator',
    });
  }

  static get Level () {
    return Object.freeze({
      adgroup: 'ADGROUP',
      ad_account: 'AD_ACCOUNT',
      campaign: 'CAMPAIGN',
      campaign_group: 'CAMPAIGN_GROUP',
      opportunities: 'OPPORTUNITIES',
      privacy_info_center: 'PRIVACY_INFO_CENTER',
      topline: 'TOPLINE',
      unique_adcreative: 'UNIQUE_ADCREATIVE',
    });
  }


  get (fields: Array<string>, params: Object = {}): AdsNamingTemplate {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
