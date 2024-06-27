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
 * AudienceSharingRecipientAccounts
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudienceSharingRecipientAccounts extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      account_name: 'account_name',
      account_type: 'account_type',
      business_id: 'business_id',
      business_name: 'business_name',
      can_ad_account_use_lookalike_container: 'can_ad_account_use_lookalike_container',
      sharing_agreement_status: 'sharing_agreement_status',
    });
  }

}
