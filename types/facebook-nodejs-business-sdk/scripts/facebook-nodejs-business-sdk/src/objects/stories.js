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
 * Stories
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Stories extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      creation_time: 'creation_time',
      media_id: 'media_id',
      media_type: 'media_type',
      post_id: 'post_id',
      status: 'status',
      url: 'url',
    });
  }

  static get Status () {
    return Object.freeze({
      archived: 'ARCHIVED',
      published: 'PUBLISHED',
    });
  }
}
