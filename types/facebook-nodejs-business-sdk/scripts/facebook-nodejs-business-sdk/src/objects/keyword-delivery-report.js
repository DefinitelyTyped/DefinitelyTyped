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
 * KeywordDeliveryReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class KeywordDeliveryReport extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      estimated_clicks: 'estimated_clicks',
      estimated_conversions: 'estimated_conversions',
      estimated_cost: 'estimated_cost',
      estimated_cpc: 'estimated_cpc',
      estimated_ctr: 'estimated_ctr',
      estimated_cvr: 'estimated_cvr',
      estimated_impressions: 'estimated_impressions',
      estimated_returns: 'estimated_returns',
      keyword: 'keyword',
    });
  }

}
