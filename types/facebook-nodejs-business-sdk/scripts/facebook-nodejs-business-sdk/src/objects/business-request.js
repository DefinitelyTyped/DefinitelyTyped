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
 * BusinessRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessRequest extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      accessor: 'accessor',
      creation_time: 'creation_time',
      id: 'id',
      object_id: 'object_id',
      object_type: 'object_type',
      permitted_tasks: 'permitted_tasks',
      request_status: 'request_status',
      request_type: 'request_type',
      requestor: 'requestor',
    });
  }



  get (fields: Array<string>, params: Object = {}): BusinessRequest {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
