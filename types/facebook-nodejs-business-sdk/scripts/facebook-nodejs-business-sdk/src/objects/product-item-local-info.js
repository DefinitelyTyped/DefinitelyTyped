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
 * ProductItemLocalInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemLocalInfo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      availability_circle_origin: 'availability_circle_origin',
      availability_circle_radius: 'availability_circle_radius',
      availability_circle_radius_unit: 'availability_circle_radius_unit',
      availability_polygon_coordinates: 'availability_polygon_coordinates',
      availability_postal_codes: 'availability_postal_codes',
      availability_source: 'availability_source',
      id: 'id',
      inferred_circle_origin: 'inferred_circle_origin',
      inferred_circle_radius: 'inferred_circle_radius',
    });
  }



  get (fields: Array<string>, params: Object = {}): ProductItemLocalInfo {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
