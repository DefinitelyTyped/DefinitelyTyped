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
 * PanelAPIReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PanelAPIReport extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      checksum: 'checksum',
      download_url: 'download_url',
      end_date: 'end_date',
      export_file_type: 'export_file_type',
      id: 'id',
      index: 'index',
      name: 'name',
      number_of_chunks: 'number_of_chunks',
      start_date: 'start_date',
      upload_date: 'upload_date',
    });
  }



  get (fields: Array<string>, params: Object = {}): PanelAPIReport {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
