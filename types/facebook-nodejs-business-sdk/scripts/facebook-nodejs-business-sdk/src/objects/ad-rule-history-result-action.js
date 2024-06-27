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
 * AdRuleHistoryResultAction
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleHistoryResultAction extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      action: 'action',
      field: 'field',
      new_value: 'new_value',
      old_value: 'old_value',
    });
  }

}
