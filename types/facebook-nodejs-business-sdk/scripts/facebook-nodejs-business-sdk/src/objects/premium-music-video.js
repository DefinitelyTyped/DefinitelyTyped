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
 * PremiumMusicVideo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PremiumMusicVideo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      creation_time: 'creation_time',
      cross_post_videos: 'cross_post_videos',
      eligible_cross_post_pages: 'eligible_cross_post_pages',
      id: 'id',
      preferred_video_thumbnail_image_uri: 'preferred_video_thumbnail_image_uri',
      premium_music_video_metadata: 'premium_music_video_metadata',
      scheduled_publish_time: 'scheduled_publish_time',
      title: 'title',
    });
  }

}
