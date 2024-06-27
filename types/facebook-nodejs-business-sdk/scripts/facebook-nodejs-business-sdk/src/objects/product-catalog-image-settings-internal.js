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
 * ProductCatalogImageSettingsInternal
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogImageSettingsInternal extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      carousel_ad: 'carousel_ad',
      shops_pdp: 'shops_pdp',
      single_ad: 'single_ad',
    });
  }

}
