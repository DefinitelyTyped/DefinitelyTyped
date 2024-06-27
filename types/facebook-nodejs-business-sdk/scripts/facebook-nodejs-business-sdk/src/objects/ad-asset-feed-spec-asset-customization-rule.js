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
 * AdAssetFeedSpecAssetCustomizationRule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpecAssetCustomizationRule extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      body_label: 'body_label',
      call_to_action_label: 'call_to_action_label',
      call_to_action_type_label: 'call_to_action_type_label',
      caption_label: 'caption_label',
      carousel_label: 'carousel_label',
      customization_spec: 'customization_spec',
      description_label: 'description_label',
      image_label: 'image_label',
      is_default: 'is_default',
      link_url_label: 'link_url_label',
      priority: 'priority',
      title_label: 'title_label',
      video_label: 'video_label',
    });
  }

}
