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
 * CPASParentCatalogSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASParentCatalogSettings extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      attribution_windows: 'attribution_windows',
      default_currency: 'default_currency',
      disable_use_as_parent_catalog: 'disable_use_as_parent_catalog',
      id: 'id',
    });
  }



  get (fields: Array<string>, params: Object = {}): CPASParentCatalogSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
