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
 * CanvasTemplate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CanvasTemplate extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      channels: 'channels',
      description: 'description',
      document: 'document',
      id: 'id',
      is_multi_tab_supportable: 'is_multi_tab_supportable',
      is_new: 'is_new',
      name: 'name',
      objectives: 'objectives',
      owner_id: 'owner_id',
      required_capabilities: 'required_capabilities',
      snapshot_photo: 'snapshot_photo',
      status: 'status',
      sub_verticals: 'sub_verticals',
      verticals: 'verticals',
    });
  }



  get (fields: Array<string>, params: Object = {}): CanvasTemplate {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
