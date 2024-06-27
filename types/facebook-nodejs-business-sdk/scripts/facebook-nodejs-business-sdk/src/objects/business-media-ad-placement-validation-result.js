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
 * BusinessMediaAdPlacementValidationResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessMediaAdPlacementValidationResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_placement: 'ad_placement',
      ad_placement_label: 'ad_placement_label',
      error_messages: 'error_messages',
      is_valid: 'is_valid',
    });
  }

}
