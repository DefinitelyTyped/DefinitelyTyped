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
 * AdAccountIosFourteenCampaignLimits
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountIosFourteenCampaignLimits extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      campaign_group_limit: 'campaign_group_limit',
      campaign_group_limits_details: 'campaign_group_limits_details',
      campaign_limit: 'campaign_limit',
    });
  }

}
