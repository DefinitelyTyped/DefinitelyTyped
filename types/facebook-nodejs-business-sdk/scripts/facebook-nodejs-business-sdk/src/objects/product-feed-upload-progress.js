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
 * ProductFeedUploadProgress
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedUploadProgress extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      pos: 'pos',
      size: 'size',
      step: 'step',
      unit: 'unit',
      updated_time: 'updated_time',
    });
  }

}
