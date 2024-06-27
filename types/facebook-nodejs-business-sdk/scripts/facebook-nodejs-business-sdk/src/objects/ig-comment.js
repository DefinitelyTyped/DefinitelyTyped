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
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';

/**
 * IGComment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGComment extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      from: 'from',
      hidden: 'hidden',
      id: 'id',
      like_count: 'like_count',
      media: 'media',
      parent_id: 'parent_id',
      text: 'text',
      timestamp: 'timestamp',
      user: 'user',
      username: 'username',
    });
  }


  getReplies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGComment,
      fields,
      params,
      fetchFirstPage,
      '/replies'
    );
  }

  createReply (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<IGComment> {
    return this.createEdge(
      '/replies',
      fields,
      params,
      IGComment,
      pathOverride,
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }


  get (fields: Array<string>, params: Object = {}): IGComment {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): IGComment {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
