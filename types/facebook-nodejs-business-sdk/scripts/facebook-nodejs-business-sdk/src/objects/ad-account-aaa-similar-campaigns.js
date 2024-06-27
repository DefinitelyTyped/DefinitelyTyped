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
 * AdAccountAAASimilarCampaigns
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAAASimilarCampaigns extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      similar_campaign_limit: 'similar_campaign_limit',
      similar_campaigns_info: 'similar_campaigns_info',
      used_campaign_slots: 'used_campaign_slots',
    });
  }

}
