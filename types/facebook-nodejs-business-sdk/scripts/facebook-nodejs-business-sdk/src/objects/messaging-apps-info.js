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
 * MessagingAppsInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessagingAppsInfo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      has_instagram_messaging_permission: 'has_instagram_messaging_permission',
      has_messenger_messaging_permission: 'has_messenger_messaging_permission',
      id: 'id',
      name: 'name',
    });
  }

}
