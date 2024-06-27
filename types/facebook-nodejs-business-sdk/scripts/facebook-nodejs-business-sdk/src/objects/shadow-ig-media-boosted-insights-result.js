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
 * ShadowIGMediaBoostedInsightsResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGMediaBoostedInsightsResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      description: 'description',
      name: 'name',
      organic_media_id: 'organic_media_id',
      source_type: 'source_type',
      title: 'title',
      values: 'values',
    });
  }

}
