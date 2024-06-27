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
 * IGBCAdsPermission
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGBCAdsPermission extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      permission_type: 'permission_type',
      status: 'status',
    });
  }



  get (fields: Array<string>, params: Object = {}): IGBCAdsPermission {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
