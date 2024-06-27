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
 * DynamicPostChildAttachment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicPostChildAttachment extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      description: 'description',
      image_url: 'image_url',
      link: 'link',
      place_id: 'place_id',
      product_id: 'product_id',
      title: 'title',
    });
  }

}
