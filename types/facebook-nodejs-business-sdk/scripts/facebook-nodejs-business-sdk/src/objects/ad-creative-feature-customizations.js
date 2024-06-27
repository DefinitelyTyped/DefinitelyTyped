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
 * AdCreativeFeatureCustomizations
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeFeatureCustomizations extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      background_color: 'background_color',
      catalog_feed_tag_name: 'catalog_feed_tag_name',
      font_name: 'font_name',
      product_recommendation_type: 'product_recommendation_type',
      showcase_card_display: 'showcase_card_display',
      text_style: 'text_style',
      video_crop_style: 'video_crop_style',
    });
  }

}
