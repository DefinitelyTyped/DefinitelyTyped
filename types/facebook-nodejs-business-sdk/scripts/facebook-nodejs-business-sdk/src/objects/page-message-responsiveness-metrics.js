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
 * PageMessageResponsivenessMetrics
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageMessageResponsivenessMetrics extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      is_very_responsive: 'is_very_responsive',
      response_rate: 'response_rate',
      response_time: 'response_time',
    });
  }

}
