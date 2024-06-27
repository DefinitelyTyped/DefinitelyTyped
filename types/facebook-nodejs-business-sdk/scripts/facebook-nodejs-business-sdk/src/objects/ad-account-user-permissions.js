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
 * AdAccountUserPermissions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountUserPermissions extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      business_persona: 'business_persona',
      created_by: 'created_by',
      created_time: 'created_time',
      email: 'email',
      status: 'status',
      tasks: 'tasks',
      updated_by: 'updated_by',
      updated_time: 'updated_time',
      user: 'user',
    });
  }

}
