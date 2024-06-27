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
 * GeoGatingPolicy
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class GeoGatingPolicy extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      after_schedule: 'after_schedule',
      exclude_country: 'exclude_country',
      id: 'id',
      include_country: 'include_country',
      name: 'name',
      valid_from: 'valid_from',
      valid_until: 'valid_until',
    });
  }



  get (fields: Array<string>, params: Object = {}): GeoGatingPolicy {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
