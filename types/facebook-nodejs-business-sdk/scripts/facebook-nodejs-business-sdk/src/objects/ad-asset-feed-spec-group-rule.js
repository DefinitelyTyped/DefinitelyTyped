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
 * AdAssetFeedSpecGroupRule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpecGroupRule extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      body_label: 'body_label',
      caption_label: 'caption_label',
      description_label: 'description_label',
      image_label: 'image_label',
      link_url_label: 'link_url_label',
      title_label: 'title_label',
      video_label: 'video_label',
    });
  }

}
