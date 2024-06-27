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
import AbstractObject from './../abstract-object';

/**
 * HighDemandPeriod
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class HighDemandPeriod extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_object_id: 'ad_object_id',
      budget_value: 'budget_value',
      budget_value_type: 'budget_value_type',
      id: 'id',
      recurrence_type: 'recurrence_type',
      time_end: 'time_end',
      time_start: 'time_start',
      weekly_schedule: 'weekly_schedule',
    });
  }

  static get BudgetValueType () {
    return Object.freeze({
      absolute: 'ABSOLUTE',
      multiplier: 'MULTIPLIER',
    });
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }


  get (fields: Array<string>, params: Object = {}): HighDemandPeriod {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): HighDemandPeriod {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
