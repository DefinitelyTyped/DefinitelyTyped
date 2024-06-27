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
 * AdCampaignGroupIncrementalConversionOptimizationConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignGroupIncrementalConversionOptimizationConfig extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      action_type: 'action_type',
      ad_study_end_time: 'ad_study_end_time',
      ad_study_id: 'ad_study_id',
      ad_study_name: 'ad_study_name',
      ad_study_start_time: 'ad_study_start_time',
      cell_id: 'cell_id',
      cell_name: 'cell_name',
      holdout_size: 'holdout_size',
      ico_type: 'ico_type',
      objectives: 'objectives',
    });
  }

}
