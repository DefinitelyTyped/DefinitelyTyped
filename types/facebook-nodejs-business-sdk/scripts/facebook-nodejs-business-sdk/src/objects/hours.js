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
 * Hours
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Hours extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      permanent_status: 'permanent_status',
    });
  }



  get (fields: Array<string>, params: Object = {}): Hours {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
