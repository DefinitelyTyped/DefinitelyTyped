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
 * Tab
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Tab extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      application: 'application',
      custom_image_url: 'custom_image_url',
      custom_name: 'custom_name',
      id: 'id',
      image_url: 'image_url',
      is_non_connection_landing_tab: 'is_non_connection_landing_tab',
      is_permanent: 'is_permanent',
      link: 'link',
      name: 'name',
      position: 'position',
    });
  }

}
