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
 * ReachFrequencySpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReachFrequencySpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      countries: 'countries',
      default_creation_data: 'default_creation_data',
      global_io_max_campaign_duration: 'global_io_max_campaign_duration',
      max_campaign_duration: 'max_campaign_duration',
      max_days_to_finish: 'max_days_to_finish',
      max_pause_without_prediction_rerun: 'max_pause_without_prediction_rerun',
      min_campaign_duration: 'min_campaign_duration',
      min_reach_limits: 'min_reach_limits',
    });
  }

}
