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
 * TargetingGeoLocationCity
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingGeoLocationCity extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      country: 'country',
      distance_unit: 'distance_unit',
      key: 'key',
      name: 'name',
      radius: 'radius',
      region: 'region',
      region_id: 'region_id',
    });
  }

}
