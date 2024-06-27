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
 * SplitTestConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SplitTestConfig extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      budget: 'budget',
      early_winner_declaration_enabled: 'early_winner_declaration_enabled',
      end_time: 'end_time',
      splits: 'splits',
      start_time: 'start_time',
      test_variable: 'test_variable',
      id: 'id',
    });
  }



  get (fields: Array<string>, params: Object = {}): SplitTestConfig {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
