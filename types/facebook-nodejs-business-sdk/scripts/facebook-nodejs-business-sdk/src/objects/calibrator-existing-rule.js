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
 * CalibratorExistingRule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CalibratorExistingRule extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      value_7d_volume: '7d_volume',
      creation_source: 'creation_source',
      creation_time: 'creation_time',
      creator: 'creator',
      event_type: 'event_type',
      id: 'id',
      rule: 'rule',
      rule_type: 'rule_type',
      sample_urls: 'sample_urls',
      status: 'status',
      transforms: 'transforms',
    });
  }



  get (fields: Array<string>, params: Object = {}): CalibratorExistingRule {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
