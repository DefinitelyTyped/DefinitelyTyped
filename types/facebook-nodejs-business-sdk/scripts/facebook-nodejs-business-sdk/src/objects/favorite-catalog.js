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
 * FavoriteCatalog
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FavoriteCatalog extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      catalog: 'catalog',
      id: 'id',
    });
  }



  get (fields: Array<string>, params: Object = {}): FavoriteCatalog {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
