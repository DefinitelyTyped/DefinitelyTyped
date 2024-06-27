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
 * AdAssetFeedSpecVideo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpecVideo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      adlabels: 'adlabels',
      caption_ids: 'caption_ids',
      thumbnail_hash: 'thumbnail_hash',
      thumbnail_url: 'thumbnail_url',
      url_tags: 'url_tags',
      video_id: 'video_id',
    });
  }

}
