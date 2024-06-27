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
 * LinkedInstagramAccountData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LinkedInstagramAccountData extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      access_token: 'access_token',
      analytics_claim: 'analytics_claim',
      full_name: 'full_name',
      profile_picture_url: 'profile_picture_url',
      user_id: 'user_id',
      user_name: 'user_name',
    });
  }

}
