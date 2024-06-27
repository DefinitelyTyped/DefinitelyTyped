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
 * AdAsyncRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAsyncRequest extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      async_request_set: 'async_request_set',
      created_time: 'created_time',
      id: 'id',
      input: 'input',
      result: 'result',
      scope_object_id: 'scope_object_id',
      status: 'status',
      type: 'type',
      updated_time: 'updated_time',
    });
  }

  static get Statuses () {
    return Object.freeze({
      canceled: 'CANCELED',
      canceled_dependency: 'CANCELED_DEPENDENCY',
      error: 'ERROR',
      error_conflicts: 'ERROR_CONFLICTS',
      error_dependency: 'ERROR_DEPENDENCY',
      initial: 'INITIAL',
      in_progress: 'IN_PROGRESS',
      pending_dependency: 'PENDING_DEPENDENCY',
      process_by_ad_async_engine: 'PROCESS_BY_AD_ASYNC_ENGINE',
      process_by_event_processor: 'PROCESS_BY_EVENT_PROCESSOR',
      success: 'SUCCESS',
      user_canceled: 'USER_CANCELED',
      user_canceled_dependency: 'USER_CANCELED_DEPENDENCY',
    });
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }


  get (fields: Array<string>, params: Object = {}): AdAsyncRequest {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
