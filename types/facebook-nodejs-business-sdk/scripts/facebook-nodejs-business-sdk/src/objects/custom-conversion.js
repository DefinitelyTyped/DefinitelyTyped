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
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import CustomConversionStatsResult from './custom-conversion-stats-result';

/**
 * CustomConversion
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomConversion extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      aggregation_rule: 'aggregation_rule',
      business: 'business',
      creation_time: 'creation_time',
      custom_event_type: 'custom_event_type',
      data_sources: 'data_sources',
      default_conversion_value: 'default_conversion_value',
      description: 'description',
      event_source_type: 'event_source_type',
      first_fired_time: 'first_fired_time',
      id: 'id',
      is_archived: 'is_archived',
      is_unavailable: 'is_unavailable',
      last_fired_time: 'last_fired_time',
      name: 'name',
      offline_conversion_data_set: 'offline_conversion_data_set',
      pixel: 'pixel',
      retention_days: 'retention_days',
      rule: 'rule',
    });
  }

  static get CustomEventType () {
    return Object.freeze({
      add_payment_info: 'ADD_PAYMENT_INFO',
      add_to_cart: 'ADD_TO_CART',
      add_to_wishlist: 'ADD_TO_WISHLIST',
      complete_registration: 'COMPLETE_REGISTRATION',
      contact: 'CONTACT',
      content_view: 'CONTENT_VIEW',
      customize_product: 'CUSTOMIZE_PRODUCT',
      donate: 'DONATE',
      facebook_selected: 'FACEBOOK_SELECTED',
      find_location: 'FIND_LOCATION',
      initiated_checkout: 'INITIATED_CHECKOUT',
      lead: 'LEAD',
      listing_interaction: 'LISTING_INTERACTION',
      other: 'OTHER',
      purchase: 'PURCHASE',
      schedule: 'SCHEDULE',
      search: 'SEARCH',
      start_trial: 'START_TRIAL',
      submit_application: 'SUBMIT_APPLICATION',
      subscribe: 'SUBSCRIBE',
    });
  }
  static get ActionSourceType () {
    return Object.freeze({
      app: 'app',
      business_messaging: 'business_messaging',
      chat: 'chat',
      email: 'email',
      other: 'other',
      phone_call: 'phone_call',
      physical_store: 'physical_store',
      system_generated: 'system_generated',
      website: 'website',
    });
  }

  getStats (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CustomConversionStatsResult,
      fields,
      params,
      fetchFirstPage,
      '/stats'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }


  get (fields: Array<string>, params: Object = {}): CustomConversion {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): CustomConversion {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
