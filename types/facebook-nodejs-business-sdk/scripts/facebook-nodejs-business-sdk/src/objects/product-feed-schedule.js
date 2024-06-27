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
 * ProductFeedSchedule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedSchedule extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      day_of_month: 'day_of_month',
      day_of_week: 'day_of_week',
      hour: 'hour',
      id: 'id',
      interval: 'interval',
      interval_count: 'interval_count',
      minute: 'minute',
      timezone: 'timezone',
      url: 'url',
      username: 'username',
    });
  }

  static get Interval () {
    return Object.freeze({
      daily: 'DAILY',
      hourly: 'HOURLY',
      monthly: 'MONTHLY',
      weekly: 'WEEKLY',
    });
  }


  get (fields: Array<string>, params: Object = {}): ProductFeedSchedule {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
