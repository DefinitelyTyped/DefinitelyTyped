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
 * Status
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Status extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      event: 'event',
      from: 'from',
      id: 'id',
      message: 'message',
      place: 'place',
      updated_time: 'updated_time',
    });
  }


  createLike (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Status> {
    return this.createEdge(
      '/likes',
      fields,
      params,
      Status,
      pathOverride,
    );
  }


  get (fields: Array<string>, params: Object = {}): Status {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
