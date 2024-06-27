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
 * CatalogWebsiteSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogWebsiteSettings extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      is_allowed_to_crawl: 'is_allowed_to_crawl',
    });
  }



  get (fields: Array<string>, params: Object = {}): CatalogWebsiteSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
