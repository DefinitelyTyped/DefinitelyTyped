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
 * AdCreativeCollectionThumbnailInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeCollectionThumbnailInfo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      element_child_index: 'element_child_index',
      element_crops: 'element_crops',
      element_id: 'element_id',
    });
  }

}
