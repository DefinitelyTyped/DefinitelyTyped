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
 * AdsPixelMicrodataStats
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelMicrodataStats extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      allowed_domains: 'allowed_domains',
      errors_stats_for_time_ranges: 'errors_stats_for_time_ranges',
      has_valid_events: 'has_valid_events',
      suggested_allowed_domains_count_max: 'suggested_allowed_domains_count_max',
      suggested_trusted_domains: 'suggested_trusted_domains',
    });
  }

}
