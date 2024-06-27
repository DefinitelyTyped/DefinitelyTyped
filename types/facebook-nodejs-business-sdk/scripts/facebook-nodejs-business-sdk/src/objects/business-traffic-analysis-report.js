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
 * BusinessTrafficAnalysisReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessTrafficAnalysisReport extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      audience_location: 'audience_location',
      event_category: 'event_category',
      traffic_analysis_impressions: 'traffic_analysis_impressions',
    });
  }

}
