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
 * AdsTargetingInsights
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsTargetingInsights extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      audience_size: 'audience_size',
      clicks: 'clicks',
      conversion_cost: 'conversion_cost',
      conversions: 'conversions',
      description: 'description',
      id: 'id',
      impressions: 'impressions',
      name: 'name',
      revenue: 'revenue',
      spend: 'spend',
      type: 'type',
    });
  }

}
