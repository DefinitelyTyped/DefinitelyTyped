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
 * ExtendedCreditInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCreditInfo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      credit_left: 'credit_left',
      credit_revoked: 'credit_revoked',
      credit_used: 'credit_used',
      using_biz_ec: 'using_biz_ec',
    });
  }

}
