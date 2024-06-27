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
 * IGBoostMediaAd
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGBoostMediaAd extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_id: 'ad_id',
      ad_status: 'ad_status',
      id: 'id',
    });
  }



  get (fields: Array<string>, params: Object = {}): IGBoostMediaAd {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
