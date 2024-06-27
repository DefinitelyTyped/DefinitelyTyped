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
 * EntWithSponsor
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EntWithSponsor extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      owner_linked_instagram_user_v1_id: 'owner_linked_instagram_user_v1_id',
      owner_picture: 'owner_picture',
      post_id: 'post_id',
      post_info: 'post_info',
    });
  }

}
