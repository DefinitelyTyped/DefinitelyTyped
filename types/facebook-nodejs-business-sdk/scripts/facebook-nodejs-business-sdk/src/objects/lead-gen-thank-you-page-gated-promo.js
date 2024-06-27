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
 * LeadGenThankYouPageGatedPromo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenThankYouPageGatedPromo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      online_offer_url: 'online_offer_url',
      online_promo_code: 'online_promo_code',
    });
  }

}
