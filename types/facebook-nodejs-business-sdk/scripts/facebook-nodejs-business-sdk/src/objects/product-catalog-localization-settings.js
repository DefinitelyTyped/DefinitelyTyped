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
 * ProductCatalogLocalizationSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogLocalizationSettings extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      default_country: 'default_country',
      default_language: 'default_language',
      id: 'id',
    });
  }



  get (fields: Array<string>, params: Object = {}): ProductCatalogLocalizationSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
