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
 * BidSchedule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BidSchedule extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_object_id: 'ad_object_id',
      bid_recurrence_type: 'bid_recurrence_type',
      bid_timezone: 'bid_timezone',
      bid_value: 'bid_value',
      id: 'id',
      status: 'status',
      time_end: 'time_end',
      time_start: 'time_start',
    });
  }



  get (fields: Array<string>, params: Object = {}): BidSchedule {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
