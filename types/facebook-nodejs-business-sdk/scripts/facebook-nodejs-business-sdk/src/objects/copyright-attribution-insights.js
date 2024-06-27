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
 * CopyrightAttributionInsights
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CopyrightAttributionInsights extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      l7_attribution_page_view: 'l7_attribution_page_view',
      l7_attribution_page_view_delta: 'l7_attribution_page_view_delta',
      l7_attribution_video_view: 'l7_attribution_video_view',
      l7_attribution_video_view_delta: 'l7_attribution_video_view_delta',
      metrics_ending_date: 'metrics_ending_date',
    });
  }

}
