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
 * AdCreationPackageConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreationPackageConfig extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      api_version: 'api_version',
      id: 'id',
      is_eligible_for_default_opt_in: 'is_eligible_for_default_opt_in',
      objective: 'objective',
      package_id: 'package_id',
      status: 'status',
    });
  }



  get (fields: Array<string>, params: Object = {}): AdCreationPackageConfig {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
