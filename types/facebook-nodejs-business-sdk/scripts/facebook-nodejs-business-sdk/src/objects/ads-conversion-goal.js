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
import Cursor from './../cursor';

/**
 * AdsConversionGoal
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsConversionGoal extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_account_id: 'ad_account_id',
      conversion_event_value_source: 'conversion_event_value_source',
      description: 'description',
      goal_creation_method: 'goal_creation_method',
      id: 'id',
      name: 'name',
      performance_goal: 'performance_goal',
      update_status: 'update_status',
    });
  }


  getConversionEvents (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/conversion_events'
    );
  }


  get (fields: Array<string>, params: Object = {}): AdsConversionGoal {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
