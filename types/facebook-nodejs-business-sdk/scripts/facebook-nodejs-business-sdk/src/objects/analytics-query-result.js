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
 * AnalyticsQueryResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AnalyticsQueryResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      columns: 'columns',
      datapoints: 'datapoints',
      error: 'error',
      query_id: 'query_id',
      status: 'status',
    });
  }

}
