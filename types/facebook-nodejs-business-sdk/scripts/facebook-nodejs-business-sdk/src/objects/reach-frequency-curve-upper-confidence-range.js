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
 * ReachFrequencyCurveUpperConfidenceRange
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReachFrequencyCurveUpperConfidenceRange extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      impression_upper: 'impression_upper',
      num_points: 'num_points',
      reach: 'reach',
      reach_upper: 'reach_upper',
      uniq_video_views_2s_upper: 'uniq_video_views_2s_upper',
      video_views_2s_upper: 'video_views_2s_upper',
    });
  }

}
