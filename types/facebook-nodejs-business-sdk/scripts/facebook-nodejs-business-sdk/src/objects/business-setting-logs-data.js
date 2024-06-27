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
 * BusinessSettingLogsData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessSettingLogsData extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      actor: 'actor',
      event_object: 'event_object',
      event_time: 'event_time',
      event_type: 'event_type',
      extra_data: 'extra_data',
    });
  }

}
