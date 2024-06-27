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
 * WebsiteCreativeAssetSource
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WebsiteCreativeAssetSource extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      source_url: 'source_url',
    });
  }



  get (fields: Array<string>, params: Object = {}): WebsiteCreativeAssetSource {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
