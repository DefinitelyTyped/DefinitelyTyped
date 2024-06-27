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
 * AppPublisher
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AppPublisher extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      content_id: 'content_id',
      icon_url: 'icon_url',
      id: 'id',
      name: 'name',
      platform: 'platform',
      store_name: 'store_name',
      store_url: 'store_url',
    });
  }

}
