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
 * AdCreativeLinkDataCallToActionValue
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataCallToActionValue extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      app_destination: 'app_destination',
      app_link: 'app_link',
      application: 'application',
      event_id: 'event_id',
      lead_gen_form_id: 'lead_gen_form_id',
      link: 'link',
      link_caption: 'link_caption',
      link_format: 'link_format',
      page: 'page',
      product_link: 'product_link',
      whatsapp_number: 'whatsapp_number',
    });
  }

}
