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
 * AdAssetLinkURL
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetLinkURL extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      android_deeplink_url: 'android_deeplink_url',
      carousel_see_more_url: 'carousel_see_more_url',
      deeplink_url: 'deeplink_url',
      display_url: 'display_url',
      id: 'id',
      ipad_deeplink_url: 'ipad_deeplink_url',
      iphone_deeplink_url: 'iphone_deeplink_url',
      url_tags: 'url_tags',
      website_url: 'website_url',
    });
  }

}
