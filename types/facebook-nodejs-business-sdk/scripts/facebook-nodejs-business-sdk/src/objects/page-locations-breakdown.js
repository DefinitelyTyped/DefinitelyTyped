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
 * PageLocationsBreakdown
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageLocationsBreakdown extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      location_id: 'location_id',
      location_name: 'location_name',
      location_type: 'location_type',
      num_pages: 'num_pages',
      num_pages_eligible_for_store_visit_reporting: 'num_pages_eligible_for_store_visit_reporting',
      num_unpublished_or_closed_pages: 'num_unpublished_or_closed_pages',
      parent_country_code: 'parent_country_code',
      parent_region_id: 'parent_region_id',
      parent_region_name: 'parent_region_name',
    });
  }

}
