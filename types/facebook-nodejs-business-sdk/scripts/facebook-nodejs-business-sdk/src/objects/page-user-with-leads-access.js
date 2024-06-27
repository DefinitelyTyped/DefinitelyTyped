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
 * PageUserWithLeadsAccess
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageUserWithLeadsAccess extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      active_on_business: 'active_on_business',
      business_role: 'business_role',
      can_access_leads: 'can_access_leads',
      page_role: 'page_role',
    });
  }

}
