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
 * AdsReportBuilderExportCore
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsReportBuilderExportCore extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      async_percent_completion: 'async_percent_completion',
      async_report_url: 'async_report_url',
      async_status: 'async_status',
      client_creation_value: 'client_creation_value',
      expiry_time: 'expiry_time',
      export_download_time: 'export_download_time',
      export_format: 'export_format',
      export_name: 'export_name',
      export_type: 'export_type',
      has_seen: 'has_seen',
      id: 'id',
      is_sharing: 'is_sharing',
      link_sharing_expiration_time: 'link_sharing_expiration_time',
      link_sharing_uri: 'link_sharing_uri',
      time_completed: 'time_completed',
      time_start: 'time_start',
    });
  }



  get (fields: Array<string>, params: Object = {}): AdsReportBuilderExportCore {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
