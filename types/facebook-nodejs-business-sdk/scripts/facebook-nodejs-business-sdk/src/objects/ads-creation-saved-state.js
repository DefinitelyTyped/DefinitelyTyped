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
 * AdsCreationSavedState
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsCreationSavedState extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_account: 'ad_account',
      id: 'id',
      serialized_store_data: 'serialized_store_data',
      time_updated: 'time_updated',
      user: 'user',
    });
  }



  get (fields: Array<string>, params: Object = {}): AdsCreationSavedState {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
