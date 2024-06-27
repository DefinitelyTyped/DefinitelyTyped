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
 * TargetingGeoLocationPoliticalDistrict
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingGeoLocationPoliticalDistrict extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      country: 'country',
      key: 'key',
      name: 'name',
      political_district: 'political_district',
    });
  }

}
