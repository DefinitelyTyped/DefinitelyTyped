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
 * AdSavedLocation
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdSavedLocation extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      cities: 'cities',
      countries: 'countries',
      country_groups: 'country_groups',
      custom_locations: 'custom_locations',
      geo_markets: 'geo_markets',
      id: 'id',
      location_sentences: 'location_sentences',
      name: 'name',
      regions: 'regions',
      zips: 'zips',
    });
  }



  get (fields: Array<string>, params: Object = {}): AdSavedLocation {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
