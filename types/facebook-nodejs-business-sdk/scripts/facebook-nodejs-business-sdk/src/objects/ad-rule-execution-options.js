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
 * AdRuleExecutionOptions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleExecutionOptions extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      field: 'field',
      operator: 'operator',
      value: 'value',
    });
  }

  static get Operator () {
    return Object.freeze({
      equal: 'EQUAL',
      in: 'IN',
    });
  }
}
