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
 * MinimumBudget
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MinimumBudget extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      currency: 'currency',
      min_daily_budget_high_freq: 'min_daily_budget_high_freq',
      min_daily_budget_imp: 'min_daily_budget_imp',
      min_daily_budget_low_freq: 'min_daily_budget_low_freq',
      min_daily_budget_video_views: 'min_daily_budget_video_views',
    });
  }

}
