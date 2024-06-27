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
 * PrivateLiftStudyInstance
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PrivateLiftStudyInstance extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      breakdown_key: 'breakdown_key',
      created_time: 'created_time',
      feature_list: 'feature_list',
      id: 'id',
      issuer_certificate: 'issuer_certificate',
      latest_status_update_time: 'latest_status_update_time',
      run_id: 'run_id',
      server_hostnames: 'server_hostnames',
      server_ips: 'server_ips',
      status: 'status',
      tier: 'tier',
    });
  }

  static get Operation () {
    return Object.freeze({
      aggregate: 'AGGREGATE',
      cancel: 'CANCEL',
      compute: 'COMPUTE',
      id_match: 'ID_MATCH',
      next: 'NEXT',
      none: 'NONE',
    });
  }


  get (fields: Array<string>, params: Object = {}): PrivateLiftStudyInstance {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): PrivateLiftStudyInstance {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
