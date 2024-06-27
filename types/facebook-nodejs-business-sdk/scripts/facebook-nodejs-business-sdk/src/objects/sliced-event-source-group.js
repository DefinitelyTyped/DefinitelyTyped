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
 * SlicedEventSourceGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SlicedEventSourceGroup extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      event_source_group: 'event_source_group',
      filter: 'filter',
      id: 'id',
      name: 'name',
    });
  }



  get (fields: Array<string>, params: Object = {}): SlicedEventSourceGroup {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
