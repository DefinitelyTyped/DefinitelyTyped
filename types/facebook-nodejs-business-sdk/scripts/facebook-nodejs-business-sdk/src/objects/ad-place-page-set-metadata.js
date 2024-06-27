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
 * AdPlacePageSetMetadata
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdPlacePageSetMetadata extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      audience: 'audience',
      custom: 'custom',
      extra_data: 'extra_data',
      fixed_radius: 'fixed_radius',
    });
  }

}
