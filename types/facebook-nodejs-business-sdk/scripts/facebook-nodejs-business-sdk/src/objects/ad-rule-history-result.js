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
 * AdRuleHistoryResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleHistoryResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      actions: 'actions',
      object_id: 'object_id',
      object_type: 'object_type',
    });
  }

  static get ObjectType () {
    return Object.freeze({
      ad: 'AD',
      adset: 'ADSET',
      campaign: 'CAMPAIGN',
    });
  }
}
