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
 * TargetingGeoLocationPlace
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingGeoLocationPlace extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      country: 'country',
      distance_unit: 'distance_unit',
      key: 'key',
      latitude: 'latitude',
      longitude: 'longitude',
      name: 'name',
      primary_city_id: 'primary_city_id',
      radius: 'radius',
      region_id: 'region_id',
    });
  }

}
