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
 * AdvAInstance
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdvAInstance extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      instance_type: 'instance_type',
      name: 'name',
      owner_business: 'owner_business',
    });
  }



  get (fields: Array<string>, params: Object = {}): AdvAInstance {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
