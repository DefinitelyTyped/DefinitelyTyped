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
 * MailingAddress
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MailingAddress extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      city: 'city',
      city_page: 'city_page',
      country: 'country',
      id: 'id',
      postal_code: 'postal_code',
      region: 'region',
      street1: 'street1',
      street2: 'street2',
    });
  }



  get (fields: Array<string>, params: Object = {}): MailingAddress {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
