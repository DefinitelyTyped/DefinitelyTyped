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
 * BusinessVideo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessVideo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      id: 'id',
      media_library_url: 'media_library_url',
      name: 'name',
      video: 'video',
    });
  }



  get (fields: Array<string>, params: Object = {}): BusinessVideo {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
