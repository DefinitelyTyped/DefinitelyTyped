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
import Album from './album';
import Event from './event';
import Post from './post';
import LiveVideo from './live-video';
import User from './user';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
import AdVideo from './ad-video';

/**
 * Group
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Group extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      archived: 'archived',
      cover: 'cover',
      created_time: 'created_time',
      description: 'description',
      email: 'email',
      icon: 'icon',
      id: 'id',
      install: 'install',
      link: 'link',
      member_count: 'member_count',
      member_request_count: 'member_request_count',
      name: 'name',
      parent: 'parent',
      permissions: 'permissions',
      privacy: 'privacy',
      purpose: 'purpose',
      subdomain: 'subdomain',
      updated_time: 'updated_time',
      venue: 'venue',
    });
  }

  static get JoinSetting () {
    return Object.freeze({
      admin_only: 'ADMIN_ONLY',
      anyone: 'ANYONE',
      none: 'NONE',
    });
  }
  static get PostPermissions () {
    return Object.freeze({
      admin_only: 'ADMIN_ONLY',
      anyone: 'ANYONE',
      none: 'NONE',
    });
  }
  static get Purpose () {
    return Object.freeze({
      casual: 'CASUAL',
      coworkers: 'COWORKERS',
      custom: 'CUSTOM',
      for_sale: 'FOR_SALE',
      for_work: 'FOR_WORK',
      game: 'GAME',
      health_support: 'HEALTH_SUPPORT',
      jobs: 'JOBS',
      learning: 'LEARNING',
      none: 'NONE',
      parenting: 'PARENTING',
      streamer: 'STREAMER',
      work_announcement: 'WORK_ANNOUNCEMENT',
      work_demo_group: 'WORK_DEMO_GROUP',
      work_discussion: 'WORK_DISCUSSION',
      work_ephemeral: 'WORK_EPHEMERAL',
      work_feedback: 'WORK_FEEDBACK',
      work_for_sale: 'WORK_FOR_SALE',
      work_garden: 'WORK_GARDEN',
      work_integrity: 'WORK_INTEGRITY',
      work_learning: 'WORK_LEARNING',
      work_mentorship: 'WORK_MENTORSHIP',
      work_multi_company: 'WORK_MULTI_COMPANY',
      work_recruiting: 'WORK_RECRUITING',
      work_social: 'WORK_SOCIAL',
      work_stages: 'WORK_STAGES',
      work_team: 'WORK_TEAM',
      work_teamwork: 'WORK_TEAMWORK',
    });
  }
  static get GroupType () {
    return Object.freeze({
      casual: 'CASUAL',
      coworkers: 'COWORKERS',
      custom: 'CUSTOM',
      for_sale: 'FOR_SALE',
      for_work: 'FOR_WORK',
      game: 'GAME',
      health_support: 'HEALTH_SUPPORT',
      jobs: 'JOBS',
      learning: 'LEARNING',
      none: 'NONE',
      parenting: 'PARENTING',
      streamer: 'STREAMER',
      work_announcement: 'WORK_ANNOUNCEMENT',
      work_demo_group: 'WORK_DEMO_GROUP',
      work_discussion: 'WORK_DISCUSSION',
      work_ephemeral: 'WORK_EPHEMERAL',
      work_feedback: 'WORK_FEEDBACK',
      work_for_sale: 'WORK_FOR_SALE',
      work_garden: 'WORK_GARDEN',
      work_integrity: 'WORK_INTEGRITY',
      work_learning: 'WORK_LEARNING',
      work_mentorship: 'WORK_MENTORSHIP',
      work_multi_company: 'WORK_MULTI_COMPANY',
      work_recruiting: 'WORK_RECRUITING',
      work_social: 'WORK_SOCIAL',
      work_stages: 'WORK_STAGES',
      work_team: 'WORK_TEAM',
      work_teamwork: 'WORK_TEAMWORK',
    });
  }

  deleteAdMIns (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/admins',
      params
    );
  }

  createAdMIn (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Group> {
    return this.createEdge(
      '/admins',
      fields,
      params,
      Group,
      pathOverride,
    );
  }

  getAlbums (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Album,
      fields,
      params,
      fetchFirstPage,
      '/albums'
    );
  }

  createAlbum (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Album> {
    return this.createEdge(
      '/albums',
      fields,
      params,
      Album,
      pathOverride,
    );
  }

  getDocs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/docs'
    );
  }

  getEvents (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Event,
      fields,
      params,
      fetchFirstPage,
      '/events'
    );
  }

  getFeed (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Post,
      fields,
      params,
      fetchFirstPage,
      '/feed'
    );
  }

  createFeed (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Post> {
    return this.createEdge(
      '/feed',
      fields,
      params,
      Post,
      pathOverride,
    );
  }

  getFiles (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/files'
    );
  }

  getGroups (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Group,
      fields,
      params,
      fetchFirstPage,
      '/groups'
    );
  }

  createGroup (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Group> {
    return this.createEdge(
      '/groups',
      fields,
      params,
      Group,
      pathOverride,
    );
  }

  getLiveVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      LiveVideo,
      fields,
      params,
      fetchFirstPage,
      '/live_videos'
    );
  }

  createLiveVideo (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<LiveVideo> {
    return this.createEdge(
      '/live_videos',
      fields,
      params,
      LiveVideo,
      pathOverride,
    );
  }

  deleteMembers (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/members',
      params
    );
  }

  createMember (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Group> {
    return this.createEdge(
      '/members',
      fields,
      params,
      Group,
      pathOverride,
    );
  }

  getOptedInMembers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/opted_in_members'
    );
  }

  createPhoto (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Photo> {
    return this.createEdge(
      '/photos',
      fields,
      params,
      Photo,
      pathOverride,
    );
  }

  getPicture (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  getVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/videos'
    );
  }

  createVideo (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdVideo> {
    return this.createEdge(
      '/videos',
      fields,
      params,
      AdVideo,
      pathOverride,
    );
  }


  get (fields: Array<string>, params: Object = {}): Group {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): Group {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
