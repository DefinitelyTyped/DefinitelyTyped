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
 * SavedMessageResponse
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SavedMessageResponse extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      category: 'category',
      id: 'id',
      image: 'image',
      is_enabled: 'is_enabled',
      message: 'message',
      title: 'title',
    });
  }



  get (fields: Array<string>, params: Object = {}): SavedMessageResponse {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
