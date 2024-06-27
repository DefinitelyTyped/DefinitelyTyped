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
 * DynamicContentSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicContentSet extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business_id: 'business_id',
      id: 'id',
      name: 'name',
    });
  }



  get (fields: Array<string>, params: Object = {}): DynamicContentSet {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
