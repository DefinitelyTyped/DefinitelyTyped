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
 * AdAssetFeedSpecImage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpecImage extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      adlabels: 'adlabels',
      hash: 'hash',
      image_crops: 'image_crops',
      url: 'url',
      url_tags: 'url_tags',
    });
  }

}
