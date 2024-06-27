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
 * ArAdsDataContainer
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ArAdsDataContainer extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      camera_facing_override: 'camera_facing_override',
      creation_time: 'creation_time',
      effect: 'effect',
      id: 'id',
      is_published: 'is_published',
      last_modified_time: 'last_modified_time',
      name: 'name',
    });
  }



  get (fields: Array<string>, params: Object = {}): ArAdsDataContainer {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
