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
 * WhitehatFBDLRun
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhitehatFBDLRun extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      creation_time: 'creation_time',
      id: 'id',
      is_pinned: 'is_pinned',
      note: 'note',
      result: 'result',
      run_code: 'run_code',
      status: 'status',
      user_type: 'user_type',
    });
  }



  get (fields: Array<string>, params: Object = {}): WhitehatFBDLRun {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
