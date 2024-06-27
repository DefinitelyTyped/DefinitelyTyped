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
import ProfilePictureSource from './profile-picture-source';

/**
 * Profile
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Profile extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      can_post: 'can_post',
      id: 'id',
      link: 'link',
      name: 'name',
      pic: 'pic',
      pic_crop: 'pic_crop',
      pic_large: 'pic_large',
      pic_small: 'pic_small',
      pic_square: 'pic_square',
      profile_type: 'profile_type',
      username: 'username',
    });
  }

  static get ProfileType () {
    return Object.freeze({
      application: 'application',
      event: 'event',
      group: 'group',
      page: 'page',
      user: 'user',
    });
  }
  static get Type () {
    return Object.freeze({
      angry: 'ANGRY',
      care: 'CARE',
      fire: 'FIRE',
      haha: 'HAHA',
      hundred: 'HUNDRED',
      like: 'LIKE',
      love: 'LOVE',
      none: 'NONE',
      pride: 'PRIDE',
      sad: 'SAD',
      thankful: 'THANKFUL',
      wow: 'WOW',
    });
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


  get (fields: Array<string>, params: Object = {}): Profile {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
