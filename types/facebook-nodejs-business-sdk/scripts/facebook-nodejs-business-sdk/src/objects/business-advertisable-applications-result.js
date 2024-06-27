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
 * BusinessAdvertisableApplicationsResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessAdvertisableApplicationsResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      are_app_events_unavailable: 'are_app_events_unavailable',
      business: 'business',
      has_insight_permission: 'has_insight_permission',
      id: 'id',
      name: 'name',
      photo_url: 'photo_url',
    });
  }

}
