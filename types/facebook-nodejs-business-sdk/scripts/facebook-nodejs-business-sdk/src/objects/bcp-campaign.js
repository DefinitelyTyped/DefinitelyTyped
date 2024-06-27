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
 * BCPCampaign
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BCPCampaign extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ads_permission_required: 'ads_permission_required',
      application_deadline: 'application_deadline',
      campaign_goal: 'campaign_goal',
      campaign_goal_other: 'campaign_goal_other',
      content_delivery_deadline: 'content_delivery_deadline',
      content_delivery_start_date: 'content_delivery_start_date',
      content_requirements: 'content_requirements',
      content_requirements_description: 'content_requirements_description',
      currency: 'currency',
      deal_negotiation_type: 'deal_negotiation_type',
      description: 'description',
      has_free_product: 'has_free_product',
      id: 'id',
      name: 'name',
      payment_amount_for_ads: 'payment_amount_for_ads',
      payment_amount_for_content: 'payment_amount_for_content',
      payment_description: 'payment_description',
    });
  }



  get (fields: Array<string>, params: Object = {}): BCPCampaign {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
