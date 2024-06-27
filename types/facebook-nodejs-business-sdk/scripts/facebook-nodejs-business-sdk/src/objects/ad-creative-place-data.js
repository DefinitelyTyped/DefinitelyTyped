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
 * AdCreativePlaceData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativePlaceData extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      address_string: 'address_string',
      label: 'label',
      latitude: 'latitude',
      location_source_id: 'location_source_id',
      longitude: 'longitude',
      type: 'type',
    });
  }

}
