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
 * PrivateComputationEnvironment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PrivateComputationEnvironment extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      publisher_account_id: 'publisher_account_id',
      publisher_pce_deployment_status: 'publisher_pce_deployment_status',
      publisher_pce_id: 'publisher_pce_id',
      publisher_region: 'publisher_region',
      publisher_vpc_id: 'publisher_vpc_id',
      id: 'id',
    });
  }



  get (fields: Array<string>, params: Object = {}): PrivateComputationEnvironment {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
