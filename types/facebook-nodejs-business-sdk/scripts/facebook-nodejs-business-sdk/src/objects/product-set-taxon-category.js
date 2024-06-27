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
 * ProductSetTaxonCategory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductSetTaxonCategory extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      category_id: 'category_id',
      category_name: 'category_name',
      image_url: 'image_url',
    });
  }

}
