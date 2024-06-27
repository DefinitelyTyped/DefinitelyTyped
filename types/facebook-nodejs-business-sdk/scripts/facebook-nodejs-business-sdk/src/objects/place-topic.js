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
 * PlaceTopic
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PlaceTopic extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      count: 'count',
      has_children: 'has_children',
      icon_url: 'icon_url',
      id: 'id',
      name: 'name',
      parent_ids: 'parent_ids',
      plural_name: 'plural_name',
      top_subtopic_names: 'top_subtopic_names',
    });
  }



  get (fields: Array<string>, params: Object = {}): PlaceTopic {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
