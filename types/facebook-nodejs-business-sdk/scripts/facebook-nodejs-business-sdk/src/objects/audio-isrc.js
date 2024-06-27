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
 * AudioIsrc
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudioIsrc extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      all_kg_featured_artists: 'all_kg_featured_artists',
      all_kg_main_artists: 'all_kg_main_artists',
      artist_profile_picture_url: 'artist_profile_picture_url',
      id: 'id',
      isrc: 'isrc',
      publishing_rights_data: 'publishing_rights_data',
      top_searchable_artist_id: 'top_searchable_artist_id',
      top_searchable_artist_name: 'top_searchable_artist_name',
      top_searchable_artist_profile_pic_url: 'top_searchable_artist_profile_pic_url',
    });
  }



  get (fields: Array<string>, params: Object = {}): AudioIsrc {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
