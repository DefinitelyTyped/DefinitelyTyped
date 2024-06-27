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
 * AdAccountReachEstimate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountReachEstimate extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      estimate_ready: 'estimate_ready',
      users_lower_bound: 'users_lower_bound',
      users_upper_bound: 'users_upper_bound',
    });
  }

}
