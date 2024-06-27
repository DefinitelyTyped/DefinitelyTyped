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
 * AdDraft
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdDraft extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      api_version: 'api_version',
      async_request_set: 'async_request_set',
      author_id: 'author_id',
      created_by: 'created_by',
      draft_version: 'draft_version',
      id: 'id',
      is_active: 'is_active',
      name: 'name',
      ownership_type: 'ownership_type',
      publish_status: 'publish_status',
      state: 'state',
      summary: 'summary',
      time_created: 'time_created',
      time_updated: 'time_updated',
    });
  }



  get (fields: Array<string>, params: Object = {}): AdDraft {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
