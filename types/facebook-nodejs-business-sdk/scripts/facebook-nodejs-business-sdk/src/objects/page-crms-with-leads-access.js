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
 * PageCrmsWithLeadsAccess
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageCrmsWithLeadsAccess extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      can_access_leads: 'can_access_leads',
      id: 'id',
      integration_type: 'integration_type',
      name: 'name',
    });
  }

}
