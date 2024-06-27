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
import Cursor from './../cursor';
import AssignedUser from './assigned-user';

/**
 * BizInboxOffsiteEmailAccount
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BizInboxOffsiteEmailAccount extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      email_address: 'email_address',
      id: 'id',
    });
  }


  getAssignedUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AssignedUser,
      fields,
      params,
      fetchFirstPage,
      '/assigned_users'
    );
  }


  get (fields: Array<string>, params: Object = {}): BizInboxOffsiteEmailAccount {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
