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
 * PartnershipAdContentSearchMedia
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnershipAdContentSearchMedia extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ig_media: 'ig_media',
      ig_media_has_product_tags: 'ig_media_has_product_tags',
      is_ad_code_entry: 'is_ad_code_entry',
    });
  }

}
