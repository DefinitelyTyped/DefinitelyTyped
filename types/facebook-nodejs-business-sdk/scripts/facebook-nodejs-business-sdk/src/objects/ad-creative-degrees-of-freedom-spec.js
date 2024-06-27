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
 * AdCreativeDegreesOfFreedomSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeDegreesOfFreedomSpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_handle_type: 'ad_handle_type',
      creative_features_spec: 'creative_features_spec',
      degrees_of_freedom_type: 'degrees_of_freedom_type',
      image_transformation_types: 'image_transformation_types',
      multi_media_transformation_type: 'multi_media_transformation_type',
      stories_transformation_types: 'stories_transformation_types',
      text_transformation_types: 'text_transformation_types',
      video_transformation_types: 'video_transformation_types',
    });
  }

}
