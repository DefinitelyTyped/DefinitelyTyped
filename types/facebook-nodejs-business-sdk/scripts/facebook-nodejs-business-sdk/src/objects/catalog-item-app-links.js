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
 * CatalogItemAppLinks
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogItemAppLinks extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      android: 'android',
      ios: 'ios',
      ipad: 'ipad',
      iphone: 'iphone',
      web: 'web',
      windows: 'windows',
      windows_phone: 'windows_phone',
      windows_universal: 'windows_universal',
    });
  }

}
