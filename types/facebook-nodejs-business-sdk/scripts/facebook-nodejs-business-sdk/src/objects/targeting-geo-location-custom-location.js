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
 * TargetingGeoLocationCustomLocation
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingGeoLocationCustomLocation extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      address_string: 'address_string',
      country: 'country',
      country_group: 'country_group',
      custom_type: 'custom_type',
      distance_unit: 'distance_unit',
      key: 'key',
      latitude: 'latitude',
      longitude: 'longitude',
      max_population: 'max_population',
      min_population: 'min_population',
      name: 'name',
      primary_city_id: 'primary_city_id',
      radius: 'radius',
      region_id: 'region_id',
    });
  }

}
