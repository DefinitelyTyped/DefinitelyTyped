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
 * PagePartnerWithLeadsAccess
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PagePartnerWithLeadsAccess extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      can_access_leads: 'can_access_leads',
      partner_business: 'partner_business',
      permitted_tasks: 'permitted_tasks',
    });
  }

}
