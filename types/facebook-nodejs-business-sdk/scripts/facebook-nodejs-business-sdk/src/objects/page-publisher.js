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
 * PagePublisher
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PagePublisher extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      global_parent_id: 'global_parent_id',
      icon: 'icon',
      id: 'id',
      name: 'name',
      url: 'url',
    });
  }

}
