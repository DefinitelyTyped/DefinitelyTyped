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
 * ReachFrequencyCurveLowerConfidenceRange
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReachFrequencyCurveLowerConfidenceRange extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      impression_lower: 'impression_lower',
      num_points: 'num_points',
      reach: 'reach',
      reach_lower: 'reach_lower',
      uniq_video_views_2s_lower: 'uniq_video_views_2s_lower',
      video_views_2s_lower: 'video_views_2s_lower',
    });
  }

}
