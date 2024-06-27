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
 * AdsImageCrops
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsImageCrops extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      value_100x100: '100x100',
      value_100x72: '100x72',
      value_191x100: '191x100',
      value_400x150: '400x150',
      value_400x500: '400x500',
      value_600x360: '600x360',
      value_90x160: '90x160',
    });
  }

}
