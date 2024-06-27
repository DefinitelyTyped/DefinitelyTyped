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
 * VideoMetricsReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoMetricsReport extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      checksum: 'checksum',
      chunks: 'chunks',
      end_date: 'end_date',
      id: 'id',
      index: 'index',
      name: 'name',
      platform: 'platform',
      start_date: 'start_date',
      type: 'type',
      upload_date: 'upload_date',
      url: 'url',
    });
  }



  get (fields: Array<string>, params: Object = {}): VideoMetricsReport {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
