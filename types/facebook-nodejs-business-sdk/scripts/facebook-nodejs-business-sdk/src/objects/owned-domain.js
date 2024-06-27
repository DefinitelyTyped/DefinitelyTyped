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
 * OwnedDomain
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OwnedDomain extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      domain_name: 'domain_name',
      id: 'id',
      owner_business: 'owner_business',
      status: 'status',
      verification_code: 'verification_code',
    });
  }



  get (fields: Array<string>, params: Object = {}): OwnedDomain {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
