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
 * TargetingGeoLocationElectoralDistrict
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingGeoLocationElectoralDistrict extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      country: 'country',
      deprecation_code: 'deprecation_code',
      electoral_district: 'electoral_district',
      key: 'key',
      name: 'name',
    });
  }

}
