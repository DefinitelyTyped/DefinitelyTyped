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
 * BusinessCreativeFolder
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessCreativeFolder extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      creation_time: 'creation_time',
      creative_insight_permissions: 'creative_insight_permissions',
      description: 'description',
      id: 'id',
      media_library_url: 'media_library_url',
      name: 'name',
      owner_business: 'owner_business',
    });
  }



  get (fields: Array<string>, params: Object = {}): BusinessCreativeFolder {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
