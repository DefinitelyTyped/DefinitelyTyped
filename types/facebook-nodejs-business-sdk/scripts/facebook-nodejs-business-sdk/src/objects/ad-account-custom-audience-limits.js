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
 * AdAccountCustomAudienceLimits
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountCustomAudienceLimits extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      audience_update_quota_in_total: 'audience_update_quota_in_total',
      audience_update_quota_left: 'audience_update_quota_left',
      has_hit_audience_update_limit: 'has_hit_audience_update_limit',
      next_audience_update_available_time: 'next_audience_update_available_time',
      rate_limit_reset_time: 'rate_limit_reset_time',
    });
  }

}
