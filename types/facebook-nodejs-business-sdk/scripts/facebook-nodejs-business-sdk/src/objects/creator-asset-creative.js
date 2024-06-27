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
 * CreatorAssetCreative
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreatorAssetCreative extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      image_url: 'image_url',
      moderation_status: 'moderation_status',
      product_item_retailer_id: 'product_item_retailer_id',
      product_url: 'product_url',
      retailer_id: 'retailer_id',
      video_url: 'video_url',
    });
  }

  static get ModerationStatus () {
    return Object.freeze({
      archived: 'ARCHIVED',
      eligible: 'ELIGIBLE',
      expired: 'EXPIRED',
      ineligible: 'INELIGIBLE',
      in_review: 'IN_REVIEW',
      paused: 'PAUSED',
      unknown: 'UNKNOWN',
    });
  }


  get (fields: Array<string>, params: Object = {}): CreatorAssetCreative {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
