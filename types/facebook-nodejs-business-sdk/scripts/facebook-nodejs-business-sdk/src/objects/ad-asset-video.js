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
 * AdAssetVideo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetVideo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      caption_ids: 'caption_ids',
      id: 'id',
      source_image_url: 'source_image_url',
      tag: 'tag',
      thumbnail_hash: 'thumbnail_hash',
      thumbnail_source: 'thumbnail_source',
      thumbnail_url: 'thumbnail_url',
      url: 'url',
      url_tags: 'url_tags',
      video_id: 'video_id',
      video_name: 'video_name',
    });
  }

}
