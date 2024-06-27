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
 * BusinessManagedPartnerEligibility
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessManagedPartnerEligibility extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      is_eligible: 'is_eligible',
      reason_code: 'reason_code',
      reason_description: 'reason_description',
    });
  }

}
