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
 * OfflineConversionDataSetOptimizationStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineConversionDataSetOptimizationStatus extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      event: 'event',
      last_changed_time: 'last_changed_time',
      last_detected_time: 'last_detected_time',
      status: 'status',
    });
  }

}
