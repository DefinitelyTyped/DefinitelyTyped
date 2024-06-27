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
import Profile from './profile';

/**
 * Comment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Comment extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      admin_creator: 'admin_creator',
      application: 'application',
      attachment: 'attachment',
      can_comment: 'can_comment',
      can_hide: 'can_hide',
      can_like: 'can_like',
      can_remove: 'can_remove',
      can_reply_privately: 'can_reply_privately',
      comment_count: 'comment_count',
      created_time: 'created_time',
      from: 'from',
      id: 'id',
      is_hidden: 'is_hidden',
      is_private: 'is_private',
      like_count: 'like_count',
      live_broadcast_timestamp: 'live_broadcast_timestamp',
      message: 'message',
      message_tags: 'message_tags',
      object: 'object',
      parent: 'parent',
      permalink_url: 'permalink_url',
      private_reply_conversation: 'private_reply_conversation',
      user_likes: 'user_likes',
    });
  }

  static get Order () {
    return Object.freeze({
      chronological: 'chronological',
      reverse_chronological: 'reverse_chronological',
    });
  }
  static get CommentPrivacyValue () {
    return Object.freeze({
      declined_by_admin_assistant: 'DECLINED_BY_ADMIN_ASSISTANT',
      default_privacy: 'DEFAULT_PRIVACY',
      friends_and_post_owner: 'FRIENDS_AND_POST_OWNER',
      friends_only: 'FRIENDS_ONLY',
      graphql_multiple_value_hack_do_not_use: 'GRAPHQL_MULTIPLE_VALUE_HACK_DO_NOT_USE',
      owner_or_commenter: 'OWNER_OR_COMMENTER',
      pending_approval: 'PENDING_APPROVAL',
      removed_by_admin_assistant: 'REMOVED_BY_ADMIN_ASSISTANT',
      side_conversation: 'SIDE_CONVERSATION',
      side_conversation_and_post_owner: 'SIDE_CONVERSATION_AND_POST_OWNER',
      spotlight_tab: 'SPOTLIGHT_TAB',
    });
  }
  static get Filter () {
    return Object.freeze({
      stream: 'stream',
      toplevel: 'toplevel',
    });
  }
  static get LiveFilter () {
    return Object.freeze({
      filter_low_quality: 'filter_low_quality',
      no_filter: 'no_filter',
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

  createComment (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Comment> {
    return this.createEdge(
      '/comments',
      fields,
      params,
      Comment,
      pathOverride,
    );
  }

  deleteLikes (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/likes',
      params
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

  createLike (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Comment> {
    return this.createEdge(
      '/likes',
      fields,
      params,
      Comment,
      pathOverride,
    );
  }

  getReactions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/reactions'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }


  get (fields: Array<string>, params: Object = {}): Comment {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): Comment {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
