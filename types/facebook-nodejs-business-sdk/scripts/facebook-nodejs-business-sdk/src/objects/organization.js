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
 * Organization
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Organization extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      hq_country: 'hq_country',
      id: 'id',
      legal_entity_name: 'legal_entity_name',
      master_bm_id: 'master_bm_id',
      owner_business: 'owner_business',
    });
  }



  get (fields: Array<string>, params: Object = {}): Organization {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
