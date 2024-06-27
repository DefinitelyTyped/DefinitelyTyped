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
 * ReportingAudience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReportingAudience extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      custom_audiences: 'custom_audiences',
      custom_audiences_url_param_name: 'custom_audiences_url_param_name',
      custom_audiences_url_param_type: 'custom_audiences_url_param_type',
    });
  }

}
