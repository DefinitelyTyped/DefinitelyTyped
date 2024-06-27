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
 * AdRuleFilters
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleFilters extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      field: 'field',
      operator: 'operator',
      value: 'value',
    });
  }

  static get Operator () {
    return Object.freeze({
      all: 'ALL',
      any: 'ANY',
      contain: 'CONTAIN',
      equal: 'EQUAL',
      greater_than: 'GREATER_THAN',
      in: 'IN',
      in_range: 'IN_RANGE',
      less_than: 'LESS_THAN',
      none: 'NONE',
      not_contain: 'NOT_CONTAIN',
      not_equal: 'NOT_EQUAL',
      not_in: 'NOT_IN',
      not_in_range: 'NOT_IN_RANGE',
    });
  }
}
