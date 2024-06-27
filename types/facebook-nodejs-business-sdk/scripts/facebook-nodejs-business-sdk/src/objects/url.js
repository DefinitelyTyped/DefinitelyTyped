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
 * URL
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class URL extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      engagement: 'engagement',
      id: 'id',
      og_object: 'og_object',
      ownership_permissions: 'ownership_permissions',
      scopes: 'scopes',
    });
  }

  static get Scopes () {
    return Object.freeze({
      news_tab: 'NEWS_TAB',
      news_tab_dev_env: 'NEWS_TAB_DEV_ENV',
    });
  }


  get (fields: Array<string>, params: Object = {}): URL {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): URL {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
