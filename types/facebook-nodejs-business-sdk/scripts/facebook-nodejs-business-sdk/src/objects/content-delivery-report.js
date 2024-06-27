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
 * ContentDeliveryReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ContentDeliveryReport extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      content_name: 'content_name',
      content_url: 'content_url',
      creator_name: 'creator_name',
      creator_url: 'creator_url',
      estimated_impressions: 'estimated_impressions',
    });
  }

}
