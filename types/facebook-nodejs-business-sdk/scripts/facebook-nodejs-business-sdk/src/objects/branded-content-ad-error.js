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
 * BrandedContentAdError
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BrandedContentAdError extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      blame_field_spec: 'blame_field_spec',
      error_code: 'error_code',
      error_description: 'error_description',
      error_message: 'error_message',
      error_placement: 'error_placement',
      error_severity: 'error_severity',
      help_center_id: 'help_center_id',
    });
  }

}
