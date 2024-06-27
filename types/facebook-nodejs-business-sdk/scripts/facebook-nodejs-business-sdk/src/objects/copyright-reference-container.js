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
 * CopyrightReferenceContainer
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CopyrightReferenceContainer extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      content_type: 'content_type',
      copyright_creation_time: 'copyright_creation_time',
      download_hd_url: 'download_hd_url',
      duration_in_sec: 'duration_in_sec',
      id: 'id',
      iswc: 'iswc',
      metadata: 'metadata',
      published_time: 'published_time',
      thumbnail_url: 'thumbnail_url',
      title: 'title',
      universal_content_id: 'universal_content_id',
      writer_names: 'writer_names',
    });
  }

}
