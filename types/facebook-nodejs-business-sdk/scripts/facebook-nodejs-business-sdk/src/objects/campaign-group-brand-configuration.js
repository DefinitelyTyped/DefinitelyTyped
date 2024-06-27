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
 * CampaignGroupBrandConfiguration
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CampaignGroupBrandConfiguration extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      brand_product_name: 'brand_product_name',
      locale: 'locale',
      vertical: 'vertical',
    });
  }

}
