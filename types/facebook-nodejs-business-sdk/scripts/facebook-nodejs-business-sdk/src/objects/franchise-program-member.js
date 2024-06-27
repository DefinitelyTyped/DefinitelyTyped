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
 * FranchiseProgramMember
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FranchiseProgramMember extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      end_date: 'end_date',
      id: 'id',
      join_date: 'join_date',
      member_ad_account: 'member_ad_account',
      member_user: 'member_user',
      membership_status: 'membership_status',
      page: 'page',
    });
  }



  get (fields: Array<string>, params: Object = {}): FranchiseProgramMember {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
