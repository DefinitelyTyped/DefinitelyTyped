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
 * AdsReportBuilderMMMReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsReportBuilderMMMReport extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      async_status: 'async_status',
      export_format: 'export_format',
      export_name: 'export_name',
      export_type: 'export_type',
      has_seen: 'has_seen',
      id: 'id',
      mmm_status: 'mmm_status',
      time_start: 'time_start',
    });
  }



  get (fields: Array<string>, params: Object = {}): AdsReportBuilderMMMReport {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
