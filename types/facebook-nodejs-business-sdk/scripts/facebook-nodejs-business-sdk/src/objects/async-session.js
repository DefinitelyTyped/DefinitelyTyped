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
 * AsyncSession
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AsyncSession extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      app: 'app',
      complete_time: 'complete_time',
      error_code: 'error_code',
      exception: 'exception',
      id: 'id',
      method: 'method',
      name: 'name',
      page: 'page',
      percent_completed: 'percent_completed',
      platform_version: 'platform_version',
      result: 'result',
      start_time: 'start_time',
      status: 'status',
      uri: 'uri',
      user: 'user',
    });
  }



  get (fields: Array<string>, params: Object = {}): AsyncSession {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
