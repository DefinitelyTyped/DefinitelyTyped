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
 * AdsSignalDiagnosticIssue
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsSignalDiagnosticIssue extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      data_source_id: 'data_source_id',
      data_source_type: 'data_source_type',
      diagnostic_type: 'diagnostic_type',
      event_name: 'event_name',
      traffic_anomaly_drop_percentage: 'traffic_anomaly_drop_percentage',
      traffic_anomaly_drop_timestamp: 'traffic_anomaly_drop_timestamp',
    });
  }

}
