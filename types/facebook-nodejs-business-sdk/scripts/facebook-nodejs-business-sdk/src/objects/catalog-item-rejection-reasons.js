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
 * CatalogItemRejectionReasons
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogItemRejectionReasons extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      capability: 'capability',
      rejection_information: 'rejection_information',
    });
  }

  static get Capability () {
    return Object.freeze({
      business_inbox_in_messenger: 'business_inbox_in_messenger',
      shops: 'shops',
      test_capability: 'test_capability',
      universal_checkout: 'universal_checkout',
      us_marketplace: 'us_marketplace',
    });
  }
}
