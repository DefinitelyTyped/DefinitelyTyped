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
 * LeadGenDirectCRMIntegrationConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenDirectCRMIntegrationConfig extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      auth_id: 'auth_id',
      creation_time: 'creation_time',
      id: 'id',
      lead_gen_data: 'lead_gen_data',
      matched_fields: 'matched_fields',
      matched_fields_labels: 'matched_fields_labels',
      resources: 'resources',
      third_party_app_id: 'third_party_app_id',
    });
  }



  get (fields: Array<string>, params: Object = {}): LeadGenDirectCRMIntegrationConfig {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
