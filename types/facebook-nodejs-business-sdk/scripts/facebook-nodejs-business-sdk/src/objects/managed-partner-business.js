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
 * ManagedPartnerBusiness
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ManagedPartnerBusiness extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_account: 'ad_account',
      catalog_segment: 'catalog_segment',
      extended_credit: 'extended_credit',
      page: 'page',
      seller_business_info: 'seller_business_info',
      seller_business_status: 'seller_business_status',
      template: 'template',
    });
  }

}
