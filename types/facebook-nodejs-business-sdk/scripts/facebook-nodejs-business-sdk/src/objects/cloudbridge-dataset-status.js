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
 * CloudbridgeDatasetStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CloudbridgeDatasetStatus extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      app_redacted_event: 'app_redacted_event',
      app_sensitive_params: 'app_sensitive_params',
      app_unverified_event: 'app_unverified_event',
      has_app_associated: 'has_app_associated',
      is_app_prohibited: 'is_app_prohibited',
      is_dataset: 'is_dataset',
    });
  }

}
