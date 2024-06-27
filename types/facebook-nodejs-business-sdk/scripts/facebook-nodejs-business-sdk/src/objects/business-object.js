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
 * BusinessObject
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessObject extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      asset: 'asset',
      asset_type: 'asset_type',
      id: 'id',
      name: 'name',
      picture: 'picture',
    });
  }

}
