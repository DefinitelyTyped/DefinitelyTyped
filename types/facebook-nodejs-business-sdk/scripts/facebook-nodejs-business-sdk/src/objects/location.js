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
 * Location
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Location extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      city: 'city',
      city_id: 'city_id',
      country: 'country',
      country_code: 'country_code',
      latitude: 'latitude',
      located_in: 'located_in',
      longitude: 'longitude',
      name: 'name',
      region: 'region',
      region_id: 'region_id',
      state: 'state',
      street: 'street',
      zip: 'zip',
    });
  }

}
