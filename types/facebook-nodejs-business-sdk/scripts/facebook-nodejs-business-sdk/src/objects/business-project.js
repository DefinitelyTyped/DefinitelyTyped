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
 * BusinessProject
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessProject extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      created_time: 'created_time',
      creator: 'creator',
      id: 'id',
      name: 'name',
    });
  }



  get (fields: Array<string>, params: Object = {}): BusinessProject {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
