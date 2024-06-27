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
 * PublisherWhiteList
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PublisherWhiteList extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business_owner_id: 'business_owner_id',
      id: 'id',
      last_updated_time: 'last_updated_time',
      last_updated_user: 'last_updated_user',
      name: 'name',
      placement_type: 'placement_type',
    });
  }



  get (fields: Array<string>, params: Object = {}): PublisherWhiteList {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
