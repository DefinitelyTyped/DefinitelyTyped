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
 * OfflineConversionDataSetActivities
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineConversionDataSetActivities extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      actor_id: 'actor_id',
      actor_name: 'actor_name',
      adaccount_id: 'adaccount_id',
      adaccount_name: 'adaccount_name',
      event_time: 'event_time',
      event_type: 'event_type',
      extra_data: 'extra_data',
      object_id: 'object_id',
      object_name: 'object_name',
    });
  }

}
