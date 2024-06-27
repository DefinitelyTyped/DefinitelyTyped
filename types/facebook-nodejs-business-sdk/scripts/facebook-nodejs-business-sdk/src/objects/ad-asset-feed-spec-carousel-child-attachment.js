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
 * AdAssetFeedSpecCarouselChildAttachment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpecCarouselChildAttachment extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      body_label: 'body_label',
      call_to_action_type_label: 'call_to_action_type_label',
      caption_label: 'caption_label',
      description_label: 'description_label',
      image_label: 'image_label',
      link_url_label: 'link_url_label',
      phone_data_ids_label: 'phone_data_ids_label',
      static_card: 'static_card',
      title_label: 'title_label',
      video_label: 'video_label',
    });
  }

}
