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
 * VideoStats
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoStats extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      aggregate: 'aggregate',
      error: 'error',
      metadata: 'metadata',
      time_series: 'time_series',
      totals: 'totals',
      x_axis_breakdown: 'x_axis_breakdown',
    });
  }

}
