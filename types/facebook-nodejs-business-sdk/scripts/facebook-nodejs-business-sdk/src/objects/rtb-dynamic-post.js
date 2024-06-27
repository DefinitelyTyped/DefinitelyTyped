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
import Cursor from './../cursor';
import Comment from './comment';
import Profile from './profile';

/**
 * RTBDynamicPost
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RTBDynamicPost extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      child_attachments: 'child_attachments',
      created: 'created',
      description: 'description',
      id: 'id',
      image_url: 'image_url',
      link: 'link',
      message: 'message',
      owner_id: 'owner_id',
      place_id: 'place_id',
      product_id: 'product_id',
      title: 'title',
    });
  }


  getComments (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Comment,
      fields,
      params,
      fetchFirstPage,
      '/comments'
    );
  }

  getLikes (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/likes'
    );
  }


  get (fields: Array<string>, params: Object = {}): RTBDynamicPost {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
