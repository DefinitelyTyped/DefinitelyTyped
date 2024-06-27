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
 * BusinessObjectTransferOwnershipAgreement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessObjectTransferOwnershipAgreement extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      receiving_business: 'receiving_business',
      requesting_business: 'requesting_business',
      status: 'status',
    });
  }



  get (fields: Array<string>, params: Object = {}): BusinessObjectTransferOwnershipAgreement {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
