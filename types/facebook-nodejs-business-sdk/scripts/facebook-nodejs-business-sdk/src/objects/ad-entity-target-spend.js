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
 * AdEntityTargetSpend
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdEntityTargetSpend extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      amount: 'amount',
      has_error: 'has_error',
      is_accurate: 'is_accurate',
      is_prorated: 'is_prorated',
      is_updating: 'is_updating',
    });
  }

}
