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
 * AdLimitSetting
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdLimitSetting extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      limit_allocation_by_page_advertisers: 'limit_allocation_by_page_advertisers',
    });
  }

}
