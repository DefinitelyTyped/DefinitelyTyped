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
 * IGMediaBoostEligibilityInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGMediaBoostEligibilityInfo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      boost_ineligible_reason: 'boost_ineligible_reason',
      eligible_to_boost: 'eligible_to_boost',
      id: 'id',
    });
  }



  get (fields: Array<string>, params: Object = {}): IGMediaBoostEligibilityInfo {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
