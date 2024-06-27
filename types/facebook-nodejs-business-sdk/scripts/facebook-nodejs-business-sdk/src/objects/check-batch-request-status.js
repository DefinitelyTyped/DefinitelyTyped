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
 * CheckBatchRequestStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CheckBatchRequestStatus extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      errors: 'errors',
      errors_total_count: 'errors_total_count',
      handle: 'handle',
      ids_of_invalid_requests: 'ids_of_invalid_requests',
      status: 'status',
      warnings: 'warnings',
      warnings_total_count: 'warnings_total_count',
    });
  }

  static get ErrorPriority () {
    return Object.freeze({
      high: 'HIGH',
      low: 'LOW',
      medium: 'MEDIUM',
    });
  }
}
