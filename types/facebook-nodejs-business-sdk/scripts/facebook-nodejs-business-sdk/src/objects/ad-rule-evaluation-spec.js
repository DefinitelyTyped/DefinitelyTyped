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
 * AdRuleEvaluationSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleEvaluationSpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      evaluation_type: 'evaluation_type',
      filters: 'filters',
      trigger: 'trigger',
      id: 'id',
    });
  }

  static get EvaluationType () {
    return Object.freeze({
      schedule: 'SCHEDULE',
      trigger: 'TRIGGER',
    });
  }


  get (fields: Array<string>, params: Object = {}): AdRuleEvaluationSpec {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
