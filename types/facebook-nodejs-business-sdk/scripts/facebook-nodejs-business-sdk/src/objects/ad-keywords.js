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
 * AdKeywords
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdKeywords extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      brands: 'brands',
      product_categories: 'product_categories',
      product_names: 'product_names',
      search_terms: 'search_terms',
    });
  }

}
