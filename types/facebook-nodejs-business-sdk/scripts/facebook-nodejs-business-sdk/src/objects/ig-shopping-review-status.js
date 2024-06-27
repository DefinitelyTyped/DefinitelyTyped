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
 * IGShoppingReviewStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGShoppingReviewStatus extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      onsite_eligibility: 'onsite_eligibility',
      reasons: 'reasons',
      status: 'status',
    });
  }

}
