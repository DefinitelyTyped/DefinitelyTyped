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
 * AdSavedKeywords
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdSavedKeywords extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account: 'account',
      id: 'id',
      keywords: 'keywords',
      name: 'name',
      run_status: 'run_status',
      time_created: 'time_created',
      time_updated: 'time_updated',
    });
  }



  get (fields: Array<string>, params: Object = {}): AdSavedKeywords {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
