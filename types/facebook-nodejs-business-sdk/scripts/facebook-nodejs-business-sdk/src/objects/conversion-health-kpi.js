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
 * ConversionHealthKPI
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ConversionHealthKPI extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      health_indicator: 'health_indicator',
      impacted_browsers_match_rate: 'impacted_browsers_match_rate',
      impacted_browsers_match_rate_mom_trend: 'impacted_browsers_match_rate_mom_trend',
      impacted_browsers_traffic_share: 'impacted_browsers_traffic_share',
      impacted_browsers_traffic_share_mom_trend: 'impacted_browsers_traffic_share_mom_trend',
      match_rate: 'match_rate',
      match_rate_mom_trend: 'match_rate_mom_trend',
      match_rate_vertical_benchmark: 'match_rate_vertical_benchmark',
      match_rate_vs_benchmark_mom_trend: 'match_rate_vs_benchmark_mom_trend',
    });
  }

}
