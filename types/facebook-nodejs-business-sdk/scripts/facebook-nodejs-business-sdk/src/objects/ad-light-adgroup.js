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
 * AdLightAdgroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdLightAdgroup extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      adset_id: 'adset_id',
      id: 'id',
    });
  }



  get (fields: Array<string>, params: Object = {}): AdLightAdgroup {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
