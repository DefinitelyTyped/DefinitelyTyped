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
 * ProductItemImporterAddress
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemImporterAddress extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      city: 'city',
      country: 'country',
      postal_code: 'postal_code',
      region: 'region',
      street1: 'street1',
      street2: 'street2',
    });
  }

}
