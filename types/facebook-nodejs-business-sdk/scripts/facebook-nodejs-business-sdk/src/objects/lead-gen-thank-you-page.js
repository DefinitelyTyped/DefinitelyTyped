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
 * LeadGenThankYouPage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenThankYouPage extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      body: 'body',
      business_phone_number: 'business_phone_number',
      button_text: 'button_text',
      button_type: 'button_type',
      country_code: 'country_code',
      enable_messenger: 'enable_messenger',
      id: 'id',
      lead_gen_use_case: 'lead_gen_use_case',
      status: 'status',
      title: 'title',
      website_url: 'website_url',
    });
  }

}
