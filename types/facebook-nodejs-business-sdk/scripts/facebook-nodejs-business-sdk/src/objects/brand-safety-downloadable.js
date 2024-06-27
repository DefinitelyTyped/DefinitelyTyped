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
 * BrandSafetyDownloadable
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BrandSafetyDownloadable extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_context_id: 'account_context_id',
      async_job_percent_complete: 'async_job_percent_complete',
      async_job_status: 'async_job_status',
      file_name: 'file_name',
      id: 'id',
      request_surface: 'request_surface',
      url: 'url',
    });
  }



  get (fields: Array<string>, params: Object = {}): BrandSafetyDownloadable {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
