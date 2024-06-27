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
 * PageCTSTopic
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageCTSTopic extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      app_id: 'app_id',
      frequency: 'frequency',
      image_hash: 'image_hash',
      image_url: 'image_url',
      subscriber: 'subscriber',
      title: 'title',
    });
  }

}
