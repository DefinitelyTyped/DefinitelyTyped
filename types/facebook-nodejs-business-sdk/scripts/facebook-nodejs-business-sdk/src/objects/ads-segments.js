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
 * AdsSegments
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsSegments extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      daily_audience_size: 'daily_audience_size',
      daily_impressions: 'daily_impressions',
      description: 'description',
      id: 'id',
      name: 'name',
      path: 'path',
      popularity: 'popularity',
      projected_cpm: 'projected_cpm',
      projected_daily_revenue: 'projected_daily_revenue',
    });
  }

}
