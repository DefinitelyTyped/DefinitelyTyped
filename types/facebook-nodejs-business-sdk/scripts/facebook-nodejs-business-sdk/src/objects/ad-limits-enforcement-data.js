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
 * AdLimitsEnforcementData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdLimitsEnforcementData extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_limit_on_page: 'ad_limit_on_page',
      ad_limit_on_scope: 'ad_limit_on_scope',
      ad_volume_on_page: 'ad_volume_on_page',
      ad_volume_on_scope: 'ad_volume_on_scope',
      is_admin: 'is_admin',
      page_name: 'page_name',
    });
  }

}
