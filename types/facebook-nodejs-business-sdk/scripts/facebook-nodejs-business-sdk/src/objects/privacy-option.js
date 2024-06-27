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
 * PrivacyOption
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PrivacyOption extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      description: 'description',
      icon_src: 'icon_src',
      id: 'id',
      is_currently_selected: 'is_currently_selected',
      type: 'type',
      user_id: 'user_id',
    });
  }

}
