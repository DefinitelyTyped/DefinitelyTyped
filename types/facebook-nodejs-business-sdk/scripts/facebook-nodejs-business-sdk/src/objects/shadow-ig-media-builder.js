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
 * ShadowIGMediaBuilder
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGMediaBuilder extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      copyright_check_status: 'copyright_check_status',
      id: 'id',
      status: 'status',
      status_code: 'status_code',
      video_status: 'video_status',
    });
  }



  get (fields: Array<string>, params: Object = {}): ShadowIGMediaBuilder {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
