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
 * ExternalEventSourceDAStatsResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExternalEventSourceDAStatsResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      count_content_ids: 'count_content_ids',
      count_content_ids_match_any_catalog: 'count_content_ids_match_any_catalog',
      count_fires: 'count_fires',
      count_fires_match_any_catalog: 'count_fires_match_any_catalog',
      date: 'date',
      percentage_missed_users: 'percentage_missed_users',
    });
  }

}
