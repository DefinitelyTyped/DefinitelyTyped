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
 * AudioAsset
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudioAsset extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      all_ddex_featured_artists: 'all_ddex_featured_artists',
      all_ddex_main_artists: 'all_ddex_main_artists',
      audio_cluster_id: 'audio_cluster_id',
      cover_image_source: 'cover_image_source',
      display_artist: 'display_artist',
      download_hd_url: 'download_hd_url',
      download_sd_url: 'download_sd_url',
      duration_in_ms: 'duration_in_ms',
      freeform_genre: 'freeform_genre',
      grid: 'grid',
      id: 'id',
      is_test: 'is_test',
      original_release_date: 'original_release_date',
      owner: 'owner',
      parental_warning_type: 'parental_warning_type',
      subtitle: 'subtitle',
      title: 'title',
      title_with_featured_artists: 'title_with_featured_artists',
      upc: 'upc',
    });
  }



  get (fields: Array<string>, params: Object = {}): AudioAsset {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
