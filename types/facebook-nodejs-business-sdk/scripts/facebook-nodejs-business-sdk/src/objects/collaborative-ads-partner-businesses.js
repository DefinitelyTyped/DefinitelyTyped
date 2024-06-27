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
 * CollaborativeAdsPartnerBusinesses
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CollaborativeAdsPartnerBusinesses extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      collaborative_ads_partner_businesses_info: 'collaborative_ads_partner_businesses_info',
      dedicated_partner_business_info: 'dedicated_partner_business_info',
    });
  }

}
