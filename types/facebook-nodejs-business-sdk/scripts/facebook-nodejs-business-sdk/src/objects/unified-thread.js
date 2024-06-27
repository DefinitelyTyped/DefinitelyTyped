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
 * UnifiedThread
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UnifiedThread extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      can_reply: 'can_reply',
      folder: 'folder',
      former_participants: 'former_participants',
      id: 'id',
      is_subscribed: 'is_subscribed',
      link: 'link',
      linked_group: 'linked_group',
      message_count: 'message_count',
      name: 'name',
      participants: 'participants',
      scoped_thread_key: 'scoped_thread_key',
      senders: 'senders',
      snippet: 'snippet',
      subject: 'subject',
      unread_count: 'unread_count',
      updated_time: 'updated_time',
      wallpaper: 'wallpaper',
    });
  }

  static get Platform () {
    return Object.freeze({
      instagram: 'INSTAGRAM',
      messenger: 'MESSENGER',
    });
  }

  getMessages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/messages'
    );
  }


  get (fields: Array<string>, params: Object = {}): UnifiedThread {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
