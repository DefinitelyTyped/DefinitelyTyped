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
 * AndroidAppLink
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AndroidAppLink extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      app_name: 'app_name',
      class: 'class',
      package: 'package',
      url: 'url',
    });
  }

}
