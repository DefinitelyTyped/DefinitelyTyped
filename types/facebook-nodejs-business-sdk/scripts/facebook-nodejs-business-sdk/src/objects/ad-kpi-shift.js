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
 * AdKpiShift
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdKpiShift extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_set: 'ad_set',
      cost_per_result_shift: 'cost_per_result_shift',
      enough_effective_days: 'enough_effective_days',
      result_indicator: 'result_indicator',
      result_shift: 'result_shift',
      spend_shift: 'spend_shift',
    });
  }

}
